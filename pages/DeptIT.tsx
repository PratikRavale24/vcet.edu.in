import React from 'react';
import DepartmentPage from '../components/DepartmentPage';

const deptInfo = {
  name: "Information Technology",
  slug: "information-technology",
  established: "2000",
  intake: "60",
  hodName: "Dr. Thaksen Parvat",
  hodTitle: "Professor & Head Of Department, Dean IT Infrastructure",
  hodImage: "hod-information-technology.jpg",
  description: [
    "Established in 2000, the Department of Information Technology is amongst the premier Departments of VCET. Currently, it is running Under Graduate program, B.E in Information Technology with an intake of 60 seats. The Department is accredited by National Board of Accreditation (NBA) accredited from July 2022 to June 2025 and is affiliated to University of Mumbai.",
    "The Department of Information Technology (IT) aims at developing technical and experimental skills in students along with logical thinking so as to prepare them for competent, responsible and rewarding careers in IT profession. We strive to achieve the aim with young, dynamic and highly qualified faculty members, state of art infrastructure and Industry-Institution Interaction.",
    "The department has laboratories which are well equipped with latest configuration machines, high speed internet, Wi-Fi and legal licensed software. Modern aids such as LCD, Educational CDs make classroom teaching more interesting.",
    "We encourage extra-curricular activities as they help in developing the student's personality which ultimately enhances her future. It is our constant endeavor to shape personalities who will contribute positively to the world around them."
  ],
  vision: "To develop competent IT professionals with strong technical skills and ethical values.",
  mission: [
    "To provide quality education in Information Technology with industry-relevant curriculum.",
    "To foster innovation, critical thinking and problem-solving abilities.",
    "To promote research and development in emerging IT domains.",
    "To develop socially responsible IT professionals."
  ],
  tabs: ["About", "Vision & Mission", "Faculty", "Infrastructure", "Achievements", "Toppers", "Syllabus", "MoU", "Newsletter"],
  nbaAccredited: true,
  nbaYear: "July 2022 – June 2025"
};

const DeptIT: React.FC = () => <DepartmentPage dept={deptInfo} />;

export default DeptIT;
