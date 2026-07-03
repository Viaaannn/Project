import { Mail, Phone, MapPin, MessageSquare, Instagram, Youtube, Facebook, ArrowUp } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const handleScrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-emerald-950 text-emerald-100/90 border-t border-emerald-900 font-sans pb-20 md:pb-0">
      <div className="h-2 w-full bg-gradient-to-r from-amber-500 via-emerald-500 to-amber-500" />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:gap-12">
          <div className="flex flex-col gap-4">
            <Logo size={48} light={true} />
            <p className="text-xs text-emerald-200/75 leading-relaxed mt-2">
              Pondok Pesantren Darul Akhyar berkomitmen mencetak generasi Qurani yang beriman, berilmu, dan berakhlakul karimah. Mengintegrasikan kurikulum nasional dengan kajian kitab kuning salafiyah tradisional serta sains modern.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="rounded-full bg-emerald-900 p-2 text-emerald-300 hover:bg-emerald-800 hover:text-white transition" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="rounded-full bg-emerald-900 p-2 text-emerald-300 hover:bg-emerald-800 hover:text-white transition" aria-label="YouTube">
                <Youtube size={16} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="rounded-full bg-emerald-900 p-2 text-emerald-300 hover:bg-emerald-800 hover:text-white transition" aria-label="Facebook">
                <Facebook size={16} />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-sans text-sm font-bold tracking-wider uppercase text-amber-400">Peta Situs</h3>
            <ul className="space-y-2 mt-1">
              <li><a href="/" className="text-xs text-emerald-200/80 hover:text-white hover:underline transition">Beranda Utama</a></li>
              <li><a href="/profil" className="text-xs text-emerald-200/80 hover:text-white hover:underline transition">Sejarah & Profil Pondok</a></li>
              <li><a href="/program" className="text-xs text-emerald-200/80 hover:text-white hover:underline transition">Program Studi SMP & MA</a></li>
              <li><a href="/ppdb" className="text-xs text-emerald-200/80 hover:text-white hover:underline transition">Informasi Penerimaan PPDB</a></li>
              <li><a href="/berita" className="text-xs text-emerald-200/80 hover:text-white hover:underline transition">Berita & Agenda Kegiatan</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-sans text-sm font-bold tracking-wider uppercase text-amber-400">Hubungi Kami</h3>
            <ul className="space-y-3 mt-1 text-xs text-emerald-200/80">
              <li className="flex gap-2.5 items-start">
                <MapPin size={16} className="text-amber-400 shrink-0 mt-0.5" />
                <span>Jl. Pendidikan No. 74, RT.02/RW.05, Kel. Harapan Baru, Kec. Bekasi Utara, Kota Bekasi, Jawa Barat - 17123</span>
              </li>
              <li className="flex gap-2.5 items-center"><Phone size={16} className="text-amber-400 shrink-0" /><span>(021) 8899-7744</span></li>
              <li className="flex gap-2.5 items-center"><Mail size={16} className="text-amber-400 shrink-0" /><span>info@darulakhyar.ponpes.id</span></li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-sans text-sm font-bold tracking-wider uppercase text-amber-400">Konsultasi PPDB</h3>
            <p className="text-xs text-emerald-200/75 leading-relaxed mt-1">
              Ada pertanyaan seputar persyaratan, pendaftaran, atau ujian PPDB? Hubungi Customer Service kami via WhatsApp.
            </p>
            <a href="https://wa.me/6281155554401?text=Assalamualaikum%20Humas%20Darul%20Akhyar,%20saya%20ingin%20bertanya%20seputar%20PPDB..." target="_blank" rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 font-sans text-xs font-bold text-white shadow hover:bg-emerald-500 transition mt-2 hover:-translate-y-0.5">
              <MessageSquare size={16} /> Chat WhatsApp Humas
            </a>
          </div>
        </div>

        <div className="my-8 border-t border-emerald-900/60" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-300/60">
          <p className="text-center sm:text-left">&copy; {new Date().getFullYear()} Pondok Pesantren Darul Akhyar. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <button onClick={handleScrollTop} className="flex items-center gap-1.5 rounded-full bg-emerald-900 px-3 py-1 text-[11px] font-semibold text-emerald-200 hover:bg-emerald-800 hover:text-white transition">
              Kembali Ke Atas <ArrowUp size={12} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
