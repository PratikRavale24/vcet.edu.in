import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

/* ── Homepage Components ── */
import Header from './components/Header';
import Hero from './components/Hero';
import TopBanner from './components/TopBanner';
import About from './components/About';
import Departments from './components/Departments';
import Placements from './components/Placements';
import Recruiters from './components/Recruiters';
import Achievements from './components/Achievements';
import ExploreUs from './components/ExploreUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Facilities from './components/Facilities';
import Footer from './components/Footer';

/* ── Lazy-loaded Pages ── */
// About Us
const AboutVCET = lazy(() => import('./pages/AboutVCET'));
const PresidentsDesk = lazy(() => import('./pages/PresidentsDesk'));
const PrincipalsDesk = lazy(() => import('./pages/PrincipalsDesk'));
const GoverningCouncil = lazy(() => import('./pages/GoverningCouncil'));
const OrganizationalStructure = lazy(() => import('./pages/OrganizationalStructure'));
const Administration = lazy(() => import('./pages/Administration'));
const StrategicPlan = lazy(() => import('./pages/StrategicPlan'));
const CodeOfConduct = lazy(() => import('./pages/CodeOfConduct'));

// Admission
const CoursesIntake = lazy(() => import('./pages/CoursesIntake'));
const FeesStructure = lazy(() => import('./pages/FeesStructure'));
const Scholarships = lazy(() => import('./pages/Scholarships'));
const Brochure = lazy(() => import('./pages/Brochure'));
const DocumentsRequired = lazy(() => import('./pages/DocumentsRequired'));
const CutOff = lazy(() => import('./pages/CutOff'));

// Departments
const DeptComputerEngg = lazy(() => import('./pages/DeptComputerEngg'));
const DeptCSDS = lazy(() => import('./pages/DeptCSDS'));
const DeptIT = lazy(() => import('./pages/DeptIT'));
const DeptAIDS = lazy(() => import('./pages/DeptAIDS'));
const DeptMech = lazy(() => import('./pages/DeptMech'));
const DeptENTC = lazy(() => import('./pages/DeptENTC'));
const DeptCivil = lazy(() => import('./pages/DeptCivil'));
const DeptFE = lazy(() => import('./pages/DeptFE'));

// Academics
const DeanAcademics = lazy(() => import('./pages/DeanAcademics'));
const AcademicCalendar = lazy(() => import('./pages/AcademicCalendar'));
const TeachingLearning = lazy(() => import('./pages/TeachingLearning'));
const SwayamNPTEL = lazy(() => import('./pages/SwayamNPTEL'));
const HonoursMinor = lazy(() => import('./pages/HonoursMinor'));

// Research
const ResearchIntro = lazy(() => import('./pages/ResearchIntro'));
const FundedResearch = lazy(() => import('./pages/FundedResearch'));
const Publications = lazy(() => import('./pages/Publications'));
const Parents = lazy(() => import('./pages/Parents'));
const ConsultancyProjects = lazy(() => import('./pages/ConsultancyProjects'));
const ResearchFacility = lazy(() => import('./pages/ResearchFacility'));
const ResearchConventions = lazy(() => import('./pages/ResearchConventions'));
const ResearchPolicy = lazy(() => import('./pages/ResearchPolicy'));
const IIC = lazy(() => import('./pages/IIC'));
const NIRF = lazy(() => import('./pages/NIRF'));
const Downloads = lazy(() => import('./pages/Downloads'));

// Facilities
const CentralComputing = lazy(() => import('./pages/CentralComputing'));
const LibraryPage = lazy(() => import('./pages/Library'));
const CounselingCell = lazy(() => import('./pages/CounselingCell'));
const LadiesCommonRoom = lazy(() => import('./pages/LadiesCommonRoom'));
const SportsGymkhana = lazy(() => import('./pages/SportsGymkhana'));
const HealthFacilities = lazy(() => import('./pages/HealthFacilities'));
const DifferentlyAbled = lazy(() => import('./pages/DifferentlyAbled'));

