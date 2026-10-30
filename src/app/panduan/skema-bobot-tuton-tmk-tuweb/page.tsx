import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import FaqAccordion, { FaqItem } from '@/components/FaqAccordion';
import { ArrowLeft, Layers, CheckCircle2, AlertCircle, TrendingUp, BookOpen, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Skema Bobot Tuton 70:30, TMK 80:20 & Tuweb 50:50 Universitas Terbuka: Panduan Komparasi Lengkap',
  description: 'Ulasan mendalam perbedaan skema bobot nilai Tuton, TMK, dan Tuweb di Universitas Terbuka. Temukan perbandingan kelebihan, kekurangan, dan strategi meraih IPK Cumlaude.',
  alternates: {
    canonical: 'https://nilaiut.com/panduan/skema-bobot-tuton-tmk-tuweb/',
  },
  openGraph: {
    title: 'Skema Bobot Tuton, TMK & Tuweb Universitas Terbuka: Komparasi Lengkap',
    description: 'Bandingkan skema bobot 70:30, 80:20, dan 50:50 di UT untuk menyusun strategi kelulusan mata kuliah Anda.',
    url: 'https://nilaiut.com/panduan/skema-bobot-tuton-tmk-tuweb/',
    type: 'article',
  },
};

const SCHEME_FAQS: FaqItem[] = [
  {
    question: "Apakah mahasiswa bisa mengikuti Tuton dan TMK secara bersamaan untuk satu mata kuliah?",
    answer: "Tidak bisa. Sistem informasi akademik UT (SIA UT) secara otomatis memilah kepesertaan tutorial. Jika Anda menyetujui formulir kesediaan Tuton dan login ke elearning.ut.ac.id, maka mata kuliah Anda otomatis berstatus peserta Tuton. TMK hanya dialokasikan bagi mahasiswa yang tidak menyetujui Tuton atau tidak melakukan aktivasi hingga batas waktu penutupan."
  },
  {
    question: "Manakah yang lebih menguntungkan untuk mengamankan nilai: Tuton atau Tuweb?",
    answer: "Secara matematis, Tuweb (Tutorial Tatap Muka / Webinar) lebih menguntungkan karena memiliki bobot 50% terhadap nilai akhir (50% UAS : 50% Tuweb). Dengan bobot yang seimbang, nilai keaktifan Tuweb yang tinggi mampu mendongkrak nilai akhir secara signifikan bahkan jika skor UAS Anda berada di kisaran sedang."
  },
  {
    question: "Berapa batas minimal kehadiran agar nilai Tuweb / TTM dapat diproses?",
    answer: "Sesuai panduan akademik UT, mahasiswa wajib menghadiri minimal 5 dari 8 pertemuan Tuweb / TTM (minimal kehadiran 70%). Jika kehadiran di bawah ambang batas tersebut, nilai tutorial tidak akan diterbitkan oleh tutor."
  }
];

