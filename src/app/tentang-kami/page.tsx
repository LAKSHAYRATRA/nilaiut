import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { ArrowLeft, ShieldCheck, UserCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tentang Kami (About Us) - NilaiUT',
  description: 'Mengenal visi, misi, dan tim pengembang NilaiUT sebagai platform kalkulator akademik independen untuk mahasiswa Universitas Terbuka.',
  alternates: {
    canonical: 'https://nilaiut.com/tentang-kami/',
  },
};

export default function TentangKamiPage() {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Tentang NilaiUT (About Us)',
    url: 'https://nilaiut.com/tentang-kami/',
    description: 'Profil platform dan tim pengembang kalkulator nilai akademik independen untuk mahasiswa Universitas Terbuka.',
    datePublished: '2026-01-01T00:00:00+07:00',
    dateModified: '2026-11-06T00:00:00+07:00',
    author: {
      '@type': 'Person',
      name: 'Lakshay Ratra',
      jobTitle: 'Educational Software Developer',
      url: 'https://nilaiut.com/tentang-kami/',
      sameAs: ['https://github.com/LAKSHAYRATRA']
    },
    publisher: {
      '@type': 'Organization',
      name: 'NilaiUT',
      url: 'https://nilaiut.com'
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      <JsonLd data={aboutSchema} />

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
        <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
          Profil Platform
        </span>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight">
          Tentang NilaiUT (About Us)
        </h1>
        <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
          Platform kalkulator nilai akhir, perencanaan IPK, dan pemecah target nilai ujian independen untuk mahasiswa Universitas Terbuka di seluruh Indonesia.
        </p>
      </header>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6 text-[#334155] text-sm sm:text-base leading-relaxed">
        <h2 className="text-lg sm:text-xl font-bold text-[#0F172A]">
          Latar Belakang Pengembangan
        </h2>
        <p>
          Universitas Terbuka (UT) merupakan perguruan tinggi negeri ke-45 di Indonesia yang menerapkan sistem pendidikan terbuka dan jarak jauh (PTJJ). Dengan ratusan ribu mahasiswa aktif yang tersebar di puluhan UPBJJ-UT di seluruh nusantara dan Pusat Pengelolaan Mahasiswa Luar Negeri (PPMLN), kebutuhan akan instrumen simulasi nilai yang akurat dan transparan menjadi hal yang fundamental.
        </p>
        <p>
          Sebelum adanya NilaiUT, banyak mahasiswa menghitung nilai secara manual dan kerap keliru dalam menerapkan persentase pembobotan antara Tuton (70:30), TMK (80:20), dan Tuweb (50:50). Yang paling krusial, sejumlah mahasiswa setiap semester memperoleh huruf mutu E karena kurang memahami <strong>klausul syarat minimal nilai ujian 30 poin</strong>.
        </p>
        <p>
          NilaiUT dikembangkan untuk memberikan kejelasan perhitungan akademik secara mudah, cepat, dan akurat sesuai pedoman universitas.
        </p>

        <h2 className="text-lg sm:text-xl font-bold text-[#0F172A] pt-2">
          Tim Pengembang &amp; Penanggung Jawab (Author Signals)
        </h2>
        <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3.5">
          <div className="p-2 rounded-lg bg-[#0F172A] text-white shrink-0 mt-0.5">
            <UserCheck className="w-5 h-5 text-white" />
          </div>
          <div className="space-y-1 text-xs sm:text-sm">
            <div className="font-bold text-[#0F172A] text-sm sm:text-base">Lakshay Ratra &amp; Tim NilaiUT</div>
            <p className="text-[#475569]">
              Pengembang perangkat lunak edukasi independen. Berfokus pada perancangan algoritma perhitungan nilai perkuliahan jarak jauh berbasis Peraturan Rektor UT No. 16/2017.
            </p>
            <div className="pt-1 flex items-center gap-4 text-xs font-semibold">
              <a href="https://github.com/LAKSHAYRATRA" target="_blank" rel="noopener noreferrer" className="text-[#0F172A] hover:underline">
                GitHub: LAKSHAYRATRA
              </a>
              <Link href="/kontak/" className="text-[#0F172A] hover:underline">
                Kontak Pengembang
              </Link>
            </div>
          </div>
        </div>

        <h2 className="text-lg sm:text-xl font-bold text-[#0F172A] pt-2">
          Prinsip Layanan Kami
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Pemrosesan 100% Client-Side:</strong> Seluruh perhitungan nilai dijalankan secara lokal di peramban pengguna. Kami tidak mengumpulkan atau menyimpan data nilai dan identitas akademik mahasiswa ke server mana pun.</li>
          <li><strong>Kepatuhan Regulasi Resmi:</strong> Formula perhitungan mengacu secara ketat pada Peraturan Rektor UT No. 16/2017 serta Buku Pedoman Mahasiswa UT edisi terbaru.</li>
          <li><strong>Bebas Biaya:</strong> NilaiUT dapat diakses dan digunakan secara gratis tanpa keharusan membuat akun atau membayar biaya langganan.</li>
        </ul>

        <h2 className="text-lg sm:text-xl font-bold text-[#0F172A] pt-2">
          Pernyataan Independensi (Penafian)
        </h2>
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-[#334155] leading-relaxed not-prose">
          <div className="flex items-center gap-2 font-semibold text-[#0F172A] mb-1">
            <ShieldCheck className="w-4 h-4 text-[#0F172A] shrink-0" />
            <span>Pernyataan Non-Afiliasi</span>
          </div>
          NilaiUT adalah situs independen yang didirikan oleh alumni dan pengembang software pendidikan di Indonesia. Situs ini tidak berafiliasi secara institusional, disponsori, didukung, atau berada di bawah naungan manajemen Rektorat Universitas Terbuka maupun Kementerian Pendidikan Tinggi, Sains, dan Teknologi RI. Seluruh merek dagang dan nama mata kuliah adalah hak milik Universitas Terbuka.
        </div>
      </div>
    </div>
  );
}
