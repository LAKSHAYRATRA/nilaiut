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
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F172A] hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Kembali ke Beranda</span>
        </Link>
      </div>

      <header className="space-y-4 border-b border-slate-200 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-[#0F172A] border border-slate-200">
          <ShieldAlert className="w-3.5 h-3.5 text-[#0F172A]" />
          <span>Penafian Legal &amp; Akademik</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F172A] leading-tight">
          Penafian Resmi (Disclaimer)
        </h1>
        <p className="text-base sm:text-lg text-[#334155] leading-relaxed">
          Pernyataan penting mengenai batasan hukum, sifat hasil simulasi, dan independensi dari Universitas Terbuka (UT).
        </p>
      </header>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6 text-[#334155] text-sm sm:text-base leading-relaxed">
        <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 space-y-2">
          <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
            <AlertTriangle className="w-5 h-5 shrink-0 text-amber-600" />
            <span>Pernyataan Utama Sifat Simulasi</span>
          </div>
          <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
            Seluruh angka, huruf mutu, dan predikat yang dihasilkan oleh situs web NilaiUT adalah <strong>hasil simulasi matematis independen</strong> yang dirancang untuk mempermudah perkiraan belajar mahasiswa. Nilai resmi yang mengikat secara hukum akademik hanya diterbitkan oleh Universitas Terbuka melalui sistem resmi <strong>myut.ut.ac.id</strong>.
          </p>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] pt-4">
          1. Tidak Terafiliasi dengan Universitas Terbuka
        </h2>
        <p>
          NilaiUT bukan merupakan situs web, aplikasi, maupun divisi resmi milik Universitas Terbuka (UT) ataupun Kementerian Pendidikan Tinggi, Sains, dan Teknologi Republik Indonesia. Kami adalah komunitas independen yang berinisiatif membangun alat produktivitas digital gratis bagi rekan-rekan mahasiswa.
        </p>
        <p>
          Penyebutan nama "Universitas Terbuka", singkatan "UT", dan kode mata kuliah semata-mata bersifat deskriptif edukatif (nominative fair use) untuk memudahkan identifikasi konteks penilaian oleh pengguna.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] pt-4">
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

        <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] pt-4">
          3. Rujukan Resmi
        </h2>
        <p>
          Apabila terdapat perbedaan antara hasil perhitungan pada kalkulator NilaiUT dengan lembar Daftar Nilai Perkuliahan (DNP) atau Transkrip Akademik pada portal MyUT, maka <strong>data pada portal resmi MyUT adalah yang mutlak benar dan sah</strong>.
        </p>
        <p>
          Untuk mengakses layanan akademik resmi Universitas Terbuka, silakan kunjungi portal resmi berikut:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Portal Utama UT: <a href="https://www.ut.ac.id" target="_blank" rel="noopener noreferrer" className="text-[#0F172A] underline font-medium inline-flex items-center gap-1">www.ut.ac.id <ExternalLink className="w-3.5 h-3.5" /></a></li>
          <li>Portal Layanan Mahasiswa (MyUT): <a href="https://myut.ut.ac.id" target="_blank" rel="noopener noreferrer" className="text-[#0F172A] underline font-medium inline-flex items-center gap-1">myut.ut.ac.id <ExternalLink className="w-3.5 h-3.5" /></a></li>
          <li>Portal e-Learning (Tuton): <a href="https://elearning.ut.ac.id" target="_blank" rel="noopener noreferrer" className="text-[#0F172A] underline font-medium inline-flex items-center gap-1">elearning.ut.ac.id <ExternalLink className="w-3.5 h-3.5" /></a></li>
          <li>Portal Layanan Pengaduan (Hallo-UT): <a href="https://hallo-ut.ut.ac.id" target="_blank" rel="noopener noreferrer" className="text-[#0F172A] underline font-medium inline-flex items-center gap-1">hallo-ut.ut.ac.id <ExternalLink className="w-3.5 h-3.5" /></a></li>
        </ul>
      </div>
    </div>
  );
}
