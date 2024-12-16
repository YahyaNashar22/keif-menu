import { useState } from "react";
import "../App.css";
import MenuSection from "../components/MenuSection";
import menuJson from "../utils/menu.json";
import BreadCrumbs from "../components/BreadCrumbs";
import { MenuType } from "../types";

const menu: MenuType = menuJson;

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("breakfast");
  return (
    <main className="home_page">
      <BreadCrumbs setSelectedCategory={setSelectedCategory} />
      <MenuSection categoryName={selectedCategory} category={menu[selectedCategory]} />
    </main>
  );
};

export default HomePage;
