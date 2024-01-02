import {useState} from 'react';

function ConditionalRendering(){
    const[todos, setTodos] = useState(["t1","t2"])
    return (
        <>
        <h1>Todo List</h1>
        {todos.map((value)=> <li>{value}</li>)}
        </>
    )
}
export default ConditionalRendering;