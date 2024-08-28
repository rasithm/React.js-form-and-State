import Car from "./Car"
import Apple from "./Apple"
function Coder(){
  const door = true
    const carinfo = {brand : "BMW" , color:"White" , CC :"112"}
   // const carinfo = {}
    const appleinfo = {
      type:"mavuapple" , 
      color: "red" , 
      place : "kasmir"
    }
    const carList = [
      {color: "black" , brand : "tesla" , CC : "500"},
      {color : "orange" , brand : "Ford" , CC : "400"},
      {color : "red" , brand : "suzuki" , CC : "200"}
    ]
  
    const listNumber = [1,2,3,4,5,6,7,8,9,0]


    const showCarInfo = carinfo.brand !== undefined && carinfo.color !== undefined && carinfo.CC !== undefined
    return (
      <div>
        <h2>i'm rasith</h2>
        {showCarInfo ? <Car carinfo = {carinfo}/> : null }
        <Apple appleinfo = {appleinfo}/>
        {door && <h2>door as been open</h2>}
        <ul>
          {carList.map(
            (carinfo) => 
              <li key={carinfo.brand}>
                <Car carinfo = {carinfo} />
              </li>
            )}
        </ul>
        <ul>
          {listNumber.map((e,index) => 
          <p key={index}>{e}</p>
          )}
        </ul>
      </div>
    )
  }
  export default Coder