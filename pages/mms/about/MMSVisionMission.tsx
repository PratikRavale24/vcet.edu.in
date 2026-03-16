import React from 'react';
import MMSLayout from '../../../components/mms/MMSLayout';
import { mmsMission, mmsVision } from './mmsAboutData';

export default function MMSVisionMission() {
  return (
    <MMSLayout title="Vision and Mission">
      <div className="space-y-12">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-brand-gold" />
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-gold">Master of Management Studies</span>
        </div>

        <section className="relative overflow-hidden rounded-3xl" style={{ background: 'linear-gradient(135deg, #0d2d56 0%, #1a4b7c 50%, #0f3460 100%)' }}>
          <span className="pointer-events-none absolute -left-2 -top-6 select-none text-[180px] font-display font-bold leading-none text-white/[0.04]">"</span>
          <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full" style={{ background: 'radial-gradient(circle, rgba(253,184,19,0.12) 0%, transparent 70%)' }} />
          <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)', backgroundSize: '32px 32px' }} />

          <div className="relative z-10 p-8 md:p-14">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: 'rgba(253,184,19,0.15)', border: '1px solid rgba(253,184,19,0.3)' }}>
                <i className="ph-fill ph-eye text-xl text-brand-gold" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold/70">Department</p>
                <p className="text-sm font-bold uppercase tracking-widest text-white/90">Vision</p>
              </div>
            </div>

            <blockquote className="mb-10 max-w-4xl text-2xl font-display font-semibold italic leading-[1.3] text-white md:text-3xl lg:text-4xl">
              "{mmsVision}"
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30">VCET · MMS</span>
              <div className="h-px w-12 bg-brand-gold/40" />
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="mb-2 flex items-end justify-between">
            <div>
              <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold">Guiding Principles</p>
              <h2 className="text-3xl font-display font-bold leading-tight text-brand-navy md:text-4xl">Our Mission</h2>
            </div>
            <div className="hidden items-center gap-2 text-sm text-slate-400 md:flex">
              <i className="ph ph-arrow-down text-brand-gold" />
              <span className="text-xs tracking-wide">4 Pillars</span>
            </div>
          </div>
          <div className="h-px bg-gradient-to-r from-brand-gold via-brand-navylight to-transparent" />

          <div className="grid gap-5 pt-2 md:grid-cols-2">
            {mmsMission.map((point, index) => (
              <article
                key={point}
                className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="absolute inset-0 rounded-2xl bg-brand-navy opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="pointer-events-none absolute right-5 top-4 select-none text-6xl font-display font-bold leading-none text-slate-100 transition-colors duration-300 group-hover:text-white/10">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-navylight transition-colors duration-300 group-hover:bg-brand-gold/20">
                    <i className="ph-fill ph-compass text-xl text-brand-navy transition-colors duration-300 group-hover:text-brand-gold" />
                  </div>
                  <p className="flex-1 text-sm leading-relaxed text-slate-500 transition-colors duration-300 group-hover:text-white/75">{point}</p>
                  <div className="mt-6 flex items-center gap-2">
                    <div className="h-px flex-1 bg-slate-100 transition-colors duration-300 group-hover:bg-white/20" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold">M{index + 1}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </MMSLayout>
  );
}
