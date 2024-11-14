import { ReactNode } from "react";
import { motion } from "framer-motion";

export interface StepSection {
  children: ReactNode;
  numberSrc: string;
  numberAlt: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
}

export const StepSection = ({
  children,
  numberSrc,
  numberAlt,
  imgSrc,
  imgAlt,
  title,
}: StepSection) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      className="-text--black-color-color -bg--white-color p-5 relative rounded-lg mb-12"
    >
      <img
        src={numberSrc}
        alt={numberAlt}
        className="absolute -top-8 translate-x-1/2 right-1/2 max-w-16"
      />
      <p className="text-center font-bold my-5 text-lg">{title}</p>
      <p>{children}</p>
      <img src={imgSrc} alt={imgAlt} />
    </motion.div>
  );
};
