import type { FacultyData } from '../csds/FacultyProfileView';

const faculty: FacultyData = {
  name: "Ms. Rujuta Vartak",
  designation: "Assistant Professor",
  department: "Artificial Intelligence and Data Science",
  dateOfJoining: "25 July 2023",
  email: "rujuta.vartak@vcet.edu.in",
  experienceYears: "12",
  papersPublished: "3",
  photo: "faculty/aids/rujuta-vartak.jpg",
  qualifications: [
    "M.E. (Computer)",
  ],
  specialization: ["Data Mining"],
  patents: [
    { title: "Copyright 1 – details to be updated" },
    { title: "Copyright 2 – details to be updated" },
    { title: "Copyright 3 – details to be updated" },
  ],
  memberships: [
    { label: "ISTE", fullName: "Life Membership – LM 140370" },
  ],
};

export default faculty;
