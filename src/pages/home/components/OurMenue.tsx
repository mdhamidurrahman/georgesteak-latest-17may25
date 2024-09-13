import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import ScrollImage from "./ScrollImage";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function OurMenue() {
  const firstImageRef = useRef(null);
  const secondImageRef = useRef(null);
  const imageRef = useRef(null);
  const imageUrl = "assets/image/preservations.jpg";
  useEffect(() => {
    gsap.to(imageRef.current, {
      motionPath: {
        path: [
          { x: 0, y: 0 },
          { x: -300, y: 550 },
        ],
        curviness: 0.25,
        autoRotate: false,
      },
      duration: 20,
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    gsap.to(firstImageRef.current, {
      motionPath: {
        path: [
          { x: 0, y: 0 },
          { x: 100, y: -100 },
        ],
        curviness: 0.25,
        autoRotate: false,
      },
      scrollTrigger: {
        trigger: firstImageRef.current,
        start: "top center",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(secondImageRef.current, {
      x: -400,
      scrollTrigger: {
        trigger: secondImageRef.current,
        start: "top center",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div id="menus" className="bg-white menuMain">
      <div className="relative">
        {/* <div className="w-full flex justify-end">
          <img
            ref={imageRef}
            className="absolute flex z-[999] h-40 top-[-20px] w-52"
            src="assets/image/barlounge.jpg"
            alt=""
          />
        </div> */}
      </div>

      <div className="estd">
        <div className="animal">
          <h2>OUR MENUS</h2>
        </div>
      </div>

      <div className="galery">
        <div className="gallery">
          <div className="gallery-item">
            <img src="assets/image/menus01.jpg" />
            <div className="gallery-item-overlay">
              <h3>LUNCH PRIX-FIXED</h3>
            </div>
          </div>
          <div className="gallery-item">
            <img src="assets/image/menus05.jpg" />
            <div className="gallery-item-overlay">
              <h3>LUNCH & DINNER</h3>
            </div>
          </div>
          <div className="gallery-item">
            <img src="assets/image/menus04.jpg" />
            <div className="gallery-item-overlay">
              <h3>SUNDAY BRUNCH</h3>
            </div>
          </div>

          <div className="gallery-item">
            <img src="assets/image/menusbarmenu.jpg" />
            <div className="gallery-item-overlay">
              <h3>BAR MENU</h3>
            </div>
          </div>
          <div className="gallery-item">
            <img src="assets/image/menusdrinks01.jpg" />
            <div className="gallery-item-overlay">
              <h3>cocktails</h3>
            </div>
          </div>
          <div className="gallery-item">
            <img src="assets/image/menus03.jpg" />
            <div className="gallery-item-overlay">
              <h3>DESSERTS</h3>
            </div>
          </div>
        </div>
        <a className="relative z-0 pb-4" href="#">
          PARTY PACKAGES
        </a>
      </div>
      {/* <div className="w-full flex justify-between relative">
        <div>
          <img
            ref={firstImageRef}
            className="flex absolute bottom-5 z-50 h-40  w-52"
            src="assets/image/giftcard-u.png"
          />
        </div>

        <div>
          <img
            ref={secondImageRef}
            className="h-20 w-40"
            src="assets/image/menus03.jpg"
          />
        </div>
      </div> */}
      <ScrollImage imageUrl={imageUrl} />
    </div>
  );
}
