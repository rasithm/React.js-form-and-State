function Car(props){
    const {carinfo}=props
    const {brand,color,CC} = carinfo
    const text = `hi i'm an ${color} ${brand} Car CC on ${CC}`
    return ( 
        <h2>{text}</h2>
    );
  }
  
  
  export default Car