import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import FaqAccordion, { FaqItem } from '@/components/FaqAccordion';
import { ArrowLeft, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Aturan Syarat Minimal UAS 30 UT - Kalkulator Nilai UT & Kalkulator UT',
  description: 'Penyebab nilai Tuton hangus dan otomatis E jika nilai UAS kurang dari 30 poin. Panduan lengkap aturan minimal UAS 30 di Universitas Terbuka dan solusinya.',
  alternates: {
    canonical: 'https://nilaiut.com/panduan/aturan-syarat-minimal-uas-30/',
  },
  keywords: [
    'aturan minimal uas 30 ut',
    'kalkulator nilai ut',
    'kalkulator ut',
    'nilai uas di bawah 30 ut',
    'syarat minimal uas 30 ut',
    'nilai tuton hangus ut'
  ],
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
    answer: "Ya. Aturan syarat minimal nilai UAS 30 poin berlaku universal untuk seluruh mahasiswa di lingkungan FEB, FHISIP, FST, FKIP, hingga Sekolah Pascasarjana Universitas Terbuka."
  },
  {
    question: "Bagaimana jika nilai ujian saya tepat 30,00? Apakah Tuton tetap dihitung?",
    answer: "Ya, nilai Tuton tetap dihitung. Batas ambang regulasi adalah 'kurang dari 30' (UAS < 30). Jika nilai ujian Anda tepat 30,00, seluruh kontribusi nilai Tuton (30%) atau Tuweb (50%) Anda tetap sah digabungkan ke nilai akhir."
  },
  {
    question: "Apa solusi jika mahasiswa mendapat nilai E akibat UAS di bawah 30?",
    answer: "Mahasiswa dapat mengambil Skema Ujian Online Ulang (SUO / Ujian Ulang) pada semester berikutnya atau melakukan registrasi ulang mata kuliah bersangkutan pada masa semester baru."
  }
];

export default function AturanUas30Page() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Beranda', item: 'https://nilaiut.com/' },
      { '@type': 'ListItem', position: 2, name: 'Panduan', item: 'https://nilaiut.com/#panduan-akademik' },
      { '@type': 'ListItem', position: 3, name: 'Aturan Syarat Minimal UAS 30', item: 'https://nilaiut.com/panduan/aturan-syarat-minimal-uas-30/' },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: UAS30_FAQS.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer }
    })),
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      <JsonLd data={breadcrumbSchema} />
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
          Regulasi Akademik Krusial UT
        </span>
        <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0F172A] tracking-tight">
          Aturan Syarat Minimal UAS 30 di UT: Mengapa Ada dan Cara Menghindarinya
        </h1>
        <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
          Kupas tuntas aturan penghangusan nilai tutorial saat ujian di bawah 30 poin, dasar penjaminan mutu akademik, dan strategi taktis agar aman saat hari ujian.
        </p>
      </header>

      <article className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-5 text-[#334155] text-sm sm:text-base leading-relaxed">
        <p>
          Banyak mahasiswa Universitas Terbuka heran ketika mendapatkan nilai akhir huruf mutu E padahal selalu aktif mengerjakan diskusi dan tugas di portal elearning dengan nilai tinggi. Penyebab utamanya adalah <strong>Klausul Syarat Minimal UAS 30 Poin</strong>.
        </p>

        <h2 className="text-lg sm:text-xl font-heading font-bold text-[#0F172A] pt-2">
          Mengapa Universitas Terbuka Menerapkan Aturan Minimal 30?
        </h2>
        <p>
          Aturan ini merupakan pilar <strong>Penjaminan Mutu Akademik (Quality Assurance)</strong> Universitas Terbuka yang diawasi BAN-PT dan akreditasi internasional:
        </p>
        <ol className="list-decimal pl-5 space-y-2 text-sm text-[#334155]">
          <li><strong>Integritas Pengerjaan Tugas Jarak Jauh:</strong> Tutorial Online dikerjakan mandiri tanpa pengawasan langsung, sehingga universitas memerlukan instrumen ujian objektif untuk memverifikasi pemahaman mahasiswa.</li>
          <li><strong>Standar Kompetensi Lulusan:</strong> Mahasiswa dipandang menguasai kompetensi dasar modul Buku Materi Pokok (BMP) hanya jika mampu menjawab benar minimal 30% dari materi ujian.</li>
        </ol>

        <h2 className="text-lg sm:text-xl font-heading font-bold text-[#0F172A] pt-2">
          Simulasi Kasus: Lolos vs Terjebak Batas 30
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-4">
          <div className="p-4 rounded-xl border border-rose-200 bg-rose-50 text-xs sm:text-sm space-y-1.5">
            <span className="font-bold text-rose-900 block">
              Kasus A: Skor UAS = 29 (Gugur)
            </span>
            <ul className="space-y-1 text-rose-800">
              <li>Nilai Tuton: 95</li>
              <li>Nilai UAS: 29</li>
              <li>Kontribusi Tuton: <strong>0 (Hangus)</strong></li>
              <li>Nilai Akhir: 29,00</li>
              <li>Huruf Mutu: <strong className="text-rose-700">E (Gagal)</strong></li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 text-xs sm:text-sm space-y-1.5">
            <span className="font-bold text-[#0F172A] block">
              Kasus B: Skor UAS = 31 (Lolos)
            </span>
            <ul className="space-y-1 text-[#334155]">
              <li>Nilai Tuton: 95</li>
              <li>Nilai UAS: 31</li>
              <li>Kontribusi UAS: 21,70</li>
              <li>Kontribusi Tuton: 28,50</li>
              <li>Nilai Akhir: <strong>50,20</strong></li>
            </ul>
          </div>
        </div>

        <h2 className="text-lg sm:text-xl font-heading font-bold text-[#0F172A] pt-2">
          Strategi Menghindari Batas 30 Poin
        </h2>
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-[#334155]">
          <li><strong>Kerjakan Seluruh Tes Formatif Modul:</strong> Sebagian besar konsep soal ujian objektif UT berpedoman pada tes formatif di akhir setiap modul pembelajaran.</li>
          <li><strong>Jangan Mengosongkan Lembar Jawaban:</strong> Sistem ujian UT tidak menerapkan pengurangan nilai untuk jawaban yang salah.</li>
          <li><strong>Gunakan Target Solver:</strong> Cek target nilai ujian minimal Anda di kalkulator NilaiUT sebelum hari H ujian.</li>
        </ul>
      </article>

      <section className="pt-6 border-t border-slate-200">
        <FaqAccordion items={UAS30_FAQS} title="FAQ Aturan Batas Minimal UAS 30" subtitle="" />
      </section>
    </div>
  );
}
