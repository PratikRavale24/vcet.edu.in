import React, { useEffect, useState } from 'react';
import { enquiriesApi } from '../../api/enquiries';
import type { Enquiry } from '../../types';

const EnquiriesList: React.FC = () => {
  const [items, setItems] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setLoading(true);
    enquiriesApi.list(page)
      .then((r) => {
        setItems(r.data);
        setLastPage(r.meta?.last_page ?? 1);
        setTotal(r.meta?.total ?? r.data.length);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [page]);

  const fmt = (iso: string | null) => {
    if (!iso) return '—';
    return new Date(iso).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Enquiries</h1>
        <p className="text-white/40 text-sm mt-1">{total} enquir{total !== 1 ? 'ies' : 'y'} received — read only.</p>
      </div>

      <div className="bg-white/[0.03] border border-white/8 rounded-2xl overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center py-16"><div className="w-6 h-6 border-2 border-white/10 border-t-yellow-400 rounded-full animate-spin" /></div>
        ) : items.length === 0 ? (
          <div className="text-center py-16 text-white/30">No enquiries yet.</div>
        ) : (
          <>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/8">
                  <th className="text-left text-xs text-white/30 uppercase tracking-wider px-5 py-3 font-medium">Name</th>
                  <th className="text-left text-xs text-white/30 uppercase tracking-wider px-5 py-3 font-medium">Email</th>
                  <th className="text-left text-xs text-white/30 uppercase tracking-wider px-5 py-3 font-medium">Phone</th>
                  <th className="text-left text-xs text-white/30 uppercase tracking-wider px-5 py-3 font-medium">Course</th>
                  <th className="text-left text-xs text-white/30 uppercase tracking-wider px-5 py-3 font-medium">Message</th>
                  <th className="text-right text-xs text-white/30 uppercase tracking-wider px-5 py-3 font-medium">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {items.map((item) => (
                  <tr key={item.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-5 py-3.5 text-white font-medium whitespace-nowrap">{item.name}</td>
                    <td className="px-5 py-3.5 text-white/60 text-xs">{item.email}</td>
                    <td className="px-5 py-3.5 text-white/60 text-xs whitespace-nowrap">{item.phone ?? '—'}</td>
                    <td className="px-5 py-3.5 text-white/60 text-xs">
                      {item.course ? (
                        <span className="inline-block bg-yellow-400/10 text-yellow-400 px-2 py-0.5 rounded text-xs">{item.course}</span>
                      ) : '—'}
                    </td>
                    <td className="px-5 py-3.5 text-white/40 text-xs max-w-xs">
                      {item.message ? <p className="truncate" title={item.message}>{item.message}</p> : <span className="italic">—</span>}
                    </td>
                    <td className="px-5 py-3.5 text-right text-white/40 text-xs whitespace-nowrap">{fmt(item.created_at)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {lastPage > 1 && (
              <div className="flex items-center justify-between px-5 py-3 border-t border-white/8">
                <span className="text-xs text-white/30">Page {page} of {lastPage}</span>
                <div className="flex gap-2">
                  <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1} className="px-3 py-1.5 rounded-lg text-xs bg-white/5 hover:bg-white/10 text-white/60 disabled:opacity-30 transition-colors">Previous</button>
                  <button onClick={() => setPage((p) => Math.min(lastPage, p + 1))} disabled={page === lastPage} className="px-3 py-1.5 rounded-lg text-xs bg-white/5 hover:bg-white/10 text-white/60 disabled:opacity-30 transition-colors">Next</button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default EnquiriesList;
