import type { FacultyData } from "./FacultyProfileView";

const faculty: FacultyData = {
  name: "Ms. Maya Varghese",
  designation: "Assistant Professor",
  department: "Computer Science & Engineering (Data Science)",
  dateOfJoining: "04 October 2021",
  email: "maya.varghese@vcet.edu.in",
  experienceYears: "7",
  papersPublished: "3",
  photo: "faculty/maya-varghese.jpg",
  qualifications: [
    "M.E. (Computer Engineering)",
  ],
  specialization: [
    "Graph Mining",
    "Data Mining",
  ],
  awards: [
    {
      icon: "fa-award",
      title: "Qualified GATE 2012",
      subtitle: "Received AICTE scholarship for M.E.",
    },
  ],
};

export default faculty;
