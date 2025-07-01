'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { BarChart, CalendarCheck, CreditCard, FileText, Users, Briefcase, Linkedin, Facebook, Mail, Phone  } from 'lucide-react';

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
        {/* Top Left Blob */}
        <div className="absolute -top-10 -left-10 sm:-top-16 sm:-left-16 w-40 sm:w-56 md:w-72 lg:w-[400px] aspect-square z-0 opacity-20 pointer-events-none">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-blue-100">
            <path d="M45.3,-66.7C..." transform="translate(100 100)" />
          </svg>
        </div>

        {/* Bottom Right Blob */}
        <div className="absolute -bottom-10 -right-10 sm:-bottom-16 sm:-right-16 w-40 sm:w-56 md:w-72 lg:w-[400px] aspect-square z-0 opacity-20 pointer-events-none">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-yellow-100">
            <path d="M45.3,-66.7C..." transform="translate(100 100)" />
          </svg>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <FadeInOnScroll>
          <div className="w-40 sm:w-52 md:w-72 lg:w-96 mx-auto">
            <Image
              src="/pfp.jfif"
              alt="Rudicarm Visitacion-Gustilo"
              width={400}
              height={400}
              className="rounded-full shadow-lg ring-4 ring-blue-100 object-cover w-full h-auto"
            />
          </div>
        </FadeInOnScroll>
          <div className="text-center md:text-left space-y-5">
            <FadeInOnScroll>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800 leading-snug">
                Rudicarm Visitacion-Gustilo
              </h2>
            </FadeInOnScroll>
            <FadeInOnScroll>
              <h3 className="text-base sm:text-lg md:text-xl font-medium text-gray-600">
                Virtual Bookkeeper & Accounting Specialist
              </h3>
            </FadeInOnScroll>
            <FadeInOnScroll>
              <p className="italic text-gray-500 text-sm sm:text-base max-w-xl mx-auto md:mx-0">
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
                  href="https://www.linkedin.com/in/rudicarm-gustilo-291611247/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-blue-500 transition"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://www.facebook.com/rudicarm.visitacion#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="hover:text-blue-500 transition"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="mailto:rudicarmvisitacion@gmail.com"
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto text-left text-gray-700">
            {[
              {
                icon: <BarChart className="w-5 h-5 text-blue-700 mt-1" />,
                title: 'Bookkeeping & Reconciliations',
                image: '/placeholder-bookkeeping.jpg',
              },
              {
                icon: <Users className="w-5 h-5 text-blue-700 mt-1" />,
                title: 'Payroll Processing',
                image: '/placeholder-payroll.jpg',
              },
              {
                icon: <FileText className="w-5 h-5 text-blue-700 mt-1" />,
                title: 'BAS & IAS Compliance',
                image: '/placeholder-compliance.jpg',
              },
              {
                icon: <CalendarCheck className="w-5 h-5 text-blue-700 mt-1" />,
                title: 'Financial Reporting',
                image: '/placeholder-reporting.jpg',
              },
              {
                icon: <CreditCard className="w-5 h-5 text-blue-700 mt-1" />,
                title: 'E-Commerce Integrations',
                image: '/placeholder-ecommerce.jpg',
              },
              {
                icon: <Briefcase className="w-5 h-5 text-blue-700 mt-1" />,
                title: 'CRM & Admin Support',
                image: '/placeholder-admin.jpg',
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl shadow hover:shadow-md transition p-4">
                <div className="relative h-40 w-full mb-4 rounded-md overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex items-start gap-3">
                  {service.icon}
                  <h4 className="text-lg font-semibold">{service.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </FadeInOnScroll>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-6 bg-blue-50 text-center scroll-mt-28">
        <FadeInOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">Experience & Highlights</h2>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            I’ve worked with clients across <strong>Australia</strong> and <strong>Southeast Asia</strong>, delivering full-cycle bookkeeping, payroll compliance, financial reporting, and digital automation for e-commerce and professional firms.
          </p>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition">
              <video
                src="/shopify.mp4"
                poster="/portfolio2.webp"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto object-cover"
              />
              <div className="p-4 text-left">
                <h4 className="font-semibold text-gray-800 mb-1">Shopify & Stripe Integration</h4>
                <p className="text-sm text-gray-600">Automated reports & invoicing for a global e-store</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition">
              <video
                src="/xero.mp4"
                poster="/portfolio1.webp"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto object-cover"
              />              
              <div className="p-4 text-left">
                <h4 className="font-semibold text-gray-800 mb-1">Xero & Deputy Payroll</h4>
                <p className="text-sm text-gray-600">Weekly payroll & compliance for an AU-based company</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition">
              <Image src="/portfolio3.png" alt="Automation Workflow" width={400} height={240} className="w-full object-cover" />
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
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="mailto:rudicarmvisitacion@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-500 transition"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a
              href="tel:+639171234567"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-500 transition"
            >
              <Phone className="w-5 h-5" />
              Call Me
            </a>
          </div>
        </FadeInOnScroll>
      </section>

    </main>
  );
}
