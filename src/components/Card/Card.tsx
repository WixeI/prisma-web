import { FC } from "react";

type Props = {
  step?: string;
  title: string;
  description: string;
};

const Card: FC<Props> = ({ step, title, description }) => {
  return (
    <div className="flex max-w-xs flex-col gap-2 rounded-lg bg-neutral-50 p-4 shadow-md drop-shadow-[-6px_8px_0px_#DE2D59]">
      <h2 className="text-lg font-medium">
        <span aria-hidden className="text-primary-600">
          {step}.{" "}
        </span>
        {title}
      </h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
