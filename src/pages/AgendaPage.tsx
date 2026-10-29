import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Breadcrumb } from '../components/Breadcrumb';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  School, 
  UserCheck, 
  CheckCircle2, 
  Send,
  Sparkles,
  Info
} from 'lucide-react';
import { AgendaItem } from '../types';

export const AgendaPage: React.FC = () => {
  const { agenda, showToast } = useApp();
  const [selectedAgenda, setSelectedAgenda] = useState<AgendaItem | null>(agenda[0] || null);

  // RSVP Form state
  const [teacherName, setTeacherName] = useState('');
  const [schoolOrigin, setSchoolOrigin] = useState('');
  const [nip, setNip] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitRSVP = (e: React.FormEvent) => {
    e.preventDefault();
    if (!teacherName || !schoolOrigin || !whatsapp) {
      showToast('Harap lengkapi nama guru, sekolah, dan nomor WhatsApp', 'error');
      return;
    }
    setSubmitted(true);
    showToast(`Pendaftaran kegiatan "${selectedAgenda?.title}" berhasil dikonfirmasi!`, 'success');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: 'Agenda & Jadwal Kegiatan', active: true }]} />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
          Kalender Pendidikan Olahraga
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Jadwal Kegiatan KKG PJOK SD Pagu
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          Daftar pertemuan rutin gugus, workshop kurikulum, dan seleksi kejuaraan atletik. Pastikan sekolah Anda mengonfirmasi kehadiran.
        </p>
      </div>

      {/* 2 Kolom: Agenda List & RSVP Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Kolom Kiri: Agenda Cards */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-700" />
            <span>Jadwal Kegiatan Terdekat</span>
          </h2>

          <div className="space-y-4">
            {agenda.map((item) => {
              const isSelected = selectedAgenda?.id === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    setSelectedAgenda(item);
                    setSubmitted(false);
                  }}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-blue-50/50 border-blue-500 shadow-md ring-2 ring-blue-500/20'
                      : 'bg-white border-slate-200/90 shadow-xs hover:border-blue-300'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3 text-xs mb-3">
                    <span className="font-bold text-rose-600 px-2 py-0.5 rounded-md bg-rose-50 border border-rose-200/60">
                      {item.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-800">
                      {item.status}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-3 border-t border-slate-200/80 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{item.date} · {item.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                      <span className="truncate">{item.venue}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <School className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span className="truncate">Tuan Rumah: {item.hostSchool}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <UserCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="truncate">Pemateri: {item.speaker}</span>
                    </div>
                  </div>

                  <div className="mt-3 pt-2 text-[11px] text-slate-500 border-t border-dashed border-slate-200">
                    <strong>Pakaian:</strong> {item.dressCode}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Kolom Kanan: Interactive RSVP & Form Pendaftaran */}
        <div className="lg:col-span-5 space-y-6">
          <div className="sticky top-28 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-6">
            
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider">
                Konfirmasi Kehadiran (RSVP)
              </span>
              <h3 className="text-lg font-bold text-slate-900">
                Formulir Presensi Guru PJOK
              </h3>
              <p className="text-xs text-slate-500">
                Untuk kegiatan: <span className="font-semibold text-slate-800">{selectedAgenda?.title}</span>
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-in fade-in">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-sm font-bold text-emerald-900">Konfirmasi Terkirim!</h4>
                <p className="text-xs text-emerald-700 leading-relaxed">
                  Terima kasih, Bapak/Ibu <strong>{teacherName}</strong> dari <strong>{schoolOrigin}</strong>. Data presensi dan konfirmasi kehadiran Anda telah tercatat oleh Sekretariat KKG PJOK Pagu.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-xs font-semibold text-emerald-800 underline"
                >
                  Daftarkan Guru Lainnya
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitRSVP} className="space-y-4 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Nama Lengkap & Gelar Guru *
                  </label>
                  <input
                    type="text"
                    required
                    value={teacherName}
                    onChange={(e) => setTeacherName(e.target.value)}
                    placeholder="Contoh: Budi Prasetyo, S.Pd."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-slate-800"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Asal Satuan Pendidikan (SD) *
                  </label>
                  <input
                    type="text"
                    required
                    value={schoolOrigin}
                    onChange={(e) => setSchoolOrigin(e.target.value)}
                    placeholder="Contoh: SDN Pagu 1 / SDN Sitimerto"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-slate-800"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      NIP / NUPTK (Opsional)
                    </label>
                    <input
                      type="text"
                      value={nip}
                      onChange={(e) => setNip(e.target.value)}
                      placeholder="NIP atau non-ASN"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Nomor WhatsApp Aktif *
                    </label>
                    <input
                      type="tel"
                      required
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="0812xxxxxxxx"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-slate-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Catatan Tambahan / Kebutuhan
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Pertanyaan untuk narasumber atau delegasi pendamping..."
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-slate-800"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold transition-all shadow-md shadow-blue-600/20 inline-flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Konfirmasi Kehadiran</span>
                </button>
              </form>
            )}

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 flex items-start gap-2">
              <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span>
                Presensi ini berguna untuk pendataan konsumsi, materi modul fisik, dan pencetakan piagam sertifikat kegiatan.
              </span>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};
