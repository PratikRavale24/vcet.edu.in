import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { heroSlidesApi } from '../../api/heroSlides';
import type { HeroSlidePayload } from '../../types';

const HeroSlideForm: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const isEdit = !!id;

  const [form, setForm] = useState<HeroSlidePayload>({ title: '', subtitle: '', button_text: '', button_link: '', sort_order: 0, is_active: true });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(isEdit);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isEdit) return;
    heroSlidesApi.get(Number(id))
      .then((r) => {
        if (!r.data) return;
        const s = r.data;
        setForm({ title: s.title, subtitle: s.subtitle ?? '', button_text: s.button_text ?? '', button_link: s.button_link ?? '', sort_order: s.sort_order, is_active: s.is_active });
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
    if (!form.title.trim()) { setError('Title is required.'); return; }
    setSaving(true);
    try {
      const payload: HeroSlidePayload = { ...form, ...(imageFile ? { image: imageFile } : {}) };
      if (isEdit) await heroSlidesApi.update(Number(id), payload);
      else await heroSlidesApi.create(payload);
      navigate('/admin/hero-slides');
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
        <h1 className="text-2xl font-bold text-white">{isEdit ? 'Edit Slide' : 'New Hero Slide'}</h1>
        <p className="text-white/40 text-sm mt-1">Homepage hero banner slide.</p>
      </div>

      {error && <div className="bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-sm text-red-400">{error}</div>}

      <style>{`.ai{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:.75rem;padding:.625rem .875rem;width:100%;color:#fff;font-size:.875rem;outline:none;transition:border-color .15s}.ai:focus{border-color:rgba(250,204,21,.4)}.ai::placeholder{color:rgba(255,255,255,.2)}`}</style>

      <form onSubmit={handleSubmit} className="bg-white/[0.03] border border-white/8 rounded-2xl p-6 space-y-5">
        <div>
          <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Title *</label>
          <input name="title" value={form.title} onChange={handleChange} required className="ai" placeholder="Slide title" />
        </div>
        <div>
          <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Subtitle</label>
          <input name="subtitle" value={form.subtitle ?? ''} onChange={handleChange} className="ai" placeholder="Optional subtitle text" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Button Text</label>
            <input name="button_text" value={form.button_text ?? ''} onChange={handleChange} className="ai" placeholder="Learn More" />
          </div>
          <div>
            <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Button Link</label>
            <input name="button_link" value={form.button_link ?? ''} onChange={handleChange} className="ai" placeholder="/about-us" />
          </div>
        </div>
        <div>
          <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Background Image</label>
          <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files?.[0] ?? null)} className="ai cursor-pointer file:mr-3 file:rounded-lg file:border-0 file:bg-yellow-400/10 file:text-yellow-400 file:text-xs file:px-3 file:py-1" />
          {imageFile && <p className="text-xs text-white/40 mt-1">{imageFile.name}</p>}
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
            {saving ? 'Saving…' : isEdit ? 'Save Changes' : 'Create Slide'}
          </button>
          <button type="button" onClick={() => navigate('/admin/hero-slides')} className="text-white/40 hover:text-white text-sm px-6 py-2.5 rounded-xl hover:bg-white/5 transition-all">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default HeroSlideForm;
