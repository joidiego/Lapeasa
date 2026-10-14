// -----------------------------------------------------------------------------
// Central place for firm content. Replace every value here with the real
// firm's information — nothing elsewhere in the codebase needs to change.
// -----------------------------------------------------------------------------

export const FIRM = {
  name: 'LAPEASA LOW OFFICE & Partners',
  shortName: 'LLO',
  founded: '2021',
  tagline: 'Karena Hak Anda Layak Diperjuangkan',
  email: 'lapeasa@gmail.com',
  phone: '+62 813-6394-407',
  whatsapp: 'https://wa.me/6281360010609',
  linkedin: 'https://www.linkedin.com/in/lapeasa/',
  address: ['Kelapa Puan Timur Raya blok S1/4a.Kelapa Gading Jakarta Utara'],
  mapsUrl: 'https://maps.google.com',
};

export const NAV_LINKS = [
  { label: 'About', href: '/#about' },
  { label: 'Practice Areas', href: '/#practice-areas' },
  { label: 'Lawyers', href: '/#lawyers' },
  { label: 'Telaah', href: '/#cases' },
  { label: 'Metode Klien', href: '/metode-penanganan' },
  { label: 'Sertifikasi', href: '/sertifikasi' },
  { label: 'Sertifikat', href: '/sertifikat' },
  { label: 'Galeri', href: '/galeri' },
  { label: 'Contact', href: '/#contact' },
];

// -----------------------------------------------------------------------------
// Vision & Mission — shown right below the "TENTANG KAMI" section.
// `image` points to the photo used on the left side of that section; drop the
// real file at public/images/about/visi-misi.jpg (see note in the component).
// -----------------------------------------------------------------------------
export const VISION_MISSION_IMAGE = '/images/about/visi-misi.jpg';

export const VISION =
  'Menjadi firma hukum terpercaya yang menghadirkan keadilan, kepastian, dan solusi hukum strategis bagi setiap klien yang kami layani, di setiap tingkatan perkara.';

export const MISSION = [
  'Memberikan layanan hukum yang profesional, independen, dan berintegritas tinggi kepada setiap klien.',
  'Membangun kepercayaan melalui komunikasi yang transparan dan solusi hukum yang tepat sasaran.',
  'Mengedepankan etika, kejujuran, dan tanggung jawab dalam setiap penanganan perkara.',
  'Terus mengembangkan kompetensi tim guna menjawab dinamika hukum yang terus berkembang.',
];

export const PRACTICE_AREAS = [
  {
    number: '01',
    title: 'Hukum Perdata & Keluarga',
    description:
      '"Melindungi apa yang paling berharga bagi Anda. Kami hadir dengan empati dan ketegasan untuk menjaga harmoni keluarga serta memastikan hak-hak perdata Anda tetap utuh dan adil."',
  },
  {
    number: '02',
    title: 'Hukum Pidana',
    description:
      '"Ketika kebebasan dan nama baik Anda terancam, kami adalah perisai terkuat yang Anda miliki. Membela dengan integritas, memperjuangkan keadilan tanpa kompromi."',
  },
  {
    number: '03',
    title: 'Hukum Perusahaan & Bisnis',
    description:
      '"Lebih dari sekadar penasihat, kami adalah mitra strategis pertumbuhan Anda. Mengawal setiap langkah bisnis dengan kepastian hukum, agar Anda bisa fokus membangun warisan dan kesuksesan."',
  },
  {
    number: '04',
    title: 'Hukum Perdagangan & Perlindungan Konsumen',
    description:
      '"Mewujudkan keadilan dan kepercayaan dalam setiap transaksi. Kami berdiri tegak membela hak Anda, memastikan setiap praktik perdagangan berjalan jujur, adil, dan saling menguntungkan."',
  },
  {
    number: '05',
    title: 'Hukum Ketenagakerjaan',
    description:
      '"Menghargai setiap dedikasi dan keringat. Kami memperjuangkan keadilan dan hak pekerja, sekaligus menjaga kelangsungan harmoni hubungan industrial bagi perusahaan."',
  },
  {
    number: '06',
    title: 'Hukum Administrasi & Tata Usaha Negara',
    description:
      '"Menembus kompleksitas birokrasi dengan presisi. Kami memastikan hak, izin, dan kepentingan Anda diakui serta dilindungi secara sah oleh negara."',
  },
  {
    number: '07',
    title: 'Hukum Hak Atas Kekayaan Intelektual',
    description:
      '"Karena ide dan karya Anda adalah mahkota yang tak ternilai. Kami melindungi aset tak berwujud Anda, memastikan buah pemikiran Anda tetap menjadi hak eksklusif Anda selamanya."',
  },
  {
    number: '08',
    title: 'Bantuan Hukum & Litigasi',
    description:
      '"Di ruang pengadilan, kami adalah suara dan kekuatan Anda. Berjuang dengan strategi tajam dan keberanian penuh, tidak akan berhenti hingga keadilan benar-benar ditegakkan untuk Anda."',
  },
];

