import { useState } from "react";
import GalleryModel from "../../../Share/GalleryModel";
import ScrollImage from "./ScrollImage";

const galleryItems = [
  {
    src: "assets/image/f01.jpg",
    alt: "Image 1",
    title: "Jumbo Shrimp Cocktail",
  },
  { src: "/assets/image/f02.jpg", alt: "Image 2", title: "Maryland Crab Cake" },
  {
    src: "assets/image/f03.jpg",
    alt: "Image 3",
    title: "Baked Clams Oreganata",
  },
  { src: "assets/image/f04.jpg", alt: "Image 4", title: "Ahi Tuna Tartare" },
  { src: "/assets/image/f05.jpg", alt: "Image 5", title: "Cavatelli" },
  {
    src: "/assets/image/f06.jpg",
    alt: "Image 6",
    title: "Grilled Wild Salmon",
  },
  { src: "assets/image/f07.jpg", alt: "Image 7", title: "Grilled Lamb Chops" },
  {
    src: "assets/image/f08.jpg",
    alt: "Image 8",
    title: "Linguine Zuppa di Pesce",
  },
  {
    src: "assets/image/f09.jpg",
    alt: "Image 9",
    title: "Dry Aged Porterhouse",
  },
];

export default function OurCuisine() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = (src: string) => {
    setSelectedImage(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const imageUrl = "assets/image/pevents.jpg";
  return (
    <section className="reservation">
      <div id="gallery" className="estd">
        <div className="animal">
          <h2>OUR CUISINE</h2>
        </div>
      </div>

      <div className="galery">
        <div className="gallery cuisineGalery">
          {galleryItems.map((item, index) => (
            <div
              className="gallery-item"
              key={index}
              onClick={() => openModal(item.src)}
            >
              <img src={item.src} alt={item.alt} />
              <div className="gallery-item-overlay">
                <i className="fa fa-plus-square-o" aria-hidden="true"></i>
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="relative">
          <GalleryModel
            isOpen={isModalOpen}
            imageSrc={selectedImage || ""}
            onClose={closeModal}
          />
        </div>
      </div>

      <ScrollImage imageUrl={imageUrl} />
    </section>
  );
}
