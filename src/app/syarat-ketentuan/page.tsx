import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, FileCheck, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Syarat & Ketentuan Penggunaan (Terms of Service) - NilaiUT',
  description: 'Syarat dan ketentuan hukum penggunaan situs, kalkulator nilai akhir, kalkulator IPK, dan widget iframe NilaiUT.',
  alternates: {
    canonical: 'https://nilaiut.com/syarat-ketentuan/',
  },
};

export default function SyaratKetentuanPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#002D72] hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Kembali ke Beranda</span>
        </Link>
      </div>

      <header className="space-y-4 border-b border-slate-200 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-[#002D72] border border-blue-200">
          <FileCheck className="w-3.5 h-3.5 text-[#002D72]" />
          <span>Aturan Penggunaan Layanan</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F172A] leading-tight">
          Syarat &amp; Ketentuan Penggunaan
        </h1>
        <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
          Harap baca syarat dan ketentuan ini secara saksama sebelum menggunakan kalkulator dan seluruh layanan terkait NilaiUT.
        </p>
      </header>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6 text-[#475569] text-sm sm:text-base leading-relaxed">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
          1. Penerimaan Ketentuan
        </h2>
        <p>
          Dengan mengakses atau menggunakan situs NilaiUT, Anda setuju untuk terikat secara hukum oleh Syarat dan Ketentuan ini, seluruh peraturan perundang-undangan yang berlaku di Republik Indonesia, dan bertanggung jawab atas kepatuhan terhadap hukum lokal yang berlaku.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-4">
          2. Sifat Layanan Simulasi &amp; Non-Afiliasi
        </h2>
        <p>
          NilaiUT adalah alat bantu simulasi perkiraan nilai akhir dan estimasi IPK akademik. Anda menyetujui bahwa:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Hasil kalkulasi yang disajikan platform ini merupakan estimasi matematis yang didasarkan pada formula umum Peraturan Rektor UT No. 16/2017.</li>
          <li>Platform ini <strong>bukan sumber data legal</strong> hasil studi mahasiswa. Nilai yang sah dan memiliki kekuatan hukum akademik mutlak bersumber dari Daftar Nilai Perkuliahan (DNP) dan Transkrip Akademik resmi yang diterbitkan oleh Universitas Terbuka via portal <code>myut.ut.ac.id</code>.</li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-4">
          3. Penggunaan Widget Iframe (Backlink Magnet)
        </h2>
        <p>
          Kami mengizinkan pengelola situs web, blogger pendidikan, dan komunitas mahasiswa untuk menyematkan (embed) kalkulator NilaiUT ke situs pihak ketiga dengan syarat:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Tautan atribusi kredit (backlink) ke <code>https://nilaiut.com</code> tidak boleh dihapus, disembunyikan menggunakan CSS (misal <code>display: none</code>), atau dimanipulasi dengan atribut <code>rel="nofollow"</code> tanpa izin tertulis.</li>
          <li>Widget tidak boleh dipasang pada situs web yang memuat konten ilegal, pornografi, perjudian online, atau konten yang melanggar hukum di Indonesia.</li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-4">
          4. Batasan Tanggung Jawab (Limitation of Liability)
        </h2>
        <p>
          Dalam keadaan apa pun, pengembang dan tim pengelola NilaiUT tidak bertanggung jawab atas kerugian langsung, tidak langsung, insidental, atau konsekuensial (termasuk namun tidak terbatas pada kekeliruan pendaftaran mata kuliah, kegagalan kelulusan, atau perbedaan penetapan yudisium resmi oleh kampus) yang timbul dari penggunaan atau ketidakmampuan menggunakan alat ini.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-4">
          5. Perubahan Syarat &amp; Ketentuan
        </h2>
        <p>
          Kami berhak merevisi syarat dan ketentuan ini sewaktu-waktu tanpa pemberitahuan sebelumnya. Dengan terus menggunakan situs ini setelah perubahan dilakukan, Anda dianggap menyetujui syarat dan ketentuan versi terkini.
        </p>
      </div>
    </div>
  );
}
