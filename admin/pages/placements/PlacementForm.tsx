import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { placementsApi } from '../../api/placements';
import type { PlacementPayload } from '../../types';

const currentYear = new Date().getFullYear();
const YEARS = Array.from({ length: 10 }, (_, i) => currentYear - i);

const PlacementForm: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const isEdit = !!id;

  const [form, setForm] = useState<PlacementPayload>({
    company: '',
    package_lpa: 0,
    student_count: 0,
    year: currentYear,
    is_active: true,
  });
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(isEdit);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isEdit) return;
    placementsApi
      .get(Number(id))
      .then((r) => {
        if (!r.data) return;
        const p = r.data;
        setForm({
          company: p.company,
          package_lpa: p.package_lpa,
          student_count: p.student_count,
          year: p.year,
          is_active: p.is_active,
        });
      })
      .catch((e: Error) => setError(e.message))
      .finally(() => setLoading(false));
  }, [id, isEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? target.checked : type === 'number' ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!form.company.trim() || !form.package_lpa || !form.student_count || !form.year) {
      setError('Company, Package, Student Count, and Year are required.');
      return;
    }
    setSaving(true);
    try {
      const payload: PlacementPayload = { ...form, ...(logoFile ? { logo: logoFile } : {}) };
      if (isEdit) {
        await placementsApi.update(Number(id), payload);
      } else {
        await placementsApi.create(payload);
      }
      navigate('/admin/placements');
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
    <div className="max-w-xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">{isEdit ? 'Edit Placement' : 'New Placement'}</h1>
        <p className="text-white/40 text-sm mt-1">
          {isEdit ? 'Update placement record.' : 'Add a new campus placement record.'}
        </p>
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-sm text-red-400">{error}</div>
      )}

      <style>{`.admin-input{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:.75rem;padding:.625rem .875rem;width:100%;color:#fff;font-size:.875rem;outline:none;transition:border-color .15s}.admin-input:focus{border-color:rgba(250,204,21,.4)}.admin-input::placeholder{color:rgba(255,255,255,.2)}`}</style>

      <form onSubmit={handleSubmit} className="bg-white/[0.03] border border-white/8 rounded-2xl p-6 space-y-5">
        {/* Company */}
        <div>
          <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Company Name *</label>
          <input name="company" value={form.company} onChange={handleChange} placeholder="e.g. Infosys" required className="admin-input" />
        </div>

        {/* Package + Students */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Package (LPA) *</label>
            <input type="number" name="package_lpa" value={form.package_lpa} onChange={handleChange} min={0} step={0.1} required className="admin-input" />
          </div>
          <div>
            <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Students Placed *</label>
            <input type="number" name="student_count" value={form.student_count} onChange={handleChange} min={0} required className="admin-input" />
          </div>
        </div>

        {/* Year */}
        <div>
          <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Year *</label>
          <select name="year" value={form.year} onChange={handleChange} className="admin-input">
            {YEARS.map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>

        {/* Logo */}
        <div>
          <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Company Logo</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setLogoFile(e.target.files?.[0] ?? null)}
            className="admin-input cursor-pointer file:mr-3 file:rounded-lg file:border-0 file:bg-yellow-400/10 file:text-yellow-400 file:text-xs file:px-3 file:py-1"
          />
          {logoFile && <p className="text-xs text-white/40 mt-1">{logoFile.name}</p>}
        </div>

        {/* Active toggle */}
        <label className="flex items-center gap-3 cursor-pointer select-none">
          <div className={`relative w-10 h-5 rounded-full transition-colors ${form.is_active ? 'bg-yellow-400' : 'bg-white/10'}`}>
            <input type="checkbox" name="is_active" checked={form.is_active ?? true} onChange={handleChange} className="sr-only" />
            <span className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${form.is_active ? 'translate-x-5' : 'translate-x-0'}`} />
          </div>
          <span className="text-sm text-white/60">Active (visible on site)</span>
        </label>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-2 border-t border-white/8">
          <button
            type="submit"
            disabled={saving}
            className="bg-yellow-400 hover:bg-yellow-300 disabled:opacity-50 text-[#0A1128] font-bold px-6 py-2.5 rounded-xl text-sm transition-colors"
          >
            {saving ? 'Saving…' : isEdit ? 'Save Changes' : 'Create Record'}
          </button>
          <button
            type="button"
            onClick={() => navigate('/admin/placements')}
            className="text-white/40 hover:text-white text-sm px-6 py-2.5 rounded-xl hover:bg-white/5 transition-all"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default PlacementForm;
