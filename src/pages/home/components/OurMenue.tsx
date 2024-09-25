import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import ScrollImage from "./ScrollImage";
import PartyMenuModel from "../../../Share/PartyMenuModel";
import BarMenu from "../../../Share/ourMenueModel/BarMenu";
import SundayBrunch from "../../../Share/ourMenueModel/SundayBrunch";
import LunchDinner from "../../../Share/ourMenueModel/LUNCH_DINNER/LunchDinner";

const galleryItems = [
  {
    id: 1,
    image: "assets/image/menus01.jpg",
    title: "LUNCH PRIX-FIXED",
  },
  {
    id: 2,
    image: "assets/image/menus05.jpg",
    title: "LUNCH & DINNER",
  },
  {
    id: 3,
    image: "assets/image/menus04.jpg",
    title: "SUNDAY BRUNCH",
  },
  {
    id: 4,
    image: "assets/image/menusbarmenu.jpg",
    title: "BAR MENU",
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
  const [lunchModel, setLunchModel] = useState(false);
  const [openModel, setOpenModel] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRedirect = (item: any) => {
    if (item.id == 2) {
      setLunchModel(true);
    }
    if (item.id == 3) {
      setOpenModel(true);
    }
    if (item.id == 4) {
      setIsModalOpen(true);
    }
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
      {/* <div className="relative">
        <div className="w-full flex justify-end">
          <img
            ref={imageRef}
            className="absolute flex z-[999] h-40 top-[-20px] w-52"
            src="assets/image/barlounge.jpg"
            alt=""
          />
        </div>
      </div> */}

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
                onClick={() => handleRedirect(item)}
              >
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* ================= LUNCH & DINNER ================= */}
        {lunchModel && (
          <div>
            <LunchDinner onClose={() => setLunchModel(false)} />
          </div>
        )}
        {/* ================= SUNDAY BRUNCH Model ================= */}
        {openModel && (
          <div className="relative">
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div
                className="relative w-4/5 h-screen shadow-lg bg-white"
                style={{
                  overflowY: "scroll",
                  scrollbarWidth: "thin",
                  scrollbarColor: "rgba(0,0,0,0) rgba(0,0,0,0)",
                }}
              >
                <SundayBrunch />
                <button
                  className="absolute top-2 text-[#400] right-1 bg-[#FFB728] p-2 text-sm"
                  onClick={() => setOpenModel(false)}
                >
                  X
                </button>
              </div>
            </div>
          </div>
        )}
        {/* ================= Bar Model ================= */}
        {isModalOpen && (
          <div className="relative">
            <BarMenu onClose={() => setIsModalOpen(false)} />
          </div>
        )}
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
