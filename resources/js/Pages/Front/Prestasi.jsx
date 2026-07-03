import { useState } from 'react';
import { Head } from '@inertiajs/react';
import FrontLayout from '@/Layouts/FrontLayout';
import { ChevronRight, Award, Trophy, Calendar, Sparkles } from 'lucide-react';

const ACHIEVEMENTS_DATA = [
  { id: 'ach-1', title: 'Juara 1 Musabaqah Hifzhil Quran 30 Juz Tingkat Jawa Barat', winner: 'Muhammad Faiz Al-Hafidz', rank: 'Juara 1', level: 'Provinsi', category: 'Tahfidz', year: '2026' },
  { id: 'ach-2', title: 'Medali Emas Olimpiade Sains Nasional (OSN) IPA SMP', winner: 'Ahmad Rizki Pratama', rank: 'Medali Emas', level: 'Nasional', category: 'Akademik', year: '2026' },
  { id: 'ach-3', title: 'Juara Umum Liga Futsal Antar Pesantren Se-Jawa Barat', winner: 'Tim Futsal Darul Akhyar', rank: 'Juara 1', level: 'Provinsi', category: 'Olahraga', year: '2026' },
  { id: 'ach-4', title: 'Juara 2 Kaligrafi Kontemporer Festival Seni Islam', winner: 'Hasan Bashri', rank: 'Juara 2', level: 'Kabupaten/Kota', category: 'Seni', year: '2026' },
  { id: 'ach-5', title: 'Juara 1 Debat Bahasa Arab Tingkat SMA/MA Se-Bekasi Raya', winner: 'Tim Debat MA Darul Akhyar', rank: 'Juara 1', level: 'Kabupaten/Kota', category: 'Akademik', year: '2026' },
  { id: 'ach-6', title: 'Medali Perak Olimpiade Kimia Nasional (Pilmapres)', winner: 'Rafi Ahmad Fadhilah', rank: 'Medali Perak', level: 'Nasional', category: 'Akademik', year: '2025' },
  { id: 'ach-7', title: 'Santri Teladan Tingkat Provinsi Jawa Barat 2025', winner: 'M. Naufal Abdillah', rank: 'Santri Teladan', level: 'Provinsi', category: 'Akademik', year: '2025' },
  { id: 'ach-8', title: 'Juara 3 Pencak Silat Kategori Remaja Putra', winner: 'Dimas Ardiansyah', rank: 'Juara 3', level: 'Kabupaten/Kota', category: 'Olahraga', year: '2025' },
  { id: 'ach-9', title: 'Juara Harapan 2 MHQ 15 Juz Pesantren Se-Indonesia', winner: 'M. Iqbal Hidayat', rank: 'Juara Harapan 2', level: 'Nasional', category: 'Tahfidz', year: '2025' },
  { id: 'ach-10', title: 'Juara 1 Syarhil Quran Tingkat Regional Jawa Bagian Barat', winner: 'Tim Qurani Darul Akhyar', rank: 'Juara 1', level: 'Provinsi', category: 'Tahfidz', year: '2025' },
  { id: 'ach-11', title: 'Juara 2 Cerdas Cermat Islam Tingkat MA Se-Kota Bekasi', winner: 'Tim CCI Darul Akhyar', rank: 'Juara 2', level: 'Kabupaten/Kota', category: 'Akademik', year: '2026' },
  { id: 'ach-12', title: 'Lomba Karya Tulis Ilmiah Remaja Nasional Bidang Lingkungan', winner: 'Ahmad Zaky & Team', rank: 'Finalis', level: 'Nasional', category: 'Akademik', year: '2026' },
];

