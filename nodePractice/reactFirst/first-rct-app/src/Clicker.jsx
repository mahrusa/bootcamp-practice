export default function Clicker({message, buttonText}){
    return (
        <div>
        <button onClick={() => alert(message)}>{buttonText}</button>

        </div>
    )
}



// for events: onSomeEvent = {callback function for event}