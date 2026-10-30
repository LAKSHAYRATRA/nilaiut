import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import GradeCalculator from '@/components/GradeCalculator';
import FaqAccordion, { FaqItem } from '@/components/FaqAccordion';
import JsonLd from '@/components/JsonLd';
import { ArrowLeft, Sparkles, BookOpen, AlertCircle, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kalkulator Nilai TMK UT Online (Bobot 80% UAS : 20% TMK) - NilaiUT',
  description: 'Kalkulator khusus menghitung nilai akhir Tugas Mata Kuliah (TMK) Universitas Terbuka. Rumus resmi 80% UAS + 20% TMK, simulasi nilai huruf mutu, dan deteksi UAS minimal 30.',
  alternates: {
    canonical: 'https://nilaiut.com/kalkulator-nilai-tmk-ut/',
  },
  keywords: [
    'kalkulator nilai tmk ut',
    'hitung nilai tmk ut',
    'rumus nilai tmk ut',
    'bobot tmk ut 80 20',
    'cara hitung nilai tugas mata kuliah ut',
    'simulasi nilai tmk ut'
  ],
  openGraph: {
    title: 'Kalkulator Nilai TMK UT Online (80:20) - NilaiUT',
    description: 'Hitung nilai akhir TMK Universitas Terbuka Anda secara otomatis dan akurat sesuai aturan resmi.',
    url: 'https://nilaiut.com/kalkulator-nilai-tmk-ut/',
    type: 'website',
  },
};

const TMK_FAQS: FaqItem[] = [
  {
    question: "Bagaimana rumus perhitungan nilai akhir untuk skema TMK di UT?",
    answer: "Untuk mahasiswa yang menempuh skema Tugas Mata Kuliah (TMK), formula resminya adalah <strong>80% Ujian Akhir Semester (UAS) + 20% Tugas Mata Kuliah (TMK)</strong>. Nilai TMK diambil dari rata-rata 3 tugas mandiri yang diunggah di laman tmk.ut.ac.id."
  },
  {
    question: "Siapa saja mahasiswa yang wajib atau otomatis mengikuti TMK?",
    answer: "Mahasiswa yang tidak menyetujui formulir kesediaan mengikuti Tuton di elearning.ut.ac.id sebelum tanggal penutupan aktivasi, atau mahasiswa yang tidak melakukan login Tuton sama sekali, secara otomatis dialokasikan oleh sistem UT ke skema TMK."
  },
  {
    question: "Mengapa bobot UAS pada skema TMK sangat tinggi (80%)?",
    answer: "Karena TMK hanya terdiri dari 3 tugas mandiri tanpa interaksi forum diskusi atau presensi mingguan dengan dosen tutor, sehingga porsi pengujian kompetensi akhir (UAS) dijadikan penentu utama sebesar 80%."
  }
];

export default function KalkulatorTmkPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Beranda', item: 'https://nilaiut.com/' },
      { '@type': 'ListItem', position: 2, name: 'Kalkulator Nilai TMK UT', item: 'https://nilaiut.com/kalkulator-nilai-tmk-ut/' },
    ],
  };

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Kalkulator Nilai TMK UT 80:20',
    operatingSystem: 'Any',
    applicationCategory: 'EducationalApplication',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'IDR' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: TMK_FAQS.map(f => ({
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
          <FileText className="w-3.5 h-3.5" />
          <span>Skema Resmi 80% UAS : 20% TMK</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
          Kalkulator Nilai TMK UT
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Hitung estimasi nilai akhir mata kuliah Tugas Mata Kuliah (TMK) Anda dengan formula resmi pembobotan 80% UAS dan 20% TMK.
        </p>
      </header>

      <section>
        <GradeCalculator />
      </section>

      <section className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed space-y-6 pt-6 border-t border-slate-200 dark:border-slate-800">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
          Karakteristik &amp; Rumus Penilaian Tugas Mata Kuliah (TMK) UT
        </h2>
        <p>
          Skema TMK merupakan alternatif bantuan belajar bagi mahasiswa Universitas Terbuka yang berhalangan mengikuti Tutorial Online mingguan. Mahasiswa hanya perlu mengunduh dan mengunggah Buku Jawaban Tugas (BJT) untuk 3 tugas mandiri melalui laman <code>tmk.ut.ac.id</code>.
        </p>
        <p>
          Rumus resmi kalkulasi nilai akhir skema TMK adalah:
        </p>
        <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 font-mono text-sm sm:text-base text-amber-900 dark:text-amber-300 font-bold not-prose">
          Nilai Akhir = (0.80 × Nilai UAS) + (0.20 × Nilai TMK)
        </div>
        <p>
          Karena porsi UAS mencapai 80%, mahasiswa yang mengikuti skema TMK wajib mempersiapkan ujian akhir dengan ekstra matang. Jika nilai UAS Anda kecil, nilai TMK sebesar 100 sekalipun hanya akan menyumbang maksimal 20 poin ke dalam nilai akhir Anda.
        </p>
      </section>

      <section className="pt-6">
        <FaqAccordion items={TMK_FAQS} title="FAQ Seputar Kalkulator TMK UT" />
      </section>
    </div>
  );
}
