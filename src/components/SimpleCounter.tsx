import {useState} from 'react';
function SimpleCounter(){
    // let count = 0;
    const [counter, setCounter]=useState(0)
    function counterIncrement(){
        setCounter(counter+1);
        console.log(counter);
        
    }
    function counterDecrement(){
        setCounter(counter-1);
    }
    return(
        <>
        <div>
            Value : {counter}
        </div>
        <button onClick={counterIncrement}>Increment</button>
        <button onClick={counterDecrement}>Decrement</button>
        </>
    )
}

export default SimpleCounter;

