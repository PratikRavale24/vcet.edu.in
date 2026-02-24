import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { Calendar, Download, ExternalLink } from 'lucide-react';

interface AcademicCalendarItem {
  title: string;
  url: string;
  badge?: string;
}

const calendars: AcademicCalendarItem[] = [
  { title: 'EVEN SEM 2025-26 SE TE BE', url: 'https://vcet.edu.in/academic-calendar/', badge: 'Tentative' },
  { title: 'ODD SEM 2025-26 SE TE BE', url: 'https://vcet.edu.in/academic-calendar/' },
  { title: 'EVEN SEM 2024-25', url: 'https://vcet.edu.in/academic-calendar/' },
  { title: 'ODD SEM 2024-25 FE ME', url: 'https://vcet.edu.in/academic-calendar/' },
  { title: 'ODD SEM 2024-25 SE TE BE', url: 'https://vcet.edu.in/academic-calendar/' },
  { title: 'EVEN SEM 2023-24 SE TE BE', url: 'https://vcet.edu.in/academic-calendar/' },
  { title: 'EVEN SEM 2022-23 SE TE BE', url: 'https://vcet.edu.in/academic-calendar/' },
  { title: 'FE & ME EVEN SEM 2022-23', url: 'https://vcet.edu.in/academic-calendar/' },
  { title: 'FE ODD SEM 2022-23', url: 'https://vcet.edu.in/academic-calendar/' },
];

const AcademicCalendar: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="Academic Calendar"
        breadcrumbs={[
          { label: 'Academics', href: '/academics' },
          { label: 'Academic Calendar' },
        ]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="reveal text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-10 h-0.5 bg-brand-gold" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">
                  Schedules
                </span>
                <div className="w-10 h-0.5 bg-brand-gold" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy">
                Download Academic Calendars
              </h2>
              <p className="text-slate-500 mt-3 max-w-xl mx-auto">
                Stay updated with VCET's semester-wise academic calendars for all programs
              </p>
            </div>

            {/* Timeline-style Calendar List */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-gold/40 via-brand-blue/20 to-transparent" />

              <div className="space-y-5">
                {calendars.map((cal, idx) => (
                  <a
                    key={idx}
                    href={cal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="reveal group block"
                    style={{ transitionDelay: `${idx * 0.06}s` }}
                  >
                    <div className="flex items-center gap-5 pl-2 md:pl-4">
                      {/* Timeline dot */}
                      <div className="relative z-10 flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-brand-blue to-brand-navy flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                        <Calendar className="w-4 h-4 md:w-5 md:h-5 text-white" />
                      </div>

                      {/* Card */}
                      <div className="flex-1 flex items-center justify-between p-5 bg-brand-light rounded-2xl border border-gray-100 hover:border-brand-gold/40 hover:shadow-lg transition-all duration-500">
                        <div className="flex items-center gap-3 min-w-0">
                          <h3 className="font-display font-bold text-brand-navy group-hover:text-brand-blue transition-colors duration-300 text-sm md:text-base">
                            {cal.title}
                          </h3>
                          {cal.badge && (
                            <span className="flex-shrink-0 px-2.5 py-0.5 bg-brand-gold/15 text-brand-gold text-[10px] font-bold uppercase tracking-wider rounded-full">
                              {cal.badge}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-brand-blue/50 group-hover:text-brand-gold transition-colors duration-300 flex-shrink-0 ml-4">
                          <Download className="w-4 h-4" />
                          <ExternalLink className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AcademicCalendar;