export default function Prestasi({ achievements: achievementsProp }) {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [levelFilter, setLevelFilter] = useState('Semua');

  const achievementList = achievementsProp?.length ? achievementsProp : ACHIEVEMENTS_DATA;

  const categories = ['Semua', 'Akademik', 'Tahfidz', 'Olahraga', 'Seni'];
  const levels = ['Semua', 'Nasional', 'Provinsi', 'Kabupaten/Kota'];

  const filteredAchievements = achievementList.filter((ach) => {
    const matchesCategory = activeCategory === 'Semua' || ach.category === activeCategory;
    const matchesLevel = levelFilter === 'Semua' || ach.level === levelFilter;
    return matchesCategory && matchesLevel;
  });

  const achievementsHighlights = achievementList.slice(0, 3);

  return (
    <FrontLayout>
      <Head title="Prestasi" />
      <div className="font-sans text-slate-800 bg-slate-50/50 pb-16" id="prestasi-page-root">

        <div
          className="relative py-12 text-white overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=1600')` }}
          id="prestasi-header"
        >
          <div className="absolute inset-0 bg-emerald-950/75 backdrop-blur-xs" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center md:text-left flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-extrabold sm:text-3xl">Ukiran Prestasi Santri</h1>
              <p className="text-xs text-emerald-200/80 mt-1.5">Kebanggaan perjuangan santri dalam mengukir karya ilmiah, hafalan Al-Quran, hingga kompetisi olahraga nasional</p>
            </div>
            <div className="flex items-center justify-center gap-1 text-[11px] font-semibold text-emerald-300">
              <span>Beranda</span>
              <ChevronRight size={12} />
              <span className="text-white">Prestasi</span>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 mt-12 sm:px-6 lg:px-8">

          <div className="mb-12" id="prestasi-highlights-block">
            <div className="text-center md:text-left mb-6">
              <h2 className="text-sm font-bold text-slate-800 uppercase tracking-widest flex items-center justify-center md:justify-start gap-1.5">
                <Trophy size={16} className="text-amber-500" />
                <span>Prestasi Utama Pesantren</span>
              </h2>
              <p className="text-[11px] text-slate-500 mt-1">Sorotan kejuaraan tingkat nasional teratas yang diukir oleh santri Darul Akhyar dalam setahun terakhir:</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="highlights-awards-grid">
              {achievementsHighlights.map((hl) => (
                <div
                  key={hl.id}
                  className="relative bg-gradient-to-br from-amber-500/10 to-amber-500/5 rounded-3xl p-6 border border-amber-500/20 text-left flex flex-col justify-between overflow-hidden"
                >
                  <div className="absolute -right-6 -bottom-6 text-amber-500/10 h-28 w-28 shrink-0">
                    <Award size={120} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="rounded-lg bg-amber-500 text-white p-2 shrink-0">
                        <Trophy size={16} />
                      </span>
                      <span className="text-[10px] font-extrabold uppercase bg-amber-100 text-amber-950 px-2.5 py-1 rounded-md tracking-wider">
                        {hl.level}
                      </span>
                    </div>
                    <h3 className="font-sans text-sm font-black text-slate-900 leading-snug">{hl.title}</h3>
                    <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">Pemenang: <strong className="text-slate-700">{hl.winner}</strong> ({hl.rank})</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-amber-500/10 flex items-center gap-3 text-[10px] text-slate-400 font-semibold">
                    <span className="flex items-center gap-1"><Calendar size={11} /> {hl.year}</span>
                    <span className="flex items-center gap-1"><Award size={11} /> {hl.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm" id="prestasi-directory-card">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-100 pb-5 mb-8 text-left">
              <div>
                <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Direktori Penghargaan</h2>
                <p className="text-[11px] text-slate-400 mt-1">Gunakan penyaringan di samping untuk mempersempit kejuaraan santri berdasarkan minat:</p>
              </div>
              <div className="flex flex-wrap gap-3 items-center">
                <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs text-slate-600 font-bold shrink-0">
                  <span className="text-slate-400">Bidang:</span>
                  <select
                    value={activeCategory}
                    onChange={(e) => setActiveCategory(e.target.value)}
                    className="bg-transparent border-0 focus:outline-none focus:ring-0 font-bold text-slate-800 cursor-pointer text-xs"
                  >
                    {categories.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs text-slate-600 font-bold shrink-0">
                  <span className="text-slate-400">Tingkat:</span>
                  <select
                    value={levelFilter}
                    onChange={(e) => setLevelFilter(e.target.value)}
                    className="bg-transparent border-0 focus:outline-none focus:ring-0 font-bold text-slate-800 cursor-pointer text-xs"
                  >
                    {levels.map(l => (
                      <option key={l} value={l}>{l}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="prestasi-cards-grid">
              {filteredAchievements.map((ach) => (
                <div
                  key={ach.id}
                  className="rounded-xl border border-slate-150 bg-white p-5 hover:border-emerald-100 hover:shadow-xs hover:-translate-y-0.5 transition duration-300 text-left flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[9px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md uppercase tracking-wider">
                        {ach.category}
                      </span>
                      <span className="text-[9px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md uppercase tracking-wider">
                        {ach.level}
                      </span>
                    </div>
                    <h3 className="font-sans text-xs font-bold text-slate-900 leading-snug">{ach.title}</h3>
                    <p className="text-[10px] text-slate-500 leading-normal mt-2">Pemenang: <strong className="text-slate-600">{ach.winner}</strong> ({ach.rank})</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-50 flex items-center justify-between text-[10px] text-slate-400 font-semibold">
                    <span className="flex items-center gap-1"><Calendar size={11} /> Angkatan {ach.year}</span>
                    <span className="flex items-center gap-1 text-emerald-600"><Sparkles size={11} /> Santri Baru</span>
                  </div>
                </div>
              ))}
            </div>

            {filteredAchievements.length === 0 && (
              <div className="py-12 text-center" id="empty-prestasi-state">
                <p className="text-xs text-slate-400 italic">Belum ada data prestasi yang cocok dengan bidang atau tingkat pilihan Anda.</p>
              </div>
            )}

          </div>

        </div>

      </div>
    </FrontLayout>
  );
}
