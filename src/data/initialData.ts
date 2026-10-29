import {
  HeroData,
  ClientPartner,
  TeacherProfile,
  ServiceItem,
  ProgramKKG,
  LearningMaterial,
  ArticleInfo,
  ActivityPhoto,
  AgendaItem,
  Testimonial,
  SiteSettings
} from '../types';

export const initialHero: HeroData = {
  badge: "Pusat Kolaborasi Guru Olahraga Sekolah Dasar",
  title: "Papan Informasi & Transformasi Pembelajaran PJOK",
  highlightedText: "Kecamatan Pagu",
  description: "Wadah profesional guru Pendidikan Jasmani, Olahraga, dan Kesehatan tingkat Sekolah Dasar se-Kecamatan Pagu, Kabupaten Kediri. Mengembangkan kurikulum merdeka, modul ajar interaktif, kebugaran jasmani, dan prestasi atlet usia dini.",
  ctaPrimaryText: "Lihat Program KKG",
  ctaSecondaryText: "Download Perangkat Ajar",
  ctaPrimaryLink: "program-kkg",
  ctaSecondaryLink: "perangkat-pembelajaran",
  heroImage: "/src/assets/images/hero_sport_education_1793250246629.jpg",
 
  ]
};

export const initialTeachers: TeacherProfile[] = [
  {
    id: "t-1",
    name: "Drs. Kaseno, M.Pd.",
    role: "Pendamping",
    school: "Pengawas SD Korwilcam Pagu",
    nip: "19680415 199303 1 005",
    avatar: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=400",
    bio: "Pengawas Sekolah Pembina PJOK Kecamatan Pagu dengan pengalaman 28 tahun mengawal mutu pembelajaran dan supervisi akademik.",
    specialization: "Supervisi Pendidikan & Kebijakan Kurikulum"
  },
  {
    id: "t-2",
    name: "Sri Wahyuni, S.Pd., M.M.",
    role: "Pendamping",
    school: "Kepala SDN Pagu 1",
    nip: "19720918 199702 2 001",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    bio: "Kepala Sekolah Inti KKG PJOK yang aktif mendorong integrasi literasi fisik dan sarana olahraga berstandar ramah anak.",
    specialization: "Manajemen Sekolah & Budaya Olahraga"
  },
  {
    id: "t-3",
    name: "Bambang Sudarsono, S.Pd.Jas.",
    role: "Ketua",
    school: "SDN Pagu 1",
    nip: "19840212 200902 1 003",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    bio: "Ketua KKG PJOK SD Kecamatan Pagu periode 2024-2027. Pelatih Kids Athletics bersertifikat PASI Jawa Timur.",
    specialization: "Pengembangan Kurikulum Merdeka & Atletik"
  },
  {
    id: "t-4",
    name: "Ahmad Zainuri, S.Pd.Or.",
    role: "Wakil Ketua",
    school: "SDN Sitimerto",
    nip: "19870605 201101 1 008",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    bio: "Wakil Ketua KKG yang mengoordinasikan bidang kompetisi olahraga pelajar dan kemitraan antar gugus sekolah.",
    specialization: "Bola Voli & Pembinaan Atlet O2SN"
  },
  {
    id: "t-5",
    name: "Rini Astutik, S.Pd.",
    role: "Sekretaris 1",
    school: "SDN Menang",
    nip: "19910324 201903 2 012",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    bio: "Sekretaris 1 bertugas mengelola korespondensi dinas, notulensi bimtek, serta pengarsipan perangkat ajar KKG.",
    specialization: "Administrasi Pembelajaran & Senam Irama"
  },
  {
    id: "t-6",
    name: "Dimas Prasetyo, S.Pd.",
    role: "Sekretaris 2",
    school: "SDN Semen Pagu",
    nip: "19940810 202221 1 004",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
    bio: "Sekretaris 2 mengelola platform digital, media sosial, publikasi berita, dan dokumentasi foto kegiatan KKG.",
    specialization: "Teknologi Pembelajaran & Permainan Bola Kecil"
  },
  {
    id: "t-7",
    name: "Nurul Hidayati, S.Pd.SD.",
    role: "Bendahara 1",
    school: "SDN Tanjung",
    nip: "19881102 201402 2 006",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
    bio: "Bendahara 1 mengelola kas organisasi, anggaran penyelenggaraan workshop, dan transparansi laporan berkala.",
    specialization: "Akuntabilitas Keuangan & Kesehatan Anak"
  },
  {
    id: "t-8",
    name: "Eko Cahyono, S.Pd.",
    role: "Bendahara 2",
    school: "SDN Jagung",
    nip: "19920516 202012 1 007",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    bio: "Bendahara 2 bertugas dalam logistik perlengkapan olahraga, operasional seleksi O2SN, dan inventaris organisasi.",
    specialization: "Logistik Peralatan & Sepak Bola Dasar"
  }
];

