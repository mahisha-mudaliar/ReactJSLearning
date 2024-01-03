import { useState } from "react";
function Counter2(){
    let count = 0;
    const [counter, setCounter]= useState(0)
    function increament(){
        setCounter(counter+1)
    }
    return(
        <>
        <div><b>Value of count:{count} </b></div>
        <button onClick={increament}>Inc</button>
        </>
    )
}
export default Counter2;
