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
  Copy,
  Check,
  Target,
  ArrowRight,
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
    <div className="bg-white dark:bg-[#0e1828] rounded-xl border border-slate-200 dark:border-[#1e304a] shadow-md overflow-hidden transition-colors">
      {/* Top Academic Instrument Header: Deep Academic Navy & Gold Rule */}
      <div className="bg-[#0b2545] text-white px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-[#c59b27]">
        <div>
          <div className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-[#deb563]" />
            <h2 className="text-base sm:text-lg font-serif font-bold tracking-tight text-white">
              Kalkulator Nilai Akhir UT
            </h2>
          </div>
          <p className="text-xs text-[#deb563] mt-0.5 font-sans font-medium">
            Peraturan Rektor Universitas Terbuka No. 16 Tahun 2017
          </p>
        </div>

        {/* Segmented Mode Switcher */}
        <div className="flex items-center bg-[#07162b] p-1 rounded-md border border-[#1e3e7f] self-start sm:self-auto text-xs font-medium">
          <button
            type="button"
            onClick={() => setIsTargetSolverActive(false)}
            className={`px-3 py-1.5 rounded transition-colors ${
              !isTargetSolverActive
                ? 'bg-[#c59b27] text-[#07162b] font-bold shadow-sm'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Hitung Nilai Akhir
          </button>
          <button
            type="button"
            onClick={() => setIsTargetSolverActive(true)}
            className={`px-3 py-1.5 rounded transition-colors flex items-center gap-1.5 ${
              isTargetSolverActive
                ? 'bg-[#c59b27] text-[#07162b] font-bold shadow-sm'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Target className="w-3.5 h-3.5" />
            <span>Target Solver UAS</span>
          </button>
        </div>
      </div>

      <div className="p-6 sm:p-8 space-y-6">
        {/* Step 1: Modus Belajar - Clean Segmented Grid */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
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
                  className={`p-3 rounded-lg text-left border text-xs transition-colors ${
                    isSelected
                      ? 'border-[#0b2545] dark:border-[#deb563] bg-[#0b2545]/5 dark:bg-[#deb563]/10 text-[#0b2545] dark:text-[#faf4e2] font-semibold ring-1 ring-[#0b2545] dark:ring-[#deb563]'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111c30] text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <span className="block font-bold">
                    {type === 'tuton' && 'Tuton (70:30)'}
                    {type === 'tuweb' && 'Tuweb/TTM (50:50)'}
                    {type === 'tmk' && 'TMK (80:20)'}
                    {type === 'praktik' && 'Praktik Mandiri'}
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-0.5 line-clamp-1">
                    {item.name}
                  </span>
                </button>
              );
            })}
          </div>
          <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-[#b0851f] shrink-0" />
            <span>{scheme.ruleExplanation}</span>
          </p>
        </div>

        {/* Praktik slider */}
        {assessmentType === 'praktik' && (
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2 text-xs">
            <div className="flex items-center justify-between font-semibold">
              <span className="text-slate-800 dark:text-slate-200">Bobot khusus mata kuliah praktik:</span>
              <span className="font-mono text-[#0b2545] dark:text-[#deb563]">UAS {customUasWeight}% : Praktik {customActivityWeight}%</span>
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
              className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#0b2545] dark:accent-[#deb563]"
            />
          </div>
        )}

        {/* TARGET SOLVER VIEW */}
        {isTargetSolverActive ? (
          <div className="p-6 rounded-xl bg-[#faf8f3] dark:bg-[#121c2d] border border-[#c59b27]/40 dark:border-[#deb563]/30 space-y-5">
            <div className="space-y-1">
              <h3 className="font-serif font-bold text-base text-[#0b2545] dark:text-[#f4e6be] flex items-center gap-2">
                <Target className="w-4 h-4 text-[#b0851f] dark:text-[#deb563]" />
                <span>Target Solver: Berapa Nilai Ujian yang Wajib Anda Raih?</span>
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Alat ini menghitung mundur batas nilai UAS minimal agar Anda dapat mencapai target huruf mutu tertentu berdasarkan nilai tutorial yang sudah diperoleh.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor={activityInputId} className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Nilai aktivitas ({scheme.name.split(' ')[0]}) saat ini (0 - 100):
                </label>
                <input
                  id={activityInputId}
                  type="number"
                  min="0"
                  max="100"
                  value={activityScore}
                  onChange={(e) => setActivityScore(Math.min(100, Math.max(0, Number(e.target.value) || 0)))}
                  className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0e1828] text-slate-900 dark:text-white font-mono font-semibold focus:outline-none focus:ring-1 focus:ring-[#0b2545] dark:focus:ring-[#deb563]"
                  placeholder="Misal: 85"
                />
              </div>

              <div>
                <label htmlFor={targetGradeId} className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Pilih target huruf mutu akhir:
                </label>
                <select
                  id={targetGradeId}
                  value={targetGrade}
                  onChange={(e) => setTargetGrade(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0e1828] text-slate-900 dark:text-white font-semibold focus:outline-none focus:ring-1 focus:ring-[#0b2545] dark:focus:ring-[#deb563]"
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
            <div className="p-4 rounded-lg bg-white dark:bg-[#0e1828] border border-[#c59b27]/30 dark:border-[#deb563]/20 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Target Nilai Ujian (UAS) Minimal yang Dibutuhkan:
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950/50 text-[#8c6519] dark:text-[#deb563] border border-amber-200 dark:border-amber-800">
                  Target: {targetGrade} (Ambang Skor ≥ {targetResult.targetMinScore})
                </span>
              </div>

              <div className="flex items-baseline gap-2">
                <span className={`text-3xl font-serif font-bold ${targetResult.isPossible ? 'text-[#0b2545] dark:text-[#deb563]' : 'text-red-600'}`}>
                  {targetResult.isPossible ? targetResult.requiredUasScore : 'Tidak Tercapai'}
                </span>
                <span className="text-xs text-slate-500 font-sans">
                  / skala 100
                </span>
              </div>

              <p className="text-xs text-slate-700 dark:text-slate-300 pt-1">
                {targetResult.message}
              </p>
            </div>
          </div>
        ) : (
          /* STANDARD CALCULATOR VIEW */
          <div className="space-y-6">
            <div>
              <label htmlFor={courseInputId} className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Nama Mata Kuliah (Opsional)
              </label>
              <input
                id={courseInputId}
                type="text"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                placeholder="Contoh: EKMA4116 - Manajemen"
                className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0e1828] text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#0b2545] dark:focus:ring-[#deb563]"
              />
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 space-y-2 bg-[#fafbfc] dark:bg-[#111c30]">
                <div className="flex justify-between items-center text-xs">
                  <label htmlFor={uasInputId} className="font-semibold text-slate-800 dark:text-slate-200">
                    Nilai Ujian Akhir Semester (UAS)
                  </label>
                  <span className="text-[#0b2545] dark:text-[#deb563] font-mono font-semibold">
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
                    className="w-20 px-3 py-1.5 text-center font-mono font-bold text-base rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0e1828]"
                  />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={uasScore}
                    aria-label="Geser nilai UAS"
                    onChange={(e) => setUasScore(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#0b2545] dark:accent-[#deb563]"
                  />
                </div>
              </div>

              <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 space-y-2 bg-[#fafbfc] dark:bg-[#111c30]">
                <div className="flex justify-between items-center text-xs">
                  <label htmlFor={activityInputId} className="font-semibold text-slate-800 dark:text-slate-200">
                    Nilai Aktivitas ({scheme.name.split(' ')[0]})
                  </label>
                  <span className="text-[#0b2545] dark:text-[#deb563] font-mono font-semibold">
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
                    className="w-20 px-3 py-1.5 text-center font-mono font-bold text-base rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0e1828]"
                  />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={activityScore}
                    aria-label="Geser nilai aktivitas"
                    onChange={(e) => setActivityScore(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#0b2545] dark:accent-[#deb563]"
                  />
                </div>
              </div>
            </div>

            {/* SYARAT MINIMAL UAS 30 WARNING: Official academic alert */}
            {result.isUasBelowThreshold ? (
              <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/40 border border-red-300 dark:border-red-900 text-red-900 dark:text-red-200 text-xs sm:text-sm">
                <div className="flex items-start gap-2.5">
                  <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <strong className="font-serif font-bold block text-sm">
                      Peringatan Resmi: Nilai UAS Murni Kurang dari 30
                    </strong>
                    <p className="leading-relaxed">
                      {result.warningMessage}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              result.warningMessage && (
                <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 text-xs flex items-center gap-2">
                  <Info className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>{result.warningMessage}</span>
                </div>
              )
            )}

            {/* RESULTS ROW: Grounded & readable */}
            <div className="p-5 rounded-lg bg-[#faf8f3] dark:bg-[#121c2d] border border-[#c59b27]/30 dark:border-[#deb563]/20">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">
                    Nilai Angka Akhir (0-100)
                  </span>
                  <div className="text-3xl sm:text-4xl font-serif font-bold text-[#0b2545] dark:text-[#f4e6be] mt-1">
                    {result.finalScore}
                  </div>
                  <span className="text-[11px] text-slate-500">
                    {result.isUasBelowThreshold ? 'Nilai tutorial gugur' : `UAS: ${result.scoreBreakdown.uasContribution} + Tutorial: ${result.scoreBreakdown.activityContribution}`}
                  </span>
                </div>

                <div className="sm:border-x border-[#c59b27]/20 dark:border-[#deb563]/20 sm:px-6">
                  <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">
                    Huruf Mutu Resmi
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-3xl sm:text-4xl font-serif font-bold text-[#0b2545] dark:text-[#f4e6be]">
                      {result.letterGrade}
                    </span>
                    <span className="text-xs font-semibold text-[#8c6519] dark:text-[#deb563]">
                      (Bobot: {result.bobot.toFixed(2)})
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-600 dark:text-slate-400 font-medium">
                    {GRADE_THRESHOLDS.find(g => g.letter === result.letterGrade)?.keterangan}
                  </span>
                </div>

                <div className="sm:text-right">
                  <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1 font-medium">
                    Status Kelulusan
                  </span>
                  <span className={`inline-block px-3 py-1 rounded-md text-xs font-bold tracking-wide border ${
                    result.isPassed
                      ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800'
                      : 'bg-red-50 dark:bg-red-950/60 text-red-800 dark:text-red-300 border-red-300 dark:border-red-800'
                  }`}>
                    {result.isPassed ? 'LULUS' : 'TIDAK LULUS'}
                  </span>
                </div>
              </div>
            </div>

            {/* ACTION ROW */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Bagikan ringkasan kalkulasi ke teman atau grup belajar:
              </span>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="flex-1 sm:flex-none px-3.5 py-2 rounded-md bg-[#0b2545] hover:bg-[#07162b] text-[#f4e6be] font-medium text-xs flex items-center justify-center gap-1.5 transition-colors border border-[#c59b27]/40 shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#deb563]" />
                  <span>Kirim WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={handleCopyShare}
                  className="flex-1 sm:flex-none px-3.5 py-2 rounded-md border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Tersalin</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
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
