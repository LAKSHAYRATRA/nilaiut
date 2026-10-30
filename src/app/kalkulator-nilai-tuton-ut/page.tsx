import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import GradeCalculator from '@/components/GradeCalculator';
import FaqAccordion, { FaqItem } from '@/components/FaqAccordion';
import JsonLd from '@/components/JsonLd';
import { ArrowLeft, Sparkles, BookOpen, CheckCircle, ShieldAlert, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kalkulator Nilai Tuton UT Online (Bobot 70% UAS : 30% Tuton) - NilaiUT',
  description: 'Kalkulator khusus menghitung nilai akhir Tutorial Online (Tuton) Universitas Terbuka. Rumus resmi 70% UAS + 30% Tuton, deteksi aturan UAS minimal 30, dan Target Solver.',
  alternates: {
    canonical: 'https://nilaiut.com/kalkulator-nilai-tuton-ut/',
  },
  keywords: [
    'kalkulator nilai tuton ut',
    'hitung nilai tuton ut',
    'rumus nilai tuton ut',
    'bobot tuton ut 70 30',
    'cara hitung nilai tutorial online ut',
    'simulasi nilai tuton ut'
  ],
  openGraph: {
    title: 'Kalkulator Nilai Tuton UT Online (70:30) - NilaiUT',
    description: 'Hitung nilai akhir Tuton UT Anda secara otomatis dan akurat sesuai Peraturan Rektor No. 16/2017.',
    url: 'https://nilaiut.com/kalkulator-nilai-tuton-ut/',
    type: 'website',
  },
};

const TUTON_FAQS: FaqItem[] = [
  {
    question: "Berapa bobot pasti nilai Tuton dan UAS di Universitas Terbuka?",
    answer: "Sesuai Peraturan Rektor UT No. 16/2017, skema Tutorial Online (Tuton) memiliki proporsi <strong>70% Ujian Akhir Semester (UAS)</strong> dan <strong>30% Tutorial Online (Tuton)</strong>. Rumusnya: Nilai Akhir = (0.70 × Nilai UAS) + (0.30 × Nilai Rata-rata Tuton)."
  },
  {
    question: "Bagaimana cara menghitung nilai murni Tuton dari sesi 1 sampai 8?",
    answer: "Nilai Tuton dihitung dari tiga unsur utama: (1) Kehadiran/Aktivitas di 8 sesi inisiasi berbobot 20%, (2) Keaktifan berdiskusi di 8 forum diskusi berbobot 30%, dan (3) Rata-rata nilai 3 tugas wajib (Tugas 1, 2, dan 3 pada sesi 3, 5, dan 7) berbobot 50%."
  },
  {
    question: "Mengapa nilai Tuton saya tidak menambah nilai akhir saat UAS di bawah 30?",
    answer: "UT memberlakukan 'Syarat Batas Minimal UAS 30 Poin'. Apabila skor lembar jawaban UAS Anda kurang dari 30 (0 - 29.99), kontribusi nilai Tuton otomatis dinyatakan gugur/hangus, dan nilai akhir Anda langsung menjadi E (Gagal)."
  }
];

export default function KalkulatorTutonPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Beranda', item: 'https://nilaiut.com/' },
      { '@type': 'ListItem', position: 2, name: 'Kalkulator Nilai Tuton UT', item: 'https://nilaiut.com/kalkulator-nilai-tuton-ut/' },
    ],
  };

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Kalkulator Nilai Tuton UT 70:30',
    operatingSystem: 'Any',
    applicationCategory: 'EducationalApplication',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'IDR' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: TUTON_FAQS.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer.replace(/<[^>]+>/g, '') }
    }))
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={softwareSchema} />
      <JsonLd data={faqSchema} />

      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Beranda NilaiUT</span>
        </Link>
      </div>

      <header className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Skema Resmi 70% UAS : 30% Tuton</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
          Kalkulator Nilai Tuton UT
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Gunakan kalkulator interaktif di bawah ini untuk menghitung nilai akhir mata kuliah Tutorial Online (Tuton) Anda sesuai regulasi resmi Universitas Terbuka.
        </p>
      </header>

      {/* Calculator Component */}
      <section>
        <GradeCalculator />
      </section>

      {/* Explanatory Content */}
      <section className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed space-y-6 pt-6 border-t border-slate-200 dark:border-slate-800">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
          Cara Kerja Skema Bobot Tutorial Online (Tuton) di Universitas Terbuka
        </h2>
        <p>
          Tutorial Online (Tuton) adalah modus bantuan belajar jarak jauh yang paling banyak diikuti oleh mahasiswa UT. Pada skema ini, mahasiswa dituntut mandiri dalam mengakses modul inisiasi, memberikan tanggapan pada forum diskusi setiap minggu, serta menyelesaikan 3 tugas tutorial secara tertulis.
        </p>
        <p>
          Rumus resmi penggabungan nilai Tuton dengan nilai Ujian Akhir Semester adalah:
        </p>
        <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 font-mono text-sm sm:text-base text-blue-900 dark:text-blue-300 font-bold not-prose">
          Nilai Akhir = (0.70 × Nilai UAS) + (0.30 × Nilai Tuton)
        </div>
        <p>
          Dengan porsi bobot 30%, keaktifan Anda di Tuton dapat mendongkrak nilai akhir hingga 30 poin penuh. Misalnya, jika nilai Tuton Anda 90, maka Anda telah mengamankan 27 poin (0.30 × 90). Untuk mendapatkan nilai A (skor minimal 80), Anda hanya butuh menambah 53 poin dari UAS (yaitu nilai UAS sekitar 76).
        </p>

        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white pt-2">
          Peringatan Krusial: Syarat Batas Minimal UAS 30
        </h3>
        <p>
          Perlu diingat bahwa nilai Tuton setinggi apa pun hanya akan diperhitungkan jika <strong>nilai murni UAS Anda minimal 30 poin</strong>. Jika nilai UAS Anda berada pada rentang 0 hingga 29, maka nilai Tuton otomatis gugur dan nilai akhir Anda langsung tercatat sebagai huruf E.
        </p>
      </section>

      {/* FAQs */}
      <section className="pt-6">
        <FaqAccordion items={TUTON_FAQS} title="FAQ Seputar Kalkulator Tuton UT" />
      </section>
    </div>
  );
}
