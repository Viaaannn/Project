import { Link, Head } from '@inertiajs/react';
import FrontLayout from '@/Layouts/FrontLayout';
import { ArrowRight, Calendar, ArrowUpRight } from 'lucide-react';
import { IMAGES } from '@/data';

const SAMPLE_NEWS = [
  {
    id: '1',
    title: 'Santri Darul Akhyar Juara 1 MHQ Tingkat Jawa Barat',
    excerpt: 'Prestasi membanggakan diraih oleh santri kami Ananda Muhammad Faiz dalam ajang Musabaqah Hifzhil Quran tingkat provinsi.',
    image: 'https://images.unsplash.com/photo-1609599006353-e629f1d50218?auto=format&fit=crop&q=80&w=800',
    category: 'Prestasi',
    date: '2026-06-20',
    author: 'Tim Redaksi'
  },
  {
    id: '2',
    title: 'Pembekalan Akhir Tahun Santri Kelas XII Sebelum Ujian Nasional',
    excerpt: 'Program motivasi dan doa bersama menjelang ujian akhir nasional bagi santri kelas XII SMP dan MA Darul Akhyar.',
    image: IMAGES.classroom,
    category: 'Kegiatan',
    date: '2026-06-15',
    author: 'Ust. Ahmad'
  },
  {
    id: '3',
    title: 'Pendaftaran Santri Baru Gelombang I Tahun 2026/2027 Telah Dibuka',
    excerpt: 'PPDB Darul Akhyar untuk tahun ajaran 2026/2027 resmi dibuka. Kuota terbatas hanya 120 santri putra.',
    image: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&q=80&w=800',
    category: 'Pengumuman',
    date: '2026-06-10',
    author: 'Panitia PPDB'
  }
];

