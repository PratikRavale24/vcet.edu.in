import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { placementsApi } from '../../api/placements';
import type { Placement } from '../../types';

const PlacementsList: React.FC = () => {
  const [placements, setPlacements] = useState<Placement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [deleting, setDeleting] = useState<number | null>(null);

  const load = () => {
    setLoading(true);
    placementsApi
      .list()
      .then((r) => setPlacements(r.data ?? []))
      .catch((e: Error) => setError(e.message))
      .finally(() => setLoading(false));
  };

  useEffect(load, []);

  const handleDelete = async (id: number, company: string) => {
    if (!confirm(`Delete placement record for "${company}"?`)) return;
    setDeleting(id);
    try {
      await placementsApi.delete(id);
      setPlacements((prev) => prev.filter((p) => p.id !== id));
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
          <h1 className="text-2xl font-bold text-white">Placements</h1>
          <p className="text-white/40 text-sm mt-1">{placements.length} records</p>
        </div>
        <Link
          to="/admin/placements/new"
          className="bg-yellow-400 hover:bg-yellow-300 text-[#0A1128] font-bold px-4 py-2.5 rounded-xl text-sm transition-colors"
        >
          + Add Record
        </Link>
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-sm text-red-400">{error}</div>
      )}

      <div className="bg-white/[0.04] border border-white/8 rounded-2xl overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center py-16">
            <div className="w-6 h-6 border-2 border-white/10 border-t-yellow-400 rounded-full animate-spin" />
          </div>
        ) : placements.length === 0 ? (
          <div className="text-center py-16 text-white/30 text-sm">No placement records found.</div>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/8 text-white/40 text-xs uppercase tracking-wider">
                <th className="text-left px-6 py-4">Company</th>
                <th className="text-left px-6 py-4 hidden sm:table-cell">Year</th>
                <th className="text-left px-6 py-4 hidden md:table-cell">Package (LPA)</th>
                <th className="text-left px-6 py-4 hidden md:table-cell">Students</th>
                <th className="text-left px-6 py-4 hidden sm:table-cell">Status</th>
                <th className="px-6 py-4" />
              </tr>
            </thead>
            <tbody>
              {placements.map((p) => (
                <tr key={p.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      {p.logo ? (
                        <img src={p.logo} alt={p.company} className="w-8 h-8 rounded-lg object-contain bg-white/5 p-1" />
                      ) : (
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/20 text-xs font-bold">
                          {p.company.charAt(0)}
                        </div>
                      )}
                      <span className="text-white font-medium">{p.company}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-white/40 hidden sm:table-cell">{p.year}</td>
                  <td className="px-6 py-4 hidden md:table-cell">
                    <span className="text-yellow-400 font-semibold">{p.package_lpa} LPA</span>
                  </td>
                  <td className="px-6 py-4 text-white/40 hidden md:table-cell">{p.student_count}</td>
                  <td className="px-6 py-4 hidden sm:table-cell">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${p.is_active ? 'bg-emerald-400/10 text-emerald-400' : 'bg-white/5 text-white/30'}`}>
                      {p.is_active ? 'Active' : 'Hidden'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 justify-end">
                      <Link
                        to={`/admin/placements/${p.id}/edit`}
                        className="text-white/40 hover:text-white text-xs px-3 py-1.5 rounded-lg hover:bg-white/5 transition-all"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(p.id, p.company)}
                        disabled={deleting === p.id}
                        className="text-white/40 hover:text-red-400 text-xs px-3 py-1.5 rounded-lg hover:bg-red-400/5 transition-all disabled:opacity-50"
                      >
                        {deleting === p.id ? '…' : 'Delete'}
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

export default PlacementsList;
