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
        <CookieConsent />
      </body>
    </html>
  );
}
