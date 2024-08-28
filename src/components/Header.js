
import styles from "./Header.module.css"
function Header(){
    const color = {
        backgroundColor : "black" , 
        color : "red" , 
        padding : "20px" , 
        marginTop : "20px",
        
    }
    return <>
            {/*<h1 style={color}>Hello styling</h1>*/}
            <h1 className={styles.bigblue}>Hello styling</h1>
            <p>Add a little styling</p>
           </>
}





export default Header