export const initialServices: ServiceItem[] = [
  {
    id: "srv-1",
    slug: "workshop-kurikulum-merdeka-pjok",
    title: "Workshop & Bimtek Modul Ajar PJOK",
    category: "Kurikulum & Modul",
    summary: "Fasilitasi penyusunan modul ajar berdiferensiasi, Capaian Pembelajaran (CP), dan Alur Tujuan Pembelajaran (ATP) PJOK SD.",
    description: "Program berkala pendampingan guru PJOK di wilayah Kecamatan Pagu untuk menyusun perangkat ajar yang selaras dengan Kurikulum Merdeka. Membantu guru merancang asesmen diagnostik kebugaran, pembelajaran berdiferensiasi gerak, dan integrasi Profil Pelajar Pancasila dalam jam pelajaran olahraga.",
    benefits: [
      "Akses penuh bank modul ajar resmi kelas 1 sampai 6 SD format Microsoft Word & PDF",
      "Bimbingan langsung teknik merancang rubrik asesmen unjuk kerja psikomotorik",
      "Sertifikat kegiatan 32 JP yang diakui Dinas Pendidikan Kabupaten Kediri",
      "Template Alur Tujuan Pembelajaran (ATP) dan Program Semester siap pakai"
    ],
    gallery: [
      "/src/assets/images/kkg_teachers_meeting_1793250246883.jpg",
      "/src/assets/images/hero_sport_education_1793250246629.jpg"
    ],
    faqs: [
      {
        question: "Apakah guru non-PNS/PPPK bisa mengikuti workshop ini?",
        answer: "Ya, seluruh guru PJOK yang mengajar di Sekolah Dasar negeri maupun swasta se-Kecamatan Pagu wajib dan berhak mengikuti tanpa dipungut biaya registrasi tambahan."
      },
      {
        question: "Bagaimana cara mengunduh materi pasca workshop?",
        answer: "Peserta dapat langsung mengunduh materi melalui tab Perangkat Pembelajaran di portal ini atau folder Google Drive resmi KKG."
      }
    ],
    contactPerson: "Bambang Sudarsono, S.Pd.Jas. (Ketua KKG)",
    iconName: "BookOpen"
  },
  {
    id: "srv-2",
    slug: "pembinaan-dan-seleksi-o2sn-sd",
    title: "Pembinaan & Seleksi Kontingen O2SN SD",
    category: "Pelatihan Atletik & O2SN",
    summary: "Penyelenggaraan seleksi atletik, renang, bulu tangkis, dan pencak silat tingkat kecamatan menuju ajang O2SN Kabupaten Kediri.",
    description: "Kegiatan rutin tahunan untuk menjaring bibit atlet usia dini dari 28 Sekolah Dasar di Kecamatan Pagu. Dilengkapi dengan perangkat seleksi baku, timer elektronik standar, juri bersertifikat cabang olahraga, dan pembinaan berkala bagi kontingen terpilih.",
    benefits: [
      "Standar penjurian resmi mengacu pada juknis Pusat Prestasi Nasional (Puspresnas)",
      "Pencatatan rekor waktu dan jarak digital transparan bagi seluruh peserta sekolah",
      "Pendampingan psikologis dan gizi olahraga pra-kejuaraan tingkat kabupaten",
      "Piagam penghargaan resmi bertandatangan Koordinator Wilayah Pendidikan Pagu"
    ],
    gallery: [
      "/src/assets/images/elementary_sports_day_1793250248307.jpg",
      "/src/assets/images/gymnastics_field_pagu_1793250247785.jpg"
    ],
    faqs: [
      {
        question: "Apa saja cabang olahraga yang dipertandingkan dalam seleksi tingkat kecamatan?",
        answer: "Cabang wajib meliputi Kids Athletics (Formula 1 & Kanga's Escape), Renang Gaya Dada & Bebas 50m, Bulu Tangkis Tunggal Putra/Putri, dan Pencak Silat Seni Jurus Tunggal."
      },
      {
        question: "Berapa kuota peserta yang boleh dikirimkan oleh setiap SD?",
        answer: "Setiap sekolah diperbolehkan mengirimkan maksimal 2 perwakilan (1 putra dan 1 putri) pada masing-masing nomor cabang."
      }
    ],
    contactPerson: "Ahmad Zainuri, S.Pd.Or. (Koordinator Lomba)",
    iconName: "Trophy"
  },
  {
    id: "srv-3",
    slug: "klinik-asesmen-kebugaran-tkji-sd",
    title: "Klinik Asesmen Kebugaran Jasmani (TKJI)",
    category: "Konsultasi UKS & Kebugaran",
    summary: "Pelaksanaan dan konsultasi tes kebugaran jasmani Indonesia usia 6-12 tahun bekerjasama dengan Puskesmas Pagu.",
    description: "Membantu sekolah dasar di Kecamatan Pagu dalam mengukur indeks kebugaran jasmani peserta didik secara terstandar. Meliputi tes lari cepat, gantung siku tekuk, baring duduk 30 detik, loncat tegak, dan lari jarak sedang sesuai pedoman Kemenkes dan Kemendikbud.",
    benefits: [
      "Aplikasi kalkulator otomatis norma TKJI anak usia 6-9 tahun dan 10-12 tahun",
      "Rekomendasi intervensi aktivitas fisik bagi peserta didik kategori kurang bugar",
      "Sinergi pelaporan data kesehatan anak ke Usaha Kesehatan Sekolah (UKS) dan Puskesmas",
      "Laporan profil kebugaran per kelas untuk kebutuhan rapor pendidikan"
    ],
    gallery: [
      "/src/assets/images/gymnastics_field_pagu_1793250247785.jpg",
      "/src/assets/images/hero_sport_education_1793250246629.jpg"
    ],
    faqs: [
      {
        question: "Kapan periode pelaksanaan tes kebugaran jasmani diselenggarakan?",
        answer: "Dilaksanakan 2 kali setahun pada awal semester ganjil (bulan Agustus) dan awal semester genap (bulan Februari)."
      }
    ],
    contactPerson: "Nurul Hidayati, S.Pd.SD. (Divisi UKS & Kebugaran)",
    iconName: "HeartPulse"
  },
  {
    id: "srv-4",
    slug: "pendampingan-senam-dan-olahraga-tradisional",
    title: "Senam Bersama & Revitalisasi Olahraga Tradisional",
    category: "Pengembangan Profesi",
    summary: "Pelatihan Senam Kebugaran Jasmani (SKJ) Pelajar dan pelestarian gobak sodor, egrang, serta bentengan di sekolah.",
    description: "Gerakan pembiasaan hidup aktif dan sehat melalui senam pagi terstruktur serta pelestarian dolanan tradisional Jawa Timur yang sarat nilai gotong royong, ketangkasan, dan kebersamaan antar siswa.",
    benefits: [
      "Video panduan musik dan gerak SKJ Pelajar format Full HD bebas unduh",
      "Pedoman lapangan turnamen permainan tradisional antar kelas (Classmeeting)",
      "Peningkatan skor partisipasi fisik siswa perempuan dan laki-laki secara inklusif",
      "Penguatan dimensi kebhinekaan global dan gotong royong Profil Pelajar Pancasila"
    ],
    gallery: [
      "/src/assets/images/gymnastics_field_pagu_1793250247785.jpg",
      "/src/assets/images/elementary_sports_day_1793250248307.jpg"
    ],
    faqs: [
      {
        question: "Apakah peralatan olahraga tradisional disubsidi oleh KKG?",
        answer: "KKG menyediakan panduan pembuatan alat mandiri (misal egrang bambu dan bakiak kayu) serta meminjamkan sarana untuk event classmeeting gabungan."
      }
    ],
    contactPerson: "Dimas Prasetyo, S.Pd. (Sekretaris KKG)",
    iconName: "Activity"
  }
];

