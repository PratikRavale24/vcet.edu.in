import type { FacultyData } from '../csds/FacultyProfileView';

const faculty: FacultyData = {
  name: 'Ms. Shraddha Gosavi',
  designation: 'Asst. Prof.',
  department: 'First Year Engineering',
  dateOfBirth: '07/07/1982',
  dateOfJoining: '02/01/2007',
  email: 'shraddha.gosavi@vcet.edu.in',
  experienceYears: '17',
  papersPublished: '05',
  photo: '/images/departments/fe/faculty/shraddha-gosavi.jpg',
  qualifications: ['M.E. (Electronics and Telecommunication)'],
  specialization: ['Networking', 'Cryptography', 'Robotics', 'Database Management'],
  publications: [{ title: 'Conference papers presented: 02' }],
  memberships: [{ label: 'IETE' }, { label: 'ISTE' }, { label: 'IEEE SIGHT' }],
  websites: [
    { href: 'https://womanbyheartcom.wordpress.com/author/shraddhagosavi/', name: 'Website', sub: 'womanbyheartcom.wordpress.com' },
    { href: 'https://www.youtube.com/channel/UCtCEKWbGsIr_G5sBs4bDT9g/videos', name: 'YouTube Channel 1', sub: 'youtube.com' },
    { href: 'https://www.youtube.com/channel/UCU9kbL-199JGX6MwuhqS5Aw', name: 'YouTube Channel 2', sub: 'youtube.com' },
  ],
};

export default faculty;
