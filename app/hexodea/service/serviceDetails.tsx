import { Link, useNavigate } from "react-router";
import Heading from "~/components/heading";
import { ZigzagSteps } from "~/components/zigzag-steps";
import { motion } from "framer-motion";

export default function ServiceDetails({
  params,
}: {
  params: { serviceId: string };
}) {
  let navigate = useNavigate();
  const services = [
    {
      id: 1,
      title: "Website Development",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      image: "/assets/service-details/icons/web.svg",
    },
    {
      id: 2,
      title: "Mobile Application Development",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      image: "/assets/service-details/icons/mobile.svg",
    },
    {
      id: 3,
      title: "Cloud Solution",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      image: "/assets/service-details/icons/cloud.svg",
    },
    {
      id: 4,
      title: "UI UX Design",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      image: "/assets/service-details/icons/uiux.svg",
    },
    {
      id: 5,
      title: "AI & Automation",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      image: "/assets/service-details/icons/ai.svg",
    },
    {
      id: 6,
      title: "Custom Software",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      image: "/assets/service-details/icons/gear.svg",
    },
  ];

  const service = services.find(
    (service) => service.id.toString() === params.serviceId
  );

  const steps = [
    {
      title: "User Experience Design ",
      description:
        "We conducted extensive UX research with banking customers to understand their needs, frustrations, and desires in a modern banking app.",
    },
    {
      title: "User Experience Design ",
      description:
        "We conducted extensive UX research with banking customers to understand their needs, frustrations, and desires in a modern banking app.",
    },
    {
      title: "User Experience Design ",
      description:
        "We conducted extensive UX research with banking customers to understand their needs, frustrations, and desires in a modern banking app.",
    },
    {
      title: "User Experience Design ",
      description:
        "We conducted extensive UX research with banking customers to understand their needs, frustrations, and desires in a modern banking app.",
    },
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

  return (
    <div
      style={{ backgroundImage: `url('/assets/gradient.svg')` }}
      className="w-full bg-cover bg-center text-dark"
    >
      <div className="mt-16 pt-16 px-4 lg:px-section">
        <div className="flex items-center gap-2">
          <Link to="/service">
            <h1 className="text-[#104475]">Services</h1>
          </Link>
          <img src="/assets/service-details/icons/arrow.svg" alt="arrow" />
          <div>
            <h1 className="text-muted">{service?.title}</h1>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-16 px-4 lg:px-section"
      >
        <div className="p-6 bg-white shadow-[0_0_6px_0_#0000001F] rounded-2xl">
          <img src={service?.image} alt={service?.title} />
          <h2 className="text-2xl font-medium my-6">{service?.title}</h2>
          <p className="text-base font-normal text-muted">
            {service?.description}
          </p>
        </div>
      </motion.div>
      <section className="py-16 px-4 lg:px-section">
        <div>
          <Heading
            title="How It Works"
            description="Our proven design process ensures quality, efficiency, and results"
            dark
          />
          <div className="pt-14">
            <ZigzagSteps steps={steps} />
          </div>
        </div>
      </section>
      <section className="py-16 px-4 lg:px-section">
        <Heading
          title="Related Projects"
          description="Explore similar projects we've recently delivered"
          dark={true}
        />
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 gap-6"
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
      <div className="px-4 lg:px-section">
        <div className="flex justify-between items-center p-10 rounded-3xl bg-[linear-gradient(95.75deg,#0050AD_0%,#6894DB_100%)]">
          <div className="text-white">
            <h2 className="font-medium text-3xl mb-6">Need More Information</h2>
            <p className="font-normal">
              Write your concern to us and our specialist will get back to you
            </p>
          </div>
          <Link
            className="link-shine bg-white button-shadow ring-4 ring-white/10 text-main px-4 py-2 h-full rounded-3xl text-lg font-medium block text-center mt-6 lg:mt-0"
            to="/contact-us"
          >
            Order The Service Now
          </Link>
        </div>
      </div>
    </div>
  );
}
