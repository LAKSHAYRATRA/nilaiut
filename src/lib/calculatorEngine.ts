export type AssessmentType = 'tuton' | 'tuweb' | 'tmk' | 'praktik';

export interface AssessmentConfig {
  id: AssessmentType;
  name: string;
  uasWeight: number; // in decimal (e.g. 0.70)
  activityWeight: number; // in decimal (e.g. 0.30)
  description: string;
  ruleExplanation: string;
}

export const ASSESSMENT_SCHEMES: Record<AssessmentType, AssessmentConfig> = {
  tuton: {
    id: 'tuton',
    name: 'Tuton (Tutorial Online)',
    uasWeight: 0.70,
    activityWeight: 0.30,
    description: 'Skema paling umum untuk mahasiswa UT non-Pendas dan Pendas yang mengikuti tutorial daring.',
    ruleExplanation: 'Nilai Akhir = (70% × UAS) + (30% × Tuton). Berlaku jika UAS ≥ 30 dan keaktifan Tuton memenuhi syarat.'
  },
  tuweb: {
    id: 'tuweb',
    name: 'Tuweb / TTM (Tatap Muka / Webinar)',
    uasWeight: 0.50,
    activityWeight: 0.50,
    description: 'Untuk mata kuliah dengan tutorial webinar tatap muka terjadwal (8 pertemuan).',
    ruleExplanation: 'Nilai Akhir = (50% × UAS) + (50% × Tuweb). Bobot aktivitas belajar sangat tinggi (50%).'
  },
  tmk: {
    id: 'tmk',
    name: 'TMK (Tugas Mata Kuliah)',
    uasWeight: 0.80,
    activityWeight: 0.20,
    description: 'Skema alternatif bagi mahasiswa yang tidak mengaktivasi atau tidak mengikuti Tuton (3 kali tugas).',
    ruleExplanation: 'Nilai Akhir = (80% × UAS) + (20% × TMK). Porsi UAS dominan 80%.'
  },
  praktik: {
    id: 'praktik',
    name: 'Praktik / Praktikum Mandiri',
    uasWeight: 0.50,
    activityWeight: 0.50,
    description: 'Mata kuliah berpraktik dengan laporan atau bimbingan instruktur khusus.',
    ruleExplanation: 'Nilai Akhir = disesuaikan dengan bobot panduan praktik program studi (default 50% UAS : 50% Praktik).'
  }
};

export interface GradeThreshold {
  letter: string;
  minScore: number;
  bobot: number;
  status: 'LULUS' | 'LULUS BERSYARAT' | 'TIDAK LULUS';
  keterangan: string;
}

export const GRADE_THRESHOLDS: GradeThreshold[] = [
  { letter: 'A', minScore: 80, bobot: 4.00, status: 'LULUS', keterangan: 'Sangat Baik' },
  { letter: 'A-', minScore: 75, bobot: 3.50, status: 'LULUS', keterangan: 'Antara Baik Sekali & Sangat Baik' },
  { letter: 'B', minScore: 70, bobot: 3.00, status: 'LULUS', keterangan: 'Baik Sekali' },
  { letter: 'B-', minScore: 65, bobot: 2.50, status: 'LULUS', keterangan: 'Antara Cukup Baik & Baik Sekali' },
  { letter: 'C', minScore: 60, bobot: 2.00, status: 'LULUS', keterangan: 'Cukup' },
  { letter: 'D', minScore: 55, bobot: 1.00, status: 'LULUS BERSYARAT', keterangan: 'Kurang (Tidak boleh untuk TAP/Karil/Mata Kuliah Inti)' },
  { letter: 'E', minScore: 0, bobot: 0.00, status: 'TIDAK LULUS', keterangan: 'Gagal (Wajib Registrasi Ulang / Ujian Ulang)' }
];

export interface FinalGradeResult {
  uasScore: number;
  activityScore: number;
  assessmentType: AssessmentType;
  uasWeight: number;
  activityWeight: number;
  finalScore: number;
  rawCalculatedScore: number;
  letterGrade: string;
  bobot: number;
  isPassed: boolean;
  isUasBelowThreshold: boolean; // UAS < 30
  warningMessage: string | null;
  scoreBreakdown: {
    uasContribution: number;
    activityContribution: number;
  };
}

