'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  title?: string;
  subtitle?: string;
}

export default function FaqAccordion({
  items,
  title = "Pertanyaan yang Sering Diajukan (FAQ)",
  subtitle = "Jawaban seputar regulasi penilaian, sistem tutorial, dan aturan kelulusan di Universitas Terbuka"
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {(title || subtitle) && (
        <div className="space-y-1 border-b border-slate-200 dark:border-slate-800 pb-3">
          {title && (
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0b2545] dark:text-white">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="divide-y divide-slate-200 dark:divide-slate-800 border-t border-b border-slate-200 dark:border-slate-800">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="py-3.5">
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full text-left flex items-start justify-between gap-4 font-serif font-bold text-slate-900 dark:text-white hover:text-[#0b2545] dark:hover:text-[#deb563] transition-colors"
                aria-expanded={isOpen}
              >
                <span className="text-sm sm:text-base leading-snug">{item.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 shrink-0 mt-1 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#8c6519] dark:text-[#deb563]' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="pt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
