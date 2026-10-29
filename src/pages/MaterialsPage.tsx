import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Breadcrumb } from '../components/Breadcrumb';
import { 
  Search, 
  Download, 
  FileText, 
  CheckCircle2, 
  Layers, 
  GraduationCap, 
  Eye, 
  X,
  Share2
} from 'lucide-react';
import { LearningMaterial } from '../types';

export const MaterialsPage: React.FC = () => {
  const { materials, showToast } = useApp();
  const [selectedGrade, setSelectedGrade] = useState<string>('Semua Kelas');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua Jenis');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [previewMaterial, setPreviewMaterial] = useState<LearningMaterial | null>(null);

  const grades = ['Semua Kelas', 'Kelas 1', 'Kelas 2', 'Kelas 3', 'Kelas 4', 'Kelas 5', 'Kelas 6'];
  const categories = ['Semua Jenis', 'Modul Ajar', 'ATP & CP', 'Instrumen Tes Kebugaran', 'Modul P5 PJOK'];

  const filteredMaterials = materials.filter(item => {
    const matchesGrade = selectedGrade === 'Semua Kelas' || item.grade === selectedGrade;
    const matchesCategory = selectedCategory === 'Semua Jenis' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGrade && matchesCategory && matchesSearch;
  });

  const handleDownload = (item: LearningMaterial) => {
    showToast(`Mengunduh berkas: ${item.title}...`, 'success');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: 'Perangkat Pembelajaran', active: true }]} />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">
          Bank Kurikulum & Modul Ajar
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Perangkat Ajar PJOK SD Kurikulum Merdeka
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          Bank perangkat ajar gratis dan resmi yang disusun oleh guru-guru PJOK se-Kecamatan Pagu. Siap diadaptasi untuk Fase A, B, dan C.
        </p>
      </div>

      {/* Filter by Grade (Kelas 1 - 6) */}
      <div className="flex items-center justify-center flex-wrap gap-2">
        {grades.map((grade) => (
          <button
            key={grade}
            onClick={() => setSelectedGrade(grade)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-2xs ${
              selectedGrade === grade
                ? 'bg-blue-700 text-white shadow-md shadow-blue-600/20 scale-105'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            {grade}
          </button>
        ))}
      </div>

      {/* Search and Category Filter */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-3 bg-slate-100/80 rounded-2xl border border-slate-200">
        
        {/* Category filter */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto p-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:bg-white hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari materi atau nama penyusun..."
            className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-white border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-slate-800"
          />
        </div>

      </div>

      {/* Grid Perangkat Ajar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMaterials.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col justify-between group"
          >
            <div>
              <div className="h-44 relative overflow-hidden bg-slate-900">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-bold bg-blue-700 text-white shadow-xs">
                  {item.grade}
                </div>
                <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-md text-[10px] font-medium bg-slate-900/80 text-white backdrop-blur-xs">
                  {item.category}
                </div>
              </div>

              <div className="p-6 space-y-3">
                <h3
                  onClick={() => setPreviewMaterial(item)}
                  className="text-base font-bold text-slate-900 line-clamp-2 group-hover:text-blue-700 transition-colors cursor-pointer"
                >
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {item.summary}
                </p>

                <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-700 truncate">Penyusun: {item.author}</span>
                    <span className="shrink-0">{item.fileSize}</span>
                  </div>
                  <div className="text-slate-400 truncate">
                    Unit Kerja: {item.schoolOrigin}
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3 text-xs">
              <button
                onClick={() => setPreviewMaterial(item)}
                className="inline-flex items-center gap-1 font-semibold text-slate-600 hover:text-blue-700"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Pratinjau</span>
              </button>

              <a
                href={item.downloadUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => handleDownload(item)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-700 text-white font-medium hover:bg-blue-800 transition-colors shadow-2xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Unduh ({item.fileSize})</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {filteredMaterials.length === 0 && (
        <div className="p-12 text-center bg-white rounded-2xl border border-slate-200">
          <FileText className="w-10 h-10 text-slate-400 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-800">Tidak ada perangkat ajar yang cocok</h3>
          <p className="text-xs text-slate-500 mt-1">Coba sesuaikan kata kunci pencarian atau ganti filter kategori.</p>
        </div>
      )}

      {/* Preview Modal */}
      {previewMaterial && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-blue-50 text-blue-700">
                  {previewMaterial.grade}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {previewMaterial.category}
                </span>
              </div>
              <button
                onClick={() => setPreviewMaterial(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900">
                {previewMaterial.title}
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                {previewMaterial.summary}
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-slate-400">Penyusun Dokumen:</span>
                    <div className="font-semibold text-slate-800">{previewMaterial.author}</div>
                  </div>
                  <div>
                    <span className="text-slate-400">Asal Satuan Pendidikan:</span>
                    <div className="font-semibold text-slate-800">{previewMaterial.schoolOrigin}</div>
                  </div>
                  <div>
                    <span className="text-slate-400">Tanggal Publikasi:</span>
                    <div className="font-semibold text-slate-800">{previewMaterial.date}</div>
                  </div>
                  <div>
                    <span className="text-slate-400">Ukuran Berkas:</span>
                    <div className="font-semibold text-slate-800">{previewMaterial.fileSize}</div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-blue-100 bg-blue-50/50 text-xs text-blue-900 leading-relaxed">
                <strong>Catatan Penggunaan:</strong> Dokumen ini bebas dimodifikasi dan didistribusikan untuk keperluan pembelajaran guru PJOK SD di seluruh Indonesia dengan mencantumkan nama penyusun asli.
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={() => setPreviewMaterial(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
              >
                Tutup
              </button>
              <a
                href={previewMaterial.downloadUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => handleDownload(previewMaterial)}
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-blue-700 hover:bg-blue-800 text-white transition-colors shadow-md inline-flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Unduh Dokumen Asli</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