export const LAWYERS = [
  {
    name: 'Yonas Neja SH.,MH.,',
    position: 'CEO / Ketua',
    practice: 'Mergers & Acquisitions',
    image: '/images/lawyers/yonas.jpg',
  },
  {
    name: 'Dapot Diaman Munthe,SH.,MH.,',
    position: 'Senior Partner',
    practice: 'Litigation & Dispute Resolution',
    image: '/images/lawyers/dapot.jpg',
  },
  {
    name: 'Drs.Yanther Panjaitan SH.,MH,',
    position: 'Partner',
    practice: 'Banking & Finance',
    image: '/images/lawyers/yanther.jpg',
  },
  {
    name: 'Subartin,SH.,',
    position: 'Partner',
    practice: 'Regulatory & Compliance',
    image: '/images/lawyers/lawyer-bg.webp',
  },
  {
    name: 'Restu Berkat Harefa,S Kes,.SH.,',
    position: 'Senior Associate',
    practice: 'Hukum Perdata & Keluarga',
    image: '/images/lawyers/restu.jpg',
  },
  {
    name: 'Doni Martadinata,SH.,',
    position: 'Senior Associate',
    practice: 'Hukum Pidana',
    image: '/images/lawyers/doni.jpg',
  },
  {
    name: 'Diego Napitupulu,S.Kom',
    position: 'Admin',
    practice: 'Data Investigator',
    image: '/images/lawyers/joi.jpg',
  },
];

// -----------------------------------------------------------------------------
// Section "Telaah Hukum" (#cases) — tulisan/penelitian hukum singkat.
// Tiap entri: `paragraphs` ditampilkan lengkap di jendela "Baca selengkapnya";
// paragraf pertama dipakai sebagai ringkasan di kartu. Kartu selalu berukuran
// sama berapa pun panjang teksnya. Tambah entri baru = tambah satu objek.
//
// PENTING: ini draf informasi umum. Periksa ulang dasar hukum, nomor pasal, dan
// perubahan peraturan sebelum dipublikasikan, dan sesuaikan dengan bahasa Anda.
// -----------------------------------------------------------------------------
export const CASES_HEADER = {
  eyebrow: 'KAJIAN HUKUM',
  title: 'Kajian hukum yang cermat untuk keputusan yang tepat.',
  note: 'Kajian singkat dari tim kami tentang isu hukum yang sering dihadapi. Bersifat informasi umum dan bukan nasihat hukum untuk perkara tertentu.',
  author: 'Tim Hukum LLO',
  readMore: 'Baca selengkapnya',
  basisLabel: 'Dasar hukum',
  disclaimer:
    'Tulisan ini bersifat informasi umum dan tidak menggantikan nasihat hukum atas perkara tertentu. Hubungi kami untuk konsultasi sesuai kondisi Anda.',
};

