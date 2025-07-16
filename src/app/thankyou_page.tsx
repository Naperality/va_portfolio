import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-yellow-50 px-6">
      <div className="bg-white/80 backdrop-blur-md border border-blue-100 shadow-lg rounded-xl p-8 sm:p-12 text-center max-w-md w-full animate-fade-in">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-3">
          Thank You!
        </h1>
        <p className="text-gray-600 mb-6">
          Your message has been successfully sent. We'll be in touch shortly.
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-md transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
