import React from 'react';
import Link from 'next/link';
import GradeCalculator from '@/components/GradeCalculator';
import IpkCalculator from '@/components/IpkCalculator';
import EmbedWidgetGenerator from '@/components/EmbedWidgetGenerator';
import FaqAccordion, { FaqItem } from '@/components/FaqAccordion';
import JsonLd from '@/components/JsonLd';
import {
  ShieldAlert,
  Zap,
  Lock,
  GraduationCap,
  Sparkles,
  BookOpen,
  ArrowRight,
  CheckCircle,
  HelpCircle,
  Clock,
  Layers,
  FileCheck2,
  CalendarCheck
} from 'lucide-react';

const HOME_FAQS: FaqItem[] = [
  {
    question: "Bagaimana rumus resmi menghitung nilai akhir mata kuliah di Universitas Terbuka?",
    answer: `Berdasarkan <strong>Peraturan Rektor Universitas Terbuka No. 16/2017</strong>, formula penilaian disesuaikan dengan jenis modus tutorial yang Anda ikuti:
    <ul class='list-disc pl-5 mt-2 space-y-1'>
      <li><strong>Tutorial Online (Tuton):</strong> Nilai Akhir = (70% × Nilai UAS) + (30% × Nilai Tuton).</li>
      <li><strong>Tutorial Tatap Muka / Webinar (Tuweb/TTM):</strong> Nilai Akhir = (50% × Nilai UAS) + (50% × Nilai Tuweb).</li>
      <li><strong>Tugas Mata Kuliah (TMK):</strong> Nilai Akhir = (80% × Nilai UAS) + (20% × Nilai TMK).</li>
      <li><strong>Mata Kuliah Praktik / Berpraktik:</strong> Bobot disesuaikan panduan buku materi pokok (umumnya 50% UAS : 50% Laporan Praktik atau 100% Praktik).</li>
    </ul>
    <strong>Syarat Wajib:</strong> Nilai keaktifan (Tuton/TMK/Tuweb) hanya dihitung jika nilai UAS murni Anda minimal 30 poin.`
  },
  {
    question: "Apa yang terjadi jika nilai UAS saya di bawah 30 (misal 28 atau 29)?",
    answer: `Sesuai ketentuan baku UT, <strong>aturan minimal 30</strong> menyatakan bahwa apabila nilai UAS murni mahasiswa bernilai kurang dari 30 (misal 0 - 29,99), maka seluruh kontribusi nilai Tuton, TMK, maupun Tuweb dinyatakan <strong>HANGUS (tidak diperhitungkan)</strong>. Nilai akhir yang diolah di pangkalan data UT murni diambil dari nilai ujian Anda, yang otomatis menghasilkan <strong>Huruf Mutu E (Gagal)</strong> dan Anda wajib registrasi ulang atau ujian online ulang (SUO).`
  },
  {
    question: "Apakah nilai D di UT dianggap lulus?",
    answer: `Nilai D (rentang skor 55 - 59,99 dengan bobot 1.00) dikategorikan sebagai <em>Lulus Bersyarat</em>. Anda dapat lulus sarjana dengan beberapa nilai D, asalkan <strong>IPK kelulusan minimal 2.00</strong> dan jumlah SKS bernilai D tidak melebihi batas maksimal persentase kurikulum fakultas. Namun, untuk mata kuliah krusial seperti Tugas Akhir Program (TAP), Karya Ilmiah (Karil), Praktikum, dan Pendidikan Agama, nilai minimal yang disyaratkan wajib C.`
  },
  {
    question: "Berapa standar IPK untuk meraih predikat Cumlaude (Dengan Pujian) di UT?",
    answer: `Standar predikat kelulusan yudisium Universitas Terbuka adalah sebagai berikut:
    <ul class='list-disc pl-5 mt-2 space-y-1'>
      <li><strong>Dengan Pujian (Cumlaude):</strong> IPK 3.51 - 4.00, dengan syarat masa studi tepat waktu dan <em>TIDAK ADA nilai E</em> sama sekali.</li>
      <li><strong>Sangat Memuaskan:</strong> IPK 3.01 - 3.50.</li>
      <li><strong>Memuaskan:</strong> IPK 2.76 - 3.00.</li>
      <li><strong>Cukup:</strong> IPK 2.00 - 2.75.</li>
    </ul>`
  },
  {
    question: "Apakah kalkulator NilaiUT ini menyimpan data nilai atau data pribadi saya?",
    answer: `Sama sekali tidak! NilaiUT dirancang <strong>100% Client-Side</strong> menggunakan algoritma JavaScript murni yang dieksekusi langsung di peramban (browser) laptop atau ponsel Anda. Nol byte data dikirim ke database server, tidak memerlukan login NIM, sehingga privasi akademik Anda terlindungi 100%.`
  }
];

