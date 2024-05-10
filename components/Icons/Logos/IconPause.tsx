import { FC, SVGProps } from "react";

const IconPause: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="39"
    height="39"
    viewBox="0 0 155 155"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="77.5" cy="77.5" r="77.5" fill="#E8F0FC" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M57 46C52.5817 46 49 49.5817 49 54V102C49 106.418 52.5817 110 57 110C61.4183 110 65 106.418 65 102V54C65 49.5817 61.4183 46 57 46ZM97 46C92.5817 46 89 49.5817 89 54V102C89 106.418 92.5817 110 97 110C101.418 110 105 106.418 105 102V54C105 49.5817 101.418 46 97 46Z"
      fill="#428DED"
    />
  </svg>
);

export default IconPause;
