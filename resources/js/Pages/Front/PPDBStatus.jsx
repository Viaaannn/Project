import { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import { Search, ChevronRight, FileText, CheckCircle2, AlertTriangle, XCircle, Upload, ArrowRight, Check } from 'lucide-react';
import FrontLayout from '@/Layouts/FrontLayout';

export default function PPDBStatus({ applicants: applicantsProp }) {
  const [query, setQuery] = useState('');
  const [searched, setSearched] = useState(false);
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [revisedFile, setRevisedFile] = useState(null);
  const [submittingRevision, setSubmittingRevision] = useState(false);
  const [revisionSuccess, setRevisionSuccess] = useState(false);

  const applicantList = applicantsProp?.length ? applicantsProp : mockApplicants;

  const mockApplicants = [
    { id: 'REG-2026-001', regNumber: 'REG-2026-001', namaLengkap: 'Ahmad Rafif Azzahra', programPendidikan: 'SMP Darul Akhyar', programUnggulan: ['Tahfidz 30 Juz', 'Kitab Kuning'], createdAt: '2026-06-25T11:20:00Z', status: 'Pendaftar Baru' },
    { id: 'REG-2026-002', regNumber: 'REG-2026-002', namaLengkap: 'Farhan Ramadhan', programPendidikan: 'SMP Darul Akhyar', programUnggulan: ['Sains & Robotik'], createdAt: '2026-06-29T08:05:00Z', status: 'Butuh Revisi', adminNotes: 'Scan Ijazah tidak terbaca dengan jelas (blur). Harap upload ulang.' },
    { id: 'REG-2026-003', regNumber: 'REG-2026-003', namaLengkap: 'Muhammad Yusuf Al-Hafizh', programPendidikan: 'MA Darul Akhyar', programUnggulan: ['Tahfidz 30 Juz', 'Kitab Kuning'], createdAt: '2026-06-30T10:15:00Z', status: 'Lolos Administrasi' },
    { id: 'REG-2026-004', regNumber: 'REG-2026-004', namaLengkap: 'Zaki Amrullah', programPendidikan: 'SMP Darul Akhyar', programUnggulan: ['Tahfidz 30 Juz'], createdAt: '2026-07-01T15:30:00Z', status: 'Perlu Verifikasi' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    setSearched(true);
    const q = query.toUpperCase().trim();
    const found = applicantList.find(a => a.id === q || a.regNumber === q || a.regNumber === 'REG-' + q.replace(/^REG-/i, ''));
    setSelectedApplicant(found || null);
    setRevisionSuccess(false);
    setRevisedFile(null);
  };

  const getStatusBadge = (status) => {
    const badges = {
      'Pendaftar Baru': { bg: 'bg-blue-50 text-blue-800 border-blue-200', dot: 'bg-blue-500' },
      'Perlu Verifikasi': { bg: 'bg-amber-50 text-amber-800 border-amber-200', dot: 'bg-amber-500' },
      'Lolos Administrasi': { bg: 'bg-emerald-50 text-emerald-800 border-emerald-200', dot: 'bg-emerald-500' },
      'Ditolak': { bg: 'bg-red-50 text-red-800 border-red-200', dot: 'bg-red-500' },
      'Butuh Revisi': { bg: 'bg-orange-50 text-orange-800 border-orange-200', dot: 'bg-orange-500' },
      'Lolos Seleksi': { bg: 'bg-purple-50 text-purple-800 border-purple-200', dot: 'bg-purple-500' },
      'Selesai': { bg: 'bg-slate-50 text-slate-800 border-slate-200', dot: 'bg-slate-500' },
    };
    return badges[status] || { bg: 'bg-slate-50 text-slate-500 border-slate-200', dot: 'bg-slate-400' };
  };

  const handleRevisionFileSelect = (e) => {
    const files = e.target.files;
    if (files && files[0]) {
      const file = files[0];
      if (file.size > 2 * 1024 * 1024) {
        alert('File revisi melebihi batas 2 MB!');
        return;
      }
      setRevisedFile(file);
    }
  };

  const submitRevision = () => {
    if (!revisedFile || !selectedApplicant) return;
    setSubmittingRevision(true);
    setTimeout(() => {
      setSelectedApplicant(prev => ({ ...prev, status: 'Perlu Verifikasi', adminNotes: `[Revisi Terkirim: ${revisedFile.name}]` }));
      setSubmittingRevision(false);
      setRevisionSuccess(true);
      setRevisedFile(null);
    }, 1500);
  };

  const isStatusComplete = (s) => ['Lolos Administrasi', 'Lolos Seleksi', 'Selesai'].includes(s);
  const isStatusRevisi = (s) => s === 'Butuh Revisi';
  const isStatusDitolak = (s) => s === 'Ditolak';
  const isStatusSelesai = (s) => s === 'Selesai';
  const isStatusLolosSeleksi = (s) => ['Lolos Seleksi', 'Selesai'].includes(s);

  return (
    <FrontLayout>
      <Head title="Cek Status PPDB" />
      <div className="font-sans text-slate-800 bg-slate-50/50 pb-16">
        <div className="relative py-12 text-white overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=1600')` }}>
          <div className="absolute inset-0 bg-emerald-950/75 backdrop-blur-xs" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center md:text-left flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-extrabold sm:text-3xl">Cek Status PPDB Online</h1>
              <p className="text-xs text-emerald-200/80 mt-1.5">Gunakan nomor registrasi Anda untuk melihat kelulusan berkas dan hasil tes lisan</p>
            </div>
            <div className="flex items-center justify-center gap-1 text-[11px] font-semibold text-emerald-300">
              <span>Beranda</span>
              <ChevronRight size={12} />
              <span className="text-white">Cek Status</span>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-2xl px-4 mt-10 sm:px-6">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 text-center">
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 items-center">
              <div className="relative w-full">
                <Search className="absolute left-3.5 top-3.5 text-slate-400" size={16} />
                <input type="text" required value={query} onChange={(e) => setQuery(e.target.value.toUpperCase())}
                  className="w-full rounded-xl border border-slate-200 pl-10 pr-3 py-3 font-mono text-sm font-bold tracking-widest text-emerald-950 focus:border-emerald-500 focus:outline-none transition uppercase"
                  placeholder="CONTOH: REG-2026-002" />
              </div>
              <button type="submit" className="w-full sm:w-auto shrink-0 rounded-xl bg-emerald-600 px-6 py-3 font-sans text-xs font-bold tracking-wider text-white shadow hover:bg-emerald-500 transition uppercase">
                Cek Status
              </button>
            </form>
          </div>

          {searched && (
            <div className="mt-8 animate-in fade-in duration-300">
              {!selectedApplicant ? (
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 text-center flex flex-col items-center">
                  <div className="rounded-full bg-slate-50 p-4 text-slate-400 mb-4"><XCircle size={40} /></div>
                  <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">Nomor Registrasi Tidak Ditemukan</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mt-2 max-w-sm">
                    Maaf, nomor pendaftaran <strong className="text-slate-800 font-mono">{query}</strong> tidak ditemukan.
                  </p>
                  <div className="my-6 border-t border-slate-100 w-full" />
                  <div className="flex flex-col sm:flex-row gap-3 w-full">
                    <Link href="/kontak" className="flex-1 rounded-xl border border-slate-200 py-3 text-xs font-bold text-slate-700 hover:bg-slate-50 transition text-center">Hubungi Bantuan</Link>
                    <Link href="/ppdb/daftar" className="flex-1 rounded-xl bg-emerald-600 py-3 text-xs font-bold text-white shadow hover:bg-emerald-500 transition text-center">Daftar Akun PPDB Baru</Link>
                  </div>
                </div>
              ) : (
                <div className="space-y-6 text-left">
                  <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-100 relative overflow-hidden">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Calon Santri Terdaftar</span>
                    <h3 className="text-lg font-black text-slate-900 leading-tight mt-1">{selectedApplicant.namaLengkap}</h3>
                    <p className="text-xs font-mono font-bold text-emerald-700 mt-0.5">{selectedApplicant.regNumber || selectedApplicant.id}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-4 pt-3 border-t border-slate-50">
                      <div className="text-xs space-y-1">
                        <div><span className="text-slate-400">Unit Pendidikan:</span> <strong className="text-slate-800">{selectedApplicant.programPendidikan}</strong></div>
                        <div><span className="text-slate-400">Program Unggulan:</span> <strong className="text-slate-600">{selectedApplicant.programUnggulan.join(', ')}</strong></div>
                        <div><span className="text-slate-400">Tanggal Daftar:</span> <strong className="text-slate-600">{new Date(selectedApplicant.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</strong></div>
                      </div>
                      <div className="shrink-0">
                        {(() => { const badge = getStatusBadge(selectedApplicant.status); return (
                          <div className={`rounded-xl border px-4 py-2 font-sans text-xs font-bold flex items-center gap-2 shadow-2xs ${badge.bg}`}>
                            <span className={`h-2.5 w-2.5 rounded-full shrink-0 ${badge.dot}`} />
                            <span>{selectedApplicant.status}</span>
                          </div>
                        ); })()}
                      </div>
                    </div>
                    {selectedApplicant.adminNotes && (
                      <div className="mt-5 rounded-xl bg-slate-50 border border-slate-150 p-4 text-xs text-slate-600 leading-relaxed">
                        <div className="flex items-center gap-1.5 text-slate-800 font-bold mb-1.5">
                          <AlertTriangle size={15} className="text-amber-500" />
                          <span>Catatan Panitia PPDB:</span>
                        </div>
                        <p>{selectedApplicant.adminNotes}</p>
                      </div>
                    )}
                  </div>

                  <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider border-b border-slate-100 pb-2.5 mb-5">Riwayat Tracking Berkas</h4>
                    <div className="space-y-6 relative border-l-2 border-slate-100 pl-6 ml-4">
                      <div className="relative">
                        <span className={`absolute -left-[31px] top-1 h-4 w-4 rounded-full border-4 border-white ${isStatusSelesai(selectedApplicant.status) ? 'bg-emerald-600 ring-4 ring-emerald-50' : 'bg-slate-200'}`} />
                        <div>
                          <h4 className={`text-xs font-bold ${isStatusSelesai(selectedApplicant.status) ? 'text-emerald-800' : 'text-slate-400'}`}>Tahap 3: Daftar Ulang Selesai</h4>
                          <p className="text-[10px] text-slate-400 mt-1">Status akhir administrasi santri baru resmi terdaftar asrama.</p>
                        </div>
                      </div>
                      <div className="relative">
                        <span className={`absolute -left-[31px] top-1 h-4 w-4 rounded-full border-4 border-white ${isStatusLolosSeleksi(selectedApplicant.status) ? 'bg-emerald-600 ring-4 ring-emerald-50' : isStatusDitolak(selectedApplicant.status) ? 'bg-red-500 ring-4 ring-red-50' : 'bg-slate-200'}`} />
                        <div>
                          <h4 className={`text-xs font-bold ${isStatusLolosSeleksi(selectedApplicant.status) ? 'text-emerald-800' : isStatusDitolak(selectedApplicant.status) ? 'text-red-700' : 'text-slate-400'}`}>Tahap 2: Hasil Ujian Seleksi Al-Quran & Wawancara</h4>
                          <p className="text-[10px] text-slate-400 mt-1">Ujian lisan mengukur kelancaran mengaji makhraj, tajwid, serta wawancara komitmen wali santri.</p>
                        </div>
                      </div>
                      <div className="relative">
                        <span className={`absolute -left-[31px] top-1 h-4 w-4 rounded-full border-4 border-white ${isStatusComplete(selectedApplicant.status) || isStatusRevisi(selectedApplicant.status) ? (isStatusRevisi(selectedApplicant.status) ? 'bg-amber-500 ring-4 ring-amber-50' : 'bg-emerald-600 ring-4 ring-emerald-50') : 'bg-emerald-600 ring-4 ring-emerald-50'}`} />
                        <div>
                          <h4 className="text-xs font-bold text-emerald-800">Tahap 1: Seleksi Berkas & Administrasi</h4>
                          <p className="text-[10px] text-slate-400 mt-1">Pemeriksaan pindaian akta lahir, KK, foto, ijazah, dan KTP wali santri.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {isStatusRevisi(selectedApplicant.status) && (
                    <div className="bg-amber-50/55 rounded-3xl p-6 shadow-sm border border-amber-200 animate-in slide-in-from-bottom-2 duration-300">
                      <h4 className="text-xs font-extrabold text-amber-950 uppercase tracking-widest flex items-center gap-1.5 mb-3">
                        <AlertTriangle size={16} className="text-amber-600" />
                        <span>Form Unggah Revisi Dokumen</span>
                      </h4>
                      <p className="text-[11px] text-amber-900/80 leading-relaxed mb-4">
                        Silakan unggah berkas pengganti yang diminta. Pastikan file berformat gambar jernih atau PDF berukuran maksimal 2 MB.
                      </p>
                      {revisionSuccess ? (
                        <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4 text-center flex flex-col items-center animate-in fade-in">
                          <CheckCircle2 size={32} className="text-emerald-600 mb-2" />
                          <h5 className="text-xs font-bold text-emerald-950">Berkas Revisi Berhasil Dikirim!</h5>
                          <p className="text-[10px] text-emerald-700 mt-1">Status pendaftaran berubah kembali menjadi <strong>"Perlu Verifikasi"</strong>.</p>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <div className="rounded-xl border-2 border-dashed border-amber-300 bg-white p-6 text-center flex flex-col items-center relative">
                            {revisedFile ? (
                              <div className="flex flex-col items-center">
                                <FileText size={32} className="text-emerald-600" />
                                <span className="text-xs font-bold text-slate-800 mt-2 truncate max-w-[200px]">{revisedFile.name}</span>
                                <span className="text-[10px] text-slate-400 font-mono mt-0.5">{(revisedFile.size / 1024).toFixed(0)} KB</span>
                                <button onClick={() => setRevisedFile(null)} className="text-[10px] font-bold text-red-600 hover:underline mt-2">Ganti File</button>
                              </div>
                            ) : (
                              <label className="flex flex-col items-center cursor-pointer">
                                <Upload size={32} className="text-amber-500 hover:scale-105 transition" />
                                <span className="text-xs font-bold text-slate-700 mt-3">Pilih File PDF/JPG Baru</span>
                                <span className="text-[10px] text-slate-400 mt-1">Format: PDF/JPG • Maks. 2MB</span>
                                <input type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={handleRevisionFileSelect} className="hidden" />
                              </label>
                            )}
                          </div>
                          <button onClick={submitRevision} disabled={!revisedFile || submittingRevision}
                            className="w-full rounded-xl bg-amber-500 hover:bg-amber-600 disabled:bg-slate-200 py-3 text-xs font-bold tracking-wider text-white shadow transition flex items-center justify-center gap-1.5 uppercase">
                            {submittingRevision ? (
                              <><svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg> Mengirim revisi...</>
                            ) : (<>Kirim Berkas Pengganti <ArrowRight size={14} /></>)}
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </FrontLayout>
  );
}
