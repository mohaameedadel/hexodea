import { Link } from "react-router";
import Collapse from "~/components/daisyUi/collapse";
import Heading from "~/components/heading";
import { cn } from "~/utils/cn";
import BoldCopy from "./components/bold-copy";
import BlurText from "../../components/blur-text";
import { motion } from "framer-motion";

export default function About() {
  const overView = [
    {
      id: 1,
      title: "Who We Are ",
      description:
        "You get a 2-week free trial to kick the Smarty tries. We want you to.",
    },
    {
      id: 2,
      title: "What Do We Do",
      description:
        "We give you a free course that guides you through the process.",
    },
    {
      id: 3,
      title: "How Do We Help",
      description:
        "Use our multimedia lecturers, videos, and coaching sessions.",
    },
    {
      id: 4,
      title: "Create success story",
      description:
        "With access to online learning resources anyone can transfrm.",
    },
  ];

  const missionAndVision = [
    {
      id: 1,
      title: "Our Mission",
      description:
        "Our mission is to deliver exceptional digital marketing, branding, and web solutions through creativity, technology, and strategy, ensuring every project drives measurable success and long-term value for our clients.",
      image: "/assets/about/icons/mission.svg",
    },
    {
      id: 2,
      title: "Our Vision",
      description:
        "Our vision is to become a leading force in the digital industry by creating innovative, human-centered solutions that empower businesses to grow, connect with their audiences, and leave a meaningful impact on the world.",
      image: "/assets/about/icons/vision.svg",
    },
  ];

  const whyHexodea = [
    {
      id: 1,
      title: "Boldness",
      description: "We take creative risks that set brands apart",
      image: "/assets/about/icons/boldnes.svg",
    },
    {
      id: 2,
      title: "Innovation",
      description: "Cutting-edge solutions for modern challenges",
      image: "/assets/about/icons/innovition.svg",
    },
    {
      id: 3,
      title: "Simplicity",
      description: "Clear, effective communication that resonates",
      image: "/assets/about/icons/simplicity.svg",
    },
    {
      id: 4,
      title: "Honesty",
      description: "Transparent relationships built on trust",
      image: "/assets/about/icons/honesty.svg",
    },
    {
      id: 5,
      title: "Results",
      description: "Data-driven strategies that deliver growth",
      image: "/assets/about/icons/results.svg",
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

  return (
    <div
      style={{ backgroundImage: `url('/assets/gradient.svg')` }}
      className="w-full bg-cover bg-center text-dark overflow-hidden"
    >
      <div className="mt-24 md:mt-0 pb-16 md:pb-0 md:h-screen flex justify-center items-center px-4 lg:p-section">
        <section className="relative overflow-hidden w-full flex justify-center items-center rounded-3xl bg-[linear-gradient(95.75deg,#0050AD_0%,#6894DB_100%)] py-24 md:py-44">
          <div className="text-center px-4">
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <BoldCopy text="ABOUT HEXODEA" />
            </motion.div>
            <BlurText
              text="We're a creative agency driven by passion, powered by innovation, and dedicated to transforming brands into unforgettable experiences."
              delay={100}
              animateBy="words"
              direction="bottom"
              className="text-white text-base justify-center font-normal lg:w-2/3 mx-auto"
            />
            <p className="text-white text-base font-normal lg:w-2/3 mx-auto"></p>
          </div>

          <img
            className="absolute top-0 right-0 w-40 md:w-auto transition-transform duration-300 hover:scale-150 hover:animate-ping animate-bounce"
            src="/assets/service/hero-shape.svg"
            alt="circle"
          />
        </section>
      </div>
      <section className="pb-16 px-4 lg:px-section">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <Heading
              title="Over View"
              description="At Besnik Consultancy, we take pride in our values – service, integrity, and excellence. "
              dark
            />
            <div className="mt-14 grid lg:grid-cols-2 gap-16">
              {overView.map((item) => (
                <div key={item.id}>
                  <span className="font-normal text-6xl mb-4 block">
                    {item.id}.
                  </span>
                  <h3 className="font-normal text-2xl mb-4">{item.title}</h3>
                  <p className="font-normal text-base text-muted">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div></div>
          <div className="lg:col-span-4 columns-2 gap-6">
            <div>
              <img
                className="w-full object-cover rounded-2xl mb-6"
                src="/assets/about/image1.png"
                alt="hexodea"
              />
            </div>

            <div>
              <img
                className="w-full object-cover rounded-2xl"
                src="/assets/about/image3.png"
                alt="hexodea"
              />
            </div>
            <div className="pt-8">
              <img
                className="w-full object-cover rounded-2xl mb-6"
                src="/assets/about/image2.png"
                alt="hexodea"
              />
            </div>
            <div>
              <img
                className="w-full object-cover rounded-2xl"
                src="/assets/about/image4.png"
                alt="hexodea"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 lg:px-section">
        <div className="grid lg:grid-cols-2 gap-6">
          {missionAndVision.map((item) => (
            <div
              key={item.id}
              className={cn(
                item.id === 2 ? "border-[#15A5DB]" : "border-main",
                "p-6 border-s-4 rounded-xl  bg-white shadow-[0px_0px_10px_0px_#0000001F]"
              )}
            >
              <div className="flex items-center gap-4 mb-4">
                <img src={item.image} alt={item.title} />
                <h2 className="font-medium text-3xl">{item.title}</h2>
              </div>
              <p className="font-normal text-xl text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 px-4 lg:px-section">
        <Heading title="WHY HEXODEA" dark />

        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-6 mt-14">
          {whyHexodea.map((item) => (
            <div
              key={item.id}
              className="px-6 py-8 flex flex-col items-center justify-center text-center"
            >
              <img src={item.image} alt={item.title} />
              <h2 className="mt-6 mb-4 text-lg font-medium">{item.title}</h2>
              <p className="text-sm text-muted font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 px-4 lg:px-section">
        <Heading
          title="FAQS"
          description="Find answers to common questions about our services and platform."
          dark={true}
        />
        <div className="mt-14">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-6">
              <Collapse question={faq.question} answer={faq.answer} />
            </div>
          ))}
        </div>
      </section>

      <div className="px-4 lg:px-section">
        <div className="flex justify-between items-center p-10 rounded-3xl bg-[linear-gradient(95.75deg,#0050AD_0%,#6894DB_100%)]">
          <div className="text-white">
            <h2 className="font-medium text-3xl mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="font-normal">
              Let's turn your ideas into powerful digital experiences.
            </p>
          </div>
          <Link
            className="bg-white button-shadow ring-4 ring-white/10 text-main px-4 py-2 h-full rounded-3xl text-lg font-medium block text-center mt-6 lg:mt-0"
            to="/contact-us"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
