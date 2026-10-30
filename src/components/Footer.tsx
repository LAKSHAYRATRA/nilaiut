import React from 'react';
import Link from 'next/link';
import { GraduationCap, ShieldCheck, Heart, ExternalLink, HelpCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 transition-colors">
      {/* Top Disclaimer Banner */}
      <div className="bg-slate-950/70 border-b border-slate-800 py-3.5 px-4 text-center text-xs sm:text-sm text-slate-400">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            <strong className="text-slate-200">Penafian Resmi:</strong> NilaiUT merupakan aplikasi kalkulator independen untuk mahasiswa UT dan <em>bukan</em> bagian resmi dari Universitas Terbuka. Nilai resmi mutlak bersumber dari portal <a href="https://myut.ut.ac.id" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline inline-flex items-center gap-0.5">MyUT (myut.ut.ac.id) <ExternalLink className="w-3 h-3" /></a>.
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Col 1 & 2: Brand Information */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold shadow-md">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">
                Nilai<span className="text-blue-400">UT</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              Kalkulator Nilai Akhir & IPK Universitas Terbuka terlengkap dan terakurat berbasis Peraturan Rektor No. 16/2017. Dirancang 100% di browser tanpa kirim data ke server (privasi aman), ringan, cepat, dan dilengkapi pendeteksi otomatis aturan krusial <strong>UAS Minimal 30</strong>.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1 bg-slate-800/80 px-2.5 py-1 rounded-full border border-slate-700">
                🚀 100% Client-Side Engine
              </span>
              <span className="inline-flex items-center gap-1 bg-slate-800/80 px-2.5 py-1 rounded-full border border-slate-700">
                🔒 Tanpa Simpan Data Pribadi
              </span>
            </div>
          </div>

          {/* Col 3: Tools & Kalkulator */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Fitur &amp; Kalkulator
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/kalkulator-nilai-tuton-ut" className="hover:text-blue-400 transition-colors">
                  Kalkulator Nilai Tuton (70:30)
                </Link>
              </li>
              <li>
                <Link href="/kalkulator-nilai-tmk-ut" className="hover:text-blue-400 transition-colors">
                  Kalkulator Nilai TMK (80:20)
                </Link>
              </li>
              <li>
                <Link href="/kalkulator-nilai-tuweb-ut" className="hover:text-blue-400 transition-colors">
                  Kalkulator Nilai Tuweb (50:50)
                </Link>
              </li>
              <li>
                <Link href="/target-nilai-uas" className="hover:text-blue-400 transition-colors">
                  Target Solver Nilai UAS
                </Link>
              </li>
              <li>
                <Link href="/kalkulator-ipk-ut" className="hover:text-blue-400 transition-colors">
                  Kalkulator IPK &amp; Yudisium
                </Link>
              </li>
              <li>
                <Link href="/#embed-widget" className="hover:text-blue-400 transition-colors">
                  Widget Iframe untuk Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Panduan Akademik UT */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Panduan Akademik
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/panduan/cara-hitung-nilai-akhir-ut" className="hover:text-blue-400 transition-colors">
                  Cara Hitung Nilai Akhir UT
                </Link>
              </li>
              <li>
                <Link href="/panduan/skema-bobot-tuton-tmk-tuweb" className="hover:text-blue-400 transition-colors">
                  Skema Bobot Tuton, TMK &amp; Tuweb
                </Link>
              </li>
              <li>
                <Link href="/panduan/aturan-syarat-minimal-uas-30" className="hover:text-blue-400 transition-colors">
                  Aturan Syarat Minimal UAS 30
                </Link>
              </li>
              <li>
                <Link href="/panduan/cara-menghitung-ipk-dan-predikat-kelulusan-ut" className="hover:text-blue-400 transition-colors">
                  Cara Hitung IPK &amp; Predikat Kelulusan
                </Link>
              </li>
              <li>
                <Link href="/panduan/kalender-akademik-dan-jadwal-uas-ut" className="hover:text-blue-400 transition-colors">
                  Kalender Akademik &amp; Jadwal UAS
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Legal & Kepatuhan */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Bantuan &amp; Legal
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/tentang-kami" className="hover:text-blue-400 transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-blue-400 transition-colors">
                  Kontak &amp; Saran
                </Link>
              </li>
              <li>
                <Link href="/kebijakan-privasi" className="hover:text-blue-400 transition-colors">
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link href="/syarat-ketentuan" className="hover:text-blue-400 transition-colors">
                  Syarat &amp; Ketentuan
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-blue-400 transition-colors">
                  Disclaimer Resmi
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} NilaiUT. Seluruh Hak Cipta Dilindungi. Dibuat dengan <Heart className="w-3.5 h-3.5 inline text-red-500 fill-red-500 mx-0.5" /> untuk mahasiswa Universitas Terbuka seluruh Indonesia.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/kebijakan-privasi" className="hover:underline">Privasi</Link>
            <Link href="/syarat-ketentuan" className="hover:underline">Ketentuan</Link>
            <Link href="/disclaimer" className="hover:underline">Penafian</Link>
            <Link href="/kontak" className="hover:underline">Bantuan</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
