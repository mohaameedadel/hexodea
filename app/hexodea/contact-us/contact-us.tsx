import { useForm } from "react-hook-form";
import Button from "~/components/daisyUi/button";
import TextareaInput from "~/components/form/text-area";
import TextInput from "~/components/form/text-input";
import Heading from "~/components/heading";
import BlurText from "../../components/blur-text";
import { motion } from "framer-motion";
import StaggeredLetter from "../home/components/staggered-text";

export default function ContactUs() {
  const { control, handleSubmit } = useForm();
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
                <StaggeredLetter text="Ready to Start" className="text-white" />

                <StaggeredLetter text="Your Digital" className="text-white" />

                <StaggeredLetter
                  text="Transformation?"
                  className="text-white"
                />
              </div>
            </motion.div>
            <BlurText
              text="Whether you have a fully drafted project proposal or just a rough concept drawn on a napkin, let's get to work."
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
              description="At Hexodea Consultancy, we take pride in our values – service, integrity, and excellence. "
              dark
            />

            <motion.form
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
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
              <Button type="submit" className="mt-6 link-shine">
                Submit
              </Button>
            </motion.form>
          </div>
          <div className="w-full h-[600px] lg:h-full">
            <iframe
              className="w-full h-full"
              loading="lazy"
              src="https://lottie.host/embed/6ecaebbc-dac6-448b-a0e9-626a7f049bf5/04OyLtTBqa.lottie"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
