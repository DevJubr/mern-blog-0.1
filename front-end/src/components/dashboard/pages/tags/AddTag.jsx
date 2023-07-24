import React from "react";

import FormGroup from "../../components/FormGroup";

const AddTag = () => {
  return (
    <div className="AddTag">
      <FormGroup adding={true} name={"Tags"} type={"input"} />
      <button type={"submit"} className="add_post">
        Add Tag
      </button>
    </div>
  );
};

export default AddTag;
