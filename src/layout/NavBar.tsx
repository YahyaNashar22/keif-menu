import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import logo from "../assets/logo.webp";

const NavBar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar_container">
      <div className="navbar_header">
        <img
          src={logo}
          className="logo"
          alt="keif logo"
          onClick={() => navigate("/")}
        />
        <button
          className={`burger_icon ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
      </div>
      <div className={`nav_links ${menuOpen ? "show_menu" : ""}`}>
        <NavLink to="/" className="nav_link" onClick={() => setMenuOpen(false)}>
          Menu
        </NavLink>
        <NavLink
          to="/about-us"
          className="nav_link"
          onClick={() => setMenuOpen(false)}
        >
          About us
        </NavLink>
        <NavLink
          to="/feedback"
          className="nav_link"
          onClick={() => setMenuOpen(false)}
        >
          Feedback
        </NavLink>
        <NavLink
          to="/contact-us"
          className="nav_link"
          onClick={() => setMenuOpen(false)}
        >
          Contact us
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
