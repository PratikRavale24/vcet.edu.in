import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import {
  Globe, Handshake, MapPin, Languages, Flag, Landmark, Users, Sparkles,
  ChevronRight, ChevronLeft, ArrowRight, ArrowDown, Target,
  Calendar, Mail, Phone, Facebook, Instagram, Twitter, Home,
  Linkedin, ArrowUpRight,
} from 'lucide-react';

// ─── Data ─────────────────────────────────────────────────────────────────────

const ebsbEvents = [
  {
    id: 1,
    title: 'EBSB Cultural Week',
    subtitle: 'Annual Programme',
    date: 'Jan 2025',
    location: 'VCET Campus',
    description:
      'The annual EBSB Cultural Week showcased the traditions, cuisine, folk music, and attire of our paired state. Students performed folk dances, set up cultural stalls, and engaged in language learning sessions throughout the week.',
    bgImage: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=2076&auto=format&fit=crop',
    thumbImage: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=500&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Virtual Cultural Exchange',
    subtitle: 'Inter-State Meet',
    date: 'Nov 2024',
    location: 'Online / VCET Campus',
    description:
      'A virtual cultural exchange session with our partner institution connected students from two different states. Teams presented on their state\'s history, heritage, and language, fostering lasting friendships across borders.',
    bgImage: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop',
    thumbImage: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=500&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Heritage Quiz',
    subtitle: 'National Integration',
    date: 'Oct 2024',
    location: 'VCET Auditorium',
    description:
      'An engaging national heritage quiz where students competed on topics spanning Indian history, culture, monuments, and festivals from different states — strengthening their knowledge of India\'s diverse tapestry.',
    bgImage: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop',
    thumbImage: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=500&auto=format&fit=crop',
  },
];

const teamMembers = [
  {
    name: 'EBSB Coordinator',
    role: 'Faculty In-Charge',
    department: 'Social Sciences',
    email: 'ebsb@vcet.edu.in' as string | null,
    phone: null as string | null,
    image: null as string | null,
  },
  {
    name: 'Student Name',
    role: 'Programme Lead',
    department: 'Core Committee 2024-25',
    email: null as string | null,
    phone: null as string | null,
    image: null as string | null,
  },
  {
    name: 'Student Name',
    role: 'Cultural Coordinator',
    department: 'Core Committee 2024-25',
    email: null as string | null,
    phone: null as string | null,
    image: null as string | null,
  },
];

const objectives = [
  {
    icon: Globe,
    title: 'Promote National Unity',
    description:
      'Fostering a sense of national integration by creating cultural connections between students from different states and regions of India.',
  },
  {
    icon: Landmark,
    title: 'Celebrate Diversity',
    description:
      'Appreciating the unique traditions, languages, arts, and cuisines of all Indian states through interactive events and cultural exchanges.',
  },
  {
    icon: Handshake,
    title: 'Build Lasting Bonds',
    description:
      'Creating enduring relationships between institutions, students, and communities across state boundaries for a united and stronger India.',
  },
];

const stats = [
  { icon: Globe, value: '5+', label: 'States Partnered' },
  { icon: Users, value: '200+', label: 'Participants' },
  { icon: Handshake, value: '10+', label: 'Cultural Exchanges' },
  { icon: Flag, value: 'Annual', label: 'EBSB Week' },
];

const activities = [
  {
    icon: Languages,
    title: 'Language Exchange',
    description:
      'Students learn phrases and conversational basics of partner state languages, promoting linguistic diversity and cross-cultural communication.',
  },
  {
    icon: Landmark,
    title: 'Cultural Showcases',
    description:
      'Showcasing art, cuisine, traditional attire, and folk performances of different Indian states to appreciate the rich diversity of India.',
  },
  {
    icon: Handshake,
    title: 'State Pairing Activities',
    description:
      'Collaborative activities with the paired state including virtual meetings, cultural presentations, and student exchange programs.',
  },
  {
    icon: MapPin,
    title: 'Heritage Awareness',
    description:
      'Events highlighting the historical landmarks, monuments, and cultural heritage of different states across India.',
  },
  {
    icon: Globe,
    title: 'National Integration Meets',
    description:
      'Participation in national-level EBSB events, quiz competitions, and essay writing contests focused on national unity.',
  },
  {
    icon: Sparkles,
    title: 'Festival Celebrations',
    description:
      'Celebrating festivals of the partner state within the campus to build understanding and respect for diverse traditions.',
  },
];

