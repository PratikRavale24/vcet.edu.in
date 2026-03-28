import React from 'react';
import MMSLayout from '../../../components/mms/MMSLayout';
import {
  mmsProgramEducationalObjectives,
  mmsProgramOutcomes,
  mmsProgramSpecificOutcomes,
} from './mmsAboutData';

const sidebarLinks = [
  { label: 'Program Outcomes (POs)', href: '#mms-po' },
  { label: 'Program Educational Objectives (PEOs)', href: '#mms-peo' },
  { label: 'Program Specific Outcomes (PSOs)', href: '#mms-pso' },
];

export default function MMSProgramOutcomes() {
  return (
    <MMSLayout title="Program Outcomes (POs)">
      <div className="flex flex-col gap-8 lg:flex-row">
        <aside className="w-full lg:w-[280px] lg:flex-shrink-0">
          <div className="sticky top-28 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            {sidebarLinks.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className={`flex items-center justify-between border-l-[3px] px-5 py-3 text-sm font-semibold transition ${
                  index === 0
                    ? 'border-brand-gold bg-brand-navy text-brand-gold'
                    : 'border-transparent text-brand-navy hover:bg-brand-navylight'
                }`}
              >
                <span>{item.label}</span>
                <i className="ph ph-arrow-right text-xs" />
              </a>
            ))}
          </div>
        </aside>

        <section className="w-full space-y-10">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-brand-gold" />
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-gold">Master of Management Studies</span>
          </div>

          <article id="mms-po" className="space-y-6 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm md:p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-navy">
                <i className="ph-fill ph-chart-bar text-lg text-brand-gold" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold">Core Competencies</p>
                <h3 className="text-2xl font-display font-bold text-brand-navy leading-tight">Program Outcomes (POs)</h3>
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {mmsProgramOutcomes.map((outcome, index) => (
                <div
                  key={outcome}
                  className="group flex items-start gap-4 rounded-xl border border-slate-100 bg-white px-5 py-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-gold/40 hover:shadow-md"
                >
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-brand-navylight text-[11px] font-bold text-brand-navy transition-colors duration-200 group-hover:bg-brand-navy group-hover:text-brand-gold">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="pt-1 text-sm leading-relaxed text-slate-600">{outcome}</p>
                </div>
              ))}
            </div>
          </article>

          <article id="mms-peo" className="relative overflow-hidden rounded-2xl" style={{ background: 'linear-gradient(135deg,#0d2d56 0%,#1a4b7c 100%)' }}>
            <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)', backgroundSize: '28px 28px' }} />
            <div className="absolute top-0 right-0 h-64 w-64 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle,rgba(253,184,19,0.12) 0%,transparent 70%)' }} />
            <div className="relative z-10 space-y-5 p-8 md:p-10">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: 'rgba(253,184,19,0.15)', border: '1px solid rgba(253,184,19,0.3)' }}>
                  <i className="ph-fill ph-target text-2xl text-brand-gold" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold/80">Objectives</p>
                  <h3 className="text-2xl font-display font-bold text-white">Program Educational Objectives (PEOs)</h3>
                </div>
              </div>

              <ol className="space-y-2.5">
                {mmsProgramEducationalObjectives.map((objective, index) => (
                  <li key={objective} className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm leading-relaxed text-white/85">
                    <span className="mr-2 font-bold text-brand-gold">PEO {index + 1}:</span>
                    {objective}
                  </li>
                ))}
              </ol>
            </div>
          </article>

          <article id="mms-pso" className="space-y-5 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm md:p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gold">
                <i className="ph-fill ph-star text-lg text-white" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold">Department Specific</p>
                <h3 className="text-2xl font-display font-bold text-brand-navy leading-tight">Program Specific Outcomes (PSOs)</h3>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {mmsProgramSpecificOutcomes.map((outcome, index) => (
                <div key={outcome} className="relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <span className="absolute bottom-2 right-4 select-none text-6xl font-display font-bold leading-none text-slate-100">{index + 1}</span>
                  <div className="relative z-10">
                    <span className="inline-block rounded-full bg-brand-navylight px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-brand-navy">
                      PSO {index + 1}
                    </span>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600">{outcome}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </section>
      </div>
    </MMSLayout>
  );
}