export const CASES: {
  number: string;
  category: string;
  title: string;
  basis: string;
  paragraphs: string[];
}[] = [
  {
    number: '01',
    category: 'HUKUM PIDANA',
    title: 'Batas antara Penafsiran dan Analogi dalam Hukum Pidana',
    basis: 'Asas legalitas dalam hukum pidana Indonesia',
    paragraphs: [
      'Asas legalitas menegaskan bahwa seseorang hanya dapat dipidana berdasarkan ketentuan yang sudah ada sebelum perbuatan dilakukan. Karena itu, suatu pasal pidana tidak boleh diterapkan pada perbuatan yang tidak diatur secara tegas hanya dengan menyamakannya. Penafsiran tetap dimungkinkan, misalnya secara gramatikal, sistematis, atau teleologis, selama tidak memperluas rumusan delik melampaui makna katanya.',
      'Perbedaannya terletak pada titik berangkatnya. Penafsiran bekerja di dalam makna rumusan pasal yang sudah ada, sedangkan analogi menarik perbuatan yang tidak tercantum ke dalam pasal karena dianggap mirip. Penafsiran yang terlalu meluas (ekstensif) mudah bergeser menjadi analogi terselubung, dan di situlah garis tipis yang sering menjadi pokok pembelaan.',
      'Dalam praktik pembelaan, hal pertama yang diuji adalah apakah setiap unsur delik benar-benar terpenuhi oleh perbuatan yang didakwakan, bukan sekadar apakah perbuatan itu terlihat serupa dengan perbuatan yang dilarang. Kepastian ini melindungi warga dari penerapan hukum pidana yang tidak dapat diperkirakan sebelumnya.',
    ],
  },
  {
    number: '02',
    category: 'PERSAINGAN USAHA',
    title: 'Per Se Illegal dan Rule of Reason dalam Menilai Praktik Persaingan',
    basis: 'UU No. 5 Tahun 1999 tentang Larangan Praktik Monopoli dan Persaingan Usaha Tidak Sehat',
    paragraphs: [
      'Hukum persaingan usaha di Indonesia mengatur larangan praktik monopoli dan persaingan usaha tidak sehat, dengan Komisi Pengawas Persaingan Usaha (KPPU) sebagai lembaga pengawasnya. Dalam menilai suatu praktik, dikenal dua pendekatan utama, yaitu per se illegal dan rule of reason.',
      'Pendekatan per se illegal memandang perbuatan tertentu terlarang dengan sendirinya, tanpa perlu membuktikan dampaknya terhadap pasar. Kesepakatan penetapan harga antar pesaing kerap dikaitkan dengan pendekatan ini. Sebaliknya, rule of reason mengharuskan pembuktian bahwa suatu praktik benar-benar menghambat persaingan, misalnya melalui analisis pasar bersangkutan, pangsa pasar, hambatan masuk, dan alasan efisiensi.',
      'Bagi pelaku usaha, perbedaan ini menentukan strategi. Pada perkara yang dinilai dengan rule of reason, kemampuan menunjukkan definisi pasar yang tepat serta dokumentasi alasan bisnis yang sah menjadi bagian penting dari pembelaan. Karena itu, kajian hukum sebaiknya dilakukan sebelum kerja sama atau kebijakan harga ditetapkan, bukan setelah pemeriksaan dimulai.',
    ],
  },
  {
    number: '03',
    category: 'HUKUM KETENAGAKERJAAN',
    title: 'PHK sebagai Upaya Terakhir dan Jalur Penyelesaiannya',
    basis: 'Peraturan ketenagakerjaan dan UU No. 2 Tahun 2004 tentang Penyelesaian Perselisihan Hubungan Industrial',
    paragraphs: [
      'Pemutusan hubungan kerja (PHK) pada prinsipnya merupakan langkah terakhir yang sedapat mungkin dihindari oleh pengusaha, pekerja, serikat pekerja, dan pemerintah. Perusahaan tidak dapat memutus hubungan kerja secara sepihak tanpa dasar dan prosedur yang sah, dan pekerja tetap memiliki hak yang harus dipenuhi.',
      'Apabila terjadi perselisihan, penyelesaiannya ditempuh secara bertahap. Para pihak lebih dahulu berunding secara bipartit. Jika tidak mencapai kesepakatan, perselisihan dilanjutkan melalui mediasi atau konsiliasi, dan apabila masih belum selesai dapat diajukan ke Pengadilan Hubungan Industrial. Tahapan ini umumnya wajib dilalui sebelum gugatan diajukan.',
      'Dari sisi pekerja, menyimpan perjanjian kerja, slip gaji, surat peringatan, dan korespondensi akan sangat membantu pembuktian. Dari sisi perusahaan, pembinaan yang terdokumentasi dan prosedur yang tertib mengurangi risiko sengketa. Karena aturan ketenagakerjaan beberapa kali berubah, ketentuan yang berlaku perlu dicek pada saat perkara muncul.',
    ],
  },
  {
    number: '04',
    category: 'PERDATA & KELUARGA',
    title: 'Harta Bersama dan Harta Bawaan dalam Perkawinan',
    basis: 'UU No. 1 Tahun 1974 tentang Perkawinan dan Putusan MK No. 69/PUU-XIII/2015',
    paragraphs: [
      'Menurut hukum perkawinan di Indonesia, harta yang diperoleh selama perkawinan pada dasarnya menjadi harta bersama. Sementara itu, harta bawaan masing-masing pihak, serta harta yang diperoleh sebagai hadiah atau warisan, berada di bawah penguasaan pihak yang bersangkutan, kecuali para pihak menentukan lain.',
      'Perbedaan ini menjadi penting ketika terjadi perceraian atau sengketa waris, karena menentukan harta mana yang dibagi dan harta mana yang tetap menjadi milik pribadi. Sengketa sering muncul bukan karena aturannya tidak jelas, melainkan karena sulitnya membuktikan asal-usul suatu harta.',
      'Untuk mencegah perselisihan, pasangan dapat membuat perjanjian perkawinan. Putusan Mahkamah Konstitusi No. 69/PUU-XIII/2015 membuka kemungkinan perjanjian ini dibuat tidak hanya sebelum, tetapi juga selama perkawinan berlangsung. Menyimpan bukti kepemilikan dan asal harta sejak awal akan sangat membantu jika sengketa terjadi.',
    ],
  },
];