const milestones = [
  {
    title: 'Promote National Unity',
    description:
      'Fostering a sense of national integration by creating cultural connections between students from different states and regions.',
  },
  {
    title: 'Celebrate Diversity',
    description:
      'Appreciating the unique traditions, languages, arts, and cuisines of all Indian states through interactive events and exchanges.',
  },
  {
    title: 'Build Lasting Bonds',
    description:
      'Creating enduring relationships between institutions, students, and communities across state boundaries for a united India.',
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

const EBSB: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const activeEvent = ebsbEvents[activeIndex];

  const go = (next: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex(next);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handlePrev = () => go(activeIndex === 0 ? ebsbEvents.length - 1 : activeIndex - 1);
  const handleNext = () => go(activeIndex === ebsbEvents.length - 1 ? 0 : activeIndex + 1);
  const handleSelect = (i: number) => { if (i !== activeIndex) go(i); };

  return (
    <PageLayout>
      {/* ── Cinematic Hero ── */}
      <section className="relative w-full min-h-[100svh] bg-brand-dark overflow-hidden flex flex-col">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop"
            alt="Ek Bharat Shreshtha Bharat"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/85 via-brand-dark/50 to-transparent" />
          <div className="absolute inset-0 bg-brand-dark/20" />
        </div>

        <div className="relative z-10 px-6 sm:px-12 lg:px-20 pt-8">
          <nav className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em]">
            <a href="/" className="text-white/40 hover:text-brand-gold transition-colors"><Home className="w-3.5 h-3.5" /></a>
            <span className="text-white/20">/</span>
            <span className="text-brand-gold">EBSB</span>
          </nav>
        </div>

        <main className="relative z-10 flex-grow flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center border border-white/25 rounded-full px-5 py-2 mb-8 bg-white/5 backdrop-blur-sm">
              <span className="text-white text-xs tracking-[0.25em] font-semibold uppercase">Unity in Diversity</span>
            </div>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-bold text-white leading-[1.05] mb-8 tracking-tight drop-shadow-lg">
              Ek Bharat <br /> Shreshtha <br />
              <span className="text-brand-gold">Bharat</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-xl mb-12 leading-relaxed font-light drop-shadow">
              Celebrating India's extraordinary cultural tapestry through exchanges, language learning,
              and inter-state collaborations that strengthen our national fabric.
            </p>
            <a
              href="#ebsb-events"
              className="inline-flex items-center gap-3 bg-white text-brand-navy px-8 py-4 rounded-full font-bold hover:bg-brand-gold hover:scale-105 transition-all duration-300 shadow-xl group"
            >
              <span className="tracking-widest text-sm uppercase">Explore Activities</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </main>

        <aside className="absolute right-8 md:right-12 top-0 h-full z-20 hidden lg:flex flex-col justify-center items-center gap-0">
          <div className="flex flex-col gap-6 mb-6">
            <a href="https://www.facebook.com/vcet.vasai.50/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brand-gold transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href="https://www.instagram.com/official.vcet/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brand-gold transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="text-white/40 hover:text-brand-gold transition-colors"><Twitter className="w-4 h-4" /></a>
          </div>
          <div className="w-px h-20 bg-white/20" />
          <span className="text-white/40 text-[9px] tracking-[0.4em] font-bold -rotate-90 my-8 uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4 text-white/40 animate-bounce" />
        </aside>

        <div className="relative z-10 w-full border-t border-white/10 bg-brand-dark/60 backdrop-blur-md">
          <div className="container mx-auto px-6 sm:px-12 lg:px-20">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center md:flex-row gap-4 py-6 px-6 md:px-8">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <stat.icon className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div className="text-center md:text-left">
                    <div className="text-3xl md:text-4xl font-display font-bold text-white leading-none">{stat.value}</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-semibold mt-1">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Objectives ── */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-14 reveal">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-brand-gold" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">Our Purpose</span>
              <div className="w-8 h-0.5 bg-brand-gold" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">Our Objectives</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {objectives.map((obj, idx) => (
              <div key={idx} className="reveal group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg p-8 transition-all duration-500 hover:-translate-y-1 hover:border-brand-gold/30" style={{ transitionDelay: `${0.1 * idx}s` }}>
                <div className="w-14 h-14 bg-brand-light rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-gold/15 transition-colors duration-300">
                  <obj.icon className="w-7 h-7 text-brand-blue group-hover:text-brand-gold transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-display font-bold text-brand-navy mb-3 group-hover:text-brand-blue transition-colors duration-300">{obj.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{obj.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Events Carousel ── */}
      <section id="ebsb-events" className="relative w-full min-h-[90vh] bg-brand-dark text-white overflow-hidden">
        {ebsbEvents.map((event, index) => (
          <div key={event.id} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${event.bgImage})`, transform: index === activeIndex ? 'scale(1)' : 'scale(1.05)', transition: 'transform 10s linear' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80" />
          </div>
        ))}

        <div className="relative z-10 container mx-auto px-4 sm:px-6 h-full min-h-[90vh] flex flex-col md:flex-row gap-10 py-16 md:py-20">
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className={`transition-all duration-700 ${isTransitioning ? 'opacity-0 translate-y-6' : 'opacity-100 translate-y-0'}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-brand-gold" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">{activeEvent.subtitle}</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 leading-tight uppercase tracking-tight">{activeEvent.title}</h2>
              <div className="flex flex-wrap gap-5 mb-6 text-sm text-white/60">
                <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-brand-gold" />{activeEvent.date}</span>
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-brand-gold" />{activeEvent.location}</span>
              </div>
              <p className="text-base text-white/80 leading-relaxed border-l-4 border-brand-gold pl-4 bg-white/5 p-4 rounded-r-xl mb-8 backdrop-blur-sm">{activeEvent.description}</p>
              <button className="inline-flex items-center gap-3 bg-brand-gold text-brand-dark px-8 py-3 rounded-full font-bold hover:bg-white transition-all duration-300 shadow-lg group w-fit">
                View Gallery <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-end md:justify-center">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-display font-bold border-b border-white/20 pb-2 flex-grow mr-6">Event Highlights</h3>
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className="text-sm font-light text-white/50"><span className="text-white font-bold">0{activeIndex + 1}</span> / 0{ebsbEvents.length}</span>
                <div className="flex gap-2">
                  <button onClick={handlePrev} className="w-9 h-9 rounded-full border border-white/25 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold hover:text-brand-dark transition-all duration-200"><ChevronLeft className="w-5 h-5" /></button>
                  <button onClick={handleNext} className="w-9 h-9 rounded-full border border-white/25 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold hover:text-brand-dark transition-all duration-200"><ChevronRight className="w-5 h-5" /></button>
                </div>
              </div>
            </div>
            <div className="w-full overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <div className="flex gap-4 w-max">
                {ebsbEvents.map((event, index) => (
                  <div key={event.id} onClick={() => handleSelect(index)} className={`relative cursor-pointer transition-all duration-500 ease-out flex-shrink-0 overflow-hidden rounded-2xl ${index === activeIndex ? 'w-56 h-72 ring-2 ring-brand-gold shadow-[0_0_28px_rgba(0,0,0,0.5)]' : 'w-40 h-56 opacity-50 hover:opacity-80 hover:w-44 mt-8'}`}>
                    <img src={event.thumbImage} alt={event.title} className="absolute inset-0 w-full h-full object-cover" />
                    <div className={`absolute inset-0 ${index === activeIndex ? 'bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent' : 'bg-brand-dark/60'}`} />
                    <div className={`absolute bottom-0 left-0 w-full p-4 ${index === activeIndex ? 'translate-y-0' : 'translate-y-1'}`}>
                      <p className={`text-[10px] font-bold mb-1 uppercase tracking-wider ${index === activeIndex ? 'text-brand-gold' : 'text-white/60'}`}>{event.date.split(',')[0]}</p>
                      <h4 className="text-base font-display font-bold leading-tight uppercase text-white">{event.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Activities ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-14 reveal">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">Key Activities</h2>
            <p className="text-slate-500 text-lg leading-relaxed">Bridging cultures, building connections across India.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {activities.map((activity, idx) => (
              <div key={idx} className="reveal group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand-gold/30" style={{ transitionDelay: `${0.05 * idx}s` }}>
                <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-gold/10 transition-colors duration-300">
                  <activity.icon className="w-6 h-6 text-brand-blue group-hover:text-brand-gold transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-display font-bold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors duration-300">{activity.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leadership ── */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-14 reveal">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-brand-gold" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">The People Behind It</span>
              <div className="w-8 h-0.5 bg-brand-gold" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">Leadership &amp; Core Team</h2>
            <p className="text-slate-500 leading-relaxed">Meet the dedicated individuals driving EBSB at VCET.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="reveal group relative bg-brand-dark rounded-[2rem] p-8 flex flex-col items-center text-center overflow-hidden transition-all duration-500 hover:-translate-y-3" style={{ transitionDelay: `${0.1 * idx}s`, boxShadow: "0 0 0 transparent" }} onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 20px 60px rgba(255,193,7,0.25)")} onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 0 0 transparent")}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-brand-gold blur-[80px] opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />
                <div className="relative mb-6 flex-shrink-0">
                  <div className="w-28 h-28 rounded-full border-2 border-dashed border-brand-gold/30 group-hover:rotate-180 transition-transform duration-700 absolute inset-0" />
                  <div className="w-28 h-28 rounded-full overflow-hidden bg-gradient-to-br from-brand-blue to-brand-navy flex items-center justify-center border-2 border-white/10">
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
                    ) : (
                      <span className="text-3xl font-display font-bold text-brand-gold">
                        {member.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}
                      </span>
                    )}
                  </div>
                </div>
                <h3 className="text-lg font-display font-bold text-white group-hover:text-brand-gold transition-colors duration-300 mb-1">{member.name}</h3>
                <p className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-1">{member.role}</p>
                <p className="text-sm text-slate-400">{member.department}</p>
                <div className="w-full overflow-hidden max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 mt-0 group-hover:mt-8">
                  <div className="border-t border-white/10 pt-6 flex flex-col gap-3">
                    {member.email ? (
                      <a href={`mailto:${member.email}`} className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors text-xs">
                        <span className="w-8 h-8 flex items-center justify-center bg-white/5 rounded-full text-brand-gold flex-shrink-0"><Mail className="w-3.5 h-3.5" /></span>
                        <span className="truncate">{member.email}</span>
                      </a>
                    ) : (
                      <div className="flex items-center justify-center gap-3">
                        <button className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-full text-brand-gold hover:bg-brand-gold hover:text-brand-dark transition-all duration-300"><Linkedin className="w-4 h-4" /></button>
                        <button className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-full text-brand-gold hover:bg-brand-gold hover:text-brand-dark transition-all duration-300"><ArrowUpRight className="w-4 h-4" /></button>
                      </div>
                    )}
                    {member.phone && (
                      <div className="flex items-center gap-3 text-slate-300 text-xs">
                        <span className="w-8 h-8 flex items-center justify-center bg-white/5 rounded-full text-brand-gold flex-shrink-0"><Phone className="w-3.5 h-3.5" /></span>
                        <span>{member.phone}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Milestones ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-14 reveal">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">Our Objectives</h2>
            <p className="text-slate-500 text-lg leading-relaxed">Building a stronger, united India through education and culture.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {milestones.map((item, idx) => (
              <div key={idx} className="reveal group bg-gradient-to-br from-brand-dark via-brand-blue to-brand-navy rounded-xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl" style={{ transitionDelay: `${0.1 * idx}s` }}>
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-5 h-5 text-brand-gold" />
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default EBSB;