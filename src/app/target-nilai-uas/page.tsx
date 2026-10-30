import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import GradeCalculator from '@/components/GradeCalculator';
import FaqAccordion, { FaqItem } from '@/components/FaqAccordion';
import JsonLd from '@/components/JsonLd';
import { ArrowLeft, Target, Sparkles, AlertTriangle, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Target Solver Nilai UAS UT: Hitung Skor Ujian Minimal untuk Dapat Nilai A/B - NilaiUT',
  description: 'Fitur Target Solver cerdas untuk menghitung berapa skor minimal UAS yang wajib diraih di Universitas Terbuka berdasarkan nilai Tuton/TMK saat ini.',
  alternates: {
    canonical: 'https://nilaiut.com/target-nilai-uas/',
  },
  keywords: [
    'target nilai uas ut',
    'hitung target uas ut',
    'skor minimal uas ut',
    'cara dapat nilai a di ut',
    'target solver uas ut',
    'kalkulator target uas ut'
  ],
  openGraph: {
    title: 'Target Solver Nilai UAS UT - Hitung Target Skor Minimal Ujian Anda',
    description: 'Ketahui secara presisi berapa nilai ujian yang Anda butuhkan untuk mengamankan nilai A atau B di UT.',
    url: 'https://nilaiut.com/target-nilai-uas/',
    type: 'website',
  },
};

const TARGET_FAQS: FaqItem[] = [
  {
    question: "Bagaimana cara kerja Target Solver Nilai UAS UT ini?",
    answer: "Target Solver menggunakan algoritma pemecahan aljabar mundur. Sistem mengambil nilai aktivitas tutorial Anda (Tuton, TMK, atau Tuweb), menghitung kontribusi nilainya, lalu mengurangkannya dari ambang batas nilai huruf target Anda (misal nilai A = 80). Hasilnya dibagi dengan bobot UAS untuk menemukan skor minimal lembar jawaban ujian yang wajib dicapai."
  },
  {
    question: "Apakah mungkin target nilai A mustahil dicapai?",
    answer: "Ya, secara matematis target nilai A bisa mustahil dicapai jika nilai Tuton Anda terlalu rendah. Misalnya pada skema Tuton (70:30), jika nilai Tuton Anda hanya 30 (menyumbang 9 poin), maka untuk mencapai skor 80 Anda membutuhkan UAS = (80 - 9) / 0.70 = 101.43 (> 100). Target Solver akan langsung memberikan pemberitahuan realistis."
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
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300">
          <Target className="w-3.5 h-3.5" />
          <span>Inovasi Pertama untuk Mahasiswa UT</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
          Target Solver Nilai UAS UT
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Ketahui target skor minimal ujian yang wajib Anda raih di hari UAS untuk mengamankan huruf mutu A, A-, atau B berdasarkan nilai Tuton Anda saat ini.
        </p>
      </header>

      <section>
        <GradeCalculator />
      </section>

      <section className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed space-y-6 pt-6 border-t border-slate-200 dark:border-slate-800">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
          Mengapa Anda Harus Menggunakan Target Solver Sebelum Hari Ujian?
        </h2>
        <p>
          Banyak mahasiswa UT belajar tanpa sasaran kuantitatif yang jelas sebelum mengikuti Ujian Akhir Semester (UAS). Padahal, dengan mengetahui target nilai UAS yang harus dicapai, Anda dapat mengalokasikan waktu dan energi belajar secara lebih strategis.
        </p>
        <p>
          Misalnya, jika Anda memiliki mata kuliah dengan nilai Tuton 95, Target Solver akan menunjukkan bahwa Anda hanya memerlukan nilai UAS 65 untuk mengamankan huruf mutu A. Sebaliknya, pada mata kuliah dengan nilai Tuton yang pas-pasan, Anda akan langsung disiagakan untuk fokus belajar ekstra guna menembus skor minimal yang dipersyaratkan.
        </p>
      </section>

      <section className="pt-6">
        <FaqAccordion items={TARGET_FAQS} title="FAQ Target Solver Nilai UAS UT" />
      </section>
    </div>
  );
}
