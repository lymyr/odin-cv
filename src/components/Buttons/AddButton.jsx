import "../../styles/Buttons/FieldButton.css"

export default function AddButton({text="Add", handleClick=()=>{}, willDel=false}) {
    return (
            <button
                className={`field-button${willDel ? ' delete' : ""}`}
                onClick={handleClick}
            >
                {text}
            </button>
    )
}