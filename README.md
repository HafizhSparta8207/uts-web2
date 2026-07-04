# Grade Calculation System

Proyek ini adalah sistem pemrosesan dan kalkulasi nilai akhir mahasiswa berbasis web modern yang dibangun untuk memenuhi tugas UTS Pemrograman Web 2.

---

## Tech Stack
* **Core:** React.js + Vite
* **Styling:** Tailwind CSS
* **Routing:** React Router DOM
* **Animation:** Custom Smooth Page Transitions (Fade, Blur, Scale, & Slide)

## Fitur Utama & Keunggulan UI/UX
* Halaman utama bersih dan terfokus pada judul serta deskripsi sistem interaktif.
* Efek kapsul latar belakang menu navigasi yang meluncur/bergeser mulus saat berpindah halaman (responsif di desktop dan mobile/Android).
* Input komponen nilai yang rapi dilengkapi dengan validasi kolom kosong secara berkala.
* Halaman keluaran informasi hasil penilaian yang adaptif dengan indikator warna dinamis sesuai status kelulusan.

## Aturan & Logika Pemrosesan Nilai

### 1. Pembobotan Komponen
| Komponen Nilai | Bobot Persentase |
| :--- | :---: |
| Kehadiran / Absen | 10% |
| Tugas Terstruktur | 20% |
| Ujian Tengah Semester (UTS) | 30% |
| Ujian Akhir Semester (UAS) | 40% |

### 2. Matriks Predikat & Kelulusan
| Rentang Skor | Predikat | Hasil Evaluasi |
| :---: | :---: | :--- |
| 80 - 100 | **A** | LULUS |
| 70 - 79 | **B** | LULUS |
| 60 - 69 | **C** | MENGULANG |
| 50 - 59 | **D** | TIDAK LULUS |
| < 50 | **E** | TIDAK LULUS |

---

## Panduan Menjalankan Proyek secara Lokal

Pastikan sudah menginstal [Node.js](https://nodejs.org/) di dalam device-nya, kemudian jalankan perintah berikut di terminal:

### 1. Clone repository ini
```git clone [https://github.com/HafizhSparta8207/uts-web2.git](https://github.com/HafizhSparta8207/uts-web2.git)```

### 2. Masuk ke direktori proyek
```cd uts-web2```

### 3. Instalasi seluruh dependensi
```npm install```

### 4. Jalankan server lokal untuk development
```npm run dev```

---

Kalian juga bisa mencoba versi deploy-nya [di sini](https://uts-web2-psi.vercel.app/).
