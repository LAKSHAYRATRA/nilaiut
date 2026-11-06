import React from 'react';
import Link from 'next/link';
import { GraduationCap, ShieldCheck, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-[#64748B] border-t border-slate-200 transition-colors">
      {/* Top Disclaimer Notice */}
      <div className="bg-slate-50 border-b border-slate-200 py-3 px-4 text-xs text-[#64748B]">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center flex-wrap">
          <ShieldCheck className="w-4 h-4 text-slate-500 shrink-0" />
          <span>
            <strong className="text-[#0F172A]">Penafian Independen:</strong> NilaiUT adalah platform kalkulator akademik independen untuk mahasiswa UT dan bukan bagian resmi dari Universitas Terbuka. Rujukan nilai resmi mutlak bersumber dari portal <a href="https://myut.ut.ac.id" target="_blank" rel="noopener noreferrer" className="text-[#0F172A] hover:underline inline-flex items-center gap-0.5 font-semibold">MyUT (myut.ut.ac.id) <ExternalLink className="w-3 h-3" /></a>.
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Col 1 & 2: Platform Identity */}
          <div className="lg:col-span-2 space-y-3">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#0F172A] flex items-center justify-center text-white font-bold shadow-sm">
                <GraduationCap className="w-4 h-4 text-white" />
              </div>
              <span className="font-heading font-bold text-xl text-[#0F172A] tracking-tight">
                NilaiUT
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed max-w-sm">
              Kalkulator Nilai Akhir &amp; IPK Universitas Terbuka berbasis Peraturan Rektor No. 16/2017. Dioperasikan 100% di sisi peramban klien tanpa transmisi data nilai ke server luar.
            </p>
          </div>

          {/* Col 3: Alat Hitung */}
          <div className="space-y-2.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0F172A] block">
              Alat Hitung Nilai UT
            </span>
            <ul className="space-y-1.5 text-xs text-[#64748B]">
              <li>
                <Link href="/kalkulator-nilai-tuton-ut/" className="hover:text-[#0F172A] hover:underline transition-colors">
                  Kalkulator Tuton (70:30)
                </Link>
              </li>
              <li>
                <Link href="/kalkulator-nilai-tmk-ut/" className="hover:text-[#0F172A] hover:underline transition-colors">
                  Kalkulator TMK (80:20)
                </Link>
              </li>
              <li>
                <Link href="/kalkulator-nilai-tuweb-ut/" className="hover:text-[#0F172A] hover:underline transition-colors">
                  Kalkulator Tuweb (50:50)
                </Link>
              </li>
              <li>
                <Link href="/target-nilai-uas/" className="hover:text-[#0F172A] hover:underline transition-colors">
                  Target Solver Nilai UAS
                </Link>
              </li>
              <li>
                <Link href="/kalkulator-ipk-ut/" className="hover:text-[#0F172A] hover:underline transition-colors">
                  Kalkulator IPK Kelulusan
                </Link>
              </li>
              <li>
                <Link href="/pasang-widget/" className="hover:text-[#0F172A] hover:underline transition-colors">
                  Widget Iframe Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Panduan */}
          <div className="space-y-2.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0F172A] block">
              Panduan Akademik
            </span>
            <ul className="space-y-1.5 text-xs text-[#64748B]">
              <li>
                <Link href="/panduan/cara-hitung-nilai-akhir-ut/" className="hover:text-[#0F172A] hover:underline transition-colors">
                  Cara Hitung Nilai Akhir
                </Link>
              </li>
              <li>
                <Link href="/panduan/skema-bobot-tuton-tmk-tuweb/" className="hover:text-[#0F172A] hover:underline transition-colors">
                  Skema Bobot Tutorial
                </Link>
              </li>
              <li>
                <Link href="/panduan/aturan-syarat-minimal-uas-30/" className="hover:text-[#0F172A] hover:underline transition-colors">
                  Aturan Minimal UAS 30
                </Link>
              </li>
              <li>
                <Link href="/panduan/cara-menghitung-ipk-dan-predikat-kelulusan-ut/" className="hover:text-[#0F172A] hover:underline transition-colors">
                  Predikat Cumlaude &amp; IPK
                </Link>
              </li>
              <li>
                <Link href="/panduan/kalender-akademik-dan-jadwal-uas-ut/" className="hover:text-[#0F172A] hover:underline transition-colors">
                  Kalender Akademik &amp; KTPU
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Legal & Trust */}
          <div className="space-y-2.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0F172A] block">
              Informasi &amp; Legal
            </span>
            <ul className="space-y-1.5 text-xs text-[#64748B]">
              <li>
                <Link href="/tentang-kami/" aria-label="About Us" className="hover:text-[#0F172A] hover:underline transition-colors">
                  Tentang Kami (About Us)
                </Link>
              </li>
              <li>
                <Link href="/kontak/" aria-label="Contact Us" className="hover:text-[#0F172A] hover:underline transition-colors">
                  Kontak (Contact Us)
                </Link>
              </li>
              <li>
                <Link href="/kebijakan-privasi/" aria-label="Privacy Policy" className="hover:text-[#0F172A] hover:underline transition-colors">
                  Kebijakan Privasi (Privacy Policy)
                </Link>
              </li>
              <li>
                <Link href="/syarat-ketentuan/" aria-label="Terms of Service" className="hover:text-[#0F172A] hover:underline transition-colors">
                  Syarat &amp; Ketentuan (Terms)
                </Link>
              </li>
              <li>
                <Link href="/disclaimer/" aria-label="Disclaimer" className="hover:text-[#0F172A] hover:underline transition-colors">
                  Penafian Resmi (Disclaimer)
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#64748B]">
          <p>
            &copy; {new Date().getFullYear()} NilaiUT.com &bull; Rujukan Resmi Peraturan Rektor UT No. 16/2017.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/tentang-kami/" aria-label="About Us" className="hover:text-[#0F172A] hover:underline transition-colors">About Us</Link>
            <Link href="/kontak/" aria-label="Contact Us" className="hover:text-[#0F172A] hover:underline transition-colors">Contact</Link>
            <Link href="/kebijakan-privasi/" aria-label="Privacy Policy" className="hover:text-[#0F172A] hover:underline transition-colors">Privacy Policy</Link>
            <Link href="/syarat-ketentuan/" aria-label="Terms of Service" className="hover:text-[#0F172A] hover:underline transition-colors">Terms of Service</Link>
            <Link href="/disclaimer/" aria-label="Disclaimer" className="hover:text-[#0F172A] hover:underline transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
