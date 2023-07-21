import React from "react";

const FormGroup = ({ htmlFor, title, value, select }) => {
  if (select) {
    return (
      <>
        <label htmlFor={title}>{title}</label>
        <select name={title} id={title}>
          <option>`---select ${title}-----`</option>
          <option value={value}>{value}</option>
          <option value={value}>{value}</option>
          <option value={value}>{value}</option>
          <option value={value}>{value}</option>
          <option value={value}>{value}</option>
          <option value={value}>{value}</option>
        </select>
        <p className="errorMsg">`fuking invalid ${title}!`</p>
      </>
    );
  } else {
    return (
      <div className="AddArticle__form__group">
        <label htmlFor={htmlFor}>{title}</label>
        <input type="text" id={htmlFor} />
        <p className="errorMsg">`fuking invalid ${title}!`</p>
      </div>
    );
  }
};

export default FormGroup;
