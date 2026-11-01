import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  metadataBase: new URL('https://nilaiut.com'),
  title: {
    default: 'Kalkulator Nilai UT & Kalkulator UT - Hitung Nilai Akhir & IPK Universitas Terbuka',
    template: '%s | NilaiUT - Kalkulator Nilai UT',
  },
  description: 'Kalkulator Nilai UT & Kalkulator UT online terlengkap & 100% akurat sesuai Peraturan Rektor No. 16/2017. Hitung nilai akhir Tuton 70:30, TMK 80:20, Tuweb 50:50, Target Solver UAS, dan IPK semester dengan deteksi syarat minimal UAS 30.',
  keywords: [
    'kalkulator nilai ut',
    'kalkulator ut',
    'cara hitung nilai ut',
    'kalkulator ipk ut',
    'hitung nilai ut',
    'nilai akhir universitas terbuka',
    'kalkulator uas ut',
    'bobot tuton ut',
    'bobot tmk ut',
    'bobot tuweb ut',
    'aturan minimal uas 30 ut',
    'simulasi nilai ut',
    'predikat kelulusan ut',
    'hitung ipk ut online',
    'cek nilai ut',
    'uas ut',
    'nilaiut'
  ],
  authors: [{ name: 'Tim NilaiUT' }],
  creator: 'NilaiUT.com',
  publisher: 'NilaiUT',
  applicationName: 'Kalkulator Nilai UT',
  category: 'Education, Productivity',
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  alternates: {
    canonical: 'https://nilaiut.com/',
  },
  openGraph: {
    title: 'Kalkulator Nilai UT & Kalkulator UT - Hitung Nilai Akhir & IPK Resmi',
    description: 'Kalkulator Nilai UT & Kalkulator UT online terlengkap. Hitung nilai akhir Tuton, TMK, Tuweb & IPK semester Anda dengan formula resmi Universitas Terbuka.',
    url: 'https://nilaiut.com',
    siteName: 'NilaiUT - Kalkulator Nilai UT',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kalkulator Nilai UT & Kalkulator UT - Hitung Nilai Akhir & IPK Resmi',
    description: 'Kalkulator Nilai UT & Kalkulator UT online 100% akurat. Hitung nilai akhir Tuton, TMK, Tuweb & IPK semester Anda dengan formula resmi Universitas Terbuka.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Kalkulator Nilai UT',
    alternateName: ['Kalkulator UT', 'NilaiUT', 'Kalkulator Nilai Akhir UT'],
    url: 'https://nilaiut.com',
    description: 'Kalkulator Nilai UT & Kalkulator UT online tercepat & terakurat. Hitung nilai akhir Tuton, TMK, Tuweb, dan IPK mahasiswa Universitas Terbuka.',
    inLanguage: 'id-ID',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://nilaiut.com/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Kalkulator Nilai UT - Kalkulator UT & IPK Online',
    alternateName: 'Kalkulator UT',
    operatingSystem: 'Any (Web Browser)',
    applicationCategory: 'EducationalApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'IDR',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.95',
      ratingCount: '1240',
    },
  };

  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <JsonLd data={websiteSchema} />
        <JsonLd data={softwareSchema} />
        {/* Strictly enforce clean minimal light mode */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                document.documentElement.classList.remove('dark');
                localStorage.removeItem('nilaiut-theme');
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#334155] antialiased selection:bg-slate-200 selection:text-[#0F172A] font-sans">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
