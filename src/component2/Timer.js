import { useEffect, useState } from "react"

function Timer() {
    const [Count , setCount] = useState(0)
    useEffect(() => {
        console.log("screen update")
        check()

    })
    const update = () => {
         setCount( (pre) => {
            return pre+1
        })
    }
    const check = () => {
        if(Count > 10){
            setCount(1)
        }
    }
    return <>
        <h1>Youtube Like {Count}</h1>
        <button onClick={update}>Likes</button>
    </>

}
export default Timer;