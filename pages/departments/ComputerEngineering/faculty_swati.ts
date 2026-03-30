import type { FacultyData } from '../csds/FacultyProfileView';

const faculty: FacultyData = {
  name: "Dr. Swati Varma",
  designation: "Assistant Professor",
  department: "Computer Engineering",
  dateOfJoining: "20 July 2009",
  email: "swati.varma@vcet.edu.in",
  experienceYears: "15.5",
  industryYears: "1.5",
  papersPublished: "10",
  photo: "faculty/ce/swati-varma.jpg",
  qualifications: [
    "Ph.D.",
    "M.E. (Computers) - First Class with Distinction",
  ],
  specialization: [
    "Deep Learning",
    "Machine Learning",
    "Software Engineering",
  ],
  books: [
    {
      title: "Software Engineering",
      subtitle: "Tech-Neo Publications",
    },
  ],
  isbnNumbers: [
    "978-93-90904-95-2",
  ],
  memberships: [
    "CSI",
    "ISTE",
  ],
  websites: [
    {
      href: "https://swativarma.home.blog/",
      icon: "fa-blog",
      name: "Personal Blog",
      sub: "swativarma.home.blog",
    },
  ],
  youtube: [
    {
      href: "https://www.youtube.com/channel/UCCWPB3mGpJvU6BXzWUlljsg",
      name: "Dr. Swati Varma",
      sub: "Educational Channel",
    },
  ],
  eResources: [
    {
      title: "C Programming Notes",
      icon: "fa-terminal",
      url: "https://swativarma.home.blog/cp/",
    },
    {
      title: "Software Engineering & Project Management Notes",
      icon: "fa-cogs",
      url: "https://swativarma.home.blog/sepm/",
    },
  ],
};

export default faculty;

