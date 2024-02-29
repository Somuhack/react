import { useState } from "react";
import Items from "./Items";
const FoodItem = ({ item }) => {
  let [activeItems,setActiveItems]=useState([]);
  let onBuyButton=(item,event)=>{
      
       setActiveItems([...activeItems,item]);
  }
  return (
    <ul className="list-group">
      {item.map((item) => (
        <Items 
        key={item} 
        foodItem={item} 
        bought={activeItems.includes(item)}
        handleBuyButton={(event)=>{onBuyButton(item,event)}}/>

      ))}

    </ul>
  );
};
export default FoodItem;