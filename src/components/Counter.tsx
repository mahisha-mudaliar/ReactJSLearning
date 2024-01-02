import { useState } from "react";
 
function Counter() {
    let count=0;
    const[counter, setCounter] = useState(0);
    function clickedIncrement(){
        count+=1;
        console.log("Clicked on Counterincreament", count);
    }
    function clickedDecreament(){
        count-=1;
        console.log("Clicked on Counterdecreament", count);  
    }
    function clickedCounterIncreament() {
        setCounter(counter+1);
        console.log("Clicked on Counterincreament", count);
    }
    function clickedCounterDecreament(){
        setCounter(counter-1);
        console.log("Clicked on Counter decreament", count);      
    }
  return (
    <>
    <h5>Using JS</h5>
    <div>Value of count:{count} which is a {(count % 2 ==0) ? 'Even':'Odd'} value</div>
    <button onClick={clickedIncrement}>Increament</button>
    <button onClick={clickedDecreament}>Decreament</button><br /><br />
    <h5>Using useStateHook</h5>
    <div>Value of counter:{counter} which is a {(counter % 2 ==0) ? 'Even':'Odd'} </div>  
    <button onClick={clickedCounterIncreament}>Increament</button>
    <button onClick={clickedCounterDecreament}>Decreament</button>
    </>
  )
}
export default Counter;