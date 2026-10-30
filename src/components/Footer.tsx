import React from 'react';
import Link from 'next/link';
import { GraduationCap, ShieldCheck, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 transition-colors">
      {/* Top Disclaimer Notice */}
      <div className="bg-slate-950 border-b border-slate-800 py-3 px-4 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center flex-wrap">
          <ShieldCheck className="w-4 h-4 text-slate-400 shrink-0" />
          <span>
            <strong>Penafian Independen:</strong> NilaiUT adalah platform kalkulator akademik independen yang dikembangkan untuk mahasiswa UT dan bukan bagian resmi dari Universitas Terbuka. Seluruh rujukan nilai resmi mutlak bersumber dari portal <a href="https://myut.ut.ac.id" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline inline-flex items-center gap-0.5">MyUT (myut.ut.ac.id) <ExternalLink className="w-3 h-3" /></a>.
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Col 1 & 2: Platform Identity */}
          <div className="lg:col-span-2 space-y-3">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-700 flex items-center justify-center text-white font-bold">
                <GraduationCap className="w-4 h-4" />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                Nilai<span className="text-blue-400">UT</span>
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Kalkulator Nilai Akhir &amp; IPK Universitas Terbuka berbasis Peraturan Rektor No. 16/2017. Dioperasikan sepenuhnya di sisi peramban klien tanpa transmisi data nilai ke server luar.
            </p>
          </div>

          {/* Col 3: Alat Hitung */}
          <div className="space-y-2.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-200 block">
              Alat Hitung
            </span>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <Link href="/kalkulator-nilai-tuton-ut" className="hover:text-white transition-colors">
                  Kalkulator Tuton (70:30)
                </Link>
              </li>
              <li>
                <Link href="/kalkulator-nilai-tmk-ut" className="hover:text-white transition-colors">
                  Kalkulator TMK (80:20)
                </Link>
              </li>
              <li>
                <Link href="/kalkulator-nilai-tuweb-ut" className="hover:text-white transition-colors">
                  Kalkulator Tuweb (50:50)
                </Link>
              </li>
              <li>
                <Link href="/target-nilai-uas" className="hover:text-white transition-colors">
                  Target Solver Nilai UAS
                </Link>
              </li>
              <li>
                <Link href="/kalkulator-ipk-ut" className="hover:text-white transition-colors">
                  Kalkulator IPK Kelulusan
                </Link>
              </li>
              <li>
                <Link href="/pasang-widget" className="hover:text-white transition-colors">
                  Widget Iframe Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Panduan */}
          <div className="space-y-2.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-200 block">
              Panduan Akademik
            </span>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <Link href="/panduan/cara-hitung-nilai-akhir-ut" className="hover:text-white transition-colors">
                  Cara Hitung Nilai Akhir
                </Link>
              </li>
              <li>
                <Link href="/panduan/skema-bobot-tuton-tmk-tuweb" className="hover:text-white transition-colors">
                  Skema Bobot Tutorial
                </Link>
              </li>
              <li>
                <Link href="/panduan/aturan-syarat-minimal-uas-30" className="hover:text-white transition-colors">
                  Aturan Minimal UAS 30
                </Link>
              </li>
              <li>
                <Link href="/panduan/cara-menghitung-ipk-dan-predikat-kelulusan-ut" className="hover:text-white transition-colors">
                  Predikat Cumlaude &amp; IPK
                </Link>
              </li>
              <li>
                <Link href="/panduan/kalender-akademik-dan-jadwal-uas-ut" className="hover:text-white transition-colors">
                  Kalender Akademik &amp; KTPU
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Legal */}
          <div className="space-y-2.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-200 block">
              Informasi Legal
            </span>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <Link href="/tentang-kami" className="hover:text-white transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-white transition-colors">
                  Kontak Pengembang
                </Link>
              </li>
              <li>
                <Link href="/kebijakan-privasi" className="hover:text-white transition-colors">
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link href="/syarat-ketentuan" className="hover:text-white transition-colors">
                  Syarat &amp; Ketentuan
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-white transition-colors">
                  Penafian Resmi
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} NilaiUT. Seluruh hak cipta dilindungi.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/kebijakan-privasi" className="hover:underline">Privasi</Link>
            <Link href="/syarat-ketentuan" className="hover:underline">Ketentuan</Link>
            <Link href="/disclaimer" className="hover:underline">Penafian</Link>
            <Link href="/kontak" className="hover:underline">Kontak</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
