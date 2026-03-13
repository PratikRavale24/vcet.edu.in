import type { FacultyData } from '../csds/FacultyProfileView';

const faculty: FacultyData = {
  name: "Ms. Neha Raut",
  designation: "Assistant Professor",
  department: "Artificial Intelligence and Data Science",
  dateOfJoining: "03 January 2022",
  email: "neha.raut@vcet.edu.in",
  experienceYears: "3.5",
  papersPublished: "8",
  photo: "faculty/aids/neha-raut.jpg",
  qualifications: [
    "Ph.D. (Pursuing)",
    "M.E. (IT)",
    "MMS",
  ],
  specialization: ["Data Science", "Blockchain"],
  patents: [
    { title: "Copyright 1 – details to be updated" },
    { title: "Copyright 2 – details to be updated" },
    { title: "Copyright 3 – details to be updated" },
  ],
  memberships: [
    { label: "ISTE", fullName: "Life Membership – LM 137512" },
  ],
};

export default faculty;
