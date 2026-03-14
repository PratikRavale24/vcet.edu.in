import type { FacultyData } from '../csds/FacultyProfileView';

const faculty: FacultyData = {
  name: "Dr. Sainath Patil",
  designation: "Assistant Professor",
  department: "Information Technology",
  dateOfBirth: "17 October 1975",
  dateOfJoining: "January 2006",
  email: "sainath.patil@vcet.edu.in",
  experienceYears: "20",
  papersPublished: "6",
  photo: "faculty/it/sainath-patil.jpg",
  qualifications: [
    "Ph.D. (Information Technology)",
  ],
  specialization: [
    "Data Structures",
    "Computer Networks",
    "Cybersecurity",
    "Image Processing",
    "Big Data Analytics",
    "Android Programming",
  ],
  roles: [
    { icon: "fa-university", label: "Remote Centre Coordinator - IIT Mumbai" },
  ],
  books: [
    {
      title: "Internet Programming",
      subtitle: "Sem-IV, University of Mumbai - TechKnowledge Publications, 2021 - Co-authored with Chandan Kolvankar, Yogesh Pingle",
    },
  ],
  memberships: [
    { label: "ISTE", fullName: "Life Membership No. LM63410" },
  ],
  eResources: [
    { title: "Operating Systems (OS)",             icon: "fa-desktop",        url: "https://patilsai.wordpress.com/se-it-os/" },
    { title: "Big Data Analytics (BDA)",            icon: "fa-database",       url: "https://patilsai.wordpress.com/be-it/" },
    { title: "R Programming",                       icon: "fa-chart-bar",      url: "https://patilsai.wordpress.com/be-it-r-prog" },
    { title: "Data Structures & Algorithms (DSA)",  icon: "fa-project-diagram", url: "https://patilsai.wordpress.com/se-it-dsa/" },
    { title: "Java Programming Lab (JPL)",          icon: "fa-coffee",         url: "https://patilsai.wordpress.com/se-it-jpl/" },
    { title: "Cloud System Lab (CSL)",              icon: "fa-cloud",          url: "https://patilsai.wordpress.com/be-csl/" },
    { title: "Mobile App Development (MAD)",        icon: "fa-mobile-alt",     url: "https://patilsai.wordpress.com/be-it-mobile-app-development/" },
  ],
};

export default faculty;


