import { useState } from 'react';
import { Head } from '@inertiajs/react';
import FrontLayout from '@/Layouts/FrontLayout';
import { ChevronRight, Search, ChevronDown, ChevronUp, MessageSquare, HelpCircle } from 'lucide-react';

const FAQ_DATA = [
  {
    id: 'faq-1',
    question: 'Bagaimana cara mendaftar PPDB di Pondok Pesantren Darul Akhyar?',
    answer: 'Pendaftaran dilakukan secara online melalui website resmi kami. Calon wali santri cukup membuat akun, mengisi formulir data diri, mengunggah dokumen persyaratan, dan memilih jadwal ujian lisan online. Setelah semua terisi, sistem akan memproses verifikasi berkas secara otomatis.'
  },
  {
    id: 'faq-2',
    question: 'Apakah asrama dilengkapi dengan fasilitas AC dan kamar mandi dalam?',
    answer: 'Ya, seluruh kamar asrama santri putra kami telah dilengkapi dengan pendingin ruangan (AC), kasur spring bed, lemari pakaian pribadi, dan kamar mandi dalam bersih dengan air panas. Standar hunian asrama kami setara dengan boarding school modern nasional.'
  },
  {
    id: 'faq-3',
    question: 'Berapa total estimasi biaya pendidikan untuk jenjang SMP dan MA?',
    answer: 'Estimasi total investasi pendidikan untuk gelombang awal adalah berkisar Rp8-9 Juta (sudah termasuk uang pangkal pembangunan, seragam, perlengkapan asrama, buku kitab, dan SPP bulan pertama). SPP per bulan untuk semua jenjang adalah Rp1.300.000 yang sudah meliputi biaya asrama, makan 3x sehari, laundry, dan kegiatan ekstrakurikuler.'
  },
  {
    id: 'faq-4',
    question: 'Apakah ada program beasiswa atau keringanan biaya bagi santri kurang mampu?',
    answer: 'Ya, Yayasan Darul Akhyar menyediakan beasiswa prestasi akademik dan tahfidz bagi santri berprestasi, serta keringanan biaya (subsidi silang) bagi santri dari keluarga kurang mampu secara ekonomi melalui jalur seleksi khusus verifikasi oleh yayasan.'
  },
  {
    id: 'faq-5',
    question: 'Kapan waktu kunjungan orang tua/wali santri yang diizinkan?',
    answer: 'Kunjungan wali santri diadakan setiap hari Ahad pada Pekan Ke-2 dan Ke-4 setiap bulannya, mulai pukul 09.00 WIB hingga maksimal pukul 17.00 WIB. Wali santri wajib melaporkan diri di pos keamanan terpadu dan mengisi buku tamu kunjungan.'
  },
  {
    id: 'faq-6',
    question: 'Apakah santri diperbolehkan membawa handphone atau gadget?',
    answer: 'Santri dilarang membawa handphone pribadi atau gadget elektronik selama berada di lingkungan asrama untuk menjaga fokus ibadah dan belajar. Pesantren menyediakan layanan telepon umum serta hotspot komputer terbatas di ruang multimedia untuk keperluan riset dan komunikasi darurat melalui pembina asrama.'
  },
  {
    id: 'faq-7',
    question: 'Apakah ada jaminan kelulusan santri dapat melanjutkan ke PTN atau perguruan tinggi Timur Tengah?',
    answer: 'Kami memberikan bimbingan karir dan pendampingan khusus persiapan masuk PTN (melalui jalur SNBP, SNBT, dan Ujian Mandiri) serta persiapan Bahasa Arab dan TOEFL untuk pendaftaran beasiswa ke Universitas Al-Azhar Kairo dan kampus Timur Tengah lainnya. Program bimbingan ini termasuk dalam kurikulum khusus peminatan MA.'
  },
  {
    id: 'faq-8',
    question: 'Bagaimana sistem pembinaan hafalan Al-Quran di pesantren?',
    answer: 'Program tahfidz Al-Quran dilaksanakan setiap pagi setelah shalat Subuh berjamaah dan setelah Maghrib hingga Isya menggunakan metode talaqqi bersanad (tatap muka langsung dengan guru). Setiap santri memiliki target hafalan individu yang dipantau melalui buku prestasi hufazh dan disetorkan secara rutin setiap pekan.'
  },
  {
    id: 'faq-9',
    question: 'Apakah pesantren menerima santri SMP lulusan dari SD negeri atau swasta umum?',
    answer: 'Tentu saja. Kami menerima lulusan dari SD/MI/sederajat, baik dari sekolah umum negeri, swasta, maupun madrasah ibtidaiyah, sepanjang calon santri memenuhi persyaratan usia dan mampu membaca Al-Quran dengan dasar tajwid yang cukup.'
  },
  {
    id: 'faq-10',
    question: 'Bagaimana sistem keamanan dan pengawasan santri selama 24 jam?',
    answer: 'Setiap lantai asrama diawasi oleh musyrif/murabbi (pembina asrama) yang tinggal satu komplek dengan santri. Terdapat CCTV di setiap lorong dan gerbang, serta penjagaan keamanan 24 jam oleh satpam pondok. Setiap santri wajib mengikuti aturan jadwal harian yang ketat dan disiplin, serta tabzir (sanksi) bagi pelanggaran.'
  }
];

