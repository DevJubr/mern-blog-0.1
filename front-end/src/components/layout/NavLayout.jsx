import NavBar from "../WebPage/nav_bar/NavBar";
import { Outlet } from "react-router-dom";

const NavLayout = () => {
  return (
    <>
      <NavBar nvc={true} />
      <>
        <Outlet />
      </>
    </>
  );
};

export default NavLayout;
