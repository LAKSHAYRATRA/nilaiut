import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { ArrowLeft, Shield, Lock, Eye, FileText, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kebijakan Privasi (Privacy Policy) - NilaiUT',
  description: 'Kebijakan privasi resmi NilaiUT. Ketahui bagaimana kami melindungi kerahasiaan data perhitungan Anda, kebijakan cookies, dan kepatuhan Google AdSense.',
  alternates: {
    canonical: 'https://nilaiut.com/kebijakan-privasi/',
  },
};

export default function KebijakanPrivasiPage() {
  const privacySchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Kebijakan Privasi (Privacy Policy)',
    url: 'https://nilaiut.com/kebijakan-privasi/',
    description: 'Dokumen transparansi perlindungan data pribadi dan privasi pengguna NilaiUT.',
    datePublished: '2026-01-01T00:00:00+07:00',
    dateModified: '2026-11-06T00:00:00+07:00',
    publisher: {
      '@type': 'Organization',
      name: 'NilaiUT',
      url: 'https://nilaiut.com'
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      <JsonLd data={privacySchema} />
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
          <Shield className="w-3.5 h-3.5" />
          <span>Dokumen Kepatuhan Hukum &amp; Privasi</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F172A] leading-tight">
          Kebijakan Privasi (Privacy Policy)
        </h1>
        <p className="text-base sm:text-lg text-[#334155] leading-relaxed">
          Terakhir diperbarui: 30 Oktober 2026. Mematuhi Kebijakan Program Google AdSense, Peraturan Perlindungan Data Umum (GDPR), serta UU Perlindungan Data Pribadi Republik Indonesia (UU PDP No. 27/2022).
        </p>
      </header>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6 text-[#334155] text-sm sm:text-base leading-relaxed">
        <p>
          Selamat datang di <strong>NilaiUT</strong> (dapat diakses melalui <a href="https://nilaiut.com" className="text-[#0F172A] underline font-medium">https://nilaiut.com</a>). Kami berkomitmen penuh untuk menjaga transparansi dan menghormati hak privasi setiap pengunjung. Kebijakan Privasi ini menguraikan jenis informasi yang kami kumpulkan, cara kami memprosesnya, serta langkah perlindungan data yang kami terapkan.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] pt-4">
          1. Prinsip Zero Data Retention (100% Client-Side)
        </h2>
        <p>
          Aplikasi NilaiUT dibangun dengan filosofi pemrosesan lokal tanpa penyimpanan database:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li><strong>Data Nilai Akademik Tidak Pernah Dikirim ke Server:</strong> Seluruh nilai ujian, nilai Tuton, tugas TMK, dan SKS yang Anda masukkan ke dalam kalkulator diolah secara eksklusif menggunakan algoritma JavaScript di browser perangkat Anda.</li>
          <li><strong>Tanpa Permintaan Identitas Sensitif:</strong> Kami tidak pernah meminta kata sandi akun kampus Anda, tidak meminta data perbankan, dan tidak menyimpan data identitas mahasiswa.</li>
          <li><strong>Penyimpanan Preferensi Lokal (localStorage):</strong> Kami hanya menggunakan memori lokal peramban untuk menyimpan pilihan preferensi navigasi serta status persetujuan banner cookie demi kenyamanan navigasi Anda.</li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] pt-4">
          2. Pengungkapan Khusus Google AdSense &amp; Vendor Pihak Ketiga
        </h2>
        <p>
          Situs ini dapat menampilkan iklan yang dikelola oleh <strong>Google LLC (Google AdSense)</strong> dan jaringan periklanan pihak ketiga bersertifikat. Sesuai dengan Kebijakan Program Google, kami memberitahukan hal-hal berikut:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Vendor Pihak Ketiga:</strong> Google dan vendor pihak ketiga lainnya menggunakan cookie untuk menayangkan iklan kepada pengguna berdasarkan riwayat kunjungan pengguna sebelumnya ke situs ini maupun situs web lain di internet.</li>
          <li><strong>Cookie DART / DoubleClick:</strong> Penggunaan cookie periklanan oleh Google memungkinkan penayangan iklan yang relevan kepada pengunjung kami berdasarkan topik minat dan pola penjelajahan situs yang sah.</li>
          <li><strong>Hak Memilih dan Keluar (Opt-out):</strong> Pengguna dapat menonaktifkan iklan hasil personalisasi kapan saja dengan mengunjungi laman <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-[#0F172A] underline font-semibold">Setelan Iklan Google (Google Ads Settings)</a>.</li>
          <li>Sebagai alternatif, Anda juga dapat menonaktifkan penggunaan cookie vendor pihak ketiga untuk iklan berbasis minat dengan mengunjungi <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-[#0F172A] underline font-semibold">aboutads.info/choices</a> atau <a href="https://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer" className="text-[#0F172A] underline font-semibold">youronlinechoices.eu</a>.</li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] pt-4">
          3. Berkas Log Server (Log Files)
        </h2>
        <p>
          NilaiUT mengikuti prosedur standar penggunaan file log server hosting. Informasi yang terekam meliputi alamat protokol internet (IP), tipe peramban, penyedia layanan internet (ISP), penunjuk tanggal/waktu, dan halaman rujukan. Data ini digunakan murni untuk keperluan teknis menjaga stabilitas server dan mencegah serangan siber (DDoS mitigation), tanpa mengidentifikasi pengguna secara pribadi.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] pt-4">
          4. Kepatuhan Regulasi GDPR &amp; UU PDP Indonesia No. 27/2022
        </h2>
        <p>
          Sebagai pengguna, Anda memiliki hak-hak yang dijamin oleh peraturan perundang-undangan:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Hak Akses &amp; Transparansi:</strong> Hak untuk mengetahui data teknis apa saja yang dikumpulkan saat mengakses situs kami.</li>
          <li><strong>Hak Menolak Pelacakan:</strong> Anda berhak menolak cookie analitik atau cookie iklan personalisasi melalui banner persetujuan cookie kami.</li>
          <li><strong>Hak Penghapusan (Right to be Forgotten):</strong> Karena seluruh data kalkulasi disimpan secara lokal di peramban Anda, Anda dapat menghapus seluruh riwayat kalkulasi kapan saja cukup dengan membersihkan *cache &amp; site data* browser Anda.</li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] pt-4">
          5. Perlindungan Privasi Anak di Bawah Umur
        </h2>
        <p>
          NilaiUT tidak pernah secara sadar mengumpulkan informasi pengenal pribadi dari anak-anak di bawah usia 13 tahun. Jika orang tua atau wali meyakini bahwa anak mereka memberikan data pribadi kepada kami, silakan hubungi kami segera agar data teknis tersebut dapat dihapus dari log server kami.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] pt-4">
          6. Kontak &amp; Data Protection Officer (DPO)
        </h2>
        <p>
          Jika Anda memiliki pertanyaan mengenai Kebijakan Privasi ini atau ingin menyampaikan permintaan terkait hak data pribadi Anda, Anda dapat menghubungi kami melalui:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Email: <a href="mailto:privacy@nilaiut.com" className="text-[#0F172A] underline font-semibold">privacy@nilaiut.com</a></li>
          <li>Formulir Kontak: <Link href="/kontak" className="text-[#0F172A] underline font-semibold">Halaman Kontak NilaiUT</Link></li>
        </ul>
      </div>
    </div>
  );
}
