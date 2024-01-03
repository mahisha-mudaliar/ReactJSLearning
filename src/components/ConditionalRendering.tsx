import {useState} from 'react';

function ConditionalRendering(){
    const[todos, setTodos] = useState(["t1","t2"])
    return (
        <>
        <h1>Todo List</h1>
        {todos.map((val)=> <li>{val}</li>)}
        <button onClick={() => setTodos([...todos,'todo3'])}>Click</button>
        </>
    )
}
export default ConditionalRendering;