export const initialPrograms: ProgramKKG[] = [
  {
    id: "prg-1",
    slug: "bimtek-modul-ajar-pjok-fase-a-b-c",
    title: "Bimtek Pembuatan Modul Ajar PJOK Berdiferensiasi Fase A, B, dan C",
    category: "Bimtek & Workshop",
    date: "14 November 2026",
    time: "08.00 - 13.00 WIB",
    location: "Aula Pertemuan SDN Pagu 1",
    driveLink: "https://drive.google.com/drive/folders/1KKG-PJOK-PAGU-MODUL-2026",
    description: "Kegiatan bedah kurikulum merdeka PJOK SD berfokus pada diferensiasi konten gerak sesuai tahap perkembangan motorik siswa kelas 1 hingga 6. Seluruh materi dan template slide presentasi narasumber dapat diakses via Google Drive KKG.",
    status: "Akan Datang",
    targetParticipants: "16 Guru PJOK SD Negeri & Swasta se-Kecamatan Pagu",
    materials: [
      { title: "Buku Pedoman CP & ATP PJOK Fase A-B-C.pdf", size: "4.2 MB", link: "https://drive.google.com" },
      { title: "Template Modul Ajar Berdiferensiasi.docx", size: "1.8 MB", link: "https://drive.google.com" },
      { title: "Rubrik Penilaian Unjuk Kerja Siswa SD.xlsx", size: "950 KB", link: "https://drive.google.com" }
    ],
    image: "/src/assets/images/kkg_teachers_meeting_1793250246883.jpg"
  },
  {
    id: "prg-2",
    slug: "seleksi-atletik-o2sn-sd-pagu-2026",
    title: "Seleksi Terbuka Kids Athletics & Cabang Olahraga O2SN SD 2026",
    category: "Kompetisi O2SN",
    date: "28 November 2026",
    time: "07.00 - 14.30 WIB",
    location: "Lapangan Sepak Bola Desa Menang, Kec. Pagu",
    driveLink: "https://drive.google.com/drive/folders/1KKG-PJOK-O2SN-PAGU-JUKNIS",
    description: "Penyelenggaraan seleksi atletik tingkat sekolah dasar se-Kecamatan Pagu. Mempertandingkan nomor Kanga's Escape, Frog Jump, Turbo Throwing, dan Formula 1 lari halang rintang.",
    status: "Akan Datang",
    targetParticipants: "Kontingen Atlet Siswa Kelas 4 & 5 dari 19 SD",
    materials: [
      { title: "Juknis Resmi O2SN Tingkat Kecamatan Pagu.pdf", size: "2.6 MB", link: "https://drive.google.com" },
      { title: "Formulir Biodata Atlet & Surat Izin Wali.docx", size: "640 KB", link: "https://drive.google.com" },
      { title: "Daftar Jadwal Tanding & Drawing Peserta.pdf", size: "1.1 MB", link: "https://drive.google.com" }
    ],
    image: "/src/assets/images/elementary_sports_day_1793250248307.jpg"
  },
  {
    id: "prg-3",
    slug: "senam-sehat-ceria-hari-guru-pagu",
    title: "Gebyar Senam Pagi Bersama 500 Guru & Siswa Sekolah Dasar Pagu",
    category: "Senam & Kebugaran Massal",
    date: "05 Desember 2026",
    time: "06.30 - 09.30 WIB",
    location: "Halaman SDN Tanjung, Kec. Pagu",
    driveLink: "https://drive.google.com/drive/folders/1KKG-SENAM-PAGU-CERIA-2026",
    description: "Kegiatan massal meningkatkan keakraban keluarga besar pendidik SD se-Kecamatan Pagu diiringi musik senam kreasi nusantara dan pemeriksaan tekanan darah bekerjasama dengan Puskesmas.",
    status: "Akan Datang",
    targetParticipants: "Seluruh Pendidik, Tenaga Kependidikan, dan Perwakilan Siswa",
    materials: [
      { title: "Audio Musik SKJ Pelajar 2022 Versi Kemendikbud.mp3", size: "8.5 MB", link: "https://drive.google.com" },
      { title: "Panduan Gerakan Senam Kreasi Nusantara.pdf", size: "3.4 MB", link: "https://drive.google.com" }
    ],
    image: "/src/assets/images/gymnastics_field_pagu_1793250247785.jpg"
  },
  {
    id: "prg-4",
    slug: "rapat-evaluasi-kinerja-kkg-pjok-tahunan",
    title: "Rapat Koordinasi & Evaluasi Program Kerja KKG PJOK Pagu",
    category: "Rapat Rutin",
    date: "19 Desember 2026",
    time: "09.00 - 12.00 WIB",
    location: "Ruang Guru SDN Sitimerto",
    driveLink: "https://drive.google.com/drive/folders/1KKG-PJOK-RAPAT-EVALUASI",
    description: "Evaluasi capaian program semester ganjil, transparansi kas keuangan organisasi KKG, penyusunan rancangan turnamen bola voli antar gugus semester genap, dan peremajaan inventaris alat peraga olahraga.",
    status: "Akan Datang",
    targetParticipants: "Pengurus Harian & Anggota KKG PJOK Kec. Pagu",
    materials: [
      { title: "Laporan Pertanggungjawaban Kegiatan Semester Ganjil.pdf", size: "3.1 MB", link: "https://drive.google.com" },
      { title: "Draft Rencana Kerja Tahunan 2027.xlsx", size: "820 KB", link: "https://drive.google.com" }
    ],
    image: "/src/assets/images/kkg_teachers_meeting_1793250246883.jpg"
  }
];

