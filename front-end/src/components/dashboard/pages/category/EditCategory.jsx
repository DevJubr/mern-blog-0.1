import React from "react";

const EditCategory = () => {
  return (
    <div className="AddCategory">
      <header className="AddCategory">
        <h3 className="AddCategory__addcatgry">Edit Category</h3>
        <button className="AddCategory__showcategoru">show category</button>
      </header>

      <form className="AddCategory">
        <div className="form__group">
          <label htmlFor="categoryTitle">name</label>
          <input
            type="text"
            placeholder="enter category title"
            id="categoryTitle"
          />
          <p className="errorMsg">invalid fuking category</p>
        </div>

        <div className="form__group">
          <label htmlFor="categoryDec">Description</label>
          <textarea id="categoryDec" cols="30" rows="10"></textarea>
          <p className="errorMsg">invalid fuking description</p>
        </div>
        <button type="submit" className="AddCategory__btn">
          edit Category
        </button>
      </form>
    </div>
  );
};

export default EditCategory;
