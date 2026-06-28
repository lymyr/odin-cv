import "../styles/Input.css"

export default function Input({label="", type="text", id}) {
    return (
        <div className="input-label">
            <label for={id}>{label}</label>
            <input id={id} type={type}></input>
        </div>
    )
}