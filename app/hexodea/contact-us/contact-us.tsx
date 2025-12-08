import { useForm } from "react-hook-form";
import Button from "~/components/daisyUi/button";
import TextareaInput from "~/components/form/text-area";
import TextInput from "~/components/form/text-input";
import Heading from "~/components/heading";
import MirrorText from "./components/mirror-text";
import BlurText from "../../components/blur-text";
import { motion } from "framer-motion";

export default function ContactUs() {
  const { control, handleSubmit } = useForm();
  return (
    <div
      style={{ backgroundImage: `url('/assets/gradient.svg')` }}
      className="w-full bg-cover bg-center text-dark overflow-hidden"
    >
      <div className="h-screen flex justify-center items-center px-4 lg:p-section">
        <section className="relative overflow-hidden w-full flex justify-center items-center rounded-3xl bg-[linear-gradient(95.75deg,#0050AD_0%,#6894DB_100%)] py-44">
          <div className="text-center px-4">
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <MirrorText
                className="text-5xl lg:text-7xl font-semibold mb-10 text-white lg:w-2/3 mx-auto"
                text="GET IN TOUCH"
              />
            </motion.div>
            <BlurText
              text="We're a creative agency driven by passion, powered by innovation, and dedicated to transforming brands into unforgettable experiences."
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

      <section className="pb-16 px-4 lg:px-section">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <Heading
              title="Let's Talk"
              description="At Besnik Consultancy, we take pride in our values – service, integrity, and excellence. "
              dark
            />

            <form
              className="space-y-6 mt-6"
              onSubmit={handleSubmit((data) => console.log(data))}
            >
              <TextInput
                placeholder="*Full Name"
                control={control}
                name="name"
                required
              />
              <TextInput
                placeholder="*Email"
                control={control}
                name="email"
                type="email"
                required
              />
              <TextInput
                placeholder="*Mobile Number"
                control={control}
                name="mobile"
                type="tel"
                required
              />
              <TextareaInput
                placeholder="Message"
                control={control}
                name="message"
                required
                rows={4}
              />
              <Button type="submit" className="mt-6">
                Submit
              </Button>
            </form>
          </div>
          <div className="w-full h-[600px] lg:h-full">
            <iframe
              className="w-full h-full"
              src="https://lottie.host/embed/6ecaebbc-dac6-448b-a0e9-626a7f049bf5/04OyLtTBqa.lottie"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
