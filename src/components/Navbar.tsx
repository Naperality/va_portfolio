import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50 py-4">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-blue-700 hover:text-blue-500 transition"
        >
          Rentals by Napoleon
        </Link>

        <div className="space-x-6 hidden sm:flex text-gray-700 text-sm font-medium">
          <Link href="/rentals" className="hover:text-blue-500 transition">
            Rentals
          </Link>
          <Link href="/about" className="hover:text-blue-500 transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-blue-500 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
