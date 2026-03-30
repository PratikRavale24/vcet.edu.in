import type { FacultyData } from '../csds/FacultyProfileView';

const faculty: FacultyData = {
  name: "Mr. Sunil Katkar",
  designation: "Assistant Professor",
  department: "Computer Engineering",
  dateOfJoining: "15 July 2005",
  email: "sunil.katkar@vcet.edu.in",
  experienceYears: "18",
  papersPublished: "9",
  photo: "faculty/ce/sunil-katkar.jpg",
  qualifications: [
    "M.E. - First Class",
  ],
  specialization: [
    "Data Compression",
    "Computer Graphics",
  ],
  patents: [
    { title: "Published Patent 1 - details to be updated" },
    { title: "Published Patent 2 - details to be updated" },
  ],
  memberships: [
    "ISTE - LM 128571",
  ],
  eResources: [
    {
      title: "Computer Graphics - Google Classroom",
      icon: "fa-paint-brush",
      url: "https://classroom.google.com",
      code: "u7oi3ta",
    },
  ],
};

export default faculty;

