import { FC } from "react";

type Props = {
  step: string;
  hasPath?: boolean;
};

const Step: FC<Props> = ({ step, hasPath = true }) => {
  return (
    <div className="h-44 drop-shadow-xl">
      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-600 bg-neutral-50 text-lg font-semibold text-primary-600 ">
        {step}
      </div>

      {hasPath && (
        <div className="relative left-1/2 h-48 w-[2px] -translate-x-1/2 border-l-2 border-l-primary-600"></div>
      )}
    </div>
  );
};

export default Step;