/**
 * Menghitung Nilai Akhir Mata Kuliah sesuai Peraturan Rektor UT No. 16/2017
 */
export function calculateFinalGrade(
  uasScore: number,
  activityScore: number,
  assessmentType: AssessmentType,
  customUasWeight?: number,
  customActivityWeight?: number
): FinalGradeResult {
  const scheme = ASSESSMENT_SCHEMES[assessmentType];
  const uasWeight = customUasWeight !== undefined ? customUasWeight : scheme.uasWeight;
  const activityWeight = customActivityWeight !== undefined ? customActivityWeight : scheme.activityWeight;

  const isUasBelowThreshold = uasScore < 30;

  let finalScore = 0;
  let letterGrade = 'E';
  let bobot = 0.0;
  let isPassed = false;
  let warningMessage: string | null = null;
  let uasContribution = 0;
  let activityContribution = 0;

  const rawCalculatedScore = (uasScore * uasWeight) + (activityScore * activityWeight);

  if (isUasBelowThreshold) {
    // Sesuai aturan resmi UT: jika UAS < 30, nilai bimbingan/tuton/TMK gugur dan tidak berkontribusi
    finalScore = Number(uasScore.toFixed(2));
    letterGrade = 'E';
    bobot = 0.0;
    isPassed = false;
    uasContribution = uasScore;
    activityContribution = 0;
    warningMessage = 'PERINGATAN ATURAN MINIMAL UAS 30: Nilai ujian Anda di bawah 30. Sesuai regulasi Universitas Terbuka, nilai Tuton/TMK/Tuweb tidak dapat digabungkan dan nilai akhir Anda otomatis dinyatakan E (Gagal).';
  } else {
    finalScore = Number(rawCalculatedScore.toFixed(2));
    uasContribution = Number((uasScore * uasWeight).toFixed(2));
    activityContribution = Number((activityScore * activityWeight).toFixed(2));

    const matchedGrade = GRADE_THRESHOLDS.find(g => finalScore >= g.minScore) || GRADE_THRESHOLDS[GRADE_THRESHOLDS.length - 1];
    letterGrade = matchedGrade.letter;
    bobot = matchedGrade.bobot;
    isPassed = matchedGrade.status === 'LULUS' || matchedGrade.status === 'LULUS BERSYARAT';

    if (letterGrade === 'D') {
      warningMessage = 'Catatan: Nilai D adalah lulus bersyarat. Untuk mata kuliah tertentu (TAP, Karil, Praktik), nilai minimal wajib C.';
    }
  }

  return {
    uasScore,
    activityScore,
    assessmentType,
    uasWeight,
    activityWeight,
    finalScore,
    rawCalculatedScore: Number(rawCalculatedScore.toFixed(2)),
    letterGrade,
    bobot,
    isPassed,
    isUasBelowThreshold,
    warningMessage,
    scoreBreakdown: {
      uasContribution,
      activityContribution
    }
  };
}

export interface TargetSolverResult {
  targetGrade: string;
  targetMinScore: number;
  activityScore: number;
  requiredUasScore: number;
  isPossible: boolean;
  message: string;
}

/**
 * Target Solver: Menghitung Berapa Nilai UAS Minimal yang Diperlukan
 */
