import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Link to={"/"}>home</Link>
      <br />
      <Link to={"login"}>login</Link>
      <br />
      <Link to={"regs"}>regs</Link>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
