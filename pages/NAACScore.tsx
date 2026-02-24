import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { Award, Star, BarChart3, TrendingUp, CheckCircle2 } from 'lucide-react';

const criteriaScores = [
  { number: '1', title: 'Curricular Aspects', score: '—', maxScore: '150' },
  { number: '2', title: 'Teaching-Learning & Evaluation', score: '—', maxScore: '200' },
  { number: '3', title: 'Research, Innovations & Extension', score: '—', maxScore: '150' },
  { number: '4', title: 'Infrastructure & Learning Resources', score: '—', maxScore: '100' },
  { number: '5', title: 'Student Support & Progression', score: '—', maxScore: '100' },
  { number: '6', title: 'Governance, Leadership & Management', score: '—', maxScore: '100' },
  { number: '7', title: 'Institutional Values & Best Practices', score: '—', maxScore: '100' },
];

const accreditationHighlights = [
  'Accredited with Grade B++ by NAAC',
  'Demonstrates strong commitment to quality education and continuous improvement',
  'Recognized for excellent teaching-learning practices and student support',
  'Commended for research initiatives and innovation ecosystem',
  'Appreciated for industry-institute collaboration and placement records',
  'Acknowledged for transparent governance and financial management',
];

const NAACScore: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="NAAC Accreditation Score"
        breadcrumbs={[
          { label: 'NAAC', href: '#' },
          { label: 'Accreditation Score' },
        ]}
      />

      {/* Grade Display */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="reveal">
                <div className="bg-brand-light rounded-2xl aspect-[4/3] flex items-center justify-center border border-brand-blue/10">
                  <span className="text-sm font-semibold text-brand-blue/40 tracking-wide">
                    naac-certificate.jpg
                  </span>
                </div>
              </div>

              <div className="reveal" style={{ transitionDelay: '0.1s' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-0.5 bg-brand-gold" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">
                    Accreditation
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-6">
                  NAAC Accreditation
                </h2>

                {/* Grade Card */}
                <div className="bg-gradient-to-br from-brand-blue to-brand-navy rounded-2xl p-8 text-center mb-6">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-gold mb-2">
                    NAAC Grade
                  </p>
                  <div className="text-6xl font-display font-bold text-white mb-2">B++</div>
                  <p className="text-white/60 text-sm">
                    National Assessment and Accreditation Council
                  </p>
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <Award className="w-5 h-5 text-brand-gold" />
                    <span className="text-brand-gold text-sm font-semibold">CGPA Score (Placeholder)</span>
                  </div>
                </div>

                <p className="text-slate-500 leading-relaxed text-sm">
                  VCET has been accredited with Grade B++ by the National Assessment and Accreditation
                  Council (NAAC), reflecting the institution's commitment to quality in education,
                  research, and overall institutional development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Criteria-wise Scores */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14 reveal">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-brand-gold" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">Scores</span>
                <div className="w-8 h-0.5 bg-brand-gold" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy">
                Criteria-wise Scores
              </h2>
              <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm">
                Performance across the seven criteria of the NAAC assessment framework.
              </p>
            </div>

            <div className="space-y-4">
              {criteriaScores.map((item, idx) => (
                <div
                  key={idx}
                  className="reveal flex items-center gap-5 bg-white rounded-xl p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-500 border border-gray-100"
                  style={{ transitionDelay: `${Math.min(idx * 0.05, 0.4)}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-blue text-white flex items-center justify-center flex-shrink-0 font-display font-bold text-lg">
                    {item.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-brand-navy font-display">{item.title}</h3>
                    <p className="text-xs text-slate-400 mt-0.5">Maximum: {item.maxScore}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-display font-bold text-brand-gold">{item.score}</div>
                    <p className="text-[10px] text-slate-400">/ {item.maxScore}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14 reveal">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-brand-gold" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">Highlights</span>
                <div className="w-8 h-0.5 bg-brand-gold" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy">
                Accreditation Highlights
              </h2>
            </div>

            <div className="space-y-3">
              {accreditationHighlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="reveal flex items-start gap-4 bg-brand-light rounded-xl p-4 hover:shadow-md transition-all duration-300"
                  style={{ transitionDelay: `${Math.min(idx * 0.05, 0.4)}s` }}
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default NAACScore;
