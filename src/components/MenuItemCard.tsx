import { useState } from "react";
import "../App.css";

const MenuItemCard = ({ item }: { item: { [key: string]: any } }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <div className="card_wrapper">
        <div className="card_image_wrapper">
          <img
            src={item.image_url}
            className="item_pic"
            alt={item.name}
            width={150}
            height={150}
            onClick={openModal}
            loading="lazy"
          />
        </div>
        <div className="card_content">
          <h2 className="item_name">{item.name}</h2>
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
            <img src={item.image_url} alt={item.name} className="modal_image" />
          </div>
        </div>
      )}
    </>
  );
};

export default MenuItemCard;
