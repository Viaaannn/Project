import { useState } from 'react';
import { Link, Head } from '@inertiajs/react';
import FrontLayout from '@/Layouts/FrontLayout';
import { CheckCircle2, ChevronDown, ChevronUp, ChevronRight, GraduationCap, Users, BookMarked, School, ArrowRight } from 'lucide-react';
import { IMAGES } from '@/data';

const EKSKUL_DATA = [
  { id: 'eks-1', name: 'Pramuka', description: 'Kegiatan pramuka dilaksanakan setiap hari Sabtu sore di lapangan utama pesantren.', isActive: true, program: 'Keduanya' },
  { id: 'eks-2', name: 'Pencak Silat', description: 'Beladiri tradisional melatih mental tangguh dan fisik prima santri.', isActive: true, program: 'Keduanya' },
  { id: 'eks-3', name: 'Futsal Club', description: 'Pertandingan futsal antar kelas setiap pekan guna mengasah kerjasama tim.', isActive: true, program: 'Keduanya' },
  { id: 'eks-4', name: 'Kaligrafi (Khath)', description: 'Seni menulis indah ayat-ayat Al-Quran menggunakan media kanvas dan kertas.', isActive: true, program: 'SMP' },
  { id: 'eks-5', name: 'Muhadhoroh 3 Bahasa', description: 'Latihan berdakwah dan public speaking menggunakan Bahasa Arab, Inggris, dan Indonesia.', isActive: true, program: 'Keduanya' },
  { id: 'eks-6', name: 'Jurnalistik Santri', description: 'Pelatihan menulis berita, artikel opini, dan desain grafis majalah dinding pesantren.', isActive: true, program: 'MA' },
  { id: 'eks-7', name: 'Robotik & Coding', description: 'Ekskul kreatif merakit mikrokontroler dan pemrograman dasar untuk tantangan sains.', isActive: true, program: 'MA' },
  { id: 'eks-8', name: 'Qiraatul Quran', description: 'Memperindah bacaan Al-Quran dengan lagam dan tartil yang fasih sesuai riwayat.', isActive: true, program: 'Keduanya' },
];

const programsData = {
  SMP: {
    title: 'SMP Darul Akhyar',
    level: 'Sekolah Menengah Pertama (SMP)',
    tagline: 'Membangun Karakter Qurani Sejak Dini',
    image: IMAGES.classroom,
    description: 'Pendidikan jenjang Sekolah Menengah Pertama (SMP) Darul Akhyar mengintegrasikan secara penuh Kurikulum Nasional Kemendikbudristek dengan Kurikulum Kepesantrenan tradisional-modern. Santri dibina secara khusus untuk menguasai dasar-dasar ilmu syar\'i, ibadah harian berdisiplin tinggi, serta akselerasi hafalan Al-Quran juz-juz awal secara lancar dan beradab.',
    stats: { santri: '420', ustadz: '18', kelas: '12 Ruang Kelas AC' },
    keunggulan: [
      'Target Hafalan Al-Quran minimal 3 Juz lancar (mutqin) saat kelulusan.',
      'Pembinaan Adab, Aqidah Akhlak, dan Fiqih Ibadah Praktis harian.',
      'Pengenalan Muhadhoroh (latihan pidato) 3 Bahasa (Arab, Inggris, Indonesia).',
      'Pendampingan intensif bimbingan asrama 24 jam oleh pengawas asatidzah.',
      'Akses teknologi informatika dasar terpadu di laboratorium komputer.'
    ],
    kurikulum: {
      agama: ['Tahfidz & Tajwid Al-Quran', 'Aqidah Akhlak (Kitab Taisirul Kholaq)', 'Fiqih Ibadah (Kitab Safinatun Najah)', 'Tarikh Islam (Sejarah Nabi)', 'Bahasa Arab Dasar'],
      umum: ['Matematika', 'IPA Terpadu (Fisika/Biologi)', 'IPS Terpadu', 'Bahasa Indonesia', 'Bahasa Inggris', 'Pendidikan Pancasila & Kewarganegaraan'],
      khusus: ['Program Muhadhoroh Pekanan', 'Kajian Dzikir Pagi Petang', 'Bimbingan Kedisiplinan & Kemandirian Asrama']
    }
  },
  MA: {
    title: 'MA Darul Akhyar',
    level: 'Madrasah Aliyah (MA) Uraian Keagamaan & MIPA',
    tagline: 'Mencetak Ulama Intelektual & Ilmuwan Islami Masa Depan',
    image: IMAGES.library,
    description: 'Madrasah Aliyah (MA) Darul Akhyar adalah jenjang pendidikan tingkat atas setara SMA yang memadukan keunggulan akademis Kurikulum Kemenag RI, Sains MIPA Terapan, dengan pendalaman kitab kuning turots klasik secara komprehensif. Kurikulum ini didesain tajam untuk mencetak intelektual muslim berkemampuan bahasa Arab dan Inggris setara internasional yang siap menempuh perguruan tinggi negeri terkemuka maupun kampus Timur Tengah.',
    stats: { santri: '430', ustadz: '24', kelas: '14 Ruang Kelas AC' },
    keunggulan: [
      'Target Hafalan Al-Quran Program Takhasus s/d 30 Juz bersanad.',
      'Pendalaman Kitab Alat (Nahwu Sharaf jurumiyah & imrithi) dan Fiqih Syafii.',
      'Muhadhoroh lanjutan & debat ilmiah Bahasa Arab & Inggris aktif.',
      'Bimbingan Sukses Masuk PTN (SNBP/SNBT) dan Seleksi Beasiswa Al-Azhar Kairo.',
      'Praktikum Riset Sains Terapan terintegrasi di laboratorium sekolah.'
    ],
    kurikulum: {
      agama: ['Tafsir Jalalain & Ilmu Tafsir', 'Hadits Riyadhus Shalihin & Mustholah Hadits', 'Ushul Fiqih (Kitab Al-Waraqat)', 'Nahwu-Sharaf (Imrithi & Alfiyah)', 'Balaghoh & Sastra Arab'],
      umum: ['Fisika & Kimia Terapan', 'Biologi Molekuler', 'Matematika Peminatan', 'Bahasa Inggris TOEFL/IELTS Preparation', 'Sejarah Nasional & Tata Negara'],
      khusus: ['Riset Karya Ilmiah Santri', 'Kajian Fatwa Hukum Klasik-Kontemporer', 'Pengabdian Masyarakat (Praktek Dakwah Lapangan)']
    }
  }
};

