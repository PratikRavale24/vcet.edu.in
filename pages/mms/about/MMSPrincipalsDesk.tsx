import React from 'react';
import MMSLayout from '../../../components/mms/MMSLayout';
import { Quote } from 'lucide-react';
import { principalDeskContent, principalSignature } from './mmsAboutData';

export default function MMSPrincipalsDesk() {
  return (
    <MMSLayout title="Principal's Desk">
      <section className="relative rounded-3xl border border-slate-100 bg-white p-6 shadow-sm md:p-10">
        <div className="mb-8 flex items-center gap-3">
          <span className="h-px w-8 bg-brand-gold" />
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-gold">Message from the Principal</span>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
          <aside className="w-full max-w-[300px] lg:w-[300px] lg:flex-shrink-0 lg:sticky lg:top-36">
            <div className="rounded-3xl bg-gradient-to-br from-yellow-300 via-brand-gold to-yellow-500 p-[2.5px] shadow-[0_0_38px_6px_rgba(253,184,19,0.36)]">
              <div className="overflow-hidden rounded-[22px] bg-white">
                <div className="flex h-[270px] w-full items-center justify-center bg-brand-light">
                  <div className="text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-blue/70">Profile Holder</p>
                    <p className="mt-2 text-sm font-semibold text-brand-navy">Principal Photo</p>
                  </div>
                </div>
                <div className="bg-gradient-to-b from-white to-amber-50/40 px-5 py-4 text-center">
                  <h3 className="text-xl font-display font-extrabold text-brand-navy">Dr. Rakesh Himte</h3>
                  <div className="mt-2 inline-flex items-center rounded-full bg-gradient-to-r from-yellow-300 via-brand-gold to-yellow-400 px-4 py-1.5">
                    <span className="text-[11px] font-black uppercase tracking-[0.2em] text-brand-navy">Principal</span>
                  </div>
                  <p className="mt-3 text-xs font-semibold text-slate-500">Vidyavardhini&apos;s College of Engineering &amp; Technology</p>
                </div>
                <div className="h-2 bg-gradient-to-r from-yellow-300 via-brand-gold to-yellow-400" />
              </div>
            </div>
          </aside>

          <div className="min-w-0 flex-1 space-y-6 lg:pt-0.5">
            <div className="rounded-2xl bg-gradient-to-br from-brand-navy to-brand-blue p-6 text-white shadow-lg md:p-8">
              <Quote className="mb-3 h-6 w-6 text-brand-gold" />
              <p className="text-lg font-display font-semibold leading-relaxed md:text-2xl">Dear Prospective Students,</p>
            </div>

            <div className="space-y-4 text-justify text-[17px] leading-[1.95] text-slate-700">
              {principalDeskContent.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="rounded-2xl border border-brand-gold/20 bg-brand-light/45 px-6 py-5">
              {principalSignature.map((line, index) => (
                <p key={line} className={index === 1 ? 'text-lg font-bold text-brand-navy' : 'text-sm text-slate-700'}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MMSLayout>
  );
}
