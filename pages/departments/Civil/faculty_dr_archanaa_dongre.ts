import type { FacultyData } from '../csds/FacultyProfileView';

const faculty: FacultyData = {
  name: 'Dr. Archanaa Dongre',
  designation: 'Associate Professor',
  department: 'Civil Engineering',
  dateOfJoining: '23/07/2024',
  email: 'archanaa.dongre@vcet.edu.in',
  experienceYears: '19',
  papersPublished: '45',
  photo: '/images/departments/civil/faculty/dr-archanaa-dongre.jpg',
  qualifications: ['Ph.D. in Civil Engineering', 'MS from IIIT Hyderabad'],
  specialization: ['Structural Engineering', 'Earthquake Engineering', 'Building Materials'],
  publications: [
    { title: 'Journal publications: 8 (Includes 2 SCI, 6 Scopus)' },
    { title: 'Book chapters in Springer: 2' },
  ],
  patents: [{ title: '2 patents submitted and 1 in process' }],
  books: [{ title: '1 book in process of publication' }],
  memberships: [
    { label: 'American Society of Civil Engineers (MASCE)' },
    { label: 'Earthquake Engineering Research Institute (USA)' },
    { label: 'Institution of Engineers (MIE)' },
    { label: 'Indian Association of Structural Engineers' },
    { label: 'Indian Society for Technical Education (ISTE)' },
  ],
  awards: [
    { title: 'Felicitation for remarkable research publication at VJTI, Matunga' },
    { title: 'Featured on Indian Concrete Journal website for journal reviewer contribution' },
    { title: 'Best Paper Award at ICEE-2017, Padang, Indonesia (Seismic Analysis of a Residential Building with Communication Tower)' },
    { title: 'Best Paper Award at ICEE-2017, Padang, Indonesia (Effect of Pylon Shape on Seismic Behaviour of Cable-Stayed Bridges)' },
    { title: 'Best Paper Award at ICRIET 2017, Hyderabad (Comparative Study of Analysis of Slab)' },
    { title: 'Felicitation on Teachers Day 2016 and Women\'s Day 2018 for contribution as HOD' },
  ],
  websites: [{ href: 'https://vidwan.inflibnet.ac.in/profile/534944', name: 'Vidwan ID', sub: 'vidwan.inflibnet.ac.in' }],
  youtube: [{ href: 'https://youtu.be/BH9vcAD_wuM', name: 'Dr. Archanaa Dongre', sub: 'YouTube Link' }],
  eResources: [{ title: 'E-Resources', url: 'https://youtu.be/vVkIHrcvZfU?si=VKlyn8OKoXATRU-c' }],
};

export default faculty;
