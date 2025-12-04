import { useEffect, useRef, useState } from "react";
import { IPhoneMockup } from "react-device-mockup";
import { MdStar, MdStarBorder } from "react-icons/md";
import { Link } from "react-router";
import Heading from "~/components/heading";
import { SimpleSteps } from "~/components/steps";

export default function PortfolioDetails({
  params,
}: {
  params: { portfolioId: string };
}) {
  const defaultImage = "/assets/portfolioDetails/screen.png";

  const [currentSrc, setCurrentSrc] = useState(defaultImage);
  const [fade, setFade] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoChange = () => {
    if (!project?.images || project.images.length === 0) return;

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setFade(true);

      setTimeout(() => {
        setCurrentSrc((prev) => {
          const currentIndex = project.images.indexOf(prev);

          if (currentIndex === -1) return project.images[0];

          return project.images[(currentIndex + 1) % project.images.length];
        });

        setFade(false);
      }, 300);
    }, 5000);
  };

  useEffect(() => {
    startAutoChange();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const setSrcManual = (img: string) => {
    setFade(true);
    setTimeout(() => {
      setCurrentSrc(img);
      setFade(false);
    }, 300);

    startAutoChange();
  };

  const potfolio = [
    {
      id: 1,
      title: "Phonic Maps",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
      images: [
        "/assets/portfolioDetails/screen1.png",
        "/assets/portfolioDetails/screen2.png",
        "/assets/portfolioDetails/screen3.png",
        "/assets/portfolioDetails/screen4.png",
      ],
      summary: [
        {
          id: 1,
          title: "Challenge",
          icon: "/assets/portfolioDetails/icons/challenge.svg",
          description:
            "Legacy banking apps provided poor user experiences with confusing navigation, security concerns, and limited functionality for modern financial needs.",
        },
        {
          id: 2,
          title: "Approach",
          icon: "/assets/portfolioDetails/icons/approach.svg",
          description:
            "We designed a mobile-first banking experience prioritizing security, simplicity, and powerful features. Our approach combined intuitive UI with advanced fintech capabilities.",
        },
        {
          id: 3,
          title: "Result",
          icon: "/assets/portfolioDetails/icons/result.svg",
          description:
            "4.9★ app store rating, 500K+ downloads in first 3 months, and 60% increase in daily active users compared to previous app.",
        },
      ],
      background: "/assets/portfolioDetails/background.jpg",
      cards: [
        "/assets/portfolioDetails/image1.png",
        "/assets/portfolioDetails/image2.png",
        "/assets/portfolioDetails/image3.png",
      ],
      feedbacks: [
        {
          id: 1,
          rating: 4,
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
          user: {
            name: "Maxin Will",
            image: "/assets/portfolioDetails/icons/user_profile.svg",
            position: "Product Manager",
          },
        },
        {
          id: 2,
          rating: 4,
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
          user: {
            name: "Maxin Will",
            image: "/assets/portfolioDetails/icons/user_profile.svg",
            position: "Product Manager",
          },
        },
        {
          id: 3,
          rating: 4,
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
          user: {
            name: "Maxin Will",
            image: "/assets/portfolioDetails/icons/user_profile.svg",
            position: "Product Manager",
          },
        },
      ],
    },
    {
      id: 2,
      title: "Fixawy",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
      images: [
        "/assets/about/image1.png",
        "/assets/about/image2.png",
        "/assets/about/image3.png",
        "/assets/about/image4.png",
      ],
      summary: [
        {
          id: 1,
          title: "Challenge",
          icon: "/assets/portfolioDetails/icons/challenge.svg",
          description:
            "Legacy banking apps provided poor user experiences with confusing navigation, security concerns, and limited functionality for modern financial needs.",
        },
        {
          id: 2,
          title: "Approach",
          icon: "/assets/portfolioDetails/icons/approach.svg",
          description:
            "We designed a mobile-first banking experience prioritizing security, simplicity, and powerful features. Our approach combined intuitive UI with advanced fintech capabilities.",
        },
        {
          id: 3,
          title: "Result",
          icon: "/assets/portfolioDetails/icons/result.svg",
          description:
            "4.9★ app store rating, 500K+ downloads in first 3 months, and 60% increase in daily active users compared to previous app.",
        },
      ],
      background: "/assets/portfolioDetails/background.jpg",
      cards: [
        "/assets/portfolioDetails/image1.png",
        "/assets/portfolioDetails/image2.png",
        "/assets/portfolioDetails/image3.png",
      ],
      feedbacks: [
        {
          id: 1,
          rating: 4,
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
          user: {
            name: "Maxin Will",
            image: "/assets/portfolioDetails/icons/user_profile.svg",
            position: "Product Manager",
          },
        },
        {
          id: 2,
          rating: 4,
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
          user: {
            name: "Maxin Will",
            image: "/assets/portfolioDetails/icons/user_profile.svg",
            position: "Product Manager",
          },
        },
        {
          id: 3,
          rating: 4,
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
          user: {
            name: "Maxin Will",
            image: "/assets/portfolioDetails/icons/user_profile.svg",
            position: "Product Manager",
          },
        },
      ],
    },
    {
      id: 3,
      title: "Hexodea",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
      images: [
        "/assets/about/image1.png",
        "/assets/about/image2.png",
        "/assets/about/image3.png",
        "/assets/about/image4.png",
      ],
      summary: [
        {
          id: 1,
          title: "Challenge",
          icon: "/assets/portfolioDetails/icons/challenge.svg",
          description:
            "Legacy banking apps provided poor user experiences with confusing navigation, security concerns, and limited functionality for modern financial needs.",
        },
        {
          id: 2,
          title: "Approach",
          icon: "/assets/portfolioDetails/icons/approach.svg",
          description:
            "We designed a mobile-first banking experience prioritizing security, simplicity, and powerful features. Our approach combined intuitive UI with advanced fintech capabilities.",
        },
        {
          id: 3,
          title: "Result",
          icon: "/assets/portfolioDetails/icons/result.svg",
          description:
            "4.9★ app store rating, 500K+ downloads in first 3 months, and 60% increase in daily active users compared to previous app.",
        },
      ],
      background: "/assets/portfolioDetails/background.jpg",
      cards: [
        "/assets/portfolioDetails/image1.png",
        "/assets/portfolioDetails/image2.png",
        "/assets/portfolioDetails/image3.png",
      ],
      feedbacks: [
        {
          id: 1,
          rating: 4,
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
          user: {
            name: "Maxin Will",
            image: "/assets/portfolioDetails/icons/user_profile.svg",
            position: "Product Manager",
          },
        },
        {
          id: 2,
          rating: 4,
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
          user: {
            name: "Maxin Will",
            image: "/assets/portfolioDetails/icons/user_profile.svg",
            position: "Product Manager",
          },
        },
        {
          id: 3,
          rating: 4,
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
          user: {
            name: "Maxin Will",
            image: "/assets/portfolioDetails/icons/user_profile.svg",
            position: "Product Manager",
          },
        },
      ],
    },
    {
      id: 4,
      title: "Hexodea",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
      images: [
        "/assets/about/image1.png",
        "/assets/about/image2.png",
        "/assets/about/image3.png",
        "/assets/about/image4.png",
      ],
      summary: [
        {
          id: 1,
          title: "Challenge",
          icon: "/assets/portfolioDetails/icons/challenge.svg",
          description:
            "Legacy banking apps provided poor user experiences with confusing navigation, security concerns, and limited functionality for modern financial needs.",
        },
        {
          id: 2,
          title: "Approach",
          icon: "/assets/portfolioDetails/icons/approach.svg",
          description:
            "We designed a mobile-first banking experience prioritizing security, simplicity, and powerful features. Our approach combined intuitive UI with advanced fintech capabilities.",
        },
        {
          id: 3,
          title: "Result",
          icon: "/assets/portfolioDetails/icons/result.svg",
          description:
            "4.9★ app store rating, 500K+ downloads in first 3 months, and 60% increase in daily active users compared to previous app.",
        },
      ],
      background: "/assets/portfolioDetails/background.jpg",
      cards: [
        "/assets/portfolioDetails/image1.png",
        "/assets/portfolioDetails/image2.png",
        "/assets/portfolioDetails/image3.png",
      ],
      feedbacks: [
        {
          id: 1,
          rating: 4,
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
          user: {
            name: "Maxin Will",
            image: "/assets/portfolioDetails/icons/user_profile.svg",
            position: "Product Manager",
          },
        },
        {
          id: 2,
          rating: 4,
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
          user: {
            name: "Maxin Will",
            image: "/assets/portfolioDetails/icons/user_profile.svg",
            position: "Product Manager",
          },
        },
        {
          id: 3,
          rating: 4,
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
          user: {
            name: "Maxin Will",
            image: "/assets/portfolioDetails/icons/user_profile.svg",
            position: "Product Manager",
          },
        },
      ],
    },
    {
      id: 5,
      title: "Hexodea",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
      images: [
        "/assets/about/image1.png",
        "/assets/about/image2.png",
        "/assets/about/image3.png",
        "/assets/about/image4.png",
      ],
      summary: [
        {
          id: 1,
          title: "Challenge",
          icon: "/assets/portfolioDetails/icons/challenge.svg",
          description:
            "Legacy banking apps provided poor user experiences with confusing navigation, security concerns, and limited functionality for modern financial needs.",
        },
        {
          id: 2,
          title: "Approach",
          icon: "/assets/portfolioDetails/icons/approach.svg",
          description:
            "We designed a mobile-first banking experience prioritizing security, simplicity, and powerful features. Our approach combined intuitive UI with advanced fintech capabilities.",
        },
        {
          id: 3,
          title: "Result",
          icon: "/assets/portfolioDetails/icons/result.svg",
          description:
            "4.9★ app store rating, 500K+ downloads in first 3 months, and 60% increase in daily active users compared to previous app.",
        },
      ],
      background: "/assets/portfolioDetails/background.jpg",
      cards: [
        "/assets/portfolioDetails/image1.png",
        "/assets/portfolioDetails/image2.png",
        "/assets/portfolioDetails/image3.png",
      ],
      feedbacks: [
        {
          id: 1,
          rating: 4,
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
          user: {
            name: "Maxin Will",
            image: "/assets/portfolioDetails/icons/user_profile.svg",
            position: "Product Manager",
          },
        },
        {
          id: 2,
          rating: 4,
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
          user: {
            name: "Maxin Will",
            image: "/assets/portfolioDetails/icons/user_profile.svg",
            position: "Product Manager",
          },
        },
        {
          id: 3,
          rating: 4,
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
          user: {
            name: "Maxin Will",
            image: "/assets/portfolioDetails/icons/user_profile.svg",
            position: "Product Manager",
          },
        },
      ],
    },
    {
      id: 6,
      title: "Hexodea",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
      images: [
        "/assets/about/image1.png",
        "/assets/about/image2.png",
        "/assets/about/image3.png",
        "/assets/about/image4.png",
      ],
      summary: [
        {
          id: 1,
          title: "Challenge",
          icon: "/assets/portfolioDetails/icons/challenge.svg",
          description:
            "Legacy banking apps provided poor user experiences with confusing navigation, security concerns, and limited functionality for modern financial needs.",
        },
        {
          id: 2,
          title: "Approach",
          icon: "/assets/portfolioDetails/icons/approach.svg",
          description:
            "We designed a mobile-first banking experience prioritizing security, simplicity, and powerful features. Our approach combined intuitive UI with advanced fintech capabilities.",
        },
        {
          id: 3,
          title: "Result",
          icon: "/assets/portfolioDetails/icons/result.svg",
          description:
            "4.9★ app store rating, 500K+ downloads in first 3 months, and 60% increase in daily active users compared to previous app.",
        },
      ],
      background: "/assets/portfolioDetails/background.jpg",
      cards: [
        "/assets/portfolioDetails/image1.png",
        "/assets/portfolioDetails/image2.png",
        "/assets/portfolioDetails/image3.png",
      ],
      feedbacks: [
        {
          id: 1,
          rating: 4,
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
          user: {
            name: "Maxin Will",
            image: "/assets/portfolioDetails/icons/user_profile.svg",
            position: "Product Manager",
          },
        },
        {
          id: 2,
          rating: 4,
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
          user: {
            name: "Maxin Will",
            image: "/assets/portfolioDetails/icons/user_profile.svg",
            position: "Product Manager",
          },
        },
        {
          id: 3,
          rating: 4,
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
          user: {
            name: "Maxin Will",
            image: "/assets/portfolioDetails/icons/user_profile.svg",
            position: "Product Manager",
          },
        },
      ],
    },
  ];

  const project = potfolio.find(
    (item) => item.id === Number(params.portfolioId)
  );

  const steps = [
    {
      title: "User Experience Design",
      description:
        "We conducted extensive UX research with banking customers to understand their needs, frustrations, and desires in a modern banking app.",
    },
    {
      title: "Security Architecture",
      description:
        "Implemented bank-grade security with biometric authentication, encrypted transactions, and real-time fraud detection while maintaining ease of use.",
    },
    {
      title: "Feature Development",
      description:
        "Built comprehensive banking features including instant transfers, investment tracking, budgeting tools, and AI-powered financial insights.",
    },
    {
      title: "Optimization & Growth",
      description:
        "Post-launch, we continuously monitored performance metrics and user behavior, implementing data-driven improvements that drove exponential growth.",
    },
  ];

  return (
    <div
      style={{ backgroundImage: `url('/assets/gradient.svg')` }}
      className="w-full bg-cover bg-center text-dark"
    >
      <div className="mt-16 pt-16 px-4 lg:px-section">
        <div className="flex items-center gap-2">
          <Link to="/portfolio">
            <h1 className="text-[#104475]">Portfolio</h1>
          </Link>
          <img src="/assets/service-details/icons/arrow.svg" alt="arrow" />
          <div>
            <h1 className="text-muted">{project?.title}</h1>
          </div>
        </div>
      </div>

      <div className="pt-10 pb-16 px-4 lg:px-section">
        <div className="mb-10 w-fit bg-[#1044751A] text-main py-2 px-4 rounded-4xl">
          Social Media
        </div>
        <h2 className="text-4xl font-semibold">{project?.title}</h2>
      </div>

      <section className="pb-16 px-4 lg:px-section">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {project?.summary?.map((item) => (
            <div className="p-4" key={item.id}>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-normal">{item.title}</h3>
                <img src={item.icon} alt={item.title} />
              </div>
              <p className="font-normal text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 lg:px-section">
        <div
          style={{
            backgroundImage: `url('${project?.background}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="rounded-xl p-5 grid md:grid-cols-3 xl:grid-cols-5 gap-8 items-center"
        >
          {project?.images.slice(0, 2).map((img, i) => (
            <img
              key={i}
              onClick={() => setSrcManual(img)}
              src={img}
              alt="card"
              className="h-full max-h-[445px] w-full max-w-[200px] object-cover cursor-pointer rounded-4xl"
            />
          ))}

          <div className="flex justify-center items-center">
            <IPhoneMockup
              screenWidth={200}
              frameColor="#000000"
              frameOnly
              hideStatusBar
              hideNavBar
            >
              <img
                src={currentSrc}
                alt="mockup"
                className={`transition-opacity duration-300 ${
                  fade ? "opacity-0" : "opacity-100"
                }`}
              />
            </IPhoneMockup>
          </div>

          {project?.images.slice(2, 4).map((img, i) => (
            <img
              key={i + 2}
              onClick={() => setSrcManual(img)}
              src={img}
              alt="card"
              className="h-full w-full object-cover cursor-pointer rounded-4xl"
            />
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-8 gap-6">
          {project?.cards?.map((img, i) => (
            <img
              key={i}
              className="h-full w-full object-cover"
              src={img}
              alt="card"
            />
          ))}
        </div>
      </section>

      <section className="py-16 px-4 lg:px-section">
        <Heading title="Project Process" dark />

        <div className="mt-14">
          <SimpleSteps steps={steps} />
        </div>
      </section>
      <section className="py-16 px-4 lg:px-section">
        <Heading title="Project Feedback" dark />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {project?.feedbacks?.map((item) => (
            <div className="p-8 bg-main rounded-3xl text-white" key={item.id}>
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star}>
                    {star <= item.rating ? (
                      <MdStar className="text-yellow-400 text-2xl" />
                    ) : (
                      <MdStarBorder className="text-gray-300 text-2xl" />
                    )}
                  </span>
                ))}
              </div>
              <p className="text-lg font-normal">{item.content}</p>
              <div className="flex items-center gap-4 mt-8">
                <img
                  className="rounded-full"
                  src={item.user.image}
                  alt={item.user.name}
                />
                <div>
                  <h3>{item.user.name}</h3>
                  <p>{item.user.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
