import React from "react";

const EditTag = () => {
  return (
    <div className="AddCategory">
      <header className="AddCategory">
        <h3 className="AddCategory__addcatgry">Edit tag</h3>
        <button className="AddCategory__showcategoru">show tag</button>
      </header>

      <form className="AddCategory">
        <div className="form__group">
          <label htmlFor="categoryTitle">name</label>
          <input
            type="text"
            placeholder="enter category title"
            id="categoryTitle"
          />
          <p className="errorMsg">invalid fuking tag</p>
        </div>

        <div className="form__group">
          <label htmlFor="categoryDec">Description</label>
          <textarea id="categoryDec" cols="30" rows="10"></textarea>
          <p className="errorMsg">invalid fuking description</p>
        </div>
        <button type="submit" className="AddCategory__btn">
          edit tag
        </button>
      </form>
    </div>
  );
};

export default EditTag;
