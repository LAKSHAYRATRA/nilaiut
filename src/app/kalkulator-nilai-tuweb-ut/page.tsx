import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import GradeCalculator from '@/components/GradeCalculator';
import FaqAccordion, { FaqItem } from '@/components/FaqAccordion';
import JsonLd from '@/components/JsonLd';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kalkulator Nilai Tuweb & TTM UT (Bobot 50% UAS : 50% Tuweb) - NilaiUT',
  description: 'Kalkulator khusus menghitung nilai akhir Tutorial Webinar (Tuweb) dan Tatap Muka (TTM) Universitas Terbuka. Rumus seimbang 50% UAS + 50% Tuweb.',
  alternates: {
    canonical: 'https://nilaiut.com/kalkulator-nilai-tuweb-ut/',
  },
  keywords: [
    'kalkulator nilai tuweb ut',
    'hitung nilai tuweb ut',
    'bobot tuweb ut 50 50',
    'cara hitung nilai ttm ut'
  ],
};

const TUWEB_FAQS: FaqItem[] = [
  {
    question: "Berapa bobot nilai Tuweb terhadap nilai akhir mata kuliah?",
    answer: "Skema Tutorial Webinar (Tuweb) atau Tutorial Tatap Muka (TTM) memiliki bobot penilaian <strong>50% UAS dan 50% Tuweb</strong>. Ini merupakan bobot bantuan belajar paling tinggi di Universitas Terbuka."
  },
  {
    question: "Berapa batas minimal kehadiran di Tuweb agar nilai dapat diproses?",
    answer: "Mahasiswa diwajibkan menghadiri minimal 5 dari 8 sesi pertemuan Tuweb (minimal kehadiran 70%). Jika kehadiran di bawah standar tersebut, nilai tutorial tidak akan diproses oleh tutor."
  },
  {
    question: "Apakah aturan UAS minimal 30 tetap berlaku untuk Tuweb?",
    answer: "Ya, aturan syarat minimal UAS 30 poin tetap berlaku mutlak. Jika nilai UAS murni kurang dari 30, nilai Tuweb 50% tersebut gugur dan nilai akhir menjadi E."
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
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={softwareSchema} />
      <JsonLd data={faqSchema} />

      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F172A] hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Kembali ke Beranda</span>
        </Link>
      </div>

      <header className="space-y-2 border-b border-slate-200 pb-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
          Modus Tutorial Sinkron UT
        </span>
        <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0F172A] tracking-tight">
          Kalkulator Nilai Tuweb &amp; TTM UT (Bobot 50:50)
        </h1>
        <p className="text-sm sm:text-base text-[#334155] leading-relaxed max-w-3xl">
          Hitung nilai akhir mata kuliah Tutorial Webinar (Tuweb) dan Tatap Muka (TTM) Universitas Terbuka dengan formula seimbang 50% UAS dan 50% Tuweb.
        </p>
      </header>

      <section>
        <GradeCalculator />
      </section>

      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-sm text-sm sm:text-base text-[#334155] leading-relaxed">
        <h2 className="text-lg sm:text-xl font-heading font-bold text-[#0F172A]">
          Karakteristik Skema Tuweb (50% UAS : 50% Tuweb)
        </h2>
        <p>
          Skema Tuweb memberikan proporsi nilai seimbang 50% dengan ujian akhir. Mahasiswa yang aktif menghadiri 8 pertemuan webinar dan mengumpulkan tugas tutorial memiliki peluang terbesar untuk mengamankan huruf mutu A atau B.
        </p>
        <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-200 font-mono text-xs sm:text-sm text-[#0F172A] font-bold">
          Nilai Akhir = (0.50 × Nilai UAS) + (0.50 × Nilai Tuweb)
        </div>
      </section>

      <section className="pt-4">
        <FaqAccordion items={TUWEB_FAQS} title="FAQ Seputar Kalkulator Tuweb UT" subtitle="" />
      </section>
    </div>
  );
}