// Student Life
const CareerAtVCET = lazy(() => import('./pages/CareerAtVCET'));
const StudentsCouncil = lazy(() => import('./pages/StudentsCouncil'));
const CulturalCommittee = lazy(() => import('./pages/CulturalCommittee'));
const SportsCommittee = lazy(() => import('./pages/SportsCommittee'));
const Literati = lazy(() => import('./pages/Literati'));
const NSS = lazy(() => import('./pages/NSS'));
const EBSB = lazy(() => import('./pages/EBSB'));
const IEEE = lazy(() => import('./pages/IEEE'));
const StudentsClub = lazy(() => import('./pages/StudentsClub'));
const CSI = lazy(() => import('./pages/CSI'));
const IETE = lazy(() => import('./pages/IETE'));
const ISHRAE = lazy(() => import('./pages/ISHRAE'));
const VMEA = lazy(() => import('./pages/VMEA'));
const Hackathon = lazy(() => import('./pages/Hackathon'));
const NSDC = lazy(() => import('./pages/NSDC'));
const IGBC = lazy(() => import('./pages/IGBC'));

// Committees
const CollegeDevelopmentCommittee = lazy(() => import('./pages/CollegeDevelopmentCommittee'));
const IQAC = lazy(() => import('./pages/IQAC'));
const GrievanceRedressal = lazy(() => import('./pages/GrievanceRedressal'));
const SRGCCommittee = lazy(() => import('./pages/SRGCCommittee'));
const AntiRagging = lazy(() => import('./pages/AntiRagging'));
const SCSTCommittee = lazy(() => import('./pages/SCSTCommittee'));
const InternalComplaint = lazy(() => import('./pages/InternalComplaint'));
const EqualOpportunity = lazy(() => import('./pages/EqualOpportunity'));
const SEDGCell = lazy(() => import('./pages/SEDGCell'));

// NAAC
const SSS = lazy(() => import('./pages/SSS'));
const SSSReport = lazy(() => import('./pages/SSSReport'));
const SSRCycle1 = lazy(() => import('./pages/SSRCycle1'));
const SSRCycle2 = lazy(() => import('./pages/SSRCycle2'));
const BestPractices = lazy(() => import('./pages/BestPractices'));
const NAACScore = lazy(() => import('./pages/NAACScore'));

// Contact & Others
const ContactUs = lazy(() => import('./pages/ContactUs'));
const Training = lazy(() => import('./pages/Training'));
const ECell = lazy(() => import('./pages/ECell'));
const IIIC = lazy(() => import('./pages/IIIC'));
const ExamCell = lazy(() => import('./pages/ExamCell'));

/* ── Loading Spinner ── */
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="text-center">
      <div className="w-10 h-10 border-3 border-brand-blue/20 border-t-brand-blue rounded-full animate-spin mx-auto mb-4" />
      <p className="text-sm text-slate-400 font-medium">Loading…</p>
    </div>
  </div>
);

/* ── Homepage Component ── */
const HomePage: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen font-sans bg-white text-slate-800">
      <div className="sticky top-0 z-[100] md:contents">
        <TopBanner />
        <Header />
      </div>
      <main>
        <Hero />
        <About />
        <Departments />
        <Placements />
        <Recruiters />
        <Achievements />
        <ExploreUs />
        <Gallery />
        <Testimonials />
        <Facilities />
      </main>
      <Footer />
    </div>
  );
};