export const APPROACH_PRINCIPLES = [
  {
    number: '01',
    title: 'KERAHASIAAN MUTLAK',
    description: 'Segala informasi Klien wajib dijaga dan tidak boleh disebarluaskan kepada pihak ketiga tanpa persetujuan tertulis, kecuali ditentukan undang-undang.',
  },
  {
    number: '02',
    title: 'BEBAS DARI BENTURAN KEPENTINGAN',
    description: 'Tidak boleh menerima perkara yang berpotensi bertentangan dengan kepentingan Klien lain atau kepentingan pribadi.',
  },
  {
    number: '03',
    title: 'KEWAJIBAN MEMBERI INFORMASI',
    description: 'Memberitahukan perkembangan perkara secara berkala dan jujur kepada Klien.',
  },
  {
    number: '04',
    title: 'KEPATUHAN PADA ATURAN',
    description: 'Selalu tunduk pada Undang-Undang Nomor 18 Tahun 2003 tentang Advokat serta peraturan organisasI.',
  },
];

// -----------------------------------------------------------------------------
// 3D room experience (replaces the old hero + scroll image-sequence) — one
// entry per wall, in the order the user reaches them while swiping right:
// front -> right -> back -> left. `description` is rendered directly on top
// of the wall's photo (title + short body), so keep it brief.
// -----------------------------------------------------------------------------
export const ROOM_WALLS = [
  {
    id: 'front',
    label: 'Wall 01',
    eyebrow: 'WELCOME',
    title: 'LAPEASA ADVOKAT.',
    description:
      'Placeholder copy — replace with a sentence or two introducing the firm and what visitors should expect.',
    image: '/images/room/wall-front.webp',
    mask: '/images/room/masks/blob-0.png',
    // Not clickable yet — only "THE PRACTICE" wall links out for now.
    href: '',
  },
  {
    id: 'right',
    label: 'Wall 02',
    eyebrow: 'SERTIFIKASI',
    title: 'PROFESIONALITAS.',
    description:
      'Klik untuk melihat seluruh sertifikasi dan legalitas profesi yang kami miliki.',
    image: '/images/room/wall-right.webp',
    mask: '/images/room/masks/blob-1.png',
    // Clicking this wall (when centered) takes the visitor to /sertifikasi.
    href: '/sertifikasi',
  },
  {
    id: 'back',
    label: 'Wall 03',
    eyebrow: 'METODE PENANGANAN',
    title: 'Lebih cepat di tangani lebih Profesional Penanganannya',
    description:
      'Klik untuk melihat tahapan lengkap penanganan kasus kami, dari konsultasi awal hingga penyelesaian.',
    image: '/images/room/wall-back.webp',
    mask: '/images/room/masks/blob-2.png',
    // Clicking this wall (when centered) takes the visitor to the full
    // step-by-step method page.
    href: '/metode-penanganan',
  },
  {
    id: 'left',
    label: 'Wall 04',
    eyebrow: 'GALERI',
    title: 'Sekilas ruang dan suasana kerja kami.',
    description: 'Klik untuk melihat galeri foto kantor kami secara lengkap.',
    image: '/images/room/wall-left.webp',
    mask: '/images/room/masks/blob-3.png',
    // Clicking this wall (when centered) takes the visitor to the photo
    // gallery page.
    href: '/galeri',
  },
];

