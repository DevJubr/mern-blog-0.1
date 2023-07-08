import {
  LikeCon,
  ImgForR,
  LikeAndView,
  OuterRiletedPosts,
  OuterTags,
  RHead,
  RImg,
  RPost,
  RTitle,
  Like,
} from "../../../styles/__postDetails";
import { Link } from "react-router-dom";
import { SlDislike, SlLike } from "react-icons/sl";
import TagItem from "../forSlideBarPage/Tag";

export const LikeAndViewComponent = () => {
  return (
    <LikeAndView>
      <Like>
        <LikeCon>
          <SlDislike />
          <span className="likeCount">(1)</span>
        </LikeCon>
        <LikeCon>
          <SlLike />
          <span className="likeCount">(1)</span>
        </LikeCon>
      </Like>
      <span className="article__outer__view">2 view</span>
    </LikeAndView>
  );
};
export const OuterTagsComponent = () => {
  return (
    <OuterTags>
      <TagItem />
      <TagItem />
      <TagItem />
      <TagItem />
    </OuterTags>
  );
};
export const OuterRiletedPostsComponent = () => {
  return (
    <OuterRiletedPosts>
      <RHead>relaited posts</RHead>
      <RPost>
        <ImgForR>
          <RImg
            src="https://unsplash.com/photos/gYrYa37fAKI/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjg4ODAwNzc2fA&force=true&w=640"
            alt="rileted post"
          />
        </ImgForR>
        <RTitle>
          <Link to="/posts/dital/:slug">
            Lorem ipsum dolor, sit amet consectetur...
          </Link>
        </RTitle>
      </RPost>
    </OuterRiletedPosts>
  );
};
