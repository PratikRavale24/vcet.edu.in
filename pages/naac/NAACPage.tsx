import React, { useState } from "react";
import TopBanner from "../../components/TopBanner";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NaacHeader from "../../components/NaacHeader";
import CycleTabs from "../../components/CycleTabs";
import "../../styles/naac.css";

type CycleKey = "cycle1" | "cycle2";

type LinkItem = {
  label: string;
  href: string;
};

const cycle1Links: LinkItem[] = [
  {
    label: "VCET_NAAC_Day_1 Photos",
    href: "https://drive.google.com/drive/folders/1Dv5hLWk_5HOow3QKz4TyV8XLv_VfkxXy",
  },
  {
    label: "VCET_NAAC_Day_1 Video",
    href: "https://drive.google.com/file/d/1N2YkUIy54-X9E0BhBiymgkxdL67U5ny8/view",
  },
  {
    label: "VCET_NAAC_Day_2 Photos",
    href: "https://drive.google.com/drive/folders/1-VfP8pPR_sGKNhHPHt7suz86GuoXljGb",
  },
  {
    label: "VCET_NAAC_Day_2 Video",
    href: "https://drive.google.com/file/d/1zwI_JD7dmfmitqdLfaKyky4d0W2WS9Mj/view",
  },
];

interface NaacPageProps {
  initialCycle?: CycleKey;
}

