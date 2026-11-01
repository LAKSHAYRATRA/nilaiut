import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import FaqAccordion, { FaqItem } from '@/components/FaqAccordion';
import { ArrowLeft, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cara Hitung Nilai UT Resmi - Rumus Kalkulator Nilai UT & Kalkulator UT',
  description: 'Cara hitung nilai UT resmi berdasarkan Peraturan Rektor No. 16/2017. Panduan lengkap rumus Tuton 70:30, TMK 80:20, Tuweb 50:50, serta simulasi kalkulator nilai UT.',
  alternates: {
    canonical: 'https://nilaiut.com/panduan/cara-hitung-nilai-akhir-ut/',
  },
  keywords: [
    'cara hitung nilai ut',
    'kalkulator nilai ut',
    'kalkulator ut',
    'hitung nilai ut',
    'rumus nilai ut',
    'simulasi nilai akhir ut'
  ],
  openGraph: {
    title: 'Cara Hitung Nilai UT Resmi - Rumus Kalkulator Nilai UT',
    description: 'Panduan lengkap cara hitung nilai UT resmi berdasarkan Peraturan Rektor No. 16/2017 dengan rumus Tuton, TMK, Tuweb & kalkulator online.',
    url: 'https://nilaiut.com/panduan/cara-hitung-nilai-akhir-ut/',
    type: 'article',
  },
};

const GUIDE_FAQS: FaqItem[] = [
  {
    question: "Kapan nilai akhir mata kuliah UT diumumkan secara resmi?",
    answer: "Nilai akhir semester biasanya diumumkan di portal resmi MyUT (myut.ut.ac.id) sekitar 4 hingga 6 minggu setelah hari terakhir pelaksanaan Ujian Akhir Semester (UAS). Tanggal rilis pasti dapat dilihat pada kalender akademik UT untuk semester yang bersangkutan."
  },
  {
    question: "Apakah nilai tugas Tuton otomatis masuk jika mahasiswa lupa mengklik 'Kirim Jawaban'?",
    answer: "Pada sistem e-Learning UT (elearning.ut.ac.id), tugas yang diunggah ke formulir tugas berstatus draft tidak akan dinilai oleh tutor jika tenggat waktu telah ditutup. Pastikan status penyerahan tugas berlabel 'Submitted for grading' sebelum batas waktu sesi ditutup."
  },
  {
    question: "Bagaimana jika nilai UAS saya 29 dan nilai Tuton saya 90?",
    answer: "Secara matematis (70% × 29) + (30% × 90) = 20.3 + 27 = 47.3. Namun karena aturan batas minimal 30 poin, nilai Tuton 90 tersebut dibatalkan oleh sistem pengolahan nilai UT. Nilai akhir Anda tetap 29 murni dengan huruf mutu E (Gagal)."
  }
];

