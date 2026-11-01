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
    name: 'Tutorial Online (Tuton)',
    uasWeight: 0.70,
    activityWeight: 0.30,
    description: 'Skema reguler daring melalui portal elearning.ut.ac.id.',
    ruleExplanation: 'Bobot: 70% Ujian Akhir Semester (UAS) + 30% Aktivitas Tuton. Syarat aktif: nilai UAS murni minimal 30.'
  },
  tuweb: {
    id: 'tuweb',
    name: 'Tuweb / TTM (Webinar & Tatap Muka)',
    uasWeight: 0.50,
    activityWeight: 0.50,
    description: 'Untuk mata kuliah dengan 8 sesi tutorial tatap muka atau webinar Zoom.',
    ruleExplanation: 'Bobot seimbang: 50% UAS + 50% Nilai Tutorial. Syarat aktif: nilai UAS murni minimal 30.'
  },
  tmk: {
    id: 'tmk',
    name: 'Tugas Mata Kuliah (TMK)',
    uasWeight: 0.80,
    activityWeight: 0.20,
    description: 'Skema tugas mandiri 3 sesi via tmk.ut.ac.id bagi yang tidak ikut Tuton.',
    ruleExplanation: 'Bobot dominan ujian: 80% UAS + 20% Tugas TMK. Syarat aktif: nilai UAS murni minimal 30.'
  },
  praktik: {
    id: 'praktik',
    name: 'Praktik / Praktikum',
    uasWeight: 0.50,
    activityWeight: 0.50,
    description: 'Mata kuliah berpraktik dengan laporan bimbingan instruktur.',
    ruleExplanation: 'Bobot dapat disesuaikan dengan pedoman program studi (default 50% UAS : 50% Praktik).'
  }
};

export interface GradeThreshold {
  letter: string;
  minScore: number;
  bobot: number;
  status: 'Lulus' | 'Lulus Bersyarat' | 'Tidak Lulus';
  keterangan: string;
}

