import type { FacultyData } from '../csds/FacultyProfileView';

const faculty: FacultyData = {
  name: "Dr. Yogita Shelar",
  designation: "Assistant Professor",
  department: "Information Technology",
  dateOfJoining: "21 July 2025",
  email: "yogita.shelar@vcet.edu.in",
  experienceYears: "10",
  papersPublished: "6",
  photo: "faculty/it/yogita-shelar.jpg",
  qualifications: [
    "Ph.D. (CSE)",
    "M.E. (IT)",
  ],
  specialization: ["Computer Science and Engineering"],
  patents: [
    { title: "Published Patent (1 total)" },
  ],
  websites: [
    { href: "https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=yogita+shelar&btnG=", icon: "fa-user-graduate", name: "Google Scholar", sub: "Citation Profile" },
  ],
};

export default faculty;


