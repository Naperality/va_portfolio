'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { BarChart, CalendarCheck, CreditCard, FileText, Users, Briefcase, Linkedin, Facebook, Mail  } from 'lucide-react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
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
      <section id="about" className="relative pt-28 min-h-screen flex flex-col md:flex-row items-center justify-center px-6 bg-blue-50 scroll-mt-28">
        <div className="absolute -top-16 -left-16 w-[500px] h-[500px] z-0 opacity-20 pointer-events-none">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-blue-100">
            <path d="M45.3,-66.7C58.3,-56.4,67.6,-43,73.4,-28.9C79.2,-14.9,81.4,0,76.2,13.3C71.1,26.6,58.7,38.3,45.6,47.4C32.5,56.5,18.7,63.1,3.4,62.3C-11.9,61.5,-23.7,53.3,-35.6,44.4C-47.5,35.5,-59.6,25.9,-65.7,12.8C-71.8,-0.3,-71.9,-16.9,-66.1,-31.7C-60.3,-46.4,-48.6,-59.3,-34.6,-68.8C-20.5,-78.2,-10.3,-84.1,2.1,-87.1C14.5,-90.1,29,-90.2,45.3,-66.7Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <FadeInOnScroll>
            <Image
              src="/pfp.jpg"
              alt="Rudicarm Visitacion-Gustillo"
              width={400}
              height={400}
              className="rounded-full shadow-lg ring-4 ring-blue-100 object-cover"
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
                Virtual Bookkeeper & Accounting Specialist
              </h3>
            </FadeInOnScroll>
            <FadeInOnScroll>
              <p className="italic text-gray-500">
                “Helping businesses stay financially healthy with streamlined bookkeeping, payroll, and e-commerce accounting.”
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
              <div className="flex justify-center md:justify-start gap-4 mt-4 text-blue-700">
                <a
                  href="https://linkedin.com/in/YOUR_PROFILE"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-blue-500 transition"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://facebook.com/YOUR_PROFILE"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="hover:text-blue-500 transition"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="mailto:youremail@example.com"
                  aria-label="Email"
                  className="hover:text-blue-500 transition"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-white text-center scroll-mt-28">
        <FadeInOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-10">
            Services Tailored for Your Business
          </h2>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <ul className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto text-left text-gray-700 text-lg">
            <li className="flex items-start gap-3"><BarChart className="w-5 h-5 text-blue-700 mt-1" /> Bookkeeping & Reconciliations</li>
            <li className="flex items-start gap-3"><Users className="w-5 h-5 text-blue-700 mt-1" /> Payroll Processing</li>
            <li className="flex items-start gap-3"><FileText className="w-5 h-5 text-blue-700 mt-1" /> BAS & IAS Compliance</li>
            <li className="flex items-start gap-3"><CalendarCheck className="w-5 h-5 text-blue-700 mt-1" /> Financial Reporting</li>
            <li className="flex items-start gap-3"><CreditCard className="w-5 h-5 text-blue-700 mt-1" /> E-Commerce Integrations</li>
            <li className="flex items-start gap-3"><Briefcase className="w-5 h-5 text-blue-700 mt-1" /> CRM & Admin Support</li>
          </ul>
        </FadeInOnScroll>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-6 bg-blue-50 text-center scroll-mt-28">
        <FadeInOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">Experience & Highlights</h2>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            I’ve worked with clients across Australia and Southeast Asia, delivering full-cycle bookkeeping, payroll compliance, financial reporting, and digital automation for e-commerce and professional firms.
          </p>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition">
              <Image src="/portfolio1.jpg" alt="E-Commerce Accounting" width={400} height={240} className="w-full object-cover" />
              <div className="p-4 text-left">
                <h4 className="font-semibold text-gray-800 mb-1">Shopify & Stripe Integration</h4>
                <p className="text-sm text-gray-600">Automated reports & invoicing for a global e-store</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition">
              <Image src="/portfolio2.jpg" alt="Payroll Services" width={400} height={240} className="w-full object-cover" />
              <div className="p-4 text-left">
                <h4 className="font-semibold text-gray-800 mb-1">Xero & Deputy Payroll</h4>
                <p className="text-sm text-gray-600">Weekly payroll & compliance for an AU-based company</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition">
              <Image src="/portfolio3.jpg" alt="Automation Workflow" width={400} height={240} className="w-full object-cover" />
              <div className="p-4 text-left">
                <h4 className="font-semibold text-gray-800 mb-1">Document Automation</h4>
                <p className="text-sm text-gray-600">Optimized Dext, FYI, and Hubdoc workflows</p>
              </div>
            </div>
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
            Ready to streamline your books or offload day-to-day admin tasks? Reach out and let’s discuss how I can support your business.
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
