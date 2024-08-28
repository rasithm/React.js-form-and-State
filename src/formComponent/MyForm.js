import { useState } from "react";

function MyForm(){
     //const [name , setName] = useState("")
     //const [age , setAge] = useState("")
     //const [email , setEmail] = useState("")
     const [inputs,setInputs] = useState({email:"@gmail.com",country: ""})
     function handlecheck(e) {
        e.preventDefault()
        console.log("form sumbit")
        console.log("current state",/*name,age,email*/inputs )
     }
     function handlechange(e) {
        const name = e.target.name
        const value = e.target.value
        setInputs((previous) => {
            return {...previous,[name] : value}
        })
     }
     
    return <form onSubmit={handlecheck}>
        <label>Enter Name:</label>
        <input type="text" name="name"  onChange={ handlechange /*(e) => {
            setInputs( (previous) => {
                return {...previous,name:e.target.value}})
        }*/}/><br/>     
    

        <label>Enter age:</label>
        <input type="text" name="age" onChange={ handlechange /*(e) => {
            setInputs( (previous) => {
                return{...previous,age:e.target.value}})
        }*/} /><br/>
        

        <label>Enter email:</label>
        <input type="text" name="email" value={inputs.email} onChange={ handlechange /*(e) => {
            setInputs( (previous) => { return {...previous,email:e.target.value}})
        }*/} /><br/>
         

        <lable>Enter country:</lable>
        <select name="country" value={inputs.country} onChange={handlechange}>
            <option value="-">select</option>
            <option value="india">india</option>
            <option value="UK">Unitied states</option>
            <option value="china">China</option>
        </select>
        <input type="submit" value="submit"  /><br/>
    </form>
}
export default MyForm;