import React from 'react';
import DepartmentPage from '../components/DepartmentPage';

const deptInfo = {
  name: "Civil Engineering",
  slug: "civil-engineering",
  established: "1994",
  intake: "60",
  hodName: "HOD - Civil Engineering",
  hodTitle: "Professor & Head Of Department",
  hodImage: "hod-civil-engineering.jpg",
  description: [
    "The Department of Civil Engineering was established in 1994 as one of the founding departments of VCET. With an intake of 60 seats, the department provides quality education in all domains of civil engineering.",
    "The department offers both undergraduate (B.E. Civil Engineering) and postgraduate (M.E. Structural Engineering) programs. The M.E. program has an intake of 24 seats and focuses on advanced structural analysis and design.",
    "Well-equipped laboratories for Surveying, Material Testing, Fluid Mechanics, Geotechnical Engineering, Environmental Engineering, and Computer-Aided Design provide students with hands-on practical experience.",
    "The department encourages field visits, industrial training, and project-based learning to bridge the gap between theoretical knowledge and practical application."
  ],
  vision: "To be a center of excellence in Civil Engineering, contributing to sustainable infrastructure development.",
  mission: [
    "To provide quality technical education in Civil Engineering and allied fields.",
    "To promote research, consultancy, and innovation in civil engineering.",
    "To develop environmentally conscious and ethically responsible engineers.",
    "To foster industry-academia collaboration for holistic development."
  ],
  tabs: ["About", "Vision & Mission", "Faculty", "Infrastructure", "Syllabus", "Publications"]
};

const DeptCivil: React.FC = () => <DepartmentPage dept={deptInfo} />;

export default DeptCivil;
