import { useRef, useState } from "react";
import FormGroup from "../../components/FormGroup";
import JoditEditor from "jodit-react";
const AddArticle = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  return (
    <div className="AddArticle__con">
      <form className="AddArticle__form">
        <FormGroup htmlFor={"title"} title={"article Tile"} />
        <FormGroup htmlFor={"slug"} title={"article slug"} />
        <FormGroup title={"category"} select={true} value={"category 1"} />
        <FormGroup title={"tag"} select={true} value={"tag 1"} />
        <input type="file" />
        <br />
        <br />
        <JoditEditor
          ref={editor}
          value={content}
          // config={config}
          tabIndex={1} // tabIndex of textarea
          onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
          onChange={(e) => setContent(e.target.value)}
        />
      </form>
    </div>
  );
};

export default AddArticle;
