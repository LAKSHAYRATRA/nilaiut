import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import FaqAccordion, { FaqItem } from '@/components/FaqAccordion';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Skema Bobot Tuton 70:30, TMK 80:20 & Tuweb 50:50 Universitas Terbuka: Panduan Komparasi Lengkap',
  description: 'Ulasan mendalam perbedaan skema bobot nilai Tuton, TMK, dan Tuweb di Universitas Terbuka. Temukan perbandingan kelebihan, kekurangan, dan strategi meraih IPK Cumlaude.',
  alternates: {
    canonical: 'https://nilaiut.com/panduan/skema-bobot-tuton-tmk-tuweb/',
  },
  openGraph: {
    title: 'Skema Bobot Tuton, TMK & Tuweb Universitas Terbuka: Komparasi Lengkap',
    description: 'Bandingkan skema bobot 70:30, 80:20, dan 50:50 di UT untuk menyusun strategi kelulusan mata kuliah Anda.',
    url: 'https://nilaiut.com/panduan/skema-bobot-tuton-tmk-tuweb/',
    type: 'article',
  },
};

const SCHEME_FAQS: FaqItem[] = [
  {
    question: "Apakah mahasiswa bisa mengikuti Tuton dan TMK secara bersamaan untuk satu mata kuliah?",
    answer: "Tidak bisa. Sistem informasi akademik UT (SIA UT) secara otomatis memilah kepesertaan tutorial. Jika Anda menyetujui formulir kesediaan Tuton dan login ke elearning.ut.ac.id, maka mata kuliah Anda otomatis berstatus peserta Tuton. TMK hanya dialokasikan bagi mahasiswa yang tidak menyetujui Tuton atau tidak melakukan aktivasi hingga batas waktu penutupan."
  },
  {
    question: "Manakah yang lebih menguntungkan untuk mengamankan nilai: Tuton atau Tuweb?",
    answer: "Secara matematis, Tuweb (Tutorial Tatap Muka / Webinar) lebih menguntungkan karena memiliki bobot 50% terhadap nilai akhir (50% UAS : 50% Tuweb). Dengan bobot yang seimbang, nilai keaktifan Tuweb yang tinggi mampu mendongkrak nilai akhir secara signifikan bahkan jika skor UAS Anda berada di kisaran sedang."
  },
  {
    question: "Berapa batas minimal kehadiran agar nilai Tuweb / TTM dapat diproses?",
    answer: "Sesuai panduan akademik UT, mahasiswa wajib menghadiri minimal 5 dari 8 pertemuan Tuweb / TTM (minimal kehadiran 70%). Jika kehadiran di bawah ambang batas tersebut, nilai tutorial tidak akan diterbitkan oleh tutor."
  }
];

export default function SkemaBobotPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Beranda', item: 'https://nilaiut.com/' },
      { '@type': 'ListItem', position: 2, name: 'Panduan', item: 'https://nilaiut.com/#panduan-akademik' },
      { '@type': 'ListItem', position: 3, name: 'Skema Bobot Tuton TMK Tuweb', item: 'https://nilaiut.com/panduan/skema-bobot-tuton-tmk-tuweb/' },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: SCHEME_FAQS.map(item => ({
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
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-400"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Kembali ke Beranda</span>
        </Link>
      </div>

      <header className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-6">
        <span className="text-xs font-semibold text-blue-800 dark:text-blue-400">
          Analisis Skema Tutorial
        </span>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Skema Bobot Tuton 70:30, TMK 80:20 &amp; Tuweb 50:50
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Perbandingan proporsi bobot, beban belajar mingguan, dan strategi memilih modus tutorial yang paling menguntungkan nilai IPK Anda.
        </p>
      </header>

      <article className="prose dark:prose-invert max-w-none space-y-5 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
        <p>
          Dalam sistem Pendidikan Tinggi Terbuka dan Jarak Jauh (PTJJ), mahasiswa UT dapat memilih atau dialokasikan ke jalur bantuan belajar yang sesuai dengan ritme pekerjaan dan akses internet masing-masing.
        </p>

        <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white pt-2">
          1. Tutorial Online (Tuton) - Formula: 70% UAS + 30% Tuton
        </h2>
        <p>
          Tutorial Online berlangsung selama 8 minggu via elearning.ut.ac.id. Komposisi penilaian: kehadiran (20%), diskusi mingguan (30%), dan 3 tugas tutorial (50%).
        </p>

        <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white pt-2">
          2. Tuweb / TTM - Formula: 50% UAS + 50% Tuweb
        </h2>
        <p>
          Modus sinkron tatap muka atau webinar sebanyak 8 sesi pertemuan berdurasi 120 menit. Memberikan bantalan nilai 50% yang sangat meringankan beban ujian.
        </p>

        <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white pt-2">
          3. Tugas Mata Kuliah (TMK) - Formula: 80% UAS + 20% TMK
        </h2>
        <p>
          Diberikan kepada mahasiswa yang tidak mengaktivasi Tuton. Terdiri dari 3 tugas mandiri via tmk.ut.ac.id dengan porsi ujian mencapai 80%.
        </p>

        <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white pt-4">
          Tabel Matriks Perbandingan Ketiga Skema
        </h2>
        <div className="not-prose my-4 overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead className="bg-slate-50 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 font-semibold border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="p-3">Aspek Evaluasi</th>
                <th className="p-3">Tuton (Online)</th>
                <th className="p-3">Tuweb (Webinar)</th>
                <th className="p-3">TMK (Mandiri)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
              <tr>
                <td className="p-3 font-semibold">Bobot UAS</td>
                <td className="p-3 font-mono">70%</td>
                <td className="p-3 font-mono">50%</td>
                <td className="p-3 font-mono">80%</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Bobot Aktivitas</td>
                <td className="p-3 font-mono">30%</td>
                <td className="p-3 font-mono">50%</td>
                <td className="p-3 font-mono">20%</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Modus Belajar</td>
                <td className="p-3">Asinkron (Forum Daring)</td>
                <td className="p-3">Sinkron (Live Video 8 Pertemuan)</td>
                <td className="p-3">Asinkron (3 Berkas Tugas)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Risiko Kegagalan</td>
                <td className="p-3">Sedang</td>
                <td className="p-3">Paling Rendah</td>
                <td className="p-3">Paling Tinggi (UAS 80%)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>

      <section className="pt-6 border-t border-slate-200 dark:border-slate-800">
        <FaqAccordion items={SCHEME_FAQS} title="FAQ Skema Bobot Pembelajaran UT" subtitle="" />
      </section>
    </div>
  );
}
