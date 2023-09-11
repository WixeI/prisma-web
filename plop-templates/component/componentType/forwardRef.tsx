import { forwardRef, HTMLAttributes } from "react";

type Props = {} & HTMLAttributes<HTMLDivElement>;

const MyComponent = forwardRef<HTMLDivElement, Props>(({ ...props }, ref) => {
  return <div ref={ref} {...props}></div>;
});

export default MyComponent;
