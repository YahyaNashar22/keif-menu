import "../App.css";

const MenuItemCard = ({ item }: { item: { [key: string]: any } }) => {
  return (
    <div className="card_wrapper">
    <div className="card_image_wrapper">
      <img src={item.image_url} className="item_pic" alt="item picture" />
    </div>
    <div className="card_content">
      <h2 className="item_name">{item.name}</h2>
      <p className="item_desc">{item.description}</p>
      <p className="item_price">{item.price}$</p>
    </div>
  </div>
  );
};

export default MenuItemCard;
