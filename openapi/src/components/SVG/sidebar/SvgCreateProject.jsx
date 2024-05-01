import * as React from "react";
const SvgCreateProject = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <circle cx={10} cy={10} r={7.5} stroke="#fff" />
    <path stroke="#fff" strokeLinecap="square" d="M10 12.5v-5M12.5 10h-5" />
  </svg>
);
export default SvgCreateProject;