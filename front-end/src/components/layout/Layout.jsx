import { Outlet } from "react-router-dom";
import NavBar from "../WebPage/nav_bar/NavBar";
import SlideBar from "../WebPage/asideBar/SlideBar";
import FooterComponent from "../WebPage/footer/Footer";

const Layout = () => {
  return (
    <>
      <NavBar />

      <main>
        <div className="con">
          <div className="homePage__con">
            <div className="homePage__main__content">
              <Outlet />
            </div>
            <SlideBar />
          </div>
        </div>
      </main>
      <FooterComponent />
    </>
  );
};

export default Layout;
