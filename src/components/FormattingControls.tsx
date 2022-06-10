import {
  applyBold,
  applyItalic,
  applyUnderline,
  applyLink,
  applyUl,
  applyOl,
  applyJustifyLeft,
  applyJustifyCenter,
  applyJustifyRight,
  applyInsertImage,
} from "services/formatting";
import "./formattingControls.css";

const FormattingControls = () => {
  return (
    <div className="controls">
      <button
        className="control control__button control__bold"
        onClick={() => applyBold()}
      >
        B
      </button>
      <button
        className="control control__button control__italic"
        onClick={() => applyItalic()}
      >
        I
      </button>
      <button
        className="control control__button control__underline"
        onClick={() => applyUnderline()}
      >
        U
      </button>
      <button className="control control__button" onClick={() => applyLink()}>
        A
      </button>
      <button className="control control__button" onClick={() => applyUl()}>
        UL
      </button>
      <button className="control control__button" onClick={() => applyOl()}>
        OL
      </button>
      <button
        className="control control__button"
        onClick={() => applyJustifyLeft()}
      >
        L
      </button>
      <button
        className="control control__button"
        onClick={() => applyJustifyCenter()}
      >
        C
      </button>
      <button
        className="control control__button"
        onClick={() => applyJustifyRight()}
      >
        R
      </button>
      <button
        className="control control__button"
        onClick={() => applyInsertImage()}
      >
        IM
      </button>
    </div>
  );
};

export default FormattingControls;
