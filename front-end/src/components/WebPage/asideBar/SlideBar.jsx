import CategoryComponent from "../forSlideBarPage/CategoryComponent";
import TagComponent from "../forSlideBarPage/TagComponent";
import SearchComponent from "../forSlideBarPage/SearchComponent";
import PopularPostsComponent from "../forSlideBarPage/PopularPostsComponent";

const SlideBar = () => {
  return (
    <aside className="homePage__slideBar">
      <SearchComponent />
      <PopularPostsComponent />
      {/* <section className="homePage__slideBar__following__con"></section> */}
      <CategoryComponent />
      <TagComponent />
    </aside>
  );
};

export default SlideBar;
