import React from "react";
import FormGroup from "./FormGroup";

const Adding = ({ adding, name }) => {
  return (
    <div className="AddTag">
      <FormGroup adding={adding} name={name} type={"input"} />
      <button type={"submit"} className="add_post">
        Add {name}
      </button>
    </div>
  );
};

export default Adding;
