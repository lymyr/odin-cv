import "../styles/GroupField.css"
export default function GroupField({text="", children}) {
    return (
        <fieldset>
            <legend>{text}</legend>
            {children}
        </fieldset>
    );
}