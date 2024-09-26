import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const XLScreenNavbar = () => {
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
    { name: "HOME", href: "#" },
    { name: "ABOUT", href: "#about" },
    { name: "MENUS", href: "#menus" },
    { name: "PRIVATE DINING", href: "#private-dining" },
    { name: <img src="assets/image/navAnimatedImg.svg" alt="EVENTS" className="h-[153px] w-[206px]" />, href: "#events-specials" },
    { name: "GALLERY", href: "#gallery" },
    // { name: "GIFT CARDS", href: "#gift-cards" },
    // { name: "CONTACT", href: "#contact" },
  ];

  const linksScrolled = [
    { name: "HOME", href: "#" },
    { name: "ABOUT", href: "#about" },
    { name: "MENUS", href: "#menus" },
    { name: "PRIVATE DINING", href: "#private-dining" },
    { name: "EVENTS & SPECIALS", href: "#events-specials" },
    { name: "GALLERY", href: "#gallery" },
    // { name: "GIFT CARDS", href: "#gift-cards" },
    // { name: "CONTACT", href: "#contact" },
  ];

  const linksToShow = isScrolled ? linksScrolled : linksExpanded;

  return (
    <>
      <div
        className={`bg-[#400000] main-tool-bar z-50 flex items-center justify-center ${
          isScrolled ? "main-tool-bar--scrolled" : "border-b-2 border-[#ffd400]"
        }`}
      >
        <div className="flex justify-center items-end gap-10">
          {linksToShow.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`opacity-[0.7] hover:opacity-[1] text-[#ffd400] ${
                typeof link.name !== "string" ? "pb-1" : "pb-[30px]"
              } tracking-[1px] text-[12px]`}
            >
              {typeof link.name === "string" ? link.name : <>{link.name}</>}
            </a>
          ))}
          <Link
            className="z-50 w-44 min-h-10 tracking-[1px] bg-[#e1b728] border-0 rounded text-center text-[13px] text-[#580000] leading-10 fixed top-[17px] right-8 book-table"
            to={
              "https://www.opentable.com/restref/client/?rid=1250434&restref=1250434&lang=en-US&color=1&r3uid=cfe&dark=false&partysize=2&datetime=2024-08-26T22%3A30&ot_source=Restaurant%20website&corrid=9174bdb8-c665-4d56-aeec-e5f0e93b9402"
            }
          >
            BOOK A TABLE
          </Link>
        </div>
      </div>
    </>
  );
};

export default XLScreenNavbar;
