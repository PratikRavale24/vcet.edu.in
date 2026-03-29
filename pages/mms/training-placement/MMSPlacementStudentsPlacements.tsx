import React from 'react';
import { ImageIcon } from 'lucide-react';
import MMSLayout from '../../../components/mms/MMSLayout';
import { PlacementDataTableCard } from './MMSPlacementShared';

const placementsRows = [
  {
    srNo: 1,
    student: 'Vidya Totre',
    specialization: 'HR',
    company: 'Parle Global Technologies pvt Ltd',
    src: '/images/Departments/MMS(MBA)/Training And Placement/Placement/Student_Placement/Placement_Students_Placement_-_Vidya_Totre.png',
  },
  {
    srNo: 2,
    student: 'Shruti Lad',
    specialization: 'HR',
    company: 'Parle Elizabeth Tools Pvt Ltd',
    src: '/images/Departments/MMS(MBA)/Training And Placement/Placement/Student_Placement/Placement_Students_Placement_-_Shruti_Lad.png',
  },
  {
    srNo: 3,
    student: 'Ganesh Mane',
    specialization: 'Marketing',
    company: 'Janyu Technologies',
    src: '/images/Departments/MMS(MBA)/Training And Placement/Placement/Student_Placement/Placement_Students_Placement_-_Ganesh_Mane.png',
  },
  {
    srNo: 4,
    student: 'Bhoomika Mahapadi',
    specialization: 'Marketing',
    company: 'Janyu Technologies',
    src: '/images/Departments/MMS(MBA)/Training And Placement/Placement/Student_Placement/Placement_Students_Placement_-_Bhoomika_Mahapadi.png',
  },
  {
    srNo: 5,
    student: 'Janhvi Rao',
    specialization: 'Finance',
    company: 'Parle Elizabeth Tools Pvt Ltd',
    src: '/images/Departments/MMS(MBA)/Training And Placement/Placement/Student_Placement/Placement_Students_Placement_-_Janhvi_Rao.jpg',
  },
  {
    srNo: 6,
    student: 'Ravi Shankar',
    specialization: 'Finance',
    company: 'Tvs Motors-Self Placed',
    src: '/images/Departments/MMS(MBA)/Training And Placement/Placement/Student_Placement/Placement_Students_Placement_-_Ravi_Shankar.png',
  },
];

export default function MMSPlacementStudentsPlacements() {
  return (
    <MMSLayout title="Student Placements">
      <PlacementDataTableCard title="Student Placements">
        <div className="overflow-hidden border border-brand-navy/20 bg-white">
          <table className="w-full table-fixed border-collapse">
            <thead>
              <tr className="text-white">
                <th className="w-[9%] border border-[#0a325f] bg-[#2d4f78] px-2 py-2 text-center text-sm font-bold sm:text-base">Sr.No</th>
                <th className="w-[35%] border border-[#0a325f] bg-[#2d4f78] px-2 py-2 text-center text-sm font-bold sm:text-base">Name of the Student</th>
                <th className="w-[18%] border border-[#0a325f] bg-[#2d4f78] px-2 py-2 text-center text-sm font-bold sm:text-base">Specialization</th>
                <th className="w-[38%] border border-[#0a325f] bg-[#2d4f78] px-2 py-2 text-center text-sm font-bold sm:text-base">Company</th>
              </tr>
            </thead>
            <tbody>
              {placementsRows.map((row) => (
                <tr key={`${row.srNo}-${row.student}`} className="bg-[#e6e6e6] align-middle">
                  <td className="border border-slate-700/85 px-2 py-2 text-center text-sm text-slate-900 sm:text-base">{row.srNo}</td>
                  <td className="border border-slate-700/85 px-2 py-2 text-slate-900">
                    <div className="flex items-center gap-2 overflow-hidden">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-brand-blue/30 bg-white sm:h-11 sm:w-11 overflow-hidden">
                        {row.src ? (
                          <img src={row.src} alt={row.student} className="h-full w-full object-cover" />
                        ) : (
                          <ImageIcon className="h-4 w-4 text-brand-blue/60 sm:h-5 sm:w-5" />
                        )}
                      </div>
                      <p className="overflow-hidden whitespace-nowrap text-ellipsis text-sm leading-tight sm:text-base">{row.student}</p>
                    </div>
                  </td>
                  <td className="border border-slate-700/85 px-2 py-2 text-center text-xs leading-tight text-slate-900 sm:text-sm"> 
                    <span className="block overflow-hidden whitespace-nowrap text-ellipsis">{row.specialization}</span>
                  </td>
                  <td className="border border-slate-700/85 px-2 py-2 text-xs leading-tight text-slate-900 sm:text-sm">
                    <span className="block overflow-hidden whitespace-nowrap text-ellipsis">{row.company}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </PlacementDataTableCard>
    </MMSLayout>
  );
}
