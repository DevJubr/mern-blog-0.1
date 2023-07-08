import { commemts } from "../../../utils/index";
import CommentComponent from "./CommentComponent";
import { RHead } from "../../../styles/__postDetails";
import { CommentsContainer, StyledComments } from "../../../styles/__comment";

const CommentComponentWrapper = () => {
  console.log("amii", commemts);
  return (
    <StyledComments>
      <div className="comment__con">
        <RHead>comments</RHead>

        <CommentsContainer>
          {commemts?.map((item) => (
            <CommentComponent item={item} />
          ))}
        </CommentsContainer>
      </div>
    </StyledComments>
  );
};

export default CommentComponentWrapper;
