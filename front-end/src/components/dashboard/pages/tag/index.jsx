import React from "react";
import SingelCategory from "../../components/SingelCategory";

const TagPageD = () => {
  return (
    <>
      {" "}
      <div className="con__headerDA">
        <header className="headerDA__header">
          <div className="total__articel">
            <span className="headerDA__count">tags</span>
            <span className="headerDA__count">(55)</span>
          </div>

          <form className="searchDB">
            <input type="text" placeholder="type your post name" />
            <button>submit</button>
          </form>

          <buttton className="addnew">add tag</buttton>
        </header>
        <div className="allArticles__con">
          <SingelCategory />
          <SingelCategory />
          <SingelCategory />
          <SingelCategory />
          <SingelCategory />
          <SingelCategory />
        </div>
      </div>
    </>
  );
};

export default TagPageD;
