import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import FaqAccordion, { FaqItem } from '@/components/FaqAccordion';
import { ArrowLeft, Award, CheckCircle2, AlertTriangle, GraduationCap, Clock, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cara Menghitung IPK & Predikat Kelulusan Universitas Terbuka (Cumlaude, Sangat Memuaskan)',
  description: 'Panduan lengkap menghitung Indeks Prestasi Kumulatif (IPK) UT, bobot SKS, syarat predikat kelulusan Cumlaude, batas nilai D, dan persiapan yudisium.',
  alternates: {
    canonical: 'https://nilaiut.com/panduan/cara-menghitung-ipk-dan-predikat-kelulusan-ut/',
  },
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
    answer: "Sesuai Buku Pedoman Akademik Mahasiswa UT, persentase nilai D maksimal yang diperbolehkan umumnya tidak boleh melebihi 10% hingga 15% dari total SKS kurikulum program studi (misal maksimal 14-15 SKS dari total 144 SKS), dan nilai D sama sekali tidak diperbolehkan pada mata kuliah inti keahlian khusus, Tugas Akhir Program (TAP), Karya Ilmiah (Karil), Praktikum, serta Pendidikan Agama."
  },
  {
    question: "Jika saya mengulang mata kuliah yang bernilai C atau D, nilai mana yang akan dipakai di transkrip?",
    answer: "Sistem UT secara otomatis menggunakan asas nilai terbaik (the best grade). Jika Anda mengulang mata kuliah yang awalnya bernilai D kemudian pada registrasi ulang berhasil meraih nilai B, maka sistem pangkalan data akademik akan mencatat nilai B dalam transkrip resmi kelulusan Anda."
  },
  {
    question: "Apakah mahasiswa alih kredit / transfer bisa meraih predikat Cumlaude di UT?",
    answer: "Sesuai regulasi yudisium UT, predikat Dengan Pujian (Cumlaude) memiliki ketentuan khusus terkait masa studi dan sumber perolehan SKS. Mahasiswa alih kredit atau rekognisi pembelajaran lampau (RPL) tetap bisa lulus dengan predikat Sangat Memuaskan jika IPK mencapai ≥ 3.51."
  }
];

