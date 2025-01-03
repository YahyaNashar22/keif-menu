import formatCategoryName from "../utils/formatCategoryName";
import MenuItemCard from "./MenuItemCard";

const MenuSection = ({
  categoryName,
  category,
}: {
  categoryName: string;
  category: { [key: string]: any }[];
}) => {
  return (
    <section className="section_wrapper">
      <h1 className="title">{formatCategoryName(categoryName)}</h1>
      {category.map((item: { [key: string]: any }, index: number) => {
        return <MenuItemCard key={index} item={item} />;
      })}
    </section>
  );
};

export default MenuSection;
