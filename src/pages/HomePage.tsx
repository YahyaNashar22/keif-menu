import "../App.css";
import MenuItemCard from "../components/MenuItemCard";
import menu from "../utils/menu.json";

const HomePage = () => {
  return (
    <main className="home_page">
      {menu.main_course.map((item: {[key:string]:any}, index: number) => {
        return <MenuItemCard key={index} item={item} />;
      })}
    </main>
  );
};

export default HomePage;
