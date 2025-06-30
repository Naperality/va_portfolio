'use client';

import Image from 'next/image';
import { motion , Variants} from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1], // Cubic Bezier easing function (easeOut)
    },
  },
};

const FadeInOnScroll = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.3 }}
    variants={fadeUp}
  >
    {children}
  </motion.div>
);

export default function Home() {
  return (
    <main className="bg-white text-gray-800 scroll-smooth">

      {/* Hero Section */}
      <section id="about" className="pt-28 min-h-screen flex flex-col md:flex-row items-center justify-center px-6 bg-blue-50 scroll-mt-28">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <FadeInOnScroll>
            <Image
              src="/pfp.jpg"
              alt="Rudicarm Visitacion-Gustillo"
              width={400}
              height={400}
              className="rounded-lg shadow-md object-cover"
            />
          </FadeInOnScroll>
          <div className="text-center md:text-left space-y-5">
            <FadeInOnScroll>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-800 leading-snug">
                Rudicarm Visitacion-Gustillo
              </h2>
            </FadeInOnScroll>
            <FadeInOnScroll>
              <h3 className="text-lg md:text-xl font-medium text-gray-600">
                Professional Bookkeeper & Virtual Assistant
              </h3>
            </FadeInOnScroll>
            <FadeInOnScroll>
              <p className="italic text-gray-500">
                “Your trusted partner in keeping your finances organized and your business moving forward.”
              </p>
            </FadeInOnScroll>
            <FadeInOnScroll>
              <a
                href="#contact"
                className="inline-block mt-2 px-6 py-3 bg-blue-700 text-white rounded-full font-semibold hover:bg-blue-600 transition"
              >
                Work With Me
              </a>
            </FadeInOnScroll>
            <FadeInOnScroll>
              <div className="flex justify-center md:justify-start space-x-4 mt-4 text-xl">
                <a href="#" className="text-blue-700 hover:text-blue-500" aria-label="Facebook"><i className="fab fa-facebook" /></a>
                <a href="#" className="text-pink-500 hover:text-pink-400" aria-label="Instagram"><i className="fab fa-instagram" /></a>
                <a href="#" className="text-blue-600 hover:text-blue-400" aria-label="LinkedIn"><i className="fab fa-linkedin" /></a>
                <a href="#" className="text-gray-800 hover:text-gray-600" aria-label="GitHub"><i className="fab fa-github" /></a>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-white text-center scroll-mt-28">
        <FadeInOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-8">
            Services Tailored for Your Business
          </h2>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <ul className="max-w-3xl mx-auto space-y-5 text-lg text-gray-700 leading-relaxed">
            <li>📊 Full-Service Bookkeeping — QuickBooks, Xero, and Excel</li>
            <li>🗂️ Accurate Monthly Reporting & Bank Reconciliation</li>
            <li>📆 Calendar Management & Email Organization</li>
            <li>🧾 Invoice Processing, Billing & Data Entry</li>
            <li>💼 Administrative Support with a Personal Touch</li>
          </ul>
        </FadeInOnScroll>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-6 bg-blue-50 text-center scroll-mt-28">
        <FadeInOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">Portfolio</h2>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            A glimpse into my past collaborations, bookkeeping dashboards, and administrative projects that helped small business owners regain their time and clarity.
          </p>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 shadow rounded-lg text-gray-700 font-medium">📁 Project 1</div>
            <div className="bg-white p-6 shadow rounded-lg text-gray-700 font-medium">📁 Project 2</div>
            <div className="bg-white p-6 shadow rounded-lg text-gray-700 font-medium">📁 Project 3</div>
          </div>
        </FadeInOnScroll>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-white text-center scroll-mt-28">
        <FadeInOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">Let’s Connect</h2>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <p className="text-gray-700 mb-6 max-w-xl mx-auto">
            Ready to streamline your books or offload day-to-day admin tasks? Send me a message and let’s schedule a free consultation to explore how I can support your business goals.
          </p>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <a
            href="mailto:sample@example.com"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-500 transition"
          >
            Email Me
          </a>
        </FadeInOnScroll>
      </section>
    </main>
  );
}
