import styles from "./Foodinput.module.css";
const Foodinput = () =>{
    const handleonChange = (e) =>{
        console.log(e.target.value)
    };

    return(
        < input
           type= "text"
           placeholder = "Enter your text here"  
           className={styles.foodinput}
           onChange={handleonChange} 
        />
    );
};
export default Foodinput;