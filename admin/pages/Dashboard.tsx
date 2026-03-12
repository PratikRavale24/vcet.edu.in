import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { noticesApi } from '../api/notices';
import { eventsApi } from '../api/events';
import { placementsApi } from '../api/placements';
import { useAuth } from '../context/AuthContext';
import type { Notice, Event, Placement } from '../types';

interface StatCardProps {
  label: string;
  value: number | string;
  to: string;
  icon: React.ReactNode;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, to, icon, color }) => (
  <Link
    to={to}
    className="group bg-white/[0.04] border border-white/8 rounded-2xl p-6 hover:border-white/15 hover:-translate-y-1 transition-all duration-300 flex items-center gap-4"
  >
    <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center flex-shrink-0`}>
      {icon}
    </div>
    <div>
      <p className="text-3xl font-bold text-white">{value}</p>
      <p className="text-white/40 text-sm mt-0.5">{label}</p>
    </div>
  </Link>
);

const BellIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);
const CalendarIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const BriefcaseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
  </svg>
);

const AdminDashboard: React.FC = () => {
  const { user } = useAuth();
  const [notices, setNotices] = useState<Notice[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [placements, setPlacements] = useState<Placement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.allSettled([
      noticesApi.list().then((r) => setNotices(r.data)),
      eventsApi.list().then((r) => setEvents(r.data)),
      placementsApi.list().then((r) => setPlacements(r.data)),
    ]).finally(() => setLoading(false));
  }, []);

  const recentNotices = notices.slice(0, 5);
  const recentEvents = events.slice(0, 5);

  return (
    <div className="space-y-8">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold text-white">
          Welcome back, {user?.full_name?.split(' ')[0] ?? 'Admin'} 👋
        </h1>
        <p className="text-white/40 text-sm mt-1">Here's what's happening today.</p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard
          label="Total Notices"
          value={loading ? '–' : notices.length}
          to="/admin/notices"
          icon={<BellIcon />}
          color="bg-blue-400/10 text-blue-400"
        />
        <StatCard
          label="Total Events"
          value={loading ? '–' : events.length}
          to="/admin/events"
          icon={<CalendarIcon />}
          color="bg-emerald-400/10 text-emerald-400"
        />
        <StatCard
          label="Placement Records"
          value={loading ? '–' : placements.length}
          to="/admin/placements"
          icon={<BriefcaseIcon />}
          color="bg-yellow-400/10 text-yellow-400"
        />
      </div>

      {/* Recent notices + events */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Notices */}
        <div className="bg-white/[0.04] border border-white/8 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white font-semibold">Recent Notices</h2>
            <Link to="/admin/notices" className="text-yellow-400 text-xs hover:underline">View all</Link>
          </div>
          {loading ? (
            <p className="text-white/30 text-sm">Loading…</p>
          ) : recentNotices.length === 0 ? (
            <p className="text-white/30 text-sm">No notices yet.</p>
          ) : (
            <ul className="space-y-3">
              {recentNotices.map((n) => (
                <li key={n.id} className="flex items-start gap-3">
                  <span className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${n.is_active ? 'bg-emerald-400' : 'bg-white/20'}`} />
                  <div className="min-w-0">
                    <p className="text-white/80 text-sm truncate">{n.title}</p>
                    <p className="text-white/30 text-xs">{new Date(n.created_at).toLocaleDateString()}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Events */}
        <div className="bg-white/[0.04] border border-white/8 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white font-semibold">Upcoming Events</h2>
            <Link to="/admin/events" className="text-yellow-400 text-xs hover:underline">View all</Link>
          </div>
          {loading ? (
            <p className="text-white/30 text-sm">Loading…</p>
          ) : recentEvents.length === 0 ? (
            <p className="text-white/30 text-sm">No events yet.</p>
          ) : (
            <ul className="space-y-3">
              {recentEvents.map((ev) => (
                <li key={ev.id} className="flex items-start gap-3">
                  <span className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${ev.is_active ? 'bg-emerald-400' : 'bg-white/20'}`} />
                  <div className="min-w-0">
                    <p className="text-white/80 text-sm truncate">{ev.title}</p>
                    <p className="text-white/30 text-xs">{ev.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
