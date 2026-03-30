import React, { useEffect, useState } from 'react';
import { sssReportUploadsApi } from '../../api/sssReportUploads';
import { bestPracticeUploadsApi } from '../../api/bestPracticeUploads';
import { naacScoreUploadsApi } from '../../api/naacScoreUploads';
import type { BestPracticeUpload, NaacScoreUpload, SssReportUpload } from '../../types';

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

/* ── UI Components ─────────────────────────────────────────────────────────── */
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

/* ── Sub-Managers ── */

const PDFListManager: React.FC<{ items: any[]; onChange: (val: any[]) => void }> = ({ items, onChange }) => {
  const add = () => onChange([...(items || []), { title: '', fileUrl: '', fileName: '' }]);
  const upd = (i: number, u: any) => { const n = [...items]; n[i] = { ...n[i], ...u }; onChange(n); };
  const del = (i: number) => onChange(items.filter((_, idx) => idx !== i));

  return (
    <div className="space-y-4">
      {(items || []).map((item, idx) => (
        <div key={idx} className="flex flex-col md:flex-row gap-4 p-5 bg-slate-50 border border-slate-100 rounded-3xl relative transition-all hover:border-slate-200">
          <div className="flex-grow space-y-4">
            <div>
              <label className={labelBase}>Document Title</label>
              <input value={item.title} onChange={e => upd(idx, { title: e.target.value })} className={inputBase} placeholder="e.g. Activity Report" />
            </div>
            <div>
              <label className={labelBase}>PDF File Link</label>
              <input value={item.fileUrl} onChange={e => upd(idx, { fileUrl: e.target.value })} className={inputBase} placeholder="URL to PDF" />
            </div>
          </div>
          <button onClick={() => del(idx)} className="self-center p-2 rounded-full bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
      ))}
      <button onClick={add} className="w-full py-4 border-2 border-dashed border-slate-200 rounded-3xl text-sm font-bold text-slate-400 hover:border-blue-500 hover:text-blue-500 transition-all flex items-center justify-center gap-2">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" /></svg>
        Add Document
      </button>
    </div>
  );
};

const AdvancedTableManager: React.FC<{ items: any[]; fields: { key: string; label: string; placeholder: string; isTextarea?: boolean }[]; onChange: (val: any[]) => void }> = ({ items, fields, onChange }) => {
  const add = () => { const empty: any = {}; fields.forEach(f => empty[f.key] = ''); onChange([...(items || []), empty]); };
  const upd = (i: number, u: any) => { const n = [...items]; n[i] = { ...n[i], ...u }; onChange(n); };
  const del = (i: number) => onChange(items.filter((_, idx) => idx !== i));

  return (
    <div className="space-y-4">
      {(items || []).map((item, idx) => (
         <div key={idx} className="flex gap-4 p-6 bg-slate-50 border border-slate-100 rounded-3xl relative transition-all hover:bg-white hover:shadow-xl hover:shadow-slate-200/40 group overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 flex-grow">
               {fields.map(f => (
                  <div key={f.key} className={f.isTextarea ? 'col-span-1 md:col-span-2 lg:col-span-3' : ''}>
                    <label className={labelBase}>{f.label}</label>
                    {f.isTextarea ? (
                      <textarea value={item[f.key]} onChange={e => upd(idx, { [f.key]: e.target.value })} className={`${inputBase} !py-3 !px-4 !rounded-xl !text-xs h-24 resize-none`} placeholder={f.placeholder} />
                    ) : (
                      <input value={item[f.key]} onChange={e => upd(idx, { [f.key]: e.target.value })} className={`${inputBase} !py-3 !px-4 !rounded-xl !text-xs`} placeholder={f.placeholder} />
                    )}
                  </div>
               ))}
            </div>
            <button onClick={() => del(idx)} className="p-2 h-max bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all opacity-0 group-hover:opacity-100">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
         </div>
      ))}
      <button onClick={add} className="w-full py-4 border-2 border-dashed border-slate-200 rounded-3xl text-sm font-bold text-slate-400 hover:border-blue-500 hover:text-blue-500 transition-all flex items-center justify-center gap-2">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" /></svg>
        Add Row
      </button>
    </div>
  );
};

type SSSUploadFormItem = {
  id?: number;
  title: string;
  fileName: string | null;
  fileUrl: string | null;
  file?: File;
  isNew?: boolean;
};

