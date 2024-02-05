import * as React from "react";
import { SVGProps } from "react";
const SchoolIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={80}
    height={50}
    fill="none"
    stroke="#FC6736"
    strokeWidth={2}
    viewBox="0 0 64 64"
    {...props}
  >
    <path
      strokeLinecap="round"
      d="M46.73 53.68H16.58V22.74l15.07-12 15.08 12v30.94z"
    />
    <path strokeLinecap="round" d="M25.76 53.68V42.03h11.79v11.65" />
    <circle cx={31.65} cy={26.65} r={4.23} strokeLinecap="round" />
    <path
      strokeLinecap="round"
      d="M16.58 53.68H9.49v-22.2h7.09M46.73 31.48h7.78v22.2h-7.78"
    />
  </svg>
);
export default SchoolIcon;
