import { Link } from "react-router";
import { motion } from "framer-motion";
import BlurText from "../../components/blur-text";
import HeroSectionTextHover from "~/components/hero-section-text-hover";

export default function Service() {
  const webText = [
    "Responsive design across all devices",
    "API integrations and third-party services",
    "Content Management System (CMS) setup",
    "SEO optimization and performance tuning",
    "Ongoing maintenance and support",
  ];

  const services = [
    {
      id: 1,
      title: "Website Development",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      image: "/assets/service/icons/web.svg",
    },
    {
      id: 2,
      title: "Mobile Application Development",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      image: "/assets/service/icons/mobile.svg",
    },
    {
      id: 3,
      title: "Cloud Solution",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      image: "/assets/service/icons/cloud.svg",
    },
    {
      id: 4,
      title: "UI UX Design",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      image: "/assets/service/icons/uiux.svg",
    },
    {
      id: 5,
      title: "AI & Automation",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      image: "/assets/service/icons/ai.svg",
    },
    {
      id: 6,
      title: "Custom Software",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      image: "/assets/service/icons/gear.svg",
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
              <HeroSectionTextHover
                text="WHERE QUALITY MEETS INNOVATION"
                className="text-5xl font-semibold mb-10 text-white lg:w-2/3 mx-auto"
              />
            </motion.div>
            <BlurText
              text='"We provide tailored solutions that help businesses grow, improve efficiency, and stay ahead of the competition."'
              delay={100}
              animateBy="words"
              direction="bottom"
              className="text-white text-base justify-center font-normal lg:w-2/3 mx-auto"
            />
          </div>

          <img
            className="absolute top-0 right-0 w-40 md:w-auto transition-transform duration-300 hover:scale-150 hover:animate-ping animate-bounce"
            src="/assets/service/hero-shape.svg"
            alt="circle"
          />
        </section>
      </div>
      <section className="bg-[linear-gradient(95.75deg,#0050AD_0%,#6894DB_100%)] py-16 px-4 lg:px-section">
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="grid lg:grid-cols-3 md:grid-cols-2 gap-16 md:gap-10"
        >
          {services.map((service, i) => (
            <div
              key={service.id}
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
                {webText.map((text, index) => (
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
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
