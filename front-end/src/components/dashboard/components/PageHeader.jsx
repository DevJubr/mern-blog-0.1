import React from "react";
import { CiSearch } from "react-icons/ci";

const PageHeader = ({ name }) => {
  return (
    <header className="header">
      <span className="nameHD">{name}</span>
      <form className="form__search__Dashboard">
        <input
          type="text"
          className="Dashboard__search"
          placeholder={`search ur ${name}`}
        />
        <button className="submit_-search__Dashboard">
          <CiSearch />
        </button>
      </form>
      <button className="addPost">add new </button>
    </header>
  );
};

export default PageHeader;
