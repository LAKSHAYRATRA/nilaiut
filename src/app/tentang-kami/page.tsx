import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tentang Kami - NilaiUT: Kalkulator Nilai & IPK Mahasiswa Universitas Terbuka',
  description: 'Mengenal visi, misi, dan latar belakang pengembangan NilaiUT sebagai platform kalkulator akademik independen untuk mahasiswa Universitas Terbuka.',
  alternates: {
    canonical: 'https://nilaiut.com/tentang-kami/',
  },
};

export default function TentangKamiPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
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
          Profil Platform
        </span>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight">
          Tentang NilaiUT
        </h1>
        <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
          Platform kalkulator nilai akhir, perencanaan IPK, dan pemecah target nilai ujian independen untuk mahasiswa Universitas Terbuka di seluruh Indonesia.
        </p>
      </header>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6 text-[#475569] text-sm sm:text-base leading-relaxed">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
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

        <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white pt-2">
          Prinsip Layanan Kami
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Pemrosesan 100% Client-Side:</strong> Seluruh perhitungan nilai dijalankan secara lokal di peramban pengguna. Kami tidak mengumpulkan atau menyimpan data nilai dan identitas akademik mahasiswa ke server mana pun.</li>
          <li><strong>Kepatuhan Regulasi Resmi:</strong> Formula perhitungan mengacu secara ketat pada Peraturan Rektor UT No. 16/2017 serta Buku Pedoman Mahasiswa UT edisi terbaru.</li>
          <li><strong>Bebas Biaya:</strong> NilaiUT dapat diakses dan digunakan secara gratis tanpa keharusan membuat akun atau membayar biaya langganan.</li>
        </ul>

        <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white pt-2">
          Pernyataan Independensi (Penafian)
        </h2>
        <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed not-prose">
          <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white mb-1">
            <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
            <span>Pernyataan Non-Afiliasi</span>
          </div>
          NilaiUT adalah situs independen yang didirikan oleh alumni dan pengembang software pendidikan di Indonesia. Situs ini tidak berafiliasi secara institusional, disponsori, didukung, atau berada di bawah naungan manajemen Rektorat Universitas Terbuka maupun Kementerian Pendidikan Tinggi, Sains, dan Teknologi RI. Seluruh merek dagang dan nama mata kuliah adalah hak milik Universitas Terbuka.
        </div>
      </div>
    </div>
  );
}
