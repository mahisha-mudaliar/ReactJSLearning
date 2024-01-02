import {useState} from 'react';
function SimpleCounter(){
    let count = 0;
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
<<<<<<< HEAD
export default SimpleCounter;
=======
export default SimpleCounter;
>>>>>>> 14a1936fb9092396351305e31833e64b2ed23036
