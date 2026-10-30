import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import FaqAccordion, { FaqItem } from '@/components/FaqAccordion';
import { ArrowLeft, Calculator, BookOpen, CheckCircle2, AlertTriangle, Lightbulb, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Panduan Lengkap Cara Menghitung Nilai Akhir Mata Kuliah Universitas Terbuka (UT)',
  description: 'Pelajari rumus resmi penilaian Universitas Terbuka berdasarkan Peraturan Rektor No. 16/2017. Simulasi perhitungan Tuton, TMK, Tuweb, dan contoh kasus riil.',
  alternates: {
    canonical: 'https://nilaiut.com/panduan/cara-hitung-nilai-akhir-ut/',
  },
  openGraph: {
    title: 'Panduan Lengkap Cara Menghitung Nilai Akhir Mata Kuliah UT',
    description: 'Rumus resmi penilaian Universitas Terbuka berdasarkan Peraturan Rektor No. 16/2017 dengan simulasi perhitungan riil.',
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
    question: "Apakah nilai tugas Tuton otomatis masuk jika saya lupa mengklik 'Kirim Jawaban'?",
    answer: "Pada sistem e-Learning UT (elearning.ut.ac.id), tugas yang diunggah ke formulir tugas berstatus draft tidak akan dinilai oleh tutor jika tenggat waktu telah ditutup. Pastikan status penyerahan tugas berlabel 'Submitted for grading' (Terkirim untuk dinilai) sebelum Minggu ke-3, ke-5, dan ke-7 pukul 15.00 WIB."
  },
  {
    question: "Bagaimana jika nilai UAS saya 29 dan nilai Tuton saya 90?",
    answer: "Secara matematis (70% × 29) + (30% × 90) = 20.3 + 27 = 47.3. Namun karena aturan batas minimal 30 poin, nilai Tuton 90 tersebut dibatalkan (dihanguskan) oleh sistem pengolahan nilai UT. Nilai akhir Anda menjadi 29 murni dengan huruf mutu E (Gagal)."
  }
];

