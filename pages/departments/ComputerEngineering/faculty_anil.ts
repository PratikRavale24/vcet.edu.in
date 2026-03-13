import type { FacultyData } from '../csds/FacultyProfileView';

const faculty: FacultyData = {
  name: "Dr. Anil Hingmire",
  designation: "Assistant Professor & Deputy HOD",
  department: "Computer Engineering",
  dateOfJoining: "11 August 2003",
  email: "anil.hingmire@vcet.edu.in",
  experienceYears: "22",
  papersPublished: "14",
  photo: "faculty/ce/anil-hingmire.jpg",
  qualifications: [
    "PhD (Computer Science and Engineering)",
    "M.E. (Computer Engineering) – First Class",
  ],
  specialization: [
    "Artificial Intelligence",
  ],
  roles: [
    { icon: "fa-user-tie", label: "Deputy HOD" },
  ],
  patents: [
    { title: "Published Patent 1 – details to be updated" },
    { title: "Published Patent 2 – details to be updated" },
    { title: "Copyright – details to be updated" },
  ],
  memberships: [
    { label: "Life Member – ISTE", fullName: "Indian Society for Technical Education" },
    { label: "Member – IACSIT", fullName: "International Association of Computer Science and Information Technology, Singapore" },
  ],
  websites: [
    {
      href: "https://anilhingmire.wordpress.com/",
      icon: "fa-blog",
      name: "Personal Blog & E-Notes",
      sub: "anilhingmire.wordpress.com",
    },
  ],
};

export default faculty;
