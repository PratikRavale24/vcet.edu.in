import type { FacultyData } from '../csds/FacultyProfileView';

const faculty: FacultyData = {
  name: 'Mr. Arbaz Kazi',
  designation: 'Asst. Prof.',
  department: 'Civil Engineering',
  dateOfBirth: '25/01/1991',
  dateOfJoining: '06/07/2015',
  email: 'arbaz.kazi@vcet.edu.in',
  experienceYears: '10',
  papersPublished: '14',
  photo: '/images/departments/civil/faculty/arbaz-kazi.jpg',
  qualifications: ['M.E.'],
  specialization: ['Construction Engineering and Management'],
  memberships: [{ label: 'ISTE' }, { label: 'IGBC' }],
  awards: [
    { title: 'Best Paper Award at VNC TASU 2020 for Application of AHP in Construction Works' },
    { title: 'Best Paper Award at IC-AMCE 2023 for Suitability Study of Foundations for On-shore & Off-shore Wind Turbine' },
    { title: 'Completed NPTEL Online Certificate Course on Geotechnical Engineering-II (August 2021)' },
  ],
  websites: [{ href: 'https://gtearchives.wordpress.com/', name: 'Website', sub: 'gtearchives.wordpress.com' }],
  youtube: [{ href: 'https://www.youtube.com/channel/UCfpmWrOCbpuW8vdHR0xHK0w', name: 'Mr. Arbaz Kazi', sub: 'YouTube Channel' }],
  eResources: [{ title: 'SlideShare', url: 'https://www.slideshare.net/ArbazKazi2' }],
};

export default faculty;
