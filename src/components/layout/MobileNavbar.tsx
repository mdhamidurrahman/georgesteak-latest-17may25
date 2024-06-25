import  { useState } from "react";
import DropDownItems from "./DropDownItems";

const MobileNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      className={`bg-[#400000] px-2 main-tool-bar-mobile z-50 flex items-center justify-between border-b-2 border-[#ffd400]`}
    >
      <img
        className="h-[65px] w-[235px]"
        src="https://georgesteakhouse.com/images/logo_mobile.svg?crc=250689993"
        alt="image"
      />
      {isDropdownOpen ? (
        <svg
          className="h-7 w-7 text-white cursor-pointer"
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
      ) : (
        <img
          className="h-[28px] w-[94px] cursor-pointer"
          src="https://georgesteakhouse.com/images/burger_2x.png?crc=450879476"
          alt="image"
          onClick={toggleDropdown}
        />
      )}
      {isDropdownOpen && (
        <div className="absolute text-[#D3AF37] text-[14px] top-16 right-0 bg-white shadow-md z-50">
          <DropDownItems/>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