export const initialMaterials: LearningMaterial[] = [
  {
    id: "mat-1",
    grade: "Kelas 1",
    category: "Modul Ajar",
    title: "Modul Ajar PJOK Kelas 1: Aktivitas Pola Gerak Dasar Lokomotor",
    summary: "Panduan pembelajaran berjalan, berlari, melompat, dan meloncat dengan permainan menyenangkan berbasis karakter Profil Pelajar Pancasila.",
    author: "Rini Astutik, S.Pd.",
    schoolOrigin: "SDN Menang Pagu",
    date: "12 Oktober 2026",
    fileSize: "2.8 MB",
    downloadUrl: "https://drive.google.com/file/d/1modul_pjok_kelas1_pagu/view",
    thumbnail: "/src/assets/images/hero_sport_education_1793250246629.jpg",
    downloadsCount: 342
  },
  {
    id: "mat-2",
    grade: "Kelas 2",
    category: "Modul Ajar",
    title: "Modul Ajar PJOK Kelas 2: Gerak Manipulatif Melempar & Menangkap Bola",
    summary: "Aktivitas lempar tangkap bola kecil dan bola besar berpasangan serta dalam lingkaran untuk mengasah koordinasi mata dan tangan anak.",
    author: "Dimas Prasetyo, S.Pd.",
    schoolOrigin: "SDN Semen Pagu",
    date: "16 Oktober 2026",
    fileSize: "3.1 MB",
    downloadUrl: "https://drive.google.com/file/d/1modul_pjok_kelas2_pagu/view",
    thumbnail: "/src/assets/images/elementary_sports_day_1793250248307.jpg",
    downloadsCount: 289
  },
  {
    id: "mat-3",
    grade: "Kelas 3",
    category: "ATP & CP",
    title: "Alur Tujuan Pembelajaran & Asesmen PJOK Fase B Kelas 3",
    summary: "Pemetaan Capaian Pembelajaran (CP) elemen keterampilan gerak, pengetahuan gerak, pemanfaatan gerak, dan pengembangan karakter.",
    author: "Bambang Sudarsono, S.Pd.Jas.",
    schoolOrigin: "SDN Pagu 1",
    date: "20 Oktober 2026",
    fileSize: "1.9 MB",
    downloadUrl: "https://drive.google.com/file/d/1atp_pjok_faseb_pagu/view",
    thumbnail: "/src/assets/images/kkg_teachers_meeting_1793250246883.jpg",
    downloadsCount: 512
  },
  {
    id: "mat-4",
    grade: "Kelas 4",
    category: "Modul Ajar",
    title: "Modul Ajar PJOK Kelas 4: Permainan Bola Voli Mini & Passing Bawah",
    summary: "Teknik dasar passing bawah bola voli mini dengan pendekatan game-based learning, pembentukan sikap saling percaya dan kekompakan tim.",
    author: "Ahmad Zainuri, S.Pd.Or.",
    schoolOrigin: "SDN Sitimerto",
    date: "22 Oktober 2026",
    fileSize: "4.5 MB",
    downloadUrl: "https://drive.google.com/file/d/1modul_voli_kelas4_pagu/view",
    thumbnail: "/src/assets/images/hero_sport_education_1793250246629.jpg",
    downloadsCount: 420
  },
  {
    id: "mat-5",
    grade: "Kelas 5",
    category: "Instrumen Tes Kebugaran",
    title: "Instrumen & Aplikasi Excel Norma Tes Kebugaran Jasmani Indonesia (TKJI)",
    summary: "Blanko penilaian otomatis norma kebugaran jasmani anak usia 10-12 tahun. Mengkonversi otomatis nilai lari 40m, pull-up, sit-up, vertical jump, dan lari 600m.",
    author: "Nurul Hidayati, S.Pd.SD.",
    schoolOrigin: "SDN Tanjung",
    date: "25 Oktober 2026",
    fileSize: "1.2 MB",
    downloadUrl: "https://drive.google.com/file/d/1tkji_excel_pagu/view",
    thumbnail: "/src/assets/images/gymnastics_field_pagu_1793250247785.jpg",
    downloadsCount: 680
  },
  {
    id: "mat-6",
    grade: "Kelas 6",
    category: "Modul P5 PJOK",
    title: "Modul P5 Bangunlah Jiwa dan Raganya: Pola Hidup Sehat & Gizi Seimbang",
    summary: "Projek penguatan Profil Pelajar Pancasila tematik kesehatan diri, pencegahan anemia, pemilihan jajanan sehat sekolah, dan kebiasaan cuci tangan.",
    author: "Eko Cahyono, S.Pd.",
    schoolOrigin: "SDN Jagung",
    date: "27 Oktober 2026",
    fileSize: "3.7 MB",
    downloadUrl: "https://drive.google.com/file/d/1modul_p5_pjok_pagu/view",
    thumbnail: "/src/assets/images/kkg_teachers_meeting_1793250246883.jpg",
    downloadsCount: 395
  }
];