/* ── App with Router ── */
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Homepage */}
          <Route path="/" element={<HomePage />} />

          {/* About Us */}
          <Route path="/about-us" element={<AboutVCET />} />
          <Route path="/presidents-desk" element={<PresidentsDesk />} />
          <Route path="/principals-desk" element={<PrincipalsDesk />} />
          <Route path="/governing-council" element={<GoverningCouncil />} />
          <Route path="/organizational-structure" element={<OrganizationalStructure />} />
          <Route path="/administration" element={<Administration />} />
          <Route path="/strategic-plan" element={<StrategicPlan />} />
          <Route path="/code-of-conduct" element={<CodeOfConduct />} />

          {/* Admission */}
          <Route path="/courses-and-intake" element={<CoursesIntake />} />
          <Route path="/fees-structure" element={<FeesStructure />} />
          <Route path="/scholarships" element={<Scholarships />} />
          <Route path="/brochure" element={<Brochure />} />
          <Route path="/documents-required" element={<DocumentsRequired />} />
          <Route path="/cut-off" element={<CutOff />} />

          {/* Departments */}
          <Route path="/computer-engineering" element={<DeptComputerEngg />} />
          <Route path="/cs-data-science" element={<DeptCSDS />} />
          <Route path="/information-technology" element={<DeptIT />} />
          <Route path="/ai-data-science" element={<DeptAIDS />} />
          <Route path="/mechanical-engineering" element={<DeptMech />} />
          <Route path="/electronics-telecomm" element={<DeptENTC />} />
          <Route path="/civil-engineering" element={<DeptCivil />} />
          <Route path="/first-year-engineering" element={<DeptFE />} />

          {/* Academics */}
          <Route path="/dean-academics" element={<DeanAcademics />} />
          <Route path="/academic-calendar" element={<AcademicCalendar />} />
          <Route path="/teaching-learning" element={<TeachingLearning />} />
          <Route path="/swayam-nptel" element={<SwayamNPTEL />} />
          <Route path="/honours-minor" element={<HonoursMinor />} />

          {/* Research */}
          <Route path="/research" element={<ResearchIntro />} />
          <Route path="/funded-research" element={<FundedResearch />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/parents" element={<Parents />} />
          <Route path="/consultancy-projects" element={<ConsultancyProjects />} />
          <Route path="/research-facility" element={<ResearchFacility />} />
          <Route path="/research-conventions" element={<ResearchConventions />} />
          <Route path="/research-policy" element={<ResearchPolicy />} />
          <Route path="/iic" element={<IIC />} />
          <Route path="/nirf" element={<NIRF />} />
          <Route path="/downloads" element={<Downloads />} />

          {/* Facilities */}
          <Route path="/central-computing" element={<CentralComputing />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/counseling-cell" element={<CounselingCell />} />
          <Route path="/ladies-common-room" element={<LadiesCommonRoom />} />
          <Route path="/sports-gymkhana" element={<SportsGymkhana />} />
          <Route path="/health-facilities" element={<HealthFacilities />} />
          <Route path="/differently-abled" element={<DifferentlyAbled />} />

          {/* Student Life */}
          <Route path="/career-at-vcet" element={<CareerAtVCET />} />
          <Route path="/students-council" element={<StudentsCouncil />} />
          <Route path="/cultural-committee" element={<CulturalCommittee />} />
          <Route path="/sports-committee" element={<SportsCommittee />} />
          <Route path="/literati" element={<Literati />} />
          <Route path="/nss" element={<NSS />} />
          <Route path="/ebsb" element={<EBSB />} />
          <Route path="/ieee" element={<IEEE />} />
          <Route path="/students-club" element={<StudentsClub />} />
          <Route path="/csi" element={<CSI />} />
          <Route path="/iete" element={<IETE />} />
          <Route path="/ishrae" element={<ISHRAE />} />
          <Route path="/vmea" element={<VMEA />} />
          <Route path="/hackathon" element={<Hackathon />} />
          <Route path="/nsdc" element={<NSDC />} />
          <Route path="/igbc" element={<IGBC />} />

          {/* Committees */}
          <Route path="/college-development-committee" element={<CollegeDevelopmentCommittee />} />
          <Route path="/iqac" element={<IQAC />} />
          <Route path="/grievance-redressal" element={<GrievanceRedressal />} />
          <Route path="/srgc-committee" element={<SRGCCommittee />} />
          <Route path="/anti-ragging" element={<AntiRagging />} />
          <Route path="/sc-st-committee" element={<SCSTCommittee />} />
          <Route path="/internal-complaint" element={<InternalComplaint />} />
          <Route path="/equal-opportunity" element={<EqualOpportunity />} />
          <Route path="/sedg-cell" element={<SEDGCell />} />

          {/* NAAC */}
          <Route path="/sss" element={<SSS />} />
          <Route path="/sss-report" element={<SSSReport />} />
          <Route path="/ssr-cycle-1" element={<SSRCycle1 />} />
          <Route path="/ssr-cycle-2" element={<SSRCycle2 />} />
          <Route path="/best-practices" element={<BestPractices />} />
          <Route path="/naac-score" element={<NAACScore />} />

          {/* Contact & Others */}
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/training" element={<Training />} />
          <Route path="/e-cell" element={<ECell />} />
          <Route path="/iiic" element={<IIIC />} />
          <Route path="/exam-cell" element={<ExamCell />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
