import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { noticesApi } from '../../api/notices';
import type { NoticePayload } from '../../types';

const empty: NoticePayload = {
  title: '',
  description: '',
  external_link: '',
  is_new: false,
  is_active: true,
  sort_order: 0,
};

const NoticeForm: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const isEdit = Boolean(id);
  const navigate = useNavigate();

  const [form, setForm] = useState<NoticePayload>(empty);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(isEdit);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!id) return;
    noticesApi
      .get(Number(id))
      .then((r) => {
        if (r.data) {
          const d = r.data;
          setForm({
            title: d.title,
            description: d.description ?? '',
            external_link: d.external_link ?? '',
            is_new: d.is_new,
            is_active: d.is_active,
            sort_order: d.sort_order,
          });
        }
      })
      .catch((e: Error) => setError(e.message))
      .finally(() => setFetching(false));
  }, [id]);

  const set = <K extends keyof NoticePayload>(key: K, value: NoticePayload[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const payload: NoticePayload = { ...form, ...(file ? { attachment: file } : {}) };
    try {
      if (isEdit) {
        await noticesApi.update(Number(id), payload);
      } else {
        await noticesApi.create(payload);
      }
      navigate('/admin/notices');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Save failed');
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="w-6 h-6 border-2 border-white/10 border-t-yellow-400 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">{isEdit ? 'Edit Notice' : 'Add Notice'}</h1>
        <p className="text-white/40 text-sm mt-1">{isEdit ? `Editing notice #${id}` : 'Create a new notice'}</p>
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-sm text-red-400">{error}</div>
      )}

      <form onSubmit={handleSubmit} className="bg-white/[0.04] border border-white/8 rounded-2xl p-6 space-y-5">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-white/60 mb-1.5">Title <span className="text-red-400">*</span></label>
          <input
            type="text"
            value={form.title}
            onChange={(e) => set('title', e.target.value)}
            required
            className="admin-input"
            placeholder="Notice title"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-white/60 mb-1.5">Description</label>
          <textarea
            value={form.description}
            onChange={(e) => set('description', e.target.value)}
            rows={3}
            className="admin-input resize-none"
            placeholder="Optional description"
          />
        </div>

        {/* External link */}
        <div>
          <label className="block text-sm font-medium text-white/60 mb-1.5">External Link</label>
          <input
            type="url"
            value={form.external_link}
            onChange={(e) => set('external_link', e.target.value)}
            className="admin-input"
            placeholder="https://..."
          />
        </div>

        {/* PDF attachment */}
        <div>
          <label className="block text-sm font-medium text-white/60 mb-1.5">PDF Attachment</label>
          <input
            type="file"
            accept=".pdf"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            className="block w-full text-sm text-white/50 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-white/10 file:text-white/60 hover:file:bg-white/15 cursor-pointer"
          />
        </div>

        {/* Sort order */}
        <div>
          <label className="block text-sm font-medium text-white/60 mb-1.5">Sort Order</label>
          <input
            type="number"
            value={form.sort_order}
            onChange={(e) => set('sort_order', Number(e.target.value))}
            className="admin-input w-32"
            min={0}
          />
          <p className="text-white/30 text-xs mt-1">Lower numbers appear first.</p>
        </div>

        {/* Toggles */}
        <div className="flex flex-wrap gap-6 pt-2">
          <label className="flex items-center gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              checked={form.is_active}
              onChange={(e) => set('is_active', e.target.checked)}
              className="w-4 h-4 accent-yellow-400"
            />
            <span className="text-sm text-white/70">Active (visible on site)</span>
          </label>
          <label className="flex items-center gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              checked={form.is_new}
              onChange={(e) => set('is_new', e.target.checked)}
              className="w-4 h-4 accent-yellow-400"
            />
            <span className="text-sm text-white/70">Show "NEW" badge</span>
          </label>
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            disabled={loading}
            className="bg-yellow-400 hover:bg-yellow-300 disabled:opacity-50 text-[#0A1128] font-bold px-6 py-2.5 rounded-xl text-sm transition-colors"
          >
            {loading ? 'Saving…' : isEdit ? 'Update Notice' : 'Create Notice'}
          </button>
          <button
            type="button"
            onClick={() => navigate('/admin/notices')}
            className="px-6 py-2.5 rounded-xl text-sm text-white/50 hover:text-white hover:bg-white/5 transition-all"
          >
            Cancel
          </button>
        </div>
      </form>

      <style>{`
        .admin-input {
          width: 100%;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          color: white;
          font-size: 0.875rem;
          outline: none;
          transition: border-color 0.2s;
        }
        .admin-input::placeholder { color: rgba(255,255,255,0.2); }
        .admin-input:focus { border-color: rgba(250,204,21,0.5); }
      `}</style>
    </div>
  );
};

export default NoticeForm;
