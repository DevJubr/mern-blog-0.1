import React from "react";
import SingelArticles from "./SingelArticles";

const AllPosts = () => {
  return (
    <div className="con__headerDA">
      <header className="headerDA__header">
        <div className="total__articel">
          <span className="headerDA__count">posts</span>
          <span className="headerDA__count">(55)</span>
        </div>

        <form className="searchDB">
          <input type="text" placeholder="type your post name" />
          <button>submit</button>
        </form>

        <buttton className="addnew">add post</buttton>
      </header>
      <div className="allArticles__con">
        <SingelArticles />
        <SingelArticles />
        <SingelArticles />
        <SingelArticles />
        <SingelArticles />
      </div>
    </div>
  );
};

export default AllPosts;
