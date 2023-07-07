import TagItem from "./Tag";

const TagComponent = () => {
  return (
    <section className="homePage__slideBar__tags__con">
      <span className="sliderBar__sec__Title">tgas</span>
      <div className="homePage__slideBar__tags">
        <TagItem />
        <TagItem />
        <TagItem />
        <TagItem />
      </div>
    </section>
  );
};

export default TagComponent;
