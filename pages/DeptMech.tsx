import React from 'react';
import DepartmentPage from '../components/DepartmentPage';

const deptInfo = {
  name: "Mechanical Engineering",
  slug: "mechanical-engineering",
  established: "1994",
  intake: "60",
  hodName: "HOD - Mechanical Engineering",
  hodTitle: "Professor & Head Of Department",
  hodImage: "hod-mechanical-engineering.jpg",
  description: [
    "The Department of Mechanical Engineering was established in 1994, being one of the founding departments of VCET. With an intake of 60 seats, the department has been at the forefront of providing quality education in mechanical engineering.",
    "The department has well-equipped laboratories for Manufacturing Processes, Fluid Mechanics, Thermodynamics, Material Testing, CAD/CAM, Heat Transfer, and Refrigeration & Air Conditioning. Students get hands-on experience with modern equipment and software.",
    "The department encourages students to participate in national and international level technical competitions, paper presentations, and project exhibitions. Faculty members are actively involved in research, publications, and consultancy projects."
  ],
  vision: "To be a center of excellence in Mechanical Engineering education and research.",
  mission: [
    "To provide quality technical education in Mechanical Engineering.",
    "To promote practical skills and innovation through hands-on learning.",
    "To foster research, industry collaboration, and entrepreneurship.",
    "To develop socially responsible and ethically sound engineers."
  ],
  tabs: ["About", "Vision & Mission", "Faculty", "Infrastructure", "Syllabus", "Publications"]
};

const DeptMech: React.FC = () => <DepartmentPage dept={deptInfo} />;

export default DeptMech;
