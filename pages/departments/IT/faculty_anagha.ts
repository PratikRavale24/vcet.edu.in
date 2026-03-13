import type { FacultyData } from '../csds/FacultyProfileView';

const faculty: FacultyData = {
  name: "Dr. Anagha Patil",
  designation: "Assistant Professor",
  department: "Information Technology",
  dateOfBirth: "28 June 1983",
  dateOfJoining: "10 July 2006",
  email: "anagha.patil@vcet.edu.in",
  experienceYears: "20",
  papersPublished: "20",
  photo: "faculty/it/anagha-patil.jpg",
  qualifications: [
    "Ph.D.",
    "M.E. (Computers) – First Class with Distinction",
  ],
  specialization: [
    "Deep Learning",
    "Data Mining",
    "Big Data",
    "Machine Learning",
    "Natural Language Processing (NLP)",
  ],
  memberships: [
    { label: "ISTE", fullName: "LM 63407" },
  ],
  books: [
    { title: "Data Structures and Analysis (ITC302 – IT)",                    subtitle: "ISBN: 978-93-90437-42-9 · Nirali Prakashan" },
    { title: "Data Structures (CSC303 – CE)",                                  subtitle: "ISBN: 978-93-90437-47-4 · Nirali Prakashan" },
    { title: "Computer Networks and Network Design – Second Year IT",          subtitle: "ISBN: 978-93-54511-46-2 · Nirali Prakashan" },
    { title: "Operating Systems – Second Year IT",                             subtitle: "ISBN: 978-93-54511-41-7 · Nirali Prakashan" },
    { title: "Computer Network Security (ITC502 – IT)",                        subtitle: "ISBN: 978-93-90904-19-8 · Tech-Neo Publication" },
    { title: "Data Warehousing and Mining (CSC504 – CE)",                      subtitle: "ISBN: 978-93-90904-80-8 · Tech-Neo Publication" },
    { title: "Cryptography and System Security (CSC602 – CE)",                 subtitle: "ISBN: 978-93-91472-53-5 · Tech-Neo Publication" },
    { title: "Data Mining and Business Intelligence (ITC601 – IT)",            subtitle: "ISBN: 978-93-91472-87-0 · Tech-Neo Publication" },
    { title: "Information Security (Elective II – 310254(A), SPPU)",           subtitle: "ISBN: 978-93-5583-062-3 · Tech-Neo Publication" },
    { title: "Artificial Intelligence and Data Science-II (ITC701 – IT)",      subtitle: "ISBN: 978-93-5583-098-2 · Tech-Neo Publication" },
    { title: "Data Warehousing and Mining (ECC604 – Electronics & CS)",        subtitle: "ISBN: 978-93-89926-68-2 · Tech-Neo Publication" },
    { title: "Cryptography and System Security (CSC602 – AIDS/CSE/AIML)",      subtitle: "ISBN: 978-93-89926-66-8 · Tech-Neo Publication" },
    { title: "Bioinformatics in Machine Learning",                             subtitle: "ISBN: 978-93-6132-105-4 · Scientific International Publishing House" },
  ],
  isbnNumbers: [
    "978-93-90437-42-9",
    "978-93-90437-47-4",
    "978-93-54511-46-2",
    "978-93-54511-41-7",
    "978-93-90904-19-8",
    "978-93-90904-80-8",
    "978-93-91472-53-5",
    "978-93-91472-87-0",
    "978-93-5583-062-3",
    "978-93-5583-098-2",
    "978-93-89926-68-2",
    "978-93-89926-66-8",
    "978-93-6132-105-4",
  ],
  patents: [
    {
      title: "A Safety Network System Using IoT Technology for Automatic and Remote Controlling of Bus Ride Stations (RENE)",
      date: "Application No.: 202441006652 · Published 01 March 2024",
    },
    {
      title: "Copyright: Start-Up Funding App Using Flutter and ML",
      date: "Registration No.: SW-18464/2024 · 19 March 2024",
    },
    {
      title: "Copyright: Stock Price Prediction Using Linear Regression",
      date: "Registration No.: SW-18419/2024 · 13 March 2024",
    },
  ],
  awards: [
    {
      icon: "fa-award",
      title: "Best Research Scholar Award",
      subtitle: "Novel Research Academy, Puducherry, India · 30 August 2022",
    },
  ],
  eResources: [
    { title: "Personal Website",         icon: "fa-globe",        url: "https://www.anaghadot.wordpress.com" },
    { title: "Data Structures Lab",      icon: "fa-code",         url: "https://youtu.be/NDOkWj1vLEk" },
    { title: "Data Mining with WEKA",    icon: "fa-database",     url: "https://youtu.be/F9wa_nnyD6g" },
    { title: "Data Mining",              icon: "fa-chart-pie",    url: "https://youtu.be/sflJkE3RrH8" },
  ],
};

export default faculty;