export function solveRequiredUas(
  activityScore: number,
  targetGradeLetter: string,
  assessmentType: AssessmentType,
  customUasWeight?: number,
  customActivityWeight?: number
): TargetSolverResult {
  const scheme = ASSESSMENT_SCHEMES[assessmentType];
  const uasWeight = customUasWeight !== undefined ? customUasWeight : scheme.uasWeight;
  const activityWeight = customActivityWeight !== undefined ? customActivityWeight : scheme.activityWeight;

  const gradeInfo = GRADE_THRESHOLDS.find(g => g.letter === targetGradeLetter);
  const targetMinScore = gradeInfo ? gradeInfo.minScore : 70;

  // Rumus: Target = (UAS * uasWeight) + (Activity * activityWeight)
  // UAS * uasWeight = Target - (Activity * activityWeight)
  // UAS = (Target - (Activity * activityWeight)) / uasWeight
  const activityContribution = activityScore * activityWeight;
  const rawNeededUas = (targetMinScore - activityContribution) / uasWeight;
  let requiredUas = Math.ceil(rawNeededUas);

  // UAS tidak boleh kurang dari 30 karena jika UAS < 30, Tuton hangus dan nilai jadi E
  if (requiredUas < 30) {
    requiredUas = 30;
  }

  const isPossible = requiredUas <= 100;

  let message = '';
  if (!isPossible) {
    message = `Secara matematis nilai ${targetGradeLetter} (min. ${targetMinScore}) tidak dapat dicapai karena butuh nilai UAS ${requiredUas} (> 100). Pertimbangkan menaikkan keaktifan Tuton/TMK di masa mendatang atau menargetkan nilai huruf yang realistis.`;
  } else if (requiredUas === 30) {
    message = `Dengan nilai aktivitas ${activityScore}, Anda hanya butuh nilai UAS minimal batas aman 30 poin untuk mengamankan nilai huruf ${targetGradeLetter}!`;
  } else {
    message = `Untuk mengamankan nilai huruf ${targetGradeLetter} (skor minimal ${targetMinScore}), Anda wajib meraih nilai UAS minimal ${requiredUas} dari 100.`;
  }

  return {
    targetGrade: targetGradeLetter,
    targetMinScore,
    activityScore,
    requiredUasScore: Math.min(100, Math.max(0, requiredUas)),
    isPossible,
    message
  };
}

export interface CourseGradeItem {
  id: string;
  code: string;
  name: string;
  sks: number;
  letter: string;
}

export interface IpkCalculationResult {
  totalSks: number;
  totalMutu: number;
  ipk: number;
  predikat: string;
  hasGradeE: boolean;
  countE: number;
  countD: number;
  countC: number;
  countB: number;
  countA: number;
  statusKeterangan: string;
}

/**
 * Menghitung IPK & Predikat Kelulusan Resmi UT
 */
export function calculateIpk(courses: CourseGradeItem[]): IpkCalculationResult {
  if (!courses || courses.length === 0) {
    return {
      totalSks: 0,
      totalMutu: 0,
      ipk: 0,
      predikat: '-',
      hasGradeE: false,
      countE: 0,
      countD: 0,
      countC: 0,
      countB: 0,
      countA: 0,
      statusKeterangan: 'Belum ada mata kuliah yang diinput.'
    };
  }

  let totalSks = 0;
  let totalMutu = 0;
  let countE = 0;
  let countD = 0;
  let countC = 0;
  let countB = 0;
  let countA = 0;

  const letterWeightMap: Record<string, number> = {
    'A': 4.0,
    'A-': 3.5,
    'B': 3.0,
    'B-': 2.5,
    'C': 2.0,
    'D': 1.0,
    'E': 0.0
  };

  courses.forEach(c => {
    const sks = Number(c.sks) || 0;
    const weight = letterWeightMap[c.letter] ?? 0;
    totalSks += sks;
    totalMutu += (sks * weight);

    if (c.letter === 'E') countE++;
    else if (c.letter === 'D') countD++;
    else if (c.letter === 'C') countC++;
    else if (c.letter === 'B' || c.letter === 'B-') countB++;
    else if (c.letter === 'A' || c.letter === 'A-') countA++;
  });

  const ipk = totalSks > 0 ? Number((totalMutu / totalSks).toFixed(2)) : 0;
  const hasGradeE = countE > 0;

  let predikat = 'Cukup';
  let statusKeterangan = '';

  if (ipk >= 3.51 && ipk <= 4.00) {
    predikat = hasGradeE ? 'Sangat Memuaskan (Gugur Cumlaude karena ada nilai E)' : 'Dengan Pujian (Cumlaude)';
    statusKeterangan = hasGradeE 
      ? 'IPK Anda memenuhi standar skor Cumlaude (≥ 3.51), namun aturan kelulusan UT mensyaratkan tidak boleh memiliki nilai E.'
      : 'Selamat! Anda berpotensi lulus Dengan Pujian (Cumlaude). Pastikan masa studi tidak melampaui batas maksimal program studi.';
  } else if (ipk >= 3.01 && ipk <= 3.50) {
    predikat = 'Sangat Memuaskan';
    statusKeterangan = 'Pencapaian akademik sangat solid melampaui ambang rata-rata kelulusan sarjana.';
  } else if (ipk >= 2.76 && ipk <= 3.00) {
    predikat = 'Memuaskan';
    statusKeterangan = 'Memenuhi predikat memuaskan sesuai Buku Pedoman Mahasiswa UT.';
  } else if (ipk >= 2.00 && ipk <= 2.75) {
    predikat = 'Cukup';
    statusKeterangan = 'Memenuhi syarat kelulusan minimal (IPK ≥ 2.00 untuk S1/Diploma).';
  } else {
    predikat = 'Di Bawah Standar Kelulusan';
    statusKeterangan = 'Peringatan: IPK Anda di bawah 2.00. Anda wajib memperbaiki nilai mata kuliah D atau E untuk dapat yudisium.';
  }

  if (hasGradeE) {
    statusKeterangan += ` Perhatian: Terdapat ${countE} mata kuliah bernilai E yang wajib diulang (registrasi ujian ulang) agar bisa lulus.`;
  }

  return {
    totalSks,
    totalMutu: Number(totalMutu.toFixed(2)),
    ipk,
    predikat,
    hasGradeE,
    countE,
    countD,
    countC,
    countB,
    countA,
    statusKeterangan
  };
}

