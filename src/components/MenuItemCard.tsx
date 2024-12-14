import { useState } from "react";
import "../App.css";

import camera from "../../public/camera.png";

const MenuItemCard = ({ item }: { item: { [key: string]: any } }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <div className="card_content">
        <div className="name_price">
          <h2 className="item_name">{item.name}</h2>
          <p className="item_price">{item.price}$</p>
        </div>
        <p className="item_desc">{item.description}</p>

        <img
          className="item_picture"
          src={camera}
          width="32px"
          height="32px"
          alt="item picture"
          onClick={openModal}
        />
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
