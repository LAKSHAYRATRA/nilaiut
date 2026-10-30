'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { GraduationCap, Calculator, Award, Target, BookOpen, Menu, X, Code2, ChevronDown } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white">
                  Nilai<span className="text-blue-600 dark:text-blue-400">UT</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-1.5 py-0.5 rounded">
                  2026 Ready
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block">
                Kalkulator Nilai & IPK Universitas Terbuka
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-medium">
            {/* Tools Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setToolsDropdownOpen(!toolsDropdownOpen)}
                onMouseEnter={() => setToolsDropdownOpen(true)}
                className="px-3 py-2 rounded-lg text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors flex items-center gap-1"
              >
                <Calculator className="w-4 h-4 text-blue-500" />
                <span>Kalkulator</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {toolsDropdownOpen && (
                <div
                  onMouseLeave={() => setToolsDropdownOpen(false)}
                  className="absolute top-full left-0 w-64 p-2 mt-1 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl z-50 space-y-1"
                >
                  <Link
                    href="/kalkulator-nilai-tuton-ut"
                    onClick={() => setToolsDropdownOpen(false)}
                    className="block p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-800 text-xs text-slate-800 dark:text-slate-200"
                  >
                    <strong className="block font-semibold">Kalkulator Tuton (70:30)</strong>
                    <span className="text-[11px] text-slate-500">Tutorial Online Moodle UT</span>
                  </Link>
                  <Link
                    href="/kalkulator-nilai-tmk-ut"
                    onClick={() => setToolsDropdownOpen(false)}
                    className="block p-2 rounded-lg hover:bg-amber-50 dark:hover:bg-slate-800 text-xs text-slate-800 dark:text-slate-200"
                  >
                    <strong className="block font-semibold">Kalkulator TMK (80:20)</strong>
                    <span className="text-[11px] text-slate-500">Tugas Mata Kuliah Mandiri</span>
                  </Link>
                  <Link
                    href="/kalkulator-nilai-tuweb-ut"
                    onClick={() => setToolsDropdownOpen(false)}
                    className="block p-2 rounded-lg hover:bg-teal-50 dark:hover:bg-slate-800 text-xs text-slate-800 dark:text-slate-200"
                  >
                    <strong className="block font-semibold">Kalkulator Tuweb (50:50)</strong>
                    <span className="text-[11px] text-slate-500">Webinar & Tatap Muka</span>
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/target-nilai-uas"
              className="px-3 py-2 rounded-lg text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors flex items-center gap-1.5"
            >
              <Target className="w-4 h-4 text-amber-500" />
              <span>Target Solver</span>
            </Link>

            <Link
              href="/kalkulator-ipk-ut"
              className="px-3 py-2 rounded-lg text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors flex items-center gap-1.5"
            >
              <Award className="w-4 h-4 text-emerald-500" />
              <span>Kalkulator IPK</span>
            </Link>

            <Link
              href="/#panduan-akademik"
              className="px-3 py-2 rounded-lg text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors flex items-center gap-1.5"
            >
              <BookOpen className="w-4 h-4 text-purple-500" />
              <span>Panduan UT</span>
            </Link>

            <Link
              href="/#embed-widget"
              className="px-3 py-2 rounded-lg text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors flex items-center gap-1.5"
            >
              <Code2 className="w-4 h-4 text-slate-500" />
              <span>Pasang Widget</span>
            </Link>
          </nav>

          {/* Right Action: Theme toggle + CTA */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 md:hidden rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-3 pb-5 space-y-1 shadow-lg">
          <Link
            href="/kalkulator-nilai-tuton-ut"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-800 text-sm font-medium"
          >
            <Calculator className="w-5 h-5 text-blue-500" />
            <span>Kalkulator Tuton (70:30)</span>
          </Link>
          <Link
            href="/kalkulator-nilai-tmk-ut"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-amber-50 dark:hover:bg-slate-800 text-sm font-medium"
          >
            <Calculator className="w-5 h-5 text-amber-500" />
            <span>Kalkulator TMK (80:20)</span>
          </Link>
          <Link
            href="/kalkulator-nilai-tuweb-ut"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-teal-50 dark:hover:bg-slate-800 text-sm font-medium"
          >
            <Calculator className="w-5 h-5 text-teal-500" />
            <span>Kalkulator Tuweb (50:50)</span>
          </Link>
          <Link
            href="/target-nilai-uas"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-amber-50 dark:hover:bg-slate-800 text-sm font-medium"
          >
            <Target className="w-5 h-5 text-amber-500" />
            <span>Target Solver Nilai UAS</span>
          </Link>
          <Link
            href="/kalkulator-ipk-ut"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-slate-800 text-sm font-medium"
          >
            <Award className="w-5 h-5 text-emerald-500" />
            <span>Kalkulator IPK & Predikat Kelulusan</span>
          </Link>
          <Link
            href="/#panduan-akademik"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-purple-50 dark:hover:bg-slate-800 text-sm font-medium"
          >
            <BookOpen className="w-5 h-5 text-purple-500" />
            <span>Panduan & Regulasi Akademik UT</span>
          </Link>
          <Link
            href="/#embed-widget"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium"
          >
            <Code2 className="w-5 h-5 text-slate-500" />
            <span>Pasang Widget di Blog Anda</span>
          </Link>
        </div>
      )}
    </header>
  );
}
