import React, { useState, useRef, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useAuth } from '../context/AuthContext';

/* ── Icons ─────────────────────────────────────────────────────────────────── */

const UserCircleIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
  </svg>
);
const LogOutSmIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);
const ChevronDownIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const AdminLayout: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLogout = async () => {
    await logout();
    navigate('/admin/login');
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div className="min-h-screen bg-[#F1F5F9] text-[#0F172A]">
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />

      {/* ── Top Navbar ─────────────────────────────────────────────── */}
      <header
        className={`fixed top-0 right-0 z-20 h-16 bg-white/80 backdrop-blur-md border-b border-slate-200/60 flex items-center justify-between px-6 lg:px-8 transition-all duration-300 ${
          collapsed ? 'lg:left-[72px]' : 'lg:left-64'
        } left-0`}
      >
        {/* Left: spacer for mobile hamburger */}
        <div className="lg:hidden w-10" />
        {/* Left: branding on desktop */}
        <div className="hidden lg:flex items-center gap-2">
          <h2 className="text-sm font-semibold text-slate-500">
            Admin Dashboard
          </h2>
        </div>

        {/* Right: Admin profile */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-100 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-[#2563EB] flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs font-bold">
                {(user?.full_name ?? 'A').charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-sm font-semibold text-[#0F172A] leading-tight">{user?.full_name ?? 'Admin'}</p>
              <p className="text-[11px] text-slate-400 capitalize">{user?.role ?? 'Super Admin'}</p>
            </div>
            <ChevronDownIcon />
          </button>

          {/* Dropdown */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl border border-slate-200 shadow-xl shadow-slate-200/50 py-1.5 z-50">
              <button
                onClick={() => { setDropdownOpen(false); }}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0F172A] transition-colors"
              >
                <UserCircleIcon />
                Profile
              </button>
              <div className="border-t border-slate-100 my-1" />
              <button
                onClick={() => { setDropdownOpen(false); handleLogout(); }}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-slate-600 hover:bg-red-50 hover:text-red-500 transition-colors"
              >
                <LogOutSmIcon />
                Logout
              </button>
            </div>
          )}
        </div>
      </header>

      {/* ── Main Content ───────────────────────────────────────────── */}
      <main
        className={`min-h-screen pt-16 transition-all duration-300 ${
          collapsed ? 'lg:ml-[72px]' : 'lg:ml-64'
        }`}
      >
        <div className="p-6 lg:p-8 max-w-7xl w-full mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
