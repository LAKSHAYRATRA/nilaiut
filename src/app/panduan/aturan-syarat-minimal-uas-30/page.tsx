import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import FaqAccordion, { FaqItem } from '@/components/FaqAccordion';
import { ArrowLeft, ShieldAlert, AlertTriangle, CheckCircle, HelpCircle, BookOpen, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Aturan Syarat Minimal UAS 30 Universitas Terbuka: Penyebab Nilai E & Cara Mengatasinya',
  description: 'Mengapa nilai Tuton hangus jika nilai UAS di bawah 30? Kupas tuntas aturan minimal UAS 30 poin UT, dampaknya pada DNP, serta tips lulus ujian online.',
  alternates: {
    canonical: 'https://nilaiut.com/panduan/aturan-syarat-minimal-uas-30/',
  },
  openGraph: {
    title: 'Aturan Syarat Minimal UAS 30 Universitas Terbuka: Panduan Lengkap',
    description: 'Pelajari mekanisme gugurnya nilai Tuton akibat nilai UAS di bawah 30 dan cara mengantisipasinya.',
    url: 'https://nilaiut.com/panduan/aturan-syarat-minimal-uas-30/',
    type: 'article',
  },
};

const UAS30_FAQS: FaqItem[] = [
  {
    question: "Apakah aturan batas minimal 30 poin ini berlaku untuk seluruh fakultas di UT?",
    answer: "Ya. Aturan syarat minimal nilai UAS 30 poin (skor ≥ 30 dari skala 100) berlaku universal untuk seluruh mahasiswa di lingkungan Fakultas Ekonomi dan Bisnis (FEB), Fakultas Hukum, Ilmu Sosial dan Ilmu Politik (FHISIP), Fakultas Sains dan Teknologi (FST), Fakultas Keguruan dan Ilmu Pendidikan (FKIP), hingga Sekolah Pascasarjana Universitas Terbuka."
  },
  {
    question: "Bagaimana jika nilai ujian saya pas 30,00? Apakah Tuton tetap dihitung?",
    answer: "Ya, nilai Tuton/TMK/Tuweb tetap dihitung! Batas ambang yang tertuang dalam regulasi adalah 'kurang dari 30' (UAS < 30). Oleh karena itu, jika nilai UAS Anda tepat mencapai angka 30,00, maka seluruh kontribusi nilai Tuton (30%) atau Tuweb (50%) Anda tetap sah digabungkan ke dalam perhitungan nilai akhir."
  },
  {
    question: "Apa yang harus saya lakukan jika sudah terlanjur mendapat nilai E akibat UAS di bawah 30?",
    answer: "Anda memiliki dua jalur solusi resmi dari UT: (1) Mengikuti Skema Ujian Online Ulang (SUO / Ujian Ulang) pada semester berikutnya atau periode yang dibuka oleh UPBJJ Anda dengan biaya per SKS yang terjangkau, atau (2) Melakukan registrasi ulang mata kuliah tersebut di masa semester berikutnya."
  }
];

