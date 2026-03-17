import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { SITE_PAGE_TABS } from './sitePagesConfig';

const homeEditables = [
  {
    title: 'Placements Stats',
    description: 'Manage placement records and yearly placement statistics shown on the homepage.',
    links: [{ label: 'Edit Placement Stats', to: '/admin/home/placement-stats' }],
  },
  {
    title: 'Where Our Alumni Thrive',
    description: 'Update alumni stories and partner logos for the alumni/recruiter section.',
    links: [
      { label: 'Edit Testimonials', to: '/admin/testimonials' },
      { label: 'Edit Placement Partners', to: '/admin/placement-partners' },
    ],
  },
  {
    title: 'Remarkable Achievements',
    description: 'Add, edit, or reorder achievement highlights displayed on the homepage.',
    links: [{ label: 'Edit Achievements', to: '/admin/achievements' }],
  },
  {
    title: 'Gallery and Labs',
    description: 'Upload and manage homepage gallery/lab images and captions.',
    links: [{ label: 'Edit Gallery', to: '/admin/gallery' }],
  },
];

const SitePages: React.FC = () => {
  const { pageKey = 'home' } = useParams<{ pageKey: string }>();
  const activeTab = SITE_PAGE_TABS.find((tab) => tab.key === pageKey);

  if (!activeTab) {
    return (
      <div className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">Page not found</h1>
        <p className="text-sm text-slate-500 mt-1">Please select a valid page from the Pages menu.</p>
        <Link to="/admin/pages/home" className="inline-flex mt-4 px-4 py-2 rounded-xl bg-[#2563EB] text-white text-sm font-semibold">
          Go to Home Page Editor
        </Link>
      </div>
    );
  }

  if (activeTab.key !== 'home') {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{activeTab.label}</h1>
          <p className="text-sm text-slate-500 mt-1">This section is ready in navigation and can be wired with editables next.</p>
        </div>
        <div className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-sm">
          <p className="text-slate-700 text-sm">
            Use the Home tab to edit homepage blocks now.
          </p>
          <Link to="/admin/pages/home" className="inline-flex mt-4 px-4 py-2 rounded-xl bg-slate-900 text-white text-sm font-semibold">
            Open Home Editables
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Home Page</h1>
        <p className="text-sm text-slate-500 mt-1">Choose a section below to edit homepage content.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {homeEditables.map((item) => (
          <div key={item.title} className="bg-white border border-slate-200/60 rounded-2xl p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
            <p className="text-sm text-slate-500 mt-2">{item.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {item.links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="inline-flex items-center px-3.5 py-2 rounded-xl bg-[#2563EB] text-white text-xs font-semibold hover:bg-blue-700 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SitePages;
