import React from 'react';
import DepartmentPage from '../components/DepartmentPage';

const deptInfo = {
  name: "AI & Data Science",
  slug: "ai-data-science",
  established: "2020",
  intake: "120",
  hodName: "HOD - AI & Data Science",
  hodTitle: "Head Of Department",
  hodImage: "hod-ai-data-science.jpg",
  description: [
    "The Department of Artificial Intelligence and Data Science was established in 2020, in response to the rapidly growing demand for AI and data science professionals. With an intake of 120 seats, the department is dedicated to producing skilled engineers in artificial intelligence, machine learning, and data analytics.",
    "The department provides hands-on experience with cutting-edge AI tools, deep learning frameworks, and big data technologies. Students get exposure to real-world AI applications through industry collaborations and research projects.",
    "The curriculum is designed to build strong mathematical foundations alongside practical AI and data science skills, preparing students for diverse career paths in technology and research."
  ],
  vision: "To emerge as a leading department in AI and Data Science, nurturing innovators and problem solvers.",
  mission: [
    "To impart comprehensive education in Artificial Intelligence and Data Science.",
    "To promote innovative research and application development in AI/ML.",
    "To prepare students for industry and higher studies with strong fundamentals.",
    "To foster ethical AI practices and social responsibility."
  ],
  tabs: ["About", "Vision & Mission", "Faculty", "Infrastructure", "Syllabus"]
};

const DeptAIDS: React.FC = () => <DepartmentPage dept={deptInfo} />;

export default DeptAIDS;