export default function Program({ programs: programsProp, ekskuls: ekskulsProp }) {
  const [activeTab, setActiveTab] = useState('SMP');
  const [openAccordion, setOpenAccordion] = useState('agama');

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const currentProgram = programsData[activeTab];

  const filteredEkskul = EKSKUL_DATA.filter(e =>
    e.isActive && (e.program === 'Keduanya' || e.program === activeTab)
  );

  return (
    <FrontLayout>
      <Head title="Program Pendidikan" />
      <div className="font-sans text-slate-800 bg-slate-50/50 pb-16" id="program-page-root">

        <div
          className="relative py-12 text-white overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url('${IMAGES.pesantren}')` }}
          id="program-header"
        >
          <div className="absolute inset-0 bg-emerald-950/75 backdrop-blur-xs" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-2xl font-extrabold sm:text-3xl">Program Pendidikan</h1>
                <p className="text-xs text-emerald-200/80 mt-1.5">Sistem belajar boarding school terintegrasi penuh akhlak, hufazh &amp; sains</p>
              </div>
              <div className="flex items-center justify-center gap-1 text-[11px] font-semibold text-emerald-300">
                <span>Beranda</span>
                <ChevronRight size={12} />
                <span className="text-white">Program Pendidikan</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 mt-8 sm:px-6 lg:px-8">

          <div className="flex justify-center border-b border-slate-200 bg-white rounded-xl p-2 shadow-2xs mb-8" id="program-tabs">
            <button
              onClick={() => setActiveTab('SMP')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-sans text-sm font-bold transition duration-300 ${activeTab === 'SMP' ? 'bg-emerald-600 text-white shadow' : 'text-slate-600 hover:bg-slate-50 hover:text-emerald-700'}`}
              id="smp"
            >
              <School size={18} />
              <span>SMP Darul Akhyar</span>
            </button>
            <button
              onClick={() => setActiveTab('MA')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-sans text-sm font-bold transition duration-300 ${activeTab === 'MA' ? 'bg-emerald-600 text-white shadow' : 'text-slate-600 hover:bg-slate-50 hover:text-emerald-700'}`}
              id="ma"
            >
              <GraduationCap size={18} />
              <span>MA Darul Akhyar</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in duration-300" id="program-portrait">

            <div className="lg:col-span-8 space-y-8 text-left">

              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100">
                <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100 mb-6 border border-slate-50">
                  <img
                    src={currentProgram.image}
                    alt={currentProgram.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute bottom-4 left-4 rounded-lg bg-emerald-600 text-white font-extrabold text-[10px] tracking-widest uppercase px-3 py-1.5 shadow">
                    {currentProgram.level}
                  </span>
                </div>
                <h2 className="text-xl font-extrabold text-slate-900">{currentProgram.title}</h2>
                <p className="text-xs font-bold text-emerald-600 mt-1 uppercase tracking-wider">{currentProgram.tagline}</p>
                <p className="text-xs text-slate-500 leading-relaxed mt-4">
                  {currentProgram.description}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100">
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4">Program Unggulan {activeTab}</h3>
                <div className="space-y-3" id="advantages-list">
                  {currentProgram.keunggulan.map((k, idx) => (
                    <div key={idx} className="flex gap-3 items-start text-xs">
                      <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                      <p className="text-slate-600 leading-relaxed">{k}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100">
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4">Struktur Kurikulum</h3>

                <div className="space-y-3" id="curriculum-accordion">

                  <div className="rounded-xl border border-slate-150 overflow-hidden">
                    <button
                      onClick={() => toggleAccordion('agama')}
                      className="w-full flex items-center justify-between p-4 bg-slate-50 font-sans text-xs font-bold text-slate-800 text-left hover:bg-slate-100/70 transition"
                    >
                      <span>1. Pendidikan Diniyah &amp; Kepesantrenan (Agama)</span>
                      {openAccordion === 'agama' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    {openAccordion === 'agama' && (
                      <div className="p-4 bg-white border-t border-slate-150 animate-in slide-in-from-top-2 duration-200">
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                          {currentProgram.kurikulum.agama.map((item, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="rounded-xl border border-slate-150 overflow-hidden">
                    <button
                      onClick={() => toggleAccordion('umum')}
                      className="w-full flex items-center justify-between p-4 bg-slate-50 font-sans text-xs font-bold text-slate-800 text-left hover:bg-slate-100/70 transition"
                    >
                      <span>2. Kurikulum Akademik Nasional (Pendidikan Umum)</span>
                      {openAccordion === 'umum' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    {openAccordion === 'umum' && (
                      <div className="p-4 bg-white border-t border-slate-150 animate-in slide-in-from-top-2 duration-200">
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                          {currentProgram.kurikulum.umum.map((item, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="rounded-xl border border-slate-150 overflow-hidden">
                    <button
                      onClick={() => toggleAccordion('khusus')}
                      className="w-full flex items-center justify-between p-4 bg-slate-50 font-sans text-xs font-bold text-slate-800 text-left hover:bg-slate-100/70 transition"
                    >
                      <span>3. Program Penunjang &amp; Kepribadian Khusus</span>
                      {openAccordion === 'khusus' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    {openAccordion === 'khusus' && (
                      <div className="p-4 bg-white border-t border-slate-150 animate-in slide-in-from-top-2 duration-200">
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                          {currentProgram.kurikulum.khusus.map((item, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                </div>
              </div>

            </div>

            <div className="lg:col-span-4 space-y-6 text-left">

              <div className="rounded-2xl bg-gradient-to-br from-emerald-900 to-emerald-950 p-6 text-white shadow-sm">
                <h3 className="font-sans text-xs font-bold tracking-wider uppercase text-emerald-300 mb-4">Informasi Akademik</h3>
                <div className="space-y-4" id="academic-panel">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-emerald-800 p-2 text-emerald-300">
                      <Users size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] text-emerald-300 leading-none uppercase tracking-wider font-semibold">Estimasi Kuota Santri</p>
                      <p className="text-xs font-bold mt-1 text-white">{currentProgram.stats.santri} Santri</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-emerald-800 p-2 text-emerald-300">
                      <GraduationCap size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] text-emerald-300 leading-none uppercase tracking-wider font-semibold">Asatidzah Pengampu</p>
                      <p className="text-xs font-bold mt-1 text-white">{currentProgram.stats.ustadz} Guru Tetap</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-emerald-800 p-2 text-emerald-300">
                      <BookMarked size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] text-emerald-300 leading-none uppercase tracking-wider font-semibold">Sarana Ruangan</p>
                      <p className="text-xs font-bold mt-1 text-white">{currentProgram.stats.kelas}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4">Ekstrakurikuler Pilihan</h3>
                <p className="text-[11px] text-slate-500 leading-relaxed mb-4">
                  Program pengembangan bakat, minat, fisik, serta kreativitas seni yang diselenggarakan di sore hari di bawah pengawasan instruktur profesional:
                </p>
                <div className="space-y-3" id="ekskul-mini-list">
                  {filteredEkskul.map((ekskul) => (
                    <div key={ekskul.id} className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3 hover:border-emerald-200 transition">
                      <div className="h-2 w-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                      <div>
                        <h4 className="text-xs font-bold text-slate-800">{ekskul.name}</h4>
                        <p className="text-[10px] text-slate-500 leading-normal mt-1">{ekskul.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

          <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 text-center" id="program-bottom-cta">
            <h3 className="font-sans text-md font-extrabold text-slate-900">
              Tertarik Menitipkan Putra-Putri Anda di {currentProgram.title}?
            </h3>
            <p className="text-xs text-slate-500 mt-2 max-w-xl mx-auto">
              Proses seleksi administrasi berkas dan wawancara online dapat Anda tempuh langsung dari rumah melalui sistem portal terpadu pendaftaran kami.
            </p>
            <Link
              href="/ppdb-form"
              className="inline-flex items-center gap-2 mt-6 rounded-full bg-emerald-600 hover:bg-emerald-500 border border-emerald-500 px-8 py-3.5 font-sans text-xs font-black uppercase tracking-wider text-white shadow transition"
            >
              Daftar Sekarang juga <ArrowRight size={16} />
            </Link>
          </div>

        </div>

      </div>
    </FrontLayout>
  );
}
