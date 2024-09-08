# Laporan Eksperimen: Evaluasi Kinerja Aplikasi Web Berbasis Monolitik vs Micro Frontends

## 1. Identifikasi Problem
Bagaimana perbandingan kinerja antara aplikasi web yang menggunakan arsitektur monolitik dan micro frontends ketika dihadapkan pada lalu lintas tinggi?

## 2. Deskripsi Problem
Arsitektur perangkat lunak yang berbeda dapat mempengaruhi performa aplikasi web secara signifikan. Arsitektur monolitik biasanya memiliki performa yang lebih baik dalam hal kecepatan dan efisiensi, sedangkan micro frontends menawarkan fleksibilitas dan kemudahan pemeliharaan. Dalam konteks pengembangan aplikasi web, penting untuk memahami trade-offs antara kedua pendekatan ini, terutama saat menghadapi situasi di mana aplikasi mengalami beban tinggi. Oleh karena itu, eksperimen ini dilakukan untuk menganalisis kinerja kedua arsitektur di bawah kondisi beban yang sama.

## 3. Metodologi Experiment
Eksperimen dilakukan dengan menggunakan **Apache Benchmark (ab)** untuk mengukur metrik kinerja seperti:
- Requests per second
- Waktu respons rata-rata per permintaan
- Total data yang ditransfer
- Waktu pemrosesan koneksi

Dua aplikasi diuji:
1. **Aplikasi Monolitik**: Menggunakan satu server untuk semua fungsi.
2. **Aplikasi Micro Frontends**: Menggunakan beberapa layanan untuk mengelola fungsi yang terpisah.

Pengujian dilakukan dengan:
- Jumlah total permintaan: 1000
- Jumlah pengguna bersamaan: 100

## 4. Pelaksanaan Experiment
### 4.1 Aplikasi Monolitik
Pengujian pertama dilakukan pada aplikasi monolitik yang berjalan di `http://localhost:3000/`. Pengujian dilakukan dengan perintah:

```bash
ab -n 1000 -c 100 http://localhost:3000/
```

Hasil dari pengujian ini adalah sebagai berikut:
- Requests per second: 1788.51
- Time taken for tests: 0.559 seconds
- Time per request (mean): 55.913 ms
- Total transferred: 233000 bytes

### 4.2 Aplikasi Micro Frontends
Pengujian kedua dilakukan pada aplikasi micro frontends yang juga berjalan di `http://localhost:3000/` menggunakan perintah yang sama:

```bash
ab -n 1000 -c 100 http://localhost:3000/
```

Hasil dari pengujian ini adalah sebagai berikut:
- Requests per second: 1670.25
- Time taken for tests: 0.599 seconds
- Time per request (mean): 59.871 ms
- Total transferred: 596000 bytes

## 5. Analisis Hasil Experiment
### 5.1 Perbandingan Kinerja
- **Requests per second**: Aplikasi monolitik mengungguli aplikasi micro frontends dengan 1788.51 request per detik dibandingkan dengan 1670.25. Ini menunjukkan bahwa arsitektur monolitik lebih efisien dalam memproses permintaan di bawah beban tinggi.
- **Waktu respons**: Rata-rata waktu respons untuk aplikasi monolitik adalah 55.913 ms, sementara aplikasi micro frontends menunjukkan waktu respons 59.871 ms. Ini menunjukkan bahwa monolitik lebih responsif.
- **Data yang ditransfer**: Aplikasi micro frontends mentransfer data yang jauh lebih banyak (596000 bytes) dibandingkan dengan aplikasi monolitik (233000 bytes). Ini menunjukkan bahwa aplikasi micro frontends mungkin menyajikan lebih banyak konten dan memuat informasi dari berbagai sumber, yang dapat menyebabkan overhead tambahan.

### 5.2 Kesimpulan
Eksperimen ini menunjukkan bahwa arsitektur monolitik menawarkan kinerja yang lebih baik dibandingkan dengan micro frontends ketika diuji di bawah beban tinggi. Namun, micro frontends memberikan fleksibilitas dan modularitas yang lebih besar dalam pengembangan. Oleh karena itu, pemilihan antara kedua arsitektur ini harus mempertimbangkan kebutuhan spesifik aplikasi serta trade-offs antara kinerja dan kemudahan pemeliharaan.
