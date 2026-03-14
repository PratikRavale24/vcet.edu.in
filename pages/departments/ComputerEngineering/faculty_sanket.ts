import type { FacultyData } from '../csds/FacultyProfileView';

const faculty: FacultyData = {
  name: "Mr. Sanket Patil",
  designation: "Assistant Professor (Ph.D. Pursuing)",
  department: "Computer Engineering",
  dateOfJoining: "07 July 2014",
  email: "sanket.patil@vcet.edu.in",
  experienceYears: "9",
  industryYears: "5",
  papersPublished: "06",
  photo: "faculty/ce/sanket-patil.jpg",
  qualifications: [
    "Ph.D. (Pursuing)",
    "M.E. (Computer)",
  ],
  specialization: [
    "System Security",
  ],
  books: [
    {
      title: "Evaluating the Effectiveness of CNN in Detecting Brain Tumour",
      subtitle: "Book Chapter - Next Generation Healthcare Systems Using Soft Computing Techniques - CRC Press",
    },
  ],
  memberships: [
    { label: "Life Member - ISTE", fullName: "Indian Society for Technical Education" },
  ],
  websites: [
    {
      href: "https://www.linkedin.com/in/sanket-patil-a9592494",
      icon: "fa-linkedin",
      name: "LinkedIn Profile",
      sub: "linkedin.com/in/sanket-patil",
    },
  ],
};

export default faculty;

