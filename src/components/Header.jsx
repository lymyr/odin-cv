import "../styles/Header.css"

export default function Header({handleClick=()=>{}}) {
    return (
        <header>
            <div>
                <h1>Odin CV</h1>
                <button onClick={handleClick}>Submit</button>
            </div>
        </header>
    )   
}