export const initialArticles: ArticleInfo[] = [
  {
    id: "art-1",
    slug: "kontingen-pagu-raih-prestasi-o2sn-kediri",
    title: "Kontingen SD Kecamatan Pagu Boyong 3 Medali Emas di Ajang O2SN Kabupaten Kediri",
    category: "Berita Prestasi",
    summary: "Prestasi gemilang ditorehkan atlet cilik asal SDN Pagu 1 dan SDN Menang pada cabang Kids Athletics dan Bulu Tangkis tingkat Kabupaten Kediri.",
    content: "PAGU — Prestasi membanggakan kembali dipersembahkan oleh para peserta didik Sekolah Dasar se-Kecamatan Pagu dalam ajang Olimpiade Olahraga Siswa Nasional (O2SN) tingkat Kabupaten Kediri tahun ini. Bertanding di Stadion Canda Bhirawa Pare, kontingen Kecamatan Pagu berhasil memboyong 3 medali emas pada nomor Kids Athletics (Formula 1 Putra dan Lempar Turbo Putri) serta Tunggal Putra Bulu Tangkis.\n\nKetua KKG PJOK SD Kecamatan Pagu, Bambang Sudarsono, S.Pd.Jas., menyampaikan apresiasi setinggi-tingginya kepada seluruh guru pendamping dan atlet yang telah berlatih disiplin selama tiga bulan terakhir. 'Kunci kemenangan ini berakar pada pembinaan intensif di gugus sekolah serta keseragaman metode pelatihan motorik yang kita sepakati dalam forum KKG bulanan,' tuturnya.",
    author: "Dimas Prasetyo, S.Pd.",
    date: "24 Oktober 2026",
    readTime: "3 menit baca",
    thumbnail: "/src/assets/images/elementary_sports_day_1793250248307.jpg",
    tags: ["O2SN SD", "Prestasi Atletik", "Pagu Juara", "Kids Athletics"]
  },
  {
    id: "art-2",
    slug: "peluncuran-bank-modul-ajar-digital-pjok-pagu",
    title: "KKG PJOK Pagu Resmi Luncurkan Bank Modul Ajar Digital Berbasis Cloud",
    category: "Sosialisasi Kurikulum",
    summary: "Portal informasi KKG PJOK Pagu kini memfasilitasi guru mengunduh ratusan dokumen silabus, modul ajar, dan lembar kerja secara gratis dan transparan.",
    content: "PAGU — Sebagai wujud transformasi digital pendidikan jasmani di era Kurikulum Merdeka, pengurus KKG PJOK SD Kecamatan Pagu resmi meluncurkan portal bank modul ajar mandiri. Terobosan ini lahir dari evaluasi supervisi akademik bersama Pengawas SD Korwilcam Pagu yang mendapati perlunya keseragaman standar materi gerak dan instrumen asesmen diagnostik di 19 SD se-kecamatan.\n\nDengan hadirnya platform ini, para guru dapat mengunduh format dokumen editable (Word & Excel) yang langsung dapat disesuaikan dengan kondisi sarana olahraga masing-masing sekolah, baik sekolah yang memiliki lapangan luas maupun yang memanfaatkan ruang terbuka terbatas.",
    author: "Rini Astutik, S.Pd.",
    date: "18 Oktober 2026",
    readTime: "4 menit baca",
    thumbnail: "/src/assets/images/kkg_teachers_meeting_1793250246883.jpg",
    tags: ["Modul Ajar PJOK", "Kurikulum Merdeka", "Digitalisasi Pendidikan", "Literasi Fisik"]
  },
  {
    id: "art-3",
    slug: "hasil-skrining-tkji-sd-pagu-meningkat",
    title: "Hasil Skrining Kebugaran Jasmani Siswa SD Se-Kecamatan Pagu Menunjukkan Tren Positif",
    category: "Kesehatan & Gizi",
    summary: "Kerjasama KKG PJOK bersama Puskesmas Pagu mencatat 78% siswa berada dalam kategori bugar dan cukup bugar pasca revitalisasi senam pagi.",
    content: "PAGU — Laporan hasil evaluasi Tes Kebugaran Jasmani Indonesia (TKJI) periode semester ganjil pada 1.840 siswa kelas 4, 5, dan 6 di Kecamatan Pagu mencatatkan peningkatan signifikan. Berdasarkan data rekapitulasi, persentase peserta didik dengan kategori bugar melonjak dari 62% tahun lalu menjadi 78% pada tahun ini.\n\nFaktor pendorong utama keberhasilan ini adalah komitmen seluruh kepala sekolah di Kecamatan Pagu yang mewajibkan pembiasaan senam ceria 15 menit setiap hari Selasa dan Jumat sebelum jam pelajaran dimulai, serta pembatasan peredaran makanan tinggi gula di kantin sekolah.",
    author: "Nurul Hidayati, S.Pd.SD.",
    date: "10 Oktober 2026",
    readTime: "3 menit baca",
    thumbnail: "/src/assets/images/gymnastics_field_pagu_1793250247785.jpg",
    tags: ["TKJI SD", "Kebugaran Jasmani", "UKS Puskesmas", "Kesehatan Anak"]
  },
  {
    id: "art-4",
    slug: "gebyar-senam-kreasi-pagu-sukseskan-hgn",
    title: "Semarak Gebyar Senam Kreasi Nusantara Pendidik Olahraga SD Pagu",
    category: "Berita Prestasi",
    summary: "Ratusan guru berpadu gerak menampilkan harmoni senam tradisional bernuansa kearifan lokal Kediri.",
    content: "PAGU — Lapangan olahraga Desa Menang dipadati ratusan insan pendidikan jasmani dalam gelaran Gebyar Senam Kreasi Nusantara. Kegiatan ini bertujuan mempererat tali silaturahmi antar guru penjas sekaligus mengkampanyekan pentingnya kebugaran bagi tenaga pendidik sebagai teladan bagi murid-murid di sekolah.",
    author: "Ahmad Zainuri, S.Pd.Or.",
    date: "02 Oktober 2026",
    readTime: "2 menit baca",
    thumbnail: "/src/assets/images/hero_sport_education_1793250246629.jpg",
    tags: ["Senam Nusantara", "Hari Guru", "Kebersamaan", "Olahraga Sehat"]
  }
];

