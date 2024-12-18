import { useState } from "react";
import "../App.css";

import placeholderImg from "../assets/placeholder.jpg";
import isArabic from "../utils/isArabic";

const MenuItemCard = ({ item }: { item: { [key: string]: any } }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const itemImage = item.image_url != "" ? item.image_url : placeholderImg;
  return (
    <>
      <div className="card_wrapper">
        <div className="card_image_wrapper">
          <img
            src={itemImage}
            className="item_pic"
            alt={item.name}
            width={100}
            height={100}
            onClick={openModal}
            loading="lazy"
          />
        </div>
        <div className="card_content">
          <h2
            className={`item_name ${isArabic(item.name) ? "arabic_name" : ""}`}
          >
            {item.name}
          </h2>
          <h3
            className={`item_sub_name ${
              isArabic(item.sub_name) ? "arabic_name" : ""
            }`}
          >
            {item.sub_name}
          </h3>
          <p className="item_desc">{item.description}</p>
          <p className="item_price">{item.price}$</p>
        </div>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="modal_overlay" onClick={closeModal}>
          <div className="modal_content" onClick={(e) => e.stopPropagation()}>
            <button className="modal_close" onClick={closeModal}>
              &times;
            </button>
            <img src={itemImage} alt={item.name} className="modal_image" />
          </div>
        </div>
      )}
    </>
  );
};

export default MenuItemCard;
