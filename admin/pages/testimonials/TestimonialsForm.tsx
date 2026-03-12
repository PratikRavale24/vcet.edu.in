import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { testimonialsApi } from '../../api/testimonials';
import type { TestimonialPayload } from '../../types';

const TestimonialsForm: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const isEdit = !!id;

  const [form, setForm] = useState<TestimonialPayload>({ name: '', role: '', text: '', rating: 5, is_active: true });
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(isEdit);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isEdit) return;
    testimonialsApi.get(Number(id))
      .then((r) => {
        if (!r.data) return;
        const t = r.data;
        setForm({ name: t.name, role: t.role ?? '', text: t.text, rating: t.rating ?? 5, is_active: t.is_active });
      })
      .catch((e: Error) => setError(e.message))
      .finally(() => setLoading(false));
  }, [id, isEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : type === 'number' ? Number(value) : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!form.name.trim()) { setError('Name is required.'); return; }
    if (!form.text.trim()) { setError('Quote text is required.'); return; }
    setSaving(true);
    try {
      const payload: TestimonialPayload = { ...form, ...(photoFile ? { photo: photoFile } : {}) };
      if (isEdit) await testimonialsApi.update(Number(id), payload);
      else await testimonialsApi.create(payload);
      navigate('/admin/testimonials');
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
        <h1 className="text-2xl font-bold text-white">{isEdit ? 'Edit Testimonial' : 'New Testimonial'}</h1>
        <p className="text-white/40 text-sm mt-1">Student or alumni quote shown on the homepage.</p>
      </div>

      {error && <div className="bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-sm text-red-400">{error}</div>}

      <style>{`.ai{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:.75rem;padding:.625rem .875rem;width:100%;color:#fff;font-size:.875rem;outline:none;transition:border-color .15s}.ai:focus{border-color:rgba(250,204,21,.4)}.ai::placeholder{color:rgba(255,255,255,.2)}`}</style>

      <form onSubmit={handleSubmit} className="bg-white/[0.03] border border-white/8 rounded-2xl p-6 space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Name *</label>
            <input name="name" value={form.name} onChange={handleChange} required className="ai" placeholder="Rahul Sharma" />
          </div>
          <div>
            <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Role / Batch</label>
            <input name="role" value={form.role ?? ''} onChange={handleChange} className="ai" placeholder="B.E. Computer, 2023" />
          </div>
        </div>
        <div>
          <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Quote *</label>
          <textarea name="text" value={form.text} onChange={handleChange} required rows={4} className="ai resize-none" placeholder="Their testimonial quote…" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Rating</label>
            <select name="rating" value={form.rating ?? 5} onChange={handleChange} className="ai">
              {[5, 4, 3, 2, 1].map((r) => <option key={r} value={r}>{r} star{r !== 1 ? 's' : ''}</option>)}
            </select>
          </div>
          <label className="flex items-center gap-3 cursor-pointer select-none self-end pb-2">
            <div className={`relative w-10 h-5 rounded-full transition-colors ${form.is_active ? 'bg-yellow-400' : 'bg-white/10'}`}>
              <input type="checkbox" name="is_active" checked={form.is_active ?? true} onChange={handleChange} className="sr-only" />
              <span className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${form.is_active ? 'translate-x-5' : 'translate-x-0'}`} />
            </div>
            <span className="text-sm text-white/60">Active</span>
          </label>
        </div>
        <div>
          <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Photo (optional)</label>
          <input type="file" accept="image/*" onChange={(e) => setPhotoFile(e.target.files?.[0] ?? null)} className="ai cursor-pointer file:mr-3 file:rounded-lg file:border-0 file:bg-yellow-400/10 file:text-yellow-400 file:text-xs file:px-3 file:py-1" />
          {photoFile && <p className="text-xs text-white/40 mt-1">{photoFile.name}</p>}
        </div>
        <div className="flex items-center gap-3 pt-2 border-t border-white/8">
          <button type="submit" disabled={saving} className="bg-yellow-400 hover:bg-yellow-300 disabled:opacity-50 text-[#0A1128] font-bold px-6 py-2.5 rounded-xl text-sm transition-colors">
            {saving ? 'Saving…' : isEdit ? 'Save Changes' : 'Create Testimonial'}
          </button>
          <button type="button" onClick={() => navigate('/admin/testimonials')} className="text-white/40 hover:text-white text-sm px-6 py-2.5 rounded-xl hover:bg-white/5 transition-all">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default TestimonialsForm;
