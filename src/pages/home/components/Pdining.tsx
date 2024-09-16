import { useState } from "react";
import PartyMenuModel from "../../../Share/PartyMenuModel";

const galleryItems = [
  {
    title: "MAIN DINING ROOM",
    imageSrc: "assets/image/main.jpg",
    capacity: "Seated Capacity 100-120 Guests",
    link: "https://www.opentable.com/r/george-seafood-and-steakhouse-greenwich",
  },
  {
    title: "TUSCANY ROOM",
    imageSrc: "assets/image/tuscany.jpg",
    capacity: "Seated Capacity 35-45 Guests",
    link: "https://www.opentable.com/r/george-seafood-and-steakhouse-greenwich",
  },
  {
    title: "THE BAR & LOUNGE",
    imageSrc: "assets/image/barlounge.jpg",
    capacity: "Seated Capacity 30-40 Guests",
    link: "https://www.opentable.com/r/george-seafood-and-steakhouse-greenwich",
  },
  {
    title: "GEORGE ROOM",
    imageSrc: "assets/image/bianca.jpg",
    capacity: "Seated Capacity 100-150 Guests",
    link: "https://www.opentable.com/r/george-seafood-and-steakhouse-greenwich",
  },
];

export default function Pdining() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleRedirect = (url: any) => {
    window.location.href = url;
  };

  return (
    <section className="bg-white priDining">
      <div id="private-dining" className="estd">
        <div className="animal">
          <h2>PRIVATE DINING</h2>
        </div>
      </div>
      <div className="pdingin">
        <p>
          George Italian Seafood & Steakhouse is the perfect place to HOST YOUR
          SPECIAL EVENT up to 200 guests, either if is a RECEPTIONS, WEDDINGS,
          or a CORPORATE EVENTS, we'll customized your needs to make an
          unforgettable experience.
        </p>
        <button className="bg-[#400] text-[#fff] px-6 py-3" onClick={openModal}>
          PARTY MENUS
        </button>
        {isModalOpen && (
          <div className="relative z-50">
            <PartyMenuModel onClose={closeModal} isOpen={isModalOpen} />
          </div>
        )}
      </div>
      <div className="galery pDining">
        <div className="gallery eventSpecial">
          {galleryItems.map((item, index) => (
            <div className="gallery-item" key={index}>
              <div className={index % 2 === 0 ? "prix" : "hour"}>
                <h2>{item.title}</h2>
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="cursor-pointer"
                  onClick={() => handleRedirect(item.link)}
                />
                <p>
                  {item.capacity} | <a href={item.link}>BOOK</a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="galery pDining">
        <div className="gallery eventSpecial">
          <div className="gallery-item">
            <div className="prix">
              <h2>MAIN DINING ROOM</h2>
              <img src="assets\image\main.jpg" alt="" />
              <p>
                Seated Capacity 100-120 Guests | <a href="#">BOOK</a>
              </p>
            </div>
          </div>
          <div className="gallery-item">
            <div className="hour">
              <h2>TUSCANY ROOM </h2>
              <img src="assets\image\tuscany.jpg" alt="" />
              <p>
                Seated Capacity 35-45 Guests | <a href="#">BOOK</a>
              </p>
            </div>
          </div>
          <div className="gallery-item">
            <div className="prix">
              <h2>THE BAR & LOUNGE</h2>
              <img src="assets\image\barlounge.jpg" alt="" />
              <p>
                Seated Capacity 30-40 Guests | <a href="#">BOOK</a>
              </p>
            </div>
          </div>
          <div className="gallery-item">
            <div className="hour">
              <h2>GEORGE ROOM </h2>
              <img src="assets\image\bianca.jpg" alt="" />
              <p>
                Seated Capacity 100-150 Guests | <a href="#">BOOK</a>
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}
