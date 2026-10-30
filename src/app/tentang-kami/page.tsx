import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, GraduationCap, ShieldCheck, Heart, Zap, Target, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tentang Kami - NilaiUT: Kalkulator Nilai & IPK Mahasiswa Universitas Terbuka',
  description: 'Mengenal visi, misi, dan latar belakang pengembangan NilaiUT sebagai platform kalkulator akademik independen untuk mahasiswa Universitas Terbuka.',
  alternates: {
    canonical: 'https://nilaiut.com/tentang-kami/',
  },
};

export default function TentangKamiPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Beranda</span>
        </Link>
      </div>

      <header className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Profil Platform</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
          Tentang NilaiUT
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Platform kalkulator nilai akhir, perencanaan IPK, dan pemecah target nilai UAS independen yang didedikasikan bagi 525.000+ mahasiswa Universitas Terbuka di seluruh pelosok Indonesia dan luar negeri.
        </p>
      </header>

      <div className="prose dark:prose-invert max-w-none space-y-6 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
          Latar Belakang &amp; Motivasi
        </h2>
        <p>
          Universitas Terbuka (UT) merupakan perguruan tinggi negeri ke-45 di Indonesia yang menerapkan sistem pendidikan tinggi terbuka dan jarak jauh (PTJJ). Dengan ratusan ribu mahasiswa aktif yang tersebar di 39 Kantor Layanan UPBJJ-UT di seluruh nusantara dan Pusat Pengelolaan Mahasiswa Luar Negeri (PPMLN), kebutuhan akan alat simulasi nilai yang akurat, cepat, dan mudah diakses menjadi sangat krusial.
        </p>
        <p>
          Sebelum lahirnya NilaiUT, banyak mahasiswa menghitung nilai secara manual dengan kalkulator ponsel, sering kali salah menerapkan persentase bobot antara Tuton (70:30), TMK (80:20), dan Tuweb (50:50). Yang paling memprihatinkan, ribuan mahasiswa setiap semester mengalami kegagalan (mendapat huruf mutu E) karena tidak menyadari adanya <strong>klausul syarat minimal UAS 30 poin</strong>.
        </p>
        <p>
          Oleh karena itu, kami membangun <strong>NilaiUT</strong> dengan satu misi sederhana namun berdampak luas: <em>Menghilangkan ketidakpastian akademik dan membantu mahasiswa UT merencanakan kelulusan sarjana dengan penuh percaya diri.</em>
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-4">
          Tiga Komitmen Utama Kami
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose my-6">
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              100% Client-Side &amp; Privasi Terjaga
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Seluruh kalkulasi dijalankan secara lokal di peramban pengguna. Kami tidak mengumpulkan, menyimpan, maupun membagikan data nilai atau nomor induk mahasiswa Anda ke server mana pun.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Kepatuhan Regulasi Resmi
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Formula kalkulasi kami mengacu strictly pada Peraturan Rektor UT No. 16/2017 serta Buku Pedoman Akademik Mahasiswa UT terbaru tahun 2026.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Gratis Selamanya untuk Mahasiswa
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              NilaiUT dapat digunakan tanpa biaya langganan, tanpa batasan frekuensi hitung, dan bebas dipasang pada blog atau website komunitas mahasiswa UT.
            </p>
          </div>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-4">
          Pernyataan Independensi (Penafian)
        </h2>
        <div className="p-5 rounded-2xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3 not-prose">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-sm">
            <ShieldCheck className="w-5 h-5 text-blue-600" />
            <span>Pernyataan Kemitraan &amp; Afiliasi</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            NilaiUT adalah situs rintisan komunitas independen yang didirikan oleh alumni dan pengembang software pendidikan di Indonesia. Situs ini <strong>tidak berafiliasi secara institusional, disponsori, didukung, atau berada di bawah naungan manajemen Rektorat Universitas Terbuka maupun Kementerian Pendidikan Tinggi, Sains, dan Teknologi RI</strong>. Seluruh merek dagang "Universitas Terbuka" dan "UT" adalah hak kekayaan intelektual milik Universitas Terbuka.
          </p>
        </div>
      </div>
    </div>
  );
}
