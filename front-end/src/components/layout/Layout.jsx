import { Outlet } from "react-router-dom";
import NavBar from "../WebPage/nav_bar/NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
