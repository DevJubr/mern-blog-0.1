import { Article, ArticleOuter } from "../../../styles/__postDetails";
import {
  LikeAndViewComponent,
  OuterRiletedPostsComponent,
  OuterTagsComponent,
} from "./ArticleOuter";
import CommentComponentWrapper from "./CommentComponentWrapper";
import ContentCompo from "./Content";
import HeaderComponent from "./Header";
const PostDetails = () => {
  return (
    <Article>
      <HeaderComponent />
      <ContentCompo />

      <ArticleOuter>
        <LikeAndViewComponent />
        <OuterTagsComponent />
        <OuterRiletedPostsComponent />
        <CommentComponentWrapper />
      </ArticleOuter>
    </Article>
  );
};

export default PostDetails;