export const GRADE_THRESHOLDS: GradeThreshold[] = [
  { letter: 'A', minScore: 80, bobot: 4.00, status: 'Lulus', keterangan: 'Sangat Baik' },
  { letter: 'A-', minScore: 75, bobot: 3.50, status: 'Lulus', keterangan: 'Antara Baik Sekali & Sangat Baik' },
  { letter: 'B', minScore: 70, bobot: 3.00, status: 'Lulus', keterangan: 'Baik Sekali' },
  { letter: 'B-', minScore: 65, bobot: 2.50, status: 'Lulus', keterangan: 'Antara Cukup Baik & Baik Sekali' },
  { letter: 'C', minScore: 60, bobot: 2.00, status: 'Lulus', keterangan: 'Cukup' },
  { letter: 'C-', minScore: 55, bobot: 1.50, status: 'Lulus', keterangan: 'Antara Kurang & Cukup' },
  { letter: 'D', minScore: 50, bobot: 1.00, status: 'Lulus Bersyarat', keterangan: 'Kurang (Tidak diperbolehkan pada MK Inti/TAP/Karil)' },
  { letter: 'E', minScore: 0, bobot: 0.00, status: 'Tidak Lulus', keterangan: 'Gagal (Wajib registrasi ulang mata kuliah)' }
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
    finalScore = Number(uasScore.toFixed(2));
    letterGrade = 'E';
    bobot = 0.0;
    isPassed = false;
    uasContribution = uasScore;
    activityContribution = 0;
    warningMessage = 'Nilai UAS murni Anda kurang dari 30 poin. Berdasarkan Peraturan Rektor UT, nilai bimbingan/tutorial dinyatakan gugur dan nilai akhir otomatis menjadi huruf mutu E (Gagal).';
  } else {
    finalScore = Number(rawCalculatedScore.toFixed(2));
    uasContribution = Number((uasScore * uasWeight).toFixed(2));
    activityContribution = Number((activityScore * activityWeight).toFixed(2));

    const matchedGrade = GRADE_THRESHOLDS.find(g => finalScore >= g.minScore) || GRADE_THRESHOLDS[GRADE_THRESHOLDS.length - 1];
    letterGrade = matchedGrade.letter;
    bobot = matchedGrade.bobot;
    isPassed = matchedGrade.status === 'Lulus' || matchedGrade.status === 'Lulus Bersyarat';

    if (letterGrade === 'D') {
      warningMessage = 'Catatan: Nilai D merupakan kelulusan bersyarat. Pada mata kuliah tertentu (TAP, Karya Ilmiah, Praktikum), batas nilai minimal yang diperbolehkan adalah C.';
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

  const activityContribution = activityScore * activityWeight;
  const rawNeededUas = (targetMinScore - activityContribution) / uasWeight;
  let requiredUas = Math.ceil(rawNeededUas);

  if (requiredUas < 30) {
    requiredUas = 30;
  }

  const isPossible = requiredUas <= 100;

  let message = '';
  if (!isPossible) {
    message = `Secara matematis nilai huruf ${targetGradeLetter} (skor minimal ${targetMinScore}) tidak dapat dicapai karena membutuhkan nilai ujian di atas 100 (tepatnya ${requiredUas}).`;
  } else if (requiredUas === 30) {
    message = `Dengan skor aktivitas ${activityScore}, Anda hanya butuh mencapai batas aman minimal 30 poin pada hari ujian untuk mengamankan nilai huruf ${targetGradeLetter}.`;
  } else {
    message = `Untuk mengamankan nilai huruf ${targetGradeLetter} (skor minimal ${targetMinScore}), Anda wajib memperoleh nilai ujian minimal ${requiredUas} dari 100 poin.`;
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
      statusKeterangan: 'Belum ada data mata kuliah yang dimasukkan.'
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
    'C-': 1.5,
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
    else if (c.letter === 'C' || c.letter === 'C-') countC++;
    else if (c.letter === 'B' || c.letter === 'B-') countB++;
    else if (c.letter === 'A' || c.letter === 'A-') countA++;
  });

  const ipk = totalSks > 0 ? Number((totalMutu / totalSks).toFixed(2)) : 0;
  const hasGradeE = countE > 0;

  let predikat = 'Cukup';
  let statusKeterangan = '';

  if (ipk >= 3.51 && ipk <= 4.00) {
    predikat = hasGradeE ? 'Sangat Memuaskan (Gugur Cumlaude karena terdapat nilai E)' : 'Dengan Pujian (Cumlaude)';
    statusKeterangan = hasGradeE 
      ? 'IPK memenuhi standar skor Cumlaude (≥ 3.51), namun ketentuan yudisium UT mensyaratkan tidak boleh memiliki nilai E.'
      : 'Memenuhi kriteria kelulusan Dengan Pujian (Cumlaude). Pastikan masa studi sesuai ketentuan fakultas.';
  } else if (ipk >= 3.01 && ipk <= 3.50) {
    predikat = 'Sangat Memuaskan';
    statusKeterangan = 'Pencapaian akademik di atas rata-rata kelulusan program sarjana.';
  } else if (ipk >= 2.76 && ipk <= 3.00) {
    predikat = 'Memuaskan';
    statusKeterangan = 'Memenuhi standar predikat memuaskan sesuai pedoman akademik.';
  } else if (ipk >= 2.00 && ipk <= 2.75) {
    predikat = 'Cukup';
    statusKeterangan = 'Memenuhi ambang batas minimal kelulusan sarjana (IPK ≥ 2.00).';
  } else {
    predikat = 'Di Bawah Standar Kelulusan';
    statusKeterangan = 'IPK di bawah 2.00. Diperlukan perbaikan nilai mata kuliah D atau E untuk dapat yudisium.';
  }

  if (hasGradeE) {
    statusKeterangan += ` Terdapat ${countE} mata kuliah bernilai E yang wajib diulang.`;
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
 * Format Text untuk WhatsApp & Salin Ringkasan (Bebas dari emoji berlebihan yang norak)
 */
export function generateShareText(result: FinalGradeResult, courseName?: string): string {
  const schemeName = ASSESSMENT_SCHEMES[result.assessmentType].name;
  const statusStr = result.isPassed ? 'LULUS' : 'TIDAK LULUS';
  const uasAlert = result.isUasBelowThreshold 
    ? '\n[PERINGATAN] Nilai UAS murni < 30. Sesuai regulasi UT, nilai tutorial gugur & otomatis huruf E.' 
    : '';

  return `SIMULASI NILAI AKHIR UT - NilaiUT.com
${courseName ? `Mata Kuliah: ${courseName}\n` : ''}Skema: ${schemeName}
----------------------------------------
Nilai Ujian (UAS): ${result.uasScore} (Bobot ${(result.uasWeight * 100)}%)
Nilai Aktivitas Tutorial: ${result.activityScore} (Bobot ${(result.activityWeight * 100)}%)
Nilai Akhir: ${result.finalScore}
Huruf Mutu: ${result.letterGrade} (Bobot: ${result.bobot.toFixed(2)})
Status: ${statusStr}${uasAlert}
----------------------------------------
Kalkulator Nilai & IPK UT Online:
https://nilaiut.com`;
}

export function generateIpkShareText(ipkResult: IpkCalculationResult): string {
  return `REKAPITULASI IPK MAHASISWA UT - NilaiUT.com
----------------------------------------
Indeks Prestasi Kumulatif (IPK): ${ipkResult.ipk.toFixed(2)}
Predikat: ${ipkResult.predikat}
Total SKS: ${ipkResult.totalSks} SKS
Total Nilai Mutu: ${ipkResult.totalMutu}
----------------------------------------
Komposisi Nilai:
- Nilai A: ${ipkResult.countA} MK
- Nilai B: ${ipkResult.countB} MK
- Nilai C: ${ipkResult.countC} MK
- Nilai D: ${ipkResult.countD} MK
- Nilai E: ${ipkResult.countE} MK ${ipkResult.hasGradeE ? '(Wajib Ulang)' : ''}
----------------------------------------
Hitung dan pantau kelulusan di:
https://nilaiut.com`;
}
