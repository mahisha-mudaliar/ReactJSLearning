function Practice() {
    let count =0;
    function clickedIncreament() {
        count+=1;
        console.log("Clicked on increament", count);
    }
    function clickedDecreament(){
        count-=1;
        console.log("Clicked on decreament", count);       
    }

  return (
    <>
    <div>Value of count:{count}</div>
    <button onClick={clickedIncreament}>Increament</button>
    <button onClick={clickedDecreament}>Decreament</button>
    </>
  )
}
export default Practice;