export default function Footer() {
  return (
    <footer className="bg-white/70 backdrop-blur-md border-t border-blue-100 py-6 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-700">
        © {new Date().getFullYear()}{" "}
        <span className="text-blue-700 font-semibold">Rudicarm Visitacion-Gustilo</span>. All rights reserved.
      </div>
    </footer>
  );
}
