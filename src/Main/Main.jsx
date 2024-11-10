import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Hedar/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";


const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
