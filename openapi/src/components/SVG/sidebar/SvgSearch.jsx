import * as React from "react";
const SvgSearch = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={23}
    fill="none"
    {...props}
  >
    <circle
      cx={10.542}
      cy={10.541}
      r={5.75}
      stroke="#fff"
      strokeOpacity={0.8}
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeOpacity={0.8}
      d="m19.167 19.167-2.875-2.876"
    />
  </svg>
);
export default SvgSearch;