// -----------------------------------------------------------------------------
// Stats bar — shown on the homepage between "Tentang Kami" and "Visi Kami".
// The 5-star rating is rendered separately in StatsSection (it needs star
// icons, not just a number), so it isn't included in this array.
// -----------------------------------------------------------------------------
export const STATS = [
  { value: '25+', label: 'Tahun Pengalaman' },
  { value: '1.129+', label: 'Klien Terlayani' },
  { value: '99%', label: 'Tingkat Keberhasilan' },
];

export const ROOM_BACKGROUND = '/images/room/wall-bg.webp';

// -----------------------------------------------------------------------------
// /galeri — the photo gallery page the "GALERI" wall links to.
// `featured: true` on the first entry makes it render larger, full-width.
// -----------------------------------------------------------------------------
export const GALLERY_HEADER = {
  eyebrow: 'GALERI',
  tagline: 'Sekilas ruang dan suasana kerja kami',
};

export const GALLERY_IMAGES = [
  {
    image: '/images/room/wall-front.webp',
    caption: 'Ruang Tamu & Area Tunggu',
    featured: true,
  },
  {
    image: '/images/room/wall-right.webp',
    caption: 'Dinding Sertifikasi & Penghargaan',
  },
  {
    image: '/images/room/wall-back.webp',
    caption: 'Ruang Kerja Utama',
  },
  {
    image: '/images/room/wall-left.webp',
    caption: 'Pemandangan Kota dari Jendela Kantor',
  },
  {
    image: '/images/about/gambar1.jpg',
    caption: 'Meja Kerja Firma',
  },
  {
    image: '/images/sections/practice-areas-bg.webp',
    caption: 'Perlengkapan Kerja Tim Hukum',
  },
  {
    image: '/images/sections/approach-bg.webp',
    caption: 'Detail Interior Kantor',
  },
];

// -----------------------------------------------------------------------------
// /metode-penanganan — the step-by-step page the "THE PRACTICE" wall links to.
// NOTE: step 7's description below is copied verbatim from the reference
// image, but it's identical to step 2's text — almost certainly a copy/paste
// slip in the original mock. Left as-is for now; swap it out for real
// "closing & archiving" copy whenever you're ready (e.g. something about
// finalizing the case and handing over a complete file of documents).
// -----------------------------------------------------------------------------
export const METHOD_HEADER = {
  eyebrow: 'METODE KAMI',
  tagline: 'Lebih cepat di tangani lebih Profesional Penanganannya',
};