export default function CaraHitungIpkPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Beranda',
        item: 'https://nilaiut.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Panduan',
        item: 'https://nilaiut.com/#panduan-akademik',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Cara Menghitung IPK dan Predikat Kelulusan UT',
        item: 'https://nilaiut.com/panduan/cara-menghitung-ipk-dan-predikat-kelulusan-ut/',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: IPK_FAQS.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Kalkulator Nilai</span>
        </Link>
      </div>

      <header className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Panduan Yudisium &amp; Transkrip</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
          Cara Menghitung IPK &amp; Predikat Kelulusan Universitas Terbuka
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Ketahui formula baku perhitungan Indeks Prestasi Semester (IPS) dan Indeks Prestasi Kumulatif (IPK), konversi angka mutu, serta kriteria resmi meraih predikat Cumlaude saat wisuda.
        </p>
        <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 pt-2">
          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> Waktu Baca: 7 Menit</span>
          <span>•</span>
          <span>Sesuai Buku Pedoman Akademik Mahasiswa UT</span>
        </div>
      </header>

      <article className="prose dark:prose-invert max-w-none space-y-6 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
        <p>
          Indeks Prestasi Kumulatif (IPK) merupakan tolok ukur kuantitatif keberhasilan studi mahasiswa sepanjang menempuh pendidikan di perguruan tinggi. Di Universitas Terbuka, pencapaian IPK tidak hanya menentukan status kelulusan pada saat yudisium, tetapi juga membuka peluang beasiswa prestasi, pembebasan biaya kuliah, serta kualifikasi melamar pekerjaan dan seleksi Calon Pegawai Negeri Sipil (CPNS) maupun BUMN.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-4">
          Tabel Bobot Angka Mutu Nilai Huruf di UT
        </h2>
        <p>
          Setiap huruf mutu hasil perkuliahan memiliki bobot angka mutu baku pada skala 4.00 sebagai berikut:
        </p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold">
              <tr>
                <th className="p-3 border-b">Huruf Mutu</th>
                <th className="p-3 border-b">Angka Mutu (Bobot)</th>
                <th className="p-3 border-b">Rentang Skor Nilai Akhir</th>
                <th className="p-3 border-b">Arti / Sebutan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
              <tr>
                <td className="p-3 font-bold text-emerald-600 dark:text-emerald-400">A</td>
                <td className="p-3 font-mono font-bold">4.00</td>
                <td className="p-3">80,00 - 100,00</td>
                <td className="p-3">Sangat Baik</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-emerald-600 dark:text-emerald-400">A-</td>
                <td className="p-3 font-mono font-bold">3.50</td>
                <td className="p-3">75,00 - 79,99</td>
                <td className="p-3">Antara Baik Sekali &amp; Sangat Baik</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-blue-600 dark:text-blue-400">B</td>
                <td className="p-3 font-mono font-bold">3.00</td>
                <td className="p-3">70,00 - 74,99</td>
                <td className="p-3">Baik Sekali</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-blue-600 dark:text-blue-400">B-</td>
                <td className="p-3 font-mono font-bold">2.50</td>
                <td className="p-3">65,00 - 69,99</td>
                <td className="p-3">Antara Cukup Baik &amp; Baik Sekali</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-amber-600 dark:text-amber-400">C</td>
                <td className="p-3 font-mono font-bold">2.00</td>
                <td className="p-3">60,00 - 64,99</td>
                <td className="p-3">Cukup</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-amber-600 dark:text-amber-400">D</td>
                <td className="p-3 font-mono font-bold">1.00</td>
                <td className="p-3">55,00 - 59,99</td>
                <td className="p-3">Kurang (Lulus Bersyarat)</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-red-600 dark:text-red-400">E</td>
                <td className="p-3 font-mono font-bold">0.00</td>
                <td className="p-3">0,00 - 54,99</td>
                <td className="p-3">Gagal (Tidak Lulus)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-4">
          Rumus Perhitungan Nilai Mutu dan IPK
        </h2>
        <p>
          Perhitungan IPK menggunakan konsep rata-rata tertimbang (weighted average) terhadap Satuan Kredit Semester (SKS):
        </p>
        <ol className="list-decimal pl-5 space-y-2">
          <li><strong>Nilai Mutu Mata Kuliah (M):</strong> Dihitung dengan mengalikan bobot angka mutu dengan jumlah SKS mata kuliah tersebut. <br />
          <em>Contoh:</em> Mata kuliah Akuntansi Keuangan (3 SKS) memperoleh huruf A (bobot 4.00), maka Nilai Mutu = 3 × 4.00 = <strong>12.00</strong>.</li>
          <li><strong>Total Nilai Mutu Kumulatif (∑M):</strong> Menjumlahkan seluruh nilai mutu mata kuliah yang telah diselesaikan.</li>
          <li><strong>Total SKS Kumulatif (∑K):</strong> Menjumlahkan seluruh SKS mata kuliah yang telah ditempuh.</li>
          <li><strong>IPK:</strong> Membagi Total Nilai Mutu dengan Total SKS: <br />
          <div className="p-3 my-2 rounded-lg bg-slate-100 dark:bg-slate-800 font-mono text-sm font-bold text-emerald-700 dark:text-emerald-300">
            IPK = ∑ (SKS × Angka Mutu) / ∑ (SKS)
          </div>
          </li>
        </ol>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-4">
          Standar Predikat Kelulusan Resmi UT
        </h2>
        <p>
          Saat Anda menyelesaikan seluruh kurikulum (sekitar 144 - 146 SKS untuk program S1) dan dinyatakan lulus dalam Surat Keputusan (SK) Yudisium Rektor, predikat kelulusan Anda akan ditentukan sebagai berikut:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-6">
          <div className="p-5 rounded-xl border border-emerald-300 dark:border-emerald-800 bg-emerald-50/60 dark:bg-emerald-950/20 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
              IPK 3.51 - 4.00
            </span>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">
              Dengan Pujian (Cumlaude)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Predikat kehormatan tertinggi. Syarat tambahan UT: Tidak memiliki nilai E sama sekali, nilai D tidak melebihi batas kurikulum, dan masa studi tidak melampaui batas toleransi.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-blue-300 dark:border-blue-800 bg-blue-50/60 dark:bg-blue-950/20 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
              IPK 3.01 - 3.50
            </span>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">
              Sangat Memuaskan
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Predikat akademik sangat tinggi yang menjadi target mayoritas lulusan sarjana untuk melamar beasiswa magister LPDP dan rekrutmen korporasi terkemuka.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              IPK 2.76 - 3.00
            </span>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">
              Memuaskan
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Standar kelulusan baik yang memenuhi seluruh parameter kompetensi minimum sarjana.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              IPK 2.00 - 2.75
            </span>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">
              Cukup
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Ambang batas kelulusan paling minimal di UT. Mahasiswa dengan IPK di bawah 2.00 tidak dapat mengikuti yudisium.
            </p>
          </div>
        </div>

        <div className="p-6 my-8 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-center space-y-4 not-prose">
          <h3 className="text-xl font-bold">Hitung Predikat Kelulusan Anda Sekarang</h3>
          <p className="text-sm text-emerald-100 max-w-xl mx-auto">
            Masukkan daftar mata kuliah semester Anda di kalkulator IPK interaktif NilaiUT untuk memantau apakah Anda berpotensi meraih predikat Cumlaude.
          </p>
          <Link
            href="/#kalkulator-ipk"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-emerald-800 font-bold text-sm hover:bg-emerald-50 transition-colors shadow-lg"
          >
            <Award className="w-4 h-4" />
            <span>Buka Kalkulator IPK UT</span>
          </Link>
        </div>
      </article>

      <section className="pt-8 border-t border-slate-200 dark:border-slate-800">
        <FaqAccordion
          items={IPK_FAQS}
          title="FAQ Perhitungan IPK & Kelulusan UT"
          subtitle="Tanya jawab seputar syarat kelulusan, perbaikan nilai, dan predikat wisuda"
        />
      </section>
    </div>
  );
}
