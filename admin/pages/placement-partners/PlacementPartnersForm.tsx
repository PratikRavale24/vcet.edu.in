import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { placementPartnersApi } from '../../api/placementPartners';
import type { PlacementPartnerPayload } from '../../types';

const PlacementPartnersForm: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const isEdit = !!id;

  const [form, setForm] = useState<PlacementPartnerPayload>({ name: '', website: '', is_active: true, sort_order: 0 });
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(isEdit);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isEdit) return;
    placementPartnersApi.get(Number(id))
      .then((r) => {
        if (!r.data) return;
        const p = r.data;
        setForm({ name: p.name, website: p.website ?? '', is_active: p.is_active, sort_order: p.sort_order });
      })
      .catch((e: Error) => setError(e.message))
      .finally(() => setLoading(false));
  }, [id, isEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : type === 'number' ? Number(value) : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!form.name.trim()) { setError('Name is required.'); return; }
    setSaving(true);
    try {
      const payload: PlacementPartnerPayload = { ...form, ...(logoFile ? { logo: logoFile } : {}) };
      if (isEdit) await placementPartnersApi.update(Number(id), payload);
      else await placementPartnersApi.create(payload);
      navigate('/admin/placement-partners');
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Save failed');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="flex items-center justify-center py-24"><div className="w-6 h-6 border-2 border-white/10 border-t-yellow-400 rounded-full animate-spin" /></div>;

  return (
    <div className="max-w-xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">{isEdit ? 'Edit Partner' : 'New Placement Partner'}</h1>
        <p className="text-white/40 text-sm mt-1">Recruiter logo shown on the Placements page.</p>
      </div>

      {error && <div className="bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-sm text-red-400">{error}</div>}

      <style>{`.ai{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:.75rem;padding:.625rem .875rem;width:100%;color:#fff;font-size:.875rem;outline:none;transition:border-color .15s}.ai:focus{border-color:rgba(250,204,21,.4)}.ai::placeholder{color:rgba(255,255,255,.2)}`}</style>

      <form onSubmit={handleSubmit} className="bg-white/[0.03] border border-white/8 rounded-2xl p-6 space-y-5">
        <div>
          <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Company Name *</label>
          <input name="name" value={form.name} onChange={handleChange} required className="ai" placeholder="Infosys" />
        </div>
        <div>
          <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Website</label>
          <input name="website" value={form.website ?? ''} onChange={handleChange} className="ai" placeholder="https://www.infosys.com" />
        </div>
        <div>
          <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Logo</label>
          <input type="file" accept="image/*" onChange={(e) => setLogoFile(e.target.files?.[0] ?? null)} className="ai cursor-pointer file:mr-3 file:rounded-lg file:border-0 file:bg-yellow-400/10 file:text-yellow-400 file:text-xs file:px-3 file:py-1" />
          {logoFile && <p className="text-xs text-white/40 mt-1">{logoFile.name}</p>}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Sort Order</label>
            <input type="number" name="sort_order" value={form.sort_order ?? 0} onChange={handleChange} min={0} className="ai" />
          </div>
          <label className="flex items-center gap-3 cursor-pointer select-none self-end pb-2">
            <div className={`relative w-10 h-5 rounded-full transition-colors ${form.is_active ? 'bg-yellow-400' : 'bg-white/10'}`}>
              <input type="checkbox" name="is_active" checked={form.is_active ?? true} onChange={handleChange} className="sr-only" />
              <span className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${form.is_active ? 'translate-x-5' : 'translate-x-0'}`} />
            </div>
            <span className="text-sm text-white/60">Active</span>
          </label>
        </div>
        <div className="flex items-center gap-3 pt-2 border-t border-white/8">
          <button type="submit" disabled={saving} className="bg-yellow-400 hover:bg-yellow-300 disabled:opacity-50 text-[#0A1128] font-bold px-6 py-2.5 rounded-xl text-sm transition-colors">
            {saving ? 'Saving…' : isEdit ? 'Save Changes' : 'Add Partner'}
          </button>
          <button type="button" onClick={() => navigate('/admin/placement-partners')} className="text-white/40 hover:text-white text-sm px-6 py-2.5 rounded-xl hover:bg-white/5 transition-all">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default PlacementPartnersForm;
