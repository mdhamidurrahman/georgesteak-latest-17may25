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
    "PRIV DINING",
    <img src="assets/image/navAnimatedImg.svg" alt="EVENTS" className="h-[153px] w-[206px]" />, 
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
      <div className={`bg-[#400000] main-tool-bar z-50 flex items-center justify-center ${isScrolled ? 'main-tool-bar--scrolled' : 'border-b-2 border-[#ffd400]'}`}>
        <div className="flex justify-center items-end gap-10">
          {linksToShow.map((link, index) => (
            <a key={index} href="#" className=
            {`opacity-[0.7] hover:opacity-[1] text-[#ffd400] ${typeof link !== 'string' ? 'pb-1' : 'pb-[30px]'}  tracking-[1px] text-[12px]`}>
              {typeof link === 'string' ? link : <>{link}</>} 
            </a>
          ))}
          <div className="z-50 w-44 min-h-10 tracking-[1px] bg-[#e1b728] border-0 rounded text-center text-[13px] text-[#580000] leading-10 fixed top-[17px] right-8 book-table">
            BOOK A TABLE
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Navbar;
