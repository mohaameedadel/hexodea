import Collapse from "~/components/daisyUi/collapse";
import Heading from "../../components/heading";
import Particles from "./components/particles";
import { Link, useNavigate } from "react-router";
import ScrollVelocity from "./components/scroll-velocity";

export default function Home() {
  let navigate = useNavigate();
  const webText = [
    "Responsive design across all devices",
    "API integrations and third-party services",
    "Content Management System (CMS) setup",
    "SEO optimization and performance tuning",
    "Ongoing maintenance and support",
  ];

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
  ];

  return (
    <div
      style={{ backgroundImage: `url('/assets/gradient.svg')` }}
      className="w-full bg-cover bg-center text-dark"
    >
      <div className="h-screen bg-cover bg-center">
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
            <h1 className="text-5xl font-semibold text-dark mb-10">
              HEXODEA <span className="text-main">SOFTWARE</span> SOLUTIONS
            </h1>
            <p className="text-muted text-base font-normal lg:w-2/3 mx-auto">
              At Dotnaat, we craft powerful software solutions that help
              businesses grow, innovate, and succeed in the digital era.At
              Dotnaat, we craft powerful software solutions that help businesses
              grow, innovate, and succeed in the digital era.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-10 mt-16">
              <Link
                to="/portfolio"
                className="w-fit cursor-pointer block py-2 px-4 rounded-4xl font-medium text-lg text-main bg-main/10"
              >
                Portfolio
              </Link>
              <Link
                to="/contact-us"
                className="w-fit cursor-pointer button-shadow ring-4 ring-main/10 block py-2 px-4 rounded-4xl font-medium text-lg text-white bg-main"
              >
                Request for Quotation
              </Link>
              <Link
                to="/contact-us"
                className="w-fit cursor-pointer block py-2 px-4 rounded-4xl font-medium text-lg text-main bg-main/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
      <section className="bg-[linear-gradient(95.75deg,#6894DB_0%,#0050AD_100%)] py-16 px-4 lg:px-section">
        <Heading
          title="Our Services"
          description="We provide end-to-end digital solutions tailored to your business needs, from concept to deployment and beyond."
          dark={false}
        />
        <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative group bg-[#719cd9] p-6 text-white rounded-2xl border border-white/20"
            >
              <div className="flex items-center justify-between mb-8">
                <img src={service.image} alt="web" />
                <div className="w-10 h-10 rounded-full border border-white border-dashed flex items-center justify-center">
                  <img src="/assets/home/icons/arrow.svg" alt="arrow" />
                </div>
              </div>
              <h3 className="font-normal text-2xl mb-6">{service.title}</h3>
              <p className="font-normal text-sm pb-6">{service.description}</p>

              <div className="absolute top-5 left-0 w-full min-h-full bg-white rounded-2xl opacity-0 group-hover:opacity-100 group-hover:top-0 transition-all duration-300 p-6">
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
                  className="absolute border-2 border-white -bottom-5 left-1/2 transform -translate-x-1/2 w-fit mx-auto bg-main  px-4 py-2 rounded-3xl text-lg font-medium block text-center"
                  to={`/service/${service.id}`}
                >
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 px-4 lg:px-section">
        <Heading
          title="Our Portfolio"
          description="A showcase of our digital projects across industries"
          dark={true}
        />
        <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {potfolio.map((item, index) => (
            <div key={index} className="p-4 rounded-3xl border border-black/10">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-dark font-normal text-2xl">{item.title}</h2>
                <div
                  onClick={() => navigate(`/portfolio/${item.id}`)}
                  className="cursor-pointer w-10 h-10 bg-main rounded-full flex items-center justify-center"
                >
                  <img src="/assets/home/icons/right.svg" alt="arrow" />
                </div>
              </div>
              <p className="font-light text-base text-muted pb-6">
                {item.description}
              </p>
              <img
                className="rounded-2xl w-full"
                src="/assets/home/card.png"
                alt="card"
              />
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 px-4 lg:px-section">
        <h2 className="font-semibold text-dark text-3xl mb-10">
          We Transform Ideas <br /> Into
          <span className="ms-1 text-main">
            Digital <br /> Excellence
          </span>
        </h2>
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <p className="font-normal text-lg text-muted mb-6">
              At DotNaat, we're more than just developers – we're digital
              architects who understand that great software is born from the
              perfect blend of innovation, strategy, and craftsmanship.
            </p>
            <p className="font-normal text-lg text-muted">
              Our team of passionate creators brings years of experience in
              building solutions that don't just work, but inspire and transform
              businesses.
            </p>

            <div className="mt-12 space-y-6">
              <div className="flex items-center gap-6">
                <img src="/assets/home/icons/rocket.svg" alt="rocket" />
                <div>
                  <h3 className="text-lg font-semibold mb-4">Innovation</h3>
                  <p className="text-muted font-normal text-sm">
                    Cutting-edge solutions for tomorrow's challenges
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <img src="/assets/home/icons/hand.svg" alt="Trust" />
                <div>
                  <h3 className="text-lg font-semibold mb-4">Trust</h3>
                  <p className="text-muted font-normal text-sm">
                    Building lasting partnerships through transparency
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <img src="/assets/home/icons/delivery.svg" alt="Delivery" />
                <div>
                  <h3 className="text-lg font-semibold mb-4">Delivery</h3>
                  <p className="text-muted font-normal text-sm">
                    Fast, reliable, and high-quality results every time
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              className="w-full"
              src="/assets/home/section.png"
              alt="section"
            />
          </div>
        </div>
      </section>
      <ScrollVelocity
        texts={["HEXODEA", "SOFTWARE SOLUTIONS"]}
        velocity={50}
        className="text-main"
      />
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
    </div>
  );
}
