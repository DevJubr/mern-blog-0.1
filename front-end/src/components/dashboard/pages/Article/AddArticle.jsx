import { FakeCategory, FakeTags } from "../../../../utils";
import FormGroup from "../../components/FormGroup";
import RichText from "../../components/RichText";

const AddArticle = () => {
  return (
    <>
      <div className="AddArticle">
        <form>
          <FormGroup name={"Title"} type={"input"} />
          <FormGroup name={"Slug"} type={"input"} />
          <FormGroup name={"Category"} type={"select"} optionA={FakeCategory} />
          <FormGroup name={"Tags"} type={"select"} optionA={FakeTags} />
          <RichText />
          <button type={"submit"} className="add_post">
            Publish
          </button>
        </form>
      </div>
    </>
  );
};

export default AddArticle;
