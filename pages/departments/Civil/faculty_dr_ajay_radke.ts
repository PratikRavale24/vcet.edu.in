import type { FacultyData } from '../csds/FacultyProfileView';

const faculty: FacultyData = {
  name: 'Dr. Ajay Radke',
  designation: 'Professor & HOD',
  department: 'Civil Engineering',
  dateOfJoining: '30/12/2021',
  email: 'ajay.radke@vcet.edu.in',
  experienceYears: '30',
  papersPublished: '07',
  photo: '/images/departments/civil/faculty/dr-ajay-radke.jpg',
  qualifications: ['Ph.D. (Civil)'],
  specialization: ['Structural Engineering'],
  publications: [{ title: 'Conference papers presented: 09' }],
  books: [{ title: 'Books Published / IPRs / Patents: 03 Books' }],
  memberships: [
    { label: 'Fellow - Institute of Engineers' },
    { label: 'Life Member - ISTE' },
    { label: 'Life Member - IIIE' },
    { label: 'Life Member - IAE' },
    { label: 'Life Member - InSc.' },
  ],
  consultancy: [{ title: 'Empanelled Structural Engineer of MCGM & NMMC. Consultancy provided for over 100 structures.' }],
};

export default faculty;
