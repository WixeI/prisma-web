import { FC } from "react";
import { motion } from "framer-motion";

type Props = {
  step: string;
  hasPath?: boolean;
  animDelay?: number;
};

const Step: FC<Props> = ({ step, hasPath = true, animDelay = 0 }) => {
  return (
    <div
      className="h-44 drop-shadow-xl" //Motion
    >
      <motion.div
        className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-600 bg-neutral-50 text-lg font-semibold text-primary-600"
        {...{
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          transition: {
            type: "tween",
            duration: 0.5,
            ease: "easeInOut",
          },
          viewport: { once: true },
        }}
      >
        {step}
      </motion.div>

      {hasPath && (
        <motion.div
          className="relative left-1/2 h-48 w-[2px] -translate-x-1/2 border-l-2 border-l-primary-600"
          {...{
            initial: { scaleY: 0, originY: 0 },
            whileInView: { scaleY: 1, originY: 0 },
            transition: {
              type: "tween",
              duration: 1,
              ease: "easeInOut",
              delay: animDelay,
            },
            viewport: { once: true },
          }}
        ></motion.div>
      )}
    </div>
  );
};

export default Step;
