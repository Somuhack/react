/* eslint-disable no-template-curly-in-string */
import style from "./items.module.css";

const Items = ({foodItem}) => {
    const handleonClicked = (e) =>{
        console.log(`${foodItem} button clicked.`)
        console.log(e);
    
    }
    return (
        <li  className="list-group-item">
            {foodItem}
            <button className={`${style.btn} btn btn-info`}
            onClick={(e) => handleonClicked(e)}
            >Buy</button>
            </li>
    );
};
export default Items;