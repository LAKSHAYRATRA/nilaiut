'use client';

import React from 'react';

interface AdSenseSlotProps {
  slotId?: string;
  format?: 'auto' | 'horizontal' | 'rectangle';
  className?: string;
}

export default function AdSenseSlot({ slotId = '1234567890', format = 'auto', className = '' }: AdSenseSlotProps) {
  return (
    <div className={`w-full max-w-4xl mx-auto my-6 text-center overflow-hidden ${className}`}>
      {/* Placeholder container with layout reservation to avoid CLS */}
      <div className="min-h-[90px] p-3 rounded-xl border border-dashed border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 flex flex-col items-center justify-center text-xs text-slate-400">
        <span className="font-semibold uppercase tracking-wider text-[10px] text-slate-400 mb-1">
          Iklan Sponsor
        </span>
        <div className="w-full">
          {/* Production Google AdSense ins tag */}
          <ins
            className="adsbygoogle block"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
            data-ad-slot={slotId}
            data-ad-format={format}
            data-full-width-responsive="true"
          />
        </div>
        <span className="text-[10px] text-slate-400/80 mt-1">
          Iklan mendukung layanan gratis NilaiUT bagi mahasiswa
        </span>
      </div>
    </div>
  );
}
