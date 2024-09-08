# **Laporan Eksperimen: Penggunaan Web Workers untuk Manajemen Proses dalam Server Web**

## 1. Identifikasi Problem
Di dunia pengembangan aplikasi web, kinerja dan responsivitas server menjadi aspek krusial, terutama ketika menangani permintaan simultan dari pengguna. Masalah yang diidentifikasi dalam eksperimen ini adalah **bagaimana menjalankan tugas komputasi intensif secara efisien tanpa membebani thread utama server**.

## 2. Deskripsi Problem
Server web sering kali dihadapkan pada kebutuhan untuk memproses tugas yang membutuhkan komputasi berat, seperti perhitungan matematis, pemrosesan gambar, atau manipulasi data. Jika tugas ini dijalankan di thread utama, server dapat menjadi tidak responsif, mengakibatkan latency yang tinggi dan menurunnya pengalaman pengguna. Teknik forking melalui Web Workers memungkinkan eksekusi tugas-tugas ini di thread terpisah, sehingga dapat mengurangi beban pada thread utama dan meningkatkan responsivitas aplikasi.

## 3. Metodologi Eksperimen
Eksperimen ini dilakukan dengan membandingkan dua pendekatan dalam menangani tugas komputasi intensif:
- **Pendekatan Tanpa Web Workers:** Tugas komputasi dijalankan langsung di thread utama server.
- **Pendekatan Dengan Web Workers:** Tugas yang sama dijalankan di worker thread menggunakan Web Workers.

### Langkah-langkah metodologi:
1. **Implementasi kode** untuk masing-masing pendekatan.
2. **Pengujian beban** dengan menggunakan alat seperti Apache Benchmark (ab) untuk mengukur kinerja.
3. **Pengukuran metrik** seperti penggunaan CPU, latency, dan throughput.

## 4. Pelaksanaan Eksperimen
### A. Persiapan Lingkungan
1. **Instalasi Node.js** dan editor kode seperti Visual Studio Code.
2. **Membuat proyek baru** dengan struktur direktori yang diperlukan.

### B. Implementasi Kode
- **Tanpa Web Workers:**
  ```javascript
  const express = require('express');
  const app = express();
  const port = 3000;

  function intensiveTask() {
      let count = 0;
      for (let i = 0; i < 1e7; i++) {
          count += i;
      }
      return count;
  }

  app.get('/', (req, res) => {
      const result = intensiveTask();
      res.send(`Result: ${result}`);
  });

  app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
  });
  ```

- **Dengan Web Workers:**
  ```javascript
  const express = require('express');
  const { Worker } = require('worker_threads');

  const app = express();
  const port = 3000;

  function runService(workerData) {
      return new Promise((resolve, reject) => {
          const worker = new Worker('./worker.js', { workerData });
          worker.on('message', resolve);
          worker.on('error', reject);
          worker.on('exit', (code) => {
              if (code !== 0)
                  reject(new Error(`Worker stopped with exit code ${code}`));
          });
      });
  }

  app.get('/', async (req, res) => {
      const result = await runService({ task: 'intense_computation' });
      res.send(`Result: ${result}`);
  });

  app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
  });
  ```

- **Worker.js:**
  ```javascript
  const { parentPort } = require('worker_threads');

  function intensiveTask() {
      let count = 0;
      for (let i = 0; i < 1e7; i++) {
          count += i;
      }
      return count;
  }

  parentPort.postMessage(intensiveTask());
  ```

### C. Pengujian Beban
- **Menjalankan server** untuk masing-masing pendekatan menggunakan Node.js.
- **Melakukan pengujian beban** menggunakan Apache Benchmark:
  ```bash
  ab -n 1000 -c 100 http://localhost:3000/
  ```

## 5. Analisis Hasil Eksperimen
### A. Hasil Pengujian
- **Tanpa Web Workers:**
  - Penggunaan CPU maksimum: ~50%
  - Latency: Tinggi pada permintaan simultan
  - Responsivitas: Menurun ketika banyak permintaan datang

- **Dengan Web Workers:**
  - Penggunaan CPU maksimum: 100%
  - Latency: Lebih rendah pada permintaan simultan
  - Responsivitas: Lebih baik; server tetap responsif meskipun ada tugas berat yang diproses

### B. Diskusi
Penggunaan Web Workers memungkinkan server untuk memanfaatkan kapasitas CPU secara lebih efektif dengan mendistribusikan tugas intensif ke thread terpisah. Meskipun penggunaan CPU menjadi 100%, aplikasi tetap lebih responsif, yang sangat penting ketika menangani banyak permintaan bersamaan. Sementara itu, dalam pendekatan tanpa Web Workers, beban kerja di thread utama menyebabkan penurunan responsivitas.

### C. Kesimpulan
Eksperimen ini menunjukkan bahwa penerapan Web Workers dalam manajemen proses pada server web meningkatkan kinerja dan responsivitas aplikasi, terutama dalam situasi yang memerlukan pemrosesan komputasi berat. Web Workers memberikan solusi untuk mengurangi bottleneck di thread utama dan memungkinkan server untuk menangani lebih banyak permintaan secara efisien.

### D. Rekomendasi
Dari hasil eksperimen, direkomendasikan untuk:
- Menggunakan Web Workers dalam aplikasi yang memerlukan pemrosesan intensif.
- Memperhatikan penggunaan sumber daya dan memonitor kinerja secara berkala untuk memastikan bahwa server beroperasi dalam batas yang optimal.
