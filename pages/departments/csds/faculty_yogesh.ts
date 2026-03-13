import type { FacultyData } from "./FacultyProfileView";

const faculty: FacultyData = {
  name: "Prof. Yogesh Pingle",
  designation: "Deputy HOD & Assistant Professor",
  department: "Computer Science & Engineering (Data Science)",
  dateOfBirth: "04 July 1977",
  dateOfJoining: "06 July 2007",
  email: "yogesh.pingle@vcet.edu.in",
  experienceYears: "17",
  industryYears: "2",
  papersPublished: "20",
  photo: "dr-yogesh-pingle.jpg",
  qualifications: [
    "Ph.D — Computer Engineering · Mumbai University",
    "M.E. (Computers)",
  ],
  specialization: [],
  researchDomains: [
    { icon: "fa-wifi",          title: "Internet of Things", subtitle: "Embedded systems, sensor networks, IoT architectures" },
    { icon: "fa-network-wired", title: "Computer Networks",  subtitle: "Protocols, network design and security" },
    { icon: "fa-code",          title: "Web Technologies",   subtitle: "Internet programming, web-based applications" },
    { icon: "fa-database",      title: "Data Science",       subtitle: "Data warehousing, mining and machine learning" },
  ],
  pgProjects: [
    { label: "M.E. Project", detail: "1 Project guided — 2018" },
  ],
  consultancy: [
    { title: "Cold Storage Project — V Enterprises", year: "2017" },
    { title: "Website Development", url: "https://avcjr.ac.in/",       urlLabel: "avcjr.ac.in" },
    { title: "Website Development", url: "https://vcet.edu.in/mms/",   urlLabel: "vcet.edu.in/mms" },
  ],
  books: [
    { count: 5,   title: "Internet of Things (IoT)",      subtitle: "5 books in this category" },
    { count: 2,   title: "Internet Programming",          subtitle: "2 books in this category" },
    { count: 1,   title: "Database Management System",    subtitle: "DBMS" },
    { count: 1,   title: "Computer Networks",             subtitle: "CN" },
    { count: 1,   title: "Data Warehousing & Mining",     subtitle: "DWM" },
    { count: "★", title: "Visual Basic Programming (2003)", subtitle: "Nirali Prakashan", special: true },
  ],
  isbnNumbers: [
    "978-93-91496-21-0",
    "978-93-91496-95-1",
    "978-93-90437-43-6",
    "978-93-89233-20-9",
    "978-93-89748-80-2",
    "978-93-5077-090-0",
    "978-93-88200-57-8",
    "978-93-88200-60-8",
    "978-93-5451-823-2",
    "978-81-19115-09-9",
  ],
  publications: [],
  patents: [
    { title: "Intelligent Wearable Sweat Sensor",      date: "06 August 2021" },
    { title: "Musical Medical Illness Healing Device", date: "15 December 2023" },
  ],
  roles: [
    { icon: "fa-language", label: "In-Charge: German Language Club" },
    { icon: "fa-code",     label: "Website Technical Head" },
  ],
  awards: [
    { icon: "fa-medal", title: "Golden Book of World Records", subtitle: "🎵 Harmonium Player · 2016" },
    { icon: "fa-award", title: "Second Prize — All India Air",  subtitle: "🎸 Instrument Competition · 2004" },
  ],
  websites: [
    { href: "http://yogeshpingle.co.in/",    icon: "fa-globe",         name: "Personal Website", sub: "yogeshpingle.co.in" },
    { href: "https://ypptechnologies.in/",   icon: "fa-laptop-code",   name: "YPP Technologies", sub: "ypptechnologies.in" },
    { href: "https://orcid.org/",            icon: "fa-orcid",         name: "ORCID",            sub: "Researcher ID" },
    { href: "https://scholar.google.com/",   icon: "fa-user-graduate", name: "Google Scholar",   sub: "Citation Profile" },
    { href: "https://www.scopus.com/",       icon: "fa-search-plus",   name: "Scopus",           sub: "Indexed Publications" },
    { href: "https://www.webofscience.com/", icon: "fa-atom",          name: "Web of Science",   sub: "Research Index" },
  ],
  youtube: [
    { href: "https://www.youtube.com/watch?v=hHwPuLrAy0k&list=PLEivsV-jI8e9XX6QTy2E7JUGjJBiezv0v", name: "Internet of Everything", sub: "IoE & Connected Devices" },
    { href: "https://www.youtube.com/watch?v=BUH5Ykkwidk&list=UU_msJm7vwLXVNhHjpeZE_RA&index=13",  name: "IoT Mini Project Lab",   sub: "Hands-on IoT Projects" },
    { href: "https://www.youtube.com/watch?v=euMdvSO8dvk&list=UUbULYdSE8KdVEfmDosf287w",           name: "DevOps Lab",             sub: "DevOps & CI/CD" },
    { href: "https://www.youtube.com/watch?v=dOfSBcaPSRo&list=UUbgznL7YoVnDpzfDdjaQNFA",           name: "Java Lab",               sub: "Java Programming" },
  ],
  eResources: [
    { title: "C Programming Notes",                icon: "fa-terminal", url: "https://yogeshpingle.home.blog/c-programming/" },
    { title: "Internet of Things (IoT) Notes",     icon: "fa-wifi",     url: "https://yogeshpingle.home.blog/iot/" },
    { title: "Machine Learning — Google Classroom", icon: "fa-google",  url: "#", code: "Available on request" },
  ],
  memberships: [
    { label: "LM 58653 – ISTE", fullName: "Indian Society for Technical Education" },
    { label: "01161406 – CSI",  fullName: "Computer Society of India" },
  ],
};

export default faculty;
