import "../App.css";

import menu from "../utils/menu.json";

const BreadCrumbs = ({
  setSelectedCategory,
}: {
  setSelectedCategory: (e:any) => void;
}) => {
  return <ul className="bread_crumbs">
    <li className="bread_crumb" onClick={()=>setSelectedCategory(menu.main_course)}>Main Course</li>
    <li className="bread_crumb" onClick={()=>setSelectedCategory(menu.drinks)}>Fresh Juice</li>
  </ul>;
};

export default BreadCrumbs;
