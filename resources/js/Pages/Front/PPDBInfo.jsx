import { useState } from 'react';
import { Link, Head } from '@inertiajs/react';
import FrontLayout from '@/Layouts/FrontLayout';
import { ChevronRight, Calendar, ClipboardCheck, DollarSign, HelpCircle, ArrowRight, AlertCircle, Sparkles } from 'lucide-react';
import { PPDB_FEES, REQUIREMENTS_SMP, REQUIREMENTS_MA, GENERAL_REQUIREMENTS } from '@/data';

const INITIAL_TIMELINE = [
  { id: 't-1', stageName: 'Gelombang I (Seleksi Awal)', startDate: '2026-05-01', endDate: '2026-07-15', isActive: true },
  { id: 't-2', stageName: 'Ujian Lisan & Wawancara Gelombang I', startDate: '2026-07-20', endDate: '2026-07-25', isActive: false },
  { id: 't-3', stageName: 'Pengumuman Gelombang I', startDate: '2026-07-28', endDate: '2026-07-28', isActive: false },
  { id: 't-4', stageName: 'Gelombang II (Jika Kuota Tersisa)', startDate: '2026-08-05', endDate: '2026-08-20', isActive: false },
  { id: 't-5', stageName: 'Ujian Lisan & Wawancara Gelombang II', startDate: '2026-08-25', endDate: '2026-08-27', isActive: false },
  { id: 't-6', stageName: 'Pengumuman Gelombang II & Daftar Ulang', startDate: '2026-08-30', endDate: '2026-09-05', isActive: false },
];

const alurPendaftaran = [
  { step: 1, title: 'Buat Akun Registrasi', desc: 'Daftarkan nama lengkap, nomor WhatsApp aktif, dan email wali santri untuk membuat akun pendaftaran baru.' },
  { step: 2, title: 'Masuk (Login)', desc: 'Gunakan email dan kata sandi yang telah Anda buat untuk masuk ke dasbor pengisian formulir.' },
  { step: 3, title: 'Lengkapi Formulir', desc: 'Isi seluruh data diri calon santri, data orang tua/wali, serta pilihan unit pendidikan beserta program unggulannya.' },
  { step: 4, title: 'Unggah Dokumen Asli', desc: 'Unggah pindaian (scan) berkas persyaratan utama seperti Pas Foto, Akta Lahir, Kartu Keluarga, dan Ijazah Terakhir.' },
  { step: 5, title: 'Verifikasi Berkas', desc: 'Panitia akan memverifikasi keabsahan dokumen. Anda dapat memantau status secara berkala di halaman "Cek Status".' },
  { step: 6, title: 'Ujian Lisan & Pengumuman', desc: 'Santri mengikuti ujian lisan membaca Al-Quran & wawancara online. Pengumuman kelulusan tertera langsung di sistem.' },
];

