import { useState } from 'react';
import { Head } from '@inertiajs/react';
import FrontLayout from '@/Layouts/FrontLayout';
import { Landmark, Compass, Award, Building, BookOpen, ShieldCheck, CheckCircle2, ChevronRight, Users, HeartPulse, Bed, FlaskConical, Monitor, Stethoscope } from 'lucide-react';
import { IMAGES, FACILITIES as FACILITIES_DATA, MANAGEMENT as MANAGEMENT_DATA } from '@/data';

const iconMap = {
  Landmark: Landmark, Bed, FlaskConical, BookOpen, Monitor, Stethoscope
};

const historyTimeline = [
  { year: '2015', title: 'Peletakan Batu Pertama', desc: 'KH. Dr. M. Syarifuddin mendirikan yayasan Darul Akhyar dengan pembebasan lahan wakaf seluas 1,5 hektar di Bekasi.' },
  { year: '2017', title: 'Pembangunan SMP & Asrama', desc: 'Angkatan pertama SMP Darul Akhyar resmi dibuka dengan 40 santri putra perintis dan asrama asri.' },
  { year: '2020', title: 'Peresmian Jenjang MA', desc: 'Madrasah Aliyah dibuka guna menampung alumni angkatan pertama SMP yang berdedikasi tinggi.' },
  { year: '2023', title: 'Akreditasi A & Lab Terintegrasi', desc: 'Meraih akreditasi unggulan (Grade A) serta memperluas sarana laboratorium sains & bahasa modern.' },
  { year: '2026', title: 'Pusat Tahfidz & Digitalisasi', desc: 'Meluncurkan sistem registrasi PPDB terintegrasi dan memperkuat program takhasus tahfidz 30 juz.' },
];

const misiList = [
  'Menyelenggarakan sistem pendidikan kepesantrenan terpadu dengan integrasi sains & riset modern.',
  'Mendidik hafalan Al-Quran secara tajam dengan metode talaqqi bersanad, fasih, mutqin, serta mengkaji hadits.',
  'Mengajarkan khazanah kitab-kitab kuning turots klasik dengan fokus penalaran nahwu-sharaf serta ushul fiqih.',
  'Menumbuhkan pembiasaan ibadah istiqomah, adab mulia, disiplin, berjiwa mandiri, tangguh, dan ukhuwah islamiyah.',
  'Membekali santri keterampilan kepemimpinan (leadership), teknologi informasi komputer, serta komunikasi dwibahasa aktif.'
];