export default function Home({ news: newsProp, programs: programsProp, stats: statsProp }) {
  const latestNews = (newsProp?.length ? newsProp : SAMPLE_NEWS).slice(0, 3);

  return (
    <FrontLayout>
      <Head title="Beranda" />
      <div className="font-sans text-slate-800 bg-slate-50/50 pb-12" id="homepage-root">

        <section
          className="relative overflow-hidden py-24 lg:py-32 bg-cover bg-center"
          style={{ backgroundImage: `url('${IMAGES.pesantren}')` }}
          id="hero-section"
        >
          <div className="absolute inset-0 bg-slate-950/70" />
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-sans text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:leading-tight">
                Selamat Datang di <br />
                Pondok Pesantren <span className="text-emerald-400">Darul Akhyar</span>
              </h1>
              <p className="mt-6 text-base text-emerald-100/90 md:text-lg leading-relaxed">
                Membentuk santri berakhlakul karimah, unggul dalam hafalan Al-Quran, tajam mengkaji kitab kuning klasik, dan siap bersaing dalam ilmu sains modern.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/ppdb/daftar"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-emerald-600 border border-emerald-500 px-8 py-3.5 font-sans text-sm font-black uppercase tracking-wider text-white shadow-lg shadow-emerald-600/30 transition duration-300 hover:bg-emerald-500 hover:-translate-y-0.5"
                  id="hero-cta-ppdb"
                >
                  Daftar PPDB Sekarang
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/profil"
                  className="w-full sm:w-auto rounded-full border-2 border-emerald-400 bg-transparent px-8 py-3 font-sans text-sm font-semibold text-emerald-400 transition duration-300 hover:bg-emerald-400/10 hover:border-emerald-400"
                  id="hero-secondary-profile"
                >
                  Jelajahi Profil Pondok
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="-mt-8 relative z-20 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8" id="leader-welcome-section">
          <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-xl border border-emerald-100/50">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center" id="leader-grid">
              <div className="md:col-span-4 flex flex-col items-center text-center">
                <div className="relative group w-44 h-44 sm:w-48 sm:h-48 mb-4">
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400 to-emerald-600 rounded-full transform rotate-3 scale-105 group-hover:rotate-6 transition-transform duration-300 shadow-md" />
                  <img
                    src="/images/pimpinan.jpg"
                    alt="Dr. H. Syamsul Yakin MA"
                    className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-inner"
                    id="leader-avatar"
                  />
                </div>
                <h4 className="text-lg font-bold text-slate-900 leading-tight">
                  Dr. H. Syamsul Yakin MA
                </h4>
                <p className="text-xs font-semibold text-emerald-700 tracking-wider mt-1">
                  Pimpinan Pondok Pesantren
                </p>
              </div>
              <div className="md:col-span-8 text-center md:text-left">
                <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 rounded-full mb-3 border border-emerald-200">
                  Sambutan &amp; Profil Pimpinan
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900" id="leader-title">
                  Mendidik dengan Hati, Membimbing dengan Ilmu
                </h3>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mt-1">
                  Alumnus Universitas Al-Azhar, Kairo
                </p>
                <div className="mt-4 text-slate-600 text-sm leading-relaxed italic border-l-4 border-emerald-500 pl-4 py-1 bg-emerald-50/30 rounded-r-lg" id="leader-quote">
                  "Assalamu'alaikum Warahmatullahi Wabarakatuh. Selamat datang di Pondok Pesantren Darul Akhyar. Kami berkomitmen menyelenggarakan pendidikan islami yang holistik, memadukan keluhuran akhlak, hafalan Al-Quran, penguasaan kitab kuning klasik, serta penguasaan sains modern demi mencetak generasi rabbani yang mandiri, cerdas, berintegritas tinggi, dan taat beribadah."
                </div>
                <p className="mt-4 text-xs text-slate-500 leading-relaxed">
                  Sebagai lembaga pendidikan pesantren, kami memadukan kurikulum nasional kementerian agama dengan tradisi luhur pesantren salaf dan tahfizh Quran terpadu demi mempersiapkan santri menghadapi tantangan zaman global tanpa melupakan identitas akhlakul karimah.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" id="education-programs-section">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Program Pendidikan Kami
            </h2>
            <div className="mx-auto mt-2 h-1.5 w-16 rounded-full bg-emerald-600" />
            <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-500">
              Kami mengelola jenjang pendidikan formal SMP dan MA yang terakreditasi nasional dengan pembinaan kepribadian islami di asrama secara penuh 24 jam.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2" id="programs-grid">

            <div className="group rounded-2xl bg-white p-6 shadow-md border border-slate-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-emerald-100 flex flex-col justify-between">
              <div>
                <div className="relative overflow-hidden rounded-xl mb-5 aspect-video bg-emerald-50">
                  <img
                    src={IMAGES.classroom}
                    alt="SMP Darul Akhyar"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-3 left-3 rounded-md bg-emerald-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    Jenjang Menengah Pertama
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition">
                  SMP Darul Akhyar
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-slate-500">
                  Pendidikan tingkat menengah pertama yang memadukan kurikulum dinas pendidikan dengan pendalaman adab islami, hafalan Al-Quran (minimal 3 juz), dan pengenalan bahasa Arab &amp; Inggris dasar.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-600">Fullday &amp; Boarding</span>
                <Link
                  href="/program"
                  className="flex items-center gap-1 text-xs font-bold text-emerald-600 hover:text-emerald-700 group-hover:underline"
                >
                  Selengkapnya <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>

            <div className="group rounded-2xl bg-white p-6 shadow-md border border-slate-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-emerald-100 flex flex-col justify-between">
              <div>
                <div className="relative overflow-hidden rounded-xl mb-5 aspect-video bg-emerald-50">
                  <img
                    src={IMAGES.library}
                    alt="MA Darul Akhyar"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-3 left-3 rounded-md bg-emerald-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    Jenjang Menengah Atas
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition">
                  Madrasah Aliyah (MA) Darul Akhyar
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-slate-500">
                  Pendidikan tingkat menengah atas dengan penjurusan Ilmu Pengetahuan Alam (MIPA) &amp; Keagamaan. Menyiapkan kelulusan santri dengan hafalan Al-Quran mutqin, penguasaan Kitab Kuning komprehensif, dan siap kuliah di PTN atau universitas Timur Tengah.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-600">Boarding School Only</span>
                <Link
                  href="/program"
                  className="flex items-center gap-1 text-xs font-bold text-emerald-600 hover:text-emerald-700 group-hover:underline"
                >
                  Selengkapnya <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>

          </div>
        </section>

        <section className="bg-white py-16" id="news-section">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
              <div className="text-center sm:text-left">
                <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                  Berita &amp; Kegiatan Terbaru
                </h2>
                <div className="h-1.5 w-16 bg-emerald-600 rounded-full mt-2 mx-auto sm:mx-0" />
              </div>
              <Link
                href="/berita"
                className="flex items-center gap-1 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-2 font-sans text-xs font-bold text-emerald-700 transition hover:bg-emerald-100"
                id="view-all-news-btn"
              >
                Lihat Semua Berita <ArrowRight size={14} />
              </Link>
            </div>

            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-emerald-200 md:grid md:grid-cols-3 md:overflow-x-visible md:pb-0" id="news-track">
              {latestNews.map((news) => (
                <Link
                  key={news.id}
                  href="/berita"
                  className="group flex-shrink-0 w-80 md:w-auto rounded-xl bg-white border border-slate-150 overflow-hidden shadow-sm transition hover:shadow-md hover:border-emerald-100 hover:-translate-y-0.5 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-video bg-emerald-50 overflow-hidden">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute top-2 left-2 rounded-md bg-emerald-600 px-2 py-0.5 text-[9px] font-bold text-white">
                        {news.category}
                      </span>
                    </div>
                    <div className="p-4 text-left">
                      <div className="flex items-center gap-2 text-[10px] text-slate-400 font-semibold mb-2">
                        <Calendar size={12} />
                        <span>{new Date(news.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                      </div>
                      <h3 className="font-sans text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition line-clamp-2 leading-snug">
                        {news.title}
                      </h3>
                      <p className="mt-2 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {news.excerpt}
                      </p>
                    </div>
                  </div>
                  <div className="px-4 pb-4 pt-2 text-left border-t border-slate-50 flex items-center justify-between">
                    <span className="text-[10px] font-semibold text-slate-400">Oleh: {news.author}</span>
                    <span className="text-xs font-bold text-emerald-600 flex items-center gap-0.5 group-hover:translate-x-1 transition">
                      Baca <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8" id="cta-enrollment-banner">
          <div
            className="relative overflow-hidden rounded-3xl p-8 sm:p-12 text-center text-white shadow-xl bg-cover bg-center"
            style={{ backgroundImage: `url('${IMAGES.hero}')` }}
          >
            <div className="absolute inset-0 bg-emerald-950/60 backdrop-blur-[2px]" />
            <div className="relative max-w-2xl mx-auto">
              <h2 className="text-2xl font-extrabold sm:text-3xl text-white leading-tight">
                Mari Bergabung Bersama Keluarga Besar <span className="text-emerald-400">Darul Akhyar</span>
              </h2>
              <p className="mt-4 text-sm text-emerald-100/90 leading-relaxed">
                Mendidik putra Anda menjadi hafizh Quran yang intelek, mandiri, santun, dan taat beribadah. Pendaftaran Gelombang I Tahun Pelajaran 2026/2027 berlangsung hingga 15 Juli 2026 (Khusus Santri Putra).
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/ppdb/daftar"
                  className="w-full sm:w-auto rounded-full bg-emerald-600 hover:bg-emerald-500 border border-emerald-400 px-8 py-3.5 font-sans text-xs font-black uppercase tracking-wider text-white shadow-lg transition duration-300 hover:-translate-y-0.5 active:translate-y-0"
                  id="cta-enroll-now"
                >
                  Daftar Sekarang juga
                </Link>
                <Link
                  href="/ppdb"
                  className="w-full sm:w-auto rounded-full border border-emerald-300/40 bg-emerald-900/40 px-8 py-3 font-sans text-xs font-bold text-white transition duration-300 hover:bg-emerald-900/80"
                  id="cta-enroll-info"
                >
                  Lihat Panduan Biaya &amp; Syarat
                </Link>
              </div>
              <p className="mt-6 text-[10px] text-emerald-300/70 font-semibold tracking-wider uppercase">
                * Kuota Asrama Terbatas Hanya Untuk 120 Santri Baru Tahun Ini
              </p>
            </div>
          </div>
        </section>

      </div>
    </FrontLayout>
  );
}
