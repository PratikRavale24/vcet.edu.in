import type { FacultyData } from '../csds/FacultyProfileView';

const faculty: FacultyData = {
  name: "Dr. Vaishali A. Shirsath",
  designation: "Assistant Professor",
  department: "Information Technology",
  dateOfBirth: "25 July 1980",
  dateOfJoining: "04 September 2004",
  email: "vaishali.shirsath@vcet.edu.in",
  experienceYears: "20",
  papersPublished: "20",
  photo: "faculty/it/vaishali-shirsath.jpg",
  qualifications: [
    "Ph.D. (Computer)",
  ],
  pgProjects: [
    { label: "M.E. Project", detail: "1 Project guided at PG Level - 2017 (Computer Engineering)" },
  ],
  books: [
    { title: "TCS",      subtitle: "ISBN: 978-93-5451-822-5" },
    { title: "AT",       subtitle: "ISBN: 978-81-19115-70-9" },
    { title: "SE",       subtitle: "ISBN: 978-81-19117-07-9" },
    { title: "DWM",      subtitle: "ISBN: 978-81-19115-09-9" },
    { title: "CN",       subtitle: "ISBN: 978-93-5451-823-2" },
    { title: "ADBMS",    subtitle: "ISBN: 978-81-19117-11-6" },
    { title: "ADMT",     subtitle: "ISBN: 978-81-19117-35-2" },
    { title: "SE (IT)",  subtitle: "ISBN: 978-93-5451-679-5" },
  ],
  isbnNumbers: [
    "978-93-5451-822-5",
    "978-81-19115-70-9",
    "978-81-19117-07-9",
    "978-81-19115-09-9",
    "978-93-5451-823-2",
    "978-81-19117-11-6",
    "978-81-19117-35-2",
    "978-93-5451-679-5",
  ],
  memberships: [
    { label: "ISTE",  fullName: "LM 110884" },
    { label: "CSI",   fullName: "LM I1503351" },
    { label: "IEEE",  fullName: "Member 97008971" },
  ],
  websites: [
    { href: "https://www.vaishalishirsath.com/",          icon: "fa-globe",         name: "Personal Website",  sub: "vaishalishirsath.com" },
    { href: "https://www.vaishalishirsath.wordpress.com", icon: "fa-blog",          name: "WordPress Blog",    sub: "vaishalishirsath.wordpress.com" },
    { href: "https://orcid.org/0000-0003-2892-526X",      icon: "fa-orcid",         name: "ORCID",             sub: "0000-0003-2892-526X" },
    { href: "https://www.scopus.com/authid/detail.uri?authorId=58574562200", icon: "fa-search", name: "Scopus", sub: "Author ID: 58574562200" },
  ],
};

export default faculty;


