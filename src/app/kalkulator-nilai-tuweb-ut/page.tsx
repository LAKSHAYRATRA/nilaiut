import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import GradeCalculator from '@/components/GradeCalculator';
import FaqAccordion, { FaqItem } from '@/components/FaqAccordion';
import JsonLd from '@/components/JsonLd';
import { ArrowLeft, Video, CheckCircle, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kalkulator Nilai Tuweb & TTM UT (Bobot 50% UAS : 50% Tuweb) - NilaiUT',
  description: 'Kalkulator khusus menghitung nilai akhir Tutorial Webinar (Tuweb) dan Tatap Muka (TTM) Universitas Terbuka. Rumus seimbang 50% UAS + 50% Tuweb.',
  alternates: {
    canonical: 'https://nilaiut.com/kalkulator-nilai-tuweb-ut/',
  },
  keywords: [
    'kalkulator nilai tuweb ut',
    'hitung nilai tuweb ut',
    'rumus nilai tuweb ut',
    'bobot tuweb ut 50 50',
    'cara hitung nilai ttm ut',
    'simulasi nilai tuweb ut'
  ],
  openGraph: {
    title: 'Kalkulator Nilai Tuweb & TTM UT (50:50) - NilaiUT',
    description: 'Hitung nilai akhir Tuweb dan TTM Universitas Terbuka Anda secara otomatis dan akurat.',
    url: 'https://nilaiut.com/kalkulator-nilai-tuweb-ut/',
    type: 'website',
  },
};

const TUWEB_FAQS: FaqItem[] = [
  {
    question: "Berapa bobot nilai Tuweb terhadap nilai akhir mata kuliah?",
    answer: "Skema Tutorial Webinar (Tuweb) atau Tutorial Tatap Muka (TTM) memiliki bobot penilaian <strong>50% UAS dan 50% Tuweb</strong>. Ini merupakan bobot bantuan belajar paling tinggi di Universitas Terbuka."
  },
  {
    question: "Berapa minimal kehadiran di Tuweb agar nilai dapat diproses?",
    answer: "Mahasiswa diwajibkan menghadiri minimal 5 dari 8 sesi pertemuan Tuweb (minimal presensi 70%). Jika kehadiran di bawah standar tersebut, nilai tutorial tidak akan diterbitkan oleh tutor dosen."
  },
  {
    question: "Apakah aturan UAS minimal 30 tetap berlaku untuk Tuweb?",
    answer: "Ya, aturan syarat minimal UAS 30 poin tetap berlaku mutlak. Jika nilai UAS murni kurang dari 30, maka nilai Tuweb 50% tersebut tidak dapat digabungkan dan nilai akhir menjadi E."
  }
];

export default function KalkulatorTuwebPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Beranda', item: 'https://nilaiut.com/' },
      { '@type': 'ListItem', position: 2, name: 'Kalkulator Nilai Tuweb UT', item: 'https://nilaiut.com/kalkulator-nilai-tuweb-ut/' },
    ],
  };

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Kalkulator Nilai Tuweb & TTM UT 50:50',
    operatingSystem: 'Any',
    applicationCategory: 'EducationalApplication',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'IDR' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: TUWEB_FAQS.map(f => ({
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
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-teal-100 dark:bg-teal-900/40 text-teal-800 dark:text-teal-300">
          <Video className="w-3.5 h-3.5" />
          <span>Skema Resmi 50% UAS : 50% Tuweb / TTM</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
          Kalkulator Nilai Tuweb UT
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Hitung nilai akhir mata kuliah Tutorial Webinar (Tuweb) dan Tatap Muka (TTM) Universitas Terbuka dengan formula seimbang 50:50.
        </p>
      </header>

      <section>
        <GradeCalculator />
      </section>

      <section className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed space-y-6 pt-6 border-t border-slate-200 dark:border-slate-800">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
          Keunggulan Skema Bobot Tuweb (50% UAS : 50% Tuweb)
        </h2>
        <p>
          Skema Tutorial Webinar (Tuweb) menyajikan rasio bobot yang paling menguntungkan bagi mahasiswa. Dengan pembagian seimbang 50% UAS dan 50% aktivitas tutorial, mahasiswa memiliki peluang terbesar untuk mengamankan nilai mutu tinggi (A atau A-).
        </p>
        <div className="p-4 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 font-mono text-sm sm:text-base text-teal-900 dark:text-teal-300 font-bold not-prose">
          Nilai Akhir = (0.50 × Nilai UAS) + (0.50 × Nilai Tuweb)
        </div>
        <p>
          Sebagai contoh, jika nilai Tuweb Anda adalah 90 (menyumbang 45 poin), Anda hanya membutuhkan nilai UAS 70 untuk mengamankan total skor 80 yang setara dengan huruf mutu A!
        </p>
      </section>

      <section className="pt-6">
        <FaqAccordion items={TUWEB_FAQS} title="FAQ Seputar Kalkulator Tuweb UT" />
      </section>
    </div>
  );
}
