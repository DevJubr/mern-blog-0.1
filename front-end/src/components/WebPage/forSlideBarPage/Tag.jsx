import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineTags } from "react-icons/ai";
const TagItem = () => {
  return (
    <span
      style={{
        display: "flex",
        alignItems: "center",
        gap: ".4rem",
      }}
    >
      <AiOutlineTags />
      <Link to={"posts/tag/:tagslug/:currentPage"}>programing</Link>
    </span>
  );
};

export default TagItem;
