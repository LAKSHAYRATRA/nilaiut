'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, Cookie, X } from 'lucide-react';

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('nilaiut-cookie-consent');
      if (!consent) {
        // Show after a brief delay
        const timer = setTimeout(() => setShow(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // Ignore if localStorage unavailable
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('nilaiut-cookie-consent', 'accepted');
    } catch {}
    setShow(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem('nilaiut-cookie-consent', 'essential-only');
    } catch {}
    setShow(false);
  };

  if (!show) return null;

  return (
    <aside
      aria-label="Persetujuan Cookie"
      className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6 bg-slate-900/95 text-slate-100 border-t border-slate-800 backdrop-blur-md shadow-2xl transition-all animate-in fade-in slide-in-from-bottom duration-300"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-xl bg-blue-600/20 text-blue-400 shrink-0 mt-0.5 border border-blue-500/30">
            <Cookie className="w-5 h-5" />
          </div>
          <div className="space-y-1 text-xs sm:text-sm">
            <p className="font-semibold text-white">
              Pemberitahuan Cookie &amp; Privasi Pengunjung
            </p>
            <p className="text-slate-300 leading-relaxed max-w-3xl">
              Kami menggunakan cookie dan teknologi serupa untuk mengingat preferensi tema Anda, menganalisis lalu lintas kunjungan, serta mendukung penayangan iklan yang relevan melalui <strong>Google AdSense</strong>. Kami tidak pernah menyimpan data nilai atau identitas akademik Anda. Pelajari rincian selengkapnya di{' '}
              <Link href="/kebijakan-privasi" className="text-blue-400 hover:underline font-semibold">
                Kebijakan Privasi
              </Link>{' '}
              dan{' '}
              <Link href="/syarat-ketentuan" className="text-blue-400 hover:underline font-semibold">
                Syarat &amp; Ketentuan
              </Link>.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto shrink-0 pt-2 md:pt-0">
          <button
            type="button"
            onClick={handleDecline}
            className="flex-1 md:flex-none px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700"
          >
            Hanya Esensial
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="flex-1 md:flex-none px-4 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-md shadow-blue-600/20"
          >
            Setujui Semua
          </button>
        </div>
      </div>
    </aside>
  );
}
