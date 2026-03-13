import type { FacultyData } from '../csds/FacultyProfileView';

const faculty: FacultyData = {
  name: "Dr. Megha Trivedi",
  designation: "Associate Professor & Head of Department",
  department: "Computer Engineering",
  dateOfJoining: "01 August 2002",
  email: "megha.trivedi@vcet.edu.in",
  experienceYears: "21",
  papersPublished: "14",
  photo: "faculty/ce/megha-trivedi.jpg",
  qualifications: [
    "Ph.D. (IIT Bombay)",
    "M.E. (VJTI)",
  ],
  roles: [
    { icon: "fa-crown", label: "Head of Department (HOD)" },
  ],
  patents: [
    { title: "Published Patent 1 – details to be updated" },
    { title: "Published Patent 2 – details to be updated" },
  ],
  memberships: [
    "ISTE",
  ],
  youtube: [
    {
      href: "https://www.youtube.com/channel/UCKRXFTJ8QESgSNCyQTfCvEg/featured",
      name: "Dr. Megha Trivedi",
      sub: "Computer Engineering – Educational Content",
    },
  ],
  eResources: [
    {
      title: "Machine Learning – Google Classroom",
      icon: "fa-robot",
      url: "https://classroom.google.com",
      code: "qq22zjz",
    },
  ],
};

export default faculty;
