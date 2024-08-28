import { useState } from "react";
function Colorchange() {
    let [Color,setColor] = useState("Blue")
    return <>
        <h1>my shirt color is {Color}</h1>
        <button onClick={
            () => {
                setColor("Red")
            }
        }
        >Change Color</button>
    </>
}
export default Colorchange