export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-6 bg-white">
      <div className="max-w-3xl w-full px-4 sm:px-8 space-y-8 mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-blue-700 drop-shadow-sm">
          Welcome to Rentals by Napoleon
        </h1>

        <h2 className="text-xl md:text-2xl font-medium text-gray-600">
          Find Your Next Stay — Affordable, Comfortable, Reliable
        </h2>

        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          Browse our curated rental listings across Cebu and beyond. Whether you're looking for
          a short-term stay or a long-term home, we've got the right space for you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="/rentals"
            className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow hover:bg-blue-500 transition"
          >
            View Rentals
          </a>
          <a
            href="/contact"
            className="text-blue-600 border border-blue-600 px-6 py-3 rounded-full text-sm font-semibold hover:bg-blue-50 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
