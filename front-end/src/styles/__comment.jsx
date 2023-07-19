import { AiOutlineSend } from "react-icons/ai";
import { styled } from "styled-components";

export const CmtTogol = styled.button`
  background: none;
  color: aliceblue;
  text-transform: capitalize;
`;

export const Shcop = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const CommentContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  font-size: 0.88rem;
`;

export const CommentAndReplyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

export const CommentImage = styled.img`
  width: 45px;
  height: 45px;
  object-fit: cover;
  border-radius: 50%;
`;

export const CommentContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.3rem;
`;

export const CommentTexts = styled.div`
  padding: 0.5rem 5rem 0.5rem 0.5rem;
  border: 1px solid #f0f8ff63;
  display: flex;
  border-radius: 0.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;
`;

export const CommentButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.66rem;
`;

export const ReplyButton = styled.span`
  cursor: pointer;
`;

export const RepliesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  padding-left: 3.3rem;
`;

export const CommentsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 3rem;
`;

export const ReplyImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
`;

export const StyledComments = styled.div`
  width: 100%;
  .comment {
    ${CommentContainer}
  }

  .comment__and__riply {
    ${CommentAndReplyContainer}
  }

  .comment img {
    ${CommentImage}
  }

  .comment__content {
    ${CommentContent}
  }

  .comment__texts {
    ${CommentTexts}
  }

  .comment__btns {
    ${CommentButtons}
  }

  span.ReplyBtn {
    ${ReplyButton}
  }

  .riplys {
    ${RepliesContainer}
  }

  .comments {
    ${CommentsContainer}
  }

  .riplys img {
    ${ReplyImage}
  }
`;

export const Comment_Box_Input = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-top: 4rem;
`;

export const CommentInputBox = styled.div`
  display: flex;
  position: relative;
  align-items: flex-end;
  width: 80%;
`;

export const CommentInput = styled.input`
  padding: 0.7rem 0rem 5rem 0.7rem;
  font-size: 1rem;
  text-transform: capitalize;
  border-radius: 0.5rem;
  background: #e3d6ffe3;
  width: 100%;
`;

export const CommentSendIcon = styled.span`
  position: absolute;
  right: 15px !important;
  bottom: 8px !important;
`;

export const SendIcon = styled(AiOutlineSend)`
  fill: blueviolet;
  cursor: pointer;
  width: 1.3rem;
  height: 1.3rem;
`;
