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
  CheckCircle2,
  XCircle,
  Share2,
  Copy,
  Check,
  Target,
  Sparkles,
  Info,
  BookOpen,
  Send,
  MessageCircle
} from 'lucide-react';

export default function GradeCalculator() {
  const [assessmentType, setAssessmentType] = useState<AssessmentType>('tuton');
  const [uasScore, setUasScore] = useState<number>(75);
  const [activityScore, setActivityScore] = useState<number>(85);
  const [courseName, setCourseName] = useState<string>('');
  
  // Custom weights for Praktik
  const [customUasWeight, setCustomUasWeight] = useState<number>(50);
  const [customActivityWeight, setCustomActivityWeight] = useState<number>(50);

  // Target Solver state
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

  const handleNativeShare = async () => {
    const text = generateShareText(result, courseName);
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: 'Hasil Perhitungan Nilai UT - NilaiUT.com',
          text: text,
          url: 'https://nilaiut.com',
        });
        return;
      } catch {
        // Fallback to copy if cancelled or error
      }
    }
    handleCopyShare();
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(generateShareText(result, courseName));
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const scheme = ASSESSMENT_SCHEMES[assessmentType];

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-colors">
      {/* Header bar */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
              <Calculator className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                Kalkulator Nilai Akhir UT
              </h2>
              <p className="text-xs sm:text-sm text-blue-100/90">
                Formula Resmi Peraturan Rektor Universitas Terbuka No. 16/2017
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsTargetSolverActive(!isTargetSolverActive)}
              className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 border shadow-sm ${
                isTargetSolverActive
                  ? 'bg-amber-400 text-slate-950 border-amber-300 ring-2 ring-amber-300/50'
                  : 'bg-white/15 text-white border-white/25 hover:bg-white/25'
              }`}
            >
              <Target className="w-4 h-4 text-amber-300" />
              <span>{isTargetSolverActive ? 'Kembali ke Kalkulator' : 'Mode Target Solver'}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="p-5 sm:p-8 space-y-6">
        {/* Step 1: Pilih Skema Tutorial */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-2">
            Langkah 1: Pilih Skema Penilaian / Tutorial
          </label>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
            {(Object.keys(ASSESSMENT_SCHEMES) as AssessmentType[]).map((type) => {
              const item = ASSESSMENT_SCHEMES[type];
              const isSelected = assessmentType === type;
              return (
                <button
                  key={type}
                  type="button"
                  onClick={() => setAssessmentType(type)}
                  className={`p-3.5 rounded-xl text-left border transition-all relative ${
                    isSelected
                      ? 'border-blue-600 dark:border-blue-500 bg-blue-50/70 dark:bg-blue-950/40 shadow-sm ring-1 ring-blue-500'
                      : 'border-slate-200 dark:border-slate-700/80 hover:border-slate-300 dark:hover:border-slate-600 bg-white dark:bg-slate-800/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-xs font-bold ${isSelected ? 'text-blue-700 dark:text-blue-400' : 'text-slate-800 dark:text-slate-200'}`}>
                      {type === 'tuton' && 'Tuton (70:30)'}
                      {type === 'tuweb' && 'Tuweb/TTM (50:50)'}
                      {type === 'tmk' && 'TMK (80:20)'}
                      {type === 'praktik' && 'Praktik Mandiri'}
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                    )}
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug line-clamp-2">
                    {item.name}
                  </p>
                </button>
              );
            })}
          </div>
          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-blue-500 shrink-0" />
            <span>{scheme.ruleExplanation}</span>
          </p>
        </div>

        {/* Custom Weight sliders for Praktik */}
        {assessmentType === 'praktik' && (
          <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wider">
                Pengaturan Bobot Praktik / Praktikum
              </span>
              <span className="text-xs font-mono font-bold text-amber-700 dark:text-amber-400">
                UAS {customUasWeight}% : Aktivitas {customActivityWeight}%
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-600 dark:text-slate-300 w-24">Bobot UAS:</span>
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
                  className="w-full h-2 bg-amber-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <span className="text-xs font-bold w-12 text-right">{customUasWeight}%</span>
              </div>
            </div>
          </div>
        )}

        {/* TARGET SOLVER MODE VIEW */}
        {isTargetSolverActive ? (
          <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-800/80 dark:to-slate-800/40 border border-amber-200 dark:border-amber-700/60 space-y-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                Target Solver: Hitung Kebutuhan Nilai UAS Minimal
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Ketahui secara presisi berapa nilai UAS yang wajib Anda raih pada ujian tatap muka atau ujian daring (UO) untuk mengamankan nilai huruf tertentu.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor={activityInputId} className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                  Nilai Aktivitas / {assessmentType.toUpperCase()} Anda (0 - 100)
                </label>
                <input
                  id={activityInputId}
                  type="number"
                  min="0"
                  max="100"
                  value={activityScore}
                  onChange={(e) => setActivityScore(Math.min(100, Math.max(0, Number(e.target.value) || 0)))}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-base font-semibold focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  placeholder="Contoh: 85"
                />
                <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 block">
                  Nilai rata-rata tugas dan diskusi di portal elearning.ut.ac.id
                </span>
              </div>

              <div>
                <label htmlFor={targetGradeId} className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                  Pilih Target Nilai Huruf yang Diinginkan
                </label>
                <select
                  id={targetGradeId}
                  value={targetGrade}
                  onChange={(e) => setTargetGrade(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-base font-bold focus:ring-2 focus:ring-amber-500 focus:outline-none"
                >
                  <option value="A">Huruf A (Nilai Akhir ≥ 80 | Bobot 4.00)</option>
                  <option value="A-">Huruf A- (Nilai Akhir ≥ 75 | Bobot 3.50)</option>
                  <option value="B">Huruf B (Nilai Akhir ≥ 70 | Bobot 3.00)</option>
                  <option value="B-">Huruf B- (Nilai Akhir ≥ 65 | Bobot 2.50)</option>
                  <option value="C">Huruf C (Nilai Akhir ≥ 60 | Bobot 2.00)</option>
                  <option value="D">Huruf D (Nilai Akhir ≥ 55 | Bobot 1.00)</option>
                </select>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 block">
                  Standar batas nilai resmi UT
                </span>
              </div>
            </div>

            {/* Target Output Box */}
            <div className={`p-5 rounded-xl border ${
              targetResult.isPossible
                ? 'bg-white dark:bg-slate-900/90 border-amber-300 dark:border-amber-600/80 shadow-md'
                : 'bg-red-50 dark:bg-red-950/40 border-red-300 dark:border-red-800'
            }`}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Nilai UAS Minimal yang Diperlukan:
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className={`text-3xl sm:text-4xl font-extrabold ${
                      targetResult.isPossible ? 'text-amber-600 dark:text-amber-400' : 'text-red-600 dark:text-red-400'
                    }`}>
                      {targetResult.isPossible ? targetResult.requiredUasScore : 'Mustahil'}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      / 100 skala ujian
                    </span>
                  </div>
                </div>

                <div className="sm:text-right">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-700">
                    Target: Huruf {targetGrade} (Skor ≥ {targetResult.targetMinScore})
                  </span>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {targetResult.message}
              </div>

              <div className="mt-3 p-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-[11px] text-blue-800 dark:text-blue-300 flex items-start gap-1.5">
                <AlertTriangle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Ingat Aturan Minimal 30:</strong> Sekalipun nilai Tuton Anda 100, jika UAS murni di bawah 30, nilai Tuton otomatis hangus dan Anda akan mendapat nilai E. Jadi nilai UAS minimal mutlak adalah 30!
                </span>
              </div>
            </div>
          </div>
        ) : (
          /* STANDARD CALCULATOR VIEW */
          <div className="space-y-6">
            {/* Optional Course Name */}
            <div>
              <label htmlFor={courseInputId} className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                Nama Mata Kuliah (Opsional)
              </label>
              <input
                id={courseInputId}
                type="text"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                placeholder="Contoh: EKMA4116 - Manajemen (atau kosongkan)"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Score Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Input 1: Nilai UAS */}
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/30 space-y-3">
                <div className="flex items-center justify-between">
                  <label htmlFor={uasInputId} className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                    <span>Nilai UAS / Ujian Online</span>
                  </label>
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/50 px-2 py-0.5 rounded">
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
                    className="w-24 px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 font-mono font-bold text-lg text-slate-900 dark:text-white text-center focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={uasScore}
                    aria-label="Geser nilai UAS"
                    onChange={(e) => setUasScore(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Ujian Tatap Muka (UTM), UO Mata Kuliah, atau Take Home Exam (THE).
                </p>
              </div>

              {/* Input 2: Nilai Aktivitas */}
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/30 space-y-3">
                <div className="flex items-center justify-between">
                  <label htmlFor={activityInputId} className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                    <span>Nilai {scheme.name.split(' ')[0]}</span>
                  </label>
                  <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/50 px-2 py-0.5 rounded">
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
                    className="w-24 px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 font-mono font-bold text-lg text-slate-900 dark:text-white text-center focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={activityScore}
                    aria-label="Geser nilai aktivitas"
                    onChange={(e) => setActivityScore(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                  />
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Nilai kumulatif tugas 1, 2, 3 dan keaktifan diskusi dari tutor.
                </p>
              </div>
            </div>

            {/* SYARAT MINIMAL UAS 30 SAFETY WARNING ENGINE BANNER */}
            {result.isUasBelowThreshold ? (
              <div className="p-4 sm:p-5 rounded-2xl bg-red-500/10 border-2 border-red-500 text-red-950 dark:text-red-200 transition-all animate-pulse">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-red-500 text-white shrink-0 mt-0.5">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm sm:text-base text-red-700 dark:text-red-400">
                      PERINGATAN KRUSIAL: Nilai UAS Murni &lt; 30 (Gugur Tuton)
                    </h3>
                    <p className="text-xs sm:text-sm text-red-900 dark:text-red-300 leading-relaxed">
                      {result.warningMessage}
                    </p>
                    <p className="text-xs text-red-800 dark:text-red-400/90 pt-1 font-semibold">
                      💡 Solusi: Anda wajib meregistrasi ulang mata kuliah ini di semester depan atau mengikuti Ujian Ulang (SUO).
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              result.warningMessage && (
                <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-200 text-xs flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{result.warningMessage}</span>
                </div>
              )
            )}

            {/* GRADE OUTPUT CARD */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                {/* Result 1: Final Score */}
                <div className="text-center md:text-left space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Nilai Akhir (Skala 0-100)
                  </span>
                  <div className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                    {result.finalScore}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {result.isUasBelowThreshold ? (
                      <span className="text-red-500 font-semibold">Tuton Tidak Dihitung</span>
                    ) : (
                      <span>UAS ({result.scoreBreakdown.uasContribution}) + Aktivitas ({result.scoreBreakdown.activityContribution})</span>
                    )}
                  </div>
                </div>

                {/* Result 2: Letter Grade & Mutu */}
                <div className="text-center space-y-1 py-4 md:py-0 border-y md:border-y-0 md:border-x border-slate-200 dark:border-slate-700">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Huruf Mutu Resmi UT
                  </span>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className={`text-5xl sm:text-6xl font-black ${
                      result.letterGrade === 'A' || result.letterGrade === 'A-'
                        ? 'text-emerald-600 dark:text-emerald-400'
                        : result.letterGrade === 'B' || result.letterGrade === 'B-'
                        ? 'text-blue-600 dark:text-blue-400'
                        : result.letterGrade === 'C'
                        ? 'text-amber-600 dark:text-amber-400'
                        : 'text-red-600 dark:text-red-400'
                    }`}>
                      {result.letterGrade}
                    </span>
                    <span className="text-sm font-bold text-slate-600 dark:text-slate-300">
                      (Bobot {result.bobot.toFixed(2)})
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {GRADE_THRESHOLDS.find(g => g.letter === result.letterGrade)?.keterangan}
                  </p>
                </div>

                {/* Result 3: Status Kelulusan */}
                <div className="text-center md:text-right space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                    Status Kelulusan
                  </span>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm sm:text-base shadow-sm border">
                    {result.isPassed ? (
                      <span className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-800 px-3 py-1.5 rounded-lg">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" /> LULUS
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 text-red-700 dark:text-red-300 bg-red-100 dark:bg-red-950/60 border-red-300 dark:border-red-800 px-3 py-1.5 rounded-lg">
                        <XCircle className="w-5 h-5 text-red-600" /> TIDAK LULUS
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    {result.isPassed ? 'Memenuhi batas minimal kelulusan UT' : 'Wajib registrasi ulang / ujian ulang'}
                  </p>
                </div>
              </div>

              {/* Progress Contribution Bar */}
              <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-700/80">
                <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
                  <span>Kontribusi UAS ({result.scoreBreakdown.uasContribution} poin)</span>
                  <span>Kontribusi Aktivitas ({result.scoreBreakdown.activityContribution} poin)</span>
                </div>
                <div className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden flex">
                  <div
                    style={{ width: `${Math.min(100, (result.scoreBreakdown.uasContribution / 100) * 100)}%` }}
                    className="bg-blue-600 dark:bg-blue-500 transition-all duration-500"
                    title={`UAS: ${result.scoreBreakdown.uasContribution}`}
                  />
                  <div
                    style={{ width: `${Math.min(100, (result.scoreBreakdown.activityContribution / 100) * 100)}%` }}
                    className="bg-indigo-500 dark:bg-indigo-400 transition-all duration-500"
                    title={`Aktivitas: ${result.scoreBreakdown.activityContribution}`}
                  />
                </div>
              </div>
            </div>

            {/* ACTION: WhatsApp, Native Share, & Telegram Shareable Summary */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 rounded-xl bg-slate-100/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60">
              <div className="text-xs text-slate-600 dark:text-slate-300 flex items-center gap-2">
                <Share2 className="w-4 h-4 text-blue-500 shrink-0" />
                <span>Bagikan ke grup WhatsApp atau teman sekelas:</span>
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="flex-1 sm:flex-none px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-sm transition-all focus:outline-none"
                  title="Kirim Langsung ke WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Kirim WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={handleNativeShare}
                  className="flex-1 sm:flex-none px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-sm transition-all focus:outline-none"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-300" />
                      <span>Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
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
