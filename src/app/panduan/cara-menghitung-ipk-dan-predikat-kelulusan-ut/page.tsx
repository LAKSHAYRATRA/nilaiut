import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import FaqAccordion, { FaqItem } from '@/components/FaqAccordion';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cara Hitung IPK UT & Predikat Kelulusan - Kalkulator IPK UT & Kalkulator UT',
  description: 'Cara hitung IPK UT resmi dan simulasi predikat kelulusan yudisium (Cumlaude, Sangat Memuaskan). Hitung total mutu SKS dengan kalkulator IPK UT online.',
  alternates: {
    canonical: 'https://nilaiut.com/panduan/cara-menghitung-ipk-dan-predikat-kelulusan-ut/',
  },
  keywords: [
    'cara hitung ipk ut',
    'kalkulator ipk ut',
    'kalkulator nilai ut',
    'kalkulator ut',
    'predikat kelulusan ut',
    'syarat cumlaude ut',
    'hitung ipk universitas terbuka'
  ],
  openGraph: {
    title: 'Cara Menghitung IPK & Predikat Kelulusan Universitas Terbuka',
    description: 'Panduan lengkap rumus perhitungan IPK UT, bobot mutu, dan syarat yudisium kelulusan sarjana.',
    url: 'https://nilaiut.com/panduan/cara-menghitung-ipk-dan-predikat-kelulusan-ut/',
    type: 'article',
  },
};

const IPK_FAQS: FaqItem[] = [
  {
    question: "Berapa batas maksimal jumlah SKS bernilai D yang diperbolehkan untuk yudisium di UT?",
    answer: "Sesuai Buku Pedoman Akademik Mahasiswa UT, persentase nilai D maksimal umumnya tidak boleh melebihi 10% hingga 15% dari total SKS kurikulum (sekitar 14-15 SKS dari 144 SKS), dan nilai D tidak diperbolehkan pada Tugas Akhir Program (TAP), Karya Ilmiah (Karil), Praktikum, dan Pendidikan Agama."
  },
  {
    question: "Jika mahasiswa mengulang mata kuliah yang bernilai C atau D, nilai mana yang tercatat di transkrip?",
    answer: "Sistem UT secara otomatis menggunakan asas nilai terbaik (best grade). Jika Anda mengulang mata kuliah yang awalnya bernilai D dan memperoleh nilai B, maka nilai B yang akan tercantum di transkrip kelulusan."
  },
  {
    question: "Apakah mahasiswa alih kredit / transfer bisa meraih predikat Cumlaude di UT?",
    answer: "Sesuai regulasi yudisium UT, predikat Dengan Pujian (Cumlaude) memiliki ketentuan masa studi dan sumber perolehan SKS. Mahasiswa alih kredit/RPL umumnya lulus dengan predikat Sangat Memuaskan jika IPK mencapai ≥ 3.51."
  }
];

