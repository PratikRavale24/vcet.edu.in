import React, { useEffect } from 'react';
import Header from './Header';
import TopBanner from './TopBanner';
import Footer from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    // Intersection Observer for scroll-triggered animations
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
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
