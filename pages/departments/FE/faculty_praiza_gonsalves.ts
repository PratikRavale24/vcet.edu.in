import type { FacultyData } from '../csds/FacultyProfileView';

const faculty: FacultyData = {
  name: 'Ms. Praiza Gonsalves',
  designation: 'Asst. Prof.',
  department: 'First Year Engineering',
  dateOfJoining: '08/10/2018',
  email: 'praiza.gonsalves@vcet.edu.in',
  experienceYears: '6.5',
  photo: '/images/departments/fe/faculty/praiza-gonsalves.jpg',
  qualifications: ['M.Sc. (Mathematics) - First Class'],
  memberships: [{ label: 'ISTE (Life Member)' }],
  eResources: [
    { title: 'EM-I', url: 'https://drive.google.com/drive/folders/10qLEFg9ScOm4mA9xAqb7FNlTsXjpSe8P' },
    { title: 'EM-II', url: 'https://drive.google.com/drive/folders/1uIz9HSr5SBS5HJApuTT-E6bPzbdcdJ9u' },
    { title: 'EM-III', url: 'https://drive.google.com/drive/folders/1sSejISSa4bfCWeiTPDJyE77vVCrMMFVr' },
    { title: 'EM-IV', url: 'https://drive.google.com/drive/folders/1bB5w0EzkSOJVNZpssqasRkodnP6IYkYs' },
  ],
};

export default faculty;