const NaacPage: React.FC<NaacPageProps> = ({ initialCycle = "cycle1" }) => {
  const [activeCycle, setActiveCycle] = useState<CycleKey>(initialCycle);

  return (
    <div className="naac-page">
      <div className="naac-site-header">
        <TopBanner />
        <Header />
      </div>
      <NaacHeader 
        title={activeCycle === "cycle1" ? "SSR Cycle 1" : "SSR Cycle 2"} 
        activeCrumb={activeCycle === "cycle1" ? "SSR Cycle 1" : "SSR Cycle 2"} 
      />

      <section className="naac-content">
        <div className="naac-content__container">
          <CycleTabs activeCycle={activeCycle} onChange={setActiveCycle} />

          <div className="naac-divider" />

          {activeCycle === "cycle1" ? (
            <div className="naac-cycle">
              <p className="naac-ssr">
                To download SSR Report click here:{" "}
                <a
                  className="naac-ssr__link"
                  href="https://vcet.edu.in/wp-content/uploads/2021/11/MHCOGN102291.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NAAC SSR
                </a>
              </p>

              <div className="naac-links">
                {cycle1Links.map((item) => (
                  <a
                    key={item.href}
                    className="naac-link"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <div id="cycle2-extended-profile" className="naac-cycle">
              <a
                className="naac-extended-subtitle"
                href="https://vcet.edu.in/NAAC/VCET_Approved_SSR_Cycle_2.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Self Study Report
              </a>
              <h3 className="naac-section-title">EXTENDED PROFILE :</h3>
              <div className="naac-table-wrapper">
                <table className="table table-bordered table-hover naac-extended-table">
                  <thead>
                    <tr>
                      <th>Extended ID</th>
                      <th>Extended Profile</th>
                      <th>Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="naac-extended-row">
                      <td className="naac-extended-cell naac-extended-cell--center">
                        <span>
                          1. Students
                          <br />
                          1.1
                        </span>
                      </td>
                      <td className="naac-extended-cell">
                        Number of Students year wise during the last five year
                      </td>
                      <td className="naac-extended-cell naac-extended-cell--center">
                        <a href="#">1.1</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="naac-extended-cell naac-extended-cell--center">
                        <span>
                          2. Teachers
                          <br />
                          2.1
                          <br />
                          2.2
                        </span>
                      </td>
                      <td className="naac-extended-cell">
                        2.1 Number of teaching staff/full time teachers during the last five years
                        (Without repeat count)
                        <br />
                        2.2 Number of teaching staff/full time teachers during the last five years
                      </td>
                      <td className="naac-extended-cell naac-extended-cell--center">
                        <a href="#">2.1</a>
                        <br />
                        <a href="#">2.2</a>
                      </td>
                    </tr>
                    <tr className="naac-extended-row">
                      <td className="naac-extended-cell naac-extended-cell--center">
                        <span>
                          3. Institution
                          <br />
                          3.1
                        </span>
                      </td>
                      <td className="naac-extended-cell">
                        Expenditure excluding salary component year wise during the last wise years
                        (INR in lakhs)
                      </td>
                      <td className="naac-extended-cell naac-extended-cell--center">
                        <a href="#">3.1</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="naac-section-title">QIF TABLE :</h3>
              <div className="naac-table-wrapper">
                <table className="table table-bordered naac-qif-table">
                  <thead>
                    <tr>
                      <th className="naac-qif-col naac-qif-col--criteria">Criteria</th>
                      <th className="naac-qif-col naac-qif-col--sub">Sub-Criteria</th>
                      <th className="naac-qif-col naac-qif-col--heading">Criteria Heading</th>
                      <th className="naac-qif-col naac-qif-col--link">Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        className="naac-qif-cell naac-qif-cell--center"
                        rowSpan={6}
                      >
                        Criteria 1: Curriculum Aspect
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">1.1.1</td>
                      <td className="naac-qif-cell">
                        The Institution ensures effective curriculum planning and delivery through a
                        well-planned and documented process...
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/1.1.1.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          1.1.1
                        </a>
                      </td>
                    </tr>
                    <tr className="naac-qif-row">
                      <td className="naac-qif-cell naac-qif-cell--center">1.2.1</td>
                      <td className="naac-qif-cell">
                        Number of Certificate/Value added Courses of MOOCs, SWAYAM, NPTEL etc.
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/1.2.1.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          1.2.1
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="naac-qif-cell naac-qif-cell--center">1.2.2</td>
                      <td className="naac-qif-cell">
                        Percentage of students enrolled in Certificate/Value added Courses and also
                        completed online courses...
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/1.2.2.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          1.2.2
                        </a>
                      </td>
                    </tr>
                    <tr className="naac-qif-row">
                      <td className="naac-qif-cell naac-qif-cell--center">1.3.1</td>
                      <td className="naac-qif-cell">
                        Institution integrates crosscutting issues relevant to Professional Ethics,
                        Gender, Human Values...
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/1.3.1.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          1.3.1
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="naac-qif-cell naac-qif-cell--center">1.3.2</td>
                      <td className="naac-qif-cell">
                        Percentage of students undertaking project work/field work/ internships...
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/1.3.2.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          1.3.2
                        </a>
                      </td>
                    </tr>
                    <tr className="naac-qif-row">
                      <td className="naac-qif-cell naac-qif-cell--center">1.4.1</td>
                      <td className="naac-qif-cell">
                        Institution obtains feedback on the academic performance and ambience of the
                        institution...
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/1.4.1.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          1.4.1
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td
                        className="naac-qif-cell naac-qif-cell--center"
                        rowSpan={11}
                      >
                        Criteria 2: Teaching-Learning and Evaluation
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">2.1.1</td>
                      <td className="naac-qif-cell">
                        Student Enrolment and Profile
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/2.1.1.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          2.1.1 DVV
                        </a>
                      </td>
                    </tr>
                    <tr className="naac-qif-row">
                      <td className="naac-qif-cell naac-qif-cell--center">2.1.2</td>
                      <td className="naac-qif-cell">
                        Percentage of seats filled against seats reserved for various categories
                        (SC, ST, OBC, Divyangjan, etc.) as per applicable reservation policy during
                        the last five Years
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/2.1.2.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          2.1.2 DVV
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="naac-qif-cell naac-qif-cell--center">2.2.1</td>
                      <td className="naac-qif-cell">
                        Student Enrolment and Profile
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/2.2.1.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          2.2.1 DVV
                        </a>
                      </td>
                    </tr>
                    <tr className="naac-qif-row">
                      <td className="naac-qif-cell naac-qif-cell--center">2.3.1</td>
                      <td className="naac-qif-cell">
                        Student centric methods, such as experiential learning, participative
                        learning and problem solving methodologies...
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/2.3.1.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          2.3.1 DVV
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="naac-qif-cell naac-qif-cell--center">2.4.1</td>
                      <td className="naac-qif-cell">
                        Percentage of full time teachers against sanctioned posts during the last
                        five years
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/2.4.1.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          2.4.1 DVV
                        </a>
                      </td>
                    </tr>
                    <tr className="naac-qif-row">
                      <td className="naac-qif-cell naac-qif-cell--center">2.4.2</td>
                      <td className="naac-qif-cell">
                        Student Full time Teacher Ratio
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/2.4.2.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          2.4.2 DVV
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="naac-qif-cell naac-qif-cell--center">2.5.1</td>
                      <td className="naac-qif-cell">
                        Mechanism of internal assessment is transparent and robust in terms of
                        frequency and mode
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/2.5.1.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          2.5.1 DVV
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="naac-qif-cell naac-qif-cell--center">2.6.1</td>
                      <td className="naac-qif-cell">
                        Programme and course outcomes for all Programmes offered by the institution
                        are stated and displayed...
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/2.6.1.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          2.6.1 DVV
                        </a>
                      </td>
                    </tr>
                    <tr className="naac-qif-row">
                      <td className="naac-qif-cell naac-qif-cell--center">2.6.2</td>
                      <td className="naac-qif-cell">
                        Attainment of Programme outcomes and course outcomes are evaluated by the
                        institution
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/2.6.2.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          2.6.2 DVV
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="naac-qif-cell naac-qif-cell--center">2.6.3</td>
                      <td className="naac-qif-cell">
                        Pass percentage of Students during last five years.
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/2.6.3.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          2.6.3 DVV
                        </a>
                      </td>
                    </tr>
                    <tr className="naac-qif-row">
                      <td className="naac-qif-cell naac-qif-cell--center">2.7.1</td>
                      <td className="naac-qif-cell">
                        Online student satisfaction survey regarding teaching learning process
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/2.7.1.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          2.7.1 DVV
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td
                        className="naac-qif-cell naac-qif-cell--center"
                        rowSpan={9}
                      >
                        Criteria 3: Teaching- Learning and Evaluation
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">3.1.1</td>
                      <td className="naac-qif-cell">
                        Grants received from Government and non-governmental agencies for research
                        projects / endowments in the institution during the last five years (INR in
                        Lakhs)
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/3.1.1.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          3.1.1_DVV
                        </a>
                      </td>
                    </tr>
                    <tr className="naac-qif-row">
                      <td className="naac-qif-cell naac-qif-cell--center">3.2.1</td>
                      <td className="naac-qif-cell">
                        Institution has created an ecosystem for innovations and has initiatives
                        for creation and transfer of knowledge
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/3.2.1.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          3.2.1_DVV
                        </a>
                      </td>
                    </tr>
                    <tr className="naac-qif-row">
                      <td className="naac-qif-cell naac-qif-cell--center">3.2.2</td>
                      <td className="naac-qif-cell">
                        Number of workshops/seminars/conferences including on Research Methodology,
                        Intellectual Property Rights (IPR) and entrepreneurship conducted during the
                        last five years
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/3.2.2.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          3.2.2_DVV
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="naac-qif-cell naac-qif-cell--center">3.3.1</td>
                      <td className="naac-qif-cell">
                        Number of research papers published per teacher in the Journals notified on
                        UGC care list during the last five years
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/3.3.1.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          3.3.1_DVV
                        </a>
                      </td>
                    </tr>
                    <tr className="naac-qif-row">
                      <td className="naac-qif-cell naac-qif-cell--center">3.3.2</td>
                      <td className="naac-qif-cell">
                        Number of books and chapters in edited volumes/books published and papers
                        published in national/ international conference proceedings per teacher
                        during last five years
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/3.3.2.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          3.3.2_DVV
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="naac-qif-cell naac-qif-cell--center">3.4.1</td>
                      <td className="naac-qif-cell">
                        Extension activities are carried out in the neighborhood community,
                        sensitizing students to social issues, for their holistic development...
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/3.4.1.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          3.4.1_DVV
                        </a>
                      </td>
                    </tr>
                    <tr className="naac-qif-row">
                      <td className="naac-qif-cell naac-qif-cell--center">3.4.2</td>
                      <td className="naac-qif-cell">
                        Awards and recognitions received for extension activities from government /
                        government recognized bodies
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/3.4.2.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          3.4.2_DVV
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="naac-qif-cell naac-qif-cell--center">3.4.3</td>
                      <td className="naac-qif-cell">
                        Number of extension and outreach programs conducted by the institution
                        through NSS/NCC/Red cross/YRC etc...
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/3.4.3.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          3.4.3_DVV
                        </a>
                      </td>
                    </tr>
                    <tr className="naac-qif-row">
                      <td className="naac-qif-cell naac-qif-cell--center">3.5.1</td>
                      <td className="naac-qif-cell">
                        The number of MoUs, collaborations/linkages for Faculty exchange, Student
                        exchange, Internship, Field trip, On-the-job training, research and other
                        academic activities during the last five years
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/3.5.1.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          3.5.1_DVV
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td
                        className="naac-qif-cell naac-qif-cell--center"
                        rowSpan={6}
                      >
                        Criteria 4: Infrastructure and Learning Resources
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">4.1.1</td>
                      <td className="naac-qif-cell">
                        The Institute has adequate infrastructure and other facilities for
                        Teaching-Learning, viz., classrooms, laboratories, computing equipment etc.
                        ICT enabled facilities such as smart class, LMS etc.
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/4.1.1.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          4.1.1
                        </a>
                      </td>
                    </tr>
                    <tr className="naac-qif-row">
                      <td className="naac-qif-cell naac-qif-cell--center">4.1.2</td>
                      <td className="naac-qif-cell">
                        Percentage of expenditure for infrastructure development and augmentation
                        excluding salary during last five years (INR in Lakhs)
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/4.1.2.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          4.1.2
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="naac-qif-cell naac-qif-cell--center">4.2.1</td>
                      <td className="naac-qif-cell">
                        Library is automated with digital facilities using Integrated Library
                        Management System (ILMS), adequate subscriptions to e-resources and journals
                        are made. The library is optimally used by the faculty and students.
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/4.2.1.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          4.2.1
                        </a>
                      </td>
                    </tr>
                    <tr className="naac-qif-row">
                      <td className="naac-qif-cell naac-qif-cell--center">4.3.1</td>
                      <td className="naac-qif-cell">
                        Institution frequently updates its IT facilities and provides sufficient
                        bandwidth for internet connection
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/4.3.1.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          4.3.1
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="naac-qif-cell naac-qif-cell--center">4.3.2</td>
                      <td className="naac-qif-cell">
                        Student Computer ratio (Data for the latest completed academic year)
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/4.3.2.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          4.3.2
                        </a>
                      </td>
                    </tr>
                    <tr className="naac-qif-row">
                      <td className="naac-qif-cell naac-qif-cell--center">4.4.1</td>
                      <td className="naac-qif-cell">
                        Percentage of expenditure incurred on maintenance of infrastructure
                        (physical and academic support facilities) excluding salary component during
                        the last five years (INR in Lakhs)
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/4.4.1.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          4.4.1
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td
                        className="naac-qif-cell naac-qif-cell--center"
                        rowSpan={9}
                      >
                        Criteria 5: Student Support and Progression
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">5.1.1</td>
                      <td className="naac-qif-cell">
                        Percentage of students benefited by scholarships and freeships provided by
                        the Government and Non- Government agencies during last five years
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/5.1.1.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          5.1.1
                        </a>
                      </td>
                    </tr>
                    <tr className="naac-qif-row">
                      <td className="naac-qif-cell naac-qif-cell--center">5.1.2</td>
                      <td className="naac-qif-cell">
                        Capacity building and skills enhancement initiatives taken by the
                        institution include the following 1. Soft skills, 2. Language and
                        communication skills, 3. Life skills (Yoga, physical fitness, health and
                        hygiene), 4. ICT/computing skills
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/5.1.2.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          5.1.2
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="naac-qif-cell naac-qif-cell--center">5.1.3</td>
                      <td className="naac-qif-cell">
                        Percentage of students benefited by guidance for competitive examinations
                        and career counselling offered by the institution during the last five
                        years
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/5.1.3.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          5.1.3
                        </a>
                      </td>
                    </tr>
                    <tr className="naac-qif-row">
                      <td className="naac-qif-cell naac-qif-cell--center">5.1.4</td>
                      <td className="naac-qif-cell">
                        The institution adopts the following for redressal of student grievances
                        including sexual harassment and ragging cases
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/5.1.4.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          5.1.4
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="naac-qif-cell naac-qif-cell--center">5.2.1</td>
                      <td className="naac-qif-cell">
                        Percentage of placement of outgoing students and students progressing to
                        higher education during the last five years
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/5.2.1.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          5.2.1
                        </a>
                      </td>
                    </tr>
                    <tr className="naac-qif-row">
                      <td className="naac-qif-cell naac-qif-cell--center">5.2.2</td>
                      <td className="naac-qif-cell">
                        Percentage of students qualifying in state/national/ international level
                        examinations during the last five years (eg: JAM/GATE/ CLAT/GMAT/CAT/GRE/TOEFL/
                        Civil Services/State government examinations, etc.)
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/5.2.2.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          5.2.2
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="naac-qif-cell naac-qif-cell--center">5.3.1</td>
                      <td className="naac-qif-cell">
                        Number of awards/medals for outstanding performance in sports/cultural
                        activities at University/state/national / international level (award for a
                        team event should be counted as one) during the last five years
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/5.3.1.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          5.3.1
                        </a>
                      </td>
                    </tr>
                    <tr className="naac-qif-row">
                      <td className="naac-qif-cell naac-qif-cell--center">5.3.2</td>
                      <td className="naac-qif-cell">
                        Average number of sports and cultural programs in which students of the
                        Institution participated during last five years (organized by the
                        institution/other institutions)
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/5.3.2.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          5.3.2
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="naac-qif-cell naac-qif-cell--center">5.4.1</td>
                      <td className="naac-qif-cell">
                        There is a registered Alumni Association that contributes significantly to
                        the development of the institution through financial and/or other support
                        services
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/5.4.1.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          5.4.1
                        </a>
                      </td>
                    </tr>
                    <tr className="naac-qif-row">
                      <td
                        className="naac-qif-cell naac-qif-cell--center"
                        rowSpan={9}
                      >
                        Criteria 6: Governance, Leadership and Management
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">6.1.1</td>
                      <td className="naac-qif-cell">
                        The institutional governance and leadership are in accordance with the
                        vision and mission of the Institution and it is visible in various
                        institutional practices such as NEP implementation, sustained institutional
                        growth, decentralization, participation in the institutional governance...
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/6.1.1.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          6.1.1
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="naac-qif-cell naac-qif-cell--center">6.2.1</td>
                      <td className="naac-qif-cell">
                        The institutional perspective plan is effectively deployed and functioning
                        of the institutional bodies is effective and efficient as visible from
                        policies, administrative setup, appointment, service rules, and procedures,
                        etc
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/6.2.1.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          6.2.1
                        </a>
                      </td>
                    </tr>
                    <tr className="naac-qif-row">
                      <td className="naac-qif-cell naac-qif-cell--center">6.2.2</td>
                      <td className="naac-qif-cell">
                        Institution implements e-governance in its operations 1. Administration 2.
                        Finance and Accounts 3. Student Admission and Support 4. Examination
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/6.2.2.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          6.2.2
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="naac-qif-cell naac-qif-cell--center">6.3.1</td>
                      <td className="naac-qif-cell">
                        The institution has performance appraisal system, effective welfare
                        measures for teaching and non-teaching staff and avenues for career
                        development/progression
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/6.3.1.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          6.3.1
                        </a>
                      </td>
                    </tr>
                    <tr className="naac-qif-row">
                      <td className="naac-qif-cell naac-qif-cell--center">6.3.2</td>
                      <td className="naac-qif-cell">
                        Percentage of teachers provided with financial support to attend
                        conferences/workshops and towards membership fee of professional bodies
                        during the last five years
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/6.3.2.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          6.3.2
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="naac-qif-cell naac-qif-cell--center">6.3.3</td>
                      <td className="naac-qif-cell">
                        Percentage of teaching and non-teaching staff participating in Faculty
                        development Programmes (FDP), Management Development Programmes (MDPs)
                        professional development /administrative training programs during the last
                        five years
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/6.3.3.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          6.3.3
                        </a>
                      </td>
                    </tr>
                    <tr className="naac-qif-row">
                      <td className="naac-qif-cell naac-qif-cell--center">6.4.1</td>
                      <td className="naac-qif-cell">
                        Institution has strategies for mobilization and optimal utilization of
                        resources and funds from various sources (government/ nongovernment
                        organizations) and it conducts financial audits regularly (internal and
                        external)
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/6.4.1.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          6.4.1
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="naac-qif-cell naac-qif-cell--center">6.5.1</td>
                      <td className="naac-qif-cell">
                        Internal Quality Assurance Cell (IQAC) has contributed significantly for
                        institutionalizing the quality assurance strategies and processes...
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/6.5.1.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          6.5.1
                        </a>
                      </td>
                    </tr>
                    <tr className="naac-qif-row">
                      <td className="naac-qif-cell naac-qif-cell--center">6.5.2</td>
                      <td className="naac-qif-cell">
                        Quality assurance initiatives of the institution include: 1. Regular
                        meeting of Internal Quality Assurance Cell (IQAC); quality improvement
                        initiatives identified and implemented 2. Academic and Administrative Audit
                        (AAA) and follow-up action taken 3. Collaborative quality initiatives with
                        other institution(s) 4. Participation in NIRF and other recognized rankings
                        5. Any other quality audit/accreditation recognized by state, national or
                        international agencies such as NAAC, NBA etc.
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/6.5.2.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          6.5.2
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td
                        className="naac-qif-cell naac-qif-cell--center"
                        rowSpan={6}
                      >
                        Criteria 7: Institutional Values and Best Practices
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">7.1.1</td>
                      <td className="naac-qif-cell">
                        Measures initiated by the Institution for the promotion of gender equity
                        and Institutional initiatives to celebrate/ organize national and
                        international commemorative days, events and festivals during the last five
                        years (Within 500 words)
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/7.1.1.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          7.1.1
                        </a>
                      </td>
                    </tr>
                    <tr className="naac-qif-row">
                      <td className="naac-qif-cell naac-qif-cell--center">7.1.2</td>
                      <td className="naac-qif-cell">
                        The Institution has facilities and initiatives for 1. Alternate sources of
                        energy and energy conservation measures 2. Management of the various types
                        of degradable and nondegradable waste 3. Water conservation 4. Green campus
                        initiatives 5. Disabled-friendly, barrier free environment
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/7.1.2.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          7.1.2
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="naac-qif-cell naac-qif-cell--center">7.1.3</td>
                      <td className="naac-qif-cell">
                        Quality audits on environment and energy regularly undertaken by the
                        Institution. The institutional environment and energy initiatives are
                        confirmed through the following 1. Green audit / Environment audit 2. Energy
                        audit 3. Clean and green campus initiatives 4. Beyond the campus
                        environmental promotion activities
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/7.1.3.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          7.1.3
                        </a>
                      </td>
                    </tr>
                    <tr className="naac-qif-row">
                      <td className="naac-qif-cell naac-qif-cell--center">7.1.4</td>
                      <td className="naac-qif-cell">
                        Describe the Institutional efforts/initiatives in providing an inclusive
                        environment i.e., tolerance and harmony towards cultural, regional,
                        linguistic, communal socioeconomic and Sensitization of students and
                        employees to the constitutional obligations: values, rights, duties and
                        responsibilities of citizens (Within 500 words)
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/7.1.4.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          7.1.4
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="naac-qif-cell naac-qif-cell--center">7.2.1</td>
                      <td className="naac-qif-cell">
                        Describe two best practices successfully implemented by the Institution as
                        per NAAC format provided in the Manual
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/7.2.1.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          7.2.1
                        </a>
                      </td>
                    </tr>
                    <tr className="naac-qif-row">
                      <td className="naac-qif-cell naac-qif-cell--center">7.3.1</td>
                      <td className="naac-qif-cell">
                        Portray the performance of the Institution in one area distinctive to its
                        priority and thrust within 1000 words
                      </td>
                      <td className="naac-qif-cell naac-qif-cell--center">
                        <a
                          href="https://vcet.edu.in/NAAC/7.3.1.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          7.3.1
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="naac-dvv" id="cycle2-dvv">
                <h3 className="naac-dvv-title">DVV CLARIFICATIONS :</h3>
                <h4 className="naac-dvv-subtitle">
                  HEI RESPONSE TO DVV FINDINGS-EXTENDED PROFILE :
                </h4>
                <div className="naac-table-wrapper">
                  <table className="table table-bordered naac-dvv-table">
                    <thead>
                      <tr>
                        <th className="naac-dvv-col naac-dvv-col--id">Extended ID</th>
                        <th className="naac-dvv-col naac-dvv-col--profile">Extended Profile</th>
                        <th className="naac-dvv-col naac-dvv-col--link">Link</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="naac-extended-row">
                        <td className="naac-extended-cell naac-extended-cell--center">
                          <span>
                            1. Students
                            <br />
                            1.1
                          </span>
                        </td>
                        <td className="naac-extended-cell">
                          Number of Students year wise during the last five year
                        </td>
                        <td className="naac-extended-cell naac-extended-cell--center">
                          <a
                            href="https://vcet.edu.in/NAAC/1/DVV/1.1_DVV_Clarification.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            1.1_DVV
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="naac-extended-cell naac-extended-cell--center">
                          <span>
                            2. Teachers
                            <br />
                            2.1
                            <br />
                            2.2
                          </span>
                        </td>
                        <td className="naac-extended-cell">
                          Number of teaching staff/full time teachers during the last five years
                          (Without repeat count)
                          <br />
                          Number of teaching staff/full time teachers during the last five years
                        </td>
                        <td className="naac-extended-cell naac-extended-cell--center">
                          <a
                            href="https://vcet.edu.in/NAAC/2/DVV/2.1_DVV_Clarification.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            2.1_DVV
                          </a>
                          <br />
                          <a
                            href="https://vcet.edu.in/NAAC/2/DVV/2.2_DVV_Clarification_signed.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            2.2_DVV
                          </a>
                        </td>
                      </tr>
                      <tr className="naac-extended-row">
                        <td className="naac-extended-cell naac-extended-cell--center">
                          <span>
                            3. Institution
                            <br />
                            3.1
                          </span>
                        </td>
                        <td className="naac-extended-cell">
                          Expenditure excluding salary component year wise during the last wise
                          years (INR in lakhs)
                        </td>
                        <td className="naac-extended-cell naac-extended-cell--center">
                          <a
                            href="https://vcet.edu.in/NAAC/3/DVV/3.1_DVV_Clarification_signed.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            3.1_DVV
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h4 className="naac-dvv-title">HEI RESPONSE TO DVV FINDINGS -METRIC :</h4>
                <div className="naac-table-wrapper">
                  <table className="table table-bordered naac-metric-table">
                    <thead>
                      <tr>
                        <th className="naac-qif-col naac-qif-col--criteria">Criteria</th>
                        <th className="naac-qif-col naac-qif-col--sub">Sub-Criteria</th>
                        <th className="naac-qif-col naac-qif-col--heading">Criteria Heading</th>
                        <th className="naac-qif-col naac-qif-col--link">Link</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td
                          className="naac-qif-cell naac-qif-cell--center"
                          rowSpan={4}
                        >
                          Criteria 1: Curriculum Aspect
                        </td>
                        <td className="naac-qif-cell naac-qif-cell--center">1.2.1</td>
                        <td className="naac-qif-cell">
                          Number of Certificate/Value added Courses of MOOCs, SWAYAM, NPTEL etc.
                        </td>
                        <td className="naac-qif-cell naac-qif-cell--center">
                          <a
                            href="https://vcet.edu.in/NAAC/1/DVV/1.2.1_DVV_Clarification_signed.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            1.2.1_DVV
                          </a>
                        </td>
                      </tr>
                      <tr className="naac-qif-row">
                        <td className="naac-qif-cell naac-qif-cell--center">1.2.2</td>
                        <td className="naac-qif-cell">
                          Percentage of students enrolled in Certificate/Value added Courses and
                          also completed online courses of MOOCs, SWAYAM, NPTEL as against the total
                          number of students during the last five years
                        </td>
                        <td className="naac-qif-cell naac-qif-cell--center">
                          <a
                            href="https://vcet.edu.in/NAAC/1/DVV/1.2.2_DVV_Clarification_signed.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            1.2.2_DVV
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="naac-qif-cell naac-qif-cell--center">1.3.2</td>
                        <td className="naac-qif-cell">
                          Percentage of students undertaking project work/field work/ internships
                          (Data for the latest completed academic year)
                        </td>
                        <td className="naac-qif-cell naac-qif-cell--center">
                          <a
                            href="https://vcet.edu.in/NAAC/1/DVV/1.3.2_DVV_Clarification_signed.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            1.3.2_DVV
                          </a>
                        </td>
                      </tr>
                      <tr className="naac-qif-row">
                        <td className="naac-qif-cell naac-qif-cell--center">1.4.1</td>
                        <td className="naac-qif-cell">
                          Institution obtains feedback on the academic performance and ambience of
                          the institution from various stakeholders, such as Students, Teachers,
                          Employers, Alumni etc. and action taken report on the feedback is made
                          available on institutional website (Yes or No)
                        </td>
                        <td className="naac-qif-cell naac-qif-cell--center">
                          <a
                            href="https://vcet.edu.in/NAAC/1/DVV/1.4.1_DVV_Clarification_signed.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            1.4.1_DVV
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="naac-qif-cell naac-qif-cell--center"
                          rowSpan={6}
                        >
                          Criteria 2: Teaching-Learning and Evaluation
                        </td>
                        <td className="naac-qif-cell naac-qif-cell--center">2.1.1</td>
                        <td className="naac-qif-cell">Student Enrolment and Profile</td>
                        <td className="naac-qif-cell naac-qif-cell--center">
                          <a
                            href="https://vcet.edu.in/NAAC/2.1.1_DVV.html"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            2.1.1_DVV
                          </a>
                        </td>
                      </tr>
                      <tr className="naac-qif-row">
                        <td className="naac-qif-cell naac-qif-cell--center">2.1.2</td>
                        <td className="naac-qif-cell">
                          Percentage of seats filled against seats reserved for various categories
                          (SC, ST, OBC, Divyangjan, etc.) as per applicable reservation policy during
                          the last five Years
                        </td>
                        <td className="naac-qif-cell naac-qif-cell--center">
                          <a
                            href="https://vcet.edu.in/NAAC/2.1.2_DVV.html"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            2.1.2_DVV
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="naac-qif-cell naac-qif-cell--center">2.2.1</td>
                        <td className="naac-qif-cell">Student Enrolment and Profile</td>
                        <td className="naac-qif-cell naac-qif-cell--center">
                          <a
                            href="https://vcet.edu.in/NAAC/2.2.1_DVV.html"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            2.2.1_DVV
                          </a>
                        </td>
                      </tr>
                      <tr className="naac-qif-row">
                        <td className="naac-qif-cell naac-qif-cell--center">2.4.1</td>
                        <td className="naac-qif-cell">
                          Percentage of full time teachers against sanctioned posts during the last
                          five years
                        </td>
                        <td className="naac-qif-cell naac-qif-cell--center">
                          <a
                            href="https://vcet.edu.in/NAAC/2.4.1_DVV.html"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            2.4.1_DVV
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="naac-qif-cell naac-qif-cell--center">2.4.2</td>
                        <td className="naac-qif-cell">Student Full time Teacher Ratio</td>
                        <td className="naac-qif-cell naac-qif-cell--center">
                          <a
                            href="https://vcet.edu.in/NAAC/2.4.2_DVV.html"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            2.4.2_DVV
                          </a>
                        </td>
                      </tr>
                      <tr className="naac-qif-row">
                        <td className="naac-qif-cell naac-qif-cell--center">2.6.3</td>
                        <td className="naac-qif-cell">
                          Pass percentage of Students during last five years.
                        </td>
                        <td className="naac-qif-cell naac-qif-cell--center">
                          <a
                            href="https://vcet.edu.in/NAAC/2.6.3_DVV.html"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            2.6.3_DVV
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="naac-qif-cell naac-qif-cell--center"
                          rowSpan={6}
                        >
                          Criteria 3: Research, Innovations and Extension
                        </td>
                        <td className="naac-qif-cell naac-qif-cell--center">3.1.1</td>
                        <td className="naac-qif-cell">
                          Grants received from Government and non- governmental agencies for
                          research projects / endowments in the institution during the last five
                          years (INR in Lakhs)
                        </td>
                        <td className="naac-qif-cell naac-qif-cell--center">
                          <a
                            href="https://vcet.edu.in/NAAC/3.1.1_DVV.html"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            3.1.1_DVV
                          </a>
                        </td>
                      </tr>
                      <tr className="naac-qif-row">
                        <td className="naac-qif-cell naac-qif-cell--center">3.2.2</td>
                        <td className="naac-qif-cell">
                          Number of workshops/seminars/conferences including on Research Methodology,
                          Intellectual Property Rights (IPR) and entrepreneurship conducted during
                          the last five years
                        </td>
                        <td className="naac-qif-cell naac-qif-cell--center">
                          <a
                            href="https://vcet.edu.in/NAAC/3.2.2_DVV.html"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            3.2.2_DVV
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="naac-qif-cell naac-qif-cell--center">3.3.1</td>
                        <td className="naac-qif-cell">
                          Number of research papers published per teacher in the Journals notified
                          on UGC care list during the last five years
                        </td>
                        <td className="naac-qif-cell naac-qif-cell--center">
                          <a
                            href="https://vcet.edu.in/NAAC/3.3.1_DVV.html"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            3.3.1_DVV
                          </a>
                        </td>
                      </tr>
                      <tr className="naac-qif-row">
                        <td className="naac-qif-cell naac-qif-cell--center">3.3.2</td>
                        <td className="naac-qif-cell">
                          Number of books and chapters in edited volumes/books published and papers
                          published in national/ international conference proceedings per teacher
                          during last five years
                        </td>
                        <td className="naac-qif-cell naac-qif-cell--center">
                          <a
                            href="https://vcet.edu.in/NAAC/3.3.2_DVV.html"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            3.3.2_DVV
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="naac-qif-cell naac-qif-cell--center">3.4.3</td>
                        <td className="naac-qif-cell">
                          Number of extension and outreach programs conducted by the institution
                          through NSS/NCC/Red cross/YRC etc., (including the programmes such as
                          Swachh Bharat, AIDS awareness, Gender issues etc.)
                        </td>
                        <td className="naac-qif-cell naac-qif-cell--center">
                          <a
                            href="https://vcet.edu.in/NAAC/3.4.3_DVV.html"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            3.4.3_DVV
                          </a>
                        </td>
                      </tr>
                      <tr className="naac-qif-row">
                        <td className="naac-qif-cell naac-qif-cell--center">3.5.1</td>
                        <td className="naac-qif-cell">
                          The number of MoUs, collaborations/linkages for Faculty exchange, Student
                          exchange, Internship, Field trip, On-the- job training, research and other
                          academic activities during the last five years
                        </td>
                        <td className="naac-qif-cell naac-qif-cell--center">
                          <a
                            href="https://vcet.edu.in/NAAC/3.5.1_DVV.html"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            3.5.1_DVV
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="naac-qif-cell naac-qif-cell--center"
                          rowSpan={3}
                        >
                          Criteria 4: Infrastructure and Learning Resources
                        </td>
                        <td className="naac-qif-cell naac-qif-cell--center">4.1.2</td>
                        <td className="naac-qif-cell">
                          Percentage of expenditure for infrastructure development and augmentation
                          excluding salary during last five years (INR in Lakhs)
                        </td>
                        <td className="naac-qif-cell naac-qif-cell--center">
                          <a
                            href="https://vcet.edu.in/NAAC/4.1.2_DVV.html"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            4.1.2_DVV
                          </a>
                        </td>
                      </tr>
                      <tr className="naac-qif-row">
                        <td className="naac-qif-cell naac-qif-cell--center">4.3.2</td>
                        <td className="naac-qif-cell">
                          Student Computer ratio (Data for the latest completed academic year)
                        </td>
                        <td className="naac-qif-cell naac-qif-cell--center">
                          <a
                            href="https://vcet.edu.in/NAAC/4.3.2_DVV.html"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            4.3.2_DVV
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="naac-qif-cell naac-qif-cell--center">4.4.1</td>
                        <td className="naac-qif-cell">
                          Percentage of expenditure incurred on maintenance of infrastructure
                          (physical and academic support facilities) excluding salary component
                          during the last five years (INR in Lakhs)
                        </td>
                        <td className="naac-qif-cell naac-qif-cell--center">
                          <a
                            href="https://vcet.edu.in/NAAC/4.4.1_DVV.html"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            4.4.1_DVV
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="naac-qif-cell naac-qif-cell--center"
                          rowSpan={8}
                        >
                          Criteria 5: Student Support and Progression
                        </td>
                        <td className="naac-qif-cell naac-qif-cell--center">5.1.1</td>
                        <td className="naac-qif-cell">
                          Percentage of students benefited by scholarships and freeships provided
                          by the Government and Non- Government agencies during last five years
                        </td>
                        <td className="naac-qif-cell naac-qif-cell--center">
                          <a
                            href="https://vcet.edu.in/NAAC/5.1.1_DVV.html"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            5.1.1_DVV
                          </a>
                        </td>
                      </tr>
                      <tr className="naac-qif-row">
                        <td className="naac-qif-cell naac-qif-cell--center">5.1.2</td>
                        <td className="naac-qif-cell">
                          Capacity building and skills enhancement initiatives taken by the
                          institution include the following 1. Soft skills, 2. Language and
                          communication skills, 3. Life skills (Yoga, physical fitness, health and
                          hygiene), 4. ICT/computing skills
                        </td>
                        <td className="naac-qif-cell naac-qif-cell--center">
                          <a
                            href="https://vcet.edu.in/NAAC/5.1.2_DVV.html"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            5.1.2_DVV
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="naac-qif-cell naac-qif-cell--center">5.1.3</td>
                        <td className="naac-qif-cell">
                          Percentage of students benefited by guidance for competitive examinations
                          and career counselling offered by the institution during the last five
                          years
                        </td>
                        <td className="naac-qif-cell naac-qif-cell--center">
                          <a
                            href="https://vcet.edu.in/NAAC/5.1.3_DVV.html"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            5.1.3_DVV
                          </a>
                        </td>
                      </tr>
                      <tr className="naac-qif-row">
                        <td className="naac-qif-cell naac-qif-cell--center">5.1.4</td>
                        <td className="naac-qif-cell">
                          The institution adopts the following for redressal of student grievances
                          including sexual harassment and ragging cases
                        </td>
                        <td className="naac-qif-cell naac-qif-cell--center">
                          <a
                            href="https://vcet.edu.in/NAAC/5.1.4_DVV.html"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            5.1.4_DVV
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="naac-qif-cell naac-qif-cell--center">5.2.1</td>
                        <td className="naac-qif-cell">
                          Percentage of placement of outgoing students and students progressing to
                          higher education during the last five years
                        </td>
                        <td className="naac-qif-cell naac-qif-cell--center">
                          <a
                            href="https://vcet.edu.in/NAAC/5.2.1_DVV.html"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            5.2.1_DVV
                          </a>
                        </td>
                      </tr>
                      <tr className="naac-qif-row">
                        <td className="naac-qif-cell naac-qif-cell--center">5.2.2</td>
                        <td className="naac-qif-cell">
                          Percentage of students qualifying in state/national/ international level
                          examinations during the last five years (eg: JAM/GATE/ CLAT/GMAT/CAT/GRE/
                          TOEFL/ Civil Services/State government examinations, etc.)
                        </td>
                        <td className="naac-qif-cell naac-qif-cell--center">
                          <a
                            href="https://vcet.edu.in/NAAC/5.2.2_DVV.html"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            5.2.2_DVV
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="naac-qif-cell naac-qif-cell--center">5.3.1</td>
                        <td className="naac-qif-cell">
                          Number of awards/medals for outstanding performance in sports/cultural
                          activities at University/state/national / international level (award for a
                          team event should be counted as one) during the last five years
                        </td>
                        <td className="naac-qif-cell naac-qif-cell--center">
                          <a
                            href="https://vcet.edu.in/NAAC/5.3.1_DVV.html"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            5.3.1_DVV
                          </a>
                        </td>
                      </tr>
                      <tr className="naac-qif-row">
                        <td className="naac-qif-cell naac-qif-cell--center">5.3.2</td>
                        <td className="naac-qif-cell">
                          Average number of sports and cultural programs in which students of the
                          Institution participated during last five years (organized by the
                          institution/other institutions)
                        </td>
                        <td className="naac-qif-cell naac-qif-cell--center">
                          <a
                            href="https://vcet.edu.in/NAAC/5.3.2_DVV.html"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            5.3.2_DVV
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="naac-qif-cell naac-qif-cell--center"
                          rowSpan={4}
                        >
                          <strong>Criteria 6: Governance, Leadership and Management</strong>
                        </td>
                        <td className="naac-qif-cell naac-qif-cell--center">6.2.2</td>
                        <td className="naac-qif-cell">
                          Institution implements e-governance in its operations 1. Administration
                          2. Finance and Accounts 3. Student Admission and Support 4. Examination
                        </td>
                        <td className="naac-qif-cell naac-qif-cell--center">
                          <a
                            href="https://vcet.edu.in/NAAC/6.2.2_DVV.html"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <strong>6.2.2_DVV</strong>
                          </a>
                        </td>
                      </tr>
                      <tr className="naac-qif-row">
                        <td className="naac-qif-cell naac-qif-cell--center">6.3.2</td>
                        <td className="naac-qif-cell">
                          Percentage of teachers provided with financial support to attend
                          conferences/workshops and towards membership fee of professional bodies
                          during the last five years
                        </td>
                        <td className="naac-qif-cell naac-qif-cell--center">
                          <a
                            href="https://vcet.edu.in/NAAC/6.3.2_DVV.html"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <strong>6.3.2_DVV</strong>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="naac-qif-cell naac-qif-cell--center">6.3.3</td>
                        <td className="naac-qif-cell">
                          Institution implements e-governance in its operations 1. Administration
                          2. Finance and Accounts 3. Student Admission and Support 4. Examination
                        </td>
                        <td className="naac-qif-cell naac-qif-cell--center">
                          <a
                            href="https://vcet.edu.in/NAAC/6.3.3_DVV.html"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <strong>6.3.3_DVV</strong>
                          </a>
                        </td>
                      </tr>
                      <tr className="naac-qif-row">
                        <td className="naac-qif-cell naac-qif-cell--center">6.5.2</td>
                        <td className="naac-qif-cell">
                          Quality assurance initiatives of the institution include:1. Regular
                          meeting of Internal Quality Assurance Cell (IQAC); quality improvement
                          initiatives identified and implemented 2. Academic and Administrative
                          Audit (AAA) and follow-up action taken 3. Collaborative quality initiatives
                          with other institution(s) 4. Participation in NIRF and other recognized
                          rankings 5. Any other quality audit/accreditation recognized by state,
                          national or international agencies such as NAAC, NBA etc.
                        </td>
                        <td className="naac-qif-cell naac-qif-cell--center">
                          <a
                            href="https://vcet.edu.in/NAAC/6.5.2_DVV.html"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <strong>6.5.2_DVV</strong>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="naac-qif-cell naac-qif-cell--center"
                          rowSpan={2}
                        >
                          <strong>Criteria 7: Institutional Values and Best Practices</strong>
                        </td>
                        <td className="naac-qif-cell naac-qif-cell--center">7.1.2</td>
                        <td className="naac-qif-cell">
                          Percentage of students benefited by scholarships and freeships provided by
                          the Government and Non- Government agencies during last five years
                        </td>
                        <td className="naac-qif-cell naac-qif-cell--center">
                          <a
                            href="https://vcet.edu.in/NAAC/7.1.2_DVV.html"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <strong>7.1.2_DVV</strong>
                          </a>
                        </td>
                      </tr>
                      <tr className="naac-qif-row">
                        <td className="naac-qif-cell naac-qif-cell--center">7.1.3</td>
                        <td className="naac-qif-cell">
                          Quality audits on environment and energy regularly undertaken by the
                          Institution. The institutional environment and energy initiatives are
                          confirmed through the following 1. Green audit / Environment audit 2.
                          Energy audit 3. Clean and green campus initiatives 4. Beyond the campus
                          environmental promotion activities
                        </td>
                        <td className="naac-qif-cell naac-qif-cell--center">
                          <a
                            href="https://vcet.edu.in/NAAC/7.1.3_DVV.html"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <strong>7.1.3_DVV</strong>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default NaacPage;
