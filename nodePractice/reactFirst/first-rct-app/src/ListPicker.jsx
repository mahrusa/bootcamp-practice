export default function ListPicker({values}){
    const randInd = Math.floor(Math.random() * values.length);
    const randEl = values[randInd];
    const isEven = randEl%2===0;
    const pStyle = {color : isEven? "green" : "red"};
    const liV = values.map((val) => <li>{val}</li> );
    return (
        <div>
            <p>List of values:  </p>
            <ul>{liV}</ul>
            <p style={pStyle}>Random number from list: {randEl}</p>

            { isEven ? <span>Even</span> : <p>Odd</p>}

            {randEl===1 && <h5>your number is 1</h5> }
        </div>
    );
}

// one way of conditional rendering: choosing btn 2 elements
// {randEl%2===0 ? <span>Even</span> : <p>Odd</p>}

// another way: for one or none
// randEl===1 && <h5>your number is 1</h5> }

// dynamic styling:
// const pStyle = {color : isEven? "green" : "red"};

// use map method to render arrays: 
//  const liV = values.map((val) => <li>{val}</li> );
