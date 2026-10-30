import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ShieldAlert, AlertTriangle, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Penafian Resmi (Disclaimer) - NilaiUT',
  description: 'Pernyataan penafian hukum dan independensi akademik NilaiUT. Hasil kalkulasi bersifat simulasi dan rujukan resmi mengacu pada MyUT.',
  alternates: {
    canonical: 'https://nilaiut.com/disclaimer/',
  },
};

export default function DisclaimerPage() {
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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300">
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>Penafian Akademik &amp; Legal</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
          Penafian Resmi (Disclaimer)
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Pernyataan penting mengenai batasan hukum, sifat hasil simulasi, dan independensi dari Universitas Terbuka (UT).
        </p>
      </header>

      <div className="prose dark:prose-invert max-w-none space-y-6 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
        <div className="p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-700/60 space-y-2 not-prose">
          <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-bold text-sm">
            <AlertTriangle className="w-5 h-5 shrink-0" />
            <span>Pernyataan Utama Sifat Simulasi</span>
          </div>
          <p className="text-xs sm:text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
            Seluruh angka, huruf mutu, dan predikat yang dihasilkan oleh situs web NilaiUT adalah <strong>hasil simulasi matematis independen</strong> yang dirancang untuk mempermudah perkiraan belajar mahasiswa. Nilai resmi yang mengikat secara hukum akademik hanya diterbitkan oleh Universitas Terbuka melalui sistem resmi <strong>myut.ut.ac.id</strong>.
          </p>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-4">
          1. Tidak Terafiliasi dengan Universitas Terbuka
        </h2>
        <p>
          NilaiUT bukan merupakan situs web, aplikasi, maupun divisi resmi milik Universitas Terbuka (UT) ataupun Kementerian Pendidikan Tinggi, Sains, dan Teknologi Republik Indonesia. Kami adalah komunitas independen yang berinisiatif membangun alat produktivitas digital gratis bagi rekan-rekan mahasiswa.
        </p>
        <p>
          Penyebutan nama "Universitas Terbuka", singkatan "UT", dan kode mata kuliah semata-mata bersifat deskriptif edukatif (nominative fair use) untuk memudahkan identifikasi konteks penilaian oleh pengguna.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-4">
          2. Batasan Variabel Penilaian Kampus
        </h2>
        <p>
          Meskipun kalkulator ini dikembangkan berlandaskan formula Peraturan Rektor UT No. 16/2017, Anda memahami bahwa pada praktik riil perkuliahan terdapat variabel kebijakan fakultas atau program studi tertentu yang dapat mempengaruhi nilai akhir, antara lain:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Penetapan persentase bobot khusus pada mata kuliah berpraktik / praktikum mandiri dan bimbingan karya ilmiah.</li>
          <li>Kebijakan normalisasi skor atau pembobotan skala kurva (standard deviation adjustment) yang mungkin diterapkan program studi pada masa ujian tertentu.</li>
          <li>Verifikasi pelanggaran etika akademik seperti plagiarisme pada lembar jawaban ujian take-home (THE) atau tugas Tuton yang dapat mengakibatkan pembatalan nilai secara sepihak oleh pihak universitas.</li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-4">
          3. Rujukan Resmi
        </h2>
        <p>
          Apabila terdapat perbedaan antara hasil perhitungan pada kalkulator NilaiUT dengan lembar Daftar Nilai Perkuliahan (DNP) atau Transkrip Akademik pada portal MyUT, maka <strong>data pada portal resmi MyUT adalah yang mutlak benar dan sah</strong>.
        </p>
        <p>
          Untuk mengakses layanan akademik resmi Universitas Terbuka, silakan kunjungi portal resmi berikut:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Portal Utama UT: <a href="https://www.ut.ac.id" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline inline-flex items-center gap-1">www.ut.ac.id <ExternalLink className="w-3.5 h-3.5" /></a></li>
          <li>Portal Layanan Mahasiswa (MyUT): <a href="https://myut.ut.ac.id" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline inline-flex items-center gap-1">myut.ut.ac.id <ExternalLink className="w-3.5 h-3.5" /></a></li>
          <li>Portal e-Learning (Tuton): <a href="https://elearning.ut.ac.id" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline inline-flex items-center gap-1">elearning.ut.ac.id <ExternalLink className="w-3.5 h-3.5" /></a></li>
          <li>Portal Layanan Pengaduan (Hallo-UT): <a href="https://hallo-ut.ut.ac.id" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline inline-flex items-center gap-1">hallo-ut.ut.ac.id <ExternalLink className="w-3.5 h-3.5" /></a></li>
        </ul>
      </div>
    </div>
  );
}
