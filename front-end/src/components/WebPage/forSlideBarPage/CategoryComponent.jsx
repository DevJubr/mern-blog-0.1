import Category from "./Cate";

const CategoryComponent = () => {
  return (
    <section className="homePage__slideBar__category__con">
      <span className="sliderBar__sec__Title">categorys</span>
      <ul>
        <Category />
        <Category />
        <Category />
        <Category />
      </ul>
    </section>
  );
};

export default CategoryComponent;
