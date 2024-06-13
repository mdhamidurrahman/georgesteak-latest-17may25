import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const toggleScrolled = () => {
      setIsScrolled(window.scrollY > 80); 
    };
    window.addEventListener("scroll", toggleScrolled);
    
    return () => {
      window.removeEventListener("scroll", toggleScrolled);
    };
  }, []);
  const linksExpanded = [
    "HOME",
    "ABOUT",
    "MENUS",
    "PRIVATE DINING",
    "EVENTS & SPECIALS",
    "GALLERY",
    "GIFT CARDS",
    "CONTACT",
    
  ];

  const linksScrolled = [
    "HOME",
    "ABOUT",
    "MENUS",
    "PRIVATE DINING",
    "EVENTS & SPECIALS",
    "GALLERY",
    "GIFT CARDS",
    "CONTACT",
  ];

  const linksToShow = isScrolled ? linksScrolled : linksExpanded;

  return (
    <>
      <div className={`bg-[#400000]  main-tool-bar   flex items-center justify-center ${isScrolled ? 'main-tool-bar--scrolled ' : ''}`}>
        <div className="flex justify-center gap-10  ">
          {linksToShow.map((link, index) => (
            <a key={index} href="#" className="text-[#ffd400] tracking-[1px] text-[12px]">
              {link}
            </a>
          ))}
          <div className="z-50 w-44 min-h-10 tracking-[1px] bg-[#e1b728] border-0 rounded text-center text-[13px] text-[#580000] leading-10 fixed top-[17px] right-8 book-table">
            BOOK A TABLE
          </div>
        </div>
      </div>
      {/* <div className="border flex z-50 relative border-[#ffd400] border-b-10"></div> */}
      <div className="h-[1300px]"></div>
      
    </>
  );
};

export default Navbar;