export const initialActivities: ActivityPhoto[] = [
  {
    id: "act-1",
    title: "Workshop Penyusunan Perangkat Ajar PJOK Berdiferensiasi",
    category: "Workshop Guru",
    date: "12 Oktober 2026",
    location: "Aula SDN Pagu 1",
    image: "/src/assets/images/kkg_teachers_meeting_1793250246883.jpg",
    description: "Pertemuan rutin guru penjas se-kecamatan menyusun rubrik asesmen psikomotorik dan lembar kerja siswa Kurikulum Merdeka."
  },
  {
    id: "act-2",
    title: "Babak Final Sprint 60 Meter Kids Athletics O2SN SD Pagu",
    category: "Lomba O2SN SD",
    date: "24 September 2026",
    location: "Lapangan Sepak Bola Menang",
    image: "/src/assets/images/elementary_sports_day_1793250248307.jpg",
    description: "Atmosfer kompetisi lari cepat putra-putri antar gugus sekolah dasar dalam seleksi kontingen O2SN Kecamatan Pagu."
  },
  {
    id: "act-3",
    title: "Senam Kebugaran Jasmani Pelajar Pagi Ceria Bersama",
    category: "Senam Bersama",
    date: "05 September 2026",
    location: "Halaman SDN Tanjung",
    image: "/src/assets/images/gymnastics_field_pagu_1793250247785.jpg",
    description: "Praktik senam serentak seluruh dewan guru dan perwakilan siswa memperingati Hari Olahraga Nasional (HAORNAS)."
  },
  {
    id: "act-4",
    title: "Pelatihan Teknik Lempar Tangkap & Kids Athletics Guru SD",
    category: "Uji Kebugaran Siswa",
    date: "18 Agustus 2026",
    location: "SDN Sitimerto",
    image: "/src/assets/images/hero_sport_education_1793250246629.jpg",
    description: "Simulasi pembelajaran variasi gerak dasar lokomotor dan manipulatif dengan media alat bantu ramah anak."
  }
];

