import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { heroSlidesApi } from '../../api/heroSlides';
import type { HeroSlide } from '../../types';

const HeroSlidesList: React.FC = () => {
  const [slides, setSlides] = useState<HeroSlide[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [deleting, setDeleting] = useState<number | null>(null);

  useEffect(() => {
    heroSlidesApi.list()
      .then((r) => setSlides(r.data))
      .catch((e: Error) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (id: number, title: string) => {
    if (!confirm(`Delete slide "${title}"?`)) return;
    setDeleting(id);
    try {
      await heroSlidesApi.delete(id);
      setSlides((prev) => prev.filter((s) => s.id !== id));
    } catch (e) {
      alert(e instanceof Error ? e.message : 'Delete failed');
    } finally {
      setDeleting(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Hero Slides</h1>
          <p className="text-white/40 text-sm mt-1">{slides.length} slides</p>
        </div>
        <Link to="/admin/hero-slides/new" className="bg-yellow-400 hover:bg-yellow-300 text-[#0A1128] font-bold px-4 py-2.5 rounded-xl text-sm transition-colors">
          + Add Slide
        </Link>
      </div>

      {error && <div className="bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-sm text-red-400">{error}</div>}

      <div className="bg-white/[0.04] border border-white/8 rounded-2xl overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center py-16">
            <div className="w-6 h-6 border-2 border-white/10 border-t-yellow-400 rounded-full animate-spin" />
          </div>
        ) : slides.length === 0 ? (
          <div className="text-center py-16 text-white/30 text-sm">No slides found.</div>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/8 text-white/40 text-xs uppercase tracking-wider">
                <th className="text-left px-6 py-4">Slide</th>
                <th className="text-left px-6 py-4 hidden sm:table-cell">Order</th>
                <th className="text-left px-6 py-4 hidden sm:table-cell">Status</th>
                <th className="px-6 py-4" />
              </tr>
            </thead>
            <tbody>
              {slides.map((s) => (
                <tr key={s.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      {s.image && (
                        <img src={s.image} alt={s.title} className="w-16 h-9 object-cover rounded-lg bg-white/5" />
                      )}
                      <div>
                        <p className="text-white font-medium">{s.title}</p>
                        {s.subtitle && <p className="text-white/30 text-xs truncate max-w-[200px]">{s.subtitle}</p>}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-white/40 hidden sm:table-cell">{s.sort_order}</td>
                  <td className="px-6 py-4 hidden sm:table-cell">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${s.is_active ? 'bg-emerald-400/10 text-emerald-400' : 'bg-white/5 text-white/30'}`}>
                      {s.is_active ? 'Active' : 'Hidden'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 justify-end">
                      <Link to={`/admin/hero-slides/${s.id}/edit`} className="text-white/40 hover:text-white text-xs px-3 py-1.5 rounded-lg hover:bg-white/5 transition-all">Edit</Link>
                      <button onClick={() => handleDelete(s.id, s.title)} disabled={deleting === s.id} className="text-white/40 hover:text-red-400 text-xs px-3 py-1.5 rounded-lg hover:bg-red-400/5 transition-all disabled:opacity-50">
                        {deleting === s.id ? '…' : 'Delete'}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default HeroSlidesList;
