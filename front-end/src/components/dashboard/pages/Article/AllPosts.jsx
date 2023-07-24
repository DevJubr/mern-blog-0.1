import SIngelPost from "../../components/SIngelPost";
import PageHeader from "../../components/PageHeader";
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
    </div>
  );
};

export default AllPosts;
