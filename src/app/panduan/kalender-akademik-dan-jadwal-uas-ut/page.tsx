import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import FaqAccordion, { FaqItem } from '@/components/FaqAccordion';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kalender Akademik UT & Jadwal UAS - Kalkulator Nilai UT & Kalkulator UT',
  description: 'Jadwal lengkap kegiatan akademik UT: masa registrasi mata kuliah, batas aktivasi Tuton, jadwal cetak KTPU, dan tanggal pengumuman nilai resmi di MyUT.',
  alternates: {
    canonical: 'https://nilaiut.com/panduan/kalender-akademik-dan-jadwal-uas-ut/',
  },
  keywords: [
    'kalender akademik ut',
    'jadwal uas ut',
    'kalkulator nilai ut',
    'kalkulator ut',
    'pengumuman nilai ut',
    'cetak ktpu ut'
  ],
  openGraph: {
    title: 'Kalender Akademik Universitas Terbuka: Jadwal Registrasi, KTPU & Nilai MyUT',
    description: 'Panduan jadwal lengkap tahapan semester UT dari masa registrasi hingga pengumuman nilai resmi di MyUT.',
    url: 'https://nilaiut.com/panduan/kalender-akademik-dan-jadwal-uas-ut/',
    type: 'article',
  },
};

const CALENDAR_FAQS: FaqItem[] = [
  {
    question: "Kapan KTPU (Kartu Tanda Peserta Ujian) bisa mulai dicetak?",
    answer: "Kartu Tanda Peserta Ujian (KTPU) biasanya dapat diunduh dan dicetak melalui portal MyUT sekitar 2 hingga 3 minggu sebelum hari pertama pelaksanaan Ujian Akhir Semester (UAS)."
  },
  {
    question: "Apakah mahasiswa bisa mengajukan sanggahan jika nilai Tuton atau UAS dirasa keliru?",
    answer: "Bisa. Universitas Terbuka menyediakan Masa Sanggah Nilai yang dibuka selama kurang lebih 2 minggu setelah pengumuman nilai resmi di MyUT melalui aplikasi tiket di hallo-ut.ut.ac.id."
  },
  {
    question: "Apa perbedaan semester ganjil (.1) dan genap (.2) di UT?",
    answer: "Kode semester UT menggunakan format Tahun.Masa, contohnya 2026.1 untuk semester ganjil (Januari - Juni) dan 2026.2 untuk semester genap (Juli - Desember)."
  }
];

export default function KalenderAkademikPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Beranda', item: 'https://nilaiut.com/' },
      { '@type': 'ListItem', position: 2, name: 'Panduan', item: 'https://nilaiut.com/#panduan-akademik' },
      { '@type': 'ListItem', position: 3, name: 'Kalender Akademik dan Jadwal UAS UT', item: 'https://nilaiut.com/panduan/kalender-akademik-dan-jadwal-uas-ut/' },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: CALENDAR_FAQS.map(item => ({
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
          Linimasa Perkuliahan Resmi UT
        </span>
        <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0F172A] tracking-tight">
          Kalender Akademik Universitas Terbuka: Siklus Semester &amp; Jadwal KTPU
        </h1>
        <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
          Alur semester mahasiswa UT dari masa registrasi mata kuliah, aktivasi Tuton, cetak kartu ujian, hingga hari pengumuman Daftar Nilai Perkuliahan (DNP) di MyUT.
        </p>
      </header>

      <article className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-5 text-[#334155] text-sm sm:text-base leading-relaxed">
        <p>
          Bagi mahasiswa pendidikan jarak jauh, disiplin memantau linimasa kalender akademik merupakan kunci kelancaran studi. Kelalaian tanggal aktivasi Tuton dapat mengalihkan mata kuliah Anda ke skema tugas mandiri (TMK).
        </p>

        <h2 className="text-lg sm:text-xl font-heading font-bold text-[#0F172A] pt-2">
          Lima Tahapan Utama Siklus Satu Semester
        </h2>

        <div className="space-y-3 not-prose my-4">
          <div className="p-4 rounded-xl border border-slate-200 bg-[#F8FAFC] space-y-1 shadow-sm">
            <span className="text-xs font-semibold text-[#64748B] block">Tahap 1: Registrasi &amp; LIP</span>
            <h3 className="font-heading font-bold text-sm text-[#0F172A]">Pendaftaran Mata Kuliah &amp; Pembayaran Billing SPP</h3>
            <p className="text-xs text-[#334155]">Pendaftaran mata kuliah melalui myut.ut.ac.id dan pelunasan di bank mitra.</p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-[#F8FAFC] space-y-1">
            <span className="text-xs font-semibold text-[#64748B] block">Tahap 2: Aktivasi Daring</span>
            <h3 className="font-heading font-bold text-sm text-[#0F172A]">Aktivasi Akun e-Learning &amp; Form Kesediaan Tuton</h3>
            <p className="text-xs text-[#334155]">Persetujuan formulir kesediaan tutorial daring sebelum batas penutupan.</p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-[#F8FAFC] space-y-1">
            <span className="text-xs font-semibold text-[#64748B] block">Tahap 3: Pembelajaran</span>
            <h3 className="font-heading font-bold text-sm text-[#0F172A]">Pelaksanaan 8 Sesi Bimbingan Belajar</h3>
            <p className="text-xs text-[#334155]">Partisipasi diskusi mingguan dan pengerjaan 3 tugas tutorial wajib (sesi 3, 5, 7).</p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-[#F8FAFC] space-y-1">
            <span className="text-xs font-semibold text-[#64748B] block">Tahap 4: Ujian</span>
            <h3 className="font-heading font-bold text-sm text-[#0F172A]">Cetak KTPU &amp; Ujian Akhir Semester (UAS)</h3>
            <p className="text-xs text-[#334155]">Pencetakan kartu ujian di MyUT dan pelaksanaan ujian sesuai modus (UTM, UO, atau THE).</p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-[#F8FAFC] space-y-1">
            <span className="text-xs font-semibold text-[#64748B] block">Tahap 5: Evaluasi</span>
            <h3 className="font-heading font-bold text-sm text-[#0F172A]">Rilis Daftar Nilai Perkuliahan (DNP) &amp; Masa Sanggah</h3>
            <p className="text-xs text-[#334155]">Pengumuman nilai akhir serentak di portal resmi MyUT.</p>
          </div>
        </div>
      </article>

      <section className="pt-6 border-t border-slate-200">
        <FaqAccordion items={CALENDAR_FAQS} title="FAQ Kalender Akademik & Ujian UT" subtitle="" />
      </section>
    </div>
  );
}
