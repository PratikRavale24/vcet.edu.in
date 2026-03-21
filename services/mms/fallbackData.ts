import type {
  MmsEventItem,
  MmsFaqItem,
  MmsFacultyMember,
  MmsHomeData,
  MmsPlacementsData,
} from './types';
import { MMS_HERO_IMAGES } from './imagePool';

// Migrated from the old MMS frontend so the mini-site remains functional
// until backend MMS endpoints are fully available.
export const fallbackFaculty: MmsFacultyMember[] = [
  {
    id: '1',
    name: 'Dr. Sarah Mitchell',
    designation: 'Head of Department & Professor',
    researchAreas: ['Strategic Management', 'Organizational Behavior'],
    image: '',
    publicationsLink: '#',
  },
  {
    id: '2',
    name: 'Prof. David Chen',
    designation: 'Associate Professor',
    researchAreas: ['Financial Technology', 'Investment Analysis'],
    image: '',
    publicationsLink: '#',
  },
  {
    id: '3',
    name: 'Dr. Elena Rodriguez',
    designation: 'Assistant Professor',
    researchAreas: ['Consumer Behavior', 'Digital Marketing'],
    image: '',
    publicationsLink: '#',
  },
  {
    id: '4',
    name: 'Prof. James Wilson',
    designation: 'Assistant Professor',
    researchAreas: ['Supply Chain Analytics', 'Operations Research'],
    image: '',
    publicationsLink: '#',
  },
];

export const fallbackEvents: MmsEventItem[] = [
  {
    id: '1',
    title: 'Global Leadership Summit 2026',
    date: '2026-04-15',
    time: '09:00 AM - 05:00 PM',
    location: 'Main Auditorium',
    description:
      'An annual gathering of industry leaders discussing the future of global business.',
    category: 'Seminar',
    image: '',
  },
  {
    id: '2',
    title: 'FinTech Innovation Workshop',
    date: '2026-05-10',
    time: '10:00 AM - 02:00 PM',
    location: 'Innovation Lab 3',
    description:
      'Hands-on workshop exploring blockchain and AI applications in modern finance.',
    category: 'Workshop',
    image: MMS_HERO_IMAGES[4],
  },
  {
    id: '3',
    title: 'Marketing in the Metaverse',
    date: '2026-06-05',
    time: '02:00 PM - 04:00 PM',
    location: 'Virtual / Seminar Hall A',
    description:
      'Guest lecture by leading CMOs on navigating digital marketing frontiers.',
    category: 'Guest Lecture',
    image: MMS_HERO_IMAGES[5],
  },
];

export const fallbackPlacements: MmsPlacementsData = {
  statistics: {
    placementRate: '98%',
    averagePackage: '$115,000',
    highestPackage: '$240,000',
    topRecruiters: 150,
  },
  recruiters: [
    { name: 'McKinsey & Company', logo: '' },
    { name: 'Goldman Sachs', logo: '' },
    { name: 'Google', logo: '' },
    { name: 'Amazon', logo: '' },
    { name: 'Deloitte', logo: '' },
    { name: 'Bain & Company', logo: '' },
  ],
};

export const fallbackHomeData: MmsHomeData = {
  highlights: [
    { label: 'Placement Rate', value: '98%' },
    { label: 'Industry Partners', value: '150+' },
    { label: 'Global Certifications', value: '40+' },
    { label: 'Internships', value: '100%' },
  ],
  testimonials: [
    {
      id: '1',
      name: 'Vinay Mayekar',
      role: 'HR Student',
      quote:
        'The MMS department helped me build practical leadership and communication skills with confidence.',
    },
    {
      id: '2',
      name: 'Mansi Sankhe',
      role: 'Marketing Student',
      quote:
        'Strong industry exposure and live projects gave me clarity and confidence for my career path.',
    },
    {
      id: '3',
      name: 'Janavi Rao',
      role: 'Entrepreneur',
      quote:
        'Faculty mentoring and experiential learning built the mindset I needed to start my own venture.',
    },
  ],
};

export const fallbackFaqs: MmsFaqItem[] = [
  { id: '1', question: 'What is the duration of MMS?', answer: 'The MMS program duration is two years.' },
  { id: '2', question: 'Is MMS approved by AICTE?', answer: 'Yes, the MMS program is AICTE approved.' },
  { id: '3', question: 'What is the intake capacity?', answer: 'Intake varies by academic year as per DTE norms.' },
  { id: '4', question: 'Are internships compulsory?', answer: 'Yes, internship participation is an integral part of the curriculum.' },
  { id: '5', question: 'Is placement support available?', answer: 'Yes, training and placement support is provided to all eligible students.' },
  { id: '6', question: 'Are scholarships available?', answer: 'Scholarship options are available as per state and institute rules.' },
  { id: '7', question: 'How can I apply?', answer: 'Students can apply through the approved admission process and counselling.' },
  { id: '8', question: 'Is there an entrance requirement?', answer: 'Admission generally follows CET/CMAT and DTE admission regulations.' },
  { id: '9', question: 'Does MMS include industry exposure?', answer: 'Yes, multiple workshops, events, and expert sessions are conducted.' },
  { id: '10', question: 'Are add-on courses available?', answer: 'Yes, value-added courses like Power BI and Advanced Excel are offered.' },
  { id: '11', question: 'Is the campus accessible from Vasai Road?', answer: 'Yes, the campus is located at K.T. Marg, Vartak College Campus, Vasai Road (W).' },
  { id: '12', question: 'Where can I download syllabus PDFs?', answer: 'Syllabus PDFs are available in the MMS header under the Syllabus dropdown.' },
  { id: '13', question: 'How can I contact the MMS department?', answer: 'You can call 0250-233 9486 or email mms@vcet.edu.in.' },
];
