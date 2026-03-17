import Collapse from "~/components/daisyUi/collapse";
import Heading from "../../components/heading";
import Particles from "./components/particles";
import { Link, useNavigate } from "react-router";
import ScrollVelocity from "./components/scroll-velocity";
import BlurText from "../../components/blur-text";
import StaggeredLetter from "./components/staggered-text";
import { motion } from "framer-motion";

export default function Home() {
  let navigate = useNavigate();

  const potfolio = [
    {
      id: 1,
      title: "Phonic Maps (SaaS Platform)",
      challenge:
        "The Challenge: Managing hundreds of Google Business locations manually is inefficient and prone to error.",
      solution:
        "The Hexodea Solution: We engineered an enterprise-grade, AI-powered dashboard that automates review responses and synchronizes business data effortlessly across the globe from a single, centralized hub.",
    },
    {
      id: 2,
      title: "Fixawy (On-Demand Marketplace)",
      challenge:
        "The Challenge: Creating a reliable, comprehensive home maintenance ecosystem.",
      solution:
        "The Hexodea Solution: We built a massive three-way ecosystem featuring a customer app, a dedicated provider app, and a powerful admin panel. It features real-time tracking, seamless workflows, and automated financial settlements.",
    },
    {
      id: 3,
      title: "Yelo Sales (Bidding Marketplace)",
      challenge:
        "The Challenge: Creating a predictable, transparent transaction environment for buyers and sellers.",
      solution:
        "The Hexodea Solution: We developed a streamlined marketplace application featuring a fixed-price bidding system. This robust architecture ensures fair, standardized transactions and a frictionless user experience from initial offer to final sale.",
    },
  ];

  const faqs = [
    {
      question: "Lorem Ipsum is simply dummy text?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    },
    {
      question: "Lorem Ipsum is simply dummy text?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    },
    {
      question: "Lorem Ipsum is simply dummy text?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    },
    {
      question: "Lorem Ipsum is simply dummy text?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    },
    {
      question: "Lorem Ipsum is simply dummy text?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    },
    {
      question: "Lorem Ipsum is simply dummy text?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    },
  ];

  const services = [
    {
      id: 1,
      title: "Custom Web Engineering",
      description:
        "Your website is your digital storefront. We build lightning-fast, responsive web applications and platforms that look incredible and perform flawlessly.",
      image: "/assets/service/icons/web.svg",
      tech: [
        "Specialized in React, Node.js, and Next.js for high-speed performance, secure e-commerce engines, and robust API microservices.",
      ],
    },
    {
      id: 2,
      title: "Mobile App Strategy",
      description:
        "We craft mobile experiences that people actually want to use. Whether you need a native or cross-platform solution, we focus on intuitive user journeys, rock-solid security, and real-time performance.",
      image: "/assets/service/icons/mobile.svg",
      tech: [
        "Expert development in Flutter and React Native for seamless iOS and Android ecosystems.",
      ],
    },
    {
      id: 3,
      title: "Cloud Solutions & DevOps",
      description:
        "No more worrying about server crashes or slow load times. We design robust cloud infrastructures that guarantee your software stays online, secure, and ready to handle high traffic without breaking a sweat.",
      image: "/assets/service/icons/cloud.svg",
      tech: [
        "Infrastructure as Code with automated deployments across AWS, Azure, and Google Cloud, prioritizing end-to-end encryption.",
      ],
    },
  ];

  return (
    <div
      style={{ backgroundImage: `url('/assets/gradient.svg')` }}
      className="w-full bg-cover bg-center text-dark overflow-hidden"
    >
      <div className="mt-28 md:mt-0 pb-16 md:pb-0 md:h-screen bg-cover bg-center">
        <div
          className="overflow-hidden"
          style={{ width: "100%", height: "100%", position: "absolute" }}
        >
          <Particles
            particleColors={["#0050ad"]}
            particleCount={300}
            particleSpread={10}
            speed={0.2}
            particleBaseSize={150}
            moveParticlesOnHover={false}
            alphaParticles={true}
            disableRotation={true}
          />
        </div>
        <section className="h-full flex justify-center items-center relative z-10">
          <div className="text-center px-4">
            <div className="mb-10 flex justify-center flex-wrap gap-2">
              <StaggeredLetter text="Architecting" />

              <StaggeredLetter text="Digital" className="text-main" />

              <StaggeredLetter text="Excellence" />
            </div>

            <BlurText
              text="Welcome to Hexodea. We are a team of digital architects turning complex challenges into scalable, high-performance tech ecosystems. From custom mobile apps and AI-driven automation to robust cloud systems, if you can imagine it, we can engineer it."
              delay={100}
              animateBy="words"
              direction="top"
              className="text-muted text-center justify-center text-base font-normal lg:w-2/3 mx-auto"
            />
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 md:gap-10 mt-8 md:mt-16"
            >
              <Link
                to="/portfolio"
                className="w-fit link-shine cursor-pointer block py-2 px-4 rounded-4xl font-medium text-lg text-main bg-main/10"
              >
                See Our Work
              </Link>

              <Link
                to="/contact-us"
                className="w-fit link-shine cursor-pointer button-shadow ring-4 ring-main/10 block py-2 px-4 rounded-4xl font-medium text-lg text-white bg-main"
              >
                Let’s Talk About Your Project
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
      <section className="bg-[linear-gradient(95.75deg,#6894DB_0%,#0050AD_100%)] py-16 px-4 lg:px-section">
        <Heading
          title="Our Services"
          description="We provide end-to-end digital solutions tailored to your business needs, from concept to deployment and beyond."
          dark={false}
        />
        <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 gap-16 md:gap-10">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative group bg-[#719cd9] p-6 text-white rounded-2xl border border-white/20"
            >
              <div className="flex items-center justify-between mb-8">
                <img src={service.image} alt="web" />
                <Link
                  to={`/service/${service.id}`}
                  className="w-10 h-10 rounded-full border border-white border-dashed flex items-center justify-center"
                >
                  <img src="/assets/home/icons/arrow.svg" alt="arrow" />
                </Link>
              </div>
              <h3 className="font-normal text-2xl mb-6">{service.title}</h3>
              <p className="font-normal text-sm pb-6">{service.description}</p>

              <div className="z-10 absolute top-5 left-0 w-full min-h-full bg-white rounded-2xl opacity-0 group-hover:opacity-100 group-hover:top-0 transition-all duration-300 p-6">
                {service.tech &&
                  service.tech.map((text, index) => (
                    <p
                      key={index}
                      className="text-dark flex items-center mb-4 gap-2"
                    >
                      <img
                        src="/assets/home/icons/right-arrow.svg"
                        alt="right-arrow"
                      />
                      {text}
                    </p>
                  ))}
                <Link
                  className="absolute border-2 border-white -bottom-5 left-1/2 transform -translate-x-1/2 w-fit mx-auto bg-main px-4 py-2 rounded-3xl text-lg font-medium block text-center"
                  to={`/service/${service.id}`}
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="py-16 px-4 lg:px-section">
        <Heading
          title="Our Portfolio"
          description="A showcase of our digital projects across industries"
          dark={true}
        />
        <div className="mt-14 grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {potfolio.map((item, i) => (
            <motion.div
              initial={{ y: -200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: "easeOut" }}
              key={item.id}
              className="p-4 rounded-3xl border border-black/10 group bg-white flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8 gap-2">
                  <h2 className="text-dark font-medium text-2xl group-hover:text-main">
                    {item.title}
                  </h2>
                  <div
                    onClick={() => navigate(`/portfolio/${item.id}`)}
                    className="cursor-pointer w-10 h-10 bg-main rounded-full flex items-center justify-center group-hover:-rotate-30 transition duration-500"
                  >
                    <img src="/assets/home/icons/right.svg" alt="arrow" />
                  </div>
                </div>
                <p className="font-light text-base text-muted pb-6">
                  {item.challenge}
                </p>
                <p className="font-light text-base text-muted pb-6">
                  {item.solution}
                </p>
              </div>
              <div className="relative overflow-hidden rounded-xl">
                <img
                  className="rounded-2xl w-full"
                  src="/assets/home/card.png"
                  alt="card"
                />
                <div className="shine absolute inset-0"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <ScrollVelocity
        texts={["HEXODEA", "SOFTWARE SOLUTIONS"]}
        velocity={50}
        className="text-main"
      />
      <section className="py-16 px-4 lg:px-section">
        <motion.h2
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-semibold text-dark text-3xl mb-10"
        >
          Your technology partner, <br /> not just
          <span className="ms-2 text-main">
            another <br /> vendor.
          </span>
        </motion.h2>
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p className="font-normal text-lg text-muted mb-6">
              Building great software isn’t just about writing code; it’s about
              understanding your business goals. We partner with you from day
              one to design, develop, and deploy digital products that are
              reliable, secure, and built to scale as you grow.
            </p>

            <div className="mt-12 space-y-6">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-6"
              >
                <img src="/assets/home/icons/rocket.svg" alt="rocket" />
                <div>
                  <h3 className="text-lg font-semibold mb-4">Scalability</h3>
                  <p className="text-muted font-normal text-sm">
                    Systems built to grow with your user base.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-center gap-6"
              >
                <img src="/assets/home/icons/hand.svg" alt="Trust" />
                <div>
                  <h3 className="text-lg font-semibold mb-4">Precision</h3>
                  <p className="text-muted font-normal text-sm">
                    Clean code, documented architecture, and rigorous testing.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex items-center gap-6"
              >
                <img src="/assets/home/icons/delivery.svg" alt="Delivery" />
                <div>
                  <h3 className="text-lg font-semibold mb-4">Innovation</h3>
                  <p className="text-muted font-normal text-sm">
                    Integrating the latest in AI and Cloud Native technologies.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img
              className="w-full"
              src="/assets/home/section.png"
              alt="section"
            />
          </motion.div>
        </div>
      </section>
      <section className="pt-16 px-4 lg:px-section">
        <Heading
          title="FAQS"
          description="Find answers to common questions about our services and platform."
          dark={true}
        />
        <div className="mt-14">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="mb-6"
            >
              <Collapse question={faq.question} answer={faq.answer} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
