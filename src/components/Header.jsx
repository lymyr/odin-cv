import "../styles/Header.css"

export default function Header({userStatus, setUserStatus}) {
    function handleClick() {
        userStatus === 'typing' ? setUserStatus('viewing') : setUserStatus('typing');
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