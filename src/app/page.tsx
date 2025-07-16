'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { BarChart,
        Building2,
        Banknote, 
        CalendarCheck, 
        CreditCard, 
        FileText, 
        Users, 
        Briefcase, 
        Linkedin, 
        Facebook, 
        Mail, 
        Phone, 
        Laptop, 
        BadgeDollarSign, 
        Clock, 
        Settings2, 
        DollarSign, 
        Sparkles, 
        MessageCircleMore,
        GraduationCap
      } from 'lucide-react';

const bulletVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};


const companies = [
  {
    icon: Building2,
    company: 'AHOY CLUB YACHT & CHARTERS',
    title: 'General Accountant',
    date: 'March 2024 – Present | Sydney, Australia (remote)',
    image: '/companies/ahoy.jpg',
    bullets: [
      'Maintained multi-entity books across AU, EU, US, ensuring 100% month-end closings.',
      'Reduced month-end close cycle from 7 to 4 days via automation.',
      'Processed payroll with full Fair Work and Super compliance.',
      'Led quarterly BAS/IAS lodgments with zero penalties.',
      'Improved executive report timelines by 3+ days.',
    ],
  },
  {
    icon: Briefcase,
    company: 'TOA GLOBAL – FORTUNITY',
    title: 'General Accountant',
    date: 'Aug 2023 – Feb 2024 | Cebu City, PH (AU clients)',
    image: '/companies/toa.webp',
    bullets: [
      'Completed 50+ year-end packs and tax returns with no revisions.',
      'Filed BAS/FBT returns with 100% compliance.',
      'Accelerated audit completion by 30% through strong prep.',
      'Trained 2 junior team members and improved team efficiency.',
    ],
  },
  {
    icon: Banknote,
    company: 'FINANCIAL FANATICS (GO GLOBAL)',
    title: 'Junior Accountant / Bookkeeper',
    date: 'Nov 2022 – Aug 2023 | Remote',
    image: '/companies/financialfanatics.webp',
    bullets: [
      'Handled full-cycle bookkeeping for AU-based SMEs.',
      'Reduced unreconciled items by 95% through weekly Xero updates.',
      'Processed payroll & STP submissions via Deputy + Xero.',
      'Improved AR collections & compliance reporting.',
    ],
  },
];

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const openModal = (pkgTitle: string) => {
    setSelectedPackage(pkgTitle);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPackage(null);
    setIsModalOpen(false);
  };
    return (
    <main className="bg-white text-gray-800 scroll-smooth">

    {/* Hero Section */}
      <section
        id="about"
        className="relative pt-32 pb-20 px-6 min-h-screen flex flex-col md:flex-row items-center justify-center scroll-mt-28 overflow-hidden"
      >
        {/* 🖼️ Background image behind everything */}
        <div className="absolute inset-0 -z-5">
          <Image
            src="/hero-bg.jpg"
            alt="Hero Background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>

        {/* 💫 Optional gradient overlay on top of image */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-yellow-50 opacity-80 -z-10"></div>

        {/* 💫 Decorative blurs */}
        <div className="absolute top-20 left-5 w-72 h-72 bg-blue-100 rounded-full opacity-20 blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-10 w-56 h-56 bg-yellow-100 rounded-full opacity-20 blur-2xl -z-10"></div>

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

      {/* Divider from Hero to About Me */}
      <div className="h-4 bg-gradient-to-b from-transparent to-white" />

      {/* About Me Section */}
      <section
        id="about-me"
        className="relative py-24 px-6 min-h-[80vh] flex items-center justify-center bg-white scroll-mt-28 overflow-hidden"
      >
        {/* 🖼️ Background image */}
        <div className="absolute inset-0 -z-8">
          <Image
            src="/about-bg.jpg" // 👉 Add your about section photo in /public
            alt="About background"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>

        {/* 💫 Gradient overlay for soft transition */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/70 to-yellow-50/60 -z-10"></div>

        {/* ✨ Decorative blur orbs */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-blue-200 rounded-full opacity-20 blur-2xl -z-10"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-yellow-200 rounded-full opacity-20 blur-3xl -z-10"></div>

        {/* 📄 Text Content */}
        <div className="relative z-10 max-w-4xl bg-white/70 backdrop-blur-lg rounded-xl shadow-xl p-8 text-center md:text-left space-y-6 border border-blue-100">
          <FadeInOnScroll>
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-800">About Me</h2>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Hi, I&rsquo;m <strong>Rudicarm &ldquo;RC&rdquo; Gustilo</strong>, a seasoned accountant supporting
              property-focused businesses across Australia. I work remotely from Cebu,
              providing full-spectrum bookkeeping and accounting support to real estate
              agencies, construction firms, and property management teams.
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              With expertise in <strong>Xero</strong>, <strong>QuickBooks</strong>, <strong>BAS and IAS lodgments</strong>,
              <strong> payroll</strong>, and <strong>monthly reconciliations</strong>, I help teams stay compliant,
              audit-ready, and financially sharp. I work closely with finance leads to
              manage multi-entity setups, clean up messy accounts, and streamline reporting
              that drives confident decisions.
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed italic">
              If your books need more structure, speed, or sanity — let’s talk!
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Divider from About me to Services */}
      <div className="h-4 bg-gradient-to-b from-transparent to-white" />

      {/* Services Section */}
      <section
        id="services"
        className="relative py-24 px-6 bg-gradient-to-br from-white via-blue-50 to-white text-center scroll-mt-28 overflow-hidden"
      >
        {/* 🔵 Soft Background Image */}
        <div className="absolute inset-0 opacity-10 -z-8">
          <Image
            src="/services-bg.jpg" // Use a subtle business/abstract background
            alt="Services Background"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10">
          <FadeInOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-10">
              Services Tailored for Your Business
            </h2>
          </FadeInOnScroll>

          <div className="flex flex-wrap justify-center gap-8 text-left text-gray-700">
            {[
              {
                icon: <BarChart className="w-6 h-6 text-blue-600" />,
                title: 'Full-Cycle Bookkeeping',
                image: '/placeholder-bookkeeping.jpg',
              },
              {
                icon: <Users className="w-6 h-6 text-blue-600" />,
                title: 'BAS, IAS, FBT Lodgment (AU Compliance)',
                image: '/placeholder-payroll.jpg',
              },
              {
                icon: <FileText className="w-6 h-6 text-blue-600" />,
                title: 'Month-End & Year-End Closing',
                image: '/placeholder-compliance.jpg',
              },
              {
                icon: <CalendarCheck className="w-6 h-6 text-blue-600" />,
                title: 'Accounts Payable & Receivable',
                image: '/placeholder-reporting.jpg',
              },
              {
                icon: <CreditCard className="w-6 h-6 text-blue-600" />,
                title: 'Payroll process and Management',
                image: '/placeholder-ecommerce.jpg',
              },
              {
                icon: <Briefcase className="w-6 h-6 text-blue-600" />,
                title: 'CRM & Admin Support',
                image: '/placeholder-admin.jpg',
              },
              {
                icon: <GraduationCap className="w-6 h-6 text-blue-600" />,
                title: 'Training & Mentoring',//services
                image: '/workflow/training.gif',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.2,
                  delay: index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="w-full sm:w-[48%] lg:w-[30%] bg-white/80 border border-gray-200 rounded-xl shadow hover:shadow-lg transition-all p-5 backdrop-blur-md"              >
                <div className="relative h-40 w-full mb-4 rounded-md overflow-hidden shadow-sm">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex items-center gap-3">
                  {service.icon}
                  <h4 className="text-lg font-semibold text-gray-800">{service.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider from Services to Tools */}
      <div className="h-4 bg-gradient-to-b from-transparent to-white" />

      {
        /* Tools Expertise Section */
      }
      <section
        id="tools"
        className="relative py-24 px-6 bg-gradient-to-br from-white via-yellow-50 to-blue-50 text-center scroll-mt-28 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 -z-10">
          <Image
            src="/tools/tools-bg.jpg"
            alt="Tools Background"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <FadeInOnScroll>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700 mb-10 flex items-center justify-center gap-3">
              <Laptop className="w-7 h-7 text-blue-700" />
              Software & Tools Expertise
            </h2>
          </FadeInOnScroll>
          <div className="flex flex-wrap justify-center gap-8 text-left text-gray-700">
            {[
              {
                title: 'Xero (Advisor & Payroll Certified)',
                media: '/xero.mp4',
                type: 'video',
              },
              {
                title: 'QuickBooks Online/Desktop',
                media: '/tools/quickbooks.gif',
                type: 'image',
              },
              {
                title: 'MYOB & SAP',
                media: '/tools/myob-sap.webp',
                type: 'image',
              },
              {
                title: 'Hubdoc, Dext, FYI Docs',
                media: '/portfolio3.png',
                type: 'image',
              },
              {
                title: 'Excel (Pivot Tables, Lookups)',
                media: '/shopify.mp4',
                type: 'video',
              },
              {
                title: 'Google Sheets (Dashboards & Charts)',
                media: '/tools/google-sheets.gif',
                type: 'image',
              },
              {
                title: 'Bank Feed Reconciliation (Airwallex, Wise, Stripe, Shopify)',
                media: '/workflow/bank-sync.gif',
                type: 'image',
              },
              {
                title: 'Client Communication (Zoom, Teams, Slack, WhatsApp, Google Meet)',
                media: '/workflow/communication.gif',
                type: 'image',
              },
            ].map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.2,
                  delay: index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="w-full sm:w-[48%] lg:w-[30%] bg-white/80 border border-gray-200 rounded-xl shadow hover:shadow-lg transition-all p-5 backdrop-blur-md"              >
                <div className="relative h-40 w-full mb-4 rounded-md overflow-hidden shadow-sm">
                  {tool.type === 'video' ? (
                    <video
                      src={tool.media}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover rounded"
                    />
                  ) : (
                    <Image
                      src={tool.media}
                      alt={tool.title}
                      width={600}
                      height={300}
                      unoptimized // to avoid Next.js GIF warning
                      className="w-full h-full object-contain"
                    />
                  )}
                </div>
                <h4 className="text-lg font-semibold text-gray-800">{tool.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider from Tools to Portfolio */}
      <div className="h-4 bg-gradient-to-b from-transparent to-white" />

      <section
        id="portfolio"
        className="relative py-24 px-6 bg-gradient-to-r from-yellow-50 via-white to-blue-50 text-center scroll-mt-28 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/portfolio-bg.jpg"
            alt="Portfolio background"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <FadeInOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
              Experience & Highlights
            </h2>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              I&rsquo;ve worked with clients across <strong>Australia</strong> and <strong>Southeast Asia</strong>, delivering full-cycle bookkeeping, payroll compliance, financial reporting, and digital automation for e-commerce and professional firms.
            </p>
          </FadeInOnScroll>

          <div className="space-y-12 text-left">
            {companies.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="bg-white/80 backdrop-blur-md border border-gray-200 shadow-md rounded-xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-start"
              >
                {/* Image */}
                <div className="w-full md:w-1/3 h-48 relative rounded-md overflow-hidden shadow-sm">
                  <Image
                    src={exp.image}
                    alt={exp.company}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text */}
                <div className="md:w-2/3 md:ml-6">
                  <div className="flex items-center gap-2 mb-1">
                    <exp.icon className="w-5 h-5 text-blue-700" />
                    <h3 className="text-lg font-bold text-blue-800">{exp.company}</h3>
                  </div>
                  <p className="text-sm text-gray-500 italic mb-3">
                    {exp.title} — {exp.date}
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                    {exp.bullets.map((point, idx) => (
                      <motion.li
                        key={idx}
                        custom={idx}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.4 }}
                        variants={bulletVariants}
                      >
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Divider from Portfolio to Rates */}
      <div className="h-2 bg-gradient-to-b from-transparent to-white" />
      {/* Section pricing */}
        <section
          id="pricing"
          className="relative py-24 px-6 bg-gradient-to-br from-white via-blue-50 to-yellow-50 text-center scroll-mt-28 overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10 -z-8">
            <Image
              src="/pricing-bg.png"
              alt="Pricing background"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto">
            <FadeInOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4 flex items-center justify-center gap-3">
                <BadgeDollarSign className="w-7 h-7 text-blue-700" />
                Rates & Packages
              </h2>
              <p className="text-gray-700 max-w-2xl mx-auto mb-10 text-base sm:text-lg leading-relaxed">
                Reliable, accurate, and flexible accounting support for businesses that want their books done right—without the stress.
              </p>
            </FadeInOnScroll>

            {/* Hourly Rate */}
            <FadeInOnScroll>
              <div className="bg-white/90 backdrop-blur-md border border-blue-100 shadow-md rounded-lg p-6 sm:p-8 mb-16 max-w-md mx-auto text-left">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <h3 className="text-xl font-semibold text-blue-800">Hourly Rate</h3>
                </div>
                <p className="text-lg font-bold text-blue-700 mb-1">$12 USD / hour</p>
                <p className="text-sm text-gray-600">
                  Best for ad-hoc tasks, short-term help, or when you just need someone to jump in and sort things out.
                </p>
              </div>
            </FadeInOnScroll>

            {/* Packages Grid */}
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[{
                title: 'Starter Package',
                price: '$500 / month',
                icon: Settings2,
                hours: 'Up to 20 hours/month',
                features: [
                  'Bank and credit card reconciliations (1–2 accounts)',
                  'Monthly BAS/BIR compliance prep',
                  'Basic reports (P&L, balance sheet)',
                  'Invoice and bill entry',
                  'Light email support',
                ],
              }, {
                title: 'Growth Package',
                price: '$800 / month',
                icon: Sparkles,
                hours: 'Up to 40 hours/month',
                features: [
                  'Full-cycle bookkeeping',
                  'Payroll processing (AU or PH)',
                  'BAS/IAS prep and review',
                  'AR/AP tracking',
                  'Monthly management reports',
                  'Tools: Xero, QuickBooks, Hubdoc, Dext, etc.',
                ],
              }, {
                title: 'Premium Package',
                price: '$1000 / month',
                icon: DollarSign,
                hours: 'Up to 60 hours/month',
                features: [
                  'Everything in Growth Package',
                  'Multi-entity and multi-currency support',
                  'Airwallex, Wise, Stripe, Shopify integration',
                  'Intercompany reconciliations',
                  'Weekly check-ins and summaries',
                ],
              }].map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                  className={`relative bg-white border-2 ${index === 1 ? 'border-blue-500 shadow-lg scale-[1.02]' : 'border-gray-200'} rounded-xl p-6 flex flex-col justify-between transition hover:shadow-xl`}
                >
                  {index === 1 && (
                    <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs px-3 py-1 rounded-full shadow">Best Value</span>
                  )}
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <pkg.icon className="w-5 h-5 text-blue-600" />
                      <h4 className="text-lg font-semibold text-blue-800">{pkg.title}</h4>
                    </div>
                    <p className="text-lg font-bold text-blue-700 mb-1">{pkg.price}</p>
                    <p className="text-xs text-gray-500 mb-3">{pkg.hours}</p>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <button
                    onClick={() => openModal(pkg.title)}
                    className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition"
                  >
                    Select
                  </button>
                </motion.div>
              ))}
            </div>

            {/* One-Time Clean-Up */}
            <FadeInOnScroll>
              <div className="mt-16 bg-white/80 backdrop-blur-md border border-blue-100 shadow-md rounded-xl p-6 sm:p-8 max-w-3xl mx-auto text-left">
                <div className="flex items-center gap-3 mb-2">
                  <Settings2 className="w-5 h-5 text-blue-600" />
                  <h3 className="text-xl font-semibold text-blue-800">One-Time Clean-Up</h3>
                </div>
                <p className="text-sm text-gray-600 mb-2">Starts at <strong>$500 USD</strong> (Flat rate or hourly, depending on scope)</p>
                <p className="text-sm text-gray-600 mb-3">Books a mess? I&rsquo;ll clean them up.</p>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  <li>Backlog reconciliation (bank, credit card, PayPal, etc.)</li>
                  <li>Catch-up invoicing, bills, and payroll</li>
                  <li>Fixing miscodings and messy ledgers</li>
                  <li>Setup or review of Xero/QuickBooks file structure</li>
                  <li>Up to 12 months&rsquo; worth of clean-up (custom quotes for bigger jobs)</li>
                </ul>
              </div>
            </FadeInOnScroll>

            {/* Custom Offer */}
            <FadeInOnScroll>
              <div className="mt-12 text-center max-w-xl mx-auto">
                <a href="#contact" className="group block text-blue-700 hover:text-blue-600 transition duration-300">
                  <MessageCircleMore className="w-6 h-6 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-sm sm:text-base">
                    <strong>Not seeing what you need?</strong> <span className="underline">Let&rsquo;s build something custom</span>. Whether it&rsquo;s 10 hours a month, project-based, or scalable support—I&rsquo;ve got you.
                  </p>
                </a>
              </div>
            </FadeInOnScroll>
          </div>
        </section>
        {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg relative animate-fade-in-up">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
            >
              ×
            </button>

            <h3 className="text-xl font-bold text-blue-700 mb-2">Request: {selectedPackage}</h3>
            <p className="text-sm text-gray-600 mb-4">
              Fill in your details and we&rsquo;ll get back to you shortly.
            </p>

            <form
              action="https://formsubmit.co/napolytan@gmail.com"
              method="POST"
              className="space-y-4"
            >
              <input type="hidden" name="Package Selected" value={selectedPackage ?? ''} />

              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
              <textarea
                name="message"
                placeholder="Additional details or questions..."
                rows={4}
                className="w-full border border-gray-300 rounded px-3 py-2"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
              >
                Submit Request
              </button>
              <input type="hidden" name="_next" value="https://rudicarm-visitacion-gustillo.vercel.app/thankyou_page" />
            </form>
          </div>
        </div>
      )}

      {/* Divider from Rates to Contact */}
      <div className="h-2 bg-gradient-to-b from-transparent to-white" />

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
                Let&rsquo;s Connect
              </h2>
            </FadeInOnScroll>

            <FadeInOnScroll>
              <p className="text-gray-700 mb-6 max-w-xl">
                Ready to streamline your books or offload day-to-day admin tasks? Reach out and let&rsquo;s discuss how I can support your business.
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
                  href="tel:+639956141982"
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