export default function CaraHitungNilaiPage() {
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
        name: 'Cara Hitung Nilai Akhir UT',
        item: 'https://nilaiut.com/panduan/cara-hitung-nilai-akhir-ut/',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: GUIDE_FAQS.map(item => ({
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

      {/* Back button */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Kalkulator Nilai</span>
        </Link>
      </div>

      {/* Article Header */}
      <header className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Regulasi Akademik Universitas Terbuka</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
          Panduan Lengkap Cara Menghitung Nilai Akhir Mata Kuliah Universitas Terbuka
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Pahami dasar hukum Peraturan Rektor No. 16/2017, rincian bobot komponen tutorial, cara membaca Daftar Nilai Perkuliahan (DNP), serta simulasi perhitungan nyata.
        </p>
        <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 pt-2">
          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> Waktu Baca: 7 Menit</span>
          <span>•</span>
          <span>Diperbarui untuk Kalender Akademik 2026</span>
        </div>
      </header>

      {/* Article Body */}
      <article className="prose dark:prose-invert max-w-none space-y-6 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
        <p>
          Bagi mahasiswa Universitas Terbuka (UT)—baik mahasiswa baru (maba) maupun mahasiswa senior yang menempuh program Diploma, Sarjana (S1), hingga Pascasarjana—sistem evaluasi hasil belajar memiliki karakteristik unik yang membedakannya secara signifikan dari perguruan tinggi konvensional tatap muka.
        </p>
        <p>
          Di Universitas Terbuka, proses perkuliahan didesain mandiri dan berbasis jarak jauh (PJJ). Oleh sebab itu, nilai akhir mata kuliah bukan hanya ditentukan oleh kehadiran di ruang kelas fisik, melainkan merupakan akumulasi terpadu antara <strong>Aktivitas Belajar Terbimbing (Tutorial)</strong> dan <strong>Ujian Akhir Semester (UAS)</strong>.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-4">
          Dasar Hukum: Peraturan Rektor UT No. 16 Tahun 2017
        </h2>
        <p>
          Sistem penilaian hasil belajar mahasiswa UT diatur secara baku dalam <strong>Peraturan Rektor Universitas Terbuka Nomor 16 Tahun 2017</strong> tentang Sistem Penilaian dan Evaluasi Akademik. Dalam aturan tersebut ditegaskan bahwa:
        </p>
        <blockquote className="p-4 my-4 border-l-4 border-blue-600 bg-blue-50/50 dark:bg-slate-800/60 rounded-r-xl italic text-slate-800 dark:text-slate-200">
          "Nilai akhir mata kuliah merupakan gabungan dari nilai tutorial atau tugas mata kuliah dengan nilai ujian akhir semester, dengan ketentuan nilai ujian akhir semester mahasiswa mencapai skor minimal 30 persen dari skor maksimal."
        </blockquote>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-4">
          Empat Modus Tutorial dan Rumus Perhitungannya
        </h2>
        <p>
          Sebelum melakukan perhitungan, Anda wajib mengetahui jenis modus bantuan belajar yang Anda ikuti pada semester berjalan. Terdapat 4 modus utama:
        </p>

        <div className="space-y-4 not-prose my-6">
          {/* Card 1 */}
          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                1. Skema Tutorial Online (Tuton) - Bobot 70% UAS : 30% Tuton
              </h3>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
                Paling Populer
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Tuton diselenggarakan melalui portal e-Learning UT selama 8 sesi pertemuan daring. Komposisi nilai Tuton terdiri dari kehadiran/akses (20%), diskusi mingguan (30%), dan 3 buah tugas wajib pada inisiasi 3, 5, dan 7 (50%).
            </p>
            <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 font-mono text-xs sm:text-sm text-blue-700 dark:text-blue-300 font-bold">
              Nilai Akhir (NA) = (0.70 × Nilai UAS) + (0.30 × Nilai Tuton)
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                2. Skema Tutorial Tatap Muka / Webinar (TTM / Tuweb) - Bobot 50% UAS : 50% Tuweb
              </h3>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300">
                Bobot Tinggi
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Modus ini dilaksanakan melalui pertemuan tatap muka di UPBJJ atau webinar Zoom resmi UT sebanyak 8 kali pertemuan. Memberikan kontribusi seimbang 50% dengan UAS, sehingga mahasiswa yang aktif di Tuweb memiliki perlindungan nilai yang sangat kokoh.
            </p>
            <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 font-mono text-xs sm:text-sm text-teal-700 dark:text-teal-300 font-bold">
              Nilai Akhir (NA) = (0.50 × Nilai UAS) + (0.50 × Nilai Tuweb)
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                3. Skema Tugas Mata Kuliah (TMK) - Bobot 80% UAS : 20% TMK
              </h3>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300">
                Opsi Alternatif
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Skema TMK diperuntukkan bagi mahasiswa yang tidak menyetujui formulir kesediaan Tuton atau tidak sempat login aktivasi. Terdiri dari pengerjaan 3 tugas mandiri via laman tmk.ut.ac.id. Porsi nilai UAS sangat dominan yakni 80%.
            </p>
            <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 font-mono text-xs sm:text-sm text-amber-700 dark:text-amber-300 font-bold">
              Nilai Akhir (NA) = (0.80 × Nilai UAS) + (0.20 × Nilai TMK)
            </div>
          </div>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-4">
          Contoh Kasus Riil Simulasi Perhitungan
        </h2>
        <p>
          Mari kita tinjau contoh mahasiswa bernama Rian yang menempuh mata kuliah <em>Pengantar Ilmu Ekonomi</em> dengan skema Tuton:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Nilai Akumulasi Tuton (Diskusi + 3 Tugas) = <strong>88</strong></li>
          <li>Nilai Ujian Akhir Semester (UAS) = <strong>74</strong></li>
        </ul>
        <p>
          Langkah perhitungannya adalah:
        </p>
        <ol className="list-decimal pl-5 space-y-2">
          <li><strong>Pemeriksaan Syarat 30:</strong> Nilai UAS Rian (74) lebih besar atau sama dengan 30. Syarat lolos terpenuhi, Tuton berhak dihitung!</li>
          <li><strong>Hitung Kontribusi UAS:</strong> 70% × 74 = 51,80 poin.</li>
          <li><strong>Hitung Kontribusi Tuton:</strong> 30% × 88 = 26,40 poin.</li>
          <li><strong>Jumlahkan Nilai Akhir:</strong> 51,80 + 26,40 = <strong>78,20</strong>.</li>
          <li><strong>Konversi Huruf Mutu:</strong> Berdasarkan tabel standar UT, skor 78,20 berada pada interval 75,00 - 79,99 yang setara dengan <strong>Huruf Mutu A- (Angka Mutu 3.50)</strong>. Status: <strong>LULUS</strong>.</li>
        </ol>

        <div className="p-5 my-6 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 space-y-2 not-prose">
          <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-bold text-sm">
            <AlertTriangle className="w-5 h-5" />
            <span>Peringatan Penting: Kasus Nilai UAS di Bawah 30</span>
          </div>
          <p className="text-xs sm:text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
            Seandainya Rian memperoleh nilai Tuton 100 sempurna, namun saat ujian UAS ia hanya mendapatkan nilai 28 (karena sakit atau kurang belajar), maka seluruh nilai Tuton 100 tersebut <strong>otomatis gugur</strong>. Nilai akhir Rian tetap 28, dan huruf mutu yang tercetak di transkrip otomatis menjadi <strong>E (Gagal)</strong>.
          </p>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-4">
          Cara Memeriksa Nilai di Portal MyUT
        </h2>
        <p>
          Setelah masa penilaian berakhir, Anda dapat memeriksa keabsahan nilai resmi dengan langkah-langkah berikut:
        </p>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Buka situs web resmi <a href="https://myut.ut.ac.id" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline font-semibold">myut.ut.ac.id</a>.</li>
          <li>Masuk menggunakan akun SSO mahasiswa (NIM dan kata sandi Anda).</li>
          <li>Buka menu <strong>Tugas &amp; Ujian</strong> lalu pilih submenu <strong>Daftar Nilai Perkuliahan (DNP)</strong>.</li>
          <li>Pilih masa registrasi semester yang ingin dicek (misalnya masa 2026.1 atau 2026.2).</li>
          <li>Sistem akan menampilkan tabel rincian kode mata kuliah, nama mata kuliah, SKS, nilai huruf mutu, dan angka kelulusan.</li>
        </ol>

        <div className="p-6 my-8 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center space-y-4 not-prose">
          <h3 className="text-xl font-bold">Coba Hitung Nilai Anda Sendiri Sekarang</h3>
          <p className="text-sm text-blue-100 max-w-xl mx-auto">
            Gunakan kalkulator interaktif NilaiUT untuk mensimulasikan nilai akhir Anda secara langsung dan hitung target skor minimal UAS Anda.
          </p>
          <Link
            href="/#kalkulator-nilai"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-blue-700 font-bold text-sm hover:bg-blue-50 transition-colors shadow-lg"
          >
            <Calculator className="w-4 h-4" />
            <span>Buka Kalkulator Nilai UT</span>
          </Link>
        </div>
      </article>

      {/* Guide FAQs */}
      <section className="pt-8 border-t border-slate-200 dark:border-slate-800">
        <FaqAccordion
          items={GUIDE_FAQS}
          title="FAQ Seputar Penilaian Nilai Akhir UT"
          subtitle="Pertanyaan yang paling sering diajukan mahasiswa mengenai sistem penilaian"
        />
      </section>
    </div>
  );
}
