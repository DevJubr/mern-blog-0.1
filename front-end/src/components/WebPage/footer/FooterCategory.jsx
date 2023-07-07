import React from "react";
import FooterHeading from "./FooterHeading";
import Category from "../forSlideBarPage/Cate";

const FooterCategory = () => {
  return (
    <div className="category">
      <FooterHeading text={"categorys"} />
      <div className="footer__category">
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
    </div>
  );
};

export default FooterCategory;
