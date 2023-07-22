import { MdOutlineArticle, MdPostAdd } from "react-icons/md";
import { LiaBorderAllSolid } from "react-icons/lia";
import { AiOutlineUser, AiFillTags, AiOutlineUserAdd } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";

import { Link } from "react-router-dom";
import { BsChevronCompactDown } from "react-icons/bs";

const ANestedList = ({ icon, nFor, nested }) => {
  return (
    <li className="outter__list__item">
      <div className="show">
        <div className="icon_&_name">
          {icon}
          <span className="name__list__of">{nFor}</span>
        </div>
        <div className="icon__showMOre">
          <BsChevronCompactDown />
        </div>
      </div>

      <ul className="inner__option">
        {nested?.map((item) => {
          return (
            <Link to={item?.path}>
              <li className="innwe__list__option">
                {item?.icon}
                {item?.title}
              </li>
            </Link>
          );
        })}
      </ul>
    </li>
  );
};

export default ANestedList;
