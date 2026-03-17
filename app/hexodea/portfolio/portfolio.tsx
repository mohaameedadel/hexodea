import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import BlurText from "../../components/blur-text";
import StaggeredLetter from "../home/components/staggered-text";

export default function Portfolio() {
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
                <StaggeredLetter
                  text="Don't just take"
                  className="text-white"
                />

                <StaggeredLetter
                  text="our word for it."
                  className="text-white"
                />

                <StaggeredLetter
                  text="Look at what we’ve built."
                  className="text-white"
                />
              </div>
            </motion.div>
            <BlurText
              text='"A glimpse into some of the digital ecosystems and platforms we’ve brought to life."'
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

      <section className="py-16 px-4 lg:px-section">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
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
    </div>
  );
}
