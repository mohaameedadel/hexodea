import { Link } from "react-router";
import Collapse from "~/components/daisyUi/collapse";
import Heading from "~/components/heading";
import { cn } from "~/utils/cn";
import BlurText from "../../components/blur-text";
import { motion } from "framer-motion";
import StaggeredLetter from "../home/components/staggered-text";

export default function About() {
  const overView = [
    {
      id: 1,
      title: "We Listen (Discovery)",
      description:
        "Before we touch a keyboard, we analyze your business logic to truly understand what you need and what your users want.",
    },
    {
      id: 2,
      title: "We Architect (Design)",
      description:
        "We plan out the entire system blueprint, ensuring the foundation is solid, scalable, and secure.",
    },
    {
      id: 3,
      title: "We Build (Agile Development)",
      description:
        "Our development process utilizes two-week sprints. We keep you in the loop with full transparency at every milestone so there are no surprises.",
    },
    {
      id: 4,
      title: "We Support (Deployment & Beyond)",
      description:
        "Launch day is just the beginning. We don't just launch; we monitor, maintain, and scale alongside you.",
    },
  ];

  const missionAndVision = [
    {
      id: 1,
      title: "Our Mission",
      description:
        "We didn't start Hexodea just to build apps; our mission is to bridge the gap between complex business challenges and elegant technical solutions. We prioritize crystal-clear communication, transparent development cycles, and high-quality engineering.",
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
      question:
        "How much does it cost to build a custom app or software platform?",
      answer:
        "Because every project is unique, there is no one-size-fits-all price. The cost depends on the complexity of your requirements, the platforms you want to target (iOS, Android, Web), and the technology stack required. During our initial discovery phase, we work with you to understand your exact needs and provide a detailed, transparent proposal with no hidden fees.",
    },
    {
      question: "How long will it take to complete my project?",
      answer:
        "Timelines vary based on the scope of the project. A standard mobile MVP (Minimum Viable Product) might take 2 to 3 months, while a complex enterprise ecosystem could take 6 months or more. We use an Agile development process with two-week sprints, meaning you will see consistent progress and functional milestones throughout the development cycle.",
    },
    {
      question: "Who owns the source code once the project is finished?",
      answer:
        "You do. Once the project is fully completed and settled, we hand over all intellectual property rights and the complete source code to your business. We build it, but it belongs entirely to you.",
    },
    {
      question: "Will you maintain and update the software after it launches?",
      answer:
        "Absolutely. Launch day is just the beginning of our partnership. We offer ongoing maintenance, server monitoring, and support packages to ensure your software remains secure, up-to-date, and fully optimized as your user base grows.",
    },
    {
      question: "How do you keep me updated during the development process?",
      answer:
        'Clear communication is the foundation of the "Hexodea Way." You will have a dedicated project manager and direct lines of communication via Slack or email. We also use project management tools like Jira to track progress, and we conduct regular sprint reviews so you can see the software taking shape in real time.',
    },
    {
      question:
        "I have an idea, but I don't have technical specifications yet. Can you still help?",
      answer:
        "Yes! We don't just write code; we are digital architects. If you only have a rough concept, our team will sit down with you for a comprehensive discovery phase. We will help you define the business logic, map out the user journey, and design the technical blueprint before development begins.",
    },
    {
      question: "What technologies and frameworks do you use?",
      answer:
        "We use modern, scalable technologies tailored to your specific project needs. Our core stack includes React, Next.js, and Node.js for web and back-end development, and Flutter or React Native for cross-platform mobile apps. We also utilize AWS, Google Cloud, and Azure for secure, high-performance cloud infrastructure.",
    },
  ];

  return (
    <div
      style={{ backgroundImage: `url('/assets/gradient.svg')` }}
      className="w-full bg-cover bg-center text-dark overflow-hidden"
    >
      <div className="mt-28 md:mt-0 pb-16 md:pb-0 md:h-screen flex justify-center items-center px-4 lg:p-section">
        <section className="relative overflow-hidden w-full flex justify-center items-center rounded-3xl bg-[linear-gradient(95.75deg,#0050AD_0%,#6894DB_100%)] py-24 md:py-44">
          <div className="text-center px-4">
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="mb-10 flex justify-center flex-wrap gap-2 lg:w-2/3 mx-auto">
                <StaggeredLetter text="Meet the minds" className="text-white" />

                <StaggeredLetter text="behind" className="text-white" />

                <StaggeredLetter text="the code." className="text-white" />
              </div>
            </motion.div>
            <BlurText
              text="We are Hexodea, a passionate team of digital creators, engineers, and strategists."
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
            <Heading title="Our Process" description="The Hexodea Way" dark />
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mt-14 grid lg:grid-cols-2 gap-16"
            >
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
            </motion.div>
          </div>
          <div></div>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-4 columns-2 gap-6"
          >
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
          </motion.div>
        </div>
      </section>
      <section className="py-16 px-4 lg:px-section">
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid lg:grid-cols-2 gap-6"
        >
          {missionAndVision.map((item) => (
            <div
              key={item.id}
              className={cn(
                item.id === 2 ? "border-[#15A5DB]" : "border-main",
                "p-6 border-s-4 rounded-xl  bg-white shadow-[0px_0px_10px_0px_#0000001F]",
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
        </motion.div>
      </section>
      <section className="py-16 px-4 lg:px-section">
        <Heading title="WHY HEXODEA" dark />

        <motion.div
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-6 mt-14"
        >
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
        </motion.div>
      </section>
      <section className="py-16 px-4 lg:px-section">
        <Heading
          title="Got questions? We’ve got answers."
          description="Here is everything you need to know about how we work, our processes, and what it’s like to partner with Hexodea."
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

      <div className="px-4 lg:px-section">
        <div className="flex justify-between items-center flex-wrap p-10 rounded-3xl bg-[linear-gradient(95.75deg,#0050AD_0%,#6894DB_100%)]">
          <div className="text-white">
            <h2 className="font-medium text-3xl mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="font-normal">
              Let's turn your ideas into powerful digital experiences.
            </p>
          </div>
          <Link
            className="link-shine bg-white button-shadow ring-4 ring-white/10 text-main px-4 py-2 h-full rounded-3xl text-lg font-medium block text-center mt-6 lg:mt-0"
            to="/contact-us"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
