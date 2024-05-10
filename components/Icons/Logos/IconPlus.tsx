import { FC, SVGProps } from "react";

const IconPlus: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="15"
    height="16"
    viewBox="0 0 15 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.5 1.5V14.5M1 8H14"
      stroke="#9095A1"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default IconPlus;
