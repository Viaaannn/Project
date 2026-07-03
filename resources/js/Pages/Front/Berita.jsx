import { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import FrontLayout from '@/Layouts/FrontLayout';
import { ChevronRight, Search, Calendar, User, MessageSquare, Facebook, Link as LinkIcon, ArrowLeft, ArrowRight } from 'lucide-react';
import { IMAGES } from '@/data';

const SAMPLE_NEWS = [
  {
    id: 'news-1',
    title: 'Santri Darul Akhyar Juara 1 MHQ Tingkat Jawa Barat',
    excerpt: 'Prestasi membanggakan diraih oleh santri kami Ananda Muhammad Faiz dalam ajang Musabaqah Hifzhil Quran (MHQ) 30 Juz tingkat Provinsi Jawa Barat.',
    content: 'Prestasi gemilang kembali diraih oleh santri Pondok Pesantren Darul Akhyar. Muhammad Faiz Al-Hafidz, santri kelas XII MA Darul Akhyar, berhasil meraih Juara 1 dalam ajang Musabaqah Hifzhil Quran (MHQ) 30 Juz tingkat Provinsi Jawa Barat yang diselenggarakan di Kota Bandung.\n\nLomba yang diikuti oleh puluhan peserta terbaik dari berbagai pesantren se-Jawa Barat ini berlangsung selama tiga hari penuh. Faiz berhasil menyetorkan hafalan 30 juz dengan tartil, fasih, dan lagam yang merdu tanpa kesalahan berarti.\n\n"Kami bersyukur dan bangga atas pencapaian Faiz. Ini adalah buah dari kesungguhan beliau dalam mengikuti program takhasus tahfidz dan bimbingan intensif dari para asatidzah," ujar KH. Dr. M. Syarifuddin, M.A., Pimpinan Pondok Pesantren Darul Akhyar.\n\nPrestasi ini diharapkan dapat menjadi motivasi bagi santri lainnya untuk terus meningkatkan kualitas hafalan dan ilmu pengetahuan.',
    image: 'https://images.unsplash.com/photo-1609599006353-e629f1d50218?auto=format&fit=crop&q=80&w=800',
    category: 'Prestasi',
    date: '2026-06-20',
    author: 'Tim Redaksi'
  },
  {
    id: 'news-2',
    title: 'Pembekalan Akhir Tahun Santri Kelas XII Sebelum Ujian Nasional',
    excerpt: 'Program motivasi dan doa bersama menjelang ujian akhir nasional bagi santri kelas XII SMP dan MA Darul Akhyar.',
    content: 'Pondok Pesantren Darul Akhyar mengadakan program pembekalan akhir tahun bagi seluruh santri kelas XII SMP dan MA yang akan menghadapi ujian akhir nasional. Kegiatan ini berlangsung selama tiga hari di Aula Serbaguna Pesantren.\n\nProgram ini menghadirkan beberapa pemateri kompeten, termasuk alumni yang telah sukses melanjutkan studi di PTN ternama. Materi yang disampaikan meliputi strategi belajar efektif, manajemen waktu, teknik menjawab soal, serta motivasi mental menghadapi ujian.\n\n"Kami ingin santri tidak hanya siap secara akademis, tetapi juga mental dan spiritual," ujar Ust. H. Junaedi, M.Pd., Kepala Sekolah SMP Darul Akhyar.\n\nKegiatan ditutup dengan sesi doa bersama yang dipimpin langsung oleh pengasuh pondok, memohon keberkahan dan kemudahan bagi seluruh santri dalam menempuh ujian.',
    image: IMAGES.classroom,
    category: 'Kegiatan',
    date: '2026-06-15',
    author: 'Ust. Ahmad'
  },
  {
    id: 'news-3',
    title: 'Pendaftaran Santri Baru Gelombang I Tahun 2026/2027 Telah Dibuka',
    excerpt: 'PPDB Darul Akhyar untuk tahun ajaran 2026/2027 resmi dibuka. Kuota terbatas hanya 120 santri putra.',
    content: 'Pondok Pesantren Darul Akhyar secara resmi membuka Penerimaan Peserta Didik Baru (PPDB) untuk tahun ajaran 2026/2027. Pendaftaran Gelombang I dibuka mulai 1 Mei 2026 hingga 15 Juli 2026.\n\nKuota yang tersedia untuk tahun ajaran ini adalah 120 santri putra, terdiri dari 60 santri untuk jenjang SMP dan 60 santri untuk jenjang MA. Mengingat terbatasnya kapasitas asrama, panitia mengimbau kepada calon wali santri untuk segera mendaftarkan putra-putri mereka.\n\n"Setiap tahun kami menerima lebih banyak pendaftar daripada kuota yang tersedia. Kami menyarankan untuk mendaftar di gelombang awal agar mendapatkan kesempatan lebih besar," kata Panitia PPDB.\n\nPendaftaran dilakukan secara online melalui portal resmi pesantren. Informasi lengkap mengenai persyaratan dan biaya dapat diakses di halaman PPDB website resmi kami.',
    image: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&q=80&w=800',
    category: 'Pengumuman',
    date: '2026-06-10',
    author: 'Panitia PPDB'
  },
  {
    id: 'news-4',
    title: 'Kegiatan Pesantren Ramadhan: Tadarus Al-Quran 30 Hari Khatam',
    excerpt: 'Selama bulan Ramadhan, seluruh santri Darul Akhyar mengikuti program tadarus Al-Quran 30 hari khatam.',
    content: 'Bulan suci Ramadhan menjadi momentum istimewa bagi seluruh santri Pondok Pesantren Darul Akhyar. Selama sebulan penuh, pesantren menyelenggarakan program tadarus Al-Quran yang ditargetkan khatam 30 juz.\n\nSetiap selesai shalat tarawih berjamaah, para santri berkumpul di masjid untuk mengikuti tadarus yang dipandu oleh para asatidzah. Program ini terbagi dalam beberapa kelompok kecil (halaqah) yang masing-masing dibimbing oleh seorang guru.\n\n"Antusiasme santri sangat tinggi. Banyak dari mereka yang berhasil menyelesaikan target lebih awal dan melanjutkan ke program tambahan," ungkap Ust. Ahmad Fauzi, Lc., Kepala Bidang Kepengasuhan.',
    image: IMAGES.quran,
    category: 'Pesantren',
    date: '2026-03-15',
    author: 'Ust. Fauzi'
  },
  {
    id: 'news-5',
    title: 'Santri MA Darul Akhyar Raih Medali Emas OSN IPA Tingkat Provinsi',
    excerpt: 'Ahmad Rizki Pratama berhasil menyabet medali emas Olimpiade Sains Nasional bidang IPA tingkat provinsi.',
    content: 'Ahmad Rizki Pratama, santri kelas XI MA Darul Akhyar, berhasil mengharumkan nama pesantren dengan meraih medali emas dalam ajang Olimpiade Sains Nasional (OSN) tingkat Provinsi Jawa Barat bidang IPA Terpadu.\n\nKompetisi yang diadakan oleh Kementerian Pendidikan dan Kebudayaan ini diikuti oleh ratusan peserta dari seluruh Jawa Barat. Rizki berhasil menyingkirkan pesaing-pesaingnya melalui serangkaian tes teoritis dan praktikum yang ketat.\n\n"Kunci sukses Rizki adalah kedisiplinan dan kerja keras. Beliau rutin mengikuti bimbingan intensif di laboratorium setiap sore," kata pembimbingnya.\n\nDengan pencapaian ini, Rizki berhak melanjutkan ke tingkat nasional yang akan diadakan di Jakarta pada bulan Agustus mendatang.',
    image: IMAGES.laboratory,
    category: 'Prestasi',
    date: '2026-05-20',
    author: 'Tim Redaksi'
  },
  {
    id: 'news-6',
    title: 'Workshop Jurnalistik dan Broadcasting Santri Darul Akhyar',
    excerpt: 'Santri Darul Akhyar mengikuti workshop jurnalistik dan broadcasting untuk mengembangkan bakat menulis dan komunikasi.',
    content: 'Pondok Pesantren Darul Akhyar bekerja sama dengan Lembaga Pers Mahasiswa Universitas Islam Negeri (UIN) Jakarta menyelenggarakan workshop jurnalistik dan broadcasting bagi santri kelas X dan XI MA.\n\nWorkshop yang berlangsung selama dua hari ini memberikan materi dasar-dasar jurnalistik, teknik wawancara, penulisan berita, fotografi, dan penyiaran radio. Peserta juga diajak praktik langsung membuat konten berita dan siaran podcast mini.\n\n"Kami berharap workshop ini dapat menjadi bekal santri untuk mengembangkan minat di bidang media dan komunikasi. Kegiatan ini juga mendukung program ekstrakurikuler jurnalistik pesantren," jelas Ust. M. Ridwan, S.Kom., Kepala TU & Humas.',
    image: IMAGES.computer,
    category: 'Kegiatan',
    date: '2026-05-05',
    author: 'Panitia Humas'
  },
];

export default function Berita({ news: newsProp, categories: categoriesProp }) {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNewsId, setSelectedNewsId] = useState(null);
  const [isCopied, setIsCopied] = useState(false);

  const newsItems = newsProp?.length ? newsProp : SAMPLE_NEWS;
  const catList = categoriesProp?.length ? ['Semua', ...categoriesProp] : ['Semua', 'Kegiatan', 'Prestasi', 'Pengumuman', 'Pesantren', 'SMP', 'MA'];

  useEffect(() => {
    if (selectedNewsId) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [selectedNewsId]);

  const filteredNews = newsItems.filter((news) => {
    const catMatch = activeCategory === 'Semua' || news.category === activeCategory;
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = news.title.toLowerCase().includes(searchLower) ||
                          (news.content || '').toLowerCase().includes(searchLower);
    return catMatch && matchesSearch;
  });

  const activeNews = newsItems.find(n => n.id === selectedNewsId) || null;
  const relatedNews = activeNews
    ? newsItems.filter(n => n.id !== activeNews.id && (n.category === activeNews.category)).slice(0, 3)
    : [];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  if (selectedNewsId && activeNews) {
    return (
      <FrontLayout>
        <Head title={activeNews.title} />
        <div className="font-sans text-slate-800 bg-white pb-16 animate-in fade-in duration-300" id="news-reader-screen">

          <div
            className="relative py-10 text-white overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=1600')` }}
          >
            <div className="absolute inset-0 bg-emerald-950/75 backdrop-blur-xs" />
            <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-left">
              <button
                onClick={() => setSelectedNewsId(null)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300 hover:text-white mb-4 bg-emerald-900/50 border border-emerald-500/20 px-3 py-1.5 rounded-full"
                id="back-to-news-list"
              >
                <ArrowLeft size={14} /> Kembali ke Daftar Berita
              </button>
              <span className="text-[9px] font-bold uppercase tracking-wider bg-amber-500 text-white px-3 py-1 rounded-full">{activeNews.category}</span>
              <h1 className="text-xl sm:text-2xl font-black mt-3 leading-snug">{activeNews.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-xs text-emerald-200/85 mt-4">
                <span className="flex items-center gap-1"><Calendar size={13} /> {new Date(activeNews.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                <span className="flex items-center gap-1"><User size={13} /> Oleh: {activeNews.author}</span>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-4xl px-4 mt-8 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

              <article className="lg:col-span-8 text-left" id="news-article-body">
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 border border-slate-100 bg-slate-50">
                  <img
                    src={activeNews.image}
                    alt={activeNews.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-sm text-slate-700 leading-relaxed space-y-4 font-sans px-1">
                  {activeNews.content.split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-slate-150 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-xs font-semibold">
                  <span>Bagikan Berita Ini:</span>
                  <div className="flex items-center gap-2" id="news-share-buttons">
                    <a
                      href={`https://wa.me/?text=${encodeURIComponent(activeNews.title + ' - Baca selengkapnya')}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition"
                    >
                      <MessageSquare size={13} /> WhatsApp
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition"
                    >
                      <Facebook size={13} /> Facebook
                    </a>
                    <button
                      onClick={handleCopyLink}
                      className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-50 text-slate-700 hover:bg-slate-100 transition relative"
                    >
                      <LinkIcon size={13} /> {isCopied ? 'Tersalin!' : 'Copy Link'}
                    </button>
                  </div>
                </div>
              </article>

              <aside className="lg:col-span-4 text-left" id="news-sidebar">
                <div className="rounded-2xl border border-slate-150 p-5 bg-slate-50/50">
                  <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-4 border-b border-slate-150 pb-2">Berita Terkait</h3>
                  <div className="space-y-4">
                    {relatedNews.map((n) => (
                      <div
                        key={n.id}
                        onClick={() => setSelectedNewsId(n.id)}
                        className="cursor-pointer group flex gap-3 items-center hover:bg-white p-2 rounded-xl transition"
                      >
                        <img
                          src={n.image}
                          alt={n.title}
                          className="h-14 w-14 rounded-lg object-cover shrink-0 bg-slate-100"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <h4 className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition line-clamp-2 leading-snug">
                            {n.title}
                          </h4>
                          <span className="text-[9px] font-mono text-slate-400 block mt-1">{new Date(n.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}</span>
                        </div>
                      </div>
                    ))}
                    {relatedNews.length === 0 && (
                      <p className="text-[10px] text-slate-400 italic">Tidak ada berita terkait</p>
                    )}
                  </div>
                </div>
              </aside>

            </div>
          </div>
        </div>
      </FrontLayout>
    );
  }

  return (
    <FrontLayout>
      <Head title="Berita" />
      <div className="font-sans text-slate-800 bg-slate-50/50 pb-16" id="news-list-screen">

        <div
          className="relative py-12 text-white overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=1600')` }}
          id="news-header"
        >
          <div className="absolute inset-0 bg-emerald-950/75 backdrop-blur-xs" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center md:text-left flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-extrabold sm:text-3xl">Berita &amp; Agenda Kegiatan</h1>
              <p className="text-xs text-emerald-200/80 mt-1.5">Kumpulan informasi, pengumuman resmi, agenda asrama, dan ukiran prestasi Darul Akhyar</p>
            </div>
            <div className="flex items-center justify-center gap-1 text-[11px] font-semibold text-emerald-300">
              <span>Beranda</span>
              <ChevronRight size={12} />
              <span className="text-white">Berita</span>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 mt-8 sm:px-6 lg:px-8">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none shrink-0" id="news-category-chips">
              {catList.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-1.5 text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:max-w-xs">
              <Search className="absolute left-3 top-3 text-slate-400" size={14} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-slate-200 pl-9 pr-3 py-2 text-xs focus:border-emerald-500 focus:outline-none bg-white"
                placeholder="Cari berita..."
                id="search-news-input"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="news-grid-list">
            {filteredNews.map((news) => (
              <div
                key={news.id}
                onClick={() => setSelectedNewsId(news.id)}
                className="cursor-pointer group flex flex-col justify-between rounded-xl bg-white border border-slate-150 overflow-hidden shadow-2xs hover:shadow-md hover:border-emerald-100 hover:-translate-y-0.5 transition duration-300"
              >
                <div>
                  <div className="relative aspect-video bg-emerald-50 overflow-hidden">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-2 left-2 rounded-md bg-amber-500 px-2.5 py-0.5 text-[9px] font-bold uppercase text-white">
                      {news.category}
                    </span>
                  </div>
                  <div className="p-4 text-left">
                    <div className="flex items-center gap-2 text-[10px] text-slate-400 font-semibold mb-2">
                      <Calendar size={11} />
                      <span>{new Date(news.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                    </div>
                    <h3 className="font-sans text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition line-clamp-2 leading-snug">
                      {news.title}
                    </h3>
                    <p className="mt-2 text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                      {news.excerpt}
                    </p>
                  </div>
                </div>
                <div className="px-4 pb-4 pt-2 text-left border-t border-slate-50 flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-slate-400">Oleh: {news.author}</span>
                  <span className="text-xs font-bold text-emerald-600 flex items-center gap-0.5 group-hover:translate-x-1 transition">
                    Baca Selengkapnya <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div className="bg-white rounded-2xl p-12 text-center shadow-2xs border border-slate-100 mt-4" id="empty-news-state">
              <p className="text-xs text-slate-400 italic">Tidak ada berita atau artikel yang cocok dengan filter atau pencarian Anda.</p>
            </div>
          )}

        </div>

      </div>
    </FrontLayout>
  );
}
