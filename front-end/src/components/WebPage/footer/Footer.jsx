import FooterCategory from "./FooterCategory";
import FooterTag from "./FooterTag";
import FooterArticles from "./FooterArticles";

const FooterComponent = () => {
  return (
    <footer>
      <div className="con">
        <section className="footer__top">
          <FooterArticles text={"more articles"} />
          <div className="category__and__tag">
            <FooterCategory />
            <FooterTag />
          </div>

          <FooterArticles text={"recent articles"} />
        </section>
      </div>
      <section className="footer__bottom">
        <div className="con">
          <div className="ff--con">
            <p>
              create by <small>jubayer</small>
            </p>
            <ul>
              <li>home</li>
              <li>contarct</li>
              <li>about</li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default FooterComponent;
