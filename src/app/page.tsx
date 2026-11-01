import React from 'react';
import Link from 'next/link';
import GradeCalculator from '@/components/GradeCalculator';
import IpkCalculator from '@/components/IpkCalculator';
import EmbedWidgetGenerator from '@/components/EmbedWidgetGenerator';
import FaqAccordion, { FaqItem } from '@/components/FaqAccordion';
import JsonLd from '@/components/JsonLd';
import {
  ShieldAlert,
  ArrowRight,
  Check,
  Scale
} from 'lucide-react';

const HOME_FAQS: FaqItem[] = [
  {
    question: "Apa itu Kalkulator Nilai UT (Kalkulator UT) dan bagaimana cara kerjanya?",
    answer: `<strong>Kalkulator Nilai UT</strong> (atau biasa disebut <strong>Kalkulator UT</strong>) adalah aplikasi web interaktif yang dirancang khusus untuk mahasiswa Universitas Terbuka guna menghitung simulasi nilai akhir mata kuliah dan IPK secara instan. Algoritma kalkulator ini menerapkan formula resmi <strong>Peraturan Rektor UT No. 16/2017</strong>, mencakup pembobotan Tuton (70:30), TMK (80:20), Tuweb (50:50), konversi huruf mutu (A hingga E), serta sistem proteksi otomatis terhadap <strong>aturan minimal UAS 30</strong>.`
  },
  {
    question: "Bagaimana cara hitung nilai UT resmi untuk Tuton, TMK, dan Tuweb?",
    answer: `Cara hitung nilai UT didasarkan pada rumus pembobotan resmi Universitas Terbuka:
    <ul class='list-disc pl-5 mt-2 space-y-1'>
      <li><strong>Skema Tuton (Tutorial Online):</strong> Nilai Akhir = (70% × Skor UAS) + (30% × Skor Tuton).</li>
      <li><strong>Skema TMK (Tugas Mata Kuliah):</strong> Nilai Akhir = (80% × Skor UAS) + (20% × Skor TMK).</li>
      <li><strong>Skema Tuweb / TTM (Webinar & Tatap Muka):</strong> Nilai Akhir = (50% × Skor UAS) + (50% × Skor Tuweb).</li>
      <li><strong>Mata Kuliah Praktik:</strong> Default 50% UAS + 50% Laporan Praktik atau disesuaikan dengan ketentuan fakultas.</li>
    </ul>
    <em>Catatan penting:</em> Nilai bantuan belajar hanya berlaku jika nilai UAS murni Anda &ge; 30 poin.`
  },
  {
    question: "Apa yang terjadi jika nilai UAS saya di bawah 30 (misal 28 atau 29)?",
    answer: `Sesuai ketentuan baku UT, <strong>aturan minimal 30</strong> menyatakan bahwa apabila nilai UAS murni mahasiswa bernilai kurang dari 30 (0 - 29,99), maka seluruh kontribusi nilai Tuton, TMK, maupun Tuweb dinyatakan <strong>gugur (tidak diperhitungkan)</strong>. Nilai akhir yang diolah di pangkalan data UT murni diambil dari nilai ujian Anda, yang otomatis menghasilkan <strong>Huruf Mutu E (Gagal)</strong> dan Anda wajib registrasi ulang atau ujian online ulang (SUO).`
  },
  {
    question: "Apakah nilai D di UT dianggap lulus?",
    answer: `Nilai D (rentang skor 55 - 59,99 dengan bobot 1.00) dikategorikan sebagai <em>Lulus Bersyarat</em>. Anda dapat lulus sarjana dengan beberapa nilai D, asalkan <strong>IPK kelulusan minimal 2.00</strong> dan jumlah SKS bernilai D tidak melebihi batas maksimal persentase kurikulum fakultas. Namun, untuk mata kuliah Tugas Akhir Program (TAP), Karya Ilmiah (Karil), Praktikum, dan Pendidikan Agama, nilai minimal yang disyaratkan wajib C.`
  },
  {
    question: "Berapa standar IPK untuk meraih predikat Cumlaude (Dengan Pujian) di UT?",
    answer: `Standar predikat kelulusan yudisium Universitas Terbuka adalah sebagai berikut:
    <ul class='list-disc pl-5 mt-2 space-y-1'>
      <li><strong>Dengan Pujian (Cumlaude):</strong> IPK 3.51 - 4.00, dengan syarat masa studi tepat waktu dan tidak memiliki nilai E sama sekali.</li>
      <li><strong>Sangat Memuaskan:</strong> IPK 3.01 - 3.50.</li>
      <li><strong>Memuaskan:</strong> IPK 2.76 - 3.00.</li>
      <li><strong>Cukup:</strong> IPK 2.00 - 2.75.</li>
    </ul>`
  },
  {
    question: "Apakah kalkulator NilaiUT ini menyimpan data nilai atau data pribadi saya?",
    answer: `Tidak. NilaiUT dirancang <strong>100% Client-Side</strong> menggunakan algoritma JavaScript murni yang dieksekusi langsung di peramban laptop atau ponsel Anda. Tidak ada data yang dikirim ke database server, tidak memerlukan login NIM, sehingga kerahasiaan akademik Anda terlindungi.`
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
    <div className="pb-16">
      <JsonLd data={faqSchema} />

      {/* Minimal Clean Hero Header */}
      <section className="bg-white border-b border-slate-200 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider border border-slate-200">
              <span>Aplikasi Kalkulator Nilai UT &amp; Kalkulator UT #1 Terakurat</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-snug">
              Kalkulator Nilai UT &amp; Kalkulator UT: Cara Hitung Nilai Akhir &amp; IPK Resmi
            </h1>
            <p className="text-sm sm:text-base text-[#334155] leading-relaxed max-w-3xl">
              <strong>Kalkulator Nilai UT</strong> (sering disebut <strong>Kalkulator UT</strong>) adalah alat bantu resmi dan terakurat untuk simulasi cara hitung nilai UT mata kuliah Anda. 100% akurat sesuai Peraturan Rektor No. 16/2017 untuk skema Tutorial Online (Tuton 70:30), Tugas Mata Kuliah (TMK 80:20), Tutorial Webinar (Tuweb 50:50), Target Solver UAS, serta proteksi batas minimal UAS 30 poin.
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-xs text-[#64748B]">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Kalkulator Nilai UT 100% Client-Side &amp; Privasi Terjaga</span>
              </span>
              <span className="flex items-center gap-2">
                <Scale className="w-4 h-4 text-slate-600" />
                <span>Rujukan Resmi Buku Pedoman &amp; Katalog Penyelenggaraan UT</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Workspace */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* SECTION 1: CORE CALCULATOR TOOL */}
        <section id="kalkulator-nilai" className="scroll-mt-20">
          <GradeCalculator />
        </section>

        {/* SECTION 2: CRITICAL REGULATION NOTICE */}
        <section className="p-6 rounded-2xl bg-white border border-slate-200 border-l-4 border-l-amber-500 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-amber-50 text-amber-700 shrink-0 border border-amber-200">
              <ShieldAlert className="w-5 h-5 text-amber-600" />
            </div>
            <div className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-[#0F172A]">
                Ketentuan Wajib: Mengapa Nilai Tuton Hangus Jika Skor UAS Kurang dari 30?
              </h2>
              <p className="text-sm text-[#334155] leading-relaxed">
                Pasal evaluasi hasil belajar pada Peraturan Rektor UT menetapkan bahwa nilai tutorial (baik Tuton, Tuweb, maupun TMK) hanya dapat digabungkan ke nilai akhir apabila mahasiswa mencapai skor minimal <strong>30% dari skor maksimal ujian</strong> (skor UAS murni &ge; 30). Apabila ujian Anda memperoleh skor 29 atau lebih rendah, nilai keaktifan diskusi dan tugas Anda tidak diperhitungkan dan nilai akhir Anda otomatis dinyatakan sebagai huruf mutu <strong>E (Gagal)</strong>.
              </p>
              <div className="pt-1">
                <Link
                  href="/panduan/aturan-syarat-minimal-uas-30"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F172A] hover:underline"
                >
                  <span>Baca rincian aturan batas minimal UAS 30 dan solusinya</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: IPK & GRADUATION CALCULATOR */}
        <section id="kalkulator-ipk" className="scroll-mt-20">
          <IpkCalculator />
        </section>

        {/* SECTION 4: OFFICIAL GRADING SCALE REFERENCE TABLE */}
        <section id="tabel-huruf-mutu" className="space-y-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
              Tabel Rentang Nilai dan Angka Mutu Resmi UT
            </h2>
            <p className="text-sm text-[#64748B] mt-1">
              Standar konversi skor akhir angka (0 - 100) ke huruf mutu dan bobot kelulusan program Sarjana dan Diploma UT.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-[#0F172A] text-xs font-semibold border-b border-slate-200">
                  <th className="py-3.5 px-4 font-bold tracking-wide">Huruf Mutu</th>
                  <th className="py-3.5 px-4 font-bold tracking-wide">Rentang Skor</th>
                  <th className="py-3.5 px-4 font-bold tracking-wide">Bobot (Angka Mutu)</th>
                  <th className="py-3.5 px-4 font-bold tracking-wide">Status</th>
                  <th className="py-3.5 px-4 font-bold tracking-wide">Keterangan Akademik</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-[#334155] text-xs sm:text-sm">
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 px-4 font-extrabold text-[#0F172A] text-base">A</td>
                  <td className="py-3.5 px-4 font-mono font-semibold text-slate-800">80,00 - 100,00</td>
                  <td className="py-3.5 px-4 font-bold text-slate-900">4.00</td>
                  <td className="py-3.5 px-4"><span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">Lulus</span></td>
                  <td className="py-3.5 px-4 font-medium">Sangat Baik</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 px-4 font-extrabold text-[#0F172A] text-base">A-</td>
                  <td className="py-3.5 px-4 font-mono font-semibold text-slate-800">75,00 - 79,99</td>
                  <td className="py-3.5 px-4 font-bold text-slate-900">3.50</td>
                  <td className="py-3.5 px-4"><span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">Lulus</span></td>
                  <td className="py-3.5 px-4 font-medium">Antara Baik Sekali &amp; Sangat Baik</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 px-4 font-extrabold text-[#0F172A] text-base">B</td>
                  <td className="py-3.5 px-4 font-mono font-semibold text-slate-800">70,00 - 74,99</td>
                  <td className="py-3.5 px-4 font-bold text-slate-900">3.00</td>
                  <td className="py-3.5 px-4"><span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-[#0F172A] border border-slate-300">Lulus</span></td>
                  <td className="py-3.5 px-4 font-medium">Baik Sekali</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 px-4 font-extrabold text-[#0F172A] text-base">B-</td>
                  <td className="py-3.5 px-4 font-mono font-semibold text-slate-800">65,00 - 69,99</td>
                  <td className="py-3.5 px-4 font-bold text-slate-900">2.50</td>
                  <td className="py-3.5 px-4"><span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-[#0F172A] border border-slate-300">Lulus</span></td>
                  <td className="py-3.5 px-4 font-medium">Antara Cukup Baik &amp; Baik Sekali</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 px-4 font-extrabold text-[#0F172A] text-base">C</td>
                  <td className="py-3.5 px-4 font-mono font-semibold text-slate-800">60,00 - 64,99</td>
                  <td className="py-3.5 px-4 font-bold text-slate-900">2.00</td>
                  <td className="py-3.5 px-4"><span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-300">Lulus</span></td>
                  <td className="py-3.5 px-4 font-medium">Cukup (Batas minimal kelulusan MK Inti, TAP &amp; Karil)</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 px-4 font-extrabold text-[#0F172A] text-base">C-</td>
                  <td className="py-3.5 px-4 font-mono font-semibold text-slate-800">55,00 - 59,99</td>
                  <td className="py-3.5 px-4 font-bold text-slate-900">1.50</td>
                  <td className="py-3.5 px-4"><span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-300">Lulus</span></td>
                  <td className="py-3.5 px-4 font-medium">Antara Kurang &amp; Cukup</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 px-4 font-extrabold text-amber-700 text-base">D</td>
                  <td className="py-3.5 px-4 font-mono font-semibold text-slate-800">50,00 - 54,99</td>
                  <td className="py-3.5 px-4 font-bold text-slate-900">1.00</td>
                  <td className="py-3.5 px-4"><span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">Lulus Bersyarat</span></td>
                  <td className="py-3.5 px-4 font-medium">Kurang (Wajib perhatikan batas persentase SKS nilai D di fakultas)</td>
                </tr>
                <tr className="hover:bg-rose-50/40 transition-colors">
                  <td className="py-3.5 px-4 font-extrabold text-rose-700 text-base">E</td>
                  <td className="py-3.5 px-4 font-mono font-semibold text-rose-800">0,00 - 49,99 (atau UAS &lt; 30)</td>
                  <td className="py-3.5 px-4 font-bold text-rose-800">0.00</td>
                  <td className="py-3.5 px-4"><span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-50 text-rose-800 border border-rose-200">Gagal</span></td>
                  <td className="py-3.5 px-4 font-medium text-rose-700">Tidak Lulus (Wajib registrasi ulang mata kuliah / ujian online)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 5: EMBED WIDGET GENERATOR */}
        <section>
          <EmbedWidgetGenerator />
        </section>

        {/* SECTION 6: EDITORIAL GUIDES */}
        <section id="panduan-akademik" className="space-y-6 scroll-mt-20">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
              Artikel &amp; Panduan Perkuliahan UT
            </h2>
            <p className="text-sm text-[#64748B] mt-1">
              Kompilasi panduan mendalam untuk membantu mahasiswa memahami sistem evaluasi akademik Universitas Terbuka.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 divide-y divide-slate-100 shadow-sm overflow-hidden px-6">
            {/* Article Row 1 */}
            <article className="py-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 group">
              <div className="space-y-1 max-w-3xl">
                <Link
                  href="/panduan/cara-hitung-nilai-akhir-ut"
                  className="font-bold text-base sm:text-lg text-[#0F172A] group-hover:underline transition-colors"
                >
                  Cara Menghitung Nilai Akhir UT Berdasarkan Peraturan Rektor No. 16/2017
                </Link>
                <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                  Penjelasan teknis komponen penilaian, simulasi angka nyata, dan tata cara membaca lembar Daftar Nilai Perkuliahan (DNP) di portal MyUT.
                </p>
              </div>
              <Link
                href="/panduan/cara-hitung-nilai-akhir-ut"
                className="text-xs font-semibold text-[#0F172A] shrink-0 flex items-center gap-1 hover:underline"
              >
                <span>Baca panduan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </article>

            {/* Article Row 2 */}
            <article className="py-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 group">
              <div className="space-y-1 max-w-3xl">
                <Link
                  href="/panduan/skema-bobot-tuton-tmk-tuweb"
                  className="font-bold text-base sm:text-lg text-[#0F172A] group-hover:underline transition-colors"
                >
                  Perbedaan Bobot Nilai Tuton (70:30), TMK (80:20), dan Tuweb (50:50)
                </Link>
                <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                  Komparasi kelebihan dan kelemahan masing-masing modus bantuan belajar di UT, serta panduan memilih jenis tutorial yang paling aman untuk IPK Anda.
                </p>
              </div>
              <Link
                href="/panduan/skema-bobot-tuton-tmk-tuweb"
                className="text-xs font-semibold text-[#0F172A] shrink-0 flex items-center gap-1 hover:underline"
              >
                <span>Baca panduan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </article>

            {/* Article Row 3 */}
            <article className="py-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 group">
              <div className="space-y-1 max-w-3xl">
                <Link
                  href="/panduan/aturan-syarat-minimal-uas-30"
                  className="font-bold text-base sm:text-lg text-[#0F172A] group-hover:underline transition-colors"
                >
                  Klausul Syarat Minimal UAS 30 di UT: Mengapa Ada dan Cara Mengantisipasinya
                </Link>
                <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                  Penyebab nilai Tuton hangus ketika nilai UAS di bawah 30, dasar filosofi penjaminan mutu kampus, dan tips belajar menghadapi ujian pilihan ganda serta take-home exam.
                </p>
              </div>
              <Link
                href="/panduan/aturan-syarat-minimal-uas-30"
                className="text-xs font-semibold text-[#0F172A] shrink-0 flex items-center gap-1 hover:underline"
              >
                <span>Baca panduan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </article>

            {/* Article Row 4 */}
            <article className="py-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 group">
              <div className="space-y-1 max-w-3xl">
                <Link
                  href="/panduan/cara-menghitung-ipk-dan-predikat-kelulusan-ut"
                  className="font-bold text-base sm:text-lg text-[#0F172A] group-hover:underline transition-colors"
                >
                  Cara Menghitung Indeks Prestasi Kumulatif (IPK) dan Predikat Kelulusan UT
                </Link>
                <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                  Formula penghitungan bobot mutu SKS, ambang batas toleransi nilai D, dan kriteria kelulusan yudisium Dengan Pujian (Cumlaude).
                </p>
              </div>
              <Link
                href="/panduan/cara-menghitung-ipk-dan-predikat-kelulusan-ut"
                className="text-xs font-semibold text-[#0F172A] shrink-0 flex items-center gap-1 hover:underline"
              >
                <span>Baca panduan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </article>

            {/* Article Row 5 */}
            <article className="py-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 group">
              <div className="space-y-1 max-w-3xl">
                <Link
                  href="/panduan/kalender-akademik-dan-jadwal-uas-ut"
                  className="font-bold text-base sm:text-lg text-[#0F172A] group-hover:underline transition-colors"
                >
                  Kalender Akademik Universitas Terbuka: Jadwal Registrasi, Cetak KTPU &amp; Pengumuman DNP
                </Link>
                <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                  Siklus tahapan semester ganjil dan genap, batas tanggal aktivasi Tuton, panduan cetak kartu ujian, dan pengajuan sanggah nilai resmi.
                </p>
              </div>
              <Link
                href="/panduan/kalender-akademik-dan-jadwal-uas-ut"
                className="text-xs font-semibold text-[#0F172A] shrink-0 flex items-center gap-1 hover:underline"
              >
                <span>Baca panduan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </article>
          </div>
        </section>

        {/* SECTION 7: SEO DEEP-DIVE CONTENT */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6 text-[#334155] leading-relaxed">
          <header className="border-b border-slate-200 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
              Panduan Akademik Mahasiswa
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] mt-1">
              Panduan Lengkap Menggunakan Kalkulator Nilai UT &amp; Kalkulator UT
            </h2>
            <p className="text-sm text-[#64748B] mt-1">
              Ketahui bagaimana kalkulator nilai UT membantu Anda merencanakan kelulusan dan memprediksi nilai akhir dengan rumus resmi.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="space-y-3">
              <h3 className="text-base font-bold text-[#0F172A]">
                1. Mengapa Butuh Kalkulator Nilai UT?
              </h3>
              <p>
                Sebagai mahasiswa Universitas Terbuka (UT), sistem pembelajaran jarak jauh menuntut kemandirian dalam memantau capaian akademik. Menghitung nilai secara manual kerap membingungkan karena adanya perbedaan bobot antara skema <strong>Tutorial Online (Tuton)</strong>, <strong>Tugas Mata Kuliah (TMK)</strong>, dan <strong>Tutorial Webinar (Tuweb/TTM)</strong>.
              </p>
              <p>
                Aplikasi <strong>Kalkulator UT</strong> di NilaiUT.com menyederhanakan proses ini. Cukup masukkan nilai ujian dan nilai tugas atau diskusi, sistem akan mengolah angka secara otomatis sesuai standar Buku Katalog Penyelenggaraan UT edisi terkini.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-bold text-[#0F172A]">
                2. Cara Hitung Nilai UT Berdasarkan Modus Belajar
              </h3>
              <p>
                Berikut formula resmi yang diterapkan oleh kalkulator nilai UT:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li><strong>Skema Tuton:</strong> Nilai Akhir = <code>(70% × UAS) + (30% × Tuton)</code></li>
                <li><strong>Skema TMK:</strong> Nilai Akhir = <code>(80% × UAS) + (20% × TMK)</code></li>
                <li><strong>Skema Tuweb / TTM:</strong> Nilai Akhir = <code>(50% × UAS) + (50% × Tuweb)</code></li>
                <li><strong>Praktik / Praktikum:</strong> Disesuaikan dengan pedoman program studi (50:50 atau 100% praktik).</li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm space-y-2">
            <h4 className="font-bold text-[#0F172A]">
              Penting: Selalu Ingat Aturan Minimal UAS 30 Poin
            </h4>
            <p>
              Nilai bantuan belajar Anda (Tuton 30%, TMK 20%, Tuweb 50%) <strong>hanya memiliki bobot</strong> jika nilai murni ujian akhir semester (UAS) Anda mencapai <strong>minimal 30 poin</strong>. Jika nilai UAS Anda &lt; 30, maka nilai akhir otomatis menjadi huruf mutu <strong>E (Gagal)</strong>. Gunakan fitur <strong>Target Solver UAS</strong> pada kalkulator nilai UT kami untuk mengetahui berapa skor ujian minimal yang harus Anda raih demi mengamankan target nilai A, B, atau C.
            </p>
          </div>
        </section>

        {/* SECTION 8: FAQS */}
        <section>
          <FaqAccordion items={HOME_FAQS} />
        </section>
      </div>
    </div>
  );
}