export default function AturanUas30Page() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Beranda',
        item: 'https://nilaiut.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Panduan',
        item: 'https://nilaiut.com/#panduan-akademik',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Aturan Syarat Minimal UAS 30',
        item: 'https://nilaiut.com/panduan/aturan-syarat-minimal-uas-30/',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: UAS30_FAQS.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Kalkulator Nilai</span>
        </Link>
      </div>

      <header className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-300">
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>Peringatan Regulasi Kritis</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
          Aturan Syarat Minimal UAS 30 di UT: Mengapa Ada dan Cara Menghindari Nilai E
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Ketahui rahasia di balik sistem evaluasi akademik Universitas Terbuka yang kerap menggugurkan nilai tutorial mahasiswa, dasar filosofis penjaminan mutu, dan panduan taktis agar aman saat hari ujian.
        </p>
        <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 pt-2">
          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> Waktu Baca: 8 Menit</span>
          <span>•</span>
          <span>Pedoman Resmi Evaluasi Belajar UT</span>
        </div>
      </header>

      <article className="prose dark:prose-invert max-w-none space-y-6 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
        <p>
          Salah satu keluhan yang paling sering muncul di berbagai grup Telegram, WhatsApp, dan forum mahasiswa Universitas Terbuka saat pengumuman Daftar Nilai Perkuliahan (DNP) adalah:
        </p>
        <blockquote className="p-4 my-4 border-l-4 border-red-500 bg-red-50/50 dark:bg-slate-800/60 rounded-r-xl italic text-slate-800 dark:text-slate-200">
          "Nilai Tuton saya rata-rata 95 di portal elearning, semua tugas 1, 2, 3 saya kumpulkan tepat waktu. Tapi begitu DNP MyUT keluar, kenapa nilai saya malah E (Gagal)?"
        </blockquote>
        <p>
          Jawabannya hampir 99% bermuara pada satu aturan emas universitas: <strong>Syarat Batas Minimal UAS 30 Poin</strong>.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-4">
          Mengapa Universitas Terbuka Menerapkan Aturan Minimal 30?
        </h2>
        <p>
          Banyak mahasiswa mengira aturan ini dibuat untuk mempersulit kelulusan. Sebenarnya, regulasi ini adalah pilar utama <strong>Penjaminan Mutu Akademik (Quality Assurance)</strong> Universitas Terbuka yang diawasi oleh BAN-PT dan lembaga akreditasi internasional seperti ICDE (International Council for Open and Distance Education).
        </p>
        <p>
          Alasan mendasar di balik aturan ini meliputi:
        </p>
        <ol className="list-decimal pl-5 space-y-2">
          <li><strong>Integritas Pengerjaan Tugas Jarak Jauh:</strong> Tutorial Online (Tuton) dan Tugas Mata Kuliah (TMK) dikerjakan secara asinkron dari rumah tanpa pengawasan langsung (unproctored). Universitas menyadari potensi bantuan pihak ketiga, plagiarisme, atau joki tugas.</li>
          <li><strong>Ujian Sebagai Validasi Penguasaan Mandiri:</strong> Ujian Akhir Semester (baik Ujian Tatap Muka di sekolah mitra maupun Ujian Online Terpadu dengan pengawasan kamera) adalah instrumen objektif untuk menguji apakah mahasiswa benar-benar menguasai Buku Materi Pokok (BMP / Modul).</li>
          <li><strong>Standar Kompetensi Lulusan:</strong> Jika seorang mahasiswa tidak mampu menjawab minimal 30% pertanyaan yang menguji kompetensi dasar modul, maka mahasiswa tersebut dipandang belum layak menyandang kompetensi mata kuliah bersangkutan.</li>
        </ol>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-4">
          Simulasi Perhitungan Matematika: Lolos vs Terjebak
        </h2>
        <p>
          Mari bandingkan dua skenario nyata untuk memahami betapa dramatisnya perbedaan nilai akibat selisih 2 poin saja:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
          {/* Skenario A */}
          <div className="p-5 rounded-xl border border-red-300 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20 space-y-3">
            <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-bold text-sm">
              <AlertTriangle className="w-5 h-5" />
              <span>Skenario A: UAS = 29 (Di Bawah 30)</span>
            </div>
            <ul className="text-xs sm:text-sm space-y-1 text-slate-700 dark:text-slate-300">
              <li>Nilai Tuton: <strong>95</strong> (Sangat Tinggi)</li>
              <li>Nilai UAS Murni: <strong>29</strong></li>
              <li>Status Aturan 30: <strong>TIDAK LOLOS</strong></li>
              <li>Kontribusi Tuton: <strong>0 (HANGUS)</strong></li>
              <li>Nilai Akhir: <strong>29,00</strong></li>
              <li>Huruf Mutu: <strong className="text-red-600">E (GAGAL / TIDAK LULUS)</strong></li>
            </ul>
          </div>

          {/* Skenario B */}
          <div className="p-5 rounded-xl border border-emerald-300 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-950/20 space-y-3">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
              <CheckCircle className="w-5 h-5" />
              <span>Skenario B: UAS = 31 (Lolos Batas Aman)</span>
            </div>
            <ul className="text-xs sm:text-sm space-y-1 text-slate-700 dark:text-slate-300">
              <li>Nilai Tuton: <strong>95</strong></li>
              <li>Nilai UAS Murni: <strong>31</strong></li>
              <li>Status Aturan 30: <strong>LOLOS AMAN</strong></li>
              <li>Kontribusi UAS: 70% × 31 = 21,70</li>
              <li>Kontribusi Tuton: 30% × 95 = 28,50</li>
              <li>Nilai Akhir: <strong>50,20</strong></li>
              <li>Huruf Mutu: <strong className="text-amber-600">D / C (Berpotensi Lulus Bersyarat)</strong></li>
            </ul>
          </div>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-4">
          Strategi Taktis Menghindari Nilai UAS di Bawah 30
        </h2>
        <p>
          UAS di UT umumnya menyajikan 40 hingga 50 butir soal pilihan ganda (untuk UTM / UO) atau 4 soal esai studi kasus komprehensif (untuk THE). Untuk mengamankan minimal 30 poin, ikuti langkah berikut:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Kuasai Tes Formatif Modul:</strong> Sekitar 60-70% soal ujian pilihan ganda UT dirancang berpedoman pada konsep-konsep tes formatif di setiap akhir kegiatan belajar modul BMP. Kerjakan seluruh tes formatif tanpa melihat kunci jawaban terlebih dahulu.</li>
          <li><strong>Pelajari Rangkuman Modul (KB):</strong> Setiap modul UT dilengkapi ringkasan intisari. Fokuskan membaca ringkasan tersebut pada H-7 sebelum hari pelaksanaan ujian.</li>
          <li><strong>Jangan Pernah Mengosongkan Lembar Jawaban:</strong> Pada soal pilihan ganda ujian UT, tidak ada sistem pengurangan nilai (minus) untuk jawaban yang keliru. Jawab seluruh butir soal hingga tuntas.</li>
          <li><strong>Gunakan Fitur Target Solver NilaiUT:</strong> Cek berapa nilai minimal yang wajib Anda bidik dengan memasukkan nilai Tuton Anda ke dalam kalkulator di halaman utama.</li>
        </ul>

        <div className="p-6 my-8 rounded-2xl bg-slate-900 text-white text-center space-y-4 not-prose border border-slate-800">
          <h3 className="text-xl font-bold">Cek Status Batas Aman Nilai Anda</h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Simulasikan nilai UAS Anda sekarang dan pastikan Anda berada di zona aman kelulusan.
          </p>
          <Link
            href="/#kalkulator-nilai"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm transition-colors shadow-lg shadow-red-600/30"
          >
            <span>Buka Detektor Aturan UAS 30</span>
          </Link>
        </div>
      </article>

      <section className="pt-8 border-t border-slate-200 dark:border-slate-800">
        <FaqAccordion
          items={UAS30_FAQS}
          title="FAQ Aturan Batas Minimal UAS 30"
          subtitle="Jawaban pertanyaan seputar regulasi skor 30 dan penanganan nilai gagal"
        />
      </section>
    </div>
  );
}
