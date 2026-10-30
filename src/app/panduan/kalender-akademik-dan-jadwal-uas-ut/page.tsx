import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import FaqAccordion, { FaqItem } from '@/components/FaqAccordion';
import { ArrowLeft, CalendarCheck, Clock, CheckCircle2, Download, ExternalLink, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kalender Akademik Universitas Terbuka: Jadwal Registrasi, Cetak KTPU & Rilis Nilai MyUT',
  description: 'Jadwal lengkap kegiatan akademik UT: masa registrasi mata kuliah, batas aktivasi Tuton, jadwal cetak Kartu Tanda Peserta Ujian (KTPU), hingga tanggal rilis DNP.',
  alternates: {
    canonical: 'https://nilaiut.com/panduan/kalender-akademik-dan-jadwal-uas-ut/',
  },
  openGraph: {
    title: 'Kalender Akademik Universitas Terbuka: Jadwal Registrasi, KTPU & Nilai MyUT',
    description: 'Panduan jadwal lengkap tahapan semester UT dari masa registrasi hingga pengumuman nilai resmi di MyUT.',
    url: 'https://nilaiut.com/panduan/kalender-akademik-dan-jadwal-uas-ut/',
    type: 'article',
  },
};

const CALENDAR_FAQS: FaqItem[] = [
  {
    question: "Kapan KTPU (Kartu Tanda Peserta Ujian) bisa mulai dicetak?",
    answer: "Kartu Tanda Peserta Ujian (KTPU) biasanya dapat diunduh dan dicetak melalui portal MyUT sekitar 2 hingga 3 minggu sebelum jadwal hari pertama pelaksanaan Ujian Akhir Semester (UAS). Pada KTPU tercantum lokasi ruangan, tanggal, jam sesi ujian, serta modus ujian (UTM, UO, atau THE)."
  },
  {
    question: "Apakah bisa mengajukan sanggahan jika ada nilai Tuton atau UAS yang dirasa tidak sesuai?",
    answer: "Bisa. Universitas Terbuka menyediakan Masa Sanggah Nilai (Grade Appeal Window) yang dibuka selama kurang lebih 2 minggu setelah pengumuman nilai resmi di MyUT. Pengajuan sanggahan dilakukan secara online melalui aplikasi tiket UT di hallo-ut.ut.ac.id atau menghubungi UPBJJ setempat dengan melampirkan bukti screenshot pengerjaan tugas."
  },
  {
    question: "Apa perbedaan semester ganjil (.1) dan semester genap (.2) di UT?",
    answer: "Kode semester UT menggunakan format Tahun.Masa, contohnya 2026.1 untuk masa semester ganjil (Januari - Juni) dan 2026.2 untuk masa semester genap (Juli - Desember). Mahasiswa dapat mendaftar dan meregistrasi mata kuliah baru di kedua masa tersebut tanpa terikat tahun ajaran sekolah konvensional."
  }
];

