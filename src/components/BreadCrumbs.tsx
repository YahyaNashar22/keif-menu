import "../App.css";
import { MenuType } from "../types";
import formatCategoryName from "../utils/formatCategoryName";

import menuJson from "../utils/menu.json";

const BreadCrumbs = ({
  setSelectedCategory,
}: {
  setSelectedCategory: (e: any) => void;
}) => {
  const menu: MenuType = menuJson;
  return (
    <ul className="bread_crumbs">
      {Object.keys(menu).map((category) => {
        return (
          <li
            key={category}
            className="bread_crumb"
            onClick={() => setSelectedCategory(category)}
          >
            {formatCategoryName(category)}
          </li>
        );
      })}
    </ul>
  );
};

export default BreadCrumbs;
