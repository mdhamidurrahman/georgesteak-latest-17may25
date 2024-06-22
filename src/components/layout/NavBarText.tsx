import{ useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NavBar = () => {
  useEffect(() => {
    // Init ScrollTrigger
    ScrollTrigger.create({
      start: "top -80", // When to start the trigger (80px from top)
      end: 99999, // When to end the trigger (infinite scroll)
      toggleClass: {
        className: "main-tool-bar--scrolled", // Class to toggle
        targets: ".main-tool-bar", // Target element(s)
      },
    });
  }, []);

  return (
    <>
      <div className="main-tool-bar">Header</div>
      <div className="scrollable-area">
        <div className="text-black text-[400px]">dbsdffd</div>
      </div>
      <div className="h-[1400px]"></div>
    </>
  );
};

export default NavBar;
