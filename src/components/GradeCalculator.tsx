'use client';

import React, { useState, useId } from 'react';
import {
  calculateFinalGrade,
  solveRequiredUas,
  generateShareText,
  ASSESSMENT_SCHEMES,
  GRADE_THRESHOLDS,
  AssessmentType,
  FinalGradeResult,
  TargetSolverResult
} from '@/lib/calculatorEngine';
import {
  Calculator,
  AlertTriangle,
  Copy,
  Check,
  Target,
  Info,
  MessageSquare
} from 'lucide-react';

export default function GradeCalculator() {
  const [assessmentType, setAssessmentType] = useState<AssessmentType>('tuton');
  const [uasScore, setUasScore] = useState<number>(75);
  const [activityScore, setActivityScore] = useState<number>(85);
  const [courseName, setCourseName] = useState<string>('');
  
  // Custom weights for Praktik
  const [customUasWeight, setCustomUasWeight] = useState<number>(50);
  const [customActivityWeight, setCustomActivityWeight] = useState<number>(50);

  // Target Solver mode
  const [isTargetSolverActive, setIsTargetSolverActive] = useState<boolean>(false);
  const [targetGrade, setTargetGrade] = useState<string>('A');

  // Copy feedback state
  const [copied, setCopied] = useState<boolean>(false);

  // Unique IDs for accessibility
  const courseInputId = useId();
  const uasInputId = useId();
  const activityInputId = useId();
  const targetGradeId = useId();

  // Calculations
  const customUasDecimal = assessmentType === 'praktik' ? customUasWeight / 100 : undefined;
  const customActivityDecimal = assessmentType === 'praktik' ? customActivityWeight / 100 : undefined;

  const result: FinalGradeResult = calculateFinalGrade(
    uasScore,
    activityScore,
    assessmentType,
    customUasDecimal,
    customActivityDecimal
  );

  const targetResult: TargetSolverResult = solveRequiredUas(
    activityScore,
    targetGrade,
    assessmentType,
    customUasDecimal,
    customActivityDecimal
  );

  const handleCopyShare = async () => {
    const text = generateShareText(result, courseName);
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
    const text = encodeURIComponent(generateShareText(result, courseName));
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const scheme = ASSESSMENT_SCHEMES[assessmentType];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Clean Minimal Header */}
      <div className="bg-white px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-[#0F172A]" />
            <h2 className="text-base sm:text-lg font-heading font-bold tracking-tight text-[#0F172A]">
              Kalkulator Nilai Akhir UT
            </h2>
          </div>
          <p className="text-xs text-[#64748B] mt-0.5">
            Peraturan Rektor Universitas Terbuka No. 16 Tahun 2017
          </p>
        </div>

        {/* Mode Switcher */}
        <div className="flex items-center bg-slate-100 p-1 rounded-xl self-start sm:self-auto text-xs font-medium border border-slate-200">
          <button
            type="button"
            onClick={() => setIsTargetSolverActive(false)}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              !isTargetSolverActive
                ? 'bg-[#0F172A] text-white font-semibold shadow-sm'
                : 'text-[#475569] hover:text-[#0F172A]'
            }`}
          >
            Hitung Nilai Akhir
          </button>
          <button
            type="button"
            onClick={() => setIsTargetSolverActive(true)}
            className={`px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              isTargetSolverActive
                ? 'bg-[#0F172A] text-white font-semibold shadow-sm'
                : 'text-[#475569] hover:text-[#0F172A]'
            }`}
          >
            <Target className="w-3.5 h-3.5" />
            <span>Target Solver UAS</span>
          </button>
        </div>
      </div>

      <div className="p-6 sm:p-8 space-y-6">
        {/* Step 1: Modus Belajar */}
        <div>
          <label className="block text-xs font-semibold text-[#0F172A] mb-2">
            Pilih skema bantuan belajar:
          </label>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
            {(Object.keys(ASSESSMENT_SCHEMES) as AssessmentType[]).map((type) => {
              const item = ASSESSMENT_SCHEMES[type];
              const isSelected = assessmentType === type;
              return (
                <button
                  key={type}
                  type="button"
                  onClick={() => setAssessmentType(type)}
                  className={`p-3.5 rounded-xl text-left border text-xs transition-all ${
                    isSelected
                      ? 'border-2 border-[#0F172A] bg-slate-50 text-[#0F172A] font-bold shadow-sm'
                      : 'border-slate-200 bg-white text-[#475569] hover:border-slate-300'
                  }`}
                >
                  <span className="block font-bold">
                    {type === 'tuton' && 'Tuton (70:30)'}
                    {type === 'tuweb' && 'Tuweb/TTM (50:50)'}
                    {type === 'tmk' && 'TMK (80:20)'}
                    {type === 'praktik' && 'Praktik Mandiri'}
                  </span>
                  <span className="text-[11px] text-[#64748B] block mt-0.5 line-clamp-1">
                    {item.name}
                  </span>
                </button>
              );
            })}
          </div>
          <p className="mt-2.5 text-xs text-[#64748B] flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-slate-500 shrink-0" />
            <span>{scheme.ruleExplanation}</span>
          </p>
        </div>

        {/* Praktik slider */}
        {assessmentType === 'praktik' && (
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
            <div className="flex items-center justify-between font-semibold">
              <span className="text-[#0F172A]">Bobot khusus mata kuliah praktik:</span>
              <span className="font-mono text-[#0F172A] font-bold">UAS {customUasWeight}% : Praktik {customActivityWeight}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              step="5"
              value={customUasWeight}
              onChange={(e) => {
                const val = Number(e.target.value);
                setCustomUasWeight(val);
                setCustomActivityWeight(100 - val);
              }}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0F172A]"
            />
          </div>
        )}

        {/* TARGET SOLVER VIEW */}
        {isTargetSolverActive ? (
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-5">
            <div className="space-y-1">
              <h3 className="font-bold text-base text-[#0F172A] flex items-center gap-2">
                <Target className="w-4 h-4 text-[#0F172A]" />
                <span>Target Solver: Berapa Nilai Ujian yang Wajib Anda Raih?</span>
              </h3>
              <p className="text-xs text-[#64748B]">
                Alat ini menghitung mundur batas nilai UAS minimal agar Anda dapat mencapai target huruf mutu tertentu berdasarkan nilai tutorial yang sudah diperoleh.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor={activityInputId} className="block text-xs font-semibold text-[#0F172A] mb-1.5">
                  Nilai aktivitas ({scheme.name.split(' ')[0]}) saat ini (0 - 100):
                </label>
                <input
                  id={activityInputId}
                  type="number"
                  min="0"
                  max="100"
                  value={activityScore}
                  onChange={(e) => setActivityScore(Math.min(100, Math.max(0, Number(e.target.value) || 0)))}
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300 bg-white text-[#0F172A] font-mono font-bold focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-[#0F172A]"
                  placeholder="Misal: 85"
                />
              </div>

              <div>
                <label htmlFor={targetGradeId} className="block text-xs font-semibold text-[#0F172A] mb-1.5">
                  Pilih target huruf mutu akhir:
                </label>
                <select
                  id={targetGradeId}
                  value={targetGrade}
                  onChange={(e) => setTargetGrade(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300 bg-white text-[#0F172A] font-semibold focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-[#0F172A]"
                >
                  <option value="A">Huruf A (Skor Akhir ≥ 80 | Bobot 4.00)</option>
                  <option value="A-">Huruf A- (Skor Akhir ≥ 75 | Bobot 3.50)</option>
                  <option value="B">Huruf B (Skor Akhir ≥ 70 | Bobot 3.00)</option>
                  <option value="B-">Huruf B- (Skor Akhir ≥ 65 | Bobot 2.50)</option>
                  <option value="C">Huruf C (Skor Akhir ≥ 60 | Bobot 2.00)</option>
                  <option value="D">Huruf D (Skor Akhir ≥ 55 | Bobot 1.00)</option>
                </select>
              </div>
            </div>

            {/* Target Output Box */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <span className="text-xs text-[#64748B] font-medium">
                  Target Nilai Ujian (UAS) Minimal yang Dibutuhkan:
                </span>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-[#0F172A] border border-slate-200">
                  Target: {targetGrade} (Ambang Skor ≥ {targetResult.targetMinScore})
                </span>
              </div>

              <div className="flex items-baseline gap-2">
                <span className={`text-3xl font-extrabold ${targetResult.isPossible ? 'text-[#0F172A]' : 'text-red-600'}`}>
                  {targetResult.isPossible ? targetResult.requiredUasScore : 'Tidak Tercapai'}
                </span>
                <span className="text-xs text-[#64748B]">
                  / skala 100
                </span>
              </div>

              <p className="text-xs text-[#64748B] pt-1 leading-relaxed">
                {targetResult.message}
              </p>
            </div>
          </div>
        ) : (
          /* STANDARD CALCULATOR VIEW */
          <div className="space-y-6">
            <div>
              <label htmlFor={courseInputId} className="block text-xs font-semibold text-[#0F172A] mb-1.5">
                Nama Mata Kuliah (Opsional)
              </label>
              <input
                id={courseInputId}
                type="text"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                placeholder="Contoh: EKMA4116 - Manajemen"
                className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300 bg-white text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-[#0F172A]"
              />
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-slate-200 space-y-2 bg-[#F8FAFC]">
                <div className="flex justify-between items-center text-xs">
                  <label htmlFor={uasInputId} className="font-semibold text-[#0F172A]">
                    Nilai Ujian Akhir Semester (UAS)
                  </label>
                  <span className="text-[#0F172A] font-mono font-bold">
                    Bobot {(result.uasWeight * 100)}%
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    id={uasInputId}
                    type="number"
                    min="0"
                    max="100"
                    value={uasScore}
                    onChange={(e) => setUasScore(Math.min(100, Math.max(0, Number(e.target.value) || 0)))}
                    className="w-20 px-3 py-1.5 text-center font-mono font-bold text-base rounded-lg border border-slate-300 bg-white text-[#0F172A]"
                  />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={uasScore}
                    aria-label="Geser nilai UAS"
                    onChange={(e) => setUasScore(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0F172A]"
                  />
                </div>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 space-y-2 bg-[#F8FAFC]">
                <div className="flex justify-between items-center text-xs">
                  <label htmlFor={activityInputId} className="font-semibold text-[#0F172A]">
                    Nilai Aktivitas ({scheme.name.split(' ')[0]})
                  </label>
                  <span className="text-[#0F172A] font-mono font-bold">
                    Bobot {(result.activityWeight * 100)}%
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    id={activityInputId}
                    type="number"
                    min="0"
                    max="100"
                    value={activityScore}
                    onChange={(e) => setActivityScore(Math.min(100, Math.max(0, Number(e.target.value) || 0)))}
                    className="w-20 px-3 py-1.5 text-center font-mono font-bold text-base rounded-lg border border-slate-300 bg-white text-[#0F172A]"
                  />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={activityScore}
                    aria-label="Geser nilai aktivitas"
                    onChange={(e) => setActivityScore(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0F172A]"
                  />
                </div>
              </div>
            </div>

            {/* SYARAT MINIMAL UAS 30 WARNING */}
            {result.isUasBelowThreshold ? (
              <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 text-xs sm:text-sm">
                <div className="flex items-start gap-2.5">
                  <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <strong className="font-bold block text-sm text-rose-900">
                      Peringatan: Nilai UAS Murni Kurang dari 30
                    </strong>
                    <p className="leading-relaxed text-rose-800">
                      {result.warningMessage}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              result.warningMessage && (
                <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center gap-2">
                  <Info className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{result.warningMessage}</span>
                </div>
              )
            )}

            {/* RESULTS ROW */}
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
                <div>
                  <span className="text-xs text-[#64748B] block font-semibold">
                    Nilai Angka Akhir (0-100)
                  </span>
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-1 font-mono">
                    {result.finalScore}
                  </div>
                  <span className="text-[11px] text-[#64748B]">
                    {result.isUasBelowThreshold ? 'Nilai tutorial hangus' : `UAS: ${result.scoreBreakdown.uasContribution} + Tutorial: ${result.scoreBreakdown.activityContribution}`}
                  </span>
                </div>

                <div className="sm:border-x border-slate-200 sm:px-6">
                  <span className="text-xs text-[#64748B] block font-semibold">
                    Huruf Mutu Resmi
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#0F172A]">
                      {result.letterGrade}
                    </span>
                    <span className="text-xs font-semibold text-[#64748B]">
                      (Bobot: {result.bobot.toFixed(2)})
                    </span>
                  </div>
                  <span className="text-[11px] text-[#64748B] font-medium">
                    {GRADE_THRESHOLDS.find(g => g.letter === result.letterGrade)?.keterangan}
                  </span>
                </div>

                <div className="sm:text-right">
                  <span className="text-xs text-[#64748B] block mb-1 font-semibold">
                    Status Kelulusan
                  </span>
                  <span className={`inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-wide ${
                    result.isPassed
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : 'bg-rose-50 text-rose-800 border border-rose-200'
                  }`}>
                    {result.isPassed ? 'LULUS' : 'TIDAK LULUS'}
                  </span>
                </div>
              </div>
            </div>

            {/* ACTION ROW */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <span className="text-xs text-[#64748B]">
                Bagikan ringkasan kalkulasi ke rekan belajar:
              </span>
              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-[#0F172A] font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 text-[#0F172A]" />
                  <span>Kirim WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={handleCopyShare}
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-[#0F172A] hover:bg-slate-800 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-white" />
                      <span>Tersalin</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-white" />
                      <span>Salin Ringkasan</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
