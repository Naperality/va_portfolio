'use client';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow-sm z-50 py-5 md:py-6">
      <div className="max-w-6xl mx-auto px-4 flex justify-center">
        <div className="flex gap-6 sm:gap-8 md:gap-10 text-gray-800 text-sm sm:text-base md:text-lg font-semibold tracking-wide">
          {['About', 'Services', 'Portfolio', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative hover:text-blue-700 transition duration-200 before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-blue-700 hover:before:w-full before:transition-all before:duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
