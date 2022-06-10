import "./formattingControls.css";

interface Props {
    applyFormat(callable: () => void): void;
}

const FormattingControls = ({ applyFormat }: Props) => {
    return (
        <div className="controls">
            <button className="control control__button control__bold">B</button>
            <button className="control control__button control__italics">I</button>
            <button className="control control__button control__underline">U</button>
            <input className="control control__color" type="text" placeholder="#000000" />
            <input className="control control__link" type="text" placeholder="https://example.com" />
        </div>
    )
}

export default FormattingControls;