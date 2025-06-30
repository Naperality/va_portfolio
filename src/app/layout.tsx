import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800 font-sans antialiased">
        <div className="min-h-screen flex flex-col">
          {/* Header/Navbar */}
          <Navbar />  

          {/* Main content area */}
          <main className="flex-grow max-w-6xl mx-auto w-full px-4 py-6">
            {children}
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
