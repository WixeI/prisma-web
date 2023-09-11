import { FC } from "react";

type Props = {
  itemList: string[];
  direction?: "left" | "right";
};

const Marquee: FC<Props> = ({ itemList, direction = "left" }) => {
  return (
    <>
      <div className="flex select-none gap-4 overflow-x-hidden">
        <ul
          className={`flex min-w-[50%] shrink-0 items-center justify-around gap-4 text-lg text-neutral-500 ${
            direction === "left"
              ? "animate-scrollPanel"
              : "animate-scrollPanelInverse"
          }`}
        >
          {itemList.map((item) => (
            <li key={item} className="whitespace-nowrap">
              <p>{item}</p>
            </li>
          ))}
        </ul>

        {/* Mirror Marquee */}
        <ul
          aria-hidden
          className={`flex min-w-[50%] shrink-0 items-center justify-around gap-4 text-lg text-neutral-500 ${
            direction === "left"
              ? "animate-scrollPanel"
              : "animate-scrollPanelInverse"
          }`}
        >
          {itemList.map((item) => (
            <li key={item} className="whitespace-nowrap">
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Marquee;
