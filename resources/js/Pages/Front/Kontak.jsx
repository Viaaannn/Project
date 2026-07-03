import { useState } from 'react';
import { Head } from '@inertiajs/react';
import FrontLayout from '@/Layouts/FrontLayout';
import { ChevronRight, Phone, Mail, MapPin, Send, MessageCircle, Clock } from 'lucide-react';

export default function Kontak({ contacts: contactsProp }) {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [subjek, setSubjek] = useState('Pertanyaan Umum');
  const [pesan, setPesan] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const textMsg = `*Pesan Kontak Web Darul Akhyar*\n\n` +
      `• *Nama:* ${nama}\n` +
      `• *Email:* ${email}\n` +
      `• *WhatsApp:* +62${whatsapp}\n` +
      `• *Subjek:* ${subjek}\n` +
      `• *Pesan:* ${pesan}`;

    const waLink = `https://wa.me/6281234567890?text=${encodeURIComponent(textMsg)}`;

    setSubmitted(true);

    setTimeout(() => {
      window.open(waLink, '_blank', 'noopener,noreferrer');
      setNama('');
      setEmail('');
      setWhatsapp('');
      setPesan('');
      setSubmitted(false);
    }, 1500);
  };

  return (
    <FrontLayout>
      <Head title="Kontak" />
      <div className="font-sans text-slate-800 bg-slate-50/50 pb-16" id="kontak-page-root">

        <div
          className="relative py-12 text-white overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=1600')` }}
          id="kontak-header"
        >
          <div className="absolute inset-0 bg-emerald-950/75 backdrop-blur-xs" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center md:text-left flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-extrabold sm:text-3xl">Hubungi Kami</h1>
              <p className="text-xs text-emerald-200/80 mt-1.5">Kami siap melayani pertanyaan seputar PPDB, kunjungan santri harian, dan kerjasama pondok</p>
            </div>
            <div className="flex items-center justify-center gap-1 text-[11px] font-semibold text-emerald-300">
              <span>Beranda</span>
              <ChevronRight size={12} />
              <span className="text-white">Kontak</span>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 mt-12 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            <div className="lg:col-span-5 space-y-6 text-left" id="contact-info-panel">

              <div className="rounded-3xl bg-emerald-900 text-white p-6 sm:p-8 shadow-sm">
                <h3 className="font-sans text-xs font-bold tracking-wider uppercase text-amber-400 mb-6">Sekretariat &amp; Call Center</h3>
                <div className="space-y-5" id="contact-details">
                  <div className="flex gap-4 items-start">
                    <div className="rounded-xl bg-emerald-800 p-3 text-emerald-300 mt-0.5 shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300">Kampus Utama</h4>
                      <p className="text-xs text-slate-100 mt-1 leading-relaxed">
                        Jl. KH. Muchtar Tabrani No.45, RT.002/RW.003, Kel. Perwira, Kec. Bekasi Utara, Kota Bekasi, Jawa Barat 17122
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="rounded-xl bg-emerald-800 p-3 text-emerald-300 mt-0.5 shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300">Telepon Layanan</h4>
                      <p className="text-xs text-slate-100 mt-1">(021) 88961234 &bull; (Senin - Sabtu, 08:00 - 15:00 WIB)</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="rounded-xl bg-emerald-800 p-3 text-emerald-300 mt-0.5 shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300">Email Resmi</h4>
                      <p className="text-xs text-slate-100 mt-1">info@darulakhyar.sch.id &bull; sekretariat.da@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="rounded-xl bg-emerald-800 p-3 text-emerald-300 mt-0.5 shrink-0">
                      <Clock size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300">Kunjungan Wali Santri</h4>
                      <p className="text-xs text-slate-100 mt-1">
                        Ahad Pekan Ke-2 &amp; Ke-4 (Maksimal s/d Jam 17:00 WIB setelah koordinasi asrama).
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-white p-4 shadow-sm border border-slate-100 text-left">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2.5">Peta Lokasi Google Maps</span>
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-150 bg-slate-100">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.434771804245!2d107.0016335!3d-6.20624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698bf08e08d621%3s0x2e698bf08e08d621!2sBekasi%20Utara%2C%20Kota%20Bekasi!5e0!3m2!1sid!2sid!4v1650000000000!5m2!1sid!2sid"
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

            </div>

            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 text-left" id="contact-form-panel">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider border-b border-slate-100 pb-2.5 mb-5">
                Hubungi Layanan Sekretariat
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-6">
                Punya pertanyaan seputar kurikulum, sarana pesantren, atau alur pendaftaran? Isi formulir pesan di bawah. Tombol kirim kami terhubung langsung secara terstruktur ke operator WhatsApp Darul Akhyar!
              </p>

              <form onSubmit={handleSubmit} className="space-y-4" id="contact-form">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Nama Lengkap Anda *</label>
                  <input
                    type="text"
                    required
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-xs focus:border-emerald-500 focus:outline-none transition"
                    placeholder="Masukkan nama lengkap..."
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Alamat Email Aktif *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-xs focus:border-emerald-500 focus:outline-none transition"
                      placeholder="Contoh: nama@gmail.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">No. WhatsApp Aktif *</label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-xs font-bold text-slate-400">+62</span>
                      <input
                        type="tel"
                        required
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value.replace(/\D/g, ''))}
                        className="w-full rounded-xl border border-slate-200 pl-11 pr-3 py-2.5 text-xs focus:border-emerald-500 focus:outline-none transition"
                        placeholder="812XXXXXXXX"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Kategori Subjek Hubungan *</label>
                  <select
                    value={subjek}
                    onChange={(e) => setSubjek(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-xs focus:border-emerald-500 focus:outline-none text-slate-600 bg-white"
                  >
                    <option value="Pertanyaan Umum">Pertanyaan Kurikulum &amp; Umum</option>
                    <option value="Informasi PPDB Online">Masalah Registrasi PPDB</option>
                    <option value="Kunjungan Harian / Izin">Kunjungan Wali Santri</option>
                    <option value="Saran & Masukan">Saran untuk Pengurus Asrama</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Isi Pesan Pertanyaan *</label>
                  <textarea
                    required
                    rows={4}
                    value={pesan}
                    onChange={(e) => setPesan(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs focus:border-emerald-500 focus:outline-none transition"
                    placeholder="Tuliskan pertanyaan atau masukan Anda di sini secara detail..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-200 py-3.5 font-sans text-xs font-bold tracking-widest text-white shadow hover:shadow-md transition flex items-center justify-center gap-2 uppercase"
                  id="contact-submit-btn"
                >
                  {submitted ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Menghubungkan WhatsApp...
                    </>
                  ) : (
                    <>
                      Kirim Pesan via WhatsApp <MessageCircle size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>

          </div>

        </div>

      </div>
    </FrontLayout>
  );
}
