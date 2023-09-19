import { FC } from "react";
import S from "./animation.module.css";

type Props = {};

const SendButton: FC<Props> = ({}) => {
  return (
    <button>
      <svg
        width="240"
        height="53"
        viewBox="0 0 240 53"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="send-button">
          <g className={S["animation-letter"]} id="letter">
            <path
              id="Rectangle 25"
              d="M111.9 18.5H128.1C128.321 18.5 128.5 18.6791 128.5 18.9V29.7C128.5 29.9209 128.321 30.1 128.1 30.1H111.9C111.679 30.1 111.5 29.9209 111.5 29.7V18.9C111.5 18.6791 111.679 18.5 111.9 18.5Z"
              fill="#FAFAFA"
              stroke="#DE2D59"
            />
            <path
              id="Polygon 50"
              d="M120.113 26.452L128.202 20.1698C128.421 19.9999 128.555 19.5834 128.479 19.1171C128.443 18.8987 128.368 18.7255 128.283 18.619C128.204 18.5195 128.14 18.5 128.089 18.5H111.911C111.86 18.5 111.796 18.5195 111.717 18.619C111.632 18.7255 111.557 18.8987 111.521 19.1171C111.445 19.5834 111.579 19.9999 111.798 20.1698L119.887 26.452C119.941 26.4937 119.979 26.5 120 26.5C120.021 26.5 120.059 26.4937 120.113 26.452Z"
              fill="#FAFAFA"
              stroke="#DE2D59"
            />
          </g>
          <g id="wind">
            <path
              id="Line 8"
              d="M83.0632 39.0945C99.5993 43.5966 117 42.5 132.221 33.4825"
              stroke="#DE2D59"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              id="Line 9"
              d="M94.0237 49.9138C110.524 52.9138 126.024 49.9138 141.024 40.4137"
              stroke="#DE2D59"
              stroke-width="2"
              stroke-linecap="round"
            />
          </g>
          {/* <path
            id="container"
            d="M8 0.5H232C236.142 0.5 239.5 3.85786 239.5 8V40C239.5 44.1421 236.142 47.5 232 47.5H8.00001C3.85787 47.5 0.5 44.1421 0.5 40V8C0.5 3.85787 3.85786 0.5 8 0.5Z"
            fill="#DE2D59"
            stroke="#DE2D59"
          /> */}
        </g>
      </svg>
    </button>
  );
};

export default SendButton;
