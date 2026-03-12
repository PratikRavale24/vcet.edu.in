import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { testimonialsApi } from '../../api/testimonials';
import type { Testimonial } from '../../types';

const stars = (n: number | null) => '★'.repeat(n ?? 0) + '☆'.repeat(5 - (n ?? 0));

const TestimonialsList: React.FC = () => {
  const [items, setItems] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const fetchItems = () => {
    setLoading(true);
    testimonialsApi.list()
      .then((r) => setItems(r.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  useEffect(() => { fetchItems(); }, []);

  const handleDelete = async (item: Testimonial) => {
    if (!window.confirm(`Delete testimonial from "${item.name}"?`)) return;
    setDeletingId(item.id);
    try { await testimonialsApi.delete(item.id); fetchItems(); }
    catch (e) { alert(e instanceof Error ? e.message : 'Delete failed'); setDeletingId(null); }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Testimonials</h1>
          <p className="text-white/40 text-sm mt-1">{items.length} testimonial{items.length !== 1 ? 's' : ''}</p>
        </div>
        <Link to="/admin/testimonials/new" className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-[#0A1128] font-bold px-4 py-2.5 rounded-xl text-sm transition-colors">
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5}><path d="M12 5v14M5 12h14" strokeLinecap="round"/></svg>
          Add Testimonial
        </Link>
      </div>

      <div className="bg-white/[0.03] border border-white/8 rounded-2xl overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center py-16"><div className="w-6 h-6 border-2 border-white/10 border-t-yellow-400 rounded-full animate-spin" /></div>
        ) : items.length === 0 ? (
          <div className="text-center py-16 text-white/30">No testimonials yet.</div>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/8">
                <th className="text-left text-xs text-white/30 uppercase tracking-wider px-5 py-3 font-medium">Person</th>
                <th className="text-left text-xs text-white/30 uppercase tracking-wider px-5 py-3 font-medium">Quote</th>
                <th className="text-center text-xs text-white/30 uppercase tracking-wider px-5 py-3 font-medium">Rating</th>
                <th className="text-center text-xs text-white/30 uppercase tracking-wider px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {items.map((item) => (
                <tr key={item.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      {item.photo ? (
                        <img src={item.photo} alt={item.name} className="w-8 h-8 rounded-full object-cover shrink-0" />
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-xs text-white/30 font-bold">{item.name.charAt(0)}</div>
                      )}
                      <div>
                        <p className="text-white font-medium leading-tight">{item.name}</p>
                        {item.role && <p className="text-white/40 text-xs">{item.role}</p>}
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-white/50 max-w-xs">
                    <p className="truncate italic">"{item.text}"</p>
                  </td>
                  <td className="px-5 py-3.5 text-center text-yellow-400 text-xs tracking-widest">{stars(item.rating)}</td>
                  <td className="px-5 py-3.5 text-center">
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${item.is_active ? 'bg-green-500/15 text-green-400' : 'bg-white/5 text-white/30'}`}>
                      {item.is_active ? 'Active' : 'Hidden'}
                    </span>
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center justify-end gap-3">
                      <Link to={`/admin/testimonials/${item.id}/edit`} className="text-white/40 hover:text-white text-xs transition-colors">Edit</Link>
                      <button onClick={() => handleDelete(item)} disabled={deletingId === item.id} className="text-red-400/60 hover:text-red-400 text-xs transition-colors disabled:opacity-40">
                        {deletingId === item.id ? '…' : 'Delete'}
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

export default TestimonialsList;
