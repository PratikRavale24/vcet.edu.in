import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { noticesApi } from '../../api/notices';
import type { NoticePayload } from '../../types';
import { Link } from 'react-router-dom';

const NOTICE_TYPES: Array<{ label: string; value: NonNullable<NoticePayload['type']> }> = [
  { label: 'General', value: 'general' },
  { label: 'Info', value: 'info' },
  { label: 'Warning', value: 'warning' },
  { label: 'Urgent', value: 'urgent' },
];

interface NoticeFormState {
  title: string;
  type: NonNullable<NoticePayload['type']>;
  body: string;
  link_url: string;
  link_label: string;
  deactivates_at: string;
  is_active: boolean;
}

interface ExistingPdfState {
  name: string;
  size: number | null;
  previewUrl: string | null;
  publicUrl: string | null;
}

const empty: NoticeFormState = {
  title: '',
  type: 'general',
  body: '',
  link_url: '',
  link_label: '',
  deactivates_at: '',
  is_active: true,
};

function toLocalDateTimeInput(value: string | null | undefined): string {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';

  const timezoneOffsetMs = date.getTimezoneOffset() * 60_000;
  return new Date(date.getTime() - timezoneOffsetMs).toISOString().slice(0, 16);
}

const NoticeForm: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const isEdit = Boolean(id);
  const navigate = useNavigate();

  const [form, setForm] = useState<NoticeFormState>(empty);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(isEdit);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [existingPdf, setExistingPdf] = useState<ExistingPdfState | null>(null);
  const [selectedPdf, setSelectedPdf] = useState<File | null>(null);
  const [removePdf, setRemovePdf] = useState(false);
  const [localPdfPreviewUrl, setLocalPdfPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!id) {
      setForm(empty);
      setExistingPdf(null);
      setSelectedPdf(null);
      setRemovePdf(false);
      setFetching(false);
      setError('');
      setSuccess('');
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }

    setFetching(true);
    setError('');
    setSuccess('');
    noticesApi
      .get(Number(id))
      .then((r) => {
        if (r.data) {
          const d = r.data;
          setForm({
            title: d.title,
            type: d.type ?? 'general',
            body: d.body ?? '',
            link_url: d.link_url ?? '',
            link_label: d.link_label ?? '',
            deactivates_at: toLocalDateTimeInput(d.deactivates_at),
            is_active: d.is_active,
          });
          setExistingPdf(
            d.has_pdf
              ? {
                  name: d.pdf_name ?? 'notice.pdf',
                  size: d.pdf_size ?? null,
                  previewUrl: d.admin_pdf_url ?? d.pdf_url,
                  publicUrl: d.pdf_url,
                }
              : null,
          );
          setRemovePdf(false);
          setSelectedPdf(null);
          if (fileInputRef.current) fileInputRef.current.value = '';
        }
      })
      .catch((e: Error) => setError(e.message))
      .finally(() => setFetching(false));
  }, [id]);

  useEffect(() => {
    if (!selectedPdf) {
      setLocalPdfPreviewUrl(null);
      return;
    }

    const previewUrl = URL.createObjectURL(selectedPdf);
    setLocalPdfPreviewUrl(previewUrl);

    return () => URL.revokeObjectURL(previewUrl);
  }, [selectedPdf]);

  const set = <K extends keyof NoticeFormState>(key: K, value: NoticeFormState[K]) => {
    setSuccess('');
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const previewUrl = localPdfPreviewUrl ?? (!removePdf ? existingPdf?.previewUrl ?? null : null);
  const publicPdfUrl = !removePdf ? existingPdf?.publicUrl ?? null : null;
  const pdfName = selectedPdf?.name ?? (!removePdf ? existingPdf?.name ?? null : null);
  const pdfSize = selectedPdf?.size ?? (!removePdf ? existingPdf?.size ?? null : null);

  const clearNoticeForm = () => {
    setForm(empty);
    setExistingPdf(null);
    setSelectedPdf(null);
    setRemovePdf(false);
    setError('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handlePdfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;

    if (file && file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
      setError('Only PDF files can be uploaded for notices.');
      e.target.value = '';
      return;
    }

    setError('');
    setSuccess('');
    setSelectedPdf(file);
    setRemovePdf(false);
  };

  const handlePdfAction = () => {
    if (selectedPdf) {
      setSuccess('');
      setSelectedPdf(null);
      setRemovePdf(false);
      return;
    }

    if (existingPdf && !removePdf) {
      setSuccess('');
      setRemovePdf(true);
      return;
    }

    if (existingPdf && removePdf) {
      setSuccess('');
      setRemovePdf(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    const payload: NoticePayload = {
      title: form.title.trim(),
      body: form.body.trim(),
      type: form.type,
      link_url: form.link_url.trim() || null,
      link_label: form.link_label.trim() || null,
      deactivates_at: form.deactivates_at ? new Date(form.deactivates_at).toISOString() : null,
      pdf: selectedPdf,
      remove_pdf: removePdf && !selectedPdf,
      is_active: form.is_active,
    };

    try {
      if (isEdit) {
        await noticesApi.update(Number(id), payload);
        setSuccess('Notice updated successfully.');
      } else {
        await noticesApi.create(payload);
        clearNoticeForm();
        setSuccess('Notice published successfully.');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Save failed');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="w-8 h-8 border-3 border-slate-100 border-t-[#1e293b] rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8 pb-12">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 text-[11px] font-bold text-slate-400 mb-1 uppercase tracking-widest">
            <Link to="/admin" className="hover:text-slate-600 transition-colors">Dashboard</Link>
            <span className="text-slate-300 font-normal">/</span>
            <Link to="/admin/notices" className="hover:text-slate-600 transition-colors">Notices</Link>
            <span className="text-slate-300 font-normal">/</span>
            <span className="text-slate-600">{isEdit ? 'Edit' : 'New'}</span>
          </div>
          <h1 className="text-3xl font-extrabold text-[#111827]">{isEdit ? 'Edit Notice' : 'Add New Notice'}</h1>
        </div>
        <button
          type="button"
          onClick={() => navigate('/admin/notices')}
          className="text-slate-500 hover:text-slate-800 text-sm font-bold flex items-center gap-2 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          Back to List
        </button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-100 rounded-2xl px-5 py-4 text-sm text-red-600 font-medium flex items-center gap-3">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          {error}
        </div>
      )}

      {success && (
        <div className="bg-emerald-50 border border-emerald-100 rounded-2xl px-5 py-4 text-sm text-emerald-700 font-medium flex items-center gap-3">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white border border-slate-200/60 shadow-xl shadow-slate-200/40 rounded-[2rem] p-8 lg:p-10 space-y-7">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Title */}
          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2.5">Notice Title *</label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => set('title', e.target.value)}
              required
              className="admin-input"
              placeholder="e.g. End Semester Exam Timetable"
            />
          </div>

          {/* Type */}
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2.5">Type</label>
            <select
              value={form.type}
              onChange={(e) => set('type', e.target.value as NonNullable<NoticePayload['type']>)}
              className="admin-input appearance-none"
            >
              {NOTICE_TYPES.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          {/* Scheduled Deactivation */}
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2.5">Deactivates At</label>
            <input
              type="datetime-local"
              value={form.deactivates_at}
              onChange={(e) => set('deactivates_at', e.target.value)}
              className="admin-input"
            />
          </div>
        </div>

        {/* Link fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2.5">External Link</label>
            <input
              type="url"
              value={form.link_url}
              onChange={(e) => set('link_url', e.target.value)}
              className="admin-input"
              placeholder="https://vcet.edu.in/..."
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2.5">Link Label</label>
            <input
              type="text"
              value={form.link_label}
              onChange={(e) => set('link_label', e.target.value)}
              className="admin-input"
              placeholder="Read More"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4 flex-col sm:flex-row sm:items-center">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2.5">Notice PDF</label>
              <p className="text-sm text-slate-500">
                Upload a PDF to store it in the database and open it directly from the website.
              </p>
            </div>
            <label className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-sm font-bold text-slate-700 transition-colors cursor-pointer">
              <input ref={fileInputRef} type="file" accept="application/pdf,.pdf" className="sr-only" onChange={handlePdfChange} />
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" /></svg>
              {selectedPdf || existingPdf ? 'Replace PDF' : 'Upload PDF'}
            </label>
          </div>

          {(pdfName || removePdf) && (
            <div className={`rounded-2xl border px-5 py-4 ${removePdf ? 'border-red-200 bg-red-50' : 'border-slate-200 bg-slate-50'}`}>
              <div className="flex items-start justify-between gap-4 flex-col sm:flex-row">
                <div>
                  <p className="text-sm font-bold text-slate-800">
                    {removePdf ? 'Stored PDF will be removed when you save.' : pdfName}
                  </p>
                  {!removePdf && (
                    <p className="text-xs text-slate-500 mt-1">
                      {pdfSize ? `${(pdfSize / 1024 / 1024).toFixed(2)} MB` : 'PDF attached'}
                      {selectedPdf ? ' • New upload ready to save' : ' • Already stored in database'}
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={handlePdfAction}
                  className={`text-sm font-bold transition-colors ${removePdf ? 'text-emerald-700 hover:text-emerald-900' : 'text-red-600 hover:text-red-800'}`}
                >
                  {selectedPdf ? 'Discard selected PDF' : removePdf ? 'Keep stored PDF' : 'Remove stored PDF'}
                </button>
              </div>
            </div>
          )}

          <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50/70 overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-200/80 flex items-center justify-between gap-4 flex-col sm:flex-row">
              <div>
                <p className="text-sm font-bold text-slate-800">PDF Preview</p>
                <p className="text-xs text-slate-500 mt-1">
                  Browser preview is shown here before you publish the notice.
                </p>
              </div>
              {(previewUrl || publicPdfUrl) && (
                <a
                  href={previewUrl ?? publicPdfUrl ?? '#'}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-bold text-slate-700 hover:text-black transition-colors"
                >
                  Open in New Tab
                </a>
              )}
            </div>

            {previewUrl ? (
              <iframe
                src={previewUrl}
                title="Notice PDF preview"
                className="w-full h-[28rem] bg-white"
              />
            ) : (
              <div className="px-5 py-16 text-center text-sm text-slate-500 bg-white">
                Upload a PDF to preview it here.
              </div>
            )}
          </div>
        </div>

        {/* Action Toggles */}
        <div className="pt-4 flex flex-col sm:flex-row gap-6">
          <label className="flex items-center gap-3.5 cursor-pointer group select-none">
            <div className={`relative flex items-center w-12 h-6.5 rounded-full transition-all duration-300 ${form.is_active ? 'bg-[#1e293b]' : 'bg-slate-200'}`}>
              <input type="checkbox" checked={form.is_active} onChange={(e) => set('is_active', e.target.checked)} className="sr-only" />
              <span className={`w-4.5 h-4.5 rounded-full bg-white shadow-md transform transition-transform duration-300 ${form.is_active ? 'translate-x-6.5' : 'translate-x-1'}`} />
            </div>
            <div>
              <span className="block text-sm font-bold text-slate-700 group-hover:text-black transition-colors">Visible to Public</span>
              <span className="block text-[10px] text-slate-400 font-medium uppercase tracking-tighter">Live on Website</span>
            </div>
          </label>
        </div>

        {/* Submit Actions */}
        <div className="flex items-center gap-4 pt-8 border-t border-slate-100">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 sm:flex-none min-w-[160px] bg-[#1e293b] hover:bg-[#334155] disabled:opacity-50 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-slate-200 flex items-center justify-center gap-2 group"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <span>{isEdit ? 'Save Changes' : 'Publish Notice'}</span>
                <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
              </>
            )}
          </button>
          <button
            type="button"
            onClick={() => navigate('/admin/notices')}
            className="flex-1 sm:flex-none min-w-[120px] px-6 py-4 rounded-2xl text-sm font-bold text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-all border border-transparent hover:border-slate-200"
          >
            Cancel
          </button>
        </div>
      </form>

      <style>{`
        .admin-input {
          width: 100%;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 1.25rem;
          padding: 0.875rem 1.25rem;
          color: #1e293b;
          font-size: 0.875rem;
          font-weight: 500;
          outline: none;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .admin-input::placeholder { color: #94a3b8; }
        .admin-input:focus { 
          border-color: #94a3b8; 
          background: #ffffff;
          box-shadow: 0 0 0 4px rgba(241,245,249, 0.8);
        }
        select.admin-input {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          background-size: 1.25rem;
          padding-right: 3rem;
        }
      `}</style>
    </div>
  );
};

export default NoticeForm;
