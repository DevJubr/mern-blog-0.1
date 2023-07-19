import { commemts } from "../../../utils/index";
import CommentComponent from "./CommentComponent";
import { RHead } from "../../../styles/__postDetails";
import { AiOutlineSend } from "react-icons/ai";
import {
  CommentImage,
  CommentsContainer,
  StyledComments,
} from "../../../styles/__comment";
import CommentBoxInput from "./CommentBoxInput";

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
        <CommentBoxInput />
      </div>
    </StyledComments>
  );
};

export default CommentComponentWrapper;
