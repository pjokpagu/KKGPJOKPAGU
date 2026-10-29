import React from 'react';
import { useApp } from '../context/AppContext';
import { Breadcrumb } from '../components/Breadcrumb';
import { 
  ShieldCheck, 
  Target, 
  Users, 
  Award, 
  BookCheck, 
  CheckCircle2, 
  School,
  GraduationCap
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { teachers, setCurrentPage } = useApp();

  const pendamping = teachers.filter(t => t.role === 'Pendamping');
  const pengurusInti = teachers.filter(t => t.role !== 'Pendamping');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      
      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: 'Tentang Kami', active: true }]} />

      {/* Hero Header */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-xl">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/20 text-rose-300 border border-rose-500/30">
            Profil Resmi Organisasi
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            KKG PJOK SD KECAMATAN PAGU
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Kelompok Kerja Guru Pendidikan Jasmani, Olahraga, dan Kesehatan tingkat Sekolah Dasar se-Kecamatan Pagu, Kabupaten Kediri. Mengokohkan literasi fisik, budi pekerti, dan budaya hidup bugar generasi penerus bangsa.
          </p>
        </div>
      </div>

      {/* Visi & Misi */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Visi */}
        <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
            <Target className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Visi Organisasi</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            "Terwujudnya Guru PJOK Sekolah Dasar se-Kecamatan Pagu yang profesional, inovatif, dan berintegritas tinggi dalam mencetak peserta didik yang berkarakter, bugar, serta berprestasi olahraga di tingkat regional maupun nasional."
          </p>
          <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-xs text-blue-700 font-semibold">
            <CheckCircle2 className="w-4 h-4" />
            <span>Berlandaskan Kurikulum Merdeka & Nilai Pancasila</span>
          </div>
        </div>

        {/* Misi */}
        <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Misi KKG PJOK Pagu</h2>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
              <span>Memfasilitasi peningkatan kompetensi pedagogik dan profesionalisme guru PJOK melalui bimtek dan workshop berkala.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
              <span>Mengembangkan bank perangkat ajar berdiferensiasi dan instrumen asesmen kebugaran jasmani yang valid.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
              <span>Menyelenggarakan pembinaan bibit atlet usia dini secara berjenjang untuk kejuaraan O2SN tingkat kabupaten.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
              <span>Membangun sinergi harmonis bersama Dinas Pendidikan, Puskesmas, Korwilcam, dan wali murid se-Kecamatan Pagu.</span>
            </li>
          </ul>
        </div>

      </div>

      {/* PENDAMPING KKG SECTION (2 Orang) */}
      <div className="space-y-6">
        <div>
          <div className="text-xs font-bold text-blue-700 uppercase tracking-wider">
            Pengawas & Pembina
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Pendamping KKG PJOK SD Kecamatan Pagu
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Tokoh senior pembimbing arah kebijakan dan supervisi mutu akademik organisasi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pendamping.map((teacher) => (
            <div
              key={teacher.id}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-6"
            >
              <img
                src={teacher.avatar}
                alt={teacher.name}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-blue-100 shadow-md shrink-0"
                referrerPolicy="no-referrer"
              />
              <div className="space-y-2 text-center sm:text-left min-w-0">
                <span className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-200/60">
                  {teacher.role}
                </span>
                <h3 className="text-base font-bold text-slate-900">
                  {teacher.name}
                </h3>
                <div className="text-xs font-semibold text-slate-600 flex items-center justify-center sm:justify-start gap-1.5">
                  <School className="w-3.5 h-3.5 text-blue-600" />
                  <span>{teacher.school}</span>
                </div>
                {teacher.nip && (
                  <div className="text-[11px] font-mono text-slate-500">
                    NIP: {teacher.nip}
                  </div>
                )}
                <p className="text-xs text-slate-600 leading-relaxed pt-1">
                  {teacher.bio}
                </p>
                <div className="text-[11px] font-medium text-blue-800">
                  Fokus: {teacher.specialization}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SUSUNAN PENGURUS INTI (Ketua, Wakil, Sek 1-2, Bend 1-2) */}
      <div className="space-y-6">
        <div>
          <div className="text-xs font-bold text-rose-600 uppercase tracking-wider">
            Struktur Organisasi 2024 - 2027
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Pengurus Harian KKG PJOK SD Kecamatan Pagu
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Amanah kepengurusan yang menggerakkan program kerja dan pelayanan 16 guru olahraga di 19 SD se-Kecamatan Pagu.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pengurusInti.map((teacher) => (
            <div
              key={teacher.id}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <img
                    src={teacher.avatar}
                    alt={teacher.name}
                    className="w-16 h-16 rounded-xl object-cover border border-slate-200 shadow-xs shrink-0 group-hover:scale-105 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                  <div className="min-w-0">
                    <span className="inline-block px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-900 text-white mb-1">
                      {teacher.role}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 leading-snug">
                      {teacher.name}
                    </h3>
                    <p className="text-[11px] text-slate-500 truncate">
                      {teacher.school}
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs">
                  {teacher.nip && (
                    <div className="text-[11px] font-mono text-slate-500">
                      NIP: {teacher.nip}
                    </div>
                  )}
                  <p className="text-xs text-slate-600 line-clamp-3">
                    {teacher.bio}
                  </p>
                  <div className="text-[11px] font-medium text-rose-600">
                    Spesialisasi: {teacher.specialization}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4 Pilar Karakter Olahraga */}
      <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
            Filosofi Gerak
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Empat Nilai Utama KKG PJOK Pagu
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Pilar pembentukan karakter Profil Pelajar Pancasila dalam setiap jam pembelajaran olahraga.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <div className="text-lg font-black text-rose-600 mb-2">01. Sportivitas</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Menjunjung tinggi kejujuran dalam berkompetisi, menghormati lawan, wasit, dan menerima kekalahan secara terhormat.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <div className="text-lg font-black text-blue-700 mb-2">02. Kebugaran Holistik</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Memastikan anak memiliki daya tahan jantung paru, kelenturan, dan kekuatan fisik yang prima untuk menopang daya konsentrasi belajar.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <div className="text-lg font-black text-amber-600 mb-2">03. Kolaborasi Gugus</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Saling berbagi modul, alat peraga, dan praktik baik pembelajaran antar 19 Sekolah Dasar tanpa sekat persaingan negatif.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <div className="text-lg font-black text-slate-900 mb-2">04. Inovasi Digital</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Pemanfaatan aplikasi norma TKJI digital, video pembelajaran interaktif, dan bank soal terpusat berbasis web.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