export default function PPDBInfo({ timeline: timelineProp }) {
  const [activeReqTab, setActiveReqTab] = useState('SMP');

  const TIMELINE = timelineProp?.length ? timelineProp : INITIAL_TIMELINE;

  const requirements = {
    SMP: { dokumen: REQUIREMENTS_SMP, umum: GENERAL_REQUIREMENTS },
    MA: { dokumen: REQUIREMENTS_MA, umum: GENERAL_REQUIREMENTS }
  };

  return (
    <FrontLayout>
      <Head title="PPDB" />
      <div className="font-sans text-slate-800 bg-slate-50/50 pb-16" id="ppdb-info-page">

        <div
          className="relative py-12 text-white overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=1600')` }}
          id="ppdb-header"
        >
          <div className="absolute inset-0 bg-emerald-950/75 backdrop-blur-xs" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-2xl font-extrabold sm:text-3xl">Penerimaan Santri Baru (PPDB)</h1>
                <p className="text-xs text-emerald-200/80 mt-1.5">Tahun Ajaran 2026 / 2027 &bull; Menyiapkan generasi robbani yang handal</p>
              </div>
              <div className="flex items-center justify-center gap-1 text-[11px] font-semibold text-emerald-300">
                <span>Beranda</span>
                <ChevronRight size={12} />
                <span className="text-white">PPDB Informasi</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 mt-12 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            <div className="lg:col-span-8 space-y-10 text-left">

              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100" id="ppdb-timeline-card">
                <div className="flex items-center gap-2 mb-6">
                  <Calendar className="text-emerald-600" size={20} />
                  <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider">Jadwal &amp; Gelombang Seleksi</h2>
                </div>
                <div className="space-y-6 relative border-l-2 border-slate-100 pl-6 ml-4" id="timeline-steps">
                  {TIMELINE.map((time) => (
                    <div key={time.id} className="relative">
                      <span className={`absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full ring-4 ${time.isActive ? 'bg-amber-500 ring-amber-100 animate-pulse' : 'bg-emerald-600 ring-emerald-150'}`} />
                      <div>
                        <span className={`text-[9px] font-bold uppercase px-2 py-0.5 rounded-md ${time.isActive ? 'bg-amber-100 text-amber-800' : 'bg-emerald-50 text-emerald-800'}`}>
                          {time.isActive ? 'Tahap Aktif Sekarang' : 'Tahap PPDB'}
                        </span>
                        <h4 className="text-xs font-bold text-slate-800 mt-2">{time.stageName}</h4>
                        <p className="text-[11px] text-slate-500 font-semibold mt-1">
                          {new Date(time.startDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })} s/d {new Date(time.endDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100" id="ppdb-requirements-card">
                <div className="flex items-center justify-between gap-4 border-b border-slate-150 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <ClipboardCheck className="text-emerald-600" size={20} />
                    <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider">Persyaratan Pendaftaran</h2>
                  </div>
                  <div className="flex bg-slate-100 rounded-lg p-1 text-xs font-bold">
                    <button
                      onClick={() => setActiveReqTab('SMP')}
                      className={`rounded-md px-3 py-1 transition ${activeReqTab === 'SMP' ? 'bg-white text-emerald-800 shadow-2xs' : 'text-slate-500 hover:text-slate-800'}`}
                    >
                      SMP
                    </button>
                    <button
                      onClick={() => setActiveReqTab('MA')}
                      className={`rounded-md px-3 py-1 transition ${activeReqTab === 'MA' ? 'bg-white text-emerald-800 shadow-2xs' : 'text-slate-500 hover:text-slate-800'}`}
                    >
                      MA
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="requirements-panel">
                  <div>
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">Persyaratan Dokumen (Upload)</h4>
                    <ul className="space-y-2 text-xs text-slate-600">
                      {requirements[activeReqTab].dokumen.map((doc, idx) => (
                        <li key={idx} className="flex gap-2 items-start">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">Persyaratan Umum</h4>
                    <ul className="space-y-2 text-xs text-slate-600">
                      {requirements[activeReqTab].umum.map((um, idx) => (
                        <li key={idx} className="flex gap-2 items-start">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                          <span>{um}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100" id="ppdb-fees-card">
                <div className="flex items-center gap-2 mb-6">
                  <DollarSign className="text-emerald-600" size={20} />
                  <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider">Rincian Investasi Pendidikan</h2>
                </div>

                <div className="space-y-3 md:hidden" id="fees-mobile">
                  {PPDB_FEES.map((b, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-left">
                      <h4 className="text-xs font-bold text-slate-800">{b.item}</h4>
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-150">
                        <span className="text-xs font-extrabold text-emerald-700">{b.amount}</span>
                        <span className="text-[10px] text-slate-400 font-medium">{b.type === 'Sekali' ? 'Dibayarkan sekali' : 'Iuran bulanan'}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="hidden md:block overflow-x-auto rounded-xl border border-slate-150" id="fees-desktop">
                  <table className="w-full text-xs text-slate-700 text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-150 font-bold">
                        <th className="p-4">Komponen Biaya Masuk</th>
                        <th className="p-4 w-40 text-emerald-800">Nominal</th>
                        <th className="p-4">Keterangan</th>
                      </tr>
                    </thead>
                    <tbody>
                      {PPDB_FEES.map((b, idx) => (
                        <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50/50 transition">
                          <td className="p-4 font-semibold text-slate-800">{b.item}</td>
                          <td className="p-4 font-extrabold text-emerald-700">{b.amount}</td>
                          <td className="p-4 text-slate-500">{b.type === 'Sekali' ? 'Dibayarkan sekali' : 'Iuran bulanan'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 flex items-start gap-3 rounded-lg bg-amber-50 border border-amber-100 p-4" id="fees-disclaimer">
                  <AlertCircle size={18} className="text-amber-600 shrink-0 mt-0.5" />
                  <div className="text-xs text-amber-900/80 leading-relaxed">
                    <p className="font-bold text-amber-950">Catatan Penting Wali Santri:</p>
                    <p className="mt-1">
                      Seluruh rincian biaya dapat diangsur sebanyak 2 kali (maksimal pelunasan H-14 masuk pondok). Pesantren tidak memungut biaya pembangunan tambahan di luar tabel resmi ini selama santri aktif belajar.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            <div className="lg:col-span-4 bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-left" id="ppdb-steps-sidebar">
              <div className="flex items-center gap-2 pb-4 border-b border-slate-100 mb-6">
                <HelpCircle className="text-emerald-600" size={18} />
                <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Alur &amp; Cara Mendaftar</h2>
              </div>

              <div className="space-y-6" id="alur-step-list">
                {alurPendaftaran.map((al) => (
                  <div key={al.step} className="flex gap-4">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 font-mono text-xs font-black shrink-0 border border-emerald-100 shadow-2xs">
                      {al.step}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-800 leading-none">{al.title}</h4>
                      <p className="text-[10px] text-slate-500 leading-relaxed mt-1.5">{al.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link
                  href="/ppdb/daftar"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-amber-500 py-3.5 font-sans text-xs font-extrabold uppercase tracking-widest text-white shadow hover:bg-amber-600 transition"
                  id="sidebar-cta-register"
                >
                  Mulai Daftar Sekarang <ArrowRight size={14} />
                </Link>
                <Link
                  href="/ppdb-status"
                  className="w-full flex items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 font-sans text-xs font-semibold text-slate-700 hover:bg-slate-50 transition mt-3"
                  id="sidebar-cta-check"
                >
                  Cek Status Kelulusan
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </FrontLayout>
  );
}
