import { FC } from "react";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

type Props = {
  step?: string;
  title: string;
  description: string;
  animDirection?: "left" | "right";
  animDelay?: number;
};

const Card: FC<Props> = ({
  step,
  title,
  description,
  animDirection = "left",
  animDelay = 0,
}) => {
  const isMobileView = useMediaQuery({ maxWidth: 768 });

  return (
    <motion.div
      className="flex max-w-xs flex-col gap-2 rounded-lg bg-neutral-50 p-4 shadow-md drop-shadow-[-6px_8px_0px_#DE2D59]"
      {...(isMobileView
        ? {
            initial: { opacity: 0, x: -25 },
            whileInView: { opacity: 1, x: 0 },
            transition: {
              type: "tween",
              duration: 0.5,
              ease: "easeInOut",
              delay: animDelay,
            },
            viewport: { once: true },
          }
        : {
            initial: { opacity: 0, x: animDirection === "left" ? -50 : 50 },
            whileInView: { opacity: 1, x: 0 },
            transition: {
              type: "tween",
              duration: 0.5,
              ease: "easeInOut",
              delay: animDelay,
            },
            viewport: { once: true },
          })}
    >
      <h2 className="text-lg font-medium">
        <span aria-hidden className="text-primary-600">
          {step}.{" "}
        </span>
        {title}
      </h2>
      <p>{description}</p>
    </motion.div>
  );
};

export default Card;
