import { cva } from "class-variance-authority";
import { style as styled } from "../../utils/style-cva";

type ComponentProps<C extends React.ElementType> = {
  as?: C;
  variant?: "solid" | "outline" | "link";
  size?: "sm" | "md" | "lg";
  className?: string;
};

type Props<C extends React.ElementType> = React.PropsWithChildren<
  ComponentProps<C>
> &
  React.ComponentPropsWithoutRef<C>;

const Button = <C extends React.ElementType = "button">({
  variant,
  size,
  className,
  as,
  children,
  ...props
}: Props<C>) => {
  const Root = as || "button";
  return (
    <Root
      className={
        styled(
          { variant, size },
          cva(
            [
              "flex cursor-pointer items-center justify-center gap-2 rounded-lg text-base shadow-lg transition-all",
            ],
            {
              variants: {
                variant: {
                  solid: [
                    "bg-primary-600 text-neutral-50 outline-1 hover:bg-primary-700 focus:shadow-[0_0_0_4px] focus:shadow-primary-100 focus:outline-none",
                  ],
                  outline: [
                    "border border-primary-600 bg-neutral-50 text-primary-600 hover:bg-neutral-100 focus:shadow-[0_0_0_2px] focus:shadow-primary-100 focus:outline-none",
                  ],
                  link: ["hover:bg-primary-600/10"],
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
    </Root>
  );
};

export default Button;
