import "../styles/Form.css"

export default function Input({label="", type="text", id, value="", handleChange=()=>{}}) {
    return (
        <div className="input-label">
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} onChange={handleChange} value={value}></input>
        </div>
    )
}