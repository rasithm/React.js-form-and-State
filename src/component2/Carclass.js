import React from "react";
class Carclass extends React.Component{
    constructor(){
        super()
        this.state = { Color:"Blue", model : "Ford"}
    }
    render(){
        return <>
            <h1> this use on class with state change color on {this.state.Color} and shows model on {this.state.model}</h1>
            <button onClick={
                () => {
                    this.setState( preview => { return{ ... preview,Color:"green",model:"bukati"} })
                        }   
                }>Change Color</button>
             </>
    }
}
export default Carclass    