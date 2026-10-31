import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import GradeCalculator from '@/components/GradeCalculator';
import FaqAccordion, { FaqItem } from '@/components/FaqAccordion';
import JsonLd from '@/components/JsonLd';
import { ArrowLeft } from 'lucide-react';

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
    'cara hitung nilai tutorial online ut'
  ],
};

const TUTON_FAQS: FaqItem[] = [
  {
    question: "Berapa bobot pasti nilai Tuton dan UAS di Universitas Terbuka?",
    answer: "Sesuai Peraturan Rektor UT No. 16/2017, skema Tutorial Online (Tuton) memiliki proporsi <strong>70% Ujian Akhir Semester (UAS)</strong> dan <strong>30% Tutorial Online (Tuton)</strong>. Rumusnya: Nilai Akhir = (0.70 × Nilai UAS) + (0.30 × Nilai Rata-rata Tuton)."
  },
  {
    question: "Bagaimana cara menghitung nilai murni Tuton dari sesi 1 sampai 8?",
    answer: "Nilai Tuton dihitung dari tiga unsur utama: (1) Presensi/kehadiran di 8 sesi inisiasi berbobot 20%, (2) Partisipasi di 8 forum diskusi berbobot 30%, dan (3) Rata-rata nilai 3 tugas wajib (Tugas 1, 2, dan 3 pada sesi 3, 5, dan 7) berbobot 50%."
  },
  {
    question: "Mengapa nilai Tuton tidak menambah nilai akhir saat UAS di bawah 30?",
    answer: "UT memberlakukan 'Syarat Batas Minimal UAS 30 Poin'. Apabila skor lembar jawaban UAS Anda kurang dari 30 (0 - 29.99), kontribusi nilai Tuton otomatis dinyatakan gugur, dan nilai akhir Anda langsung menjadi E (Gagal)."
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
          Modus Tutorial Daring UT
        </span>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight">
          Kalkulator Nilai Tuton UT (Bobot 70:30)
        </h1>
        <p className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-3xl">
          Hitung estimasi nilai akhir mata kuliah Tutorial Online (Tuton) Anda sesuai formula resmi Peraturan Rektor No. 16/2017: 70% UAS + 30% Tuton.
        </p>
      </header>

      <section>
        <GradeCalculator />
      </section>

      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-sm text-sm sm:text-base text-[#475569] leading-relaxed">
        <h2 className="text-lg sm:text-xl font-bold text-[#0F172A]">
          Komponen Penilaian Tutorial Online di elearning.ut.ac.id
        </h2>
        <p>
          Tutorial Online (Tuton) berlangsung selama 8 sesi inisiasi. Mahasiswa memperoleh nilai akumulasi berdasarkan kehadiran (20%), partisipasi diskusi mingguan (30%), dan 3 tugas wajib di sesi 3, 5, dan 7 (50%).
        </p>
        <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 font-mono text-xs sm:text-sm text-[#002D72] font-bold">
          Nilai Akhir = (0.70 × Nilai UAS) + (0.30 × Nilai Tuton)
        </div>
        <p>
          Nilai Tuton hanya akan berkontribusi apabila mahasiswa berhasil mencapai batas aman nilai UAS murni minimal 30 poin.
        </p>
      </section>

      <section className="pt-4">
        <FaqAccordion items={TUTON_FAQS} title="FAQ Seputar Kalkulator Tuton UT" subtitle="" />
      </section>
    </div>
  );
}
