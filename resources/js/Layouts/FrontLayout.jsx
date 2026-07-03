import { useEffect } from 'react';
import { usePage } from '@inertiajs/react';
import Navigation from '@/Components/Front/Navigation';
import Footer from '@/Components/Front/Footer';

export default function FrontLayout({ children }) {
  const { url } = usePage();

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [url]);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800">
      <Navigation />
      <main className="flex-1 shrink-0">
        {children}
      </main>
      <Footer />
    </div>
  );
}
