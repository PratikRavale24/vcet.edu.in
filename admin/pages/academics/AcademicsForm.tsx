import React, { useEffect, useState } from 'react';
import { pagesApi } from '../../api/pagesApi';
import type { AcademicsData, AcademicsPayload, AdmissionDocument } from '../../types';

/* ── Toast Component ────────────────────────────────────────────────────────── */
const Toast: React.FC<{ message: string; type: 'success' | 'error'; onClose: () => void }> = ({ message, type, onClose }) => {
  useEffect(() => { const t = setTimeout(onClose, 3500); return () => clearTimeout(t); }, [onClose]);
  return (
    <div className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl text-sm font-bold animate-slide-up ${type === 'success' ? 'bg-emerald-600 text-white' : 'bg-red-600 text-white'}`}>
      {type === 'success' ? (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
      ) : (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
      )}
      {message}
    </div>
  );
};

/* ── Section Card ─────────────────────────────────────────────────────────── */
const SectionCard: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => (
  <div className="bg-white rounded-[2rem] shadow-lg shadow-slate-200/40 border border-slate-100 overflow-hidden">
    <div className="px-8 py-5 border-b border-slate-100 flex items-center gap-3">
      <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500">{icon}</div>
      <h3 className="text-sm font-extrabold text-[#111827] uppercase tracking-wider">{title}</h3>
    </div>
    <div className="p-8 space-y-6">{children}</div>
  </div>
);

const inputBase = 'w-full bg-slate-50 border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-[#2563EB] rounded-2xl px-5 py-4 text-sm font-bold transition-all outline-none';
const labelBase = 'block text-xs font-black text-slate-400 uppercase tracking-widest mb-2.5 ml-1';

/* ── Document List Manager ─────────────────────────────────────────────────── */
interface DocItem extends AdmissionDocument {
  file?: File | null;
}

const DocumentListManager: React.FC<{
  items: DocItem[];
  onChange: (items: DocItem[]) => void;
  type: 'booklets' | 'calendars';
}> = ({ items, onChange, type }) => {
  const addItem = () => {
    onChange([...(items || []), { title: '', description: '', year: '2025-26', fileUrl: null, fileName: null }]);
  };

  const removeItem = (index: number) => {
    onChange(items.filter((_, i) => i !== index));
  };

  const updateItem = (index: number, updates: Partial<DocItem>) => {
    const next = [...items];
    next[index] = { ...next[index], ...updates };
    onChange(next);
  };

  return (
    <div className="space-y-4">
      {Array.isArray(items) && items.map((item, idx) => (
        <div key={idx} className="relative group flex items-start gap-6 bg-slate-50 border border-slate-200 rounded-[2rem] p-6 transition-all hover:shadow-md hover:border-slate-300">
          <div className="flex-shrink-0 w-12 h-12 border-2 border-slate-200 rounded-xl flex items-center justify-center text-slate-400 font-black text-lg bg-white">
            {(idx + 1).toString().padStart(2, '0')}
          </div>
          
          <div className="flex-grow space-y-4">
            <button 
              type="button" 
              onClick={() => removeItem(idx)}
              className="absolute -top-3 -right-3 w-8 h-8 bg-red-50 text-red-500 rounded-full flex items-center justify-center shadow-md hover:bg-red-500 hover:text-white transition-all opacity-0 group-hover:opacity-100 z-20"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-1">
                <label className={labelBase}>Title</label>
                <input 
                  value={item.title} 
                  onChange={e => updateItem(idx, { title: e.target.value })}
                  className={inputBase}
                  placeholder={type === 'booklets' ? "Program Booklet Name" : "Session / Semester Name"}
                />
              </div>
              <div className="md:col-span-1 text-right">
                 <label className={labelBase}>Academic Year</label>
                 <select 
                    value={item.year} 
                    onChange={e => updateItem(idx, { year: e.target.value })}
                    className={inputBase}
                 >
                    <option value="2025-26">2025-26</option>
                    <option value="2024-25">2024-25</option>
                    <option value="2023-24">2023-24</option>
                 </select>
              </div>
              <div className="md:col-span-2">
                <label className={labelBase}>{type === 'calendars' ? 'Status / Tag (e.g. TENTATIVE)' : 'Description'}</label>
                <input 
                  value={item.description} 
                  onChange={e => updateItem(idx, { description: e.target.value })}
                  className={inputBase}
                  placeholder={type === 'calendars' ? "e.g. TENTATIVE or Confirmed" : "Briefly describe the booklet content..."}
                />
              </div>
              <div className="md:col-span-2">
                <label className={labelBase}>PDF Document</label>
                <div className="relative overflow-hidden bg-white border-2 border-dashed border-slate-200 rounded-2xl p-4 transition-all hover:border-[#2563EB]">
                  <input 
                    type="file" 
                    accept="application/pdf"
                    onChange={e => updateItem(idx, { file: e.target.files?.[0] || null })}
                    className="absolute inset-0 opacity-0 cursor-pointer z-10"
                  />
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-red-50 text-red-500 flex items-center justify-center">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5z" /></svg>
                    </div>
                    <span className="text-xs font-bold text-slate-600 truncate">
                      {item.file?.name || item.fileName || 'Click or drag to upload PDF'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <button 
        type="button" 
        onClick={addItem}
        className="w-full py-4 border-2 border-dashed border-slate-200 rounded-[2rem] text-slate-400 font-bold hover:border-[#2563EB] hover:text-[#2563EB] transition-all flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" /></svg>
        <span>Add Row</span>
      </button>
    </div>
  );
};

/* ── Main Academics Form ──────────────────────────────────────────────────── */
interface AcademicsFormProps {
  activeSection?: string;
  onBack?: () => void;
}

const AcademicsForm: React.FC<AcademicsFormProps> = ({ activeSection, onBack }) => {
  const [data, setData] = useState<AcademicsData | null>(null);
  const [payload, setPayload] = useState<AcademicsPayload>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  useEffect(() => {
    pagesApi.academics.get()
      .then(res => {
        setData(res.data);
        setPayload({
          programBooklets: Array.isArray(res.data?.programBooklets) ? res.data.programBooklets : [],
          academicCalendars: Array.isArray(res.data?.academicCalendars) ? res.data.academicCalendars : [],
        });
      })
      .finally(() => setLoading(false));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await pagesApi.academics.update(payload);
      setData(res.data);
      setToast({ message: 'Academics content updated successfully', type: 'success' });
    } catch (err) {
      setToast({ message: 'Failed to update content', type: 'error' });
    } finally {
      setSaving(false);
    }
  };

  if (loading) return (
    <div className="flex flex-col items-center justify-center py-24 gap-4">
      <div className="w-10 h-10 border-4 border-slate-100 border-t-[#2563EB] rounded-full animate-spin" />
      <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">Loading Academics Module...</p>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          {onBack && (
            <button 
              onClick={onBack}
              className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50 transition-colors shadow-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
            </button>
          )}
          <div>
            <h1 className="text-3xl font-extrabold text-[#111827]">
              {activeSection ? `Edit ${activeSection === 'calendars' ? 'Calendars' : 'Booklets'}` : 'Academics Module'}
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              {activeSection ? `Manage your academic ${activeSection} here.` : 'Manage Academic calendars and Program booklets.'}
            </p>
          </div>
        </div>
        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest text-right">
          Last updated: {data?.updatedAt ? new Date(data.updatedAt).toLocaleDateString() : 'Never'}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Academic Calendars List */}
        {(!activeSection || activeSection === 'calendars') && (
          <SectionCard title="Academic Calendars" icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z" /></svg>}>
            <DocumentListManager 
              type="calendars" 
              items={payload.academicCalendars || []} 
              onChange={items => setPayload(prev => ({ ...prev, academicCalendars: items }))} 
            />
          </SectionCard>
        )}

        {/* Program Booklets List */}
        {(!activeSection || activeSection === 'booklets') && (
          <SectionCard title="Program Booklets" icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zM12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>}>
            <DocumentListManager 
              type="booklets" 
              items={payload.programBooklets || []} 
              onChange={items => setPayload(prev => ({ ...prev, programBooklets: items }))} 
            />
          </SectionCard>
        )}

        {/* Footer Actions */}
        <div className="bg-white rounded-[2rem] shadow-lg shadow-slate-200/40 border border-slate-100 px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest sm:w-1/2 leading-relaxed">
            All PDF resources support dynamic row management. Multiple entries can be added for booklets and calendars.
          </p>
          <button 
            type="submit" 
            disabled={saving} 
            className="w-full sm:w-auto bg-[#2563EB] hover:bg-blue-700 disabled:opacity-50 text-white font-black px-12 py-4 rounded-2xl text-xs transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 uppercase tracking-[0.15em] flex items-center justify-center gap-2"
          >
            {saving ? <><div className="w-3 h-3 border-2 border-white/20 border-t-white rounded-full animate-spin" /><span>Saving...</span></> : 'Update Module'}
          </button>
        </div>
      </form>

      <style>{`
        @keyframes slide-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-slide-up { animation: slide-up 0.3s ease-out; }
      `}</style>
    </div>
  );
};

export default AcademicsForm;
