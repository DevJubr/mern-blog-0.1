import SIngelPost from "../../components/SIngelPost";
import PageHeader from "../../components/PageHeader";
import Pagination from "../../../WebPage/pagination/Pagination";
const AllPosts = () => {
  return (
    <div className="AllPosts">
      <PageHeader name={"posts"} />

      <div className="AllPosts__singel">
        <SIngelPost />
        <SIngelPost />
        <SIngelPost />
        <SIngelPost />
      </div>

      <Pagination />
    </div>
  );
};

export default AllPosts;
