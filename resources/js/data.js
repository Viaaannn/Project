export const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&q=80&w=1200',
  pesantren: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=1200',
  quran: 'https://images.unsplash.com/photo-1609599006353-e629f1d50218?auto=format&fit=crop&q=80&w=800',
  classroom: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800',
  library: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800',
  computer: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
  sports: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800',
  laboratory: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=800',
  dormitory: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800',
  ceremony: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800',
};

export const STATS = {
  santriAktif: 850,
  tenagaPengajar: 42,
  programUnggulan: 6,
  akreditasi: 'A',
};

export const FACILITIES = [
  { icon: 'Landmark', title: 'Masjid Jami', desc: 'Masjid dua lantai berkapasitas 1.000 jamaah untuk shalat berjamaah dan kajian kitab kuning.' },
  { icon: 'Bed', title: 'Asrama Putra', desc: 'Kamar asrama ber-AC dengan kasur spring bed, lemari individu, dan kamar mandi dalam.' },
  { icon: 'FlaskConical', title: 'Lab Sains', desc: 'Laboratorium IPA terpadu untuk praktikum biologi, fisika, dan kimia.' },
  { icon: 'BookOpen', title: 'Perpustakaan', desc: 'Koleksi ribuan kitab kuning, buku pelajaran, dan literatur Islam kontemporer.' },
  { icon: 'Monitor', title: 'Lab Komputer', desc: '30 unit komputer dengan akses internet terbatas untuk pembelajaran TIK dan robotik.' },
  { icon: 'Stethoscope', title: 'Klinik Santri', desc: 'Klinik 24 jam dengan tenaga perawat dan dokter yang siap melayani kesehatan santri.' },
];

export const MANAGEMENT = [
  { name: 'KH. Dr. M. Syarifuddin, M.A.', role: 'Pimpinan Pondok', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200&fit=crop' },
  { name: 'Ust. H. Ahmad Zainuddin, Lc.', role: 'Kepala Madrasah MA', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200&fit=crop' },
  { name: 'Ust. Drs. H. Mahmud Faqih', role: 'Kepala Sekolah SMP', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200&fit=crop' },
  { name: 'Ust. Syaifullah, S.Pd.I.', role: 'Waka Kurikulum', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=200&fit=crop' },
  { name: 'Ust. Ali Nurdin, S.Pd.', role: 'Waka Kesiswaan', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=200&h=200&fit=crop' },
  { name: 'Ust. M. Ridwan, S.Kom.', role: 'Kepala TU & Humas', image: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&q=80&w=200&h=200&fit=crop' },
];

export const GALLERY_DATA = {
  foto: [
    { src: IMAGES.pesantren, caption: 'Kegiatan Belajar Mengajar di Kelas' },
    { src: IMAGES.quran, caption: 'Santri Menghafal Al-Quran' },
    { src: IMAGES.sports, caption: 'Pertandingan Futsal Antar Santri' },
    { src: IMAGES.laboratory, caption: 'Praktikum Kimia di Laboratorium' },
    { src: IMAGES.library, caption: 'Suasana Membaca di Perpustakaan' },
    { src: IMAGES.classroom, caption: 'Kelas Interaktif MA Darul Akhyar' },
    { src: IMAGES.dormitory, caption: 'Asrama Santri yang Nyaman' },
    { src: IMAGES.ceremony, caption: 'Upacara Bendera Hari Senin' },
  ],
  video: [
    { id: 'video-1', title: 'Profil Pondok Pesantren Darul Akhyar', embedId: 'dQw4w9WgXcQ' },
    { id: 'video-2', title: 'Kegiatan Tahfidz Al-Quran', embedId: 'dQw4w9WgXcQ' },
    { id: 'video-3', title: 'Wisuda Santri Kelas XII', embedId: 'dQw4w9WgXcQ' },
    { id: 'video-4', title: 'Pembukaan PPDB Tahun Ajaran Baru', embedId: 'dQw4w9WgXcQ' },
  ],
};

export const PPDB_FEES = [
  { item: 'Biaya Pendaftaran & Seleksi', amount: 'Rp 250.000', type: 'Sekali' },
  { item: 'Uang Pangkal Pembangunan', amount: 'Rp 2.000.000', type: 'Sekali' },
  { item: 'Paket Seragam & Perlengkapan', amount: 'Rp 1.500.000', type: 'Sekali' },
  { item: 'Buku Paket & Modul Belajar', amount: 'Rp 750.000', type: 'Sekali' },
  { item: 'Kasur Spring Bed & Lemari', amount: 'Rp 1.250.000', type: 'Sekali' },
  { item: 'SPP Bulanan (termasuk makan asrama)', amount: 'Rp 3.000.000', type: 'Bulanan' },
];

export const REQUIREMENTS_SMP = [
  'Scan Akta Kelahiran (max 2 MB, PDF/JPG)',
  'Scan Kartu Keluarga (max 2 MB, PDF/JPG)',
  'Pas Foto 3x4 formal latar merah/biru (max 500 KB, JPG)',
  'Scan Ijazah SD atau Surat Keterangan Lulus (max 2 MB, PDF)',
  'Scan KTP Orang Tua (Ayah atau Ibu) (max 2 MB, PDF/JPG)',
];

export const REQUIREMENTS_MA = [
  'Scan Akta Kelahiran (max 2 MB, PDF/JPG)',
  'Scan Kartu Keluarga (max 2 MB, PDF/JPG)',
  'Pas Foto 3x4 formal latar merah/biru (max 500 KB, JPG)',
  'Scan Ijazah SMP/MTs atau SKL (max 2 MB, PDF)',
  'Scan KTP Orang Tua (Ayah atau Ibu) (max 2 MB, PDF/JPG)',
];

export const GENERAL_REQUIREMENTS = [
  'Berjenis kelamin Laki-laki (khusus putra)',
  'Sehat jasmani dan rohani',
  'Mampu membaca Al-Quran dengan tartil',
  'Bersedia mengikuti seluruh aturan dan tata tertib pondok',
  'Mendapat izin dan dukungan penuh dari orang tua/wali',
];
