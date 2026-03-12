import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { eventsApi } from '../../api/events';
import type { EventPayload } from '../../types';

const CATEGORIES = ['Academic', 'Cultural', 'Sports', 'Technical', 'Workshop', 'Other'];

const EventForm: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const isEdit = !!id;

  const [form, setForm] = useState<EventPayload>({
    title: '',
    description: '',
    date: '',
    time: '',
    venue: '',
    category: '',
    is_featured: false,
    is_active: true,
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(isEdit);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isEdit) return;
    eventsApi
      .get(Number(id))
      .then((r) => {
        if (!r.data) return;
        const ev = r.data;
        setForm({
          title: ev.title,
          description: ev.description ?? '',
          date: ev.date,
          time: ev.time ?? '',
          venue: ev.venue ?? '',
          category: ev.category ?? '',
          is_featured: ev.is_featured,
          is_active: ev.is_active,
        });
      })
      .catch((e: Error) => setError(e.message))
      .finally(() => setLoading(false));
  }, [id, isEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? target.checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!form.title.trim() || !form.date) {
      setError('Title and Date are required.');
      return;
    }
    setSaving(true);
    try {
      const payload: EventPayload = { ...form, ...(imageFile ? { image: imageFile } : {}) };
      if (isEdit) {
        await eventsApi.update(Number(id), payload);
      } else {
        await eventsApi.create(payload);
      }
      navigate('/admin/events');
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Save failed');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="w-6 h-6 border-2 border-white/10 border-t-yellow-400 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">{isEdit ? 'Edit Event' : 'New Event'}</h1>
        <p className="text-white/40 text-sm mt-1">{isEdit ? 'Update the event details below.' : 'Fill in the details to create a new event.'}</p>
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-sm text-red-400">{error}</div>
      )}

      <style>{`.admin-input{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:.75rem;padding:.625rem .875rem;width:100%;color:#fff;font-size:.875rem;outline:none;transition:border-color .15s}.admin-input:focus{border-color:rgba(250,204,21,.4)}.admin-input::placeholder{color:rgba(255,255,255,.2)}`}</style>

      <form onSubmit={handleSubmit} className="bg-white/[0.03] border border-white/8 rounded-2xl p-6 space-y-5">
        {/* Title */}
        <div>
          <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Title *</label>
          <input name="title" value={form.title} onChange={handleChange} placeholder="Event title" required className="admin-input" />
        </div>

        {/* Description */}
        <div>
          <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Description</label>
          <textarea name="description" value={form.description ?? ''} onChange={handleChange} rows={4} placeholder="Event details…" className="admin-input resize-none" />
        </div>

        {/* Date + Time */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Date *</label>
            <input type="date" name="date" value={form.date} onChange={handleChange} required className="admin-input" />
          </div>
          <div>
            <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Time</label>
            <input type="time" name="time" value={form.time ?? ''} onChange={handleChange} className="admin-input" />
          </div>
        </div>

        {/* Venue + Category */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Venue</label>
            <input name="venue" value={form.venue ?? ''} onChange={handleChange} placeholder="Main Auditorium" className="admin-input" />
          </div>
          <div>
            <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Category</label>
            <select name="category" value={form.category ?? ''} onChange={handleChange} className="admin-input">
              <option value="">— Select —</option>
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Image */}
        <div>
          <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Event Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files?.[0] ?? null)}
            className="admin-input cursor-pointer file:mr-3 file:rounded-lg file:border-0 file:bg-yellow-400/10 file:text-yellow-400 file:text-xs file:px-3 file:py-1"
          />
          {imageFile && <p className="text-xs text-white/40 mt-1">{imageFile.name}</p>}
        </div>

        {/* Toggles */}
        <div className="grid grid-cols-2 gap-4">
          {(['is_featured', 'is_active'] as const).map((field) => (
            <label key={field} className="flex items-center gap-3 cursor-pointer select-none">
              <div className={`relative w-10 h-5 rounded-full transition-colors ${form[field] ? 'bg-yellow-400' : 'bg-white/10'}`}>
                <input type="checkbox" name={field} checked={form[field] ?? false} onChange={handleChange} className="sr-only" />
                <span className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${form[field] ? 'translate-x-5' : 'translate-x-0'}`} />
              </div>
              <span className="text-sm text-white/60 capitalize">{field.replace('_', ' ')}</span>
            </label>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-2 border-t border-white/8">
          <button
            type="submit"
            disabled={saving}
            className="bg-yellow-400 hover:bg-yellow-300 disabled:opacity-50 text-[#0A1128] font-bold px-6 py-2.5 rounded-xl text-sm transition-colors"
          >
            {saving ? 'Saving…' : isEdit ? 'Save Changes' : 'Create Event'}
          </button>
          <button
            type="button"
            onClick={() => navigate('/admin/events')}
            className="text-white/40 hover:text-white text-sm px-6 py-2.5 rounded-xl hover:bg-white/5 transition-all"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