export default function Profil() {
  const [activeTimeline, setActiveTimeline] = useState(0);

  return (
    <FrontLayout>
      <Head title="Profil Pondok" />
      <div className="font-sans text-slate-800 bg-slate-50/50 pb-16" id="profil-page-root">

        <div
          className="relative py-12 text-white overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url('${IMAGES.pesantren}')` }}
          id="profil-header"
        >
          <div className="absolute inset-0 bg-emerald-950/75 backdrop-blur-xs" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-2xl font-extrabold sm:text-3xl">Profil Pondok Pesantren</h1>
                <p className="text-xs text-emerald-200/80 mt-1.5">Mengenal lebih dekat visi mulia dan sejarah panjang Darul Akhyar</p>
              </div>
              <div className="flex items-center justify-center gap-1 text-[11px] font-semibold text-emerald-300">
                <span>Beranda</span>
                <ChevronRight size={12} />
                <span className="text-white">Profil</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 mt-12 sm:px-6 lg:px-8">

          <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100" id="sejarah-section">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 text-left">
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">Napak Tilas Yayasan</span>
                <h2 className="text-2xl font-extrabold text-slate-900 mt-1">Sejarah Singkat Pondok</h2>
                <div className="h-1 w-12 bg-emerald-600 rounded-full mt-2 mb-4" />
                <p className="text-xs text-slate-500 leading-relaxed space-y-4">
                  Pondok Pesantren Darul Akhyar didirikan pada tahun 2015 oleh KH. Dr. M. Syarifuddin, M.A. di atas tanah wakaf keluarga seluas 1,5 hektar di Kota Bekasi. Keprihatinan beliau terhadap degradasi moral generasi muda di tengah hiruk-pikuk perkotaan mendorong lahirnya lembaga pendidikan terpadu ini. Darul Akhyar lahir sebagai jawaban atas kebutuhan masyarakat urban akan pendidikan formal bermutu tinggi yang seimbang dengan penanaman nilai tauhid, adab, dan spiritualitas murni pesantren.
                </p>
                <p className="text-xs text-slate-500 leading-relaxed mt-3">
                  Dengan mengusung tagline "Beriman, Berilmu, Berakhlak Mulia", pondok ini memulai perjalanannya dengan membuka jenjang SMP pada tahun 2017. Berkat dukungan wali santri dan ridho Allah SWT, pembangunan asrama bertambah pesat, disusul pembukaan jenjang MA pada tahun 2020. Kini, Darul Akhyar menjelma menjadi salah satu rujukan pesantren modern terkemuka di Jawa Barat.
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="relative rounded-xl overflow-hidden aspect-video sm:aspect-square bg-emerald-50 border border-slate-100">
                  <img
                    src={IMAGES.pesantren}
                    alt="Sejarah Darul Akhyar"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                    <p className="text-xs font-semibold text-white">Komplek Pendidikan Utama Darul Akhyar</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 border-t border-slate-150 pt-8">
              <h3 className="text-sm font-bold text-center text-slate-800 uppercase tracking-wider mb-6">Milestone Perkembangan</h3>

              <div className="md:hidden space-y-6 text-left" id="timeline-mobile">
                {historyTimeline.map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start border-l-2 border-emerald-500 pl-4 relative">
                    <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-emerald-600 ring-4 ring-emerald-50" />
                    <div>
                      <span className="text-xs font-extrabold text-emerald-600">{item.year}</span>
                      <h4 className="text-xs font-bold text-slate-900 mt-0.5">{item.title}</h4>
                      <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="hidden md:block" id="timeline-desktop">
                <div className="flex justify-between items-center relative py-6">
                  <div className="absolute left-0 right-0 h-0.5 bg-slate-200 z-0" />
                  {historyTimeline.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTimeline(idx)}
                      className="relative z-10 flex flex-col items-center group shrink-0"
                      style={{ width: '20%' }}
                    >
                      <div className={`flex h-10 w-10 items-center justify-center rounded-full border-2 font-mono text-xs font-extrabold transition-all duration-300 ${
                        activeTimeline === idx
                          ? 'bg-emerald-600 border-emerald-600 text-white ring-4 ring-emerald-100 scale-110'
                          : 'bg-white border-slate-300 text-slate-500 hover:border-emerald-500 group-hover:scale-105'
                      }`}>
                        {item.year}
                      </div>
                      <span className={`text-[10px] font-bold mt-2 text-center truncate w-full ${
                        activeTimeline === idx ? 'text-emerald-700' : 'text-slate-400 group-hover:text-slate-600'
                      }`}>
                        {item.title}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="mt-4 rounded-xl bg-slate-50 p-5 text-left border border-slate-100 animate-in fade-in duration-300">
                  <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider">Detail Capaian Tahun {historyTimeline[activeTimeline].year}</h4>
                  <p className="text-xs font-extrabold text-slate-800 mt-1">{historyTimeline[activeTimeline].title}</p>
                  <p className="text-xs text-slate-500 leading-relaxed mt-2">{historyTimeline[activeTimeline].desc}</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-8" id="visi-misi-section">

            <div className="md:col-span-5 bg-gradient-to-br from-emerald-800 to-emerald-950 text-white rounded-2xl p-6 sm:p-8 shadow-md relative overflow-hidden flex flex-col justify-between text-left">
              <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-white/5 blur-2xl" />
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-300">Arah Haluan</span>
                <h2 className="text-2xl font-extrabold text-white mt-1">Visi Pondok</h2>
                <div className="h-1 w-12 bg-emerald-400 rounded-full mt-2" />
              </div>
              <div className="my-8 relative z-10">
                <span className="text-4xl font-serif text-emerald-300/30 absolute -top-6 -left-2">"</span>
                <p className="font-sans text-sm font-medium leading-relaxed italic text-emerald-100 pl-4">
                  Terwujudnya lembaga pendidikan Islam unggulan yang melahirkan generasi mukmin, muallim, hafidz, profesional, dan berakhlakul karimah yang bermanfaat bagi umat dan bangsa.
                </p>
                <span className="text-4xl font-serif text-emerald-300/30 absolute -bottom-10 right-0">"</span>
              </div>
              <p className="text-[10px] text-emerald-300 font-semibold uppercase tracking-wider">
                - Pondok Pesantren Darul Akhyar
              </p>
            </div>

            <div className="md:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 text-left">
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">Ikhtiar Perjuangan</span>
              <h2 className="text-2xl font-extrabold text-slate-900 mt-1">Misi Pondok</h2>
              <div className="h-1 w-12 bg-emerald-600 rounded-full mt-2 mb-6" />
              <div className="space-y-4" id="misi-list">
                {misiList.map((misi, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <div className="rounded-full bg-emerald-50 p-1 text-emerald-600 shrink-0 mt-0.5">
                      <CheckCircle2 size={16} />
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      <strong className="text-slate-800">{index + 1}.</strong> {misi}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </section>

          <section className="mt-12 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 text-center" id="organisasi-section">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">Tata Kelola Lembaga</span>
            <h2 className="text-2xl font-extrabold text-slate-900 mt-1">Struktur Organisasi</h2>
            <div className="mx-auto mt-2 h-1 w-12 bg-emerald-600 rounded-full mb-8" />

            <div className="flex flex-col items-center gap-6" id="organigram">
              <div className="relative rounded-xl border border-emerald-200 bg-emerald-50 p-4 w-72 shadow-xs">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-600 text-white p-1 text-[8px] font-bold uppercase tracking-widest px-2.5">
                  {MANAGEMENT_DATA[0].role}
                </div>
                <h4 className="text-sm font-extrabold text-emerald-950 mt-1">{MANAGEMENT_DATA[0].name}</h4>
              </div>

              <div className="h-6 w-0.5 bg-emerald-300" />

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full" id="management-subgrid">
                {MANAGEMENT_DATA.slice(1).map((m, idx) => (
                  <div key={idx} className="relative rounded-xl border border-slate-150 bg-slate-50 p-4 shadow-2xs flex flex-col justify-center min-h-[90px]">
                    <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">{m.role}</span>
                    <h4 className="text-xs font-bold text-slate-800 mt-1.5 leading-snug">{m.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-12 mb-8" id="fasilitas">
            <div className="text-center">
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">Sarana &amp; Prasarana</span>
              <h2 className="text-2xl font-extrabold text-slate-900 mt-1">Fasilitas Pondok</h2>
              <div className="mx-auto mt-2 h-1 w-12 bg-emerald-600 rounded-full" />
              <p className="mx-auto mt-3 max-w-xl text-xs text-slate-500">
                Sarana modern yang lengkap untuk menciptakan kenyamanan belajar dan membimbing kreativitas santri di lingkungan asri.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10" id="facilities-grid">
              {FACILITIES_DATA.map((fac, idx) => {
                const IconComp = iconMap[fac.icon];
                return (
                  <div key={idx} className="bg-white rounded-2xl p-5 shadow-2xs border border-slate-100 flex gap-4 items-start hover:shadow-md transition text-left duration-300">
                    <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600 shrink-0">
                      {IconComp && <IconComp size={22} />}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">{fac.title}</h3>
                      <p className="text-[11px] text-slate-500 leading-relaxed mt-2">{fac.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

        </div>

      </div>
    </FrontLayout>
  );
}
