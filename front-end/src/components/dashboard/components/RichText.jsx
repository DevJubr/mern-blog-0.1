import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";

const RichText = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  return (
    <JoditEditor
      ref={editor}
      value={content}
      // config={config}
      tabIndex={1} // tabIndex of textarea
      onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
      onChange={(e) => setContent(e.target.value)}
    />
  );
};

export default RichText;
