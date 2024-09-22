# Eksperimen Komparasi Algoritma Pencarian di React: Client-Side Filtering vs. Server-Side Filtering

## Metodologi

Eksperimen ini bertujuan untuk membandingkan kinerja **client-side filtering** dan **server-side filtering** pada aplikasi React. Kami menggunakan dua dataset: satu kecil untuk client-side dan satu besar (> 1000 entri) untuk server-side. Proses pengujian mencakup pengukuran waktu respon, penggunaan memori, dan ukuran data yang dikirim.

### Langkah-langkah

1. **Persiapan Proyek**:
   - Membuat aplikasi React menggunakan `create-react-app`.
   - Mengatur server Express.js untuk menyediakan data.

2. **Implementasi Client-Side Filtering**:
   - Menggunakan state lokal untuk menyimpan data dan melakukan filtering di klien.

3. **Implementasi Server-Side Filtering**:
   - Mengatur endpoint di server untuk menerima query pencarian dan mengembalikan data yang difilter.

4. **Pengujian Kinerja**:
   - Menggunakan dataset kecil untuk client-side dan dataset besar untuk server-side.
   - Mencatat waktu respon, penggunaan memori, dan ukuran data yang dikirim.

## Lingkungan

- **Node.js**: Versi 14 atau lebih baru
- **React**: Versi 17 atau lebih baru
- **Express.js**: Versi 4 atau lebih baru
- **Browser**: Chrome (atau browser lain yang mendukung Developer Tools)


## Hasil

### Pengujian Client-Side Filtering

- **Waktu Respon**: [Catatan waktu dari pengujian client-side]
- **Penggunaan Memori**: [Catatan penggunaan memori dari pengujian client-side]
- **Data Dikirim**: 0 KB (semua data disimpan di klien)

### Pengujian Server-Side Filtering

- **Waktu Respon**: [Catatan waktu dari pengujian server-side]
- **Penggunaan Memori**: [Catatan penggunaan memori dari pengujian server-side]
- **Data Dikirim**: [content-length dari respons server] KB

### Perbandingan Hasil

| Metode                     | Waktu Respon (ms) | Penggunaan Memori (MB) | Data Dikirim (KB) |
|----------------------------|-------------------|------------------------|-------------------|
| Client-Side Filtering      | [Waktu dari client-side] | [Memori dari client-side] | 0                 |
| Server-Side Filtering      | [Waktu dari server]  | [Memori dari server]  | [content-length/1024] |

### Kesimpulan

Dari hasil pengujian, dapat disimpulkan bahwa [ringkasan kelebihan dan kekurangan dari masing-masing metode]. Keputusan untuk menggunakan salah satu metode tergantung pada konteks aplikasi dan ukuran dataset yang ditangani.

