import React, { useState } from 'react';
import { useMmsEnquiry } from '../../hooks/mms/useMmsEnquiry';

export default function MMSEnquirePopup() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [stateName, setStateName] = useState('');
  const [city, setCity] = useState('');
  const [program, setProgram] = useState('');
  const [course, setCourse] = useState('');
  const { submit, submitting, success, error } = useMmsEnquiry();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const composedMessage = [
      `Program: ${program}`,
      `Course: ${course}`,
      `State: ${stateName}`,
      `City: ${city}`,
    ].join(' | ');

    const ok = await submit({
      name,
      email,
      phone,
      message: composedMessage,
      course,
    });

    if (ok) {
      setName('');
      setEmail('');
      setPhone('');
      setStateName('');
      setCity('');
      setProgram('');
      setCourse('');
    }
  };

  return (
    <>
      <button
        type="button"
        className="hidden md:flex fixed right-0 top-[44%] z-[55] -translate-y-1/2 flex-col items-center justify-center gap-1 px-2 py-4 shadow-2xl transition-all duration-200 hover:brightness-110 active:scale-95"
        style={{
          background: 'linear-gradient(180deg, #0b2e5a 0%, #0d4888 100%)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid rgba(253,184,19,0.6)',
          borderRight: 'none',
          boxShadow: '0 12px 36px rgba(13,72,136,0.45), inset 0 1px 0 rgba(253,184,19,0.25)',
          writingMode: 'vertical-rl',
        }}
        onClick={() => setOpen(true)}
      >
        <span
          className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-gold"
          style={{ transform: 'rotate(180deg)' }}
        >
          Enquire Now
        </span>
      </button>

      <button
        type="button"
        className="fixed bottom-6 right-4 z-50 rounded-full border border-brand-gold/60 bg-brand-navy px-4 py-2 text-sm font-bold text-brand-gold shadow-lg md:hidden"
        onClick={() => setOpen(true)}
      >
        Enquire Now
      </button>

      {open && (
        <div className="fixed inset-0 z-[60] flex items-start justify-center bg-slate-950/70 p-2 pt-5 backdrop-blur-sm sm:items-center sm:p-4 sm:pt-4">
          <div className="max-h-[94vh] w-full max-w-[760px] overflow-y-auto rounded-2xl border border-brand-gold/45 bg-gradient-to-br from-[#071d39] via-[#0b2f58] to-[#0d4888] p-4 shadow-[0_26px_80px_-30px_rgba(0,0,0,0.9)] sm:p-6">
            <div className="mb-5 flex items-start justify-between">
              <h3 className="text-4xl font-display font-bold leading-none text-brand-gold sm:text-5xl">Enquire Now</h3>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-gold/60 bg-brand-navy text-xl font-bold leading-none text-brand-gold transition hover:bg-[#14406f]"
                aria-label="Close enquiry form"
              >
                x
              </button>
            </div>

            <form className="space-y-4 rounded-xl border border-brand-gold/30 bg-white/95 p-4 sm:p-5" onSubmit={onSubmit}>
              <label className="block">
                <span className="mb-1 block text-base font-semibold text-brand-navy sm:text-lg">Student Name</span>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-brand-blue/25 bg-white px-4 py-3 text-base text-slate-800 outline-none transition focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/25"
                />
              </label>

              <label className="block">
                <span className="mb-1 block text-base font-semibold text-brand-navy sm:text-lg">Student Email Address</span>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-brand-blue/25 bg-white px-4 py-3 text-base text-slate-800 outline-none transition focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/25"
                />
              </label>

              <label className="block">
                <span className="mb-1 block text-base font-semibold text-brand-navy sm:text-lg">Student Phone Number</span>
                <input
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-lg border border-brand-blue/25 bg-white px-4 py-3 text-base text-slate-800 outline-none transition focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/25"
                />
              </label>

              <label className="block">
                <span className="mb-1 block text-base font-semibold text-brand-navy sm:text-lg">Enter State</span>
                <input
                  required
                  value={stateName}
                  onChange={(e) => setStateName(e.target.value)}
                  className="w-full rounded-lg border border-brand-blue/25 bg-white px-4 py-3 text-base text-slate-800 outline-none transition focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/25"
                />
              </label>

              <label className="block">
                <span className="mb-1 block text-base font-semibold text-brand-navy sm:text-lg">Enter City</span>
                <input
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full rounded-lg border border-brand-blue/25 bg-white px-4 py-3 text-base text-slate-800 outline-none transition focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/25"
                />
              </label>

              <label className="block">
                <span className="mb-1 block text-base font-semibold text-brand-navy sm:text-lg">Enter Program</span>
                <input
                  required
                  value={program}
                  onChange={(e) => setProgram(e.target.value)}
                  className="w-full rounded-lg border border-brand-blue/25 bg-white px-4 py-3 text-base text-slate-800 outline-none transition focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/25"
                />
              </label>

              <label className="block">
                <span className="mb-1 block text-base font-semibold text-brand-navy sm:text-lg">Enter Course</span>
                <input
                  required
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="w-full rounded-lg border border-brand-blue/25 bg-white px-4 py-3 text-base text-slate-800 outline-none transition focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/25"
                />
              </label>

              {success && <p className="rounded border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700">{success}</p>}
              {error && <p className="rounded border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">{error}</p>}

              <button
                type="submit"
                disabled={submitting}
                className="rounded-lg border border-[#c99316] bg-gradient-to-r from-[#f1c550] to-[#dca321] px-8 py-3 text-lg font-bold text-[#0a2c57] shadow-[0_10px_22px_-14px_rgba(220,163,33,0.9)] transition hover:brightness-105 disabled:opacity-60"
              >
                {submitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
