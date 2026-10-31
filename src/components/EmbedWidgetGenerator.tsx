'use client';

import React, { useState } from 'react';
import { Code2, Copy, Check } from 'lucide-react';

export default function EmbedWidgetGenerator() {
  const [themeMode, setThemeMode] = useState<'light' | 'auto'>('auto');
  const [copied, setCopied] = useState<boolean>(false);

  const embedSnippet = `<!-- Widget Kalkulator Nilai UT by NilaiUT.com -->
<div style="width: 100%; max-width: 720px; margin: 0 auto; font-family: system-ui, sans-serif;">
  <iframe 
    src="https://nilaiut.com/?embed=true&theme=${themeMode}" 
    width="100%" 
    height="640" 
    style="border: 1px solid #e2e8f0; border-radius: 12px;" 
    title="Kalkulator Nilai UT Online"
    loading="lazy"
  ></iframe>
  <p style="font-size: 11px; color: #64748b; text-align: center; margin-top: 6px;">
    Ditenagai oleh <a href="https://nilaiut.com" target="_blank" rel="noopener" style="color: #02569B; text-decoration: underline; font-weight: 600;">Kalkulator Nilai UT Online</a>
  </p>
</div>`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(embedSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div id="embed-widget" className="bg-white text-[#0F172A] rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div>
          <div className="flex items-center gap-2 text-[#0F172A] text-xs font-semibold uppercase tracking-wider mb-1">
            <Code2 className="w-4 h-4 text-[#0F172A]" />
            <span>Integrasi Iframe</span>
          </div>
          <h3 className="font-heading text-lg font-bold text-[#0F172A]">
            Pasang Kalkulator Nilai UT di Website atau Blog Anda
          </h3>
          <p className="text-xs text-[#64748B] mt-0.5">
            Salin kode HTML di bawah ini untuk menyematkan kalkulator interaktif NilaiUT pada artikel blog, portal komunitas, atau LMS Anda.
          </p>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="px-4 py-2.5 rounded-xl bg-[#0F172A] hover:bg-slate-800 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors self-start md:self-auto shrink-0 shadow-sm"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-white" />
              <span>Kode Tersalin</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Salin Kode HTML</span>
            </>
          )}
        </button>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs text-[#64748B]">
          <span className="font-medium">Kode Sematan (HTML):</span>
          <div className="flex items-center gap-1.5 text-[11px]">
            <span className="text-[#64748B] font-medium">Tema:</span>
            <button
              type="button"
              onClick={() => setThemeMode('auto')}
              className={`px-2.5 py-0.5 rounded-lg transition-colors ${themeMode === 'auto' ? 'bg-[#0F172A] text-white font-semibold' : 'text-[#64748B] hover:text-[#0F172A]'}`}
            >
              Standar
            </button>
            <button
              type="button"
              onClick={() => setThemeMode('light')}
              className={`px-2.5 py-0.5 rounded-lg transition-colors ${themeMode === 'light' ? 'bg-[#0F172A] text-white font-semibold' : 'text-[#64748B] hover:text-[#0F172A]'}`}
            >
              Terang
            </button>
          </div>
        </div>

        <pre className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[#0F172A] font-mono text-xs overflow-x-auto leading-relaxed max-h-40">
          <code>{embedSnippet}</code>
        </pre>
      </div>
    </div>
  );
}
