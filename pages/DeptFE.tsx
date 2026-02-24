import React from 'react';
import DepartmentPage from '../components/DepartmentPage';

const deptInfo = {
  name: "First Year Engineering",
  slug: "first-year-engineering",
  established: "1994",
  intake: "720",
  hodName: "HOD - FE",
  hodTitle: "Head Of Department, First Year Engineering",
  hodImage: "hod-first-year.jpg",
  description: [
    "The First Year Engineering Department serves as the foundation for all engineering students at VCET. All students admitted to the UG programs spend their first year under this department, with a combined intake of 720 seats across all branches.",
    "The department focuses on building strong fundamentals in Mathematics, Physics, Chemistry, Basic Electrical Engineering, Basic Mechanical Engineering, Engineering Drawing, and Programming. These foundational subjects prepare students for specialized courses in subsequent years.",
    "The department has dedicated and experienced faculty members who employ modern teaching methodologies, including ICT tools, virtual labs, and project-based learning to make the learning experience engaging and effective.",
    "Various bridge courses, remedial sessions, and mentoring programs are conducted to ensure smooth transition of students from school/junior college to engineering education."
  ],
  vision: "To build a strong academic foundation for aspiring engineers.",
  mission: [
    "To provide quality foundational education in basic sciences and engineering.",
    "To develop analytical thinking and problem-solving skills.",
    "To facilitate smooth transition from school to engineering education.",
    "To nurture curiosity, creativity, and a passion for learning."
  ],
  tabs: ["About", "Vision & Mission", "Faculty", "Infrastructure", "Syllabus"]
};

const DeptFE: React.FC = () => <DepartmentPage dept={deptInfo} />;

export default DeptFE;
