import { useState } from "react";
function List() {
    const [List , setList ] = useState([])
    const [Count , setCount] = useState(1)
    function item() {
        setList(pre => {
            return [...pre,"item"+Count]
        })
        setCount(pre => {
            return pre+1
        })
    }
    return <>
        <h1>list Item</h1>
        <button onClick={item}>add List</button>
        <ul>{
            List.map((el,index) =>
            <li key={index}>{el}</li>
            )
        }
        </ul>
        </>
}

export default List     