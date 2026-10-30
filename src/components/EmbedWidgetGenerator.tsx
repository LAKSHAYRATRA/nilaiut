'use client';

import React, { useState } from 'react';
import { Code2, Copy, Check, ExternalLink, Sparkles, Monitor } from 'lucide-react';

export default function EmbedWidgetGenerator() {
  const [themeMode, setThemeMode] = useState<'light' | 'auto'>('auto');
  const [copied, setCopied] = useState<boolean>(false);

  const embedSnippet = `<!-- Widget Kalkulator Nilai UT Gratis by NilaiUT.com -->
<div style="width: 100%; max-width: 720px; margin: 0 auto; font-family: system-ui, sans-serif;">
  <iframe 
    src="https://nilaiut.com/?embed=true&theme=${themeMode}" 
    width="100%" 
    height="680" 
    style="border: 1px solid #e2e8f0; border-radius: 16px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);" 
    title="Kalkulator Nilai UT Online"
    loading="lazy"
  ></iframe>
  <p style="font-size: 12px; color: #64748b; text-align: center; margin-top: 8px;">
    Ditenagai oleh <a href="https://nilaiut.com" target="_blank" rel="noopener" style="color: #2563eb; text-decoration: underline; font-weight: 600;">Kalkulator Nilai UT Online</a>
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
    <div id="embed-widget" className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Code2 className="w-4 h-4" />
            <span>Fitur Khusus Webmaster & Blogger Kampus</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Pasang Kalkulator Nilai UT di Website / Blog Anda
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Bantu sesama mahasiswa UT menghitung nilai langsung dari blog WordPress, Blogspot, atau portal himpunan mahasiswa Anda. Gratis 100%!
          </p>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 transition-all self-start md:self-auto shrink-0"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-emerald-300" />
              <span>Kode Embed Tersalin!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>Salin Kode HTML Embed</span>
            </>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Code Snippet Box */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Kode HTML (Salin dan tempel di editor HTML/Text blog Anda):</span>
            <div className="flex items-center gap-2">
              <span className="text-[11px]">Mode:</span>
              <button
                type="button"
                onClick={() => setThemeMode('auto')}
                className={`px-2 py-0.5 rounded text-[11px] ${themeMode === 'auto' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'}`}
              >
                Auto
              </button>
              <button
                type="button"
                onClick={() => setThemeMode('light')}
                className={`px-2 py-0.5 rounded text-[11px] ${themeMode === 'light' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'}`}
              >
                Light
              </button>
            </div>
          </div>

          <div className="relative">
            <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 font-mono text-xs overflow-x-auto leading-relaxed max-h-48">
              <code>{embedSnippet}</code>
            </pre>
          </div>

          <p className="text-[11px] text-slate-500 leading-normal">
            * Iframe ini bersifat fully responsive dan aman disematkan pada WordPress (Gutenberg Custom HTML / Classic), Blogger / Blogspot, Notion, atau CMS kampus manapun.
          </p>
        </div>

        {/* Benefits Card */}
        <div className="lg:col-span-5 p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-3 text-xs">
          <span className="font-bold text-slate-200 uppercase tracking-wider block text-[11px]">
            Keunggulan Memasang Widget Ini:
          </span>
          <ul className="space-y-2 text-slate-300">
            <li className="flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span><strong>Meningkatkan Waktu Kunjungan (Dwell Time):</strong> Pembaca betah berlama-lama mencoba simulasi nilai di web Anda.</span>
            </li>
            <li className="flex items-start gap-2">
              <Monitor className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Otomatis Diperbarui:</strong> Rumus dan regulasi UT akan diperbarui secara otomatis tanpa Anda perlu mengubah kode.</span>
            </li>
            <li className="flex items-start gap-2">
              <ExternalLink className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span><strong>Bebas Iklan Pengganggu:</strong> Widget iframe bersih dan nyaman bagi pengunjung.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
