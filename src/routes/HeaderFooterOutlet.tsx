import { Outlet } from "react-router-dom";
import NavBar from "../layout/NavBar";
import Footer from "../layout/Footer";

const Container = () => {
    return (
      <main>
        <NavBar />
        <Outlet />
        <Footer />
      </main>
    );
  };
  
  export default Container;