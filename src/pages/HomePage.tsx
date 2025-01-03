import { Suspense, useEffect, useState } from "react";
import "../App.css";
import MenuSection from "../components/MenuSection";
import menuJson from "../utils/menu.json";
import BreadCrumbs from "../components/BreadCrumbs";
import { MenuType } from "../types";
import NewestItems from "../components/NewestItems";
import Loading from "../components/Loading";

const menu: MenuType = menuJson;

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("breakfast");
  const [showButton, setShowButton] = useState(false);

  // Monitor scroll position to toggle visibility of the button
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <main className="home_page">
      <NewestItems />
      <BreadCrumbs setSelectedCategory={setSelectedCategory} />
      <Suspense fallback={<Loading />}>
        <MenuSection
          categoryName={selectedCategory}
          category={menu[selectedCategory]}
        />
      </Suspense>

      {showButton && (
        <button className="back_to_top" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </main>
  );
};

export default HomePage;
