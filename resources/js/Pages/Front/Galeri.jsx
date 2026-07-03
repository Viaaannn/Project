import { useState } from 'react';
import { Head } from '@inertiajs/react';
import FrontLayout from '@/Layouts/FrontLayout';
import { ChevronRight, Play, X, ChevronLeft, Image, Film, Sparkles } from 'lucide-react';
import { IMAGES, GALLERY_DATA } from '@/data';

export default function Galeri({ galleries: galleriesProp }) {
  const [activeSegment, setActiveSegment] = useState('FOTO');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [activeVideoUrl, setActiveVideoUrl] = useState(null);
  const [activeVideoTitle, setActiveVideoTitle] = useState('');

  const photoGallery = [
    { id: 1, title: 'Kajian Rutin Santri', desc: 'Kegiatan pengajian rutin kitab kuning bersama pengasuh pesantren.', img: IMAGES.classroom },
    { id: 2, title: 'Laboratorium Sains Terpadu', desc: 'Praktikum Kimia oleh santri Madrasah Aliyah di ruang lab AC.', img: IMAGES.laboratory },
    { id: 3, title: 'Gedung Asrama AC Baru', desc: 'Fasilitas asrama modern berfasilitas AC, ranjang bertingkat rapi.', img: IMAGES.dormitory },
    { id: 4, title: 'Wisuda Tahfidz Al-Quran', desc: 'Penganugerahan sanad hafalan 30 Juz bagi santri berprestasi.', img: IMAGES.ceremony },
    { id: 5, title: 'Lapangan Futsal Pesantren', desc: 'Kegiatan olahraga sore di lapangan futsal rumput sintetis.', img: IMAGES.sports },
    { id: 6, title: 'Pramuka & Bela Negara', desc: 'Pelatihan kedisiplinan dan pramuka pekanan di halaman utama.', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600' },
    { id: 7, title: 'Seni Kaligrafi Arab', desc: 'Pelatihan ekstrakurikuler kaligrafi lukis kanvas oleh ustadz seni.', img: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&q=80&w=600' },
    { id: 8, title: 'Upacara Kemerdekaan RI', desc: 'Petugas paskibra gabungan santri SMP & MA Darul Akhyar.', img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600' },
  ];

  const videoGallery = [
    { id: 1, title: 'Profil Singkat Pondok Pesantren', desc: 'Melihat suasana keseharian belajar santri & fasilitas asrama AC.', durasi: '05:24', thumb: IMAGES.classroom, embed: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { id: 2, title: 'Klip Wisuda Tahfidz Qurani 2026', desc: 'Dokumentasi penuh khidmat kelulusan santri takhasus hafal 30 Juz.', durasi: '12:15', thumb: IMAGES.ceremony, embed: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { id: 3, title: 'Keseruan Ekstrakurikuler Robotik', desc: 'Santri MA merakit & menguji coba robot line-follower juara nasional.', durasi: '04:10', thumb: IMAGES.laboratory, embed: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { id: 4, title: 'Kegiatan Muhadhoroh 3 Bahasa', desc: 'Latihan pidato santri menggunakan Bahasa Arab, Inggris, dan Indonesia.', durasi: '08:42', thumb: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600', embed: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  ];

  const handlePrevPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === 0 ? photoGallery.length - 1 : lightboxIndex - 1);
    }
  };

  const handleNextPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === photoGallery.length - 1 ? 0 : lightboxIndex + 1);
    }
  };

  return (
    <FrontLayout>
      <Head title="Galeri" />
      <div className="font-sans text-slate-800 bg-slate-50/50 pb-16" id="galeri-page-root">

        <div
          className="relative py-12 text-white overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url('${IMAGES.pesantren}')` }}
          id="galeri-header"
        >
          <div className="absolute inset-0 bg-emerald-950/75 backdrop-blur-xs" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center md:text-left flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-extrabold sm:text-3xl">Galeri Pesantren</h1>
              <p className="text-xs text-emerald-200/80 mt-1.5">Potret kehangatan belajar santri, infrastruktur modern, dan dinamika kegiatan asrama harian</p>
            </div>
            <div className="flex items-center justify-center gap-1 text-[11px] font-semibold text-emerald-300">
              <span>Beranda</span>
              <ChevronRight size={12} />
              <span className="text-white">Galeri</span>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 mt-8 sm:px-6 lg:px-8">

          <div className="flex justify-center border-b border-slate-200 bg-white rounded-xl p-1.5 shadow-2xs mb-8 max-w-sm mx-auto" id="galeri-segment-buttons">
            <button
              onClick={() => setActiveSegment('FOTO')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg font-sans text-xs font-bold transition ${activeSegment === 'FOTO' ? 'bg-emerald-600 text-white shadow' : 'text-slate-600 hover:bg-slate-50 hover:text-emerald-700'}`}
            >
              <Image size={15} />
              <span>Dokumentasi Foto</span>
            </button>
            <button
              onClick={() => setActiveSegment('VIDEO')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg font-sans text-xs font-bold transition ${activeSegment === 'VIDEO' ? 'bg-emerald-600 text-white shadow' : 'text-slate-600 hover:bg-slate-50 hover:text-emerald-700'}`}
            >
              <Film size={15} />
              <span>Klip Video (Vlog)</span>
            </button>
          </div>

          {activeSegment === 'FOTO' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-in fade-in duration-300 text-left" id="photo-grid-panel">
              {photoGallery.map((photo, index) => (
                <div
                  key={photo.id}
                  onClick={() => setLightboxIndex(index)}
                  className="cursor-pointer group rounded-xl bg-white border border-slate-150 overflow-hidden shadow-2xs hover:shadow-md transition duration-300"
                >
                  <div className="relative aspect-square overflow-hidden bg-slate-100">
                    <img
                      src={photo.img}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-350 flex items-center justify-center text-white">
                      <span className="text-[10px] uppercase font-bold tracking-widest border border-white/40 px-3 py-1.5 rounded-md backdrop-blur-xs flex items-center gap-1">
                        <Sparkles size={11} className="text-amber-400" /> Lihat Detail
                      </span>
                    </div>
                  </div>
                  <div className="p-3">
                    <h4 className="text-xs font-bold text-slate-950 group-hover:text-emerald-700 transition truncate leading-none">{photo.title}</h4>
                    <p className="text-[10px] text-slate-500 truncate mt-1.5">{photo.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeSegment === 'VIDEO' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto animate-in fade-in duration-300 text-left" id="video-grid-panel">
              {videoGallery.map((vid) => (
                <div
                  key={vid.id}
                  onClick={() => {
                    setActiveVideoUrl(vid.embed);
                    setActiveVideoTitle(vid.title);
                  }}
                  className="cursor-pointer group bg-white rounded-xl border border-slate-150 overflow-hidden shadow-2xs hover:shadow-md hover:border-emerald-100 transition duration-300"
                >
                  <div className="relative aspect-video bg-slate-900 overflow-hidden flex items-center justify-center">
                    <img
                      src={vid.thumb}
                      alt={vid.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-103 transition duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="relative h-12 w-12 rounded-full bg-white/90 text-emerald-800 shadow-md group-hover:bg-amber-500 group-hover:text-white group-hover:scale-110 transition flex items-center justify-center">
                      <Play size={20} className="ml-1 fill-current shrink-0" />
                    </div>
                    <span className="absolute bottom-2 right-2 rounded-md bg-black/60 backdrop-blur-xs text-white font-mono text-[9px] font-bold px-2 py-0.5">
                      {vid.durasi}
                    </span>
                  </div>
                  <div className="p-4">
                    <h4 className="text-xs font-bold text-slate-900 leading-snug group-hover:text-emerald-700 transition">{vid.title}</h4>
                    <p className="text-[10px] text-slate-500 leading-relaxed mt-1">{vid.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

        {lightboxIndex !== null && (
          <div className="fixed inset-0 bg-black/95 z-50 flex flex-col justify-between p-4" id="lightbox-overlay">
            <div className="flex items-center justify-between text-white w-full max-w-5xl mx-auto py-2">
              <span className="text-xs font-bold font-mono text-slate-400">Potret {lightboxIndex + 1} dari {photoGallery.length}</span>
              <button
                onClick={() => setLightboxIndex(null)}
                className="rounded-full bg-slate-800 p-2 text-white hover:bg-slate-700 transition"
                title="Tutup"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex items-center justify-between w-full max-w-5xl mx-auto flex-1 gap-4">
              <button
                onClick={handlePrevPhoto}
                className="rounded-full bg-white/10 text-white p-3 hover:bg-white/20 transition shrink-0"
                title="Sebelumnya"
              >
                <ChevronLeft size={24} />
              </button>
              <div className="max-h-[70vh] flex items-center justify-center overflow-hidden max-w-3xl">
                <img
                  src={photoGallery[lightboxIndex].img}
                  alt={photoGallery[lightboxIndex].title}
                  className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-200"
                  referrerPolicy="no-referrer"
                />
              </div>
              <button
                onClick={handleNextPhoto}
                className="rounded-full bg-white/10 text-white p-3 hover:bg-white/20 transition shrink-0"
                title="Selanjutnya"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            <div className="text-center text-white w-full max-w-3xl mx-auto py-4">
              <h4 className="text-sm font-extrabold text-amber-400">{photoGallery[lightboxIndex].title}</h4>
              <p className="text-[11px] text-slate-300 mt-1 max-w-lg mx-auto">{photoGallery[lightboxIndex].desc}</p>
            </div>
          </div>
        )}

        {activeVideoUrl && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" id="video-overlay">
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-2xl w-full text-left relative animate-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-100 bg-slate-50">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">{activeVideoTitle}</h4>
                <button
                  onClick={() => {
                    setActiveVideoUrl(null);
                    setActiveVideoTitle('');
                  }}
                  className="text-slate-400 hover:text-slate-600 rounded-lg p-1.5"
                  title="Tutup"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="aspect-video bg-black">
                <iframe
                  src={activeVideoUrl}
                  title={activeVideoTitle}
                  className="w-full h-full"
                  allowFullScreen
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 bg-slate-50 text-[10px] text-slate-400 leading-normal">
                * Video disematkan menggunakan emulasi pemutar YouTube aman Darul Akhyar Boarding School.
              </div>
            </div>
          </div>
        )}

      </div>
    </FrontLayout>
  );
}
