import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { Microscope, Cpu, Beaker, Server, Wrench, Wifi } from 'lucide-react';

const facilities = [
  {
    icon: Cpu,
    title: 'Advanced Computing Lab',
    description: 'High-performance computing infrastructure with GPU clusters, cloud computing access, and AI/ML workstations for cutting-edge research.',
    placeholder: 'computing-lab.jpg',
  },
  {
    icon: Microscope,
    title: 'Material Testing Lab',
    description: 'Equipped with UTM, hardness testers, and microstructure analysis tools for civil and mechanical engineering research.',
    placeholder: 'material-testing-lab.jpg',
  },
  {
    icon: Beaker,
    title: 'Environmental Engineering Lab',
    description: 'Facilities for water quality testing, air pollution monitoring, and environmental impact assessment studies.',
    placeholder: 'environmental-lab.jpg',
  },
  {
    icon: Wifi,
    title: 'IoT & Embedded Systems Lab',
    description: 'Comprehensive IoT prototyping lab with sensors, microcontrollers, FPGA boards, and wireless communication modules.',
    placeholder: 'iot-lab.jpg',
  },
  {
    icon: Server,
    title: 'Networking & Cybersecurity Lab',
    description: 'Network simulation tools, firewalls, and cybersecurity testing infrastructure for security research.',
    placeholder: 'networking-lab.jpg',
  },
  {
    icon: Wrench,
    title: 'Workshop & Fabrication Lab',
    description: '3D printers, CNC machines, laser cutters, and traditional workshop equipment for prototyping and fabrication.',
    placeholder: 'fabrication-lab.jpg',
  },
];

const ResearchFacility: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="Research Facility"
        breadcrumbs={[
          { label: 'Research', href: '/research' },
          { label: 'Research Facility' },
        ]}
      />

      {/* Introduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center reveal">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-0.5 bg-brand-gold" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">
                Infrastructure
              </span>
              <div className="w-10 h-0.5 bg-brand-gold" />
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy mb-4">
              State-of-the-Art Research Facilities
            </h2>
            <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto">
              VCET provides well-equipped research laboratories and infrastructure across
              departments to support faculty and student research activities. Our modern
              facilities enable cutting-edge research in diverse engineering and technology domains.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-16 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {facilities.map((facility, idx) => (
                <div
                  key={facility.title}
                  className="reveal bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
                  style={{ transitionDelay: `${idx * 0.08}s` }}
                >
                  {/* Image Placeholder */}
                  <div className="aspect-[16/10] bg-gradient-to-br from-brand-blue/5 to-brand-gold/5 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white/60 rounded-full flex items-center justify-center mx-auto mb-2">
                        <facility.icon className="w-6 h-6 text-brand-blue/40" />
                      </div>
                      <p className="text-[10px] text-slate-400">{facility.placeholder}</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-brand-blue to-brand-navy rounded-lg flex items-center justify-center flex-shrink-0">
                        <facility.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-display font-bold text-brand-navy">{facility.title}</h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{facility.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ResearchFacility;
