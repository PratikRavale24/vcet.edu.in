import React from 'react';
import PageLayout from '../../components/PageLayout';
import PageBanner from '../../components/PageBanner';
import { Crown } from 'lucide-react';

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
interface Member {
  role: string;
  name: string;
  description: string;
  initials: string;
  imagePlaceholder: string;
  category: 'management' | 'ex-officio' | 'staff';
}

const members: Member[] = [
  {
    role: 'Member',
    name: 'Mr. M.N. alias Bhausaheb Mohol',
    description: 'Industrialist',
    initials: 'BM',
    imagePlaceholder: 'member-bhausaheb-mohol.jpg',
    category: 'management',
  },
  {
    role: 'Member',
    name: 'Mr. Pandurang alias Babansheth Naik',
    description: 'Educationist',
    initials: 'PN',
    imagePlaceholder: 'member-pandurang-naik.jpg',
    category: 'management',
  },
  {
    role: 'Member',
    name: 'Mr. Hasmukh Shah',
    description: 'Industrialist',
    initials: 'HS',
    imagePlaceholder: 'member-hasmukh-shah.jpg',
    category: 'management',
  },
  {
    role: 'Member',
    name: 'Mr. Madhurkar B. Parekh',
    description: 'Industrialist, Chairman of Pidilite Industries',
    initials: 'MP',
    imagePlaceholder: 'member-madhurkar-parekh.jpg',
    category: 'management',
  },
  {
    role: 'Member',
    name: 'Director of Technical Education (M.S.)',
    description: 'Ex-Officio Member',
    initials: 'DTE',
    imagePlaceholder: 'member-dte.jpg',
    category: 'ex-officio',
  },
  {
    role: 'Member',
    name: 'Nominee of the University',
    description: 'Ex-Officio Member',
    initials: 'NU',
    imagePlaceholder: 'member-university-nominee.jpg',
    category: 'ex-officio',
  },
  {
    role: 'Member',
    name: 'Director, WRO AICTE',
    description: 'Ex-Officio Member',
    initials: 'WA',
    imagePlaceholder: 'member-wro-aicte.jpg',
    category: 'ex-officio',
  },
  {
    role: 'Member',
    name: 'Educationalist / Industrialist',
    description: 'Nominated by AICTE',
    initials: 'EI',
    imagePlaceholder: 'member-aicte-nominee.jpg',
    category: 'ex-officio',
  },
  {
    role: 'Member',
    name: 'Dr. Uday Aswalekar',
    description: 'Staff Representative, Professor — Mechanical Engg.',
    initials: 'UA',
    imagePlaceholder: 'member-uday-aswalekar.jpg',
    category: 'staff',
  },
  {
    role: 'Member',
    name: 'Dr. Archana Ekbote',
    description: 'Staff Representative, Asst. Professor — IT',
    initials: 'AE',
    imagePlaceholder: 'member-archana-ekbote.jpg',
    category: 'staff',
  },
];

const mgmt      = members.filter(m => m.category === 'management');
const exOfficio = members.filter(m => m.category === 'ex-officio');
const staff     = members.filter(m => m.category === 'staff');

/* ─────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────── */

/** Horizontal member row inside a grouped panel */
const MemberRow: React.FC<{ member: Member; delay: number }> = ({ member, delay }) => (
  <div
    className="reveal flex items-center gap-4 py-4 border-b border-gray-100 last:border-0"
    style={{ transitionDelay: `${delay}s` }}
  >
    <div className="w-11 h-11 shrink-0 bg-gradient-to-br from-brand-blue/10 to-brand-gold/10 rounded-xl flex items-center justify-center border border-gray-100">
      <span className="text-sm font-display font-bold text-brand-blue/40 select-none">
        {member.initials}
      </span>
    </div>
    <div className="min-w-0">
      <p className="text-[10px] tracking-[0.2em] font-bold uppercase text-brand-gold leading-none mb-0.5">
        {member.role}
      </p>
      <h3 className="font-display font-bold text-brand-navy text-[15px] leading-snug">
        {member.name}
      </h3>
      <p className="text-xs text-slate-400 mt-0.5">{member.description}</p>
    </div>
  </div>
);

