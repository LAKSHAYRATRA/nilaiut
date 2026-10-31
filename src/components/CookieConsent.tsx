'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Shield } from 'lucide-react';

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('nilaiut-cookie-consent');
      if (!consent) {
        const timer = setTimeout(() => setShow(true), 1000);
        return () => clearTimeout(timer);
      }
    } catch {
      // Ignore
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
      className="fixed bottom-0 inset-x-0 z-50 p-4 bg-white text-[#334155] border-t border-slate-200 shadow-xl"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <Shield className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
          <p className="text-xs text-[#334155] leading-relaxed max-w-3xl">
            Situs ini menggunakan cookie untuk mengingat preferensi tampilan Anda dan mendukung penayangan iklan yang relevan melalui Google AdSense. Kami tidak pernah menyimpan data nilai atau identitas akademik Anda. Rincian selengkapnya dapat dibaca di{' '}
            <Link href="/kebijakan-privasi" className="text-[#0F172A] hover:underline font-semibold">
              Kebijakan Privasi
            </Link>.
          </p>
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto shrink-0">
          <button
            type="button"
            onClick={handleDecline}
            className="flex-1 md:flex-none px-3.5 py-1.5 rounded-lg text-xs text-[#475569] hover:text-[#0F172A] border border-slate-300 bg-white hover:bg-slate-50 transition-colors"
          >
            Hanya Esensial
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="flex-1 md:flex-none px-4 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#0F172A] hover:bg-slate-800 transition-colors shadow-sm"
          >
            Setujui
          </button>
        </div>
      </div>
    </aside>
  );
}
