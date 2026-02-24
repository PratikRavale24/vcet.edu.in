import React from 'react';
import DepartmentPage from '../components/DepartmentPage';

const deptInfo = {
  name: "Electronics & Telecommunication Engineering",
  slug: "electronics-telecomm",
  established: "1994",
  intake: "60",
  hodName: "HOD - EXTC",
  hodTitle: "Professor & Head Of Department",
  hodImage: "hod-extc.jpg",
  description: [
    "The Department of Electronics and Telecommunication Engineering was established in 1994 as one of the founding departments of the college. With an intake of 60 seats, the department has been consistently producing competent engineers.",
    "The department has well-equipped laboratories covering areas such as Analog Electronics, Digital Electronics, Microprocessors, Communication Systems, VLSI Design, Signal Processing, IoT, and Embedded Systems.",
    "The department has strong industry interactions through guest lectures, workshops, seminars, and MoUs with various organizations. Students are encouraged to participate in technical events, hackathons, and internship programs."
  ],
  vision: "To develop skilled Electronics and Telecommunication Engineers for the advancement of technology and society.",
  mission: [
    "To provide comprehensive education in Electronics and Telecommunication Engineering.",
    "To promote research, innovation, and industry interaction.",
    "To develop technical competence and professional ethics.",
    "To encourage lifelong learning and social responsibility."
  ],
  tabs: ["About", "Vision & Mission", "Faculty", "Infrastructure", "Syllabus"]
};

const DeptENTC: React.FC = () => <DepartmentPage dept={deptInfo} />;

export default DeptENTC;