/** Section group heading */
const GroupHeading: React.FC<{ label: string; delay?: number }> = ({ label, delay = 0 }) => (
  <div className="reveal flex items-center gap-3 mb-3" style={{ transitionDelay: `${delay}s` }}>
    <div className="w-1 h-5 bg-brand-gold rounded-full shrink-0" />
    <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-slate-400">{label}</h3>
    <div className="flex-1 h-px bg-gray-100" />
  </div>
);

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
const GoverningCouncil: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="Governing Council"
        breadcrumbs={[
          { label: 'About Us', href: '/about-us' },
          { label: 'Governing Council' },
        ]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">

            {/* ── Page intro ── */}
            <div className="reveal text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-10 h-0.5 bg-brand-gold" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">
                  Leadership &amp; Governance
                </span>
                <div className="w-10 h-0.5 bg-brand-gold" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy">
                The Governing Council
              </h2>
              <p className="text-slate-500 mt-3 max-w-2xl mx-auto leading-relaxed">
                A distinguished assembly of educators, industrialists, and visionaries
                dedicated to shaping the future of our academic community.
              </p>
            </div>

            {/* ═══════════════════════════════════════
                TWO-COLUMN LAYOUT
            ═══════════════════════════════════════ */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14 items-start">

              {/* ─── LEFT: Chairman featured card (sticky) ─── */}
              <div className="reveal lg:col-span-1">
                <div className="sticky top-32">
                  <div className="bg-brand-light rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:border-brand-gold/30 transition-all duration-500 group">

                    {/* Photo placeholder */}
                    <div className="aspect-[4/3] bg-gradient-to-br from-brand-blue/10 to-brand-gold/10 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/5 to-transparent" />
                      <div className="text-center relative z-10">
                        <div className="w-24 h-24 bg-white/60 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform duration-500">
                          <span className="text-4xl font-display font-bold text-brand-blue/30 select-none">
                            VV
                          </span>
                        </div>
                        <p className="text-xs text-slate-400">chairman-vikas-vartak.jpg</p>
                      </div>
                    </div>

                    {/* Chairman info */}
                    <div className="p-6 text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Crown className="w-4 h-4 text-brand-gold" />
                        <span className="text-[10px] tracking-[0.22em] font-bold uppercase text-brand-gold">
                          Chairman
                        </span>
                      </div>
                      <h2 className="text-xl font-display font-bold text-brand-navy">
                        Mr. Vikas Vartak
                      </h2>
                      <p className="text-sm text-slate-500 mt-1">Chairman, Vidyavardhini</p>

                      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-5" />

                      {/* Member Secretary inline below */}
                      <div className="flex items-center gap-4 text-left">
                        <div className="w-11 h-11 shrink-0 bg-gradient-to-br from-brand-blue/10 to-brand-gold/10 rounded-lg flex items-center justify-center border border-gray-100">
                          <span className="text-sm font-display font-bold text-brand-blue/40 select-none">RH</span>
                        </div>
                        <div>
                          <p className="text-[10px] tracking-[0.18em] font-bold uppercase text-brand-gold leading-none mb-0.5">
                            Member Secretary
                          </p>
                          <p className="text-xl font-display font-bold text-brand-navy leading-snug">
                            Dr. Rakesh Himte
                          </p>
                          <p className="text-xs text-slate-400">Principal, VCET</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ─── RIGHT: Grouped member lists ─── */}
              <div className="lg:col-span-2 space-y-8">

                {/* Management Members */}
                <div className="reveal">
                  <GroupHeading label="Management Members" delay={0.05} />
                  <div className="bg-brand-light rounded-2xl px-6 py-1 border border-gray-100">
                    {mgmt.map((m, i) => (
                      <MemberRow key={m.name} member={m} delay={0.08 + i * 0.06} />
                    ))}
                  </div>
                </div>

                {/* Ex-Officio & Nominated */}
                <div className="reveal" style={{ transitionDelay: '0.1s' }}>
                  <GroupHeading label="Ex-Officio &amp; Nominated Members" delay={0.1} />
                  <div className="bg-brand-light rounded-2xl px-6 py-1 border border-gray-100">
                    {exOfficio.map((m, i) => (
                      <MemberRow key={m.name} member={m} delay={0.12 + i * 0.06} />
                    ))}
                  </div>
                </div>

                {/* Staff Representatives */}
                <div className="reveal" style={{ transitionDelay: '0.15s' }}>
                  <GroupHeading label="Staff Representatives" delay={0.15} />
                  <div className="bg-brand-light rounded-2xl px-6 py-1 border border-gray-100">
                    {staff.map((m, i) => (
                      <MemberRow key={m.name} member={m} delay={0.18 + i * 0.06} />
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default GoverningCouncil;