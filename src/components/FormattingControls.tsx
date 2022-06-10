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
        className="control control__button control__bold"
        onClick={() => applyBold()}
        title="Bold"
      >
        B
      </button>
      <button
        className="control control__button control__italic"
        onClick={() => applyItalic()}
        title="Italic"
      >
        I
      </button>
      <button
        className="control control__button control__underline"
        onClick={() => applyUnderline()}
        title="Bold"
      >
        U
      </button>
      <button
        className="control control__button control__strike-through"
        onClick={() => applyStrikeThrough()}
        title="Strike through "
      >
        S
      </button>
      <button
        className="control control__button"
        onClick={() => applyLink()}
        title="Insert link"
      >
        A
      </button>
      <button
        className="control control__button"
        onClick={() => applyUl()}
        title="Insert bullet list"
      >
        UL
      </button>
      <button
        className="control control__button"
        onClick={() => applyOl()}
        title="Insert numbered list"
      >
        OL
      </button>
      <button
        className="control control__button"
        onClick={() => applyJustifyLeft()}
        title="Justify left"
      >
        L
      </button>
      <button
        className="control control__button"
        onClick={() => applyJustifyCenter()}
        title="Justify center"
      >
        C
      </button>
      <button
        className="control control__button"
        onClick={() => applyJustifyRight()}
        title="Justify right"
      >
        R
      </button>
      <button
        className="control control__button"
        onClick={() => applyInsertImage()}
        title="Insert image"
      >
        IM
      </button>
      <button
        className="control control__button"
        onClick={() => applyRandomEmoji()}
        title="Insert random emoji"
      >
        🥸
      </button>
    </div>
  );
};

export default FormattingControls;
