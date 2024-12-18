import { useEffect, useState } from "react";
import "../App.css";
import { MenuType } from "../types";
import newestItemsJson from "../utils/newestItems.json";

import placeholderImg from "../assets/placeholder.jpg";

const newestItems: MenuType = newestItemsJson;

const NewestItems = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = newestItems.newest_items;

  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [items.length]);

  return (
    <div className="newest_items_container">
      <h1 className="newest_item_title">Newest Items</h1>
      <div className="slideshow">
        {items.map((item, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
          >
            <img
              src={item.image_url || placeholderImg}
              alt={item.name}
              width="480px"
              height="480px"
              loading="lazy"
              onClick={() => openModal(item.image_url || placeholderImg)}
            />
            <div className="slide_details">
              <h3>{item.name}</h3>
              <p>${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="modal_overlay" onClick={closeModal}>
          <div className="modal_content" onClick={(e) => e.stopPropagation()}>
            <button className="modal_close" onClick={closeModal}>
              &times;
            </button>
            <img src={selectedImage!} alt="Item" className="modal_image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default NewestItems;
