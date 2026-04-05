# Deployment Guide: AxiomSystemsCo Landing Page

Panduan ini disusun berdasarkan **Standar Deploy Axiom** untuk memastikan performa yang optimal, aman, dan maintainable di environment production.

## 🛠️ Persiapan Environment

Sebelum melakukan deploy, pastikan hal-hal berikut sudah siap:

1.  **Node.js Version**: Gunakan Node.js versi 18 ke atas (LTS direkomendasikan).
2.  **Environment Variables**: Salin `.env.example` ke `.env` dan isi semua credential yang dibutuhkan.
    ```bash
    cp .env.example .env
    ```
3.  **Dependencies**: Install semua package menggunakan `npm`.
    ```bash
    npm install
    ```

## 🚀 Build & Production Mode

Landing page ini dibangun menggunakan **Astro**. Untuk deploy, kita perlu melakukan proses build terlebih dahulu.

1.  **Build Project**:
    ```bash
    npm run build
    ```
2.  **Verify Dist**: Pastikan folder `dist/` sudah ter-generate dengan benar.

## 📦 Process Management (PM2)

Setiap proyek Axiom wajib menggunakan **PM2** untuk manajemen proses di server/VPS.

1.  **Jalankan dengan PM2**:
    ```bash
    pm2 start "npm run preview" --name "axiom-landing-page"
    ```
2.  **Auto-restart on Reboot**:
    ```bash
    pm2 startup
    pm2 save
    ```

## ✅ Checklist Sebelum Handover

Sebelum menyerahkan akses atau mempublikasikan link ke klien, pastikan:

- [ ] **Favicon**: Sudah menggunakan logo Axiom (`public/favicon.svg`).
- [ ] **Asset Check**: Semua gambar (testimoni, case studies, services) sudah ter-load dengan benar (tidak ada 404).
- [ ] **Interactive Elements**: Modal harga, popup case study, dan link WhatsApp berfungsi 100%.
- [ ] **Performance**: Jalankan `npm run build` tanpa error dan cek skor Lighthouse (target: >90).
- [ ] **Graceful Shutdown**: Sistem menangani signal `SIGTERM` dengan benar (sudah terintegrasi di Astro preview).

## 🩺 Health Check & Monitoring

- **Activity Log**: Cek log real-time menggunakan PM2:
  ```bash
  pm2 logs axiom-landing-page
  ```
- **Monitoring**: Gunakan `pm2 monit` untuk melihat penggunaan RAM dan CPU di server.

## 🛡️ Disaster Recovery

Jika terjadi anomali pada sistem:
1.  Cek status PM2: `pm2 list`
2.  Restart proses: `pm2 restart axiom-landing-page`
3.  Jika bundle bermasalah, hapus `node_modules` dan `dist`, lalu ulangi langkah **Build**.

---
**AxiomSystemsCo — Automation Engine for Real Growth**
