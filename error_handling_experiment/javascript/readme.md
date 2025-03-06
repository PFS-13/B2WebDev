# Error Handling Experiment

## Pengertian
Eksperimen ini bertujuan untuk menguji berbagai metode penanganan kesalahan dalam aplikasi web menggunakan Node.js dan Express. Dengan menggunakan route yang berpotensi menyebabkan kesalahan, eksperimen ini mengeksplorasi implementasi penanganan kesalahan menggunakan try-catch block dan middleware.

## Lingkungan yang Diuji
- **Bahasa Pemrograman**: JavaScript
- **Platform**: Node.js
- **Framework**: Express
- **Port yang Digunakan**: 3000 (default)

### Langkah-Langkah Instalasi
1. **Instal Node.js**: Pastikan Node.js terinstal di sistem Anda.
2. **Buat Folder Proyek**: 
   ```bash
   mkdir error_handling_experiment
   cd error_handling_experiment
3. **Inisialisasi Proyek Node.js**:
   ```bash
    npm init -y
4. **Instal Express:**:
   ```bash
    npm install express
5. **Buat file** app.js dan tambahkan kode untuk aplikasi
6. **Jalankan Aplikasi**:
   ```bash
    npm install express

### Hasil
Setelah mengimplementasikan metode penanganan kesalahan, berikut adalah hasil dari pengujian yang dilakukan:
- Mengakses endpoint /divide/2 menghasilkan: Result: 5
- Mengakses endpoint /divide/0 menghasilkan: Error: Cannot divide by zero
- Mengakses endpoint /notfound menghasilkan pesan kesalahan dari middleware.

### Kelebihan
- **Mudah diimplementasikan**: Menggunakan Node.js dan Express membuat penanganan kesalahan menjadi intuitif dan mudah diimplementasikan.
- **Fleksibilitas**: Middleware memungkinkan penanganan kesalahan yang lebih terstruktur dan dapat ditangani secara global.
- **Responsif**: Aplikasi memberikan umpan balik yang jelas kepada pengguna ketika terjadi kesalahan.

### Kesimpulan
Eksperimen ini menunjukkan bahwa penanganan kesalahan dapat dilakukan dengan efisien menggunakan teknik-teknik yang sederhana dalam Node.js dan Express. Hal ini penting untuk memberikan pengalaman pengguna yang baik dalam aplikasi web.