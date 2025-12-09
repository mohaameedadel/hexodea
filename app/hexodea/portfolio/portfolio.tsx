import { useNavigate } from "react-router";
import HeroSectionTextHover from "~/components/hero-section-text-hover";
import { motion } from "framer-motion";
import BlurText from "../../components/blur-text";
import CurvedLoop from "../../components/curved-text";
import JitterText from "./components/jitter-text";

export default function Portfolio() {
  let navigate = useNavigate();

  const potfolio = [
    {
      id: 1,
      title: "Phonic Maps",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    },
    {
      id: 2,
      title: "Fixawy",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    },
    {
      id: 3,
      title: "Hexodea",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    },
    {
      id: 4,
      title: "Hexodea",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    },
    {
      id: 5,
      title: "Hexodea",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    },
    {
      id: 6,
      title: "Hexodea",
      description:
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
              <JitterText
                text="WE ARE BRING YOUR BRAND VISION TO LIFE"
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

      <section className="py-16 px-4 lg:px-section">
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="grid lg:grid-cols-3 md:grid-cols-2 gap-6"
        >
          {potfolio.map((item, i) => (
            <div
              key={item.id}
              className="p-4 rounded-3xl border border-black/10 group bg-white"
            >
              <div className="flex items-center justify-between mb-8">
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
                {item.description}
              </p>
              <div className="relative overflow-hidden rounded-xl">
                <img
                  className="rounded-2xl w-full"
                  src="/assets/home/card.png"
                  alt="card"
                />
                <div className="shine absolute inset-0"></div>
              </div>
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