export default function KalenderAkademikPage() {
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
        name: 'Kalender Akademik dan Jadwal UAS UT',
        item: 'https://nilaiut.com/panduan/kalender-akademik-dan-jadwal-uas-ut/',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: CALENDAR_FAQS.map(item => ({
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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-300">
          <CalendarCheck className="w-3.5 h-3.5" />
          <span>Agenda &amp; Timeline Perkuliahan</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
          Kalender Akademik Universitas Terbuka: Siklus Semester, KTPU &amp; Pengumuman Nilai
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Panduan kronologis alur semester mahasiswa UT dari pendaftaran mata kuliah, batas akhir aktivasi tutorial, cetak kartu ujian, hingga hari pengumuman hasil ujian di portal MyUT.
        </p>
        <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 pt-2">
          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> Waktu Baca: 7 Menit</span>
          <span>•</span>
          <span>Panduan Lengkap Siklus Mahasiswa UT</span>
        </div>
      </header>

      <article className="prose dark:prose-invert max-w-none space-y-6 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
        <p>
          Bagi mahasiswa pendidikan jarak jauh, disiplin memantau linimasa (timeline) kalender akademik merupakan kunci utama kelancaran studi. Di Universitas Terbuka, kelalaian melewati satu batas tanggal—seperti tanggal aktivasi Tuton atau batas akhir pembayaran SPP/LIP—dapat berakibat mata kuliah Anda tidak dapat diikuti atau tergeser ke skema tugas mandiri (TMK).
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-4">
          Siklus Kronologis Satu Semester di Universitas Terbuka
        </h2>
        <p>
          Setiap semester di UT berlangsung selama rentang waktu 6 bulan yang terbagi menjadi 5 fase krusial:
        </p>

        <div className="space-y-4 not-prose my-6">
          {/* Phase 1 */}
          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Fase 1: Bulan ke-1 s/d Bulan ke-2
              </span>
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300">
                Registrasi
              </span>
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              Pendaftaran Mata Kuliah &amp; Pembayaran Billing (LIP)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Mahasiswa melakukan registrasi mata kuliah melalui portal MyUT (baik skema SIPAS paket maupun Non-SIPAS bebas per SKS), mencetak Lembar Informasi Pembayaran (LIP), dan melunasi biaya SPP di bank mitra (BRI, Mandiri, BTN, BSI, atau minimarket Alfamart/Indomaret).
            </p>
          </div>

          {/* Phase 2 */}
          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                Fase 2: Bulan ke-2 s/d Bulan ke-3
              </span>
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300">
                Aktivasi
              </span>
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              Aktivasi Akun e-Learning &amp; Form Kesediaan Tuton
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Mahasiswa wajib login ke elearning.ut.ac.id, melakukan aktivasi atau konfirmasi akun, lalu mengklik persetujuan formulir kesediaan mengikuti Tuton. Jika langkah ini terlewat sebelum batas penutupan, sistem otomatis mengalihkan Anda ke skema Tugas Mata Kuliah (TMK).
            </p>
          </div>

          {/* Phase 3 */}
          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                Fase 3: Bulan ke-3 s/d Bulan ke-5
              </span>
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900/40 text-indigo-800 dark:text-indigo-300">
                Pembelajaran
              </span>
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              Pelaksanaan 8 Sesi Tutorial (Tuton / Tuweb / TMK)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Pelaksanaan bimbingan belajar: diskusi mingguan pada sesi 1-8 dan 3 buah tugas tutorial wajib pada sesi 3, sesi 5, dan sesi 7. Setiap tugas memiliki rentang pengerjaan 2 minggu.
            </p>
          </div>

          {/* Phase 4 */}
          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                Fase 4: Bulan ke-5 s/d Bulan ke-6
              </span>
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-300">
                Ujian (UAS)
              </span>
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              Cetak KTPU &amp; Pelaksanaan Ujian Akhir Semester
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Mahasiswa mencetak KTPU di MyUT untuk mengetahui jadwal dan lokasi ujian. Pelaksanaan UAS dibagi sesuai modus: Ujian Tatap Muka (UTM), Ujian Online (UO), Ujian Online Matakuliah (UOMK), atau Take Home Exam (THE) untuk mata kuliah tertentu.
            </p>
          </div>

          {/* Phase 5 */}
          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Fase 5: Akhir Bulan ke-6
              </span>
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300">
                Rilis Nilai
              </span>
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              Pengumuman Daftar Nilai Perkuliahan (DNP) &amp; Masa Sanggah
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Nilai resmi diumumkan serentak di laman myut.ut.ac.id. Mahasiswa dapat mengecek huruf mutu, mencetak lembar DNP, dan mengajukan sanggahan jika terdapat kekeliruan administrasi nilai.
            </p>
          </div>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-4">
          Panduan Praktis Mencetak KTPU di MyUT
        </h2>
        <p>
          KTPU adalah dokumen wajib yang harus dibawa ke lokasi ujian bersama kartu identitas resmi (KTM UT atau KTP/SIM):
        </p>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Kunjungi portal resmi <a href="https://myut.ut.ac.id" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline font-semibold">myut.ut.ac.id</a>.</li>
          <li>Masuk dengan kredensial NIM dan kata sandi Anda.</li>
          <li>Arahkan ke navigasi <strong>Tugas &amp; Ujian</strong> &gt; <strong>Cetak KTPU</strong>.</li>
          <li>Pastikan seluruh mata kuliah tercantum dengan tanggal, jam sesi ujian, nomor bangku, dan alamat lokasi sekolah ujian.</li>
          <li>Simpan sebagai file PDF dan cetak menggunakan kertas putih ukuran A4 yang jelas.</li>
        </ol>

        <div className="p-6 my-8 rounded-2xl bg-slate-900 text-white text-center space-y-4 not-prose border border-slate-800">
          <h3 className="text-xl font-bold">Siap Menghadapi Ujian Akhir Semester?</h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Gunakan Target Solver NilaiUT sekarang untuk mengetahui berapa nilai UAS yang wajib Anda dapatkan berdasarkan skor keaktifan tutorial Anda.
          </p>
          <Link
            href="/#target-solver"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm transition-colors shadow-lg shadow-purple-600/30"
          >
            <span>Buka Target Solver Nilai UAS</span>
          </Link>
        </div>
      </article>

      <section className="pt-8 border-t border-slate-200 dark:border-slate-800">
        <FaqAccordion
          items={CALENDAR_FAQS}
          title="FAQ Kalender Akademik & Ujian UT"
          subtitle="Informasi penting mengenai jadwal KTPU, ujian, dan rilis pengumuman nilai"
        />
      </section>
    </div>
  );
}
