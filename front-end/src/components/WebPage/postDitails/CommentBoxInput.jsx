import React from "react";
import {
  CommentImage,
  CommentInput,
  CommentInputBox,
  CommentSendIcon,
  Comment_Box_Input,
  SendIcon,
} from "../../../styles/__comment";

const CommentBoxInput = () => {
  return (
    <Comment_Box_Input>
      <CommentImage
        src="https://unsplash.com/photos/3g3V1TWQi8k/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjg4ODA5MTc1fA&force=true&w=640"
        alt="user"
      />
      <CommentInputBox>
        <CommentInput
          type="text"
          className="comment"
          placeholder="write a comment"
        />
        <CommentSendIcon>
          <SendIcon />
        </CommentSendIcon>
      </CommentInputBox>
    </Comment_Box_Input>
  );
};

export default CommentBoxInput;
