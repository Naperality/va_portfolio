export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12 py-6 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="text-blue-700 font-medium">Rentals by Napoleon</span>. All rights reserved.
      </div>
    </footer>
  );
}
