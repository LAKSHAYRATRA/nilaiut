'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { GraduationCap, Menu, X, ChevronDown } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-lg text-slate-900 dark:text-white tracking-tight">
                  Nilai<span className="text-blue-600 dark:text-blue-400">UT</span>
                </span>
                <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/40">
                  Online
                </span>
              </div>
              <span className="block text-[11px] text-slate-500 dark:text-slate-400 font-normal leading-none mt-0.5">
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
                className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 py-2 transition-colors"
              >
                <span>Kalkulator Nilai</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {toolsDropdownOpen && (
                <div
                  onMouseLeave={() => setToolsDropdownOpen(false)}
                  className="absolute top-full left-0 w-64 p-2 mt-1 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg z-50 space-y-1"
                >
                  <Link
                    href="/kalkulator-nilai-tuton-ut"
                    onClick={() => setToolsDropdownOpen(false)}
                    className="block px-3 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/60 text-xs text-slate-800 dark:text-slate-200 transition-colors"
                  >
                    <span className="font-semibold block text-slate-900 dark:text-white">Tutorial Online (70:30)</span>
                    <span className="text-[11px] text-slate-500">Skema Tuton elearning.ut.ac.id</span>
                  </Link>
                  <Link
                    href="/kalkulator-nilai-tmk-ut"
                    onClick={() => setToolsDropdownOpen(false)}
                    className="block px-3 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/60 text-xs text-slate-800 dark:text-slate-200 transition-colors"
                  >
                    <span className="font-semibold block text-slate-900 dark:text-white">Tugas Mata Kuliah (80:20)</span>
                    <span className="text-[11px] text-slate-500">Skema TMK 3 tugas mandiri</span>
                  </Link>
                  <Link
                    href="/kalkulator-nilai-tuweb-ut"
                    onClick={() => setToolsDropdownOpen(false)}
                    className="block px-3 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/60 text-xs text-slate-800 dark:text-slate-200 transition-colors"
                  >
                    <span className="font-semibold block text-slate-900 dark:text-white">Tuweb / TTM (50:50)</span>
                    <span className="text-[11px] text-slate-500">Tutorial tatap muka &amp; webinar</span>
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/target-nilai-uas"
              className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 py-2 transition-colors"
            >
              Target Solver UAS
            </Link>

            <Link
              href="/kalkulator-ipk-ut"
              className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 py-2 transition-colors"
            >
              Kalkulator IPK
            </Link>

            <Link
              href="/#panduan-akademik"
              className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 py-2 transition-colors"
            >
              Panduan Resmi
            </Link>

            <Link
              href="/pasang-widget"
              className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 py-2 text-xs transition-colors"
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
              className="p-2 md:hidden rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
              aria-label="Menu navigasi"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 space-y-1">
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
