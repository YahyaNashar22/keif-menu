import MenuItemCard from "./MenuItemCard";

const MenuSection = ({ category }: { category: { [key: string]: any } }) => {
  return (
    <section className="section_wrapper">
      <h1 className="title">{category.name}</h1>
      {category.map(
        (item: { [key: string]: any }, index: number) => {
          return <MenuItemCard key={index} item={item} />;
        }
      )}
    </section>
  );
};

export default MenuSection;
