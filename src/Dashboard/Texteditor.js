import React, { useCallback } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

function Texteditor() {
  const wrapperRef = useCallback((wrapper) => {
    if (wrapper == null) return;
    wrapper.innerHTML = "";
    const editor = document.createElement("div");
    wrapper.append(editor);
    new Quill(editor, { theme: "snow" });
  }, []);
  return <div className="container" ref={wrapperRef}></div>;
}

export default Texteditor;
