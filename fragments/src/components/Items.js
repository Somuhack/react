/* eslint-disable no-template-curly-in-string */
import style from "./items.module.css";

const Items = ({foodItem,bought,handleBuyButton}) => {

    return (
        <li  className={`list-group-item ${bought && 'active'}`}>
            {foodItem}
            <button className={`${style.btn} btn btn-info `}
            onClick={handleBuyButton}
            >Buy</button>
            </li>
    );
};
export default Items;