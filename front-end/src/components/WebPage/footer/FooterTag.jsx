import Tag from "../forSlideBarPage/Tag";
import FooterHeading from "./FooterHeading";

const FooterTag = () => {
  return (
    <div className="tag">
      <FooterHeading text={"tags"} />
      <div className="footer__tag">
        <Tag />
        <Tag />
        <Tag />
        <Tag />
      </div>
    </div>
  );
};

export default FooterTag;
