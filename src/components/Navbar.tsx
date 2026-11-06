'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { GraduationCap, Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-[#0F172A] flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-bold text-lg text-[#0F172A] tracking-tight">
                  NilaiUT
                </span>
                <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                  Kalkulator Mahasiswa UT
                </span>
              </div>
              <span className="block text-[11px] text-[#64748B] font-normal leading-none mt-0.5">
                Portal Evaluasi &amp; Predikat Akademik
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <div className="relative">
              <button
                type="button"
                onClick={() => setToolsDropdownOpen(!toolsDropdownOpen)}
                onMouseEnter={() => setToolsDropdownOpen(true)}
                className="text-[#334155] hover:text-[#0F172A] flex items-center gap-1 py-2 transition-colors font-medium"
              >
                <span>Kalkulator Nilai</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {toolsDropdownOpen && (
                <div
                  onMouseLeave={() => setToolsDropdownOpen(false)}
                  className="absolute top-full left-0 w-64 p-2 mt-1 rounded-xl bg-white border border-slate-200 shadow-xl z-50 space-y-1"
                >
                  <Link
                    href="/kalkulator-nilai-tuton-ut/"
                    onClick={() => setToolsDropdownOpen(false)}
                    className="block px-3 py-2 rounded-lg hover:bg-slate-50 text-xs transition-colors"
                  >
                    <span className="font-semibold block text-[#0F172A]">Tutorial Online (70:30)</span>
                    <span className="text-[11px] text-[#64748B]">Skema Tuton elearning.ut.ac.id</span>
                  </Link>
                  <Link
                    href="/kalkulator-nilai-tmk-ut/"
                    onClick={() => setToolsDropdownOpen(false)}
                    className="block px-3 py-2 rounded-lg hover:bg-slate-50 text-xs transition-colors"
                  >
                    <span className="font-semibold block text-[#0F172A]">Tugas Mata Kuliah (80:20)</span>
                    <span className="text-[11px] text-[#64748B]">Skema TMK 3 tugas mandiri</span>
                  </Link>
                  <Link
                    href="/kalkulator-nilai-tuweb-ut/"
                    onClick={() => setToolsDropdownOpen(false)}
                    className="block px-3 py-2 rounded-lg hover:bg-slate-50 text-xs transition-colors"
                  >
                    <span className="font-semibold block text-[#0F172A]">Tuweb / TTM (50:50)</span>
                    <span className="text-[11px] text-[#64748B]">Tutorial tatap muka &amp; webinar</span>
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/target-nilai-uas/"
              className="text-[#334155] hover:text-[#0F172A] py-2 transition-colors font-medium"
            >
              Target Solver UAS
            </Link>

            <Link
              href="/kalkulator-ipk-ut/"
              className="text-[#334155] hover:text-[#0F172A] py-2 transition-colors font-medium"
            >
              Kalkulator IPK
            </Link>

            <Link
              href="/#panduan-akademik"
              className="text-[#334155] hover:text-[#0F172A] py-2 transition-colors font-medium"
            >
              Panduan
            </Link>

            <Link
              href="/tentang-kami/"
              aria-label="About Us"
              className="text-[#334155] hover:text-[#0F172A] py-2 transition-colors font-medium"
            >
              Tentang Kami
            </Link>

            <Link
              href="/kontak/"
              aria-label="Contact Us"
              className="text-[#334155] hover:text-[#0F172A] py-2 transition-colors font-medium"
            >
              Kontak
            </Link>

            <Link
              href="/pasang-widget/"
              className="text-[#64748B] hover:text-[#0F172A] py-2 text-xs transition-colors"
            >
              Widget
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-[#0F172A] hover:bg-slate-100 border border-slate-200"
              aria-label="Menu navigasi"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-3 space-y-1">
          <Link
            href="/kalkulator-nilai-tuton-ut/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-[#334155] text-sm font-medium hover:bg-slate-50"
          >
            Kalkulator Tuton (70:30)
          </Link>
          <Link
            href="/kalkulator-nilai-tmk-ut/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-[#334155] text-sm font-medium hover:bg-slate-50"
          >
            Kalkulator TMK (80:20)
          </Link>
          <Link
            href="/kalkulator-nilai-tuweb-ut/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-[#334155] text-sm font-medium hover:bg-slate-50"
          >
            Kalkulator Tuweb (50:50)
          </Link>
          <Link
            href="/target-nilai-uas/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-[#334155] text-sm font-medium hover:bg-slate-50"
          >
            Target Solver Nilai UAS
          </Link>
          <Link
            href="/kalkulator-ipk-ut/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-[#334155] text-sm font-medium hover:bg-slate-50"
          >
            Kalkulator IPK &amp; Kelulusan
          </Link>
          <Link
            href="/#panduan-akademik"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-[#334155] text-sm font-medium hover:bg-slate-50"
          >
            Panduan Regulasi UT
          </Link>
          <Link
            href="/tentang-kami/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-[#334155] text-sm font-medium hover:bg-slate-50"
          >
            Tentang Kami (About Us)
          </Link>
          <Link
            href="/kontak/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-[#334155] text-sm font-medium hover:bg-slate-50"
          >
            Kontak (Contact Us)
          </Link>
          <Link
            href="/pasang-widget/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-[#64748B] text-xs hover:bg-slate-50"
          >
            Pasang Widget di Blog
          </Link>
        </div>
      )}
    </header>
  );
}
