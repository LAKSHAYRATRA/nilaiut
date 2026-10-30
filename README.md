# NilaiUT - Kalkulator Nilai & IPK Universitas Terbuka

[![Website](https://img.shields.io/badge/Website-NilaiUT.com-02569B?style=for-the-badge&logo=google-chrome&logoColor=white)](https://nilaiut.com)
[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Netlify Status](https://img.shields.io/badge/Deploy-Netlify_Ready-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://nilaiut.com)

> 🌐 **Situs Resmi:** [https://nilaiut.com](https://nilaiut.com)  
> Platform kalkulator nilai akhir, perencanaan IPK semester & kumulatif, serta pemecah target nilai UAS independen terakurat untuk 525.000+ mahasiswa Universitas Terbuka (UT) di seluruh Indonesia.

---

## 🎯 Mengapa NilaiUT Dibangun?

Di Universitas Terbuka (UT), perhitungan nilai akhir mata kuliah memiliki formula unik berbasis **Peraturan Rektor No. 16/2017** dengan 4 modus bantuan belajar yang berbeda (Tuton 70:30, Tuweb 50:50, TMK 80:20, dan Praktik).

Banyak mahasiswa mengalami kegagalan (huruf mutu E) karena tidak menyadari adanya **Klausul Syarat Minimal UAS 30 Poin**, di mana nilai Tuton/TMK otomatis hangus jika nilai lembar jawaban UAS di bawah 30. **NilaiUT** hadir sebagai solusi 100% *client-side*, aman, tanpa server lag, dan bebas biaya untuk seluruh mahasiswa UT.

---

## 🚀 Fitur Utama NilaiUT

1. **[Kalkulator Nilai Akhir UT Online](https://nilaiut.com)**:
   - **[Kalkulator Nilai Tuton UT (70:30)](https://nilaiut.com/kalkulator-nilai-tuton-ut/)**: Formula $(70\% \times \text{UAS}) + (30\% \times \text{Tuton})$.
   - **[Kalkulator Nilai TMK UT (80:20)](https://nilaiut.com/kalkulator-nilai-tmk-ut/)**: Formula $(80\% \times \text{UAS}) + (20\% \times \text{TMK})$.
   - **[Kalkulator Nilai Tuweb & TTM UT (50:50)](https://nilaiut.com/kalkulator-nilai-tuweb-ut/)**: Formula seimbang $(50\% \times \text{UAS}) + (50\% \times \text{Tuweb})$.
   - **Kalkulator Mata Kuliah Berpraktik**: Slider bobot mandiri kustom.

2. **[Target Solver Nilai UAS UT](https://nilaiut.com/target-nilai-uas/)** *(Killer Feature)*:
   - Hitung mundur secara presisi berapa skor minimal ujian UAS yang wajib Anda dapatkan berdasarkan nilai Tuton saat ini untuk mengamankan huruf mutu A, A-, atau B.

3. **[Kalkulator IPK UT & Predikat Kelulusan](https://nilaiut.com/kalkulator-ipk-ut/)**:
   - Menghitung Indeks Prestasi Semester (IPS) dan Kumulatif (IPK) skala 4.00.
   - Pengecekan otomatis predikat yudisium resmi UT: *Dengan Pujian (Cumlaude)*, *Sangat Memuaskan*, *Memuaskan*, dan *Cukup*.
   - Deteksi pencegah nilai E yang membatalkan kelulusan.

4. **1-Click WhatsApp & Telegram Share**:
   - Bagikan kartu ringkasan hasil kalkulasi berformat emoji langsung ke grup belajar mahasiswa UT.

5. **[Widget Iframe untuk Blogger & Webmaster](https://nilaiut.com/pasang-widget/)**:
   - Generator kode `<iframe>` responsif untuk disematkan di blog WordPress, Blogspot, atau portal himpunan mahasiswa.

---

## 📚 Pusat Panduan Akademik UT

Pelajari regulasi resmi universitas yang ditulis lengkap di portal NilaiUT:
- 📖 [Panduan Cara Hitung Nilai Akhir UT](https://nilaiut.com/panduan/cara-hitung-nilai-akhir-ut/)
- ⚖️ [Perbedaan Skema Bobot Tuton 70:30, TMK 80:20 & Tuweb 50:50](https://nilaiut.com/panduan/skema-bobot-tuton-tmk-tuweb/)
- ⚠️ [Aturan Syarat Minimal UAS 30 di UT & Cara Menghindari Nilai E](https://nilaiut.com/panduan/aturan-syarat-minimal-uas-30/)
- 🎓 [Cara Menghitung IPK Kumulatif & Syarat Predikat Cumlaude UT](https://nilaiut.com/panduan/cara-menghitung-ipk-dan-predikat-kelulusan-ut/)
- 📅 [Kalender Akademik, Jadwal Cetak KTPU & Rilis Nilai MyUT](https://nilaiut.com/panduan/kalender-akademik-dan-jadwal-uas-ut/)

---

## 💻 Tech Stack

- **Framework**: Next.js 14+ (App Router, Static HTML Export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, Dark/Light Mode
- **Icons**: Lucide React
- **Architecture**: 100% Client-Side Engine (0 Database Cost, 0 Server Overhead)
- **Deployment**: Netlify / Vercel / Cloudflare Pages

---

## 🛠️ Instalasi Lokal & Pengembangan

```bash
# 1. Clone repositori ini
git clone https://github.com/LAKSHAYRATRA/nilaiut.git
cd nilaiut

# 2. Install dependensi
npm install

# 3. Jalankan server lokal
npm run dev

# 4. Bangun berkas statis (Export ke out/)
npm run build
```

Buka peramban di `http://localhost:3000` untuk melihat aplikasi berjalan.

---

## 🌐 Deploy ke Netlify

Repositori ini telah dilengkapi dengan berkas konfigurasi [`netlify.toml`](./netlify.toml):
1. Buka [Netlify Dashboard](https://app.netlify.com).
2. Klik **Add new site &gt; Import an existing project**.
3. Pilih penyedia **GitHub** dan pilih repositori `LAKSHAYRATRA/nilaiut`.
4. Netlify secara otomatis mendeteksi:
   - **Build command**: `npm run build`
   - **Publish directory**: `out`
5. Klik **Deploy site**.
6. Hubungkan domain kustom Anda di **Domain management &gt; Add custom domain**: `nilaiut.com`.

---

## 🔗 Tautan Atribusi & Backlink

Jika Anda menggunakan data atau menyematkan alat hitung NilaiUT pada situs web Anda, mohon sertakan atribusi berikut:

```html
<p>Ditenagai oleh <a href="https://nilaiut.com" target="_blank" rel="noopener">Kalkulator Nilai UT Online</a></p>
```

---

## 📄 Lisensi & Penafian

Proyek ini dirilis di bawah lisensi [MIT](./LICENSE).

*Penafian Resmi: NilaiUT adalah platform independen yang dikembangkan untuk membantu mahasiswa Universitas Terbuka dan tidak berafiliasi secara resmi dengan institusi Universitas Terbuka (UT) maupun Kementerian Pendidikan RI. Nilai resmi dan sah mutlak mengacu pada portal resmi [myut.ut.ac.id](https://myut.ut.ac.id).*
