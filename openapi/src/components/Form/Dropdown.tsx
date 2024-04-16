import React, { useState } from "react";
import SvgAngleDown from "../SVG/SvgAngleDown";
import SvgAngleUp from "../SVG/SvgAngleUp";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('กรุณาเลือกหัวข้อ');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };
  const handleOptionClick = (option:string) => {
    setSelectedOption(option);
    closeDropdown();
  };

  return (
    <div className="max-h-7 rounded-md border-[2px] border-gray-100">
      <div className="relative inline-block">
        <button
          type="button"
          className="text-gray-200 bg-blue-700 hover:bg-blue-800 min-w-28 justify-center focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm inline-flex items-center"
          onClick={toggleDropdown}
        >
            {selectedOption}
         {isOpen == false ? <SvgAngleDown/>:<SvgAngleUp/>}
        </button>

        {isOpen && (
          <div className="origin-top-right absolute  mt-2  rounded-lg border-[1px] border-gray-100 shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
              className="w-28"
            >
              <div>
                <span

                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => handleOptionClick("Option 1")}
                >
                  Option 1
                </span>
              </div>
              <div>
                <span

                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  
                  onClick={() => handleOptionClick("Option 2")}
                >
                  Option 2
                </span>
              </div>
              <div>
                <span

                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => handleOptionClick("Option 3")}
                >
                  Option 3
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
