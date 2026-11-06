import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  metadataBase: new URL('https://nilaiut.com'),
  title: {
    default: 'Kalkulator Nilai UT & Kalkulator UT - Hitung Nilai & IPK',
    template: '%s | NilaiUT',
  },
  description: 'Kalkulator Nilai UT & Kalkulator UT 100% akurat. Hitung nilai Tuton 70:30, TMK 80:20, Tuweb 50:50, IPK semester & cek syarat batas minimal UAS 30 poin resmi.',
  keywords: [
    'kalkulator nilai ut',
    'kalkulator ut',
    'cara hitung nilai ut',
    'kalkulator ipk ut',
    'nilai akhir ut',
    'uas ut'
  ],
  authors: [{ name: 'Lakshay Ratra', url: 'https://nilaiut.com/tentang-kami/' }],
  creator: 'NilaiUT',
  publisher: 'NilaiUT',
  applicationName: 'NilaiUT',
  category: 'Education, Productivity',
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  alternates: {
    canonical: 'https://nilaiut.com/',
  },
  openGraph: {
    title: 'Kalkulator Nilai UT & Kalkulator UT (100% Akurat)',
    description: 'Hitung nilai akhir Tuton 70:30, TMK 80:20, Tuweb 50:50, IPK semester & cek aturan minimal UAS 30 resmi Universitas Terbuka.',
    url: 'https://nilaiut.com',
    siteName: 'NilaiUT',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kalkulator Nilai UT & Kalkulator UT (100% Akurat)',
    description: 'Hitung nilai akhir Tuton 70:30, TMK 80:20, Tuweb 50:50, IPK semester & cek aturan minimal UAS 30 resmi Universitas Terbuka.',
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
    name: 'NilaiUT',
    alternateName: ['Kalkulator Nilai UT', 'Kalkulator UT'],
    url: 'https://nilaiut.com',
    description: 'Kalkulator Nilai UT & Kalkulator UT online 100% akurat sesuai Peraturan Rektor UT No. 16/2017.',
    inLanguage: 'id-ID',
    datePublished: '2026-01-01T00:00:00+07:00',
    dateModified: '2026-11-06T00:00:00+07:00',
    publishingPrinciples: 'https://nilaiut.com/kebijakan-privasi/',
    termsOfService: 'https://nilaiut.com/syarat-ketentuan/',
    about: {
      '@type': 'AboutPage',
      url: 'https://nilaiut.com/tentang-kami/',
      name: 'Tentang NilaiUT'
    },
    author: {
      '@type': 'Person',
      name: 'Lakshay Ratra',
      jobTitle: 'Educational Software Developer',
      url: 'https://nilaiut.com/tentang-kami/',
      sameAs: [
        'https://github.com/LAKSHAYRATRA'
      ]
    },
    publisher: {
      '@type': 'Organization',
      name: 'NilaiUT',
      url: 'https://nilaiut.com',
      logo: 'https://nilaiut.com/icon.svg',
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'halo@nilaiut.com',
        contactType: 'Customer Support',
        url: 'https://nilaiut.com/kontak/'
      }
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://nilaiut.com/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'NilaiUT - Kalkulator Nilai UT & Kalkulator UT',
    alternateName: 'Kalkulator Nilai UT',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Any (Web Browser)',
    url: 'https://nilaiut.com',
    datePublished: '2026-01-01T00:00:00+07:00',
    dateModified: '2026-11-06T00:00:00+07:00',
    author: {
      '@type': 'Person',
      name: 'Lakshay Ratra',
      url: 'https://nilaiut.com/tentang-kami/'
    },
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
