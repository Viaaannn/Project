import { useState, useEffect } from 'react';
import { Head, Link, usePage, router } from '@inertiajs/react';
import { Eye, EyeOff, Upload, Trash2, CheckCircle, ChevronLeft, ChevronRight, Copy, Check, FileText, UserCheck, Shield, Lock, AlertCircle } from 'lucide-react';
import FrontLayout from '@/Layouts/FrontLayout';
import Logo from '@/Components/Front/Logo';

export default function PPDBForm() {
  const { auth, flash } = usePage().props;
  const currentUser = auth?.user || null;

  const [authView, setAuthView] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [authEmail, setAuthEmail] = useState('');
  const [authPassword, setAuthPassword] = useState('');
  const [authName, setAuthName] = useState('');
  const [authPhone, setAuthPhone] = useState('');
  const [authError, setAuthError] = useState('');

  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [successData, setSuccessData] = useState(null);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (flash?.success?.id) {
      setSuccessData(flash.success);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
    if (flash?.error) {
      alert(flash.error);
    }
  }, [flash]);

  const [namaLengkap, setNamaLengkap] = useState('');
  const [tempatLahir, setTempatLahir] = useState('');
  const [tanggalLahir, setTanggalLahir] = useState('');
  const [anakKe, setAnakKe] = useState(1);
  const [jumlahSaudara, setJumlahSaudara] = useState(1);
  const [alamatLengkap, setAlamatLengkap] = useState('');
  const [provinsi, setProvinsi] = useState('Jawa Barat');
  const [kota, setKota] = useState('Bekasi');
  const [kecamatan, setKecamatan] = useState('Bekasi Utara');
  const [kelurahan, setKelurahan] = useState('Harapan Baru');
  const [whatsappSantri, setWhatsappSantri] = useState('');

  const [namaAyah, setNamaAyah] = useState('');
  const [pekerjaanAyah, setPekerjaanAyah] = useState('');
  const [hpAyah, setHpAyah] = useState('');
  const [namaIbu, setNamaIbu] = useState('');
  const [pekerjaanIbu, setPekerjaanIbu] = useState('');
  const [hpIbu, setHpIbu] = useState('');
  const [sameAddress, setSameAddress] = useState(false);
  const [alamatOrangTua, setAlamatOrangTua] = useState('');
  const [namaWali, setNamaWali] = useState('');
  const [hubunganWali, setHubunganWali] = useState('');
  const [hpWali, setHpWali] = useState('');

  const [programPendidikan, setProgramPendidikan] = useState('SMP Darul Akhyar');
  const [programUnggulan, setProgramUnggulan] = useState([]);

  const [documents, setDocuments] = useState({});
  const [docErrors, setDocErrors] = useState({});
  const [checkboxAgreement, setCheckboxAgreement] = useState(false);

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(0) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const provList = ['Jawa Barat', 'DKI Jakarta', 'Banten', 'Jawa Tengah', 'Jawa Timur'];
  const kotaMap = {
    'Jawa Barat': ['Bekasi', 'Bogor', 'Depok', 'Bandung', 'Cirebon'],
    'DKI Jakarta': ['Jakarta Barat', 'Jakarta Selatan', 'Jakarta Timur', 'Jakarta Utara', 'Jakarta Pusat'],
    'Banten': ['Tangerang', 'Tangerang Selatan', 'Serang', 'Cilegon'],
    'Jawa Tengah': ['Semarang', 'Surakarta', 'Yogyakarta'],
    'Jawa Timur': ['Surabaya', 'Malang', 'Sidoarjo'],
  };

  const handleProvinsiChange = (val) => {
    setProvinsi(val);
    const cities = kotaMap[val] || [];
    setKota(cities[0] || '');
  };

  const handleSameAddressChange = (e) => {
    const checked = e.target.checked;
    setSameAddress(checked);
    if (checked) setAlamatOrangTua(`${alamatLengkap}, Kel. ${kelurahan}, Kec. ${kecamatan}, ${kota}, ${provinsi}`);
    else setAlamatOrangTua('');
  };

  const programUnggulanOptions = programPendidikan === 'SMP Darul Akhyar'
    ? ['Tahfidz Akhyar (3 Juz)', 'Hadrah Perkusi', 'Seni Kaligrafi Dasar']
    : ['Tahfidz Takhasus (15-30 Juz)', 'Kitab Kuning Nahwu-Sharaf', 'Sains Riset & Robotik'];

  const handleProgramUnggulanChange = (opt) => {
    if (programUnggulan.includes(opt)) setProgramUnggulan(programUnggulan.filter(p => p !== opt));
    else setProgramUnggulan([...programUnggulan, opt]);
  };

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    setAuthError('');
    if (!authEmail || !authPassword) { setAuthError('Email dan password wajib diisi'); return; }
    if (authView === 'register' && (!authName || !authPhone)) { setAuthError('Seluruh kolom wajib diisi'); return; }

    if (authView === 'register') {
      router.post('/register', {
        name: authName,
        email: authEmail,
        password: authPassword,
        password_confirmation: authPassword,
        whatsapp: authPhone,
      }, {
        onError: (errors) => {
          const msg = Object.values(errors).flat().join(', ');
          setAuthError(msg || 'Registrasi gagal. Silakan coba lagi.');
        },
        onSuccess: () => window.location.reload(),
      });
    } else {
      router.post('/login', { email: authEmail, password: authPassword }, {
        onError: () => setAuthError('Login gagal. Silakan coba lagi.'),
        onSuccess: () => window.location.reload(),
      });
    }
  };

  const handleFileUpload = (type, file) => {
    setDocErrors(prev => ({ ...prev, [type]: '' }));
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) { setDocErrors(prev => ({ ...prev, [type]: 'File melebihi batas 10 MB' })); return; }
    setDocuments(prev => ({ ...prev, [type]: file }));
  };

  const handleDocDelete = (type) => {
    setDocuments(prev => { const c = { ...prev }; delete c[type]; return c; });
  };

  const validateStep = (s) => {
    if (s === 1 && (!namaLengkap || !tempatLahir || !tanggalLahir || !alamatLengkap || !whatsappSantri)) { alert('Harap isi semua kolom wajib!'); return false; }
    if (s === 2 && (!namaAyah || !hpAyah || !namaIbu || !hpIbu || !alamatOrangTua)) { alert('Harap isi semua kolom wajib!'); return false; }
    if (s === 4) {
      const missing = ['foto', 'kk', 'akta', 'ijazah', 'ktp'].filter(d => !Object.keys(documents).includes(d));
      if (missing.length > 0) { alert('Harap unggah seluruh berkas (5 dokumen)!'); return false; }
    }
    return true;
  };

  const handleNext = () => { if (validateStep(step)) setStep(prev => prev + 1); };
  const handleBack = () => setStep(prev => prev - 1);

  const handleFinalSubmit = () => {
    if (!checkboxAgreement) { alert('Anda wajib menyetujui pernyataan!'); return; }
    setSubmitting(true);
    const formData = new FormData();
    formData.append('nama_lengkap', namaLengkap);
    formData.append('tempat_lahir', tempatLahir);
    formData.append('tanggal_lahir', tanggalLahir);
    formData.append('jenis_kelamin', 'Laki-laki');
    formData.append('anak_ke', String(anakKe));
    formData.append('jumlah_saudara', String(jumlahSaudara));
    formData.append('alamat_lengkap', alamatLengkap);
    formData.append('provinsi', provinsi);
    formData.append('kota', kota);
    formData.append('kecamatan', kecamatan);
    formData.append('kelurahan', kelurahan);
    formData.append('whatsapp_santri', whatsappSantri);
    formData.append('nama_ayah', namaAyah);
    formData.append('pekerjaan_ayah', pekerjaanAyah);
    formData.append('hp_ayah', hpAyah);
    formData.append('nama_ibu', namaIbu);
    formData.append('pekerjaan_ibu', pekerjaanIbu);
    formData.append('hp_ibu', hpIbu);
    formData.append('alamat_orang_tua', alamatOrangTua);
    formData.append('nama_wali', namaWali || '');
    formData.append('hubungan_wali', hubunganWali || '');
    formData.append('hp_wali', hpWali || '');
    formData.append('program_pendidikan', programPendidikan);
    formData.append('program_unggulan', JSON.stringify(programUnggulan));
    const docKeys = ['foto', 'kk', 'akta', 'ijazah', 'ktp'];
    docKeys.forEach(key => {
      if (documents[key]) formData.append(key, documents[key]);
    });
    router.post('/ppdb/daftar', formData, {
      preserveScroll: true,
      onSuccess: () => setSubmitting(false),
      onError: () => { setSubmitting(false); alert('Terjadi kesalahan validasi. Periksa kembali isian Anda.'); },
      onFinish: () => setSubmitting(false),
    });
  };

  const handleCopyRegNo = (num) => {
    navigator.clipboard.writeText(num);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  if (!currentUser) {
    return (
      <FrontLayout>
        <Head title="Daftar PPDB" />
        <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans" id="ppdb-auth-screen">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <Logo className="justify-center" size={60} showText={true} />
            <h2 className="mt-6 text-center text-xl font-extrabold text-slate-900">
              {authView === 'login' ? 'Masuk untuk Mendaftar PPDB' : 'Buat Akun PPDB Online'}
            </h2>
            <div className="mt-2 text-center text-xs text-slate-500 flex items-center justify-center gap-1.5 bg-emerald-50 border border-emerald-100 p-2 rounded-lg max-w-xs mx-auto">
              <Lock size={12} className="text-emerald-600 shrink-0" />
              <span>Sistem Portal Terenkripsi & Aman</span>
            </div>
          </div>
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow-md rounded-2xl sm:px-10 border border-slate-100 text-left">
              <form onSubmit={handleAuthSubmit} className="space-y-4" id="auth-form">
                {authError && <div className="rounded-lg bg-red-50 p-3 text-xs text-red-600 border border-red-150 font-medium">{authError}</div>}
                {authView === 'register' && (
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Nama Lengkap Wali Santri <span className="text-red-500">*</span></label>
                    <input type="text" required value={authName} onChange={(e) => setAuthName(e.target.value)} className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-xs focus:border-emerald-500 focus:outline-none transition" placeholder="Contoh: H. Ahmad Sutisna, S.E." id="register-name" />
                  </div>
                )}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Alamat Email Aktif <span className="text-red-500">*</span></label>
                  <input type="email" required value={authEmail} onChange={(e) => setAuthEmail(e.target.value)} className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-xs focus:border-emerald-500 focus:outline-none transition" placeholder="Contoh: wali.santri@gmail.com" id="auth-email" />
                </div>
                {authView === 'register' && (
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">No. WhatsApp Aktif <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-xs font-bold text-slate-400">+62</span>
                      <input type="tel" required value={authPhone} onChange={(e) => setAuthPhone(e.target.value.replace(/\D/g, ''))} className="w-full rounded-xl border border-slate-200 pl-11 pr-3 py-2.5 text-xs focus:border-emerald-500 focus:outline-none transition" placeholder="812345678" id="register-whatsapp" />
                    </div>
                    <p className="text-[10px] text-slate-400 mt-1 leading-normal">* Digunakan untuk pemberitahuan kelulusan instan via sistem WhatsApp.</p>
                  </div>
                )}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Kata Sandi Akun <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <input type={showPassword ? 'text' : 'password'} required value={authPassword} onChange={(e) => setAuthPassword(e.target.value)} className="w-full rounded-xl border border-slate-200 pl-3 pr-10 py-2.5 text-xs focus:border-emerald-500 focus:outline-none transition" placeholder="Masukkan sandi minimal 6 karakter" id="auth-password" />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600">{showPassword ? <EyeOff size={16} /> : <Eye size={16} />}</button>
                  </div>
                </div>
                <button type="submit" className="w-full rounded-xl bg-emerald-600 py-3 text-xs font-bold tracking-wider text-white shadow hover:bg-emerald-500 transition mt-4 uppercase" id="auth-submit-btn">
                  {authView === 'login' ? 'Masuk ke Portal PPDB' : 'Buat Akun & Mulai'}
                </button>
              </form>
              <div className="mt-6 border-t border-slate-100 pt-4 text-center">
                {authView === 'login' ? (
                  <button onClick={() => { setAuthView('register'); setAuthError(''); }} className="text-xs font-bold text-emerald-700 hover:underline" id="switch-to-register">Belum punya akun pendaftar? Buat Akun Baru</button>
                ) : (
                  <button onClick={() => { setAuthView('login'); setAuthError(''); }} className="text-xs font-bold text-emerald-700 hover:underline" id="switch-to-login">Sudah punya akun? Masuk menggunakan Email</button>
                )}
              </div>
            </div>
          </div>
        </div>
      </FrontLayout>
    );
  }

  if (successData) {
    return (
      <FrontLayout>
        <Head title="Pendaftaran Berhasil" />
        <div className="min-h-screen bg-slate-50 flex items-center justify-center py-12 px-4 font-sans text-center">
          <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-lg border border-slate-100 text-center flex flex-col items-center">
            <div className="rounded-full bg-emerald-50 p-4 text-emerald-600 mb-6"><CheckCircle size={48} /></div>
            <h2 className="text-xl font-black text-slate-900 leading-tight">Pendaftaran Online Berhasil!</h2>
            <p className="text-xs text-slate-500 leading-relaxed mt-2 px-2">
              Alhamdulillah, berkas ananda <strong className="text-slate-800">{successData.namaLengkap}</strong> telah tersimpan.
            </p>
            <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-150 w-full relative">
              <span className="text-[10px] text-slate-400 font-semibold tracking-widest uppercase">Nomor Pendaftaran PPDB</span>
              <div className="flex items-center justify-center gap-2 mt-1.5">
                <span className="text-lg font-mono font-black text-emerald-800 tracking-wide select-all">{successData.id}</span>
                <button onClick={() => handleCopyRegNo(successData.id)} className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-200 hover:text-slate-600 transition" title="Salin Nomor">
                  {isCopied ? <Check size={16} className="text-emerald-600" /> : <Copy size={16} />}
                </button>
              </div>
            </div>
            <div className="mt-6 flex items-start gap-3 rounded-xl bg-amber-50 border border-amber-100 p-4 text-left">
              <Shield size={18} className="text-amber-600 shrink-0 mt-0.5" />
              <div className="text-xs text-amber-950/80 leading-relaxed">
                <p className="font-bold text-amber-950">Langkah Selanjutnya:</p>
                <ul className="list-disc pl-4 space-y-1 mt-1"><li>Catat nomor pendaftaran di atas.</li><li>Simpan untuk verifikasi wawancara.</li><li>Cek status di menu "Cek Status" menggunakan nomor tersebut.</li></ul>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-3 w-full">
              <Link href="/ppdb/status" className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3.5 font-sans text-xs font-extrabold uppercase tracking-widest text-white shadow hover:bg-emerald-500 transition">Cek Status Pendaftaran <FileText size={14} /></Link>
              <Link href="/" className="w-full rounded-xl border border-slate-200 py-3 font-sans text-xs font-semibold text-slate-700 hover:bg-slate-50 transition text-center">Kembali ke Beranda</Link>
            </div>
          </div>
        </div>
      </FrontLayout>
    );
  }

  return (
    <FrontLayout>
      <Head title="Formulir PPDB" />
      <div className="font-sans text-slate-800 bg-slate-50/50 pb-16">
        <div className="relative py-12 text-white overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=1600')` }}>
          <div className="absolute inset-0 bg-emerald-950/75 backdrop-blur-xs" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center md:text-left flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-extrabold sm:text-3xl">Formulir Pendaftaran Santri</h1>
              <p className="text-xs text-emerald-200/80 mt-1.5">Lengkapi data pendaftaran online di bawah ini</p>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs text-emerald-300 font-bold bg-emerald-900/40 border border-emerald-500/20 rounded-full px-4 py-1">
              <UserCheck size={14} />
              <span>Wali Santri: {currentUser.name}</span>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-4 mt-8 sm:px-6">
          <div className="bg-white rounded-2xl p-4 shadow-2xs border border-slate-100 flex items-center justify-between gap-4 mb-8">
            <div className="flex-1">
              <div className="flex items-center justify-between text-xs font-extrabold text-slate-400">
                <span className="text-emerald-700">Langkah {step} dari 5</span>
                <span className="text-slate-600">{step === 1 && '1. Data Diri'} {step === 2 && '2. Data Orang Tua'} {step === 3 && '3. Pilihan Program'} {step === 4 && '4. Unggah Berkas'} {step === 5 && '5. Konfirmasi'}</span>
              </div>
              <div className="mt-2.5 h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 transition-all duration-300 rounded-full" style={{ width: `${(step / 5) * 100}%` }} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-100 text-left">
            {step === 1 && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider border-b border-slate-100 pb-2 mb-4">Langkah 1: Data Diri Calon Santri</h3>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Nama Lengkap Sesuai Akta <span className="text-red-500">*</span></label>
                  <input type="text" required value={namaLengkap} onChange={(e) => setNamaLengkap(e.target.value)} className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-xs focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition" placeholder="Masukkan nama lengkap santri..." />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Tempat Lahir <span className="text-red-500">*</span></label>
                    <input type="text" required value={tempatLahir} onChange={(e) => setTempatLahir(e.target.value)} className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-xs focus:border-emerald-500 focus:outline-none transition" placeholder="Contoh: Bekasi" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Tanggal Lahir <span className="text-red-500">*</span></label>
                    <input type="date" required value={tanggalLahir} onChange={(e) => setTanggalLahir(e.target.value)} className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-xs focus:border-emerald-500 focus:outline-none transition text-slate-600" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Jenis Kelamin <span className="text-red-500">*</span></label>
                    <span className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-800">Laki-laki (Pondok Khusus Putra)</span>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Anak Ke- <span className="text-red-500">*</span></label>
                    <input type="number" min={1} required value={anakKe} onChange={(e) => setAnakKe(Number(e.target.value))} className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-xs focus:border-emerald-500 focus:outline-none transition" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Jumlah Saudara <span className="text-red-500">*</span></label>
                    <input type="number" min={1} required value={jumlahSaudara} onChange={(e) => setJumlahSaudara(Number(e.target.value))} className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-xs focus:border-emerald-500 focus:outline-none transition" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Alamat Lengkap (Sesuai KK) <span className="text-red-500">*</span></label>
                  <textarea required rows={3} value={alamatLengkap} onChange={(e) => setAlamatLengkap(e.target.value)} className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs focus:border-emerald-500 focus:outline-none transition" placeholder="Masukkan nama jalan, nomor rumah, RT/RW..." />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Provinsi <span className="text-red-500">*</span></label>
                    <select value={provinsi} onChange={(e) => handleProvinsiChange(e.target.value)} className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-xs focus:border-emerald-500 focus:outline-none text-slate-600 bg-white">
                      {provList.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Kota <span className="text-red-500">*</span></label>
                    <select value={kota} onChange={(e) => setKota(e.target.value)} className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-xs focus:border-emerald-500 focus:outline-none text-slate-600 bg-white">
                      {(kotaMap[provinsi] || []).map(k => <option key={k} value={k}>{k}</option>)}
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Kecamatan <span className="text-red-500">*</span></label>
                    <input type="text" required value={kecamatan} onChange={(e) => setKecamatan(e.target.value)} className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-xs focus:border-emerald-500 focus:outline-none transition" placeholder="Kecamatan..." />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Kelurahan <span className="text-red-500">*</span></label>
                    <input type="text" required value={kelurahan} onChange={(e) => setKelurahan(e.target.value)} className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-xs focus:border-emerald-500 focus:outline-none transition" placeholder="Kelurahan..." />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">No. WhatsApp Santri / Orang Tua <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-xs font-bold text-slate-400">+62</span>
                    <input type="tel" required value={whatsappSantri} onChange={(e) => setWhatsappSantri(e.target.value.replace(/\D/g, ''))} className="w-full rounded-xl border border-slate-200 pl-11 pr-3 py-2.5 text-xs focus:border-emerald-500 focus:outline-none transition" placeholder="812XXXXXXXX" />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider border-b border-slate-100 pb-2 mb-4">Langkah 2: Data Orang Tua / Wali</h3>
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-150">
                  <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-widest mb-3">Biodata Ayah Kandung</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Nama Lengkap Ayah *</label>
                      <input type="text" required value={namaAyah} onChange={(e) => setNamaAyah(e.target.value)} className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs focus:border-emerald-500 focus:outline-none" placeholder="Masukkan nama lengkap ayah..." />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Pekerjaan Ayah</label>
                        <input type="text" value={pekerjaanAyah} onChange={(e) => setPekerjaanAyah(e.target.value)} className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs focus:border-emerald-500 focus:outline-none" placeholder="Karyawan / Wiraswasta" />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">No. HP / WA Ayah *</label>
                        <input type="tel" required value={hpAyah} onChange={(e) => setHpAyah(e.target.value.replace(/\D/g, ''))} className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs focus:border-emerald-500 focus:outline-none" placeholder="08XXXXXXXXXX" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-150">
                  <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-widest mb-3">Biodata Ibu Kandung</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Nama Lengkap Ibu *</label>
                      <input type="text" required value={namaIbu} onChange={(e) => setNamaIbu(e.target.value)} className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs focus:border-emerald-500 focus:outline-none" placeholder="Masukkan nama lengkap ibu..." />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Pekerjaan Ibu</label>
                        <input type="text" value={pekerjaanIbu} onChange={(e) => setPekerjaanIbu(e.target.value)} className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs focus:border-emerald-500 focus:outline-none" placeholder="Ibu Rumah Tangga" />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">No. HP / WA Ibu *</label>
                        <input type="tel" required value={hpIbu} onChange={(e) => setHpIbu(e.target.value.replace(/\D/g, ''))} className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs focus:border-emerald-500 focus:outline-none" placeholder="08XXXXXXXXXX" />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Alamat Rumah Orang Tua <span className="text-red-500">*</span></label>
                    <label className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 cursor-pointer select-none">
                      <input type="checkbox" checked={sameAddress} onChange={handleSameAddressChange} className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                      <span>Sama dengan alamat santri</span>
                    </label>
                  </div>
                  <textarea required rows={2} value={alamatOrangTua} onChange={(e) => setAlamatOrangTua(e.target.value)} className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs focus:border-emerald-500 focus:outline-none transition" placeholder="Masukkan alamat lengkap rumah orang tua..." />
                </div>
                <div className="rounded-xl border border-slate-200 p-3 bg-white">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Biodata Wali (Opsional)</span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <input type="text" value={namaWali} onChange={(e) => setNamaWali(e.target.value)} className="rounded-lg border border-slate-200 p-2 text-xs focus:border-emerald-500 focus:outline-none" placeholder="Nama wali" />
                    <input type="text" value={hubunganWali} onChange={(e) => setHubunganWali(e.target.value)} className="rounded-lg border border-slate-200 p-2 text-xs focus:border-emerald-500 focus:outline-none" placeholder="Hubungan" />
                    <input type="tel" value={hpWali} onChange={(e) => setHpWali(e.target.value.replace(/\D/g, ''))} className="rounded-lg border border-slate-200 p-2 text-xs focus:border-emerald-500 focus:outline-none" placeholder="No. HP Wali" />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider border-b border-slate-100 pb-2 mb-4">Langkah 3: Pilihan Unit & Program Pendidikan</h3>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">Pilih Unit Pendidikan (Jenjang) <span className="text-red-500">*</span></label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {['SMP Darul Akhyar', 'MA Darul Akhyar'].map((unit) => (
                      <div key={unit} onClick={() => { setProgramPendidikan(unit); setProgramUnggulan([]); }}
                        className={`cursor-pointer rounded-2xl border p-4 shadow-2xs transition duration-300 text-left ${programPendidikan === unit ? 'bg-emerald-50/55 border-emerald-500 ring-2 ring-emerald-500/20' : 'bg-white border-slate-200 hover:border-slate-350'}`}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold text-slate-900">{unit}</span>
                          <input type="radio" name="program" checked={programPendidikan === unit} onChange={() => {}} className="text-emerald-600 focus:ring-emerald-500" />
                        </div>
                        <p className="text-[10px] text-slate-400 uppercase font-semibold tracking-wider">{unit.includes('SMP') ? 'Tingkat Menengah Pertama' : 'Tingkat Menengah Atas'}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Pilih Program Unggulan</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {programUnggulanOptions.map(opt => (
                      <label key={opt} className={`flex items-center gap-3 rounded-xl border p-3.5 text-xs font-bold transition cursor-pointer ${programUnggulan.includes(opt) ? 'bg-emerald-50/40 border-emerald-300 text-emerald-800 shadow-2xs' : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-600'}`}>
                        <input type="checkbox" checked={programUnggulan.includes(opt)} onChange={() => handleProgramUnggulanChange(opt)} className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 h-4 w-4" />
                        <span className="leading-snug">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider border-b border-slate-100 pb-2 mb-4">Langkah 4: Unggah Berkas Persyaratan</h3>
                <p className="text-[11px] text-slate-400 leading-relaxed bg-slate-50 p-3 rounded-lg mb-4">
                  * Harap unggah dokumen asli hasil scan/foto berkualitas jernih. Semua file <strong className="text-slate-800">max 10 MB</strong>. Format: JPG, PNG, PDF.
                </p>
                <div className="space-y-4">
                  {[
                    { key: 'foto', label: '1. Pas Foto Calon Santri (3x4)', desc: 'Pas foto formal terbaru latar merah/biru (Maks. 10 MB)' },
                    { key: 'kk', label: '2. Scan Kartu Keluarga (KK) Asli', desc: 'Scan KK jernih semua nama terbaca (Maks. 10 MB)' },
                    { key: 'akta', label: '3. Scan Akta Kelahiran Santri', desc: 'Scan lembar akta kelahiran resmi (Maks. 10 MB)' },
                    { key: 'ijazah', label: '4. Scan Ijazah / SKL Terakhir', desc: 'Scan ijazah atau SKL dari sekolah asal (Maks. 10 MB)' },
                    { key: 'ktp', label: '5. Scan KTP Orang Tua (Ayah/Ibu)', desc: 'Scan KTP jernih salah satu orang tua (Maks. 10 MB)' },
                  ].map((item) => {
                    const uploadKey = item.key;
                    const fileUploaded = documents[uploadKey];
                    const fileErr = docErrors[uploadKey];
                    return (
                      <div key={item.key} className="p-4 rounded-2xl border border-slate-150 bg-white">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left">
                          <div>
                            <h4 className="text-xs font-bold text-slate-800 leading-none">{item.label}</h4>
                            <p className="text-[10px] text-slate-400 mt-1 leading-normal">{item.desc}</p>
                          </div>
                          <div>
                            {fileUploaded ? (
                              <div className="flex items-center gap-3">
                                <div className="rounded-lg bg-emerald-50 px-2 py-1.5 border border-emerald-100 flex items-center gap-1.5">
                                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span className="text-[10px] font-mono text-emerald-800 font-semibold truncate max-w-[120px]">{fileUploaded.name}</span>
                      <span className="text-[9px] text-emerald-600 bg-emerald-100 px-1 py-0.5 rounded-md font-mono">{formatFileSize(fileUploaded.size)}</span>
                                </div>
                                <button onClick={() => handleDocDelete(uploadKey)} className="rounded-lg p-2 text-slate-400 hover:bg-red-50 hover:text-red-600 transition" title="Hapus"><Trash2 size={15} /></button>
                              </div>
                            ) : (
                              <label className="flex items-center gap-1.5 rounded-lg border border-emerald-200 bg-emerald-50/50 hover:bg-emerald-50 px-4 py-2 font-sans text-[11px] font-bold text-emerald-700 transition cursor-pointer">
                                <Upload size={14} />
                                <span>Pilih Berkas</span>
                                <input type="file" accept=".jpg,.jpeg,.png,.pdf" onChange={(e) => { const f = e.target.files; if (f && f[0]) handleFileUpload(uploadKey, f[0]); }} className="hidden" />
                              </label>
                            )}
                          </div>
                        </div>
                        {fileErr && <p className="text-[10px] text-red-600 mt-2 font-semibold">{fileErr}</p>}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider border-b border-slate-100 pb-2 mb-4">Langkah 5: Tinjau Ringkasan & Submit</h3>
                <div className="space-y-4">
                  <div className="rounded-2xl border border-slate-150 p-4">
                    <div className="flex items-center justify-between border-b border-slate-150 pb-2 mb-3">
                      <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">1. Data Diri</h4>
                      <button onClick={() => setStep(1)} className="text-[10px] font-extrabold text-emerald-700 hover:underline">Edit</button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs">
                      <div><span className="text-slate-400">Nama:</span> <strong className="text-slate-800">{namaLengkap}</strong></div>
                      <div><span className="text-slate-400">TTL:</span> <strong className="text-slate-800">{tempatLahir}, {tanggalLahir}</strong></div>
                      <div><span className="text-slate-400">Anak Ke / Saudara:</span> <strong className="text-slate-800">{anakKe} dari {jumlahSaudara}</strong></div>
                      <div><span className="text-slate-400">WA:</span> <strong className="text-slate-800">+62 {whatsappSantri}</strong></div>
                      <div><span className="text-slate-400">Domisili:</span> <strong className="text-slate-800">{kelurahan}, {kecamatan}, {kota}</strong></div>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-slate-150 p-4">
                    <div className="flex items-center justify-between border-b border-slate-150 pb-2 mb-3">
                      <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">2. Data Orang Tua</h4>
                      <button onClick={() => setStep(2)} className="text-[10px] font-extrabold text-emerald-700 hover:underline">Edit</button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs">
                      <div><span className="text-slate-400">Ayah:</span> <strong className="text-slate-800">{namaAyah}</strong></div>
                      <div><span className="text-slate-400">HP Ayah:</span> <strong className="text-slate-800">{hpAyah}</strong></div>
                      <div><span className="text-slate-400">Ibu:</span> <strong className="text-slate-800">{namaIbu}</strong></div>
                      <div><span className="text-slate-400">HP Ibu:</span> <strong className="text-slate-800">{hpIbu}</strong></div>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-slate-150 p-4">
                    <div className="flex items-center justify-between border-b border-slate-150 pb-2 mb-3">
                      <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">3. Unit & Program</h4>
                      <button onClick={() => setStep(3)} className="text-[10px] font-extrabold text-emerald-700 hover:underline">Edit</button>
                    </div>
                    <div className="text-xs space-y-1.5">
                      <div><span className="text-slate-400">Unit:</span> <strong className="text-emerald-800">{programPendidikan}</strong></div>
                      <div><span className="text-slate-400">Program Unggulan:</span> <strong className="text-slate-800">{programUnggulan.join(', ') || '-'}</strong></div>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-slate-150 p-4">
                    <div className="flex items-center justify-between border-b border-slate-150 pb-2 mb-3">
                      <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">4. Berkas (5 dari 5)</h4>
                      <button onClick={() => setStep(4)} className="text-[10px] font-extrabold text-emerald-700 hover:underline">Edit</button>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {Object.keys(documents).map(k => (
                        <li key={k} className="flex items-center gap-1.5"><CheckCircle size={14} className="text-emerald-600 shrink-0" /><span className="text-slate-700 uppercase font-bold text-[10px]">{k}:</span></li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-amber-50 rounded-2xl p-4 border border-amber-100 flex gap-3 mt-6">
                  <input type="checkbox" id="agree-checkbox" checked={checkboxAgreement} onChange={(e) => setCheckboxAgreement(e.target.checked)} className="rounded border-amber-300 text-amber-600 focus:ring-amber-500 h-5 w-5 mt-0.5 cursor-pointer shrink-0" />
                  <label htmlFor="agree-checkbox" className="text-xs text-amber-950/85 leading-relaxed cursor-pointer font-medium">
                    Dengan menandai kotak ini, saya menyatakan bahwa seluruh data yang diisi adalah benar dan akurat. Apabila ditemukan pemalsuan data, saya bersedia menerima sanksi pembatalan.
                  </label>
                </div>
              </div>
            )}

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
              {step > 1 ? (
                <button type="button" onClick={handleBack} disabled={submitting} className="rounded-xl border border-slate-200 px-6 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition flex items-center gap-1.5"><ChevronLeft size={16} /> Kembali</button>
              ) : <div />}
              {step < 5 ? (
                <button type="button" onClick={handleNext} className="rounded-xl bg-emerald-600 px-6 py-2.5 text-xs font-bold text-white shadow hover:bg-emerald-500 transition flex items-center gap-1.5 uppercase tracking-wider">Lanjutkan <ChevronRight size={16} /></button>
              ) : (
                <button type="button" onClick={handleFinalSubmit} disabled={submitting} className="rounded-xl bg-amber-500 hover:bg-amber-600 px-8 py-3 text-xs font-black tracking-widest text-white shadow shadow-amber-500/20 transition flex items-center gap-2 uppercase shrink-0">
                  {submitting ? (
                    <><svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg> Memproses...</>
                  ) : (<>Kirim Pendaftaran <Check size={16} /></>)}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </FrontLayout>
  );
}
