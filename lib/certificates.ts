// -----------------------------------------------------------------------------
// /sertifikat — halaman koleksi sertifikat (pelatihan, penghargaan, seminar, dll).
// Data dipisah dari lib/constants.ts agar perubahan Anda di file itu tidak
// tertimpa.
//
// Cara menambah foto sertifikat:
//   1. Simpan file di  public/images/certificates/  (mis. pelatihan-1.jpg)
//   2. Isi `image` dengan '/images/certificates/pelatihan-1.jpg'
// Foto ditampilkan utuh (tidak terpotong) di bingkai berukuran tetap, jadi
// tata letak tidak bergeser. Biarkan `image: ''` untuk placeholder.
//
// Sertifikat ke-7 dst: cukup tambahkan satu objek baru. Teks di bawah ini
// adalah PLACEHOLDER — ganti dengan data asli.
// -----------------------------------------------------------------------------
export const CERTIFICATE_HEADER = {
  eyebrow: 'SERTIFIKAT',
  tagline: 'Dokumentasi pelatihan, penghargaan, dan pengakuan atas dedikasi kami',
};

export type Certificate = {
  title: string;
  category: string;
  issuer: string;
  date: string;
  image: string;
};

export const CERTIFICATES: Certificate[] = [
  { title: 'Penafsiran Dan Analogi Hukum Pidana', category: 'Pelatihan', issuer: 'Zona Hukum', date: '22 Januari 2025', image: '/images/certificates/Yanther2.jpg' },
  { title: 'Regulasi Monopoli dan Persaingan Usaha Tidak Sehat', category: 'Pelatihan', issuer: 'Zona Hukum', date: '17 Januari 2025', image: '/images/certificates/Yanther1.jpg' },
  { title: 'Judul Sertifikat 3', category: 'Seminar', issuer: 'Lembaga Penerbit', date: 'Agustus 2022', image: '' },
  { title: 'Judul Sertifikat 4', category: 'Penghargaan', issuer: 'Lembaga Penerbit', date: 'Februari 2023', image: '' },
  { title: 'Judul Sertifikat 5', category: 'Seminar', issuer: 'Lembaga Penerbit', date: 'Juni 2023', image: '' },
  { title: 'Judul Sertifikat 6', category: 'Penghargaan', issuer: 'Lembaga Penerbit', date: 'Desember 2024', image: '' },
];
