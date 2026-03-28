import React from 'react';
import MMSLayout from '../../../components/mms/MMSLayout';

const semesterIRankers = [
  { student: 'VINAY MAHENDRA MAYEKAR', rank: '1st' },
  { student: 'VAKEKAR', rank: '2nd' },
  { student: 'SANKE MANSI SANJAY', rank: '3rd' },
];

const semesterIIRankers = [
  { student: 'VINAY MAHENDRA MAYEKAR', rank: '1st' },
  { student: 'SHAIKH SHIRFANA SAYEED', rank: '2nd' },
  { student: 'SANKE MANSI SANJAY', rank: '3rd' },
];

const semesterIIIRankers = [
  { student: 'VINAY MAHENDRA MAYEKAR', rank: '1st' },
  { student: 'RAUT NEHA MAHESH', rank: '2nd' },
  { student: 'SHAIKH SHIRFANA SAYEED', rank: '2nd' },
  { student: 'AMBOKAR ANKITA SUBHASH', rank: '3rd' },
  { student: 'PUJARI OMKAR BHASKAR', rank: '3rd' },
];

function RankersTable({ title, rows }: { title: string; rows: Array<{ student: string; rank: string }> }) {
  return (
    <section className="space-y-3">
      <h3 className="text-center text-3xl font-display font-bold text-brand-navy sm:text-4xl">{title}</h3>
      <div className="overflow-hidden border border-brand-navy/25 bg-white shadow-[0_14px_30px_-22px_rgba(11,61,145,0.5)]">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-white">
              <th className="w-[78%] border border-[#0a325f] bg-[#2d4f78] px-3 py-3 text-center text-sm font-bold sm:text-lg">NAME OF THE STUDENT</th>
              <th className="w-[22%] border border-[#0a325f] bg-[#2d4f78] px-3 py-3 text-center text-sm font-bold sm:text-lg">RANK</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={`${title}-${row.student}`} className="bg-[#efefef]">
                <td className="border border-slate-700/85 px-3 py-3 text-center text-sm text-slate-900 sm:text-[31px]">{row.student}</td>
                <td className="border border-slate-700/85 px-3 py-3 text-center text-sm text-slate-900 sm:text-[34px]">{row.rank}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function MMSStudentsLifeRankers() {
  return (
    <MMSLayout title="RANKERS">
      <section className="space-y-6">
        <h2 className="text-center text-4xl font-display font-bold text-brand-navy sm:text-5xl">RANKERS</h2>

        <div className="grid grid-cols-1 gap-7 xl:grid-cols-2">
          <div className="space-y-7">
            <RankersTable title="Semester I Rankers" rows={semesterIRankers} />
            <RankersTable title="Semester II Rankers" rows={semesterIIRankers} />
          </div>

          <div>
            <RankersTable title="Semester III Rankers" rows={semesterIIIRankers} />
          </div>
        </div>
      </section>
    </MMSLayout>
  );
}
