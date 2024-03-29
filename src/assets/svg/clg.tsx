import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={80}
    height={50}
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      fill="#FC6736"
      d="M31.514 11.177 16 3.71.486 11.177l2.186 1.318v11.529h1.066V13.138l3.199 1.929V28.29h18.126V15.071l6.451-3.894zM16 4.893l13.275 6.39-13.267 8.008-13.282-8.009L16 4.892zm7.997 22.331H8.003V15.71l8.005 4.827 7.989-4.823v11.51z"
    />
  </svg>
);
export default SvgComponent;
