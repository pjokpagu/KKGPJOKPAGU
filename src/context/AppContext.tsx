import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  NavPage,
  HeroData,
  ClientPartner,
  TeacherProfile,
  ServiceItem,
  ProgramKKG,
  LearningMaterial,
  ArticleInfo,
  ActivityPhoto,
  AgendaItem,
  Testimonial,
  SiteSettings
} from '../types';
import {
  initialHero,
  initialPartners,
  initialTeachers,
  initialServices,
  initialPrograms,
  initialMaterials,
  initialArticles,
  initialActivities,
  initialAgenda,
  initialTestimonials,
  initialSettings
} from '../data/initialData';

interface AppContextType {
  currentPage: NavPage;
  setCurrentPage: (page: NavPage) => void;
  selectedItemId: string | null;
  setSelectedItemId: (id: string | null) => void;
  navigateToDetail: (page: NavPage, id: string) => void;
  
  hero: HeroData;
  setHero: React.Dispatch<React.SetStateAction<HeroData>>;
  partners: ClientPartner[];
  setPartners: React.Dispatch<React.SetStateAction<ClientPartner[]>>;
  teachers: TeacherProfile[];
  setTeachers: React.Dispatch<React.SetStateAction<TeacherProfile[]>>;
  services: ServiceItem[];
  setServices: React.Dispatch<React.SetStateAction<ServiceItem[]>>;
  programs: ProgramKKG[];
  setPrograms: React.Dispatch<React.SetStateAction<ProgramKKG[]>>;
  materials: LearningMaterial[];
  setMaterials: React.Dispatch<React.SetStateAction<LearningMaterial[]>>;
  articles: ArticleInfo[];
  setArticles: React.Dispatch<React.SetStateAction<ArticleInfo[]>>;
  activities: ActivityPhoto[];
  setActivities: React.Dispatch<React.SetStateAction<ActivityPhoto[]>>;
  agenda: AgendaItem[];
  setAgenda: React.Dispatch<React.SetStateAction<AgendaItem[]>>;
  testimonials: Testimonial[];
  setTestimonials: React.Dispatch<React.SetStateAction<Testimonial[]>>;
  settings: SiteSettings;
  setSettings: React.Dispatch<React.SetStateAction<SiteSettings>>;
  
  // Media manager state (uploaded or selected local images)
  mediaList: Array<{ id: string; name: string; url: string; date: string; category: string }>;
  addMediaItem: (item: { name: string; url: string; category: string }) => void;
  deleteMediaItem: (id: string) => void;

  // Search and notification state
  globalSearchQuery: string;
  setGlobalSearchQuery: (q: string) => void;
  showToast: (message: string, type?: 'success' | 'info' | 'error') => void;
  toastMessage: { text: string; type: 'success' | 'info' | 'error' } | null;

  // Dark mode for admin
  isAdminDarkMode: boolean;
  setIsAdminDarkMode: (val: boolean) => void;

