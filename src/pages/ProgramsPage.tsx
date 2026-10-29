import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Breadcrumb } from '../components/Breadcrumb';
import { 
  Search, 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  FolderDown, 
  ArrowLeft, 
  ArrowRight, 
  ExternalLink,
  ChevronRight,
  FileText
} from 'lucide-react';

export const ProgramsPage: React.FC = () => {
  const { programs, selectedItemId, setSelectedItemId, showToast } = useApp();
  const [activeCategory, setActiveCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const selectedProgram = programs.find(p => p.id === selectedItemId);

  const categories = [
    'Semua',
    'Bimtek & Workshop',
    'Kompetisi O2SN',
    'Senam & Kebugaran Massal',
    'Rapat Rutin'
  ];

  const filteredPrograms = programs.filter(prog => {
    const matchesCategory = activeCategory === 'Semua' || prog.category === activeCategory;
    const matchesSearch = prog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prog.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prog.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // DETAIL PROGRAM VIEW
  if (selectedProgram) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        <Breadcrumb 
          items={[
            { label: 'Program KKG', page: 'program-kkg' },
            { label: selectedProgram.title, active: true }
          ]} 
        />

        <div className="space-y-4">
          <button
            onClick={() => setSelectedItemId(null)}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Semua Program KKG</span>
          </button>

          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-md text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
              {selectedProgram.category}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
              {selectedProgram.status}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {selectedProgram.title}
          </h1>
        </div>

        {/* 2 Kolom: Media & Detail Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-7 space-y-8">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900">
              <img
                src={selectedProgram.image}
                alt={selectedProgram.title}
                className="w-full h-80 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-4">
              <h2 className="text-lg font-bold text-slate-900">Uraian & Sasaran Kegiatan</h2>
              <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                {selectedProgram.description}
              </p>
            </div>

            {/* Google Drive Materials */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-slate-900">Berkas & Materi Pembelajaran</h2>
                <a
                  href={selectedProgram.driveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-semibold text-blue-700 hover:text-blue-800 inline-flex items-center gap-1"
                >
                  <span>Buka Google Drive Lengkap</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="space-y-3">
                {selectedProgram.materials.map((mat, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-slate-50 transition-colors flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="p-2 rounded-lg bg-blue-100 text-blue-700 shrink-0">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-slate-900 truncate">
                          {mat.title}
                        </div>
                        <div className="text-[11px] text-slate-500">
                          Ukuran berkas: {mat.size}
                        </div>
                      </div>
                    </div>

                    <a
                      href={mat.link}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-slate-300 text-slate-700 hover:text-blue-700 hover:border-blue-300 transition-colors shrink-0 shadow-2xs"
                    >
                      Unduh
                    </a>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Jadwal & Lokasi Box */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-6">
              <h3 className="text-base font-bold text-slate-900">Informasi Pelaksanaan</h3>
              
              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-800">Hari & Tanggal</div>
                    <div className="text-slate-600 mt-0.5">{selectedProgram.date}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-800">Waktu Pelaksanaan</div>
                    <div className="text-slate-600 mt-0.5">{selectedProgram.time}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-800">Lokasi / Tempat</div>
                    <div className="text-slate-600 mt-0.5">{selectedProgram.location}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-800">Peserta Sasaran</div>
                    <div className="text-slate-600 mt-0.5">{selectedProgram.targetParticipants}</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2">
                <a
                  href={selectedProgram.driveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-xs font-bold bg-blue-700 hover:bg-blue-800 text-white transition-colors shadow-md shadow-blue-600/20"
                >
                  <FolderDown className="w-4 h-4" />
                  <span>Akses Folder Google Drive</span>
                </a>

                <button
                  onClick={() => showToast('Kehadiran Anda telah tercatat dalam sistem RSVP!', 'success')}
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
                >
                  <span>Konfirmasi Kehadiran (RSVP)</span>
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    );
  }

  // LISTING VIEW
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: 'Program KKG', active: true }]} />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
          Agenda Kegiatan KKG
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Program Kerja KKG PJOK SD Kecamatan Pagu
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          Rangkaian bimtek kurikulum merdeka, seleksi atletik usia dini, dan agenda kebugaran jasmani terintegrasi Google Drive.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-2 bg-slate-100/80 rounded-2xl border border-slate-200">
        
        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto p-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                activeCategory === cat
                  ? 'bg-blue-700 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari program kerja KKG..."
            className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-white border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-slate-800"
          />
        </div>

      </div>

      {/* Programs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredPrograms.map((prog) => (
          <div
            key={prog.id}
            className="rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col justify-between group"
          >
            <div>
              <div className="h-48 relative overflow-hidden bg-slate-900">
                <img
                  src={prog.image}
                  alt={prog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-bold bg-blue-700 text-white">
                  {prog.category}
                </div>
                <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500 text-white shadow-xs">
                  {prog.status}
                </div>
              </div>

              <div className="p-6 space-y-3">
                <h2
                  onClick={() => setSelectedItemId(prog.id)}
                  className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors cursor-pointer line-clamp-2"
                >
                  {prog.title}
                </h2>

                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {prog.description}
                </p>

                <div className="pt-2 border-t border-slate-100 space-y-1 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{prog.date} ({prog.time})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                    <span className="truncate">{prog.location}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3 text-xs">
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
                onClick={() => setSelectedItemId(prog.id)}
                className="inline-flex items-center gap-1 font-semibold text-blue-700 hover:text-blue-900"
              >
                <span>Lihat Detail</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
