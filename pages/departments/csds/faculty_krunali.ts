import type { FacultyData } from "./FacultyProfileView";

const faculty: FacultyData = {
  name: "Ms. Krunali Vartak",
  designation: "Assistant Professor",
  department: "Computer Science & Engineering (Data Science)",
  dateOfBirth: "02 June 1992",
  dateOfJoining: "23 August 2021",
  email: "krunali.vartak@vcet.edu.in",
  experienceYears: "10",
  papersPublished: "4",
  photo: "faculty/krunali-vartak.jpg",
  qualifications: [
    "M.E. (Information Technology)",
  ],
  books: [
    { title: "1 Book / Patent" },
  ],
  memberships: [
    "ISTE Life Membership",
  ],
  eResources: [
    {
      title: "Subject Notes — Google Classroom",
      icon: "fa-book-open",
      url: "https://classroom.google.com",
      code: "Contact faculty for classroom code",
    },
  ],
};

export default faculty;
