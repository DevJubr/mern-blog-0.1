import { CiMail, CiSearch } from "react-icons/ci";
import IconWBg from "./IconWBg";
import { BsBell } from "react-icons/bs";
const NavD = () => {
  return (
    <nav className="Dashboard__navbar">
      <div className="con">
        <div className="Dashboard__navbar__con">
          <form className="form__search__Dashboard">
            <input type="text" className="Dashboard__search" />
            <button className="submit_-search__Dashboard">
              <CiSearch />
            </button>
          </form>

          <div className="Dashboard__msg__notification__user">
            <div className="notification__msg__Dashboard">
              <IconWBg icon={<BsBell />} />
              <IconWBg icon={<CiMail />} />
            </div>

            <div className="user__Dashboard">
              <div className="user__pic__Dashboard">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnNhjHIPYsG2AQqEhvmyP5neVFoK5Dn_jyHA&usqp=CAU"
                  alt="name"
                  className="Dashboard__user__Pic"
                />
              </div>
              <div className="userInfo__Dashboard">
                <span className="name__Dashboard__user">jafor iqbal</span>
                <span className="id__Dashboard__user">id: 354669635</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavD;
