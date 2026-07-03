import { useState } from 'react';
import { Link, usePage, router } from '@inertiajs/react';
import { Home, User, BookOpen, FileText, Compass, Phone, Menu, X, ChevronDown, Award, HelpCircle, LogIn, LayoutDashboard } from 'lucide-react';
import Logo from './Logo';

export default function Navigation() {
  const { url, component } = usePage();
  const { auth } = usePage().props;
  const isAdmin = auth?.roles?.some(r => r === 'Super Admin' || r === 'Admin PPDB');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    { id: 'home', label: 'Beranda', icon: Home, href: '/' },
    { id: 'profil', label: 'Profil', icon: User, href: '/profil' },
    { id: 'ppdb-info', label: 'PPDB', icon: FileText, href: '/ppdb' },
    { id: 'berita', label: 'Berita', icon: Compass, href: '/berita' },
    { id: 'kontak', label: 'Kontak', icon: Phone, href: '/kontak' },
  ];

  const secondaryItems = [
    { id: 'program', label: 'Program Pendidikan', icon: BookOpen, href: '/program' },
    { id: 'galeri', label: 'Galeri Foto & Video', icon: Compass, href: '/galeri' },
    { id: 'prestasi', label: 'Prestasi Santri', icon: Award, href: '/prestasi' },
    { id: 'faq', label: 'Pertanyaan Umum (FAQ)', icon: HelpCircle, href: '/faq' },
    { id: 'ppdb-status', label: 'Cek Status PPDB', icon: FileText, href: '/ppdb/status' },
  ];

  const isActive = (path) => {
    if (path === '/') return url === '/';
    return url.startsWith(path);
  };

  const isAuthPage = component?.startsWith('Auth');

  if (isAuthPage) return null;

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-emerald-100 bg-white/95 backdrop-blur shadow-sm transition-all duration-300">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="cursor-pointer">
            <Logo size={42} />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className={`font-sans text-sm font-medium transition-colors hover:text-emerald-600 ${url === '/' ? 'text-emerald-600 font-semibold' : 'text-slate-600'}`}>
              Beranda
            </Link>

            <div className="relative" onMouseEnter={() => setActiveDropdown('profil')} onMouseLeave={() => setActiveDropdown(null)}>
              <Link href="/profil" className={`flex items-center gap-1 font-sans text-sm font-medium transition-colors hover:text-emerald-600 ${isActive('/profil') ? 'text-emerald-600 font-semibold' : 'text-slate-600'}`}>
                Profil <ChevronDown size={14} className="mt-0.5" />
              </Link>
              {activeDropdown === 'profil' && (
                <div className="absolute left-0 mt-0 w-48 rounded-lg border border-slate-100 bg-white p-2 shadow-lg ring-1 ring-black/5">
                  <Link href="/profil" className="block w-full text-left rounded-md px-3 py-2 text-xs font-sans text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition">
                    Sejarah & Visi Misi
                  </Link>
                  <Link href="/profil#fasilitas" className="block w-full text-left rounded-md px-3 py-2 text-xs font-sans text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition">
                    Fasilitas Pondok
                  </Link>
                </div>
              )}
            </div>

            <div className="relative" onMouseEnter={() => setActiveDropdown('program')} onMouseLeave={() => setActiveDropdown(null)}>
              <Link href="/program" className={`flex items-center gap-1 font-sans text-sm font-medium transition-colors hover:text-emerald-600 ${isActive('/program') ? 'text-emerald-600 font-semibold' : 'text-slate-600'}`}>
                Pendidikan <ChevronDown size={14} className="mt-0.5" />
              </Link>
              {activeDropdown === 'program' && (
                <div className="absolute left-0 mt-0 w-52 rounded-lg border border-slate-100 bg-white p-2 shadow-lg ring-1 ring-black/5">
                  <Link href="/program#smp" className="block w-full text-left rounded-md px-3 py-2 text-xs font-sans text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition">
                    SMP Darul Akhyar
                  </Link>
                  <Link href="/program#ma" className="block w-full text-left rounded-md px-3 py-2 text-xs font-sans text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition">
                    MA Darul Akhyar
                  </Link>
                </div>
              )}
            </div>

            <div className="relative" onMouseEnter={() => setActiveDropdown('ppdb')} onMouseLeave={() => setActiveDropdown(null)}>
              <Link href="/ppdb" className={`flex items-center gap-1 font-sans text-sm font-medium transition-colors hover:text-emerald-600 ${isActive('/ppdb') ? 'text-emerald-600 font-semibold' : 'text-slate-600'}`}>
                PPDB <ChevronDown size={14} className="mt-0.5" />
              </Link>
              {activeDropdown === 'ppdb' && (
                <div className="absolute left-0 mt-0 w-52 rounded-lg border border-slate-100 bg-white p-2 shadow-lg ring-1 ring-black/5">
                  <Link href="/ppdb" className="block w-full text-left rounded-md px-3 py-2 text-xs font-sans text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition">
                    Informasi & Syarat PPDB
                  </Link>
                  <Link href="/ppdb/daftar" className="block w-full text-left rounded-md px-3 py-2 text-xs font-sans text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition font-medium">
                    Daftar PPDB Online
                  </Link>
                  <Link href="/ppdb/status" className="block w-full text-left rounded-md px-3 py-2 text-xs font-sans text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition">
                    Cek Status Kelulusan
                  </Link>
                </div>
              )}
            </div>

            <Link href="/berita" className={`font-sans text-sm font-medium transition-colors hover:text-emerald-600 ${isActive('/berita') ? 'text-emerald-600 font-semibold' : 'text-slate-600'}`}>
              Berita
            </Link>
            <Link href="/galeri" className={`font-sans text-sm font-medium transition-colors hover:text-emerald-600 ${isActive('/galeri') ? 'text-emerald-600 font-semibold' : 'text-slate-600'}`}>
              Galeri
            </Link>
            <Link href="/kontak" className={`font-sans text-sm font-medium transition-colors hover:text-emerald-600 ${isActive('/kontak') ? 'text-emerald-600 font-semibold' : 'text-slate-600'}`}>
              Hubungi Kami
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            {auth?.user ? (
              <>
                <span className="hidden sm:flex items-center gap-1.5 font-sans text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-150 rounded-lg px-3 py-1.5">
                  {isAdmin ? 'Admin' : `Wali Santri: ${auth.user.name}`}
                </span>
                <button onClick={() => router.post('/logout')} className="hidden sm:block rounded-lg border border-red-200 bg-red-50/50 px-3 py-1.5 font-sans text-xs font-semibold text-red-600 transition hover:bg-red-50">
                  Keluar
                </button>
              </>
            ) : (
              <>
                <Link href="/ppdb/daftar" className="hidden sm:flex items-center gap-1.5 rounded-lg border border-emerald-150 bg-emerald-50/50 px-3 py-1.5 font-sans text-xs font-semibold text-emerald-700 transition hover:bg-emerald-50">
                  <LogIn size={14} /> Masuk
                </Link>
                <Link href="/ppdb/daftar" className="hidden md:block rounded-full bg-amber-500 px-5 py-2 font-sans text-xs font-bold tracking-wide text-white shadow-md shadow-amber-500/25 transition duration-300 hover:bg-amber-600 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0">
                  Daftar PPDB
                </Link>
              </>
            )}
            <button onClick={() => setIsDrawerOpen(true)} className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 md:hidden" aria-label="Menu">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity" onClick={() => setIsDrawerOpen(false)} />
          <div className="relative flex w-full max-w-xs flex-col bg-white py-4 shadow-xl">
            <div className="flex items-center justify-between px-4 pb-4 border-b border-slate-100">
              <Logo size={36} />
              <button onClick={() => setIsDrawerOpen(false)} className="rounded-lg p-2 text-slate-500 hover:bg-slate-100">
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-2 py-4 space-y-1">
              <span className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">Menu Utama</span>
              {navItems.map((item) => {
                const IconComp = item.icon;
                return (
                  <Link key={item.id} href={item.href} onClick={() => setIsDrawerOpen(false)}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 font-sans text-sm font-medium transition ${isActive(item.href) ? 'bg-emerald-50 text-emerald-700' : 'text-slate-600 hover:bg-slate-50'}`}>
                    <IconComp size={18} /> {item.label}
                  </Link>
                );
              })}
              <div className="my-4 border-t border-slate-100" />
              <span className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">Menu Lainnya</span>
              {secondaryItems.map((item) => {
                const IconComp = item.icon;
                return (
                  <Link key={item.id} href={item.href} onClick={() => setIsDrawerOpen(false)}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 font-sans text-sm font-medium transition ${isActive(item.href) ? 'bg-emerald-50 text-emerald-700' : 'text-slate-600 hover:bg-slate-50'}`}>
                    <IconComp size={18} /> {item.label}
                  </Link>
                );
              })}
            </div>
            <div className="px-4 py-4 border-t border-slate-100 bg-slate-50">
              <p className="font-sans text-[10px] text-center text-slate-400">Official Website Darul Akhyar v1.0</p>
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-0 left-0 right-0 z-40 block bg-white/95 border-t border-slate-100 backdrop-blur shadow-lg md:hidden">
        <div className="flex h-16 items-center justify-around px-2">
          {navItems.map((item) => {
            const IconComp = item.icon;
            const active = isActive(item.href) || (item.id === 'ppdb-info' && (url.startsWith('/ppdb')));
            return (
              <Link key={item.id} href={item.href}
                className={`flex flex-col items-center justify-center gap-1 w-12 h-12 transition duration-200 ${active ? 'text-emerald-600' : 'text-slate-400 hover:text-slate-600'}`}>
                <IconComp size={18} className="transition-transform duration-200 active:scale-110" />
                <span className="text-[10px] font-sans font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
