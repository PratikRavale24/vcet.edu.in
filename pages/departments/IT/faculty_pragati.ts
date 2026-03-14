import type { FacultyData } from '../csds/FacultyProfileView';

const faculty: FacultyData = {
  name: "Ms. Pragati Patil",
  designation: "Assistant Professor",
  department: "Information Technology",
  dateOfJoining: "04 July 2022",
  email: "pragati.patil@vcet.edu.in",
  experienceYears: "10",
  papersPublished: "12",
  photo: "faculty/it/pragati-patil.jpg",
  qualifications: [
    "Ph.D. (Pursuing - Eklavya University)",
    "M.Tech. - A Grade",
  ],
  specialization: ["Information Technology"],
  patents: [
    { title: "Published Patent (1 of 2)" },
    { title: "Published Patent (2 of 2)" },
    { title: "Registered Copyright (1 of 2)" },
    { title: "Registered Copyright (2 of 2)" },
  ],
  memberships: [
    { label: "ISTE" },
    { label: "CSI" },
  ],
};

export default faculty;


