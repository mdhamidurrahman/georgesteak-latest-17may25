import React from "react";

const Navbar = () => {
  const links = [
    "HOME",
    "ABOUT",
    "SERVICES",
    "PORTFOLIO",
    "TEAM",
    "BLOG",
    "CONTACT",
    "FAQ",
  ];
  return (
    <div className="bg-[#400000] h-[75px] flex items-center justify-center  ">
    <div className="flex justify-center items-center space-x-4">
      {links.map((link, index) => (
        <a key={index} href="#" className="text-[#ffd400] text-[12px]">
          {link}
        </a>
      ))}
      <div></div>
    </div>
    </div>
  );
};

export default Navbar;