export default function SkemaBobotPage() {
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
        name: 'Skema Bobot Tuton TMK Tuweb',
        item: 'https://nilaiut.com/panduan/skema-bobot-tuton-tmk-tuweb/',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: SCHEME_FAQS.map(item => ({
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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 dark:bg-indigo-900/40 text-indigo-800 dark:text-indigo-300">
          <Layers className="w-3.5 h-3.5" />
          <span>Analisis Skema Tutorial UT</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
          Skema Bobot Tuton 70:30, TMK 80:20 &amp; Tuweb 50:50: Komparasi Lengkap
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Temukan perbedaan fundamental antara ketiga modus bantuan belajar di Universitas Terbuka, perbandingan bobot persentase, beban pengerjaan, dan strategi menentukan pilihan tutorial terbaik.
        </p>
        <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 pt-2">
          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> Waktu Baca: 8 Menit</span>
          <span>•</span>
          <span>Panduan Terverifikasi Tahun Akademik 2026</span>
        </div>
      </header>

      <article className="prose dark:prose-invert max-w-none space-y-6 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
        <p>
          Dalam ekosistem Pendidikan Terbuka dan Jarak Jauh (PTJJ), mahasiswa Universitas Terbuka diberikan fleksibilitas untuk memilih jalur bantuan belajar yang sesuai dengan ritme pekerjaan, ketersediaan jaringan internet, dan preferensi gaya belajar masing-masing.
        </p>
        <p>
          Banyak mahasiswa yang masih bingung mengenai mengapa nilai akhir mereka terasa kecil padahal sudah bersusah payah mengerjakan tugas. Kuncinya terletak pada <strong>proporsi bobot penilaian</strong>. Mari kita bedah ketiga skema utama secara mendalam:
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-4">
          1. Tutorial Online (Tuton) - Formula: 70% UAS + 30% Tuton
        </h2>
        <p>
          Tutorial Online (Tuton) merupakan fasilitas bantuan belajar berbasis web Moodle resmi UT yang dapat diakses secara gratis oleh seluruh mahasiswa aktif. Karakteristik utama Tuton meliputi:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li><strong>Durasi:</strong> Berlangsung selama 8 minggu berturut-turut (8 sesi inisiasi).</li>
          <li><strong>Komponen Penilaian:</strong> Nilai kehadiran atau aktivasi setiap inisiasi berbobot 20%, partisipasi aktif dalam forum diskusi mingguan berbobot 30%, dan penyelesaian 3 buah tugas tutorial (Tugas 1 di sesi 3, Tugas 2 di sesi 5, dan Tugas 3 di sesi 7) berbobot 50%.</li>
          <li><strong>Kontribusi ke Nilai Akhir:</strong> Sebesar <strong>30%</strong>, sedangkan porsi Ujian Akhir Semester (UAS) menyumbang <strong>70%</strong>.</li>
        </ul>
        <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 font-mono text-sm">
          <strong>Rumus Nilai Akhir Tuton:</strong> NA = (0.70 × UAS) + (0.30 × Nilai Tuton)
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-4">
          2. Tutorial Tatap Muka / Webinar (TTM / Tuweb) - Formula: 50% UAS + 50% Tuweb
        </h2>
        <p>
          Bagi mahasiswa yang mengambil skema layanan penuh (SIPAS Penuh) atau mahasiswa beasiswa, modus Tuweb menyajikan interaksi langsung secara sinkron dengan tutor dosen melalui aplikasi konferensi video (Zoom/MS Teams) atau tatap muka di sentra belajar.
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li><strong>Durasi Pertemuan:</strong> Tepat 8 pertemuan berdurasi 120 menit per mata kuliah.</li>
          <li><strong>Kontribusi ke Nilai Akhir:</strong> Sangat besar, yakni <strong>50%</strong> bobot Tuweb dan <strong>50%</strong> bobot UAS.</li>
          <li><strong>Kelebihan Utama:</strong> Risiko kegagalan dapat ditekan secara maksimal. Jika mahasiswa berhasil mendapatkan nilai Tuweb 90, maka ia telah mengantongi kontribusi nilai 45 poin sebelum melangkah ke ruang ujian.</li>
        </ul>
        <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 font-mono text-sm">
          <strong>Rumus Nilai Akhir Tuweb:</strong> NA = (0.50 × UAS) + (0.50 × Nilai Tuweb)
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-4">
          3. Tugas Mata Kuliah (TMK) - Formula: 80% UAS + 20% TMK
        </h2>
        <p>
          Tugas Mata Kuliah (TMK) dihadirkan oleh UT sebagai jaring pengaman (safety net) bagi mahasiswa yang tidak sempat mengaktivasi Tuton hingga tanggal batas akhir (closing date).
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li><strong>Mekanisme:</strong> Mahasiswa mengunduh soal tugas 1, 2, dan 3 pada laman tmk.ut.ac.id, kemudian mengunggah lembar jawaban tugas (BJT) dalam rentang waktu yang ditentukan.</li>
          <li><strong>Kontribusi ke Nilai Akhir:</strong> Hanya <strong>20%</strong>, sementara bobot UAS melonjak hingga <strong>80%</strong>.</li>
          <li><strong>Kelemahan:</strong> Sangat berisiko bagi mahasiswa yang kesulitan mengerjakan ujian tertulis, karena nilai ujian menentukan 4/5 dari total nilai akhir kelulusan.</li>
        </ul>
        <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 font-mono text-sm">
          <strong>Rumus Nilai Akhir TMK:</strong> NA = (0.80 × UAS) + (0.20 × Nilai TMK)
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-6">
          Tabel Matriks Perbandingan Ketiga Skema Penilaian
        </h2>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold">
              <tr>
                <th className="p-3.5 border-b border-slate-200 dark:border-slate-700">Aspek Evaluasi</th>
                <th className="p-3.5 border-b border-slate-200 dark:border-slate-700">Tuton (Online)</th>
                <th className="p-3.5 border-b border-slate-200 dark:border-slate-700">Tuweb (Webinar)</th>
                <th className="p-3.5 border-b border-slate-200 dark:border-slate-700">TMK (Mandiri)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
              <tr>
                <td className="p-3.5 font-bold">Bobot UAS</td>
                <td className="p-3.5 font-semibold text-blue-600 dark:text-blue-400">70%</td>
                <td className="p-3.5 font-semibold text-teal-600 dark:text-teal-400">50%</td>
                <td className="p-3.5 font-semibold text-amber-600 dark:text-amber-400">80%</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold">Bobot Aktivitas</td>
                <td className="p-3.5 font-semibold text-blue-600 dark:text-blue-400">30%</td>
                <td className="p-3.5 font-semibold text-teal-600 dark:text-teal-400">50%</td>
                <td className="p-3.5 font-semibold text-amber-600 dark:text-amber-400">20%</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold">Interaktivitas</td>
                <td className="p-3.5">Asinkron (Forum Diskusi)</td>
                <td className="p-3.5">Sinkron (Live Video)</td>
                <td className="p-3.5">Nol (Unggah Berkas)</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold">Jumlah Tugas</td>
                <td className="p-3.5">8 Diskusi + 3 Tugas</td>
                <td className="p-3.5">3 Tugas Resmi + Partisipasi</td>
                <td className="p-3.5">3 Tugas Saja</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold">Toleransi Nilai UAS</td>
                <td className="p-3.5">Sedang (Butuh UAS ≥ 70 utk A)</td>
                <td className="p-3.5">Tinggi (UAS 60 bisa A jika Tuweb 100)</td>
                <td className="p-3.5">Sangat Ketat (UAS harus tinggi)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-4">
          Strategi Memilih Skema untuk Meraih IPK Tinggi
        </h2>
        <p>
          Berdasarkan pola data kelulusan mahasiswa UT selama beberapa tahun terakhir, berikut rekomendasi strategis:
        </p>
        <ol className="list-decimal pl-5 space-y-2">
          <li><strong>Untuk Pekerja Sibuk:</strong> Prioritaskan <strong>Tuton</strong>. Anda bebas masuk ke forum diskusi kapan saja (malam hari atau akhir pekan), asalkan tidak melewati batas hari Minggu pukul 15.00 WIB setiap sesinya.</li>
          <li><strong>Untuk Mata Kuliah Berhitung &amp; Kuantitatif Rumit:</strong> Sangat disarankan mengambil <strong>Tuweb / TTM</strong> jika memungkinkan. Interaksi tatap muka langsung memudahkan Anda menanyakan rumus yang sulit, ditambah bantalan bobot 50% yang sangat meringankan beban ujian.</li>
          <li><strong>Hindari Mengandalkan TMK:</strong> Kecuali dalam keadaan darurat karena lupa mengisi kesediaan Tuton, sebisa mungkin hindari skema TMK karena bobot ujian 80% sangat rentan membuat nilai akhir anjlok jika Anda mendapatkan paket soal ujian yang sulit.</li>
        </ol>

        <div className="p-6 my-8 rounded-2xl bg-slate-900 text-white text-center space-y-4 not-prose border border-slate-800">
          <h3 className="text-xl font-bold">Simulasikan Perbedaan Ketiga Skema</h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Coba masukkan nilai yang sama pada kalkulator NilaiUT dengan memilih tab Tuton, Tuweb, atau TMK untuk melihat langsung dampak perbedaan bobot terhadap huruf mutu akhir Anda.
          </p>
          <Link
            href="/#kalkulator-nilai"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30"
          >
            <span>Uji Coba di Kalkulator Nilai UT</span>
          </Link>
        </div>
      </article>

      <section className="pt-8 border-t border-slate-200 dark:border-slate-800">
        <FaqAccordion
          items={SCHEME_FAQS}
          title="FAQ Skema Bobot Pembelajaran UT"
          subtitle="Pertanyaan teknis seputar pemilihan dan aturan modus tutorial"
        />
      </section>
    </div>
  );
}
