import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Rudicarm Visitacion-Gustilo Portfolio",
  description: "A portfolio by Rudicarm.",
  keywords: ["Rudicarm", "portfolio"],
  authors: [{ name: "Rudicarm" }],
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png", rel: "apple-touch-icon" },
      { url: "/favicon.ico", rel: "shortcut icon" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Rudicarm Visitacion-Gustilo Portfolio",
    description: "Rudicarm experience and accounting skills",
    url: "https://rudicarm-visitacion-gustillo.vercel.app/",
    siteName: "Rudicarm Visitacion-Gustilo",
    images: [
      {
        url: "https://rudicarm-visitacion-gustillo.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rudicarm Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rudicarm Portfolio",
    description: "A portfolio by Rudicarm.",
    images: ["https://rudicarm-visitacion-gustillo.vercel.app/og-image.jpg"],
    creator: "@yourTwitter",
  },
};

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
