import React from 'react';
import DepartmentPage from '../components/DepartmentPage';

const deptInfo = {
  name: "Computer Engineering",
  slug: "computer-engineering",
  established: "1999",
  intake: "180",
  hodName: "Dr. Megha Trivedi",
  hodTitle: "Associate Professor & Head Of Department",
  hodImage: "hod-computer-engineering.jpg",
  description: [
    "The Department of Computer Engineering was established in the year 1999 to impart knowledge and develop practical skills in various areas of computer engineering. The Department offers an undergraduate program in Computer Engineering with a current intake of 180 seats. The Department was accredited by the National Board of Accreditation (NBA) from 2012–2015, reaccredited from July 2022 to June 2025, and is permanently affiliated with the University of Mumbai.",
    "The Department has expert and well-trained human resources and state-of-the-art laboratories to impart domain-specific knowledge in the areas of programming, database management, operating systems, web development, networking, artificial intelligence, machine learning, deep learning, etc. The faculty uses various instructional pedagogies, innovative techniques, and ICT tools to enhance the teaching-learning process.",
    "The Department motivates its students to participate in co-curricular and extra-curricular activities essential for the development and nurturing of team spirit and organizational skills. The Department is associated with the Computer Society of India (CSI). The Department has a local Code-chef chapter, Bit-Byte-Go, which provides a peer learning platform to develop coding skills.",
    "The Department also has a student-driven Android Application Development Club, a Meta-Club, and a Microsoft Learn Students Club to foster peer learning and skill development. The Department publishes a newsletter, an e-magazine, and a wall magazine designed by students.",
    "The Department encourages students for various IPR activities such as publications, copyrights, and patents. The Department provides placement and higher studies support through various guidance sessions."
  ],
  vision: "To develop competent Computer Engineers empowered with knowledge, skills, and ethical values to serve industry and society.",
  mission: [
    "To provide quality education in Computer Engineering with strong fundamentals.",
    "To foster innovation, research aptitude, and entrepreneurial skills.",
    "To inculcate professional ethics, leadership qualities, and social responsibility.",
    "To establish strong industry-institute interaction for holistic development."
  ],
  tabs: ["About", "Vision & Mission", "Faculty", "Infrastructure", "Toppers", "Syllabus", "Publications", "MoU", "Newsletter"],
  nbaAccredited: true,
  nbaYear: "July 2022 – June 2025"
};

const DeptComputerEngg: React.FC = () => <DepartmentPage dept={deptInfo} />;

export default DeptComputerEngg;
