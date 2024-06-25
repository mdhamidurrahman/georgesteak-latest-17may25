import  { useState } from "react";
import DropDownItems from "./DropDownItems";

const MediumScreenNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      className={`px-2 bg-black bg-opacity-40  w-full z-50 flex items-center justify-between`}
    >
      <img
        className="h-[69] w-[84px]"
        src="https://georgesteakhouse.com/images/adacompliancelogo_2x.png?crc=489453242"
        alt="image"
      />
      {isDropdownOpen ? (
        <div className="flex right-3 top-3 fixed justify-center items-center gap-2">
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
        <div className="flex right-3 top-3 fixed justify-center items-center">
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

export default MediumScreenNavbar;
