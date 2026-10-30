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
    <div id="embed-widget" className="bg-slate-900 text-white rounded-xl p-6 border border-slate-800 space-y-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold mb-1">
            <Code2 className="w-4 h-4 text-blue-400" />
            <span>Integrasi Iframe</span>
          </div>
          <h3 className="text-lg font-bold text-white">
            Pasang Kalkulator Nilai UT di Website atau Blog Anda
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Salin kode HTML di bawah ini untuk menyematkan kalkulator interaktif NilaiUT pada artikel WordPress atau Blogspot Anda.
          </p>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="px-3.5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors self-start md:self-auto shrink-0"
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
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>Kode Sematan (HTML):</span>
          <div className="flex items-center gap-1.5 text-[11px]">
            <span>Tema:</span>
            <button
              type="button"
              onClick={() => setThemeMode('auto')}
              className={`px-2 py-0.5 rounded ${themeMode === 'auto' ? 'bg-slate-700 text-white font-semibold' : 'text-slate-400 hover:text-white'}`}
            >
              Auto
            </button>
            <button
              type="button"
              onClick={() => setThemeMode('light')}
              className={`px-2 py-0.5 rounded ${themeMode === 'light' ? 'bg-slate-700 text-white font-semibold' : 'text-slate-400 hover:text-white'}`}
            >
              Terang
            </button>
          </div>
        </div>

        <pre className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 font-mono text-xs overflow-x-auto leading-relaxed max-h-40">
          <code>{embedSnippet}</code>
        </pre>
      </div>
    </div>
  );
}
