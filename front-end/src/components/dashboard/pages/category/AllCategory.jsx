import PageHeader from "../../components/PageHeader";
import TagSingel from "../../components/TagSingel";
const AllCategory = () => {
  return (
    <div className="AllTags">
      <PageHeader name={"Categorys"} />
      <div className="singel_Tag">
        <TagSingel name={"programing"} forI={"category"} />
        <TagSingel name={"programing"} forI={"category"} />
        <TagSingel name={"programing"} forI={"category"} />
        <TagSingel name={"programing"} forI={"category"} />
        <TagSingel name={"programing"} forI={"category"} />
      </div>
    </div>
  );
};

export default AllCategory;
