import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import EmbedWidgetGenerator from '@/components/EmbedWidgetGenerator';
import JsonLd from '@/components/JsonLd';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pasang Widget Kalkulator Nilai UT di Website atau Blog Anda - NilaiUT',
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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      <JsonLd data={breadcrumbSchema} />

      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#002D72] hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Kembali ke Beranda</span>
        </Link>
      </div>

      <header className="space-y-2 border-b border-slate-200 pb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-[#002D72]">
          Integrasi Webmaster &amp; Blogger
        </span>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight">
          Pasang Widget Kalkulator Nilai UT di Blog Anda
        </h1>
        <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
          Sematkan kalkulator interaktif NilaiUT pada situs web, portal himpunan, atau artikel blog Anda agar pembaca dapat melakukan simulasi nilai secara langsung.
        </p>
      </header>

      {/* Embed Generator Widget */}
      <section>
        <EmbedWidgetGenerator />
      </section>

      {/* Tutorial How to Embed on Platforms */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-sm text-sm sm:text-base text-[#475569] leading-relaxed">
        <h2 className="text-lg sm:text-xl font-bold text-[#0F172A]">
          Petunjuk Pemasangan di Berbagai Platform CMS
        </h2>

        <div className="space-y-3 not-prose my-4">
          <div className="p-4 rounded-xl border border-slate-200 bg-[#F4F6F9] space-y-1.5">
            <h3 className="font-bold text-[#0F172A] text-sm">
              1. Pemasangan di WordPress (Gutenberg Block)
            </h3>
            <ol className="list-decimal pl-5 text-xs text-[#475569] space-y-1">
              <li>Buka editor postingan WordPress Anda.</li>
              <li>Tambahkan blok baru lalu cari dan pilih <strong>Custom HTML</strong>.</li>
              <li>Tempel (paste) kode embed iframe yang disalin dari generator di atas.</li>
              <li>Klik Pratinjau (Preview) untuk memeriksa tampilan, lalu perbarui artikel Anda.</li>
            </ol>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-[#F4F6F9] space-y-1.5">
            <h3 className="font-bold text-[#0F172A] text-sm">
              2. Pemasangan di Blogger / Blogspot
            </h3>
            <ol className="list-decimal pl-5 text-xs text-[#475569] space-y-1">
              <li>Buka postingan artikel di Blogger.</li>
              <li>Ubah mode editor dari <em>Tampilan Menulis (Compose view)</em> ke <strong>Tampilan HTML (HTML view)</strong>.</li>
              <li>Tempel kode iframe pada posisi paragraf yang Anda inginkan.</li>
              <li>Kembali ke mode Tampilan Menulis dan simpan perubahan.</li>
            </ol>
          </div>
        </div>

        <h2 className="text-lg sm:text-xl font-bold text-[#0F172A] pt-2">
          Ketentuan Lisensi
        </h2>
        <p>
          Widget NilaiUT disediakan gratis tanpa batasan kuota permintaan. Kami mensyaratkan untuk tidak menghapus atau memanipulasi tautan atribusi pengembang yang tercantum di bawah iframe.
        </p>
      </section>
    </div>
  );
}
