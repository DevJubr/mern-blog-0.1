import PageHeader from "../../components/PageHeader";
import TagSingel from "../../components/TagSingel";
const AllTags = () => {
  return (
    <div className="AllTags">
      <PageHeader name={"Tags"} />
      <div className="singel_Tag">
        <TagSingel name={"programing"} forI={"tags"} />
        <TagSingel name={"programing"} forI={"tags"} />
        <TagSingel name={"programing"} forI={"tags"} />
        <TagSingel name={"programing"} forI={"tags"} />
        <TagSingel name={"programing"} forI={"tags"} />
      </div>
    </div>
  );
};

export default AllTags;
