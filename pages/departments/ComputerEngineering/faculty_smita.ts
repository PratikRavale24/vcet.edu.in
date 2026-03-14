import type { FacultyData } from '../csds/FacultyProfileView';

const faculty: FacultyData = {
  name: "Ms. Smita Jawale",
  designation: "Assistant Professor & Deputy HOD",
  department: "Computer Engineering",
  dateOfJoining: "01 October 2003",
  email: "smita.jawale@vcet.edu.in",
  experienceYears: "19",
  papersPublished: "08",
  photo: "faculty/ce/smita-jawale.jpg",
  qualifications: [
    "M.E. (Computer Engineering) - First Class",
  ],
  specialization: [
    "Database Management System",
    "Image Processing",
  ],
  roles: [
    { icon: "fa-user-tie", label: "Deputy HOD" },
  ],
  books: [
    { title: "Textbook - title to be updated" },
    { title: "Textbook - title to be updated" },
    { title: "Textbook - title to be updated" },
    { title: "Textbook - title to be updated" },
    { title: "Textbook - title to be updated" },
    { title: "Textbook - title to be updated" },
  ],
  memberships: [
    { label: "Life Member - ISTE", fullName: "Indian Society for Technical Education" },
  ],
  eResources: [
    {
      title: "Advanced Database Management System - Google Classroom",
      icon: "fa-database",
      url: "https://classroom.google.com/u/2/w/Mzc5MDk0ODA4NTQ3/tc/Mzc5MDk0ODE2Mjc1",
      code: "hd4zxlf",
    },
  ],
};

export default faculty;

