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
  MessageSquare
} from 'lucide-react';

const INITIAL_COURSES: CourseGradeItem[] = [
  { id: '1', code: 'MKDU4110', name: 'Bahasa Indonesia', sks: 3, letter: 'A' },
  { id: '2', code: 'MKDU4111', name: 'Pendidikan Kewarganegaraan', sks: 3, letter: 'A-' },
  { id: '3', code: 'EKMA4116', name: 'Manajemen', sks: 3, letter: 'B' },
  { id: '4', code: 'EKMA4115', name: 'Pengantar Akuntansi', sks: 4, letter: 'B' },
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

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(generateIpkShareText(result));
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Clean Minimal Header */}
      <div className="bg-white px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-[#0F172A]" />
            <h2 className="text-base sm:text-lg font-heading font-bold tracking-tight text-[#0F172A]">
              Kalkulator IPK &amp; Predikat Kelulusan UT
            </h2>
          </div>
          <p className="text-xs text-[#64748B] mt-0.5">
            Perhitungan Indeks Prestasi Kumulatif Skala 4.00 Resmi Buku Pedoman UT
          </p>
        </div>
        <button
          type="button"
          onClick={resetCourses}
          className="px-3 py-1.5 rounded-lg text-xs text-[#475569] hover:text-[#0F172A] border border-slate-200 hover:bg-slate-50 transition-colors flex items-center gap-1.5 self-start sm:self-auto font-medium"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Contoh</span>
        </button>
      </div>

      <div className="p-6 sm:p-8 space-y-6">
        {/* Metric Summary Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200">
            <span className="text-xs text-[#64748B] block font-semibold">
              Indeks Prestasi (IPK/IPS)
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mt-1 font-mono">
              {result.ipk.toFixed(2)}
            </div>
            <span className="text-[11px] text-[#64748B] font-medium">Skala 4.00</span>
          </div>

          <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200">
            <span className="text-xs text-[#64748B] block font-semibold">
              Predikat Kelulusan
            </span>
            <div className="text-base sm:text-lg font-bold text-[#0F172A] mt-1 truncate" title={result.predikat}>
              {result.predikat}
            </div>
            <span className="text-[11px] text-[#64748B] font-medium">Standar Yudisium UT</span>
          </div>

          <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200">
            <span className="text-xs text-[#64748B] block font-semibold">
              Total SKS Dihitung
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mt-1 font-mono">
              {result.totalSks}
            </div>
            <span className="text-[11px] text-[#64748B]">{courses.length} Mata Kuliah</span>
          </div>

          <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200">
            <span className="text-xs text-[#64748B] block font-semibold">
              Total Nilai Mutu (M)
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mt-1 font-mono">
              {result.totalMutu}
            </div>
            <span className="text-[11px] text-[#64748B]">∑ (SKS × Bobot)</span>
          </div>
        </div>

        {/* Warning alerts */}
        {result.hasGradeE && (
          <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 text-xs flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <strong>Perhatian Mata Kuliah Nilai E:</strong> Terdapat {result.countE} mata kuliah bernilai E. Ketentuan kelulusan sarjana UT mewajibkan mahasiswa tidak memiliki nilai E untuk dapat mengikuti yudisium.
            </div>
          </div>
        )}

        {/* Course Rows */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#0F172A]">
              Daftar mata kuliah semester:
            </span>
            <button
              type="button"
              onClick={addCourse}
              className="px-3.5 py-1.5 rounded-lg bg-[#0F172A] hover:bg-slate-800 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Tambah Baris</span>
            </button>
          </div>

          <div className="space-y-2">
            {courses.map((course) => (
              <div
                key={course.id}
                className="grid grid-cols-12 gap-2 p-2.5 rounded-xl border border-slate-200 bg-white items-center text-xs shadow-sm hover:border-slate-300 transition-colors"
              >
                <div className="col-span-12 sm:col-span-3">
                  <input
                    type="text"
                    value={course.code}
                    onChange={(e) => updateCourse(course.id, 'code', e.target.value.toUpperCase())}
                    placeholder="Kode MK (e.g. MKDU4110)"
                    className="w-full px-2.5 py-1.5 font-mono uppercase rounded-lg border border-slate-300 bg-white text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-[#0F172A]"
                  />
                </div>

                <div className="col-span-12 sm:col-span-5">
                  <input
                    type="text"
                    value={course.name}
                    onChange={(e) => updateCourse(course.id, 'name', e.target.value)}
                    placeholder="Nama Mata Kuliah"
                    className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-[#0F172A]"
                  />
                </div>

                <div className="col-span-5 sm:col-span-2">
                  <select
                    value={course.sks}
                    onChange={(e) => updateCourse(course.id, 'sks', Number(e.target.value))}
                    className="w-full px-2 py-1.5 rounded-lg border border-slate-300 bg-white text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-[#0F172A] font-semibold"
                  >
                    <option value="1">1 SKS</option>
                    <option value="2">2 SKS</option>
                    <option value="3">3 SKS</option>
                    <option value="4">4 SKS</option>
                    <option value="6">6 SKS</option>
                  </select>
                </div>

                <div className="col-span-5 sm:col-span-1">
                  <select
                    value={course.letter}
                    onChange={(e) => updateCourse(course.id, 'letter', e.target.value)}
                    className="w-full px-2 py-1.5 rounded-lg border border-slate-300 bg-white text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-[#0F172A] font-bold"
                  >
                    <option value="A">A</option>
                    <option value="A-">A-</option>
                    <option value="B">B</option>
                    <option value="B-">B-</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                  </select>
                </div>

                <div className="col-span-2 sm:col-span-1 text-right">
                  <button
                    type="button"
                    onClick={() => removeCourse(course.id)}
                    disabled={courses.length <= 1}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 transition-colors disabled:opacity-20"
                    title="Hapus baris"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          <span className="text-xs text-[#64748B]">
            Simpan atau bagikan rangkuman IPK:
          </span>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleWhatsAppDirect}
              className="flex-1 sm:flex-none px-4 py-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-[#0F172A] font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#0F172A]" />
              <span>Kirim WhatsApp</span>
            </button>
            <button
              type="button"
              onClick={handleCopyShare}
              className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-[#0F172A] hover:bg-slate-800 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-white" />
                  <span>Tersalin</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-white" />
                  <span>Salin Rekap IPK</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