export default function CaraHitungIpkPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Beranda', item: 'https://nilaiut.com/' },
      { '@type': 'ListItem', position: 2, name: 'Panduan', item: 'https://nilaiut.com/#panduan-akademik' },
      { '@type': 'ListItem', position: 3, name: 'Cara Menghitung IPK dan Predikat Kelulusan UT', item: 'https://nilaiut.com/panduan/cara-menghitung-ipk-dan-predikat-kelulusan-ut/' },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: IPK_FAQS.map(item => ({
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
          Pedoman Yudisium &amp; Kelulusan Resmi UT
        </span>
        <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0F172A] tracking-tight">
          Cara Menghitung IPK &amp; Predikat Kelulusan Universitas Terbuka
        </h1>
        <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
          Formula baku perhitungan Indeks Prestasi Semester (IPS) dan Kumulatif (IPK), konversi angka mutu, serta kriteria resmi meraih predikat Cumlaude.
        </p>
      </header>

      <article className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-5 text-[#334155] text-sm sm:text-base leading-relaxed">
        <p>
          Indeks Prestasi Kumulatif (IPK) merupakan tolok ukur kuantitatif keberhasilan studi mahasiswa sepanjang menempuh pendidikan di perguruan tinggi. Di Universitas Terbuka, pencapaian IPK menentukan status kelulusan pada saat yudisium kelulusan sarjana.
        </p>

        <h2 className="text-lg sm:text-xl font-heading font-bold text-[#0F172A] pt-2">
          Bobot Angka Mutu Nilai Huruf di UT
        </h2>
        <div className="not-prose my-4 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead className="bg-slate-50 text-[#0F172A] font-semibold border-b border-slate-200">
              <tr>
                <th className="p-3">Huruf Mutu</th>
                <th className="p-3">Angka Mutu (Bobot)</th>
                <th className="p-3">Rentang Skor</th>
                <th className="p-3">Sebutan Kualitatif</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-[#334155]">
              <tr>
                <td className="p-3 font-bold text-[#0F172A]">A</td>
                <td className="p-3 font-mono font-semibold">4.00</td>
                <td className="p-3">80,00 - 100,00</td>
                <td className="p-3">Sangat Baik</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#0F172A]">A-</td>
                <td className="p-3 font-mono font-semibold">3.50</td>
                <td className="p-3">75,00 - 79,99</td>
                <td className="p-3">Antara Baik Sekali &amp; Sangat Baik</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#0F172A]">B</td>
                <td className="p-3 font-mono font-semibold">3.00</td>
                <td className="p-3">70,00 - 74,99</td>
                <td className="p-3">Baik Sekali</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#0F172A]">B-</td>
                <td className="p-3 font-mono font-semibold">2.50</td>
                <td className="p-3">65,00 - 69,99</td>
                <td className="p-3">Antara Cukup Baik &amp; Baik Sekali</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#0F172A]">C</td>
                <td className="p-3 font-mono font-semibold">2.00</td>
                <td className="p-3">60,00 - 64,99</td>
                <td className="p-3">Cukup</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-amber-700">D</td>
                <td className="p-3 font-mono font-semibold">1.00</td>
                <td className="p-3">55,00 - 59,99</td>
                <td className="p-3">Kurang (Lulus Bersyarat)</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-rose-700">E</td>
                <td className="p-3 font-mono font-semibold">0.00</td>
                <td className="p-3">0,00 - 54,99</td>
                <td className="p-3">Gagal (Tidak Lulus)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-lg sm:text-xl font-heading font-bold text-[#0F172A] pt-2">
          Formula Perhitungan Nilai Mutu dan IPK
        </h2>
        <p>
          Perhitungan IPK menggunakan konsep rata-rata tertimbang terhadap Satuan Kredit Semester (SKS):
        </p>
        <div className="p-3.5 rounded-lg bg-slate-100 font-mono text-xs sm:text-sm text-[#0F172A] font-semibold not-prose">
          IPK = ∑ (SKS × Angka Mutu) / ∑ (SKS)
        </div>

        <h2 className="text-lg sm:text-xl font-heading font-bold text-[#0F172A] pt-2">
          Predikat Kelulusan Resmi UT
        </h2>
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-[#334155]">
          <li><strong>Dengan Pujian (Cumlaude):</strong> IPK 3.51 - 4.00, dengan syarat masa studi tepat waktu dan tidak memiliki nilai E sama sekali.</li>
          <li><strong>Sangat Memuaskan:</strong> IPK 3.01 - 3.50.</li>
          <li><strong>Memuaskan:</strong> IPK 2.76 - 3.00.</li>
          <li><strong>Cukup:</strong> IPK 2.00 - 2.75 (ambang batas minimal kelulusan sarjana).</li>
        </ul>
      </article>

      <section className="pt-6 border-t border-slate-200">
        <FaqAccordion items={IPK_FAQS} title="FAQ Perhitungan IPK & Kelulusan UT" subtitle="" />
      </section>
    </div>
  );
}
