import type { FacultyData } from '../csds/FacultyProfileView';

const faculty: FacultyData = {
  name: "Mr. Chandan Kolvankar",
  designation: "Assistant Professor",
  department: "Information Technology",
  dateOfBirth: "24 March 1977",
  dateOfJoining: "20 January 2003",
  email: "chandan.kolvankar@vcet.edu.in",
  experienceYears: "18",
  papersPublished: "1",
  photo: "faculty/it/chandan-kolvankar.jpg",
  qualifications: [
    "Ph.D. (Pursuing - K. J. Somaiya College of Engineering, Mumbai)",
    "M.E. (Computer Engineering)",
  ],
  roles: [
    { icon: "fa-lightbulb", label: "In-Charge: Entrepreneurship Cell, VCET" },
  ],
  books: [
    {
      title: "Internet Programming",
      subtitle: "Sem-IV, University of Mumbai - TechKnowledge Publications, 2021 - Co-authored with Yogesh Pingle, Sainath Patil",
    },
  ],
};

export default faculty;


