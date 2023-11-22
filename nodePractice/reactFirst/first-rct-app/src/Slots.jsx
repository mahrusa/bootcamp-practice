export default function Slots({val1, val2, val3}){
    const isEq = val1===val2 && val2===val3;
    const col = {color: isEq? "green" : "red"};

    return (
        <div>
            <h1>{val1} {val2} {val3}</h1>
            <h2 style={col}>{isEq? "You win!" : "You lose :("}</h2>
            {isEq && <h3>Congrats!</h3> }

        </div>
    )
}