import type { FacultyData } from "./FacultyProfileView";

const faculty: FacultyData = {
  name: "Ms. Leena Raut",
  designation: "Assistant Professor",
  department: "Computer Science & Engineering (Data Science)",
  dateOfJoining: "27 June 2023",
  email: "leena.raut@vcet.edu.in",
  experienceYears: "22",
  papersPublished: "04",
  photo: "faculty/leena-raut.jpg",
  qualifications: [
    "M.E. (Information Technology)",
  ],
  memberships: [
    "LM 104089 – ISTE",
  ],
  eResources: [
    {
      title: "Database Management System — Google Classroom",
      icon: "fa-database",
      url: "https://classroom.google.com",
      code: "Contact faculty for classroom code",
    },
    {
      title: "Data Structures — Google Classroom",
      icon: "fa-code-branch",
      url: "https://classroom.google.com",
      code: "Contact faculty for classroom code",
    },
    {
      title: "Computer Networks — Google Classroom",
      icon: "fa-network-wired",
      url: "https://classroom.google.com",
      code: "Contact faculty for classroom code",
    },
  ],
};

export default faculty;
