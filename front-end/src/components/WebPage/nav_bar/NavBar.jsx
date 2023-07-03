import { useState } from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  const [navActive, setnavActive] = useState(false);
  return (
    <nav>
      <div className="con">
        <div className="nav__con">
          <div className="nav__con__left">
            <strong className="logo">
              <NavLink to={"/"}>MU-BLOG</NavLink>
            </strong>
          </div>

          <div className="nav__con__right">
            <div
              onClick={() => setnavActive(!navActive)}
              className={navActive ? "burger active" : "burger close"}
            >
              <span className="nav__burger__line one"></span>
              <span className="nav__burger__line tow"></span>
              <span className="nav__burger__line three"></span>
            </div>

            <div className={navActive ? "nav__items open" : "nav__items"}>
              <ul className="nav__ul">
                <li className="nav__item">
                  <NavLink to={"about"}>about</NavLink>
                </li>
                <li className="nav__item">
                  <NavLink to={"contac"}>contac</NavLink>
                </li>
                <li className="nav__item">
                  <NavLink to={"policy"}>policy</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