export const initialAgenda: AgendaItem[] = [
  {
    id: "agn-1",
    title: "Workshop Modul Ajar PJOK Fase A, B, C & Pembuatan Media Ajar",
    category: "Bimtek Akademik",
    date: "14 November 2026",
    time: "08.00 - 13.00 WIB",
    venue: "Aula SDN Pagu 1",
    hostSchool: "SDN Pagu 1",
    speaker: "Bambang Sudarsono, S.Pd.Jas. & Tim Kurikulum",
    dressCode: "Kaos Training Resmi KKG PJOK Pagu / Training Olahraga",
    status: "Mendatang",
    description: "Membawa laptop masing-masing dan draft modul ajar semester ganjil untuk diselaraskan dengan format KKG.",
    registrationOpen: true
  },
  {
    id: "agn-2",
    title: "Simulasi & Pelaksanaan Seleksi Terbuka O2SN SD Cabang Kids Athletics",
    category: "Kompetisi Siswa",
    date: "28 November 2026",
    time: "07.00 - 14.30 WIB",
    venue: "Lapangan Olahraga Desa Menang",
    hostSchool: "SDN Menang",
    speaker: "Ahmad Zainuri, S.Pd.Or. (Technical Delegate)",
    dressCode: "Jersey Olahraga Lengkap & Sepatu Lari",
    status: "Mendatang",
    description: "Setiap sekolah mengirimkan data atlet terdaftar beserta surat keterangan sehat dari Puskesmas atau dokter.",
    registrationOpen: true
  },
  {
    id: "agn-3",
    title: "Gebyar Senam Kebugaran Jasmani & Skrining Kesehatan Guru",
    category: "Kebugaran & Sosial",
    date: "05 Desember 2026",
    time: "06.30 - 10.00 WIB",
    venue: "Halaman SDN Tanjung",
    hostSchool: "SDN Tanjung",
    speaker: "Tim Dokter Puskesmas Pagu & Instruktur SKJ",
    dressCode: "Seragam Senam Bebas Rapi",
    status: "Mendatang",
    description: "Kegiatan senam massal dilanjutkan pemeriksaan gula darah dan tensi gratis bagi guru.",
    registrationOpen: true
  },
  {
    id: "agn-4",
    title: "Rapat Pleno Akhir Tahun & Pertanggungjawaban Program Kerja",
    category: "Rapat Organisasi",
    date: "19 Desember 2026",
    time: "09.00 - 12.00 WIB",
    venue: "Ruang Guru SDN Sitimerto",
    hostSchool: "SDN Sitimerto",
    speaker: "Pengurus Harian KKG PJOK",
    dressCode: "Batik PGRI / Pakaian Dinas",
    status: "Mendatang",
    description: "Penyusunan kalender program semester genap dan laporan kas keuangan akhir tahun.",
    registrationOpen: false
  }
];

