import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import IpkCalculator from '@/components/IpkCalculator';
import FaqAccordion, { FaqItem } from '@/components/FaqAccordion';
import JsonLd from '@/components/JsonLd';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kalkulator IPK UT & Predikat Kelulusan Online (Skala 4.00) - NilaiUT',
  description: 'Kalkulator IPK Universitas Terbuka terlengkap. Hitung Indeks Prestasi Semester (IPS), IPK Kumulatif, total nilai mutu, dan cek syarat predikat Cumlaude resmi UT.',
  alternates: {
    canonical: 'https://nilaiut.com/kalkulator-ipk-ut/',
  },
  keywords: [
    'kalkulator ipk ut',
    'hitung ipk ut online',
    'cara hitung ipk ut',
    'kalkulator ips ut',
    'predikat kelulusan ut',
    'syarat cumlaude ut'
  ],
};

const IPK_PAGE_FAQS: FaqItem[] = [
  {
    question: "Bagaimana rumus dasar menghitung IPK di Universitas Terbuka?",
    answer: "IPK dihitung dengan membagi Total Nilai Mutu (∑M) dengan Total SKS (∑K). Nilai mutu per mata kuliah didapat dari mengalikan SKS mata kuliah dengan bobot angka mutu nilai huruf (A = 4.0, A- = 3.5, B = 3.0, B- = 2.5, C = 2.0, D = 1.0, E = 0.0)."
  },
  {
    question: "Berapa standar IPK minimal untuk kelulusan program Sarjana di UT?",
    answer: "Sesuai ketentuan baku akademik UT, standar IPK minimal untuk kelulusan jenjang Sarjana (S1) dan Diploma adalah <strong>2.00</strong> dengan batas persentase nilai D yang tidak melampaui ketentuan kurikulum program studi."
  },
  {
    question: "Apakah nilai E membatalkan predikat Cumlaude di UT?",
    answer: "Ya. Meskipun secara matematis IPK Anda mencapai 3.51 atau lebih, syarat predikat Dengan Pujian (Cumlaude) di Universitas Terbuka mewajibkan mahasiswa <strong>tidak pernah memiliki nilai E</strong> sepanjang masa studi."
  }
];

export default function KalkulatorIpkPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Beranda', item: 'https://nilaiut.com/' },
      { '@type': 'ListItem', position: 2, name: 'Kalkulator IPK UT', item: 'https://nilaiut.com/kalkulator-ipk-ut/' },
    ],
  };

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Kalkulator IPK & Predikat Kelulusan Universitas Terbuka',
    operatingSystem: 'Any',
    applicationCategory: 'EducationalApplication',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'IDR' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: IPK_PAGE_FAQS.map(f => ({
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
          Rekap Indeks Prestasi UT
        </span>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Kalkulator IPK &amp; Predikat Kelulusan UT
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
          Hitung Indeks Prestasi Semester (IPS) dan Indeks Prestasi Kumulatif (IPK) skala 4.00 serta pantau kelayakan predikat kelulusan Cumlaude Anda.
        </p>
      </header>

      <section>
        <IpkCalculator />
      </section>

      <section className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed space-y-4 pt-6 border-t border-slate-200 dark:border-slate-800">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
          Pedoman Yudisium &amp; Predikat Kelulusan Sarjana UT
        </h2>
        <p>
          Buku Pedoman Mahasiswa UT menetapkan empat kategori predikat kelulusan:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Dengan Pujian (Cumlaude):</strong> IPK 3.51 - 4.00 (tanpa nilai E dan masa studi sesuai aturan).</li>
          <li><strong>Sangat Memuaskan:</strong> IPK 3.01 - 3.50.</li>
          <li><strong>Memuaskan:</strong> IPK 2.76 - 3.00.</li>
          <li><strong>Cukup:</strong> IPK 2.00 - 2.75.</li>
        </ul>
      </section>

      <section className="pt-4">
        <FaqAccordion items={IPK_PAGE_FAQS} title="FAQ Seputar Kalkulator IPK UT" subtitle="" />
      </section>
    </div>
  );
}
