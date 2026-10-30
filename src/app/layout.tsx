import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  metadataBase: new URL('https://nilaiut.com'),
  title: 'NilaiUT - Kalkulator Nilai & IPK Universitas Terbuka Terakurat',
  description: 'Kalkulator Nilai Akhir UT dan IPK 100% akurat sesuai Peraturan Rektor No. 16/2017. Lengkap dengan deteksi aturan minimal UAS 30, Tuton 70:30, TMK 80:20, Tuweb 50:50, dan Target Solver.',
  keywords: [
    'kalkulator nilai ut',
    'cara hitung nilai ut',
    'kalkulator ipk ut',
    'nilai akhir universitas terbuka',
    'aturan minimal uas 30 ut',
    'bobot tuton ut',
    'bobot tmk ut',
    'predikat kelulusan ut',
    'hitung ipk ut online',
    'uasut'
  ],
  authors: [{ name: 'Tim NilaiUT' }],
  creator: 'NilaiUT.com',
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
    title: 'NilaiUT - Kalkulator Nilai & IPK Universitas Terbuka',
    description: 'Hitung nilai akhir Tuton, TMK, Tuweb & IPK semester Anda dengan formula resmi Universitas Terbuka. Lengkap dengan pencegah nilai E & Target Solver ujian.',
    url: 'https://nilaiut.com',
    siteName: 'NilaiUT',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NilaiUT - Kalkulator Nilai & IPK Universitas Terbuka',
    description: 'Hitung nilai akhir Tuton, TMK, Tuweb & IPK semester Anda dengan formula resmi Universitas Terbuka.',
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
    url: 'https://nilaiut.com',
    description: 'Kalkulator Nilai Akhir dan IPK Universitas Terbuka Online Terlengkap & Terakurat.',
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
    name: 'Kalkulator Nilai UT & Target Solver',
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
        <JsonLd data={websiteSchema} />
        <JsonLd data={softwareSchema} />
        {/* Anti-flicker dark mode script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem('nilaiut-theme');
                var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (theme === 'dark' || (!theme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased selection:bg-blue-600 selection:text-white transition-colors">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
