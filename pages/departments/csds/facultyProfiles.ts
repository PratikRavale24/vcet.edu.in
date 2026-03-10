export interface FacultyProfile {
  slug: string;
  name: string;
  photo: string;
  designation: string;
  department: string;
  dob: string;
  doj: string;
  qualifications: string;
  email: string;
  experience: string;
  papersPublished: string;
  pgProjectsGuided: string;
  booksPatents: string;
  professionalMemberships: string;
  consultancy: string;
  patent: string;
  awards: string;
  interactionWithInstitution: string;
  websiteLink: string;
  inCharge: string;
  specialization?: string;
  grants?: string;
  researchLink: string;
  youtubeChannel: string;
  eResources: string;
}

export const csdsfaculty: FacultyProfile[] = [
  {
    slug: 'dr-yogesh-pingle',
    name: 'Dr. Yogesh Pingle',
    photo: '/Images/departments/csds/faculty/dr-yogesh-pingle.jpg',
    designation: 'Deputy HOD & Asst. Prof.',
    department: 'Computer Science and Engineering (Data Science)',
    dob: '04/07/1977',
    doj: '06/07/2007',
    qualifications: 'Ph.D. (Computer Engineering, Mumbai University.)\nM.E. (Computers) / 1st class.',
    email: 'yogesh.pingle@vcet.edu.in',
    experience: 'Teaching: 17 years\nIndustry: 2 years',
    papersPublished: '20',
    pgProjectsGuided: 'Yes. M.E.(Computer) – 01 Project Guided at PG Level in 2018.',
    booksPatents: `Total 10 Books Published. On Topic "Internet of Things" 05 Books, "DBMS" 01 Book, 02 Books on "Internet Programming.", 01 book on Computer Network and 01 Book on DWM
ISBN Numbers:
978-93-91496-21-0,  978-93-91496-95-1
9789390437436, 978-93-89233-20-9
978-93-89748-80-2,  978-93-5077-090-0
978-93-88200-57-8,  978-93-88200-60-8
978-93-5451-823-2,  978-81-19115-09-9
11th Book (Year 2003) – Visual Basic Programming, Nirali Prakashan`,
    professionalMemberships: 'LM – ISTE (LM 58653) and LM – CSI (01161406)',
    consultancy: `1. Consultancy for V Enterprises, Nallasopara in 2017 Project – Cold Storage
2. Designed and Developed Website https://avcjr.ac.in/ (Vartak Junior College)
3. Designed and Developed Website https://vcet.edu.in/mms/`,
    patent: `1. Intelligent Wearable Sweat Sensor Based Device For Monitoring and Recommending Personal Physical Fitness Published on 06 Aug 2021
2. Musical Medical Illness Healing Electronic Device Published on 15 Dec 2023`,
    awards: `Participated in Golden Book of World Record – Musical Instruments as Harmonium Player in June 2016 on occasion of World Music Day (Performed 2 Hours Harmonium Solo in 46 Hours Marathon Performance).
Second Prize in All India Air Instrument National Level Competition in 2004`,
    interactionWithInstitution: 'MoU with L&T, CTEA - Developing L&T Skill Trainers Academy Portal',
    websiteLink: 'http://yogeshpingle.co.in/\nhttps://ypptechnologies.in/',
    inCharge: 'German Language Club\nWebsite Technical Head',
    researchLink: 'Orcid (0000-0003-2124-885x)\nGoogle Scholar\nScopus\nWeb of Science',
    youtubeChannel: 'Internet of Everything\nIoT Mini Project Lab\nDevOps Lab\nJava Lab',
    eResources: 'CP- https://yogeshpingle.home.blog/c-programming/,\nIOE – yogeshpingle.home.blog/iot/\nML Google Classroom',
  },
  {
    slug: 'ms-krunali-vartak',
    name: 'Ms. Krunali Vartak',
    photo: '/Images/departments/csds/faculty/ms-krunali-vartak.jpg',
    designation: 'Asst. Prof.',
    department: 'Computer Science and Engineering (Data Science)',
    dob: '02/06/1992',
    doj: '23/08/2021',
    qualifications: 'M.E. (Information Technology)',
    email: 'krunali.vartak@vcet.edu.in',
    experience: '10 years',
    papersPublished: '4',
    pgProjectsGuided: '',
    booksPatents: '1',
    professionalMemberships: 'ISTE- Life membership',
    consultancy: '',
    patent: '',
    awards: '',
    interactionWithInstitution: '',
    websiteLink: '',
    inCharge: '',
    researchLink: '',
    youtubeChannel: '',
    eResources: 'Microprocessor - Google Classroom Link:\nhttps://classroom.google.com/c/NjQ4MDQzMTI0OTQx?cjc=zjgukbw\nGoogle Classroom Code: zjgukbw',
  },
  {
    slug: 'ms-maya-varghese',
    name: 'Ms. Maya Varghese',
    photo: '/Images/departments/csds/faculty/ms-maya-varghese.jpg',
    designation: 'Asst. Prof.',
    department: 'Computer Science and Engineering (Data Science)',
    dob: '',
    doj: '04/10/2021',
    qualifications: 'M.E. (Computer Engineering)',
    email: 'maya.varghese@vcet.edu.in',
    experience: '7 years',
    papersPublished: '3',
    pgProjectsGuided: '',
    booksPatents: '',
    professionalMemberships: '',
    consultancy: '',
    patent: '',
    awards: '',
    interactionWithInstitution: '',
    websiteLink: '',
    inCharge: '',
    specialization: 'Graph Mining in Data mining domain',
    grants: 'Qualified GATE 2012 and received AICTE scholarship for ME',
    researchLink: '',
    youtubeChannel: '',
    eResources: '',
  },
  {
    slug: 'ms-janisa-pereira',
    name: 'Ms. Janisa Pereira',
    photo: '/Images/departments/csds/faculty/ms-janisa-pereira.jpg',
    designation: 'Asst. Prof.',
    department: 'Computer Science and Engineering (Data Science)',
    dob: '',
    doj: '20-06-2022',
    qualifications: 'M.E (Computers)',
    email: 'janisa.pereira@vcet.edu.in',
    experience: '4.8 years',
    papersPublished: '6',
    pgProjectsGuided: '',
    booksPatents: '',
    professionalMemberships: '',
    consultancy: '',
    patent: '',
    awards: '',
    interactionWithInstitution: '',
    websiteLink: '',
    inCharge: '',
    specialization: 'Data mining, Web mining',
    researchLink: '',
    youtubeChannel: '',
    eResources: 'Google Classroom Link: (Analysis of Algorithms)\nhttps://classroom.google.com/c/NjUzMzE0NTIxMDE0?cjc=knanj5x\nGoogle Classroom Code: knanj5x',
  },
  {
    slug: 'ms-leena-raut',
    name: 'Ms. Leena Raut',
    photo: '/Images/departments/csds/faculty/ms-leena-raut.jpg',
    designation: 'Asst. Prof.',
    department: 'Computer Science and Engineering (Data Science)',
    dob: '',
    doj: '27/06/2023',
    qualifications: 'M.E. (Information Technology)',
    email: 'leena.raut@vcet.edu.in',
    experience: '22 Years',
    papersPublished: '04',
    pgProjectsGuided: '',
    booksPatents: '',
    professionalMemberships: 'LM 104089 – ISTE',
    consultancy: '',
    patent: '',
    awards: '',
    interactionWithInstitution: '',
    websiteLink: '',
    inCharge: '',
    researchLink: '',
    youtubeChannel: '',
    eResources: '1. Google Classroom Link (DL): https://classroom.google.com/c/NjE2MDU2MjAwMjM2\nGoogle Classroom Code: ro5oj4k\n2. Google Classroom Link (SEPM): https://classroom.google.com/c/NjUzNzAzNjgzODYw\nGoogle Classroom Code: mpwtojn\n3. Google Classroom Link (SMA): https://classroom.google.com/c/NjUzMjk4NzEwNjA5\nGoogle Classroom Code: xkwvtkn',
  },
  {
    slug: 'mr-ichhanshu-jaiswal',
    name: 'Mr. Ichhanshu Jaiswal',
    photo: '/Images/departments/csds/faculty/mr-ichhanshu-jaiswal.png',
    designation: 'Asst. Prof. (Ph.D pursuing)',
    department: 'Computer Science and Engineering (Data Science)',
    dob: '',
    doj: '',
    qualifications: '',
    email: 'ichhanshu.jaiswal@vcet.edu.in',
    experience: '',
    papersPublished: '',
    pgProjectsGuided: '',
    booksPatents: '',
    professionalMemberships: '',
    consultancy: '',
    patent: '',
    awards: '',
    interactionWithInstitution: '',
    websiteLink: '',
    inCharge: '',
    researchLink: '',
    youtubeChannel: '',
    eResources: '',
  },
  {
    slug: 'ms-shital-cheke',
    name: 'Ms. Shital Cheke',
    photo: '/Images/departments/csds/faculty/ms-shital-cheke.jpg',
    designation: 'Asst. Prof.',
    department: 'Computer Science and Engineering (Data Science)',
    dob: '',
    doj: '',
    qualifications: '',
    email: 'shitalcheke@vcet.edu.in',
    experience: '',
    papersPublished: '',
    pgProjectsGuided: '',
    booksPatents: '',
    professionalMemberships: '',
    consultancy: '',
    patent: '',
    awards: '',
    interactionWithInstitution: '',
    websiteLink: '',
    inCharge: '',
    researchLink: '',
    youtubeChannel: '',
    eResources: '',
  },
  {
    slug: 'ms-bhavika-joshi',
    name: 'Ms. Bhavika Joshi',
    photo: '/Images/departments/csds/faculty/ms-bhavika-joshi.jpg',
    designation: 'Asst. Prof.',
    department: 'Computer Science and Engineering (Data Science)',
    dob: '',
    doj: '',
    qualifications: '',
    email: 'bhavika.joshi@vcet.edu.in',
    experience: '',
    papersPublished: '',
    pgProjectsGuided: '',
    booksPatents: '',
    professionalMemberships: '',
    consultancy: '',
    patent: '',
    awards: '',
    interactionWithInstitution: '',
    websiteLink: '',
    inCharge: '',
    researchLink: '',
    youtubeChannel: '',
    eResources: '',
  },
];
