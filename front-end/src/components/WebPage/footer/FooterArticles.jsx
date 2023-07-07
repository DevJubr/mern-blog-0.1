import FooterHeading from "./FooterHeading";
import PopularSingel from "../forSlideBarPage/PopularSingel";
const FooterArticles = ({ text }) => {
  return (
    <div className="footer_post">
      <FooterHeading text={text} />
      <div className="footer__articles">
        <PopularSingel />
        <PopularSingel />
      </div>
    </div>
  );
};

export default FooterArticles;
