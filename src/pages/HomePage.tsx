import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  ArrowRight, 
  Download, 
  Calendar, 
  MapPin, 
  FolderDown, 
  BookOpen, 
  Award, 
  ExternalLink,
  ChevronRight,
  CheckCircle2,
  Users
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { 
    hero, 
    teachers, 
    programs, 
    materials, 
    articles, 
    setCurrentPage, 
    navigateToDetail 
  } = useApp();


  const coreLeaders = teachers.filter(t => 
    ['Pendamping', 'Ketua', 'Wakil Ketua', 'Sekretaris 1', 'Bendahara 1'].includes(t.role)
  ).slice(0, 6);

  return (
    <div className="space-y-24 pb-20 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-8 lg:pt-16">
        {/* Subtle decorative athletic light meshes */}
        <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 left-10 -z-10 w-80 h-80 bg-rose-100/50 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headline & Action */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                {hero.title}{hero.highlightedText ? ` ${hero.highlightedText}` : ''}
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                {hero.description}
              </p>

              {/* Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setCurrentPage('program-kkg')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-700 text-white font-semibold text-sm hover:bg-blue-800 transition-all shadow-md shadow-blue-600/20 hover:-translate-y-0.5"
                >
                  <span>{hero.ctaPrimaryText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setCurrentPage('perangkat-pembelajaran')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-300 text-slate-800 font-semibold text-sm hover:bg-slate-50 hover:border-slate-400 transition-all shadow-xs"
                >
                  <Download className="w-4 h-4 text-blue-600" />
                  <span>{hero.ctaSecondaryText}</span>
                </button>
              </div>

              {/* Trust Metric Row */}
              <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-6 max-w-lg">
                <div>
                  <div className="text-2xl font-black text-slate-900 tabular-nums">19 SD</div>
                  <div className="text-xs text-slate-500 font-medium">Negeri & Swasta Pagu</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-blue-700 tabular-nums">16 Guru</div>
                  <div className="text-xs text-slate-500 font-medium">Pendidik PJOK Aktif</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-rose-600 tabular-nums">100%</div>
                  <div className="text-xs text-slate-500 font-medium">Kurikulum Merdeka</div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual + Floating Sports Highlights */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 group">
                <img
                  src={hero.heroImage}
                  alt="Guru dan Murid PJOK SD Kecamatan Pagu"
                  className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-panel-dark text-white border border-slate-700/60 shadow-lg">
                  <div className="flex items-center justify-between text-xs font-semibold text-rose-400 mb-1">
                    <span>Semangat Olahraga Pelajar</span>
                    <span className="text-slate-300">Pagu, Kediri</span>
                  </div>
                  <p className="text-xs text-slate-200 line-clamp-2">
                    Pembinaan fisik terstruktur, nilai sportif, dan keceriaan anak sekolah dasar di lapangan hijau.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* 3. SECTION TENTANG (2 Kolom + Pengurus) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Kolom Kiri: Foto Pertemuan Guru & Stats */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
              <img
                src="/src/assets/images/kkg_teachers_meeting_1793250246883.jpg"
                alt="Forum Rapat KKG PJOK Pagu"
                className="w-full h-[360px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-xs font-semibold text-rose-300">Kolaborasi Berkelanjutan</div>
                <div className="text-sm font-bold">Rembuk Mutu & Modul Ajar di SDN Pagu 1</div>
              </div>
            </div>

            {/* Quick highlight stat box */}
            <div className="mt-4 p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-500">Regulasi & Legalitas</div>
                <div className="text-sm font-bold text-slate-800">SK Korwilcam Pendidikan Pagu</div>
              </div>
              <button
                onClick={() => setCurrentPage('tentang-kami')}
                className="text-xs font-semibold text-blue-700 hover:text-blue-800 inline-flex items-center gap-1"
              >
                <span>Lihat Profil</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Kolom Kanan: Profil Organisasi & Susunan Pengurus Inti */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="text-xs font-bold text-rose-600 uppercase tracking-wider">
                Mengenal Organisasi
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Membangun Karakter Anak Melalui Pendidikan Jasmani Berkualitas
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              KKG PJOK SD Kecamatan Pagu adalah wadah profesional bagi 16 guru Pendidikan Jasmani di 19 Sekolah Dasar. Kami berkomitmen menyelaraskan implementasi Kurikulum Merdeka, memfasilitasi pembuatan modul ajar berdiferensiasi, memantau standar kebugaran jasmani murid, serta membina atlet usia dini berprestasi.
            </p>

            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Susunan Pengurus Inti & Pendamping KKG:
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {coreLeaders.map((teacher) => (
                  <div
                    key={teacher.id}
                    className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:border-blue-300 transition-colors flex items-center gap-3"
                  >
                    <img
                      src={teacher.avatar}
                      alt={teacher.name}
                      className="w-10 h-10 rounded-full object-cover border border-slate-200 shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-slate-900 truncate">
                        {teacher.name}
                      </div>
                      <div className="text-[11px] font-semibold text-blue-700">
                        {teacher.role}
                      </div>
                      <div className="text-[10px] text-slate-500 truncate">
                        {teacher.school}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <button
                onClick={() => setCurrentPage('tentang-kami')}
                className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 hover:text-blue-800"
              >
                <span>Lihat Struktur Lengkap 8 Pengurus & Pendamping</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 4. SECTION PROGRAM KKG (Terhubung Google Drive Link) */}
      <section className="bg-slate-50/80 border-y border-slate-200/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                Jadwal & Agenda Kerja
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                Program Unggulan KKG PJOK Pagu
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Seluruh materi bimtek, pedoman juknis O2SN, dan administrasi tersimpan di Google Drive resmi.
              </p>
            </div>

            <button
              onClick={() => setCurrentPage('program-kkg')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 hover:text-blue-800 shrink-0"
            >
              <span>Semua Program KKG</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.slice(0, 4).map((prog) => (
              <div
                key={prog.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col justify-between group"
              >
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="font-semibold text-rose-600">{prog.category}</span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                      {prog.status}
                    </span>
                  </div>

                  <h3
                    onClick={() => navigateToDetail('program-kkg', prog.id)}
                    className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors cursor-pointer"
                  >
                    {prog.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-2">
                    {prog.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{prog.date} · {prog.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                      <span className="truncate">{prog.location}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="px-6 py-3.5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-3 text-xs">
                  <a
                    href={prog.driveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-slate-700 hover:text-blue-700 transition-colors"
                  >
                    <FolderDown className="w-4 h-4 text-blue-600" />
                    <span>Materi Drive</span>
                  </a>

                  <button
                    onClick={() => navigateToDetail('program-kkg', prog.id)}
                    className="inline-flex items-center gap-1 font-semibold text-blue-700 hover:text-blue-900"
                  >
                    <span>Detail Program</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. SECTION PERANGKAT PEMBELAJARAN (Min. 6 Artikel/Modul Kelas 1-6) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-bold text-rose-600 uppercase tracking-wider">
              Bank Literasi & Kurikulum
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Perangkat Pembelajaran PJOK SD
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Modul Ajar, Alur Tujuan Pembelajaran (ATP), dan instrumen asesmen kebugaran kelas 1 hingga 6.
            </p>
          </div>

          <button
            onClick={() => setCurrentPage('perangkat-pembelajaran')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 hover:text-blue-800 shrink-0"
          >
            <span>Buka Bank Perangkat Lengkap</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.slice(0, 6).map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div className="h-40 relative overflow-hidden bg-slate-100">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-bold bg-blue-700 text-white shadow-xs">
                    {item.grade}
                  </div>
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-900/80 text-white backdrop-blur-xs">
                    {item.category}
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <h3
                    onClick={() => setCurrentPage('perangkat-pembelajaran')}
                    className="text-sm font-bold text-slate-900 line-clamp-2 group-hover:text-blue-700 transition-colors cursor-pointer"
                  >
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2">
                    {item.summary}
                  </p>

                  <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
                    <span className="truncate">Oleh: {item.author}</span>
                    <span className="shrink-0">{item.fileSize}</span>
                  </div>
                </div>
              </div>

              <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 text-[11px]">
                  {item.downloadsCount}x diunduh
                </span>
                <a
                  href={item.downloadUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-700 text-white font-medium hover:bg-blue-800 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Unduh File</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. SECTION PRESTASI & INFORMASI BERITA */}
      <section className="bg-slate-100/70 border-y border-slate-200/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                Warta & Prestasi
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                Kabar Terbaru Olahraga Pendidikan Pagu
              </h2>
            </div>

            <button
              onClick={() => setCurrentPage('informasi')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 hover:text-blue-800 shrink-0"
            >
              <span>Semua Berita</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(0, 3).map((art) => (
              <div
                key={art.id}
                className="rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  <div className="h-44 relative overflow-hidden bg-slate-900">
                    <img
                      src={art.thumbnail}
                      alt={art.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 px-2 py-1 rounded-md text-[11px] font-semibold bg-rose-600 text-white">
                      {art.category}
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <div className="text-[11px] text-slate-500 flex items-center gap-2">
                      <span>{art.date}</span>
                      <span>·</span>
                      <span>{art.readTime}</span>
                    </div>

                    <h3
                      onClick={() => navigateToDetail('informasi', art.id)}
                      className="text-base font-bold text-slate-900 line-clamp-2 group-hover:text-blue-700 transition-colors cursor-pointer"
                    >
                      {art.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3">
                      {art.summary}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => navigateToDetail('informasi', art.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:text-blue-900"
                  >
                    <span>Baca Selengkapnya</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 text-white p-8 sm:p-12 lg:p-16 shadow-2xl">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/30 text-blue-200 border border-blue-400/30">
              Sekretariat & Komunikasi Guru
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
              Ingin Berkolaborasi atau Mengajukan Pertanyaan Seputar PJOK?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Pengurus KKG PJOK SD Kecamatan Pagu siap mendampingi guru dalam perancangan modul ajar, pendaftaran seleksi O2SN, serta koordinasi kebugaran jasmani anak.
            </p>
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setCurrentPage('kontak')}
                className="px-6 py-3 rounded-xl bg-rose-600 text-white text-sm font-semibold hover:bg-rose-700 transition-colors shadow-lg shadow-rose-600/30"
              >
                Hubungi Sekretariat Kami
              </button>
              <button
                onClick={() => setCurrentPage('agenda')}
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors border border-white/20"
              >
                Lihat Jadwal Pertemuan
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
