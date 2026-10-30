'use client';

import React, { useState } from 'react';
import {
  calculateIpk,
  generateIpkShareText,
  CourseGradeItem,
  IpkCalculationResult
} from '@/lib/calculatorEngine';
import {
  Award,
  Plus,
  Trash2,
  Copy,
  Check,
  AlertTriangle,
  RotateCcw,
  Sparkles,
  BookMarked
} from 'lucide-react';

const INITIAL_COURSES: CourseGradeItem[] = [
  { id: '1', code: 'MKDU4110', name: 'Bahasa Indonesia', sks: 3, letter: 'A' },
  { id: '2', code: 'MKDU4111', name: 'Pendidikan Kewarganegaraan', sks: 3, letter: 'A-' },
  { id: '3', code: 'EKMA4116', name: 'Manajemen', sks: 3, letter: 'B' },
  { id: '4', code: 'EKMA4115', name: 'Pengantar Akuntansi', sks: 4, letter: 'B+' },
  { id: '5', code: 'ESPA4122', name: 'Matematika Ekonomi', sks: 3, letter: 'B' },
  { id: '6', code: 'MKWI4201', name: 'Bahasa Inggris', sks: 3, letter: 'A' },
];

export default function IpkCalculator() {
  const [courses, setCourses] = useState<CourseGradeItem[]>(INITIAL_COURSES);
  const [copied, setCopied] = useState<boolean>(false);

  const addCourse = () => {
    const newId = Date.now().toString();
    setCourses([
      ...courses,
      { id: newId, code: '', name: `Mata Kuliah ${courses.length + 1}`, sks: 3, letter: 'A' }
    ]);
  };

  const removeCourse = (id: string) => {
    if (courses.length <= 1) return;
    setCourses(courses.filter(c => c.id !== id));
  };

  const updateCourse = (id: string, field: keyof CourseGradeItem, value: any) => {
    setCourses(courses.map(c => {
      if (c.id === id) {
        return { ...c, [field]: value };
      }
      return c;
    }));
  };

  const resetCourses = () => {
    setCourses(INITIAL_COURSES);
  };

  const result: IpkCalculationResult = calculateIpk(courses);

  const handleCopyShare = async () => {
    const text = generateIpkShareText(result);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-colors">
      {/* Header bar */}
      <div className="bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 text-white p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                Kalkulator IPK & Predikat Kelulusan UT
              </h2>
              <p className="text-xs sm:text-sm text-emerald-100/90">
                Hitung Indeks Prestasi Semester (IPS) & Kumulatif (IPK) Skala 4.00
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={resetCourses}
            className="px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold bg-white/15 hover:bg-white/25 text-white border border-white/25 transition-all flex items-center gap-1.5 self-start sm:self-auto"
            title="Muat Ulang Contoh Mata Kuliah"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset Contoh</span>
          </button>
        </div>
      </div>

      <div className="p-5 sm:p-8 space-y-6">
        {/* Dynamic Summary Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              IPK / IPS Anda
            </span>
            <div className="text-3xl sm:text-4xl font-black text-emerald-600 dark:text-emerald-400 mt-1">
              {result.ipk.toFixed(2)}
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Skala maksimal 4.00
            </span>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Predikat Kelulusan
            </span>
            <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-1 truncate" title={result.predikat}>
              {result.predikat}
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Standar Buku Pedoman UT
            </span>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Total SKS Dihitung
            </span>
            <div className="text-3xl sm:text-4xl font-black text-slate-800 dark:text-slate-100 mt-1">
              {result.totalSks}
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              {courses.length} Mata Kuliah
            </span>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Total Bobot Mutu (M)
            </span>
            <div className="text-3xl sm:text-4xl font-black text-blue-600 dark:text-blue-400 mt-1">
              {result.totalMutu}
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              ∑ (SKS × Nilai Huruf)
            </span>
          </div>
        </div>

        {/* Warnings / Status Notice */}
        {result.hasGradeE && (
          <div className="p-4 rounded-xl bg-red-500/10 border border-red-400 dark:border-red-800 text-red-950 dark:text-red-200 text-xs sm:text-sm flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div>
              <strong className="block font-bold">PERINGATAN MATA KULIAH GAGAL (NILAI E):</strong>
              <span>Terdapat {result.countE} mata kuliah dengan nilai E. Sesuai ketentuan UT, mahasiswa tidak dapat yudisium dan predikat Cumlaude gugur selama masih ada nilai E yang belum diperbaiki.</span>
            </div>
          </div>
        )}

        {result.ipk < 2.00 && result.totalSks > 0 && (
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-400 dark:border-amber-800 text-amber-950 dark:text-amber-200 text-xs sm:text-sm flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="block font-bold">PERINGATAN EVALUASI AKADEMIK (IPK &lt; 2.00):</strong>
              <span>Batas kelulusan minimal sarjana di Universitas Terbuka adalah IPK 2.00. Anda wajib menaikkan nilai mata kuliah berpredikat D dan E.</span>
            </div>
          </div>
        )}

        {/* Course Rows Table */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
              Daftar Mata Kuliah
            </span>
            <button
              type="button"
              onClick={addCourse}
              className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>Tambah Mata Kuliah</span>
            </button>
          </div>

          <div className="space-y-2.5">
            {courses.map((course, index) => (
              <div
                key={course.id}
                className="grid grid-cols-12 gap-2 sm:gap-3 p-3 sm:p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 items-center transition-all hover:border-slate-300 dark:hover:border-slate-700"
              >
                {/* Index / Code */}
                <div className="col-span-12 sm:col-span-2">
                  <input
                    type="text"
                    value={course.code}
                    onChange={(e) => updateCourse(course.id, 'code', e.target.value.toUpperCase())}
                    placeholder="Kode MK"
                    className="w-full px-2.5 py-1.5 text-xs font-mono font-semibold rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-500 uppercase"
                  />
                </div>

                {/* Course Name */}
                <div className="col-span-12 sm:col-span-5">
                  <input
                    type="text"
                    value={course.name}
                    onChange={(e) => updateCourse(course.id, 'name', e.target.value)}
                    placeholder="Nama Mata Kuliah"
                    className="w-full px-2.5 py-1.5 text-xs sm:text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>

                {/* SKS */}
                <div className="col-span-5 sm:col-span-2">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:inline">SKS:</span>
                    <select
                      value={course.sks}
                      onChange={(e) => updateCourse(course.id, 'sks', Number(e.target.value))}
                      className="w-full px-2 py-1.5 text-xs font-semibold rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    >
                      <option value="1">1 SKS</option>
                      <option value="2">2 SKS</option>
                      <option value="3">3 SKS</option>
                      <option value="4">4 SKS</option>
                      <option value="6">6 SKS</option>
                    </select>
                  </div>
                </div>

                {/* Nilai Huruf */}
                <div className="col-span-5 sm:col-span-2">
                  <select
                    value={course.letter}
                    onChange={(e) => updateCourse(course.id, 'letter', e.target.value)}
                    className="w-full px-2 py-1.5 text-xs font-bold rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  >
                    <option value="A">A (4.00)</option>
                    <option value="A-">A- (3.50)</option>
                    <option value="B">B (3.00)</option>
                    <option value="B-">B- (2.50)</option>
                    <option value="C">C (2.00)</option>
                    <option value="D">D (1.00)</option>
                    <option value="E">E (0.00)</option>
                  </select>
                </div>

                {/* Delete button */}
                <div className="col-span-2 sm:col-span-1 text-right">
                  <button
                    type="button"
                    onClick={() => removeCourse(course.id)}
                    disabled={courses.length <= 1}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-slate-800 transition-colors disabled:opacity-30 disabled:pointer-events-none"
                    title="Hapus Baris"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2 flex justify-between items-center">
            <button
              type="button"
              onClick={addCourse}
              className="px-3 py-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              <span>Tambah Baris Mata Kuliah Lainnya</span>
            </button>
          </div>
        </div>

        {/* Share Action */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 rounded-xl bg-slate-100/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60">
          <div className="text-xs text-slate-600 dark:text-slate-300">
            Salin ringkasan IPK ini untuk konsultasi dengan dosen pembimbing atau teman belajar:
          </div>
          <button
            type="button"
            onClick={handleCopyShare}
            className="w-full sm:w-auto px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-white" />
                <span>Rangkuman IPK Tersalin!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Salin Rekap IPK ke WhatsApp</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
