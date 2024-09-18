import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import ScrollImage from "./ScrollImage";
import PartyMenuModel from "../../../Share/PartyMenuModel";

const galleryItems = [
  {
    image: "assets/image/menus01.jpg",
    title: "LUNCH PRIX-FIXED",
    url: "https://www.opentable.com/r/george-seafood-and-steakhouse-greenwich",
  },
  {
    image: "assets/image/menus05.jpg",
    title: "LUNCH & DINNER",
    url: "https://www.opentable.com/r/george-seafood-and-steakhouse-greenwich",
  },
  {
    image: "assets/image/menus04.jpg",
    title: "SUNDAY BRUNCH",
    url: "https://www.opentable.com/r/george-seafood-and-steakhouse-greenwich",
  },
  {
    image: "assets/image/menusbarmenu.jpg",
    title: "BAR MENU",
    url: "https://www.opentable.com/r/george-seafood-and-steakhouse-greenwich",
  },
  {
    image: "assets/image/menusdrinks01.jpg",
    title: "COCKTAILS",
    url: "https://www.opentable.com/r/george-seafood-and-steakhouse-greenwich",
  },
  {
    image: "assets/image/menus03.jpg",
    title: "DESSERTS",
    url: "https://www.opentable.com/r/george-seafood-and-steakhouse-greenwich",
  },
];

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function OurMenue() {
  const firstImageRef = useRef(null);
  const secondImageRef = useRef(null);
  const imageRef = useRef(null);
  const [isOpenModel, setIsOpenModel] = useState(false);
  const handleClick = () => {
    setIsOpenModel(!isOpenModel);
  };

  const handleRedirect = (url: any) => {
    window.location.href = url;
  };

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
          {galleryItems.map((item, index) => (
            <div className="gallery-item" key={index}>
              <img src={item.image} alt={item.title} />
              <div
                className="gallery-item-overlay cursor-pointer"
                onClick={() => handleRedirect(item.url)}
              >
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <a className="relative z-0 mb-10 cursor-pointer" onClick={handleClick}>
          PARTY PACKAGES
        </a>
        {isOpenModel && (
          <PartyMenuModel
            onClose={() => setIsOpenModel(false)}
            isOpen={isOpenModel}
          />
        )}
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
