import { useState } from "react";
import ShowMoreBtn from "./ShowMoreBtn";
import {
  CmtTogol,
  CommentAndReplyContainer,
  CommentButtons,
  CommentContainer,
  CommentContent,
  CommentImage,
  CommentTexts,
  RepliesContainer,
  ReplyButton,
  ReplyImage,
} from "../../../styles/__comment";

const CommentComponent = ({ item }) => {
  const [showR, setshowR] = useState(false);
  const toggleReplies = () => {
    setshowR(!showR);
  };
  console.log(item);
  return (
    <CommentAndReplyContainer>
      <CommentContainer>
        <div className="userImg">
          <CommentImage src={item?.userImg} alt="nam" className="User__img" />
        </div>
        <CommentContent>
          <CommentTexts>
            <h3 className="userName">{item?.user}</h3>
            <p className="comment__text">{item?.connent}</p>
          </CommentTexts>
          <CommentButtons>
            <ReplyButton className="ReplyBtn">Reply</ReplyButton>
            <span className="date">1d</span>
          </CommentButtons>
        </CommentContent>
      </CommentContainer>

      {item?.replays?.length > 0 && (
        <CmtTogol className="comment__toggle" onClick={toggleReplies}>
          {showR ? null : <ShowMoreBtn item={item} />}
        </CmtTogol>
      )}

      {showR && (
        <RepliesContainer>
          {item?.replays?.map((riply) => (
            <CommentContainer key={riply?.id} className="comment">
              <div className="userImg">
                <ReplyImage
                  src={riply?.userImg}
                  alt="nam"
                  className="User__img"
                />
              </div>
              <CommentContent>
                <CommentTexts>
                  <h3 className="userName">{item?.user}</h3>
                  <p className="comment__text">{item?.connent}</p>
                </CommentTexts>
                <CommentButtons>
                  <ReplyButton className="ReplyBtn">Reply</ReplyButton>
                  <span className="date">1d</span>
                </CommentButtons>
              </CommentContent>
            </CommentContainer>
          ))}
        </RepliesContainer>
      )}
    </CommentAndReplyContainer>
  );
};

export default CommentComponent;
