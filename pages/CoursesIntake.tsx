import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { GraduationCap, BookOpen, Briefcase } from 'lucide-react';

const ugCourses = [
  { course: 'Computer Engineering', intake: 180 },
  { course: 'Computer Science and Engineering (Data Science)', intake: 180 },
  { course: 'Information Technology', intake: 60 },
  { course: 'Artificial Intelligence and Data Science', intake: 120 },
  { course: 'Mechanical Engineering', intake: 60 },
  { course: 'Electronics and Telecommunication Engineering', intake: 60 },
  { course: 'Civil Engineering', intake: 60 },
];

const pgCourses = [
  { course: 'M.E. Civil (Structural Engineering)', intake: 24 },
  { course: 'M.E. (Computer Engineering)', intake: 24 },
];

const mgmtCourses = [
  { course: 'Master Of Management Studies (MMS)', intake: 120 },
];

interface CourseTableProps {
  title: string;
  icon: React.ElementType;
  courses: { course: string; intake: number }[];
  delay: string;
  accent: string;
}

const CourseTable: React.FC<CourseTableProps> = ({ title, icon: Icon, courses, delay, accent }) => {
  const totalIntake = courses.reduce((sum, c) => sum + c.intake, 0);

  return (
    <div
      className="reveal bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
      style={{ transitionDelay: delay }}
    >
      {/* Header */}
      <div className={`${accent} px-6 py-5 flex items-center gap-4`}>
        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-display font-bold text-white">{title}</h3>
          <p className="text-white/70 text-sm mt-0.5">Total Intake: {totalIntake}</p>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-brand-light">
              <th className="text-left px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-brand-navy/70">
                Course
              </th>
              <th className="text-center px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-brand-navy/70">
                Intake
              </th>
            </tr>
          </thead>
          <tbody>
            {courses.map((item, idx) => (
              <tr
                key={idx}
                className={`border-b border-gray-50 hover:bg-brand-gold/5 transition-colors duration-200 ${
                  idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'
                }`}
              >
                <td className="px-6 py-4 text-sm font-medium text-slate-700">{item.course}</td>
                <td className="px-6 py-4 text-center">
                  <span className="inline-flex items-center justify-center min-w-[3rem] px-3 py-1 bg-brand-blue/10 text-brand-blue font-bold text-sm rounded-full">
                    {item.intake}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const CoursesIntake: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="Courses and Intake"
        breadcrumbs={[
          { label: 'Admission', href: '/admission' },
          { label: 'Courses and Intake' },
        ]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Section Intro */}
          <div className="max-w-3xl mx-auto text-center mb-14 reveal">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
              Programs Offered
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              VCET offers a diverse range of undergraduate, postgraduate, and management programs
              designed to shape future-ready professionals.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-10">
            <CourseTable
              title="Under Graduate Program (UG)"
              icon={GraduationCap}
              courses={ugCourses}
              delay="0.1s"
              accent="bg-gradient-to-r from-brand-blue to-brand-navy"
            />

            <CourseTable
              title="Post Graduate Program (PG)"
              icon={BookOpen}
              courses={pgCourses}
              delay="0.2s"
              accent="bg-gradient-to-r from-brand-navy to-brand-dark"
            />

            <CourseTable
              title="Management Course"
              icon={Briefcase}
              courses={mgmtCourses}
              delay="0.3s"
              accent="bg-gradient-to-r from-brand-gold to-yellow-600"
            />
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CoursesIntake;
