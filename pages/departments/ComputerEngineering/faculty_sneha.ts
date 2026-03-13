import type { FacultyData } from '../csds/FacultyProfileView';

const faculty: FacultyData = {
  name: "Dr. Sneha Mhatre",
  designation: "Assistant Professor",
  department: "Computer Engineering",
  dateOfJoining: "07 July 2015",
  email: "sneha.mhatre@vcet.edu.in",
  experienceYears: "10.5",
  papersPublished: "20",
  photo: "faculty/ce/sneha-mhatre.jpg",
  qualifications: [
    "PhD (Computer Engineering)",
  ],
  specialization: [
    "Image Processing",
    "Deep Learning",
  ],
  books: [
    {
      title: "Machine Vision",
      subtitle: "Computer Engineering / Sem VII / R-19 · Technowledge Publication · ISBN: 978-93-5563-004-9",
    },
    {
      title: "Deep Learning",
      subtitle: "Electronics & Telecomm / Sem VII / R-19 · Technowledge Publication · ISBN: 978-93-5563-224-1",
    },
    {
      title: "Deep Learning",
      subtitle: "Computer Engineering / Sem VIII / R-19 · Technowledge Publication · ISBN: 978-93-5563-384-2",
    },
    {
      title: "A Deep Learning-Based Approach for Fruit Gradation",
      subtitle: "Book Chapter · IoT-Based Smart Applications · Taylor & Francis, Jan 2025 · ISBN: 9781003436911",
    },
  ],
  isbnNumbers: [
    "978-93-5563-004-9",
    "978-93-5563-224-1",
    "978-93-5563-384-2",
    "9781003436911",
  ],
  patents: [
    { title: "AI-Enabled System for Providing Legal Assistance (Patent Filed – Indian Patent Office)" },
    { title: "Copyright – Personalized Learning for Diverse Learners (SW19553/2024)" },
    { title: "Copyright – All Smiles Dental Clinic WebApp (SW-20240/2025)" },
    { title: "Copyright – Jevlis Ka – An Intelligent Recipe Generator (SW19855/2024)" },
    { title: "Copyright – Early Pregnancy Anomaly Detection App (Applied – SW-20240/2025)" },
    { title: "Copyright – Face Recognition and Clustering (31659/2021-CO/SW)" },
    { title: "Copyright – Earthquake Detector Alarm using Arduino (31664/2021-CO/L)" },
    { title: "Copyright – Online Resume Builder (6158/2023-CO/SW)" },
  ],
  awards: [
    {
      icon: "fa-trophy",
      title: "Minor Research Grant – University of Mumbai",
      subtitle: "Research project: Earthquake Detector",
    },
  ],
  memberships: [
    { label: "Life Member – ISTE", fullName: "Indian Society for Technical Education" },
  ],
  consultancy: [
    {
      title: "Website and Mobile App Development – Chetan Dryfruit, Vasai (Funded Consultancy Project)",
    },
  ],
  websites: [
    {
      href: "https://www.linkedin.com/in/sneha-mhatre-03315375",
      icon: "fa-linkedin",
      name: "LinkedIn Profile",
      sub: "linkedin.com/in/sneha-mhatre",
    },
  ],
  youtube: [
    {
      href: "https://www.youtube.com/channel/UCLY7ioETETQvH6rwU_5Cz8A",
      name: "Dr. Sneha Mhatre",
      sub: "Computer Engineering – Deep Learning & Image Processing",
    },
  ],
  eResources: [
    {
      title: "C Programming (COMP) – Google Classroom",
      icon: "fa-terminal",
      url: "https://classroom.google.com",
      code: "2uogwtl",
    },
    {
      title: "High Performance Computing – Google Classroom",
      icon: "fa-microchip",
      url: "https://classroom.google.com",
      code: "a7si74i",
    },
  ],
};

export default faculty;