export default function FAQ({ faqs: faqsProp }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState(null);

  const faqList = faqsProp?.length ? faqsProp : FAQ_DATA;

  const toggleAccordion = (id) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  const filteredFaqs = faqList.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <FrontLayout>
      <Head title="FAQ" />
      <div className="font-sans text-slate-800 bg-slate-50/50 pb-16" id="faq-page-root">

        <div
          className="relative py-12 text-white overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=1600')` }}
          id="faq-header"
        >
          <div className="absolute inset-0 bg-emerald-950/75 backdrop-blur-xs" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center md:text-left flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-extrabold sm:text-3xl">Pusat Bantuan (FAQ)</h1>
              <p className="text-xs text-emerald-200/80 mt-1.5">Temukan jawaban seputar teknis asrama, biaya Syahriah, kunjungan, serta berkas seleksi PPDB</p>
            </div>
            <div className="flex items-center justify-center gap-1 text-[11px] font-semibold text-emerald-300">
              <span>Beranda</span>
              <ChevronRight size={12} />
              <span className="text-white">FAQ</span>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-4 mt-8 sm:px-6">

          <div className="relative bg-white rounded-2xl shadow-2xs border border-slate-150 p-3 mb-8" id="faq-search-console">
            <Search className="absolute left-6 top-6 text-slate-400" size={16} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border-0 bg-slate-50 pl-11 pr-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500/50 text-slate-700 transition"
              placeholder="Ketik pertanyaan Anda di sini (contoh: asrama, biaya, ijazah)..."
              id="search-faq-input"
            />
          </div>

          <div className="space-y-4" id="faq-accordions-panel text-left">
            {filteredFaqs.map((faq) => {
              const isOpen = openIndex === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl bg-white border border-slate-150 overflow-hidden shadow-2xs text-left"
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 font-sans text-xs font-bold text-slate-900 text-left hover:bg-slate-50/50 transition gap-4"
                  >
                    <span className="flex items-start gap-2.5">
                      <HelpCircle className="text-emerald-600 shrink-0 mt-0.5" size={16} />
                      <span>{faq.question}</span>
                    </span>
                    {isOpen ? <ChevronUp size={16} className="text-slate-500 shrink-0" /> : <ChevronDown size={16} className="text-slate-500 shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 border-t border-slate-100 bg-slate-50/35 animate-in slide-in-from-top-1.5 duration-200">
                      <p className="text-xs text-slate-600 leading-relaxed font-sans whitespace-pre-line pl-6">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}

            {filteredFaqs.length === 0 && (
              <div className="bg-white rounded-2xl p-12 text-center shadow-2xs border border-slate-100" id="empty-faq-state">
                <p className="text-xs text-slate-400 italic">Pertanyaan tidak ditemukan. Coba ketik kata kunci lainnya.</p>
              </div>
            )}
          </div>

          <div className="mt-12 p-6 rounded-3xl bg-emerald-50 border border-emerald-150 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4" id="faq-support-box">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-emerald-100 p-3 text-emerald-800 shrink-0 hidden sm:block">
                <MessageSquare size={18} />
              </div>
              <div>
                <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">Pertanyaan Belum Terjawab?</h4>
                <p className="text-[11px] text-slate-500 leading-normal mt-1">Kami menyediakan admin pendamping pendaftar yang siap membantu memandu Anda via chat harian.</p>
              </div>
            </div>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-sans text-xs font-bold px-6 py-2.5 shadow-2xs hover:shadow-xs transition inline-flex items-center gap-1.5 shrink-0"
            >
              Hubungi Operator
            </a>
          </div>

        </div>

      </div>
    </FrontLayout>
  );
}
