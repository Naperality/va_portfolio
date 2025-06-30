export default function Footer() {
  return (
    <footer className="bg-blue-50 border-t mt-12 py-6 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()}{" "}
        <span className="text-blue-700 font-semibold">Agnes Ann</span>. All rights reserved.
      </div>
    </footer>
  );
}
