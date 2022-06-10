export const applyBold = () => {
  document.execCommand("bold");
};

export const applyItalic = () => {
  document.execCommand("italic");
};

export const applyUnderline = () => {
  document.execCommand("underline");
};

export const applyLink = () => {
  const url = window.prompt("Image URL");

  if (!url) {
    return false;
  }

  document.execCommand("createLink", false, url);
};

export const applyUl = () => {
  document.execCommand("insertUnorderedList");
};

export const applyOl = () => {
  document.execCommand("insertOrderedList");
};

export const applyJustifyLeft = () => {
  document.execCommand("justifyLeft");
};

export const applyJustifyCenter = () => {
  document.execCommand("justifyCenter");
};

export const applyJustifyRight = () => {
  document.execCommand("justifyRight");
};

export const applyInsertImage = () => {
  const src = window.prompt("Image URL");

  if (!src) {
    return false;
  }

  document.execCommand("insertImage", false, src);
};
