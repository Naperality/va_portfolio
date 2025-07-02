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
      <section
        id="about"
        className="relative pt-32 pb-20 px-6 min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-blue-50 via-white to-yellow-50 scroll-mt-28"
      >
        {/* Decorative Circle Behind Profile */}
        <div className="absolute top-20 left-5 w-72 h-72 bg-blue-100 rounded-full opacity-20 blur-3xl z-0"></div>
        <div className="absolute bottom-0 right-10 w-56 h-56 bg-yellow-100 rounded-full opacity-20 blur-2xl z-0"></div>

        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <FadeInOnScroll>
            <div className="relative w-40 sm:w-52 md:w-72 lg:w-96 mx-auto">
              {/* Optional Glow Behind Image */}
              <div className="absolute -inset-2 bg-blue-100 rounded-full blur-xl opacity-40 z-0"></div>
              <Image
                src="/pfp.jpg"
                alt="Rudicarm Visitacion-Gustilo"
                width={400}
                height={400}
                priority
                className="relative rounded-full shadow-xl ring-4 ring-blue-100 object-cover w-full h-auto z-10"
              />
            </div>
          </FadeInOnScroll>

          <div className="text-center md:text-left space-y-5">
            <FadeInOnScroll>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-800 leading-snug">
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
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 mt-2">
              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-blue-700 text-white rounded-full font-semibold hover:bg-blue-600 transition"
              >
                Work With Me
              </a>
              <a
                href="/Rudicarm Gustilo CV2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 border border-blue-700 text-blue-700 rounded-full font-semibold hover:bg-blue-50 transition"
              >
                View Resume
              </a>
            </div>
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
              <div className="w-full px-4 sm:px-6 md:px-8">
                <small className="block text-gray-500 text-xs sm:text-sm mt-2 leading-snug">
                  Tip: Make sure your browser opens mail links with Gmail.
                </small>
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
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="bg-gray-50 rounded-xl shadow hover:shadow-md transition p-4"
            >
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
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="relative py-24 px-6 bg-gradient-to-r from-yellow-50 via-white to-blue-50 text-center scroll-mt-28 overflow-hidden"
      >
        {/* 🔵 Background Image (blurred & subtle) */}
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/portfolio-bg.jpg" // 🔄 Replace with your preferred background
            alt="Portfolio background"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <FadeInOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">Experience & Highlights</h2>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              I’ve worked with clients across <strong>Australia</strong> and <strong>Southeast Asia</strong>, delivering full-cycle bookkeeping, payroll compliance, financial reporting, and digital automation for e-commerce and professional firms.
            </p>
          </FadeInOnScroll>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                type: 'video',
                src: '/shopify.mp4',
                poster: '/portfolio2.webp',
                title: 'Shopify & Stripe Integration',
                desc: 'Automated reports & invoicing for a global e-store',
              },
              {
                type: 'video',
                src: '/xero.mp4',
                poster: '/portfolio1.webp',
                title: 'Xero & Deputy Payroll',
                desc: 'Weekly payroll & compliance for an AU-based company',
              },
              {
                type: 'image',
                src: '/portfolio3.png',
                title: 'Document Automation',
                desc: 'Optimized Dext, FYI, and Hubdoc workflows',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.2,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="backdrop-blur-md bg-white/60 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition border border-gray-200"
              >
                {item.type === 'video' ? (
                  <video
                    src={item.src}
                    poster={item.poster}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={400}
                    height={240}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4 text-left">
                  <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative py-24 px-6 bg-gradient-to-br from-blue-50 via-white to-yellow-50 text-center scroll-mt-28 overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/contact-bg.jpg" // 🖼️ replace with your own image
            alt="Background"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Illustration / Photo */}
          <FadeInOnScroll>
            <div className="flex justify-center md:justify-end">
              <Image
                src="/contact-illustration.jpg" // 🖼️ your own friendly illustration or photo
                alt="Get in touch"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </FadeInOnScroll>

          {/* Right: Contact Info */}
          <div className="text-center md:text-left">
            <FadeInOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
                Let’s Connect
              </h2>
            </FadeInOnScroll>

            <FadeInOnScroll>
              <p className="text-gray-700 mb-6 max-w-xl">
                Ready to streamline your books or offload day-to-day admin tasks? Reach out and let’s discuss how I can support your business.
              </p>
            </FadeInOnScroll>

            <FadeInOnScroll>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4">
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
              <small className="block text-gray-500 text-xs sm:text-sm mt-3">
                Tip: Make sure your browser opens mail links with Gmail.
              </small>
            </FadeInOnScroll>
          </div>
        </div>
      </section>


    </main>
  );
}