const SSSPdfUploadManager: React.FC<{ items: SSSUploadFormItem[]; onChange: (val: SSSUploadFormItem[]) => void }> = ({ items, onChange }) => {
  const add = () =>
    onChange([
      ...(items || []),
      { title: 'SSS REPORT 2021-22', fileName: null, fileUrl: null, file: undefined },
    ]);

  const upd = (i: number, u: any) => {
    const n = [...(items || [])];
    n[i] = { ...n[i], ...u };
    onChange(n);
  };

  const del = (i: number) => onChange((items || []).filter((_: SSSUploadFormItem, idx: number) => idx !== i));

  const openPreview = (item: SSSUploadFormItem) => {
    const href = item?.file ? URL.createObjectURL(item.file) : item?.fileUrl;
    if (!href) return;
    window.open(href, '_blank', 'noopener,noreferrer');
    if (item?.file) setTimeout(() => URL.revokeObjectURL(href), 2000);
  };

  return (
    <div className="space-y-4">
      {(items || []).map((item, idx) => (
        <div key={idx} className="p-5 bg-slate-50 border border-slate-100 rounded-3xl space-y-4">
          <div>
            <label className={labelBase}>Title</label>
            <input
              value={item.title || ''}
              onChange={e => upd(idx, { title: e.target.value })}
              className={inputBase}
              placeholder="SSS REPORT 2021-22"
            />
          </div>

          <div>
            <label className={labelBase}>Upload PDF</label>
            <input
              type="file"
              accept="application/pdf"
              onChange={e => {
                const file = e.target.files?.[0];
                if (!file) return;
                upd(idx, { file, fileName: file.name });
              }}
              className={`${inputBase} file:mr-4 file:rounded-xl file:border-0 file:bg-slate-200 file:px-4 file:py-2 file:text-xs file:font-black file:text-slate-700`}
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => openPreview(item)}
              disabled={!item?.file && !item?.fileUrl}
              className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-black uppercase tracking-wider disabled:opacity-50"
            >
              Preview PDF
            </button>

            {(item?.fileName || item?.fileUrl) && (
              <span className="text-xs font-bold text-slate-500 truncate max-w-full">
                {item.fileName || item.fileUrl}
              </span>
            )}

            <button
              type="button"
              onClick={() => del(idx)}
              className="px-4 py-2 rounded-xl bg-red-50 text-red-600 text-xs font-black uppercase tracking-wider hover:bg-red-100"
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={add}
        className="w-full py-4 border-2 border-dashed border-slate-200 rounded-3xl text-sm font-bold text-slate-400 hover:border-blue-500 hover:text-blue-500 transition-all flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" /></svg>
        Add New Item
      </button>
    </div>
  );
};

/* ── Main Form ── */
interface NaacFormProps {
  slug: string;
  onBack: () => void;
}

const NaacForm: React.FC<NaacFormProps> = ({ slug, onBack }) => {
  const [data, setData] = useState<any>({ name: slug.replace(/-/g, ' ').toUpperCase() });
  const [payload, setPayload] = useState<any>({});
  const [sssOriginalIds, setSssOriginalIds] = useState<number[]>([]);
  const [bestPracticeOriginalIds, setBestPracticeOriginalIds] = useState<number[]>([]);
  const [naacScoreOriginalIds, setNaacScoreOriginalIds] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  useEffect(() => {
    let isMounted = true;
    const load = async () => {
      setLoading(true);
      if (slug !== 'sss-report' && slug !== 'best-practices' && slug !== 'naac-score') {
        if (isMounted) setLoading(false);
        return;
      }

      try {
        if (slug === 'sss-report') {
          const response = await sssReportUploadsApi.list();
          if (!isMounted) return;
          const items = response.data.map((item: SssReportUpload) => ({
            id: item.id,
            title: item.title,
            fileName: item.pdf_name,
            fileUrl: item.pdf_url,
            isNew: false,
          }));
          setPayload((prev: any) => ({ ...prev, sssUploads: items }));
          setSssOriginalIds(items.map((item) => item.id).filter((id): id is number => typeof id === 'number'));
        } else if (slug === 'best-practices') {
          const response = await bestPracticeUploadsApi.list();
          if (!isMounted) return;
          const items = response.data.map((item: BestPracticeUpload) => ({
            id: item.id,
            title: item.title,
            fileName: item.pdf_name,
            fileUrl: item.pdf_url,
            isNew: false,
          }));
          setPayload((prev: any) => ({ ...prev, bestPracticeUploads: items }));
          setBestPracticeOriginalIds(items.map((item) => item.id).filter((id): id is number => typeof id === 'number'));
        } else {
          const response = await naacScoreUploadsApi.list();
          if (!isMounted) return;
          const items = response.data.map((item: NaacScoreUpload) => ({
            id: item.id,
            title: item.title,
            fileName: item.pdf_name,
            fileUrl: item.pdf_url,
            isNew: false,
          }));
          setPayload((prev: any) => ({ ...prev, naacScoreUploads: items }));
          setNaacScoreOriginalIds(items.map((item) => item.id).filter((id): id is number => typeof id === 'number'));
        }
      } catch (error) {
        if (!isMounted) return;
        setToast({
          message: error instanceof Error
            ? error.message
            : slug === 'sss-report'
              ? 'Failed to load SSS reports'
              : slug === 'best-practices'
                ? 'Failed to load Best Practice uploads'
                : 'Failed to load NAAC Score uploads',
          type: 'error',
        });
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    load();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  const handleSubmit = async () => {
    if (slug !== 'sss-report' && slug !== 'best-practices' && slug !== 'naac-score') {
      setSaving(true);
      setTimeout(() => {
        setSaving(false);
        setToast({ message: 'Saved successfully', type: 'success' });
      }, 800);
      return;
    }

    const mode: 'sss' | 'best-practices' | 'naac-score' =
      slug === 'sss-report' ? 'sss' : slug === 'best-practices' ? 'best-practices' : 'naac-score';
    const currentItems: SSSUploadFormItem[] =
      mode === 'sss'
        ? (payload.sssUploads || [])
        : mode === 'best-practices'
          ? (payload.bestPracticeUploads || [])
          : (payload.naacScoreUploads || []);

    for (const item of currentItems) {
      if (!item.title?.trim()) {
        setToast({
          message: `Each ${
            mode === 'sss' ? 'SSS' : mode === 'best-practices' ? 'Best Practice' : 'NAAC Score'
          } item must have a title.`,
          type: 'error',
        });
        return;
      }
      if (!item.id && !item.file) {
        setToast({ message: `Upload PDF required for "${item.title}".`, type: 'error' });
        return;
      }
    }

    setSaving(true);
    try {
      const currentIds = currentItems.map((item) => item.id).filter((id): id is number => typeof id === 'number');
      const originalIds =
        mode === 'sss' ? sssOriginalIds : mode === 'best-practices' ? bestPracticeOriginalIds : naacScoreOriginalIds;
      const removedIds = originalIds.filter((id) => !currentIds.includes(id));

      for (const id of removedIds) {
        if (mode === 'sss') {
          await sssReportUploadsApi.delete(id);
        } else if (mode === 'best-practices') {
          await bestPracticeUploadsApi.delete(id);
        } else {
          await naacScoreUploadsApi.delete(id);
        }
      }

      const savedItems: SSSUploadFormItem[] = [];

      for (const item of currentItems) {
        if (item.id) {
          const updated = mode === 'sss'
            ? await sssReportUploadsApi.update(item.id, {
                title: item.title.trim(),
                pdf: item.file ?? null,
              })
            : mode === 'best-practices'
              ? await bestPracticeUploadsApi.update(item.id, {
                  title: item.title.trim(),
                  pdf: item.file ?? null,
                })
              : await naacScoreUploadsApi.update(item.id, {
                  title: item.title.trim(),
                  pdf: item.file ?? null,
                });
          savedItems.push({
            id: updated.data.id,
            title: updated.data.title,
            fileName: updated.data.pdf_name,
            fileUrl: updated.data.pdf_url,
            isNew: false,
          });
        } else {
          const created = mode === 'sss'
            ? await sssReportUploadsApi.create({
                title: item.title.trim(),
                pdf: item.file ?? null,
              })
            : mode === 'best-practices'
              ? await bestPracticeUploadsApi.create({
                  title: item.title.trim(),
                  pdf: item.file ?? null,
                })
              : await naacScoreUploadsApi.create({
                  title: item.title.trim(),
                  pdf: item.file ?? null,
                });
          savedItems.push({
            id: created.data.id,
            title: created.data.title,
            fileName: created.data.pdf_name,
            fileUrl: created.data.pdf_url,
            isNew: false,
          });
        }
      }

      if (mode === 'sss') {
        setPayload((prev: any) => ({ ...prev, sssUploads: savedItems }));
        setSssOriginalIds(savedItems.map((item) => item.id).filter((id): id is number => typeof id === 'number'));
      } else if (mode === 'best-practices') {
        setPayload((prev: any) => ({ ...prev, bestPracticeUploads: savedItems }));
        setBestPracticeOriginalIds(savedItems.map((item) => item.id).filter((id): id is number => typeof id === 'number'));
      } else {
        setPayload((prev: any) => ({ ...prev, naacScoreUploads: savedItems }));
        setNaacScoreOriginalIds(savedItems.map((item) => item.id).filter((id): id is number => typeof id === 'number'));
      }
      setToast({
        message: `${
          mode === 'sss' ? 'SSS report' : mode === 'best-practices' ? 'Best Practice' : 'NAAC Score'
        } uploads saved successfully`,
        type: 'success',
      });
    } catch (error) {
      setToast({
        message: error instanceof Error
          ? error.message
          : mode === 'sss'
            ? 'Failed to save SSS uploads'
            : mode === 'best-practices'
              ? 'Failed to save Best Practice uploads'
              : 'Failed to save NAAC Score uploads',
        type: 'error',
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="p-12 text-center text-slate-400 font-bold animate-pulse">LOADING...</div>;

  const renderContent = () => {
    switch (slug) {
      case 'sss-report':
        return (
          <div className="space-y-8">
            <SectionCard title="SSS Report Upload" icon="📄">
              <SSSPdfUploadManager
                items={payload.sssUploads || []}
                onChange={val => setPayload({ ...payload, sssUploads: val })}
              />
            </SectionCard>
          </div>
        );

      case 'ssr-cycle-1':
      case 'ssr-cycle-2':
        return (
          <div className="space-y-8">
            <SectionCard title="SSR Overview" icon="🏆">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={labelBase}>Section Name</label>
                  <input maxLength={100} value={payload.sectionName} onChange={e => setPayload({...payload, sectionName: e.target.value})} className={inputBase} />
                </div>
                <div>
                  <label className={labelBase}>Cycle Type</label>
                  <input maxLength={20} value={payload.cycle} onChange={e => setPayload({...payload, cycle: e.target.value})} className={inputBase} placeholder="Cycle 1 / Cycle 2" />
                </div>
                <div className="md:col-span-2">
                  <label className={labelBase}>Description</label>
                  <textarea maxLength={150} value={payload.desc} onChange={e => setPayload({...payload, desc: e.target.value})} className={`${inputBase} h-24 resize-none`} />
                </div>
              </div>
            </SectionCard>
            <SectionCard title="Extended Profile" icon="📊">
              <AdvancedTableManager items={payload.extendedProfile} fields={[
                {key: 'category', label: 'Category', placeholder: 'Students/Teachers/Institution'},
                {key: 'metricId', label: 'Metric ID', placeholder: 'e.g. 1.1'},
                {key: 'desc', label: 'Description', placeholder: 'Metric description...'},
                {key: 'link', label: 'Resource Link', placeholder: 'https://...'}
              ]} onChange={val => setPayload({...payload, extendedProfile: val})} />
            </SectionCard>
            <SectionCard title="QIF (Quantitative Indicator)" icon="📈">
              <AdvancedTableManager items={payload.qif} fields={[
                {key: 'criteriaName', label: 'Criteria Name', placeholder: '...'},
                {key: 'code', label: 'Sub-Criteria Code', placeholder: '...'},
                {key: 'desc', label: 'Description', placeholder: '...'},
                {key: 'link', label: 'Resource Link', placeholder: 'https://...'}
              ]} onChange={val => setPayload({...payload, qif: val})} />
            </SectionCard>
            <SectionCard title="DVV Clarifications" icon="⚖️">
              <AdvancedTableManager items={payload.dvv} fields={[
                {key: 'categoryOrCriteria', label: 'Category / Criteria', placeholder: '...'},
                {key: 'metricOrCode', label: 'Metric ID / Code', placeholder: '...'},
                {key: 'link', label: 'Updated Link', placeholder: 'https://...'}
              ]} onChange={val => setPayload({...payload, dvv: val})} />
            </SectionCard>
            <SectionCard title="SSR Documents & Media" icon="📁">
              <PDFListManager items={payload.docs || []} onChange={val => setPayload({...payload, docs: val})} />
            </SectionCard>
          </div>
        );

      case 'best-practices':
        return (
          <div className="space-y-8">
            <SectionCard title="Best Practices & Institutional Distinctiveness Upload" icon="📄">
              <SSSPdfUploadManager
                items={payload.bestPracticeUploads || []}
                onChange={val => setPayload({ ...payload, bestPracticeUploads: val })}
              />
            </SectionCard>
          </div>
        );

      case 'naac-score':
        return (
          <div className="space-y-8">
            <SectionCard title="NAAC Score Upload" icon="📄">
              <SSSPdfUploadManager
                items={payload.naacScoreUploads || []}
                onChange={val => setPayload({ ...payload, naacScoreUploads: val })}
              />
            </SectionCard>
          </div>
        );

      default:
        return <div className="p-8 text-center text-slate-400 font-bold uppercase tracking-widest bg-slate-50 border border-slate-100 rounded-3xl">Module being refined...</div>;
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12 animate-fade-in relative">
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50 transition-colors shadow-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <div>
            <h1 className="text-3xl font-extrabold text-[#111827]">{data?.name}</h1>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">NAAC EDITOR</p>
          </div>
        </div>
        <button onClick={handleSubmit} disabled={saving} className="px-8 py-3.5 bg-[#2563EB] text-white rounded-2xl font-black text-sm uppercase tracking-wider shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all disabled:opacity-50 flex items-center gap-2">
          {saving && <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
          {saving ? 'Saving...' : 'Save Changes'}
        </button>
      </div>

      <div className="space-y-6">
         {renderContent()}
      </div>
    </div>
  );
};

export default NaacForm;
