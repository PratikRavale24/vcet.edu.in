import type { FacultyData } from '../csds/FacultyProfileView';

const faculty: FacultyData = {
  name: "Dr. Dinesh Patil",
  designation: "Associate Professor",
  department: "Computer Engineering",
  dateOfJoining: "01 July 2022",
  email: "dinesh.patil@vcet.edu.in",
  experienceYears: "19",
  papersPublished: "12",
  photo: "faculty/ce/dinesh-patil.jpg",
  qualifications: [
    "PhD (Computer Engineering)",
    "M.E. (Computer Science & Engineering)",
    "B.E. (Computer Technology)",
  ],
  specialization: [
    "Digital Forensics",
    "Computer Security",
  ],
  patents: [
    { title: "Published IPR / Patent - details to be updated" },
  ],
  memberships: [
    "ISTE - LM-50887",
  ],
  youtube: [
    {
      href: "https://youtube.com/channel/UCNs5JLgWznP5xobpdI6OIng",
      name: "Dr. Dinesh Patil",
      sub: "Digital Forensics & Computer Security",
    },
  ],
};

export default faculty;

