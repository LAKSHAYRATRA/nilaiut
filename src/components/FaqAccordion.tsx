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
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
      {(title || subtitle) && (
        <div className="space-y-1 border-b border-slate-100 pb-4">
          {title && (
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#0F172A]">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-xs sm:text-sm text-[#64748B]">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="divide-y divide-slate-100">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="py-4">
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full text-left flex items-start justify-between gap-4 font-bold text-[#0F172A] hover:underline transition-colors"
                aria-expanded={isOpen}
              >
                <span className="text-sm sm:text-base leading-snug">{item.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 shrink-0 mt-1 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#0F172A]' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="pt-2 text-xs sm:text-sm text-[#334155] leading-relaxed font-sans max-w-none">
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
