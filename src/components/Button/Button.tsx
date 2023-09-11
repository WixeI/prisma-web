import { FC, ReactNode, ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";
import { style as styled } from "../../utils/style-cva";

type Props = {
  children: ReactNode;
  variant?: "solid" | "outline" | "link";
  size?: "sm" | "md" | "lg";
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<Props> = ({
  children,
  variant,
  size,
  className,
  ...props
}) => {
  return (
    <button
      className={
        styled(
          { variant, size },
          cva(
            [
              "flex items-center justify-center gap-2 rounded-lg text-base shadow-lg transition-all",
            ],
            {
              variants: {
                variant: {
                  solid: [
                    "bg-primary-500 text-neutral-50 hover:bg-primary-600",
                  ],
                  outline: [
                    "border border-primary-500 bg-neutral-50 text-primary-500 hover:bg-neutral-100",
                  ],
                  link: ["hover:bg-primary-500/10"],
                },
                size: {
                  sm: ["px-4 py-2"],
                  md: ["px-6 py-4"],
                  lg: ["px-8 py-6"],
                },
              },

              defaultVariants: {
                variant: "solid",
                size: "md",
              },
            },
          ),
        ) +
        " " +
        className
      }
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

// className="z-10 flex items-center justify-center gap-2 rounded-lg bg-primary-500 px-4 py-4 text-base text-neutral-50 shadow-[0px_4px_8px_rgba(0,0,0,0.5)] md:text-lg"
