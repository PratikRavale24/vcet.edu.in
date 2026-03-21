// Central MMS API endpoint map.
// Keep every MMS URL segment here so backend alignment is easy to maintain.
export const MMS_ENDPOINTS = {
  home: '/mms/home',
  about: '/mms/about',
  principalsDesk: '/mms/about/principals-desk',
  hodsDesk: '/mms/about/hods-desk',
  faculty: '/mms/about/faculty',
  visionMission: '/mms/about/vision-mission',
  dab: '/mms/about/dab',
  programOutcomes: '/mms/about/program-outcomes',
  admission: '/mms/admission',
  experientialLearning: '/mms/experiential-learning',
  training: '/mms/training-placement/training',
  placement: '/mms/training-placement/placement',
  studentsLife: '/mms/students-life',
  facilities: '/mms/facilities',
  faqs: '/mms/faqs',
  enquiries: '/enquiries',
} as const;

export type MmsEndpointKey = keyof typeof MMS_ENDPOINTS;