  resetAllData: () => void;
  exportDataJSON: () => void;
  importDataJSON: (jsonString: string) => boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEY_PREFIX = 'kkg_pjok_pagu_data_v1_';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<NavPage>('beranda');
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [globalSearchQuery, setGlobalSearchQuery] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<{ text: string; type: 'success' | 'info' | 'error' } | null>(null);
  const [isAdminDarkMode, setIsAdminDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('kkg_admin_dark') === 'true';
  });

  const [mediaList, setMediaList] = useState<Array<{ id: string; name: string; url: string; date: string; category: string }>>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_PREFIX + 'media');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* ignore */ }
    }
    return [
      { id: 'm-1', name: 'Hero Sport Education', url: '/src/assets/images/hero_sport_education_1793250246629.jpg', date: '28 Okt 2026', category: 'Hero & Banner' },
      { id: 'm-2', name: 'Rapat Kolaborasi Guru', url: '/src/assets/images/kkg_teachers_meeting_1793250246883.jpg', date: '28 Okt 2026', category: 'Dokumentasi' },
      { id: 'm-3', name: 'Lomba Atletik Kids O2SN', url: '/src/assets/images/elementary_sports_day_1793250248307.jpg', date: '28 Okt 2026', category: 'Kompetisi' },
      { id: 'm-4', name: 'Senam Pagi SDN Pagu', url: '/src/assets/images/gymnastics_field_pagu_1793250247785.jpg', date: '28 Okt 2026', category: 'Kebugaran' },
    ];
  });

  const [hero, setHero] = useState<HeroData>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_PREFIX + 'hero');
    if (saved) { try { return JSON.parse(saved); } catch (e) {} }
    return initialHero;
  });

  const [partners, setPartners] = useState<ClientPartner[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_PREFIX + 'partners');
    if (saved) { try { return JSON.parse(saved); } catch (e) {} }
    return initialPartners;
  });

  const [teachers, setTeachers] = useState<TeacherProfile[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_PREFIX + 'teachers');
    if (saved) { try { return JSON.parse(saved); } catch (e) {} }
    return initialTeachers;
  });

  const [services, setServices] = useState<ServiceItem[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_PREFIX + 'services');
    if (saved) { try { return JSON.parse(saved); } catch (e) {} }
    return initialServices;
  });

  const [programs, setPrograms] = useState<ProgramKKG[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_PREFIX + 'programs');
    if (saved) { try { return JSON.parse(saved); } catch (e) {} }
    return initialPrograms;
  });

  const [materials, setMaterials] = useState<LearningMaterial[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_PREFIX + 'materials');
    if (saved) { try { return JSON.parse(saved); } catch (e) {} }
    return initialMaterials;
  });

  const [articles, setArticles] = useState<ArticleInfo[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_PREFIX + 'articles');
    if (saved) { try { return JSON.parse(saved); } catch (e) {} }
    return initialArticles;
  });

  const [activities, setActivities] = useState<ActivityPhoto[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_PREFIX + 'activities');
    if (saved) { try { return JSON.parse(saved); } catch (e) {} }
    return initialActivities;
  });

  const [agenda, setAgenda] = useState<AgendaItem[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_PREFIX + 'agenda');
    if (saved) { try { return JSON.parse(saved); } catch (e) {} }
    return initialAgenda;
  });

  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_PREFIX + 'testimonials');
    if (saved) { try { return JSON.parse(saved); } catch (e) {} }
    return initialTestimonials;
  });

  const [settings, setSettings] = useState<SiteSettings>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_PREFIX + 'settings');
    if (saved) { try { return JSON.parse(saved); } catch (e) {} }
    return initialSettings;
  });

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_PREFIX + 'hero', JSON.stringify(hero));
  }, [hero]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_PREFIX + 'partners', JSON.stringify(partners));
  }, [partners]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_PREFIX + 'teachers', JSON.stringify(teachers));
  }, [teachers]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_PREFIX + 'services', JSON.stringify(services));
  }, [services]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_PREFIX + 'programs', JSON.stringify(programs));
  }, [programs]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_PREFIX + 'materials', JSON.stringify(materials));
  }, [materials]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_PREFIX + 'articles', JSON.stringify(articles));
  }, [articles]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_PREFIX + 'activities', JSON.stringify(activities));
  }, [activities]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_PREFIX + 'agenda', JSON.stringify(agenda));
  }, [agenda]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_PREFIX + 'testimonials', JSON.stringify(testimonials));
  }, [testimonials]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_PREFIX + 'settings', JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_PREFIX + 'media', JSON.stringify(mediaList));
  }, [mediaList]);

  useEffect(() => {
    localStorage.setItem('kkg_admin_dark', isAdminDarkMode ? 'true' : 'false');
  }, [isAdminDarkMode]);

  // Window scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, selectedItemId]);

  const showToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    setToastMessage({ text: message, type });
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const navigateToDetail = (page: NavPage, id: string) => {
    setSelectedItemId(id);
    setCurrentPage(page);
  };

  const addMediaItem = (item: { name: string; url: string; category: string }) => {
    const newItem = {
      id: 'm-' + Date.now(),
      name: item.name,
      url: item.url,
      date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }),
      category: item.category
    };
    setMediaList(prev => [newItem, ...prev]);
    showToast('Foto berhasil ditambahkan ke Media Manager!', 'success');
  };

  const deleteMediaItem = (id: string) => {
    setMediaList(prev => prev.filter(m => m.id !== id));
    showToast('Foto telah dihapus dari Media Manager', 'info');
  };

  const resetAllData = () => {
    setHero(initialHero);
    setPartners(initialPartners);
    setTeachers(initialTeachers);
    setServices(initialServices);
    setPrograms(initialPrograms);
    setMaterials(initialMaterials);
    setArticles(initialArticles);
    setActivities(initialActivities);
    setAgenda(initialAgenda);
    setTestimonials(initialTestimonials);
    setSettings(initialSettings);
    localStorage.clear();
    showToast('Seluruh data berhasil di-reset ke default awal', 'info');
  };

  const exportDataJSON = () => {
    const fullData = {
      hero,
      partners,
      teachers,
      services,
      programs,
      materials,
      articles,
      activities,
      agenda,
      testimonials,
      settings,
      mediaList,
      exportedAt: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(fullData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `kkg_pjok_pagu_backup_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Data berhasil diekspor sebagai file JSON!', 'success');
  };

  const importDataJSON = (jsonString: string): boolean => {
    try {
      const data = JSON.parse(jsonString);
      if (data.hero) setHero(data.hero);
      if (data.partners) setPartners(data.partners);
      if (data.teachers) setTeachers(data.teachers);
      if (data.services) setServices(data.services);
      if (data.programs) setPrograms(data.programs);
      if (data.materials) setMaterials(data.materials);
      if (data.articles) setArticles(data.articles);
      if (data.activities) setActivities(data.activities);
      if (data.agenda) setAgenda(data.agenda);
      if (data.testimonials) setTestimonials(data.testimonials);
      if (data.settings) setSettings(data.settings);
      if (data.mediaList) setMediaList(data.mediaList);
      showToast('Data berhasil diimpor & dipulihkan!', 'success');
      return true;
    } catch (e) {
      showToast('Format file JSON tidak valid', 'error');
      return false;
    }
  };

  return (
    <AppContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        selectedItemId,
        setSelectedItemId,
        navigateToDetail,
        hero,
        setHero,
        partners,
        setPartners,
        teachers,
        setTeachers,
        services,
        setServices,
        programs,
        setPrograms,
        materials,
        setMaterials,
        articles,
        setArticles,
        activities,
        setActivities,
        agenda,
        setAgenda,
        testimonials,
        setTestimonials,
        settings,
        setSettings,
        mediaList,
        addMediaItem,
        deleteMediaItem,
        globalSearchQuery,
        setGlobalSearchQuery,
        showToast,
        toastMessage,
        isAdminDarkMode,
        setIsAdminDarkMode,
        resetAllData,
        exportDataJSON,
        importDataJSON
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
