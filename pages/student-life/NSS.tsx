import React from 'react';
import PageLayout from '../../components/PageLayout';
import PageBanner from '../../components/PageBanner';
import {
  ContentSection,
  DataTable,
  EventGrid,
  GalleryGrid,
  IntroSection,
  ProfileHighlight,
  ResourceGrid,
} from './studentLifeShared';

// ─── Data ────────────────────────────────────────────────────────────────────

const events = [
  {
    title: 'Walkathon :',
    description:
      'Participated in a walkathon organized by Brahma Kumaris for road safety awareness. Volunteers joined people of all ages in the community, concluding with refreshments and awareness sessions.',
  },
  {
    title: 'Blood Donation Camp :',
    description:
      'In collaboration with the Leo Club of Vasai, organized a successful blood donation camp. The event gathered 152 units of blood, thanks to enthusiastic volunteers who managed hospitality and donor care.',
  },
  {
    title: 'Mega Donation Drive :',
    description:
      'A week-long drive to promote social responsibility. Students collected clothing, blankets, and food items which were donated to the Maratha Life Foundation for the underprivileged in the community.',
  },
  {
    title: 'Shramdaan :',
    description:
      'Participated in a Shramdaan event organized by VVMC Municipality. Students cleaned nearby roads, parks, and public spaces, fostering pride and unity among volunteers.',
  },
  {
    title: 'Fit India Freedom Run :',
    description:
      'Joined the Fit India Swachhata Freedom Run promoting fitness, cleanliness, and citizen awareness. Volunteers ran around campus, picking up litter to support environmental goals.',
  },
  {
    title: 'Water Conservation Rally :',
    description:
      'Participated in a Water Conservation Rally organized by Vasai-Virar Municipal Corporation. Students marched with banners and engaged with local residents to promote rainwater harvesting.',
  },
  {
    title: 'Jignyasa & Aakaar :',
    description:
      'Hosted a Ganesh Idol Making Competition with Odishian influences, followed by Jignyasa 2.0, a Cultural Quiz Event celebrating heritage and artistic traditions.',
  },
  {
    title: 'Unity Day Celebration :',
    description:
      'Celebrated Unity Day honoring Sardar Vallabhbhai Patel\'s birth anniversary. Volunteers took the Rashtriya Ekta Diwas Pledge emphasizing unity, integrity, and cultural diversity.',
  },
  {
    title: 'Yoga Day :',
    description:
      'Celebrated International Yoga Day with invigorating asanas and breathing exercises. The event highlighted yoga\'s benefits for physical health and mental well-being.',
  },
  {
    title: 'Republic Day Celebration :',
    description:
      'Celebrated Republic Day with flag hoisting, national anthem, street plays addressing social issues, and commitment to national pride and democratic values.',
  },
];

const gallery = [
  { src: '/images/student-life/nss/gallery-01.jpg', alt: 'NSS gallery image 1', placeholder: true },
  { src: '/images/student-life/nss/gallery-02.jpg', alt: 'NSS gallery image 2', placeholder: true },
  { src: '/images/student-life/nss/gallery-03.jpg', alt: 'NSS gallery image 3', placeholder: true },
  { src: '/images/student-life/nss/gallery-04.jpg', alt: 'NSS gallery image 4', placeholder: true },
  { src: '/images/student-life/nss/gallery-05.jpg', alt: 'NSS gallery image 5', placeholder: true },
  { src: '/images/student-life/nss/gallery-06.jpg', alt: 'NSS gallery image 6', placeholder: true },
  { src: '/images/student-life/nss/gallery-07.jpg', alt: 'NSS gallery image 7', placeholder: true },
  { src: '/images/student-life/nss/gallery-08.jpg', alt: 'NSS gallery image 8', placeholder: true },
  { src: '/images/student-life/nss/gallery-09.jpg', alt: 'NSS gallery image 9', placeholder: true },
  { src: '/images/student-life/nss/gallery-10.jpg', alt: 'NSS gallery image 10', placeholder: true },
  { src: '/images/student-life/nss/gallery-11.jpg', alt: 'NSS gallery image 11', placeholder: true },
  { src: '/images/student-life/nss/gallery-12.jpg', alt: 'NSS gallery image 12', placeholder: true },
  { src: '/images/student-life/nss/gallery-13.jpg', alt: 'NSS gallery image 13', placeholder: true },
  { src: '/images/student-life/nss/gallery-14.jpg', alt: 'NSS gallery image 14', placeholder: true },
  { src: '/images/student-life/nss/gallery-15.jpg', alt: 'NSS gallery image 15', placeholder: true },
  { src: '/images/student-life/nss/gallery-16.jpg', alt: 'NSS gallery image 16', placeholder: true },
  { src: '/images/student-life/nss/gallery-17.jpg', alt: 'NSS gallery image 17', placeholder: true },
  { src: '/images/student-life/nss/gallery-18.jpg', alt: 'NSS gallery image 18', placeholder: true },
  { src: '/images/student-life/nss/gallery-19.jpg', alt: 'NSS gallery image 19', placeholder: true },
  { src: '/images/student-life/nss/gallery-20.jpg', alt: 'NSS gallery image 20', placeholder: true },
];

