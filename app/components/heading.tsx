import { cn } from "~/utils/cn";
import { motion } from "framer-motion";

export default function Heading({
  title,
  description,
  dark,
  fullWidth,
}: {
  title?: string;
  description?: string;
  dark: boolean;
  fullWidth?: boolean;
}) {
  return (
    <div>
      {title && (
        <motion.h2
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={cn(
            "text-white font-semibold text-5xl mb-4 ",
            dark && "text-dark"
          )}
        >
          {title}
        </motion.h2>
      )}
      {description && (
        <motion.p
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={cn(
            fullWidth ? "w-full" : "lg:w-2/3",
            "text-white font-normal text-base",
            dark && "text-muted"
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
