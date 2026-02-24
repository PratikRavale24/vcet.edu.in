import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { Users, Award, Calendar, Megaphone, Star, UserCheck, Vote, Heart } from 'lucide-react';

const stats = [
  { icon: Users, value: '20+', label: 'Council Members' },
  { icon: Calendar, value: '30+', label: 'Events / Year' },
  { icon: Award, value: 'Annual', label: 'Elections' },
  { icon: Star, value: '1000+', label: 'Students Represented' },
];

const teamMembers = [
  { name: 'Student Name', role: 'General Secretary', department: 'Computer Engineering' },
  { name: 'Student Name', role: 'Joint Secretary', department: 'IT Engineering' },
  { name: 'Student Name', role: 'Treasurer', department: 'Mechanical Engineering' },
  { name: 'Student Name', role: 'Cultural Secretary', department: 'EXTC Engineering' },
  { name: 'Student Name', role: 'Sports Secretary', department: 'Civil Engineering' },
  { name: 'Student Name', role: 'Technical Secretary', department: 'AI & Data Science' },
];

const activities = [
  {
    icon: Megaphone,
    title: 'Student Governance',
    description: 'Facilitating communication between students and administration, addressing student concerns and driving positive change across campus.',
  },
  {
    icon: Calendar,
    title: 'Event Organization',
    description: 'Planning and executing college festivals, technical events, cultural programs, and social initiatives throughout the academic year.',
  },
  {
    icon: Vote,
    title: 'Democratic Elections',
    description: 'Conducting transparent student elections to choose representatives who voice student opinions at institutional forums.',
  },
  {
    icon: Heart,
    title: 'Social Initiatives',
    description: 'Organizing blood donation drives, cleanliness campaigns, and community outreach programs for the betterment of society.',
  },
  {
    icon: UserCheck,
    title: 'Mentorship Programs',
    description: 'Senior students mentoring juniors to help them navigate academic challenges and campus life effectively.',
  },
  {
    icon: Star,
    title: 'Recognition & Awards',
    description: 'Acknowledging outstanding student achievements in academics, sports, cultural activities, and social service.',
  },
];

const StudentsCouncil: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="Student's Council"
        breadcrumbs={[
          { label: 'Student Life', href: '/student-life' },
          { label: "Student's Council" },
        ]}
      />

      {/* Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="reveal">
                <div className="bg-brand-light rounded-2xl aspect-[4/3] flex items-center justify-center border border-brand-blue/10">
                  <span className="text-sm font-semibold text-brand-blue/40 tracking-wide">
                    students-council.jpg
                  </span>
                </div>
              </div>

              <div className="reveal" style={{ transitionDelay: '0.1s' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-0.5 bg-brand-gold" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">
                    Voice of Students
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-6">
                  Student's Council
                </h2>
                <p className="text-slate-500 leading-relaxed mb-4">
                  The Student's Council at VCET is the elected body of students that represents the
                  student community in all matters related to campus life. It serves as a bridge
                  between the students and the college administration.
                </p>
                <p className="text-slate-500 leading-relaxed">
                  Through democratic elections, students choose their representatives who organize
                  events, address student concerns, and drive initiatives that enhance the overall
                  college experience for every student at VCET.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-gradient-to-br from-brand-dark via-brand-blue to-brand-navy">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="reveal text-center p-6"
                style={{ transitionDelay: `${0.1 * idx}s` }}
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-white/10 rounded-xl flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-brand-gold" />
                </div>
                <div className="text-2xl md:text-3xl font-display font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-widest text-white/50 font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-14 reveal">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
              Council Members
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Elected representatives who work tirelessly for the student community.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="reveal group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg p-6 text-center transition-all duration-500 hover:-translate-y-1 hover:border-brand-gold/30"
                style={{ transitionDelay: `${0.05 * idx}s` }}
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-brand-light rounded-full flex items-center justify-center group-hover:bg-brand-gold/10 transition-colors duration-300">
                  <Users className="w-8 h-8 text-brand-blue/40 group-hover:text-brand-gold transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-display font-bold text-brand-navy mb-1 group-hover:text-brand-blue transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-brand-gold mb-1">{member.role}</p>
                <p className="text-xs text-slate-400">{member.department}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-14 reveal">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
              Activities & Initiatives
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Driving student engagement and holistic development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {activities.map((activity, idx) => (
              <div
                key={idx}
                className="reveal group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand-gold/30"
                style={{ transitionDelay: `${0.05 * idx}s` }}
              >
                <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-gold/10 transition-colors duration-300">
                  <activity.icon className="w-6 h-6 text-brand-blue group-hover:text-brand-gold transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-display font-bold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors duration-300">
                  {activity.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default StudentsCouncil;