const teamRows = [
  ['NSS Coordinator',       'Dr. Pradip Gulbhile'],
  ['NSS Leader',           'Mr. Suryanarayan Choudhury'],
  ['NSS President',        'Ms. Divya Desai'],
  ['Co-Coordinator',       'To be announced'],
  ['Organizing Head',      'Volunteers from core team'],
  ['Volunteer Mobilization', 'Multiple team members'],
  ['Community Liaison',    'Designated volunteers'],
  ['Documentation Head',   'Designated team member'],
  ['Reporting Officer',    'Dr. Pradip Gulbhile'],
];

// ─── Component ────────────────────────────────────────────────────────────────

const NSS: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="NSS"
        breadcrumbs={[{ label: 'NSS' }]}
      />

      <IntroSection
        id="intro"
        title="National Service Scheme"
        description="The National Service Scheme (NSS) Government of India, Ministry of Youth Affairs & Sports provides an opportunity to the student youth of INDIA to take part in various government led community service activities & programs. The sole aim of the NSS is to provide hands-on experience to young students in delivering community service. UDAAN was founded in the academic year 2014-2015 at VCET. Now UDAAN comes under the NSS committee of VCET. The inception of UDAAN is a result of the responsibility of our institution and Students towards the social scenario of the society."
        image="/images/student-life/nss/hero.jpg"
        imageAlt="NSS"
        hideImage
        imagePlaceholderLabel="NSS Hero Image"
        chips={[
          { label: 'Objectives', href: '#objectives' },
          { label: 'Events',     href: '#events'     },
          { label: 'Gallery',    href: '#gallery'    },
          { label: 'Team',       href: '#team'       },
        ]}
        links={[
          {
            label: 'NSS Instagram',
            href: 'https://www.instagram.com/official.vcet?igsh=Ym9sZzU1NjI3eGZ4',
            icon: 'instagram',
          },
        ]}
      />

      <ContentSection
        id="objectives"
        title="Objectives"
        subtitle="Official objectives published on the NSS page."
        backgroundClassName="bg-brand-light"
      >
        <div className="reveal rounded-[28px] border border-brand-blue/10 bg-white p-8 md:p-10 shadow-sm">
          <p className="text-slate-600 leading-relaxed text-base md:text-lg">
            The National Service Scheme (NSS) Government of India, Ministry of Youth Affairs & Sports provides
            an opportunity to the student youth of INDIA to take part in various government led community
            service activities & programs. The sole aim of the NSS is to provide hands-on experience to young
            students in delivering community service. We believe in serving society through meaningful initiatives
            focused on social responsibility and citizen engagement.
          </p>
        </div>
      </ContentSection>

      <ContentSection
        id="events"
        title="Events"
        subtitle="Official NSS events and activities from the VCET website."
        backgroundClassName="bg-white"
      >
        <EventGrid items={events} />
      </ContentSection>

      <ContentSection
        id="gallery"
        title="Gallery"
        subtitle="Official VCET NSS gallery images."
        backgroundClassName="bg-brand-light"
      >
        <GalleryGrid items={gallery} />
      </ContentSection>

      <ContentSection
        id="team"
        title="Team"
        subtitle="NSS Coordinator :"
        backgroundClassName="bg-white"
      >
        <div className="space-y-8">
          <ProfileHighlight
            title="NSS Coordinator :"
            image="/images/student-life/nss/coordinator.jpg"
            imageAlt="Dr. Pradip Gulbhile"
            hideImage
            imagePlaceholderLabel="NSS Coordinator Image"
            heading="Dr. Pradip Gulbhile"
            lines={['Humanity Department', 'pradip.gulbhile@vcet.edu.in', '+91 9970042379']}
          />
          <div className="w-full mx-auto px-4 py-12">
            <div className="mb-12 reveal text-center">
              <h3 className="text-3xl font-display font-bold text-brand-navy">
                NSS Committee & Leadership
              </h3>
            </div>
            <div className="flex justify-center w-full">
              <div className="w-full">
                <DataTable columns={['Position', 'Name']} rows={teamRows} />
              </div>
            </div>
          </div>
        </div>
      </ContentSection>
    </PageLayout>
  );
};

export default NSS;
