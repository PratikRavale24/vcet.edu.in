import React from 'react';
import DepartmentPage from '../components/DepartmentPage';

const deptInfo = {
  name: "CS & Engg. (Data Science)",
  slug: "cs-data-science",
  established: "2020",
  intake: "180",
  hodName: "HOD - CS Data Science",
  hodTitle: "Head Of Department",
  hodImage: "hod-cs-data-science.jpg",
  description: [
    "The Department of Computer Science and Engineering (Data Science) was established in 2020 to meet the growing demand for data science professionals. With an intake of 180 seats, the department focuses on imparting knowledge in data analytics, machine learning, big data, and data visualization.",
    "The department combines strong theoretical foundations in computer science with practical data science applications. Students work with modern tools and technologies used in the industry for data processing and analysis.",
    "The curriculum is designed to prepare students for careers in data engineering, analytics, and research, with emphasis on real-world projects and industry collaboration."
  ],
  vision: "To be a center of excellence in Data Science education, producing skilled professionals for the data-driven world.",
  mission: [
    "To provide comprehensive education in data science and computer engineering.",
    "To foster analytical thinking and data-driven decision making.",
    "To encourage research and innovation in data science applications.",
    "To develop industry-ready professionals with ethical values."
  ],
  tabs: ["About", "Vision & Mission", "Faculty", "Infrastructure", "Syllabus"]
};

const DeptCSDS: React.FC = () => <DepartmentPage dept={deptInfo} />;

export default DeptCSDS;
