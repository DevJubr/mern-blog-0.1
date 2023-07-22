import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

const SingelCategory = () => {
  return (
    <div className="SingelCategory">
      <h3 className="SingelCategoryName">how how how</h3>
      <div className="SingelCategoryBtn">
        <Link to={"/admin/dashboard/categorys/editcategory/slug"}>
          <AiFillEdit />
        </Link>

        <AiFillDelete />
      </div>
    </div>
  );
};

export default SingelCategory;