/**
 * Format Text untuk WhatsApp & Telegram Shareable Summary
 */
export function generateShareText(result: FinalGradeResult, courseName?: string): string {
  const schemeName = ASSESSMENT_SCHEMES[result.assessmentType].name;
  const statusEmoji = result.isPassed ? '✅' : '❌';
  const uasAlert = result.isUasBelowThreshold 
    ? '\n⚠️ *PERINGATAN:* Nilai UAS < 30, nilai Tuton gugur & otomatis huruf E!' 
    : '';

  return `📊 *HASIL PERHITUNGAN NILAI UT - NilaiUT.com*
${courseName ? `📚 Mata Kuliah: *${courseName}*\n` : ''}🏛️ Skema: ${schemeName}
----------------------------------------
📝 Nilai Ujian (UAS): *${result.uasScore}* (${(result.uasWeight * 100)}%)
💻 Nilai Aktivitas/Tuton: *${result.activityScore}* (${(result.activityWeight * 100)}%)
🎯 *Nilai Akhir:* *${result.finalScore}*
🏆 *Huruf Mutu:* *${result.letterGrade}* (Bobot: ${result.bobot.toFixed(2)})
${statusEmoji} Status: *${result.isPassed ? 'LULUS' : 'TIDAK LULUS'}*${uasAlert}
----------------------------------------
💡 _Dihitung mandiri menggunakan Kalkulator Nilai UT 100% Gratis & Akurat:_
🔗 https://nilaiut.com`;
}

export function generateIpkShareText(ipkResult: IpkCalculationResult): string {
  return `🎓 *HASIL REKAP IPK MAHASISWA UT - NilaiUT.com*
----------------------------------------
⭐ *Indeks Prestasi Kumulatif (IPK):* *${ipkResult.ipk.toFixed(2)}*
📜 Predikat: *${ipkResult.predikat}*
📚 Total SKS: ${ipkResult.totalSks} SKS
💎 Total Nilai Mutu: ${ipkResult.totalMutu}
----------------------------------------
📊 *Komposisi Nilai:*
- Huruf A: ${ipkResult.countA} MK
- Huruf B: ${ipkResult.countB} MK
- Huruf C: ${ipkResult.countC} MK
- Huruf D: ${ipkResult.countD} MK
- Huruf E: ${ipkResult.countE} MK ${ipkResult.hasGradeE ? '⚠️ (Wajib Ulang)' : ''}
----------------------------------------
💡 _Hitung & pantau target IPK kelulusanmu di:_
🔗 https://nilaiut.com`;
}