export default function HomePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: HOME_FAQS.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer.replace(/<[^>]+>/g, ''),
      },
    })),
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      <JsonLd data={faqSchema} />

      {/* HERO SECTION */}
      <section className="relative pt-8 sm:pt-16 pb-6 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_35%_at_50%_0%,rgba(37,99,235,0.12)_0%,transparent_100%)] dark:bg-[radial-gradient(45%_35%_at_50%_0%,rgba(37,99,235,0.18)_0%,transparent_100%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-5">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Kalkulator Nilai UT Paling Lengkap & Terakurat di Indonesia</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            Kalkulator Nilai & IPK <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
              Universitas Terbuka
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Hitung nilai akhir Tuton (70:30), TMK (80:20), Tuweb (50:50), dan target skor minimal UAS sesuai Peraturan Rektor No. 16/2017 secara instan, aman, dan 100% di browser Anda.
          </p>

          {/* Trust Highlights */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            <span className="flex items-center gap-1.5 bg-white dark:bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 shadow-xs">
              <Zap className="w-4 h-4 text-amber-500" /> Cepat & Tanpa Delay Server
            </span>
            <span className="flex items-center gap-1.5 bg-white dark:bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 shadow-xs">
              <ShieldAlert className="w-4 h-4 text-red-500" /> Proteksi Aturan UAS &lt; 30
            </span>
            <span className="flex items-center gap-1.5 bg-white dark:bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 shadow-xs">
              <Lock className="w-4 h-4 text-emerald-500" /> 100% Aman & Tanpa Login NIM
            </span>
          </div>
        </div>
      </section>

      {/* CORE TOOL 1: KALKULATOR NILAI AKHIR */}
      <section id="kalkulator-nilai" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <GradeCalculator />
      </section>

      {/* INFO BANNER: MENGAPA ATURAN UAS 30 BEGITU MENENTUKAN */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-900 to-indigo-950 text-white border border-blue-800 shadow-xl space-y-4">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4" />
            <span>Penting untuk Mahasiswa Baru & Lama UT</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold">
            Mengapa Nilai Tuton 100 Bisa Tidak Berguna Jika UAS &lt; 30?
          </h2>
          <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed">
            Banyak mahasiswa Universitas Terbuka yang terkejut ketika mendapatkan nilai akhir <strong>E (Gagal)</strong> padahal selalu aktif mengerjakan 8 sesi diskusi dan 3 tugas Tutorial Online (Tuton) dengan nilai sempurna. Hal ini disebabkan oleh <strong>Klausul Syarat Minimal UAS 30 Poin</strong>. Apabila skor murni lembar jawaban UAS Anda bernilai di bawah 30 dari 100 poin, maka secara sistem bimbingan tutorial Anda dinyatakan <strong>tidak berkontribusi sama sekali</strong>.
          </p>
          <div className="pt-2">
            <Link
              href="/panduan/aturan-syarat-minimal-uas-30"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-300 hover:text-amber-200 underline underline-offset-4"
            >
              <span>Pelajari strategi lolos batas minimal UAS 30 di panduan lengkap kami</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CORE TOOL 2: KALKULATOR IPK & PREDIKAT KELULUSAN */}
      <section id="kalkulator-ipk" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <IpkCalculator />
      </section>

      {/* OFFICIAL UT GRADE SCALE REFERENCE TABLE */}
      <section id="tabel-huruf-mutu" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Tabel Standar Rentang Nilai & Bobot Huruf Mutu UT
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Konversi resmi skor angka (0 - 100) menjadi huruf mutu dan angka mutu berdasarkan Buku Pedoman Mahasiswa UT.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold uppercase tracking-wider border-b border-slate-200 dark:border-slate-800">
                <th className="py-3.5 px-4 sm:px-6">Huruf Mutu</th>
                <th className="py-3.5 px-4 sm:px-6">Rentang Skor Angka</th>
                <th className="py-3.5 px-4 sm:px-6">Angka Mutu (Bobot)</th>
                <th className="py-3.5 px-4 sm:px-6">Status Kelulusan</th>
                <th className="py-3.5 px-4 sm:px-6">Keterangan Akademik</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300 text-xs sm:text-sm">
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <td className="py-3.5 px-4 sm:px-6 font-bold text-emerald-600 dark:text-emerald-400 text-base">A</td>
                <td className="py-3.5 px-4 sm:px-6 font-mono font-medium">80,00 - 100,00</td>
                <td className="py-3.5 px-4 sm:px-6 font-bold">4.00</td>
                <td className="py-3.5 px-4 sm:px-6"><span className="px-2 py-0.5 rounded text-xs font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">LULUS</span></td>
                <td className="py-3.5 px-4 sm:px-6">Sangat Baik (Istimewa)</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <td className="py-3.5 px-4 sm:px-6 font-bold text-emerald-600 dark:text-emerald-400 text-base">A-</td>
                <td className="py-3.5 px-4 sm:px-6 font-mono font-medium">75,00 - 79,99</td>
                <td className="py-3.5 px-4 sm:px-6 font-bold">3.50</td>
                <td className="py-3.5 px-4 sm:px-6"><span className="px-2 py-0.5 rounded text-xs font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">LULUS</span></td>
                <td className="py-3.5 px-4 sm:px-6">Antara Baik Sekali & Sangat Baik</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <td className="py-3.5 px-4 sm:px-6 font-bold text-blue-600 dark:text-blue-400 text-base">B</td>
                <td className="py-3.5 px-4 sm:px-6 font-mono font-medium">70,00 - 74,99</td>
                <td className="py-3.5 px-4 sm:px-6 font-bold">3.00</td>
                <td className="py-3.5 px-4 sm:px-6"><span className="px-2 py-0.5 rounded text-xs font-bold bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300">LULUS</span></td>
                <td className="py-3.5 px-4 sm:px-6">Baik Sekali</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <td className="py-3.5 px-4 sm:px-6 font-bold text-blue-600 dark:text-blue-400 text-base">B-</td>
                <td className="py-3.5 px-4 sm:px-6 font-mono font-medium">65,00 - 69,99</td>
                <td className="py-3.5 px-4 sm:px-6 font-bold">2.50</td>
                <td className="py-3.5 px-4 sm:px-6"><span className="px-2 py-0.5 rounded text-xs font-bold bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300">LULUS</span></td>
                <td className="py-3.5 px-4 sm:px-6">Antara Cukup Baik & Baik Sekali</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <td className="py-3.5 px-4 sm:px-6 font-bold text-amber-600 dark:text-amber-400 text-base">C</td>
                <td className="py-3.5 px-4 sm:px-6 font-mono font-medium">60,00 - 64,99</td>
                <td className="py-3.5 px-4 sm:px-6 font-bold">2.00</td>
                <td className="py-3.5 px-4 sm:px-6"><span className="px-2 py-0.5 rounded text-xs font-bold bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300">LULUS</span></td>
                <td className="py-3.5 px-4 sm:px-6">Cukup (Batas Minimal Kelulusan Standar)</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <td className="py-3.5 px-4 sm:px-6 font-bold text-amber-600 dark:text-amber-400 text-base">D</td>
                <td className="py-3.5 px-4 sm:px-6 font-mono font-medium">55,00 - 59,99</td>
                <td className="py-3.5 px-4 sm:px-6 font-bold">1.00</td>
                <td className="py-3.5 px-4 sm:px-6"><span className="px-2 py-0.5 rounded text-xs font-bold bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300">LULUS BERSYARAT</span></td>
                <td className="py-3.5 px-4 sm:px-6">Kurang (Wajib perhatikan batas SKS D dan MK Inti)</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <td className="py-3.5 px-4 sm:px-6 font-bold text-red-600 dark:text-red-400 text-base">E</td>
                <td className="py-3.5 px-4 sm:px-6 font-mono font-medium">0,00 - 54,99 (atau UAS &lt; 30)</td>
                <td className="py-3.5 px-4 sm:px-6 font-bold">0.00</td>
                <td className="py-3.5 px-4 sm:px-6"><span className="px-2 py-0.5 rounded text-xs font-bold bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-300">TIDAK LULUS</span></td>
                <td className="py-3.5 px-4 sm:px-6">Gagal (Wajib Registrasi Ulang / Ujian Ulang)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* EMBED WIDGET GENERATOR */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <EmbedWidgetGenerator />
      </section>

      {/* EDITORIAL GUIDES PREVIEW (SEO & ADSENSE FOUNDATION) */}
      <section id="panduan-akademik" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-20">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            <span>Pusat Informasi & Regulasi</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Panduan Akademik Resmi Mahasiswa UT
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Artikel panduan mendalam untuk membantu Anda memahami seluk-beluk perkuliahan jarak jauh di Universitas Terbuka.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Guide 1 */}
          <Link
            href="/panduan/cara-hitung-nilai-akhir-ut"
            className="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Cara Hitung Nilai Akhir UT Sesuai Peraturan Rektor
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Penjelasan komprehensif rumus nilai akhir, simulasi perhitungan real, dan cara memeriksa nilai di DNP MyUT.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center justify-between">
              <span>Baca Panduan Lengkap</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Guide 2 */}
          <Link
            href="/panduan/skema-bobot-tuton-tmk-tuweb"
            className="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Perbedaan Bobot Tuton 70:30, TMK 80:20 & Tuweb 50:50
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Kelebihan dan kelemahan masing-masing modus belajar, serta strategi memilih tutorial terbaik agar IPK maksimal.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center justify-between">
              <span>Baca Panduan Lengkap</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Guide 3 */}
          <Link
            href="/panduan/aturan-syarat-minimal-uas-30"
            className="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950/50 text-red-600 dark:text-red-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Aturan Syarat Minimal UAS 30 di UT & Cara Menghindarinya
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Bedah tuntas aturan penghangusan nilai Tuton saat UAS di bawah 30 dan tips persiapan menghadapi ujian online.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center justify-between">
              <span>Baca Panduan Lengkap</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Guide 4 */}
          <Link
            href="/panduan/cara-menghitung-ipk-dan-predikat-kelulusan-ut"
            className="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Cara Menghitung IPK Kumulatif & Predikat Kelulusan UT
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Syarat kelulusan sarjana, formula bobot mutu SKS, dan kiat mencapai predikat Dengan Pujian (Cumlaude).
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center justify-between">
              <span>Baca Panduan Lengkap</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Guide 5 */}
          <Link
            href="/panduan/kalender-akademik-dan-jadwal-uas-ut"
            className="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <CalendarCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Kalender Akademik, Cetak KTPU & Rilis Nilai MyUT
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Jadwal penting semester berjalan, tanggal aktivasi Tuton, jadwal cetak kartu ujian, dan pengumuman nilai resmi.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center justify-between">
              <span>Baca Panduan Lengkap</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Extra Card: Target Solver Banner */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-300 dark:border-amber-700/60 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                Ingin Mengetahui Target Nilai Ujian Anda?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Gunakan fitur Target Solver pada kalkulator di atas untuk memetakan berapa skor minimal UAS yang harus Anda raih demi mendapatkan huruf A atau B.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-amber-200 dark:border-amber-800/80">
              <Link
                href="/#target-solver"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 dark:text-amber-300 hover:underline"
              >
                <span>Coba Target Solver Sekarang</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FaqAccordion items={HOME_FAQS} />
      </section>
    </div>
  );
}
