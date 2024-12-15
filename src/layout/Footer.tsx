import "../App.css";

import { Link } from "react-router-dom";

import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import location from "../assets/location.png";
import logo from "../assets/logo.webp";

const Footer = () => {
  return (
    <footer className="footer_container">
      <img src={logo} className="logo" alt="keif logo" />
      <div className="feedback_cta">
        <h2 className="feedback_cta_title">Give us your feedback</h2>
        <button className="btn feedback_btn">Feedback</button>
      </div>
      <ul className="links">
        <Link to="https://www.instagram.com/keiftripoli/?hl=en" target="_blank">
          <img src={instagram} width={32} height={32} alt="instagram link" />
        </Link>
        <Link to="https://www.facebook.com/keiftripoli/" target="_blank">
          <img src={facebook} width={32} height={32} alt="facebook link" />
        </Link>
        <Link
          to="https://www.google.com/maps/place/KEIF,+DAM+WFAREZ,+Tripoli/data=!4m2!3m1!1s0x1521f788a85dc2e7:0x429539b6ca9e630?utm_source=mstt_1&entry=gps&lucs=47068615,,47075915&g_ep=CAESCjExLjEwNC4xMDAYACDXggMqEjQ3MDY4NjE1LCw0NzA3NTkxNUICTEI%3D"
          target="_blank"
        >
          <img src={location} width={32} height={32} alt="location link" />
        </Link>
      </ul>
    </footer>
  );
};

export default Footer;
