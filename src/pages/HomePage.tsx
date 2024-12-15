import { useState } from "react";
import "../App.css";
import MenuSection from "../components/MenuSection";
import menuJson from "../utils/menu.json";
import BreadCrumbs from "../components/BreadCrumbs";

type MenuType = {
  [key: string]: {
    name: string;
    description: string;
    price: number;
    image_url: string;
  }[];
};

const menu: MenuType = menuJson;

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("main_course");
  return (
    <main className="home_page">
      <BreadCrumbs setSelectedCategory={setSelectedCategory} />
      <MenuSection categoryName={selectedCategory} category={menu[selectedCategory]} />
    </main>
  );
};

export default HomePage;
