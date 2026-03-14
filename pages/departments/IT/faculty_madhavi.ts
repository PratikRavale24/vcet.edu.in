import type { FacultyData } from '../csds/FacultyProfileView';

const faculty: FacultyData = {
  name: "Dr. Madhavi Waghmare",
  designation: "Assistant Professor",
  department: "Information Technology",
  dateOfBirth: "01 April 1975",
  dateOfJoining: "01 October 2004",
  email: "madhavi.waghmare@vcet.edu.in",
  experienceYears: "17",
  papersPublished: "17",
  photo: "faculty/it/madhavi-waghmare.jpg",
  qualifications: [
    "Ph.D. (University of Mumbai)",
  ],
  memberships: [
    { label: "ISTE", fullName: "Life Member" },
    { label: "IEEE" },
  ],
  awards: [
    {
      icon: "fa-flask",
      title: "Minor Research Grant",
      subtitle: "Automated Lawn Mover Using Internet of Things - Ref. No: APD/ICD/2019-20/762 - Approval Sr. No. 1048",
    },
  ],
  websites: [
    { href: "https://madhavihw.wordpress.com", icon: "fa-globe", name: "Personal Website", sub: "madhavihw.wordpress.com" },
  ],
  youtube: [
    { href: "https://www.youtube.com/channel/UC5yePBC5yUSRYdVcrJ-MLaQ", name: "Dr. Madhavi Waghmare", sub: "Educational Channel" },
  ],
};

export default faculty;


