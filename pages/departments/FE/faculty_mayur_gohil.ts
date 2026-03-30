import type { FacultyData } from '../csds/FacultyProfileView';

const faculty: FacultyData = {
  name: 'Mr. Mayur Gohil',
  designation: 'Asst. Prof.',
  department: 'First Year Engineering',
  dateOfJoining: '01/02/2021',
  email: 'mayur.gohil@vcet.edu.in',
  experienceYears: '9',
  papersPublished: '0',
  photo: '/images/departments/fe/faculty/mayur-gohil.jpg',
  qualifications: ['M.A. (Mathematics)', 'MH-SET 2023'],
  specialization: ['Mathematics and Statistics'],
  books: [{ title: 'Linear Algebra using Python' }],
  youtube: [{ href: 'https://www.youtube.com/user/mayurgo10/featured', name: 'Mr. Mayur Gohil', sub: 'YouTube Channel' }],
  eResources: [
    { title: 'Sem-I Notes', url: 'https://drive.google.com/file/d/1eKadSSlDet877q2jFNRiMjiqwpLbivCN/view?u' },
    { title: 'Sem-II Notes', url: 'https://drive.google.com/file/d/1eKadSSlDet877q2jFNRiMjiqwpLbivCN/view?u' },
    { title: 'CS EXTC, Year 2019-20', url: 'https://classroom.google.com/c/MTA3NTk2NDkwMzYx' },
    { title: 'CS MECH B, Year 2019-20', url: 'https://classroom.google.com/c/NjkyODMxMjg5OTBa' },
    { title: 'CS DIV F, Year 2020-21', url: 'https://classroom.google.com/c/MzM0NjQzNzUwMTY2?cjc=nk7i6z' },
    { title: 'CS DIV C, Year 2020-21', url: 'https://classroom.google.com/c/MzM0NjY0MDgwNzY3?cjc=2nfev3' },
    { title: 'CS MECH A, Year 2020-21', url: 'https://classroom.google.com/c/MzM0NjQzNzUwMTY2?cjc=nk7i6zu' },
  ],
};

export default faculty;
