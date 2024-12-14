import { useState } from "react";
import "../App.css";
import MenuSection from "../components/MenuSection";
import menu from "../utils/menu.json";
import BreadCrumbs from "../components/BreadCrumbs";
import Divider from "../components/Divider";

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState(menu.main_course);
  return (
    <main className="home_page">
      <BreadCrumbs setSelectedCategory={setSelectedCategory} />
      <section className="section_wrapper main_course_section">
        <h1 className="title">Main Course</h1>
        <MenuSection category={menu.main_course} />
      </section>
      <Divider />
      <section className="section_wrapper drinks_section">
        <h1 className="title">Drinks</h1>
        <MenuSection category={menu.drinks} />
      </section>
      <Divider />
    </main>
  );
};

export default HomePage;
