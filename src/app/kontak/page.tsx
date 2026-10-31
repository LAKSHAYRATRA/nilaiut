'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, Send, CheckCircle2 } from 'lucide-react';

export default function KontakPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Saran Fitur Baru');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-[#0b2545] dark:hover:text-[#deb563]"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Kembali ke Beranda</span>
        </Link>
      </div>

      <header className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-6">
        <span className="text-xs font-serif font-bold uppercase tracking-wider text-[#8c6519] dark:text-[#deb563]">
          Layanan Komunikasi Akademik
        </span>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0b2545] dark:text-white tracking-tight">
          Kontak &amp; Masukan
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Sampaikan pertanyaan, masukan rumus, atau koreksi perhitungan kepada tim pengembang NilaiUT.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Contact Info */}
        <div className="md:col-span-5 space-y-4">
          <div className="p-5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">
              Saluran Surel Resmi
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Kami membaca dan merespons setiap masukan mahasiswa secara berkala pada hari kerja.
            </p>

            <div className="pt-1 text-xs space-y-2">
              <div>
                <span className="text-slate-400 block text-[11px]">Pertanyaan Umum &amp; Masukan:</span>
                <a href="mailto:halo@nilaiut.com" className="font-semibold text-blue-700 dark:text-blue-400 hover:underline">
                  halo@nilaiut.com
                </a>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Kemitraan &amp; Widget:</span>
                <a href="mailto:partner@nilaiut.com" className="font-semibold text-blue-700 dark:text-blue-400 hover:underline">
                  partner@nilaiut.com
                </a>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 space-y-1">
            <span className="font-semibold text-slate-800 dark:text-slate-200 block">
              Bantuan Administrasi Resmi Kampus:
            </span>
            <p>
              Untuk kendala akun MyUT, registrasi mata kuliah, atau pembayaran LIP, silakan hubungi kontak resmi kampus via <strong>Hallo-UT (hallo-ut.ut.ac.id)</strong> atau telepon <strong>1500024</strong>.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-7">
          <div className="p-6 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Pesan Anda Berhasil Terkirim
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
                  Terima kasih atas partisipasi Anda dalam membantu menjaga akurasi perhitungan NilaiUT.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setEmail('');
                    setMessage('');
                  }}
                  className="px-3.5 py-1.5 rounded text-xs font-semibold text-white bg-slate-900 dark:bg-slate-800 hover:bg-slate-800"
                >
                  Kirim Pesan Lainnya
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
                <div>
                  <label htmlFor="contact-name" className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Nama Lengkap
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nama Anda"
                    className="w-full px-3 py-2 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Alamat Surel (Email)
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@email.com"
                    className="w-full px-3 py-2 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Kategori Pesan
                  </label>
                  <select
                    id="contact-subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3 py-2 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-600 font-medium"
                  >
                    <option value="Saran Fitur Baru">Saran Fitur Baru</option>
                    <option value="Koreksi Rumus / Perhitungan">Koreksi Rumus / Bug Perhitungan</option>
                    <option value="Kerja Sama / Pasang Widget">Kerja Sama / Pasang Widget</option>
                    <option value="Pertanyaan Umum">Pertanyaan Umum</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Isi Pesan
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tuliskan masukan atau rincian pertanyaan Anda..."
                    className="w-full px-3 py-2 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-md bg-[#0b2545] hover:bg-[#07162b] text-[#f4e6be] font-bold text-xs flex items-center justify-center gap-1.5 transition-colors border border-[#c59b27]/40 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5 text-[#deb563]" />
                  <span>Kirim Pesan</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
