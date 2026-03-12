import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { newsTickerApi } from '../../api/newsTicker';
import type { NewsTicker } from '../../types';

const NewsTickerList: React.FC = () => {
  const [items, setItems] = useState<NewsTicker[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const fetchItems = () => {
    setLoading(true);
    newsTickerApi.list()
      .then((r) => setItems(r.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  useEffect(() => { fetchItems(); }, []);

  const handleDelete = async (item: NewsTicker) => {
    if (!window.confirm(`Delete ticker: "${item.text.substring(0, 60)}…"?`)) return;
    setDeletingId(item.id);
    try { await newsTickerApi.delete(item.id); fetchItems(); }
    catch (e) { alert(e instanceof Error ? e.message : 'Delete failed'); setDeletingId(null); }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">News Ticker</h1>
          <p className="text-white/40 text-sm mt-1">{items.length} ticker item{items.length !== 1 ? 's' : ''}</p>
        </div>
        <Link to="/admin/news-ticker/new" className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-[#0A1128] font-bold px-4 py-2.5 rounded-xl text-sm transition-colors">
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5}><path d="M12 5v14M5 12h14" strokeLinecap="round"/></svg>
          Add Item
        </Link>
      </div>

      <div className="bg-white/[0.03] border border-white/8 rounded-2xl overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center py-16"><div className="w-6 h-6 border-2 border-white/10 border-t-yellow-400 rounded-full animate-spin" /></div>
        ) : items.length === 0 ? (
          <div className="text-center py-16 text-white/30">No ticker items yet.</div>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/8">
                <th className="text-left text-xs text-white/30 uppercase tracking-wider px-5 py-3 font-medium">Text</th>
                <th className="text-left text-xs text-white/30 uppercase tracking-wider px-5 py-3 font-medium">Link</th>
                <th className="text-center text-xs text-white/30 uppercase tracking-wider px-5 py-3 font-medium">Order</th>
                <th className="text-center text-xs text-white/30 uppercase tracking-wider px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {items.map((item) => (
                <tr key={item.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-5 py-3.5 text-white max-w-[20rem]">
                    <p className="truncate">{item.text}</p>
                  </td>
                  <td className="px-5 py-3.5 text-white/40 text-xs">
                    {item.link ? <a href={item.link} target="_blank" rel="noreferrer" className="text-yellow-400/80 hover:text-yellow-400 underline underline-offset-2">{item.link}</a> : <span className="italic">—</span>}
                  </td>
                  <td className="px-5 py-3.5 text-center text-white/60">{item.sort_order}</td>
                  <td className="px-5 py-3.5 text-center">
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${item.is_active ? 'bg-green-500/15 text-green-400' : 'bg-white/5 text-white/30'}`}>
                      {item.is_active ? 'Active' : 'Hidden'}
                    </span>
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center justify-end gap-3">
                      <Link to={`/admin/news-ticker/${item.id}/edit`} className="text-white/40 hover:text-white text-xs transition-colors">Edit</Link>
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

export default NewsTickerList;
