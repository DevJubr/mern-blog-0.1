import PopularSingel from "./PopularSingel";

const PopularPostsComponent = () => {
  return (
    <section className="homePage__slideBar__populer__post__con">
      <span className="sliderBar__sec__Title">popular posts</span>
      <div className="homePage__slideBar__populer__posts">
        <PopularSingel />
        <PopularSingel />
        <PopularSingel />
        <PopularSingel />
      </div>
    </section>
  );
};

export default PopularPostsComponent;
