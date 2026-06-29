import "../styles/Header.css"

export default function Header({userStatus, setUserStatus}) {
    function handleClick() {
        setUserStatus(userStatus === 'typing' ? 'viewing' : 'typing');
    }

    return (
        <header>
            <div>
                <h1>Odin CV</h1>
                <button onClick={handleClick}>{userStatus === 'typing' ? 'Submit' : 'Edit'}</button>
            </div>
        </header>
    )   
}