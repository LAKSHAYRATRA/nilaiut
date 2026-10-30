import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import GradeCalculator from '@/components/GradeCalculator';
import FaqAccordion, { FaqItem } from '@/components/FaqAccordion';
import JsonLd from '@/components/JsonLd';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Target Solver Nilai UAS UT: Hitung Skor Ujian Minimal untuk Dapat Nilai A/B - NilaiUT',
  description: 'Fitur Target Solver untuk menghitung berapa skor minimal UAS yang wajib diraih di Universitas Terbuka berdasarkan nilai Tuton/TMK saat ini.',
  alternates: {
    canonical: 'https://nilaiut.com/target-nilai-uas/',
  },
  keywords: [
    'target nilai uas ut',
    'hitung target uas ut',
    'skor minimal uas ut',
    'cara dapat nilai a di ut',
    'target solver uas ut'
  ],
};

const TARGET_FAQS: FaqItem[] = [
  {
    question: "Bagaimana cara kerja Target Solver Nilai UAS UT ini?",
    answer: "Target Solver menggunakan algoritma pemecahan mundur aljabar: sistem mengambil nilai aktivitas tutorial Anda (Tuton, TMK, atau Tuweb), menghitung kontribusi nilainya, lalu mengurangkannya dari ambang batas nilai huruf target Anda (misal nilai A = 80). Hasilnya dibagi dengan bobot UAS untuk menemukan skor minimal lembar jawaban ujian yang wajib dicapai."
  },
  {
    question: "Apakah mungkin target nilai A mustahil dicapai?",
    answer: "Ya, secara matematis target nilai A bisa mustahil dicapai jika nilai aktivitas Anda terlalu rendah. Misalnya pada skema Tuton (70:30), jika nilai Tuton Anda hanya 30, maka untuk mencapai skor 80 Anda membutuhkan nilai UAS di atas 100. Target Solver akan langsung memberi tahu batasan realistis tersebut."
  },
  {
    question: "Berapa batas nilai terendah yang akan ditampilkan oleh Target Solver?",
    answer: "Target Solver tidak akan pernah menampilkan angka di bawah 30, karena aturan resmi UT menetapkan bahwa UAS murni wajib minimal 30 poin agar nilai tutorial tidak hangus."
  }
];

export default function TargetSolverPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Beranda', item: 'https://nilaiut.com/' },
      { '@type': 'ListItem', position: 2, name: 'Target Solver Nilai UAS UT', item: 'https://nilaiut.com/target-nilai-uas/' },
    ],
  };

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Target Solver Nilai UAS Universitas Terbuka',
    operatingSystem: 'Any',
    applicationCategory: 'EducationalApplication',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'IDR' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: TARGET_FAQS.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer.replace(/<[^>]+>/g, '') }
    }))
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={softwareSchema} />
      <JsonLd data={faqSchema} />

      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-400"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Kembali ke Beranda</span>
        </Link>
      </div>

      <header className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-6">
        <span className="text-xs font-semibold text-blue-800 dark:text-blue-400">
          Perencanaan Nilai Ujian UT
        </span>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Target Solver Nilai UAS UT
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
          Ketahui batas skor minimal ujian yang wajib Anda raih di hari UAS untuk mengamankan huruf mutu A, A-, atau B berdasarkan nilai Tuton Anda saat ini.
        </p>
      </header>

      <section>
        <GradeCalculator />
      </section>

      <section className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed space-y-4 pt-6 border-t border-slate-200 dark:border-slate-800">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
          Mengapa Menghitung Target Nilai Ujian Sangat Krusial?
        </h2>
        <p>
          Banyak mahasiswa UT belajar tanpa sasaran kuantitatif yang jelas sebelum menghadapi Ujian Akhir Semester. Dengan mengetahui batas minimal nilai ujian yang harus dicapai, Anda dapat mengalokasikan fokus belajar pada mata kuliah yang memiliki risiko tinggi.
        </p>
      </section>

      <section className="pt-4">
        <FaqAccordion items={TARGET_FAQS} title="FAQ Target Solver Nilai UAS UT" subtitle="" />
      </section>
    </div>
  );
}
