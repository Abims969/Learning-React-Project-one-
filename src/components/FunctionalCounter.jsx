import {useState} from 'react'

function FunctionalCounter(){
const [counter,setCounter] = useState (0);

const increment = ()=> {
    setCounter(counter +2);
};

const Decrement = () => {
    setCounter(counter -1);
};

    return (
        <div>
            <h1>Functional Component</h1>
            <h3>Counter value is: {counter}</h3>
            <button onClick = {increment}>Increment</button>
            <button onClick = {Decrement}>Decrement</button>
        </div>
    )
}

export default FunctionalCounter;