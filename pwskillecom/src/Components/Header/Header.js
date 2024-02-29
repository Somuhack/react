/* eslint-disable no-unused-vars */
import { FaCartShopping } from "react-icons/fa6";
function Header(){
    return(
        <div className="Header">
             {/* <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1637759004/Croma%20Assets/CMS/Category%20icon/Final%20icon/Croma_Logo_acrkvn.svg"  className="header-icon"/> */}
             <input placeholder="Search Here..."/>
            <span>
            <FaCartShopping color="white"/>
            </span>
        </div>
    )
}
