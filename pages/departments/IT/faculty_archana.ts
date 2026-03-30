import type { FacultyData } from '../csds/FacultyProfileView';

const faculty: FacultyData = {
  name: "Dr. Archana Ekbote",
  designation: "Assistant Professor",
  department: "Information Technology",
  dateOfBirth: "09 July 1976",
  dateOfJoining: "08 July 2002",
  email: "archana.ekbote@vcet.edu.in",
  experienceYears: "20",
  papersPublished: "10 (4 Journals + 6 Conferences)",
  photo: "faculty/it/archana-ekbote.jpg",
  qualifications: [
    "Ph.D. (BAMU)",
    "M.E. (University of Mumbai)",
  ],
  memberships: [
    { label: "ISTE", fullName: "Life Membership - LM 38954" },
    { label: "IETE", fullName: "Life Membership - M 183963" },
  ],
  websites: [
    { href: "https://archanaekbote.wordpress.com", icon: "fa-globe", name: "Personal Website", sub: "archanaekbote.wordpress.com" },
  ],
  youtube: [
    { href: "https://www.youtube.com/channel/UCgeyo7dafCpO8nasdjPuWfg", name: "Dr. Archana Ekbote", sub: "Educational Channel" },
  ],
  eResources: [
    { title: "Computer Networks (CN)",           icon: "fa-network-wired", url: "https://archanaekbote.wordpress.com/computer-networks" },
    { title: "Enterprise Resource Planning (ERP)", icon: "fa-cogs",        url: "https://archanaekbote.wordpress.com/enterprise-resource-planning/" },
  ],
};

export default faculty;