export default function CaraHitungNilaiPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Beranda', item: 'https://nilaiut.com/' },
      { '@type': 'ListItem', position: 2, name: 'Panduan', item: 'https://nilaiut.com/#panduan-akademik' },
      { '@type': 'ListItem', position: 3, name: 'Cara Hitung Nilai Akhir UT', item: 'https://nilaiut.com/panduan/cara-hitung-nilai-akhir-ut/' },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: GUIDE_FAQS.map(item => ({
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
          Pedoman Evaluasi Belajar Resmi UT
        </span>
        <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0F172A] tracking-tight">
          Cara Menghitung Nilai Akhir Mata Kuliah Universitas Terbuka
        </h1>
        <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
          Dasar hukum Peraturan Rektor No. 16/2017, rincian bobot komponen tutorial, cara membaca Daftar Nilai Perkuliahan (DNP), dan simulasi kasus riil.
        </p>
      </header>

      <article className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-5 text-[#334155] text-sm sm:text-base leading-relaxed">
        <p>
          Bagi mahasiswa Universitas Terbuka (UT)—baik yang menempuh program Diploma, Sarjana, maupun Pascasarjana—sistem penilaian hasil studi memiliki karakteristik tersendiri karena menerapkan sistem Pendidikan Tinggi Terbuka dan Jarak Jauh (PTJJ).
        </p>
        <p>
          Proses pembelajaran mandiri dipadukan dengan layanan bantuan belajar terbimbing. Oleh sebab itu, nilai akhir mata kuliah bukan hanya bersumber dari ujian akhir, melainkan integrasi antara <strong>Aktivitas Tutorial</strong> dan <strong>Ujian Akhir Semester (UAS)</strong>.
        </p>

        <h2 className="text-lg sm:text-xl font-heading font-bold text-[#0F172A] pt-2">
          Dasar Hukum: Peraturan Rektor UT No. 16 Tahun 2017
        </h2>
        <p>
          Sistem penilaian hasil belajar mahasiswa UT diatur dalam <strong>Peraturan Rektor Universitas Terbuka Nomor 16 Tahun 2017</strong> tentang Sistem Penilaian dan Evaluasi Akademik. Ketentuan pokoknya menyatakan:
        </p>
        <blockquote className="p-4 my-4 rounded-xl border-l-4 border-slate-400 bg-slate-50 text-[#334155] italic">
          &ldquo;Nilai akhir mata kuliah merupakan gabungan dari nilai tutorial atau tugas mata kuliah dengan nilai ujian akhir semester, dengan ketentuan nilai ujian akhir semester mahasiswa mencapai skor minimal 30 persen dari skor maksimal.&rdquo;
        </blockquote>

        <h2 className="text-lg sm:text-xl font-heading font-bold text-[#0F172A] pt-2">
          Empat Modus Tutorial dan Rumus Perhitungannya
        </h2>

        <div className="space-y-3 not-prose my-4">
          <div className="p-4 rounded-xl border border-slate-200 bg-[#F8FAFC] space-y-1.5">
            <h3 className="font-heading font-bold text-[#0F172A] text-sm">
              1. Tutorial Online (Tuton) - Bobot 70% UAS : 30% Tuton
            </h3>
            <p className="text-xs text-[#64748B]">
              Diselenggarakan via elearning.ut.ac.id selama 8 sesi. Terdiri dari kehadiran (20%), diskusi (30%), dan 3 tugas (50%).
            </p>
            <div className="p-2.5 rounded-lg bg-white border border-slate-200 font-mono text-xs text-[#0F172A] font-semibold">
              Nilai Akhir = (0.70 × UAS) + (0.30 × Nilai Tuton)
            </div>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-[#F8FAFC] space-y-1.5">
            <h3 className="font-heading font-bold text-[#0F172A] text-sm">
              2. Tuweb / TTM - Bobot 50% UAS : 50% Tuweb
            </h3>
            <p className="text-xs text-[#64748B]">
              Pertemuan tatap muka atau webinar Zoom sebanyak 8 kali pertemuan. Memberikan kontribusi seimbang 50% terhadap ujian.
            </p>
            <div className="p-2.5 rounded-lg bg-white border border-slate-200 font-mono text-xs text-[#0F172A] font-semibold">
              Nilai Akhir = (0.50 × UAS) + (0.50 × Nilai Tuweb)
            </div>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-[#F8FAFC] space-y-1.5">
            <h3 className="font-heading font-bold text-[#0F172A] text-sm">
              3. Tugas Mata Kuliah (TMK) - Bobot 80% UAS : 20% TMK
            </h3>
            <p className="text-xs text-[#64748B]">
              Pengerjaan 3 tugas mandiri di tmk.ut.ac.id bagi mahasiswa yang tidak ikut Tuton. Porsi ujian sangat dominan 80%.
            </p>
            <div className="p-2.5 rounded-lg bg-white border border-slate-200 font-mono text-xs text-[#0F172A] font-semibold">
              Nilai Akhir = (0.80 × UAS) + (0.20 × Nilai TMK)
            </div>
          </div>
        </div>

        <h2 className="text-lg sm:text-xl font-heading font-bold text-[#0F172A] pt-2">
          Contoh Kasus Riil Perhitungan Nilai
        </h2>
        <p>
          Misalkan seorang mahasiswa bernama Rian menempuh mata kuliah <em>Manajemen</em> dengan skema Tuton:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm text-[#334155]">
          <li>Nilai Akumulasi Tuton = <strong>88</strong></li>
          <li>Nilai Ujian Akhir Semester (UAS) = <strong>74</strong></li>
        </ul>
        <ol className="list-decimal pl-5 space-y-1 text-sm text-[#334155]">
          <li><strong>Pemeriksaan Batas 30:</strong> Nilai UAS (74) &ge; 30, sehingga nilai Tuton sah dihitung.</li>
          <li><strong>Kontribusi UAS:</strong> 70% × 74 = 51,80 poin.</li>
          <li><strong>Kontribusi Tuton:</strong> 30% × 88 = 26,40 poin.</li>
          <li><strong>Nilai Akhir:</strong> 51,80 + 26,40 = <strong>78,20</strong>.</li>
          <li><strong>Konversi Huruf:</strong> Skor 78,20 setara dengan huruf mutu <strong>A- (Bobot 3.50)</strong>. Status: Lulus.</li>
        </ol>

        <div className="p-4 my-4 rounded-xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-1 not-prose">
          <div className="flex items-center gap-2 font-semibold">
            <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" />
            <span>Kasus Nilai UAS di Bawah 30</span>
          </div>
          <p>
            Jika Rian memperoleh nilai Tuton 100, namun skor UAS hanya 28, maka seluruh nilai Tuton 100 dinyatakan gugur. Nilai akhir Rian tetap 28 dan tercatat sebagai huruf E (Gagal).
          </p>
        </div>
      </article>

      <section className="pt-6 border-t border-slate-200">
        <FaqAccordion items={GUIDE_FAQS} title="FAQ Seputar Penilaian Nilai Akhir UT" subtitle="" />
      </section>
    </div>
  );
}
