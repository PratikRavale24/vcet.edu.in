import type { FacultyData } from '../csds/FacultyProfileView';

const faculty: FacultyData = {
  name: "Ms. Sejal D'mello",
  designation: "Deputy HOD & Assistant Professor",
  department: "Artificial Intelligence and Data Science",
  dateOfJoining: "01 July 2022",
  email: "sejal.dmelo@vcet.edu.in",
  experienceYears: "13",
  papersPublished: "10",
  photo: "faculty/aids/sejal-dmello.jpg",
  qualifications: [
    "M.E. (Information Technology) – First Class",
  ],
  specialization: ["DevOps", "Software Engineering & Testing"],
  roles: [
    { icon: "fa-sitemap", label: "Deputy Head of Department (Deputy HOD)" },
  ],
  patents: [
    { title: "Copyright – details to be updated" },
  ],
  memberships: [
    { label: "ISTE", fullName: "Life Membership – LM 108146" },
  ],
};

export default faculty;
