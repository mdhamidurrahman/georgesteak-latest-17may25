import React, { useState } from "react";
import DropDownItems from "./DropDownItems";

const LargeScreenNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      className={`px-2  main-tool-bar-mobile  w-full z-50 flex items-center justify-between`}
    >
        <div className="flex gap-4 mt-5 justify-center items-center">
        <img
            className="h-[20px] w-[25px]"
            src="https://georgesteakhouse.com/images/facebook2.svg?crc=159406103"
            alt="ff"
          />
          <img
            className="h-[20px] w-[25px]"
            src="https://georgesteakhouse.com/images/instagram2.svg?crc=3925054431"
            alt="thd"
          />
        </div>
    
      {isDropdownOpen ? (
        <div className="flex justify-center items-center gap-2">
        <div className="text-red-600 text-[12px] font-[300]">NAVIGATON</div>
        <svg
          className="h-7 w-7  text-white cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
          onClick={toggleDropdown}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        </div>
      ) : (
        <div className="flex justify-center items-center">
        <div className="text-white text-[12px] font-[300]">NAVIGATON</div>
        <img
          className="h-[28px] w-[94px] cursor-pointer"
          src="https://georgesteakhouse.com/images/burger_2x.png?crc=450879476"
          alt="image"
          onClick={toggleDropdown}
        />
        </div>
      )}
      {isDropdownOpen && (
        <div className="fixed text-[#D3AF37] text-[14px] top-16 right-0 bg-white shadow-md z-50">
          <DropDownItems/>
        </div>
      )}
    </div>
  );
};

export default LargeScreenNavbar;
