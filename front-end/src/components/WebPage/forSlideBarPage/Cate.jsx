import { BsFillCaretRightFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <li>
      <Link to={"posts/category/:categoryslug/:currentPage"}>
        <BsFillCaretRightFill /> algorithom
      </Link>
    </li>
  );
};

export default Category;
