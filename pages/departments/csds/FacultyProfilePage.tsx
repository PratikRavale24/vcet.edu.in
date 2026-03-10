import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PageLayout from '../../../components/PageLayout';
import { csdsfaculty } from './facultyProfiles';

/** Renders a string that may contain URLs/emails as clickable links */
const LinkedText: React.FC<{ text: string }> = ({ text }) => {
  const urlRegex = /(https?:\/\/[^\s,]+|www\.[^\s,]+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
  const parts = text.split(urlRegex);
  return (
    <>
      {parts.map((part, i) => {
        if (/^https?:\/\//.test(part) || /^www\./.test(part)) {
          const href = part.startsWith('http') ? part : `https://${part}`;
          return (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer"
              className="text-[#1a4b7c] underline hover:text-[#fdb813] transition-colors break-all">
              {part}
            </a>
          );
        }
        if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(part)) {
          return (
            <a key={i} href={`mailto:${part}`}
              className="text-[#1a4b7c] underline hover:text-[#fdb813] transition-colors">
              {part}
            </a>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
};

const Row: React.FC<{ label: string; value: string; shade: boolean }> = ({ label, value, shade }) => {
  if (!value) return null;
  return (
    <tr className={shade ? 'bg-gray-50' : 'bg-white'}>
      <td className="w-52 px-5 py-4 align-top font-bold text-[#1a4b7c] text-sm border border-gray-200 leading-snug">
        {label}
      </td>
      <td className="px-5 py-4 align-top text-sm text-gray-700 border border-gray-200 leading-relaxed">
        {value.split('\n').map((line, i, arr) => (
          <React.Fragment key={i}>
            <LinkedText text={line} />
            {i < arr.length - 1 && <br />}
          </React.Fragment>
        ))}
      </td>
    </tr>
  );
};

export default function FacultyProfilePage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const profile = csdsfaculty.find((f) => f.slug === slug);

  if (!profile) {
    return (
      <PageLayout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
          <h2 className="text-2xl font-bold text-[#1a4b7c] mb-4">Faculty profile not found.</h2>
          <button
            onClick={() => navigate('/cs-data-science')}
            className="mt-4 inline-flex items-center gap-2 text-sm text-[#1a4b7c] hover:text-[#fdb813] font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Department
          </button>
        </div>
      </PageLayout>
    );
  }

  const rows: { label: string; key: keyof typeof profile }[] = [
    { label: 'Designation',                      key: 'designation' },
    { label: 'Department',                        key: 'department' },
    { label: 'Date of Birth',                     key: 'dob' },
    { label: 'Date of Joining the Institution',   key: 'doj' },
    { label: 'Qualifications with Class/Grade',   key: 'qualifications' },
    { label: 'Specialization',                    key: 'specialization' },
    { label: 'Email Address',                     key: 'email' },
    { label: 'Total Experience in Years',         key: 'experience' },
    { label: 'Papers Published',                  key: 'papersPublished' },
    { label: 'P.G. Projects Guided',              key: 'pgProjectsGuided' },
    { label: 'Books Published/ IPRs/Patents',     key: 'booksPatents' },
    { label: 'Grants Fetched',                    key: 'grants' },
    { label: 'Professional Memberships',          key: 'professionalMemberships' },
    { label: 'Consultancy Activities',            key: 'consultancy' },
    { label: 'Patent',                            key: 'patent' },
    { label: 'Awards',                            key: 'awards' },
    { label: 'Interaction with Professional Institution', key: 'interactionWithInstitution' },
    { label: 'Website Link',                      key: 'websiteLink' },
    { label: 'In-Charge',                         key: 'inCharge' },
    { label: 'Research Link',                     key: 'researchLink' },
    { label: 'Youtube channel link',              key: 'youtubeChannel' },
    { label: 'E-resources',                       key: 'eResources' },
  ];

  return (
    <PageLayout>
      <div className="w-full bg-white min-h-screen font-sans">

        {/* Dark header banner */}
        <div className="bg-[#1a2a4a] py-12 px-6 flex flex-col items-center">
          {/* Back link */}
          <div className="w-full max-w-3xl mb-6">
            <button
              onClick={() => navigate('/cs-data-science')}
              className="inline-flex items-center gap-2 text-sm text-blue-200/70 hover:text-white transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Department
            </button>
          </div>

          {/* Photo */}
          <div className="w-32 h-36 overflow-hidden mb-5 shadow-lg">
            <img
              src={profile.photo}
              alt={profile.name}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Name */}
          <h1 className="text-2xl font-bold text-[#fdb813] text-center">{profile.name}</h1>
        </div>

        {/* Profile table */}
        <div className="max-w-3xl mx-auto px-4 py-12">
          <table className="w-full border-collapse text-left">
            <tbody>
              {rows.map(({ label, key }, i) => (
                <Row
                  key={label}
                  label={label}
                  value={String(profile[key] ?? '')}
                  shade={i % 2 === 1}
                />
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </PageLayout>
  );
}
