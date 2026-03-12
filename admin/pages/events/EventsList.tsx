import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { eventsApi } from '../../api/events';
import type { Event } from '../../types';

const EventsList: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [deleting, setDeleting] = useState<number | null>(null);

  const load = () => {
    setLoading(true);
    eventsApi
      .list()
      .then((r) => setEvents(r.data ?? []))
      .catch((e: Error) => setError(e.message))
      .finally(() => setLoading(false));
  };

  useEffect(load, []);

  const handleDelete = async (id: number, title: string) => {
    if (!confirm(`Delete event "${title}"?`)) return;
    setDeleting(id);
    try {
      await eventsApi.delete(id);
      setEvents((prev) => prev.filter((ev) => ev.id !== id));
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
          <h1 className="text-2xl font-bold text-white">Events</h1>
          <p className="text-white/40 text-sm mt-1">{events.length} total</p>
        </div>
        <Link
          to="/admin/events/new"
          className="bg-yellow-400 hover:bg-yellow-300 text-[#0A1128] font-bold px-4 py-2.5 rounded-xl text-sm transition-colors"
        >
          + Add Event
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
        ) : events.length === 0 ? (
          <div className="text-center py-16 text-white/30 text-sm">No events found.</div>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/8 text-white/40 text-xs uppercase tracking-wider">
                <th className="text-left px-6 py-4">Title</th>
                <th className="text-left px-6 py-4 hidden md:table-cell">Date</th>
                <th className="text-left px-6 py-4 hidden sm:table-cell">Category</th>
                <th className="text-left px-6 py-4 hidden sm:table-cell">Status</th>
                <th className="px-6 py-4" />
              </tr>
            </thead>
            <tbody>
              {events.map((ev) => (
                <tr key={ev.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4 text-white font-medium max-w-xs truncate">
                    {ev.title}
                    {ev.is_featured && (
                      <span className="ml-2 text-[10px] bg-yellow-400/10 text-yellow-400 px-2 py-0.5 rounded-full">Featured</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-white/40 hidden md:table-cell">{ev.date}</td>
                  <td className="px-6 py-4 text-white/40 hidden sm:table-cell">{ev.category ?? '—'}</td>
                  <td className="px-6 py-4 hidden sm:table-cell">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${ev.is_active ? 'bg-emerald-400/10 text-emerald-400' : 'bg-white/5 text-white/30'}`}>
                      {ev.is_active ? 'Active' : 'Hidden'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 justify-end">
                      <Link
                        to={`/admin/events/${ev.id}/edit`}
                        className="text-white/40 hover:text-white text-xs px-3 py-1.5 rounded-lg hover:bg-white/5 transition-all"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(ev.id, ev.title)}
                        disabled={deleting === ev.id}
                        className="text-white/40 hover:text-red-400 text-xs px-3 py-1.5 rounded-lg hover:bg-red-400/5 transition-all disabled:opacity-50"
                      >
                        {deleting === ev.id ? '…' : 'Delete'}
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

export default EventsList;
