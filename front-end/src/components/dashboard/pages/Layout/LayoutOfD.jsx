import NavD from "../../components/NavD";
import AsideD from "../../components/AsideD";
import { Outlet } from "react-router-dom";

const LayoutOfD = () => {
  return (
    <>
      <div className="whole__page">
        <AsideD />

        <NavD />
        <main className="Ds">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default LayoutOfD;
