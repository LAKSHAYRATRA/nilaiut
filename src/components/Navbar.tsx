'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { GraduationCap, Menu, X, ChevronDown } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#111A29]/95 backdrop-blur-md transition-colors shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-[#002D72] flex items-center justify-center text-[#FFC72C] shadow-sm transition-transform group-hover:scale-105">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-lg text-[#0F172A] dark:text-white tracking-tight">
                  Nilai<span className="text-[#002D72] dark:text-[#3B82F6]">UT</span>
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[#FFC72C] text-[#002D72]">
                  Resmi UT
                </span>
              </div>
              <span className="block text-[11px] text-[#475569] dark:text-slate-400 font-normal leading-none mt-0.5">
                Kalkulator Nilai &amp; IPK Universitas Terbuka
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
                className="text-[#0F172A] dark:text-slate-200 hover:text-[#002D72] dark:hover:text-[#FFC72C] flex items-center gap-1 py-2 transition-colors font-medium"
              >
                <span>Kalkulator Nilai</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {toolsDropdownOpen && (
                <div
                  onMouseLeave={() => setToolsDropdownOpen(false)}
                  className="absolute top-full left-0 w-64 p-2 mt-1 rounded-xl bg-white dark:bg-[#111A29] border border-slate-200 dark:border-slate-800 shadow-xl z-50 space-y-1"
                >
                  <Link
                    href="/kalkulator-nilai-tuton-ut"
                    onClick={() => setToolsDropdownOpen(false)}
                    className="block px-3 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-xs text-slate-800 dark:text-slate-200 transition-colors"
                  >
                    <span className="font-semibold block text-[#002D72] dark:text-[#FFC72C]">Tutorial Online (70:30)</span>
                    <span className="text-[11px] text-[#475569]">Skema Tuton elearning.ut.ac.id</span>
                  </Link>
                  <Link
                    href="/kalkulator-nilai-tmk-ut"
                    onClick={() => setToolsDropdownOpen(false)}
                    className="block px-3 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-xs text-slate-800 dark:text-slate-200 transition-colors"
                  >
                    <span className="font-semibold block text-[#002D72] dark:text-[#FFC72C]">Tugas Mata Kuliah (80:20)</span>
                    <span className="text-[11px] text-[#475569]">Skema TMK 3 tugas mandiri</span>
                  </Link>
                  <Link
                    href="/kalkulator-nilai-tuweb-ut"
                    onClick={() => setToolsDropdownOpen(false)}
                    className="block px-3 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-xs text-slate-800 dark:text-slate-200 transition-colors"
                  >
                    <span className="font-semibold block text-[#002D72] dark:text-[#FFC72C]">Tuweb / TTM (50:50)</span>
                    <span className="text-[11px] text-[#475569]">Tutorial tatap muka &amp; webinar</span>
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/target-nilai-uas"
              className="text-[#0F172A] dark:text-slate-200 hover:text-[#002D72] dark:hover:text-[#FFC72C] py-2 transition-colors font-medium"
            >
              Target Solver UAS
            </Link>

            <Link
              href="/kalkulator-ipk-ut"
              className="text-[#0F172A] dark:text-slate-200 hover:text-[#002D72] dark:hover:text-[#FFC72C] py-2 transition-colors font-medium"
            >
              Kalkulator IPK
            </Link>

            <Link
              href="/#panduan-akademik"
              className="text-[#0F172A] dark:text-slate-200 hover:text-[#002D72] dark:hover:text-[#FFC72C] py-2 transition-colors font-medium"
            >
              Panduan Resmi
            </Link>

            <Link
              href="/pasang-widget"
              className="text-[#475569] dark:text-slate-400 hover:text-[#002D72] dark:hover:text-[#FFC72C] py-2 text-xs transition-colors"
            >
              Pasang Widget
            </Link>
          </nav>

          {/* Action items */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 md:hidden rounded-lg text-[#0F172A] dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
              aria-label="Menu navigasi"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111A29] px-4 py-3 space-y-1">
          <Link
            href="/kalkulator-nilai-tuton-ut"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-slate-800 dark:text-slate-200 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Kalkulator Tuton (70:30)
          </Link>
          <Link
            href="/kalkulator-nilai-tmk-ut"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-slate-800 dark:text-slate-200 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Kalkulator TMK (80:20)
          </Link>
          <Link
            href="/kalkulator-nilai-tuweb-ut"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-slate-800 dark:text-slate-200 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Kalkulator Tuweb (50:50)
          </Link>
          <Link
            href="/target-nilai-uas"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-slate-800 dark:text-slate-200 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Target Solver Nilai UAS
          </Link>
          <Link
            href="/kalkulator-ipk-ut"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-slate-800 dark:text-slate-200 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Kalkulator IPK &amp; Kelulusan
          </Link>
          <Link
            href="/#panduan-akademik"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-slate-800 dark:text-slate-200 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Panduan Regulasi UT
          </Link>
          <Link
            href="/pasang-widget"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 text-xs hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Pasang Widget di Blog
          </Link>
        </div>
      )}
    </header>
  );
}
