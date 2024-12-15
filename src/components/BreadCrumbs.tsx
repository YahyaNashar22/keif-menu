import "../App.css";

const BreadCrumbs = ({
  setSelectedCategory,
}: {
  setSelectedCategory: (e: any) => void;
}) => {
  // TODO: Add BreadCrumbs For All Sections

  return (
    <ul className="bread_crumbs">
      <li
        className="bread_crumb"
        onClick={() => setSelectedCategory("main_course")}
      >
        Main Course
      </li>
      <li
        className="bread_crumb"
        onClick={() => setSelectedCategory("drinks")}
      >
        Fresh Juice
      </li>
    </ul>
  );
};

export default BreadCrumbs;
