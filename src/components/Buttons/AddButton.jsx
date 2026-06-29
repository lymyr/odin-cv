import "../../styles/Form.css"

export default function AddButton({text="Add", handleClick=()=>{}, willDel=false}) {
    return (
            <button
                className={`field-button${willDel ? ' delete' : ""}`}
                onClick={(e) => {
                    e.preventDefault()
                    handleClick()
                }}
            >
                {text}
            </button>
    )
}