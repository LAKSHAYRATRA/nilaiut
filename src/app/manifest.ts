import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'NilaiUT - Kalkulator Nilai & IPK Universitas Terbuka',
    short_name: 'NilaiUT',
    description: 'Kalkulator Nilai Akhir UT dan IPK 100% akurat sesuai Peraturan Rektor No. 16/2017.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#02569B',
    icons: [
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
