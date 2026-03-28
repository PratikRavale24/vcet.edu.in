import React, { useEffect, useState } from 'react';
import { pagesApi } from '../../api/pagesApi';
import type { ResearchData, ResearchPayload } from '../../types';

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

// 1. PDF Manager (Works for: NIRF, Policy, Downloads, Conventions)
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
              <input value={item.title} onChange={e => upd(idx, { title: e.target.value })} className={inputBase} placeholder="e.g. NIRF 2024 Report" />
            </div>
            <div>
              <label className={labelBase}>PDF File Link / Name</label>
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

// 2. PhD Dataset Manager (Table with Auto-calc)
const PhDDatasetManager: React.FC<{ items: any[]; onChange: (val: any[]) => void }> = ({ items, onChange }) => {
  const upd = (i: number, u: any) => { const n = [...items]; n[i] = { ...n[i], ...u }; onChange(n); };
  const add = () => onChange([...(items || []), { department: '', count: 0 }]);
  const del = (i: number) => onChange(items.filter((_, idx) => idx !== i));
  const total = (items || []).reduce((acc, curr) => acc + (Number(curr.count) || 0), 0);

  return (
    <div className="space-y-4 bg-slate-50/50 p-6 rounded-3xl border border-slate-100">
      <div className="grid grid-cols-12 gap-4 mb-2 px-2">
        <div className="col-span-8 text-[10px] uppercase font-black tracking-widest text-slate-400">Department Name</div>
        <div className="col-span-3 text-[10px] uppercase font-black tracking-widest text-slate-400 text-center">Count</div>
      </div>
      {(items || []).map((item, idx) => (
        <div key={idx} className="grid grid-cols-12 gap-4 items-center group">
          <div className="col-span-8">
            <input value={item.department} onChange={e => upd(idx, { department: e.target.value })} className={`${inputBase} !py-3 !px-4 !rounded-xl !text-xs`} placeholder="e.g. Computer Science" />
          </div>
          <div className="col-span-3">
            <input type="number" value={item.count} onChange={e => upd(idx, { count: parseInt(e.target.value) || 0 })} className={`${inputBase} !py-3 !px-4 !rounded-xl !text-xs text-center font-black`} />
          </div>
          <div className="col-span-1">
             <button onClick={() => del(idx)} className="text-red-300 hover:text-red-600 transition-colors opacity-0 group-hover:opacity-100">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
             </button>
          </div>
        </div>
      ))}
      <div className="flex items-center justify-between mt-4 px-2 pt-4 border-t border-slate-200">
        <button onClick={add} className="text-[10px] font-black uppercase text-[#2563EB] hover:underline">Add Department</button>
        <div className="text-[10px] font-black uppercase text-slate-900 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm">
          Total: <span className="text-[#2563EB] text-xs ml-1">{total}</span>
        </div>
      </div>
    </div>
  );
};

