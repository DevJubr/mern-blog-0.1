import { FakeCategory, FakeTags } from "../../../../utils";
import FormGroup from "../../components/FormGroup";

const AddArticle = () => {
  return (
    <>
      <div className="AddArticle">
        <form>
          <FormGroup name={"Title"} type={"input"} />
          <FormGroup name={"Slug"} type={"input"} />
          <FormGroup name={"Category"} type={"select"} optionA={FakeCategory} />
          <FormGroup name={"Tags"} type={"select"} optionA={FakeTags} />

          <button type={"submit"} className="add_post">
            Publish
          </button>
        </form>
      </div>
    </>
  );
};

export default AddArticle;
