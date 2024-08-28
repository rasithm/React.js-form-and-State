import { useState } from "react";
function Scooter(){
    /*const [Color,setColor] = useState("red") 
    const [Brand, setBrand] = useState("Suzuki")
    const [CC , setCC] = useState("125")
    const [Year , setYear] = useState("2020")*/
    const [Scooter, setScooter] = useState({
        Color : "red" , 
        Brand : "suzuki" ,
        CC : "130" ,
        Year :  "2023"
    })
    const Color = () => {
        setScooter(
            preview => {
                return{...preview,Color:"orange"}
            }
        )
    }
    return <>
        <h1>Scooter</h1>
        <p>brand : {Scooter.Brand}</p>
        <p>Color : {Scooter.Color}</p>
        <p>CC : {Scooter.CC}</p>
        <p>Year : {Scooter.Year}</p>
        {/*<button onClick={
            () => {
                setScooter({
                    Color : "black" ,
                    Brand : "bukati" , 
                    CC : "550" ,
                    Year : " 2025"
                })  
            }</>
        }>changer Item</button>*/}
        <button onClick={Color}>change color</button>
        </>

}
export default Scooter