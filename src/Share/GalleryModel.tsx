import React from "react";

interface ModalProps {
  isOpen: boolean;
  imageSrc: string;
  onClose: () => void;
}

const GalleryModel: React.FC<ModalProps> = ({ isOpen, imageSrc, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-10"
      onClick={onClose}
    >
      <div className="relative w-[90%] max-w-[800px] h-auto" onClick={(e) => e.stopPropagation()}>
        <img src={imageSrc} alt="Large view" className="w-full h-auto" />
        <button
          className="absolute top-2 right-2 bg-white p-2 rounded shadow-md"
          onClick={onClose}
        >
        X
        </button>
      </div>
    </div>
  );
};

export default GalleryModel;
