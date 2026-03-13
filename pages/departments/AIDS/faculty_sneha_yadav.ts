import type { FacultyData } from '../csds/FacultyProfileView';

const faculty: FacultyData = {
  name: "Mrs. Sneha Yadav",
  designation: "Assistant Professor",
  department: "Artificial Intelligence and Data Science",
  dateOfJoining: "03 January 2022",
  email: "sneha.yadav@vcet.edu.in",
  experienceYears: "9",
  papersPublished: "9",
  photo: "faculty/aids/sneha-yadav.jpg",
  qualifications: [
    "Ph.D. (Pursuing)",
    "M.E. (IT) – With Distinction",
  ],
  specialization: [
    "Algorithms",
    "Artificial Intelligence",
    "Machine Learning",
    "Computer Networks",
    "OOPs",
  ],
  patents: [
    { title: "Copyright 1 – details to be updated" },
    { title: "Copyright 2 – details to be updated" },
    { title: "Copyright 3 – details to be updated" },
  ],
  memberships: [
    { label: "ISTE", fullName: "Life Membership – LM 135066" },
  ],
};

export default faculty;
