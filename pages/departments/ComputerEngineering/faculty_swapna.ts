import type { FacultyData } from '../csds/FacultyProfileView';

const faculty: FacultyData = {
  name: "Dr. Swapna Borde",
  designation: "Assistant Professor",
  department: "Computer Engineering",
  dateOfJoining: "30 July 2010",
  email: "swapna.borde@vcet.edu.in",
  experienceYears: "26",
  papersPublished: "23",
  photo: "faculty/ce/swapna-borde.jpg",
  qualifications: [
    "Ph.D. (Engineering)",
  ],
  specialization: [
    "Image Processing",
    "Data Mining",
  ],
  memberships: [
    "ISTE",
  ],
  eResources: [
    {
      title: "Machine Learning - Google Classroom",
      icon: "fa-robot",
      url: "https://classroom.google.com",
      code: "qq22zjz",
    },
    {
      title: "Data Warehousing and Mining - Google Classroom",
      icon: "fa-database",
      url: "https://classroom.google.com",
      code: "fofrxzz",
    },
  ],
};

export default faculty;