// 3. Advanced Table Manager (For: Funding, Books, Journals, Patents, Consultancy)
const AdvancedTableManager: React.FC<{ items: any[]; fields: { key: string; label: string; placeholder: string }[]; onChange: (val: any[]) => void }> = ({ items, fields, onChange }) => {
  const add = () => { const empty: any = {}; fields.forEach(f => empty[f.key] = ''); onChange([...(items || []), empty]); };
  const upd = (i: number, u: any) => { const n = [...items]; n[i] = { ...n[i], ...u }; onChange(n); };
  const del = (i: number) => onChange(items.filter((_, idx) => idx !== i));

  return (
    <div className="space-y-4">
      {(items || []).map((item, idx) => (
         <div key={idx} className="flex gap-4 p-6 bg-slate-50 border border-slate-100 rounded-3xl relative transition-all hover:bg-white hover:shadow-xl hover:shadow-slate-200/40 group overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 flex-grow">
               {fields.map(f => (
                  <div key={f.key}>
                    <label className={labelBase}>{f.label}</label>
                    <input value={item[f.key]} onChange={e => upd(idx, { [f.key]: e.target.value })} className={`${inputBase} !py-3 !px-4 !rounded-xl !text-xs`} placeholder={f.placeholder} />
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

/* ── Main Form ── */
interface ResearchFormProps {
  slug: string;
  onBack: () => void;
}

const ResearchForm: React.FC<ResearchFormProps> = ({ slug, onBack }) => {
  const [data, setData] = useState<ResearchData | null>(null);
  const [payload, setPayload] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  useEffect(() => {
    pagesApi.research.get(slug).then(res => {
      setData(res.data);
      setPayload(res.data || {});
    }).finally(() => setLoading(false));
  }, [slug]);

  const handleSubmit = async () => {
    setSaving(true);
    try {
      await pagesApi.research.update(slug, payload);
      setToast({ message: 'Saved successfully', type: 'success' });
    } catch {
      setToast({ message: 'Error saving data', type: 'error' });
    } finally { setSaving(false); }
  };

  if (loading) return <div className="p-12 text-center text-slate-400 font-bold animate-pulse">LOADING...</div>;

  const renderContent = () => {
    switch (slug) {
      case 'research-intro':
        return (
          <div className="space-y-8">
            <SectionCard title="PhD Dataset - Pursuing" icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>}>
              <PhDDatasetManager items={payload.phdPursuing} onChange={val => setPayload({...payload, phdPursuing: val})} />
            </SectionCard>
            <SectionCard title="PhD Dataset - Holders" icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86 1.552l-3.153 3.153a2 2 0 01-2.828 0l-3.153-3.153a6 6 0 00-3.86-1.552l-2.387.477a2 2 0 00-1.022.547l-3.153 3.153a2 2 0 01-2.828 0l-3.153-3.153a6 6 0 00-3.86-1.552l-2.387.477a2 2 0 00-1.022.547" /></svg>}>
              <PhDDatasetManager items={payload.phdHolders} onChange={val => setPayload({...payload, phdHolders: val})} />
            </SectionCard>
            <SectionCard title="Dean of Research" icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>}>
              <div className="grid md:grid-cols-2 gap-6">
                <div><label className={labelBase}>Dean Name</label><input value={payload.dean?.name} onChange={e => setPayload({...payload, dean: {...payload.dean, name: e.target.value}})} className={inputBase} /></div>
                <div><label className={labelBase}>Designation</label><input value={payload.dean?.designation} onChange={e => setPayload({...payload, dean: {...payload.dean, designation: e.target.value}})} className={inputBase} /></div>
              </div>
            </SectionCard>
          </div>
        );

      case 'funded-research':
        return (
          <SectionCard title="Funding Records" icon="💰">
            <AdvancedTableManager items={payload.funding} fields={[
              {key: 'principalInvestigator', label: 'PI Name', placeholder: 'e.g. Dr. John Doe'},
              {key: 'title', label: 'Title of Project', placeholder: 'Project Name...'},
              {key: 'fundingAgency', label: 'Agency', placeholder: 'e.g. AICTE, DST'},
              {key: 'amount', label: 'Amount (Lakhs)', placeholder: '5.5'},
              {key: 'academicYear', label: 'Year', placeholder: '2023-24'}
            ]} onChange={val => setPayload({...payload, funding: val})} />
          </SectionCard>
        );

      case 'publications':
        return (
          <div className="space-y-8">
            <SectionCard title="Book Publications" icon="📚">
              <AdvancedTableManager items={payload.books} fields={[
                {key: 'author', label: 'Author/Editor', placeholder: 'Name'},
                {key: 'title', label: 'Book Title', placeholder: 'Full title...'},
                {key: 'publisher', label: 'Publisher', placeholder: 'e.g. Springer'}
              ]} onChange={val => setPayload({...payload, books: val})} />
            </SectionCard>
            <SectionCard title="Journal Publications" icon="📰">
              <AdvancedTableManager items={payload.journals} fields={[
                {key: 'author', label: 'Author', placeholder: 'Name'},
                {key: 'title', label: 'Title', placeholder: 'Journal name...'},
                {key: 'details', label: 'Issue/Vol/Page', placeholder: 'e.g. Vol 5, Issue 2'}
              ]} onChange={val => setPayload({...payload, journals: val})} />
            </SectionCard>
          </div>
        );

      case 'patents':
        return (
          <SectionCard title="Intellectual Property" icon="💡">
            <AdvancedTableManager items={payload.patents} fields={[
              {key: 'applicationNumber', label: 'App Number', placeholder: 'e.g. 202100345'},
              {key: 'inventors', label: 'Inventors', placeholder: 'Names...'},
              {key: 'title', label: 'Patent Title', placeholder: 'Full title...'},
              {key: 'status', label: 'Status', placeholder: 'Published/Granted'}
            ]} onChange={val => setPayload({...payload, patents: val})} />
          </SectionCard>
        );

      case 'consultancy':
        return (
           <div className="space-y-8">
              <SectionCard title="Consultancy Revenue" icon="📈">
                 <AdvancedTableManager items={payload.consultancyRevenue} fields={[
                    {key: 'department', label: 'Department', placeholder: 'e.g. CSE'},
                    {key: 'year', label: 'Year', placeholder: '2023-24'},
                    {key: 'revenue', label: 'Revenue (INR)', placeholder: '150000'}
                 ]} onChange={val => setPayload({...payload, consultancyRevenue: val})} />
              </SectionCard>
              <SectionCard title="Industry Partners" icon="🤝">
                 <AdvancedTableManager items={payload.industryPartners} fields={[
                    {key: 'organization', label: 'Organization', placeholder: 'Company Name'},
                    {key: 'area', label: 'Consultancy Area', placeholder: 'e.g. Software Audit'}
                 ]} onChange={val => setPayload({...payload, industryPartners: val})} />
              </SectionCard>
           </div>
        );

      case 'iic':
        return (
          <div className="space-y-8">
            <SectionCard title="IIC Achievements" icon="🏆">
              <AdvancedTableManager items={payload.iicAchievements} fields={[
                {key: 'title', label: 'Achievement', placeholder: 'e.g. 4 Star Rating'},
                {key: 'year', label: 'Academic Year', placeholder: '2023-24'}
              ]} onChange={val => setPayload({...payload, iicAchievements: val})} />
            </SectionCard>
            <SectionCard title="IIC Committee" icon="👥">
               <AdvancedTableManager items={payload.iicCommittee} fields={[
                  {key: 'name', label: 'Member Name', placeholder: 'e.g. Dr. A.P.J. Abdul Kalam'},
                  {key: 'role', label: 'Role', placeholder: 'President / Convener'}
               ]} onChange={val => setPayload({...payload, iicCommittee: val})} />
            </SectionCard>
            <SectionCard title="IIC Reports / PDF Documents" icon="📄">
               <PDFListManager items={payload.iicReports || []} onChange={val => setPayload({...payload, iicReports: val})} />
            </SectionCard>
          </div>
        );

      case 'conventions':
      case 'research-policy':
      case 'nirf':
      case 'downloads':
        return (
          <SectionCard title="Official Documents" icon="📁">
            <PDFListManager items={payload.documents || []} onChange={val => setPayload({...payload, documents: val})} />
          </SectionCard>
        );

        case 'research-facility':
           return (
              <SectionCard title="R&D Labs & Facilities" icon="🏢">
                 <AdvancedTableManager items={payload.facilities} fields={[
                    {key: 'title', label: 'Facility Name', placeholder: 'e.g. Nvidia AI Lab'},
                    {key: 'description', label: 'Description', placeholder: 'Short summary...'}
                 ]} onChange={val => setPayload({...payload, facilities: val})} />
              </SectionCard>
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
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">RESEARCH EDITOR</p>
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

export default ResearchForm;
