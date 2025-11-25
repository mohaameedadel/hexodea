import Particles from "./components/particles";
import { Link } from "react-router";

export default function Home() {
  return (
    <div
      style={{ backgroundImage: `url('/assets/gradient.svg')` }}
      className="w-full bg-cover bg-center"
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
            <h1 className="text-5xl font-semibold text-shadow-dark mb-10">
              HEXODEA <span className="text-main">SOFTWARE</span> SOLUTIONS
            </h1>
            <p className="text-muted text-base font-normal lg:w-2/3 mx-auto">
              At Dotnaat, we craft powerful software solutions that help
              businesses grow, innovate, and succeed in the digital era.At
              Dotnaat, we craft powerful software solutions that help businesses
              grow, innovate, and succeed in the digital era.
            </p>
            <div className="flex justify-center items-center gap-10 mt-16">
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
      <section className="h-[1000px] bg-[linear-gradient(95.75deg,#6894DB_0%,#0050AD_100%)]"></section>
    </div>
  );
}
