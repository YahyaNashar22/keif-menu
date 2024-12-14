import MenuItemCard from "./MenuItemCard";

const MenuSection = ({ category }: { category: { [key: string]: any } }) => {
  return (
    <>
      {category.map((item: { [key: string]: any }, index: number) => {
        return <MenuItemCard key={index} item={item} />;
      })}
    </>
  );
};

export default MenuSection;
