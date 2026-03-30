import type { FacultyData } from '../csds/FacultyProfileView';

const faculty: FacultyData = {
  name: 'Ms. Puja Ghadi',
  designation: 'Asst. Prof.',
  department: 'Civil Engineering',
  dateOfBirth: '03/04/1991',
  dateOfJoining: '26/07/2016',
  email: 'puja.ghadi@vcet.edu.in',
  experienceYears: '09',
  papersPublished: '10',
  photo: '/images/departments/civil/faculty/puja-ghadi.jpg',
  qualifications: ['M.E. (Civil and Environmental)'],
  specialization: ['Water and Sewage Treatment', 'Waste Management', 'Environmental Engineering'],
  publications: [{ title: 'Conference papers presented: 03' }],
  memberships: [{ label: 'Indian Society for Technical Education (ISTE)' }, { label: 'Indian Water Works Association (IWWA)' }],
  awards: [
    { title: 'IGBC Accredited Faculty after ATAL FDP on Green Buildings and Built Environment' },
    { title: 'Guided research proposal in 15th Inter-Collegiate Avishkar Research Convention 2020-2021' },
    { title: 'B.E. project under guidance secured 1st Runner Up at NIRMITEE 2021' },
    { title: 'B.E. projects under guidance won VNPS prizes in 2017, 2018 and 2019' },
    { title: 'Qualified PET of Mumbai University (2017) and Pune University (2021)' },
    { title: 'Certified course in ArcGIS (2020)' },
    { title: 'Certified course in Primavera by CESA (2011)' },
    { title: 'Certified course in GIS from AIILSG Pune (2015)' },
    { title: 'College topper in Masters in Civil and Environmental Engineering' },
    { title: 'Gold Medalist in 7th National Science Olympiad at school level' },
  ],
  websites: [{ href: 'https://pujatlp.wordpress.com/', name: 'Website', sub: 'pujatlp.wordpress.com' }],
  youtube: [{ href: 'https://www.youtube.com/channel/UC3xLqkMym6UWZ_1hKqYCItA', name: 'Ms. Puja Ghadi', sub: 'YouTube Channel' }],
  eResources: [
    { title: 'EE-II Google Classroom Class Code: k7xdiht' },
    { title: 'EE-II Virtual Lab: http://vlabs.iitb.ac.in/vlabs-dev/labs/nitk_labs/Environmental_Engineering_1/' },
    { title: 'EE-II E-Book', url: 'https://elibrary.in.pearson.com/' },
    { title: 'EE-II NPTEL Lectures and Notes: https://nptel.ac.in/courses/105/105/105105178/' },
    { title: 'EE-II NPTEL Lectures and Notes: https://nptel.ac.in/courses/105/105/105105048/' },
    { title: 'TRE-II Google Classroom Class Code: 3xxjhyl' },
    { title: 'TRE-II E-Book', url: 'https://elibrary.in.pearson.com/' },
    { title: 'TRE-II NPTEL Lectures and Notes: https://nptel.ac.in/courses/105/107/105107123/' },
  ],
};

export default faculty;
