import React from "react";
class Apple extends React.Component {
    render(){
        const {appleinfo} = this.props
        const {type,color,place} = appleinfo
        const apple = `i'm an ${type} with ${color} color agried by ${place}`
        return(
            <h2>{apple}</h2>
        )
    }
}
export default Apple