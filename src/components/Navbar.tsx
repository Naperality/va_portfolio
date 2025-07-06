'use client';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-4 sm:py-5 md:py-6 bg-gradient-to-r from-white/60 via-blue-50/60 to-yellow-50/60 backdrop-blur-md shadow-md border-b border-blue-100/40">
      <div className="max-w-6xl mx-auto px-2 sm:px-4 flex justify-center">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 text-gray-800 text-xs sm:text-sm md:text-base lg:text-lg font-semibold tracking-wide">
          {['About', 'Services', 'Portfolio', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative px-2 py-1 group transition duration-200 hover:text-blue-700"
            >
              {item}
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
