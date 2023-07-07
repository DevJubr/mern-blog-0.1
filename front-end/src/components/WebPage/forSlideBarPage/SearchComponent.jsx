import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchComponent = () => {
  const [Search, setSearch] = useState("");
  let history = useNavigate();
  const hendelSubmit = (ev) => {
    ev.preventDefault();
    history(`/posts/search/${Search}`);
  };
  return (
    <form className="homePage__slideBar__serach_con" onSubmit={hendelSubmit}>
      <span className="sliderBar__sec__Title">search</span>
      <input
        type="text"
        className="searchInputBox"
        placeholder="what you want?"
        value={Search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">search</button>
    </form>
  );
};

export default SearchComponent;
