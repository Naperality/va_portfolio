'use client';

import { useEffect, useState } from 'react';

const sections = ['about', 'services', 'portfolio', 'contact'];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('about');

  useEffect(() => {
    const handleResize = () => {
      // Adjust for mobile or desktop
      const isMobile = window.innerWidth < 768;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const id = entry.target.getAttribute('id');
            if (entry.isIntersecting && id) {
              setActiveSection(id);
            }
          });
        },
        {
          root: null,
          rootMargin: isMobile ? '0px 0px -20% 0px' : '0px 0px -30% 0px',
          threshold: isMobile ? 0.05 : 0.3,
        }
      );

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });

      return () => {
        sections.forEach((id) => {
          const el = document.getElementById(id);
          if (el) observer.unobserve(el);
        });
      };
    };

    // Run on mount
    const cleanup = handleResize();

    // Update observer on resize
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cleanup?.();
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-4 sm:py-5 md:py-6 bg-gradient-to-r from-white/60 via-blue-50/60 to-yellow-50/60 backdrop-blur-md shadow-md border-b border-blue-100/40">
      <div className="max-w-6xl mx-auto px-4 flex justify-center">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 text-gray-800 text-xs sm:text-sm md:text-base lg:text-lg font-semibold tracking-wide">
          {sections.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`relative px-2 py-1 group transition duration-200 ${
                activeSection === item ? 'text-blue-700' : 'hover:text-blue-700'
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <span
                className={`absolute left-0 bottom-0 h-0.5 rounded-full transition-all duration-300 ${
                  activeSection === item
                    ? 'w-full bg-blue-700'
                    : 'w-0 bg-blue-600 group-hover:w-full'
                }`}
              />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
