export default function ContactUs() {
  return (
    <div
      style={{ backgroundImage: `url('/assets/gradient.svg')` }}
      className="w-full bg-cover bg-center text-dark"
    >
      <div className="h-[90vh] flex justify-center items-center px-4 lg:p-section">
        <section className="relative overflow-hidden w-full flex justify-center items-center rounded-3xl bg-[linear-gradient(95.75deg,#0050AD_0%,#6894DB_100%)] py-24">
          <div className="text-center px-4">
            <h1 className="text-5xl font-semibold mb-10 text-white lg:w-2/3 mx-auto">
              GET IN TOUCH
            </h1>
            <p className="text-white text-base font-normal lg:w-2/3 mx-auto">
              We're a creative agency driven by passion, powered by innovation,
              and dedicated to transforming brands into unforgettable
              experiences.
            </p>
          </div>

          <img
            className="absolute top-0 right-0 animate-pulse"
            src="/assets/service/hero-shape.svg"
            alt="circle"
          />
        </section>
      </div>

      <div className="h-screen flex items-center justify-center">
        <iframe
          className="w-full h-full"
          src="https://lottie.host/embed/6ecaebbc-dac6-448b-a0e9-626a7f049bf5/04OyLtTBqa.lottie"
        ></iframe>
      </div>
    </div>
  );
}
