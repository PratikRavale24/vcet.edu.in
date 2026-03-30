import type { FacultyData } from '../csds/FacultyProfileView';

const faculty: FacultyData = {
  name: 'Dr. Pradip Gulbhile',
  designation: 'Asst. Prof.',
  department: 'First Year Engineering',
  dateOfJoining: '07/08/2008',
  email: 'pradip.gulbhile@vcet.edu.in',
  experienceYears: '12',
  papersPublished: '03',
  photo: '/images/departments/fe/faculty/dr-pradip-gulbhile.jpg',
  qualifications: ['Ph.D. (Awarded)', 'M.Phil (B+)', 'M.A. (A)'],
  books: [
    { title: 'One book in publishing process (Fiction)' },
    { title: 'Copyright work completed' },
  ],
  roles: [{ label: 'Executive Member - English Language Teachers Association of India (Mumbai Chapter)' }],
  awards: [{ title: 'Best Research Paper Award and First Prize at Avishkar 2017 for New Codes to Communicate' }],
  eResources: [{ title: 'Professional Communication and Ethics-I', url: 'https://drive.google.com/drive/folders/1FuqOUCPW_RvkxTlfLlavH3qj-KfYYCWj' }],
};

export default faculty;
