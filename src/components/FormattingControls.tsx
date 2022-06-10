import {
  FaAlignCenter,
  FaAlignLeft,
  FaAlignRight,
  FaBold,
  FaItalic,
  FaFileImage,
  FaLink,
  FaListOl,
  FaListUl,
  FaStrikethrough,
  FaUnderline,
} from "react-icons/fa";
import {
  applyBold,
  applyItalic,
  applyUnderline,
  applyStrikeThrough,
  applyLink,
  applyUl,
  applyOl,
  applyJustifyLeft,
  applyJustifyCenter,
  applyJustifyRight,
  applyInsertImage,
  applyRandomEmoji,
} from "services/formatting";
import "./formattingControls.css";

const FormattingControls = () => {
  return (
    <div className="controls">
      <button
        className="control control__button"
        onClick={() => applyBold()}
        title="Bold"
      >
        <FaBold />
      </button>
      <button
        className="control control__button"
        onClick={() => applyItalic()}
        title="Italic"
      >
        <FaItalic />
      </button>
      <button
        className="control control__button"
        onClick={() => applyUnderline()}
        title="Bold"
      >
        <FaUnderline />
      </button>
      <button
        className="control control__button"
        onClick={() => applyStrikeThrough()}
        title="Strike through "
      >
        <FaStrikethrough />
      </button>
      <button
        className="control control__button"
        onClick={() => applyLink()}
        title="Insert link"
      >
        <FaLink />
      </button>
      <button
        className="control control__button"
        onClick={() => applyUl()}
        title="Insert bullet list"
      >
        <FaListUl />
      </button>
      <button
        className="control control__button"
        onClick={() => applyOl()}
        title="Insert numbered list"
      >
        <FaListOl />
      </button>
      <button
        className="control control__button"
        onClick={() => applyJustifyLeft()}
        title="Justify left"
      >
        <FaAlignLeft />
      </button>
      <button
        className="control control__button"
        onClick={() => applyJustifyCenter()}
        title="Justify center"
      >
        <FaAlignCenter />
      </button>
      <button
        className="control control__button"
        onClick={() => applyJustifyRight()}
        title="Justify right"
      >
        <FaAlignRight />
      </button>
      <button
        className="control control__button"
        onClick={() => applyInsertImage()}
        title="Insert image"
      >
        <FaFileImage />
      </button>
      <button
        className="control control__button control__button--emoji"
        onClick={() => applyRandomEmoji()}
        title="Insert random emoji"
      >
        🥸
      </button>
    </div>
  );
};

export default FormattingControls;
