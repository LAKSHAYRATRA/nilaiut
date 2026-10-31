import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import GradeCalculator from '@/components/GradeCalculator';
import FaqAccordion, { FaqItem } from '@/components/FaqAccordion';
import JsonLd from '@/components/JsonLd';
import { ArrowLeft } from 'lucide-react';

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
    'cara hitung nilai tugas mata kuliah ut'
  ],
};

const TMK_FAQS: FaqItem[] = [
  {
    question: "Bagaimana rumus perhitungan nilai akhir untuk skema TMK di UT?",
    answer: "Untuk mahasiswa yang menempuh skema Tugas Mata Kuliah (TMK), formula resminya adalah <strong>80% Ujian Akhir Semester (UAS) + 20% Tugas Mata Kuliah (TMK)</strong>. Nilai TMK diambil dari rata-rata 3 tugas mandiri yang diunggah di portal tmk.ut.ac.id."
  },
  {
    question: "Siapa saja mahasiswa yang dialokasikan mengikuti TMK?",
    answer: "Mahasiswa yang tidak menyetujui formulir kesediaan mengikuti Tuton di elearning.ut.ac.id sebelum batas waktu aktivasi, atau mahasiswa yang tidak melakukan login Tuton sama sekali, secara otomatis dialokasikan oleh sistem UT ke skema TMK."
  },
  {
    question: "Mengapa bobot UAS pada skema TMK mencapai 80%?",
    answer: "Karena TMK hanya terdiri dari 3 tugas mandiri tanpa interaksi forum diskusi mingguan dengan dosen, porsi evaluasi akhir (UAS) dijadikan penentu utama kompetensi sebesar 80%."
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
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={softwareSchema} />
      <JsonLd data={faqSchema} />

      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#002D72] hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Kembali ke Beranda</span>
        </Link>
      </div>

      <header className="space-y-2 border-b border-slate-200 pb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-[#002D72]">
          Modus Tugas Mandiri UT
        </span>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight">
          Kalkulator Nilai TMK UT (Bobot 80:20)
        </h1>
        <p className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-3xl">
          Hitung estimasi nilai akhir mata kuliah Tugas Mata Kuliah (TMK) dengan formula pembobotan 80% UAS dan 20% TMK.
        </p>
      </header>

      <section>
        <GradeCalculator />
      </section>

      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-sm text-sm sm:text-base text-[#475569] leading-relaxed">
        <h2 className="text-lg sm:text-xl font-bold text-[#0F172A]">
          Karakteristik Skema Tugas Mata Kuliah (TMK) UT
        </h2>
        <p>
          Skema TMK merupakan alternatif bantuan belajar bagi mahasiswa UT yang tidak sempat mengaktivasi Tuton. Mahasiswa mengunggah Buku Jawaban Tugas (BJT) untuk 3 tugas mandiri di laman tmk.ut.ac.id.
        </p>
        <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 font-mono text-xs sm:text-sm text-[#002D72] font-bold">
          Nilai Akhir = (0.80 × Nilai UAS) + (0.20 × Nilai TMK)
        </div>
        <p>
          Karena porsi UAS mencapai 80%, nilai ujian memiliki pengaruh yang sangat dominan terhadap huruf mutu kelulusan Anda.
        </p>
      </section>

      <section className="pt-4">
        <FaqAccordion items={TMK_FAQS} title="FAQ Seputar Kalkulator TMK UT" subtitle="" />
      </section>
    </div>
  );
}