export const METHOD_STEPS = [
  {
    number: '1',
    label: 'IDENTIFIKASI MASALAH & KRONOLOGI',
    description:
      'Kami merumuskan masalah hukum Anda secara jelas dan menyusun urutan kejadian secara rapi, termasuk mengecek batas waktu hukum.',
  },
  {
    number: '2',
    label: 'INTAKE KLIEN & ENGAGEMENT',
    description:
      'Kami menerima cerita Anda, memeriksa apakah kami bisa menangani kasus ini, lalu menandatangani surat kuasa dan perjanjian kerja sama.',
  },
  {
    number: '3',
    label: 'VERIFIKASI BUKTI & DOCUMENT MANAGEMENT',
    description:
      'Kami mengumpulkan, memeriksa, dan mengelola semua bukti serta dokumen yang dibutuhkan agar kuat dan teratur.',
  },
  {
    number: '4',
    label: 'ANALISIS HUKUM & RISK MAPPING',
    description:
      'Kami menganalisis kasus Anda berdasarkan hukum yang berlaku, sekaligus memetakan kekuatan, kelemahan, dan risikonya.',
  },
  {
    number: '5',
    label: 'STRATEGI & ACTION PLAN',
    description:
      'Kami menyusun strategi terbaik dan membuat rencana kerja yang jelas, termasuk siapa yang bertanggung jawab dan kapan dikerjakan.',
  },
  {
    number: '6',
    label: 'PELAKSANAAN & MONITORING',
    description:
      'Kami menjalankan strategi tersebut dan terus memantau perkembangan kasus secara berkala.',
  },
  {
    number: '7',
    label: 'CLOSING & ARCHIVING',
    description:
      'Kami menerima cerita Anda, memeriksa apakah kami bisa menangani kasus ini, lalu menandatangani surat kuasa dan perjanjian kerja sama.',
  },
];

// -----------------------------------------------------------------------------
// /sertifikasi — the certifications page the "SERTIFIKASI" wall links to.
//
// Cara menambah foto sertifikat:
//   1. Simpan file di  public/images/certifications/  (mis. peradi.jpg)
//   2. Isi field `image` dengan path-nya: '/images/certifications/peradi.jpg'
// Foto otomatis ditampilkan penuh (tanpa terpotong) di dalam bingkai berukuran
// tetap, baik landscape maupun portrait, sehingga tata letak tidak bergeser.
// Biarkan `image: ''` untuk menampilkan placeholder.
//
// Untuk menambah sertifikasi ke-7 dst, cukup tambahkan satu objek baru.
// Semua teks di bawah ini adalah PLACEHOLDER — ganti dengan data asli.
// -----------------------------------------------------------------------------
export const CERTIFICATION_HEADER = {
  eyebrow: 'SERTIFIKASI',
  tagline: 'Legalitas dan kompetensi profesi yang mendasari setiap layanan kami',
};

export const CERTIFICATIONS: {
  title: string;
  issuer: string;
  year: string;
  number: string;
  image: string;
}[] = [
  { title: 'Nama Sertifikasi 1', issuer: 'Lembaga Penerbit', year: '2021', number: 'No. 000/000/2021', image: '' },
  { title: 'Nama Sertifikasi 2', issuer: 'Lembaga Penerbit', year: '2021', number: 'No. 000/000/2021', image: '' },
  { title: 'Nama Sertifikasi 3', issuer: 'Lembaga Penerbit', year: '2022', number: 'No. 000/000/2022', image: '' },
  { title: 'Nama Sertifikasi 4', issuer: 'Lembaga Penerbit', year: '2022', number: 'No. 000/000/2022', image: '' },
  { title: 'Nama Sertifikasi 5', issuer: 'Lembaga Penerbit', year: '2023', number: 'No. 000/000/2023', image: '' },
  { title: 'Nama Sertifikasi 6', issuer: 'Lembaga Penerbit', year: '2024', number: 'No. 000/000/2024', image: '' },
];
