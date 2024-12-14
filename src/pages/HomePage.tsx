import { useState } from "react";
import "../App.css";
import MenuSection from "../components/MenuSection";
import menu from "../utils/menu.json";
import BreadCrumbs from "../components/BreadCrumbs";

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState(menu.main_course);
  return (
    <main className="home_page">
      <BreadCrumbs setSelectedCategory={setSelectedCategory} />
      <MenuSection category={selectedCategory} />
    </main>
  );
};

export default HomePage;
