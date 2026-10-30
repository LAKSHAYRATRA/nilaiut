import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import EmbedWidgetGenerator from '@/components/EmbedWidgetGenerator';
import JsonLd from '@/components/JsonLd';
import { ArrowLeft, Code2, Sparkles, ExternalLink, Globe, CheckCircle2, Share2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pasang Widget Kalkulator Nilai UT Gratis di Website / Blog Anda - NilaiUT',
  description: 'Panduan dan generator kode embed iframe widget Kalkulator Nilai UT. Pasang kalkulator nilai interaktif di blog WordPress, Blogspot, atau portal himpunan mahasiswa Anda.',
  alternates: {
    canonical: 'https://nilaiut.com/pasang-widget/',
  },
  keywords: [
    'widget kalkulator nilai ut',
    'embed kalkulator nilai ut',
    'pasang kalkulator nilai ut di blog',
    'script kalkulator nilai universitas terbuka'
  ],
};

export default function PasangWidgetPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Beranda', item: 'https://nilaiut.com/' },
      { '@type': 'ListItem', position: 2, name: 'Pasang Widget', item: 'https://nilaiut.com/pasang-widget/' },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      <JsonLd data={breadcrumbSchema} />

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
          <Code2 className="w-3.5 h-3.5" />
          <span>Pusat Integrasi Webmaster</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
          Pasang Widget Kalkulator Nilai UT di Blog Anda
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Tingkatkan nilai manfaat artikel blog kampus Anda dengan menyematkan kalkulator interaktif resmi NilaiUT. Pembaca dapat langsung menghitung nilai tanpa harus meninggalkan situs Anda.
        </p>
      </header>

      {/* Embed Generator Widget */}
      <section>
        <EmbedWidgetGenerator />
      </section>

      {/* Tutorial How to Embed on Platforms */}
      <section className="prose dark:prose-invert max-w-none space-y-6 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed pt-6">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
          Panduan Langkah Pemasangan di Berbagai Platform
        </h2>

        <div className="space-y-4 not-prose my-6">
          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-2">
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              1. Cara Pasang di WordPress (Block Gutenberg)
            </h3>
            <ol className="list-decimal pl-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1">
              <li>Buka editor postingan WordPress Anda.</li>
              <li>Klik tombol tambah blok (+) lalu cari dan pilih blok <strong>Custom HTML</strong>.</li>
              <li>Tempel (paste) kode embed iframe yang disalin dari generator di atas.</li>
              <li>Klik <em>Preview</em> untuk melihat hasilnya, lalu simpan atau perbarui artikel Anda.</li>
            </ol>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-2">
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              2. Cara Pasang di Blogger / Blogspot
            </h3>
            <ol className="list-decimal pl-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1">
              <li>Buat atau edit postingan di Blogger.</li>
              <li>Ubah mode editor dari <em>Compose view</em> ke <strong>HTML view</strong> (ikon pena di kiri atas).</li>
              <li>Tempel kode iframe di posisi artikel yang Anda inginkan (misalnya di tengah atau akhir pembahasan).</li>
              <li>Kembali ke mode Compose view dan publikasikan postingan.</li>
            </ol>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-2">
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              3. Cara Pasang di Widget Sidebar / Footer
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Buka menu <strong>Appearance &gt; Widgets</strong> pada WordPress Anda, tambahkan blok Custom HTML pada area sidebar, lalu masukkan kode embed. Widget ini akan otomatis menyesuaikan ukuran (responsive 100%).
            </p>
          </div>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-4">
          Ketentuan Lisensi Penggunaan Bebas
        </h2>
        <p>
          Widget NilaiUT disediakan 100% gratis tanpa batasan kuota permintaan (API limits). Kami hanya mensyaratkan untuk tidak menghapus atau mengubah tautan atribusi pengembang yang tercantum di bawah iframe.
        </p>
      </section>
    </div>
  );
}