export const initialTestimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Drs. H. Mulyadi, M.Pd.",
    role: "Pengawas SD Korwilcam Pagu",
    school: "Dinas Pendidikan Kab. Kediri",
    quote: "KKG PJOK Kecamatan Pagu adalah salah satu kelompok kerja guru paling progresif di Kabupaten Kediri. Inovasi bank modul ajar digital ini sangat memudahkan supervisi dan menjamin mutu pembelajaran fisik anak.",
    avatar: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=200",
    rating: 5
  },
  {
    id: "test-2",
    name: "Sri Wahyuni, S.Pd., M.M.",
    role: "Kepala Sekolah",
    school: "SDN Pagu 1",
    quote: "Kolaborasi yang terjalin antar guru penjas di Pagu sangat solid. Anak-anak kami semakin antusias mengikuti jam olahraga karena materi yang disajikan selalu bervariasi dan penuh keceriaan.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    rating: 5
  },
  {
    id: "test-3",
    name: "Budi Santoso, S.Pd.",
    role: "Guru PJOK Anggota",
    school: "SDN Bendo Pagu",
    quote: "Sebagai guru muda, saya sangat terbantu dengan bimbingan senior di KKG Pagu. Modul dan ATP yang disediakan di portal ini sangat aplikatif untuk sekolah dengan lapangan terbatas sekalipun.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    rating: 5
  }
];

export const initialSettings: SiteSettings = {
  siteName: "KKG PJOK SD KECAMATAN PAGU",
  subTitle: "Kelompok Kerja Guru Pendidikan Jasmani Olahraga dan Kesehatan",
  tagline: "Sport Education, Kesehatan, Karakter, dan Prestasi Anak Sekolah Dasar",
  phone: "+62 812-3456-7890",
  whatsapp: "6281234567890",
  email: "pjokkecpagu@gmail.com",
  address: "Sekretariat KKG PJOK: SDN Pagu 1, Jl. Raya Pagu No. 45, Kecamatan Pagu, Kabupaten Kediri, Jawa Timur 64183",
  workingHours: "Senin - Sabtu: 07.30 - 15.00 WIB",
  primaryColor: "#1D4ED8",
  accentColor: "#DC2626",
  facebookUrl: "https://facebook.com/kkgpjokpagu",
  instagramUrl: "https://instagram.com/kkgpjokpagu",
  youtubeUrl: "https://youtube.com/@kkgpjokpagu",
  telegramUrl: "https://t.me/kkgpjokpagu",
  metaTitle: "KKG PJOK SD KECAMATAN PAGU – Portal Resmi & Papan Informasi Guru Olahraga",
  metaDescription: "Portal Resmi Papan Informasi KKG PJOK SD Kecamatan Pagu, Kabupaten Kediri. Pusat download perangkat pembelajaran, modul ajar kurikulum merdeka, jadwal agenda, dan berita prestasi olahraga.",
  metaKeywords: "KKG PJOK, Guru PJOK Pagu, PJOK SD Kecamatan Pagu, Kabupaten Kediri, Modul Ajar PJOK, O2SN Pagu, Perangkat Pembelajaran PJOK"
};
