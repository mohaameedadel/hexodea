import { useNavigate } from "react-router";

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
      className="w-full bg-cover bg-center text-dark"
    >
      <div className="h-screen flex justify-center items-center px-4 lg:p-section">
        <section className="relative overflow-hidden w-full flex justify-center items-center rounded-3xl bg-[linear-gradient(95.75deg,#0050AD_0%,#6894DB_100%)] py-44">
          <div className="text-center px-4">
            <h1 className="text-5xl font-semibold mb-10 text-white lg:w-2/3 mx-auto">
              WE ARE BRING YOUR BRAND VISION TO LIFE
            </h1>
            <p className="text-white text-base font-normal lg:w-2/3 mx-auto">
              "We provide tailored solutions that help businesses grow, improve
              efficiency, and stay ahead of the competition."
            </p>
          </div>

          <img
            className="absolute top-0 right-0 animate-pulse"
            src="/assets/service/hero-shape.svg"
            alt="circle"
          />
        </section>
      </div>

      <section className="py-16 px-4 lg:px-section">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {potfolio.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-3xl border border-black/10"
            >
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
    </div>
  );
}
