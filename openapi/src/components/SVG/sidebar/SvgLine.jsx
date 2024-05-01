import * as React from "react";
const SvgLine = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={46}
    height={1}
    fill="none"
    {...props}
  >
    <path stroke="#fff" strokeOpacity={0.9} strokeWidth={0.5} d="M0 .75h46" />
  </svg>
);
export default SvgLine;