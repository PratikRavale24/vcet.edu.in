import React from 'react';
import MMSLayout from '../../../components/mms/MMSLayout';

const documentPoints = [
  'Provisional allotment letter issue by competent authority (two copies)',
  'Receipt cum acknowledgement copy issued by scrutiny centers (sc copy) (two copies)',
  'Receipt cum acknowledgement of seat acceptance from competent authority',
  'S.S.C. Marksheet',
  'H.S.C. Marksheet/Diploma Marksheet',
  'All years Degree Marksheets',
  'Score card of entrance exam (CET/CAT/CMAT/MAT/XAT/GMAT)',
  'Degree Leaving Certificate',
  'Nationality certificate (if nationality not mentioned on leaving certificate)',
  'Domicile certificate (if birthplace is out of Maharashtra)',
  'Caste Certificate(for all categories except "open")',
  'Caste validity certificate (for all categories except "open")',
  'Non-creamy layer certificate (for all categories except "OPEN", "SC", "ST")',
  'Eligibility certificate (other than Maharashtra Board students)',
  'Migration certificate (other than Maharashtra Board students)',
  'Defence certificate (for defence category students)',
  'Gap certificate (if applicable)',
  'Income certificate issued by tahasildar (for the students)',
  'Physically handicap certificate (if applicable)',
  'Eligibility certificate for economically weaker section (EWS)',
  'Three recent passport size photographs',
];

export default function MMSDocumentsRequired() {
  return (
    <MMSLayout title="Documents Required">
      <div className="space-y-4">
        <article className="space-y-4 border border-slate-200 bg-white p-5 shadow-sm md:p-6">
          <h2 className="text-2xl font-display font-bold text-[#0d2d56] md:text-3xl">Documents Required</h2>
          <p className="border border-slate-200 bg-slate-50 p-3 text-[16px] leading-7 text-slate-700">
            Original one set of self attested documents only
          </p>

          <ol className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-3">
            {documentPoints.map((point, index) => (
              <li key={point} className="border border-slate-200 bg-slate-50 p-3 text-[15px] leading-6 text-slate-700 md:text-[16px] md:leading-7">
                <span className="mr-2 font-bold text-[#0d2d56]">{index + 1}.</span>
                {point}
              </li>
            ))}
          </ol>
        </article>
      </div>
    </MMSLayout>
  );
}
