import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import ErrorMessage from "./components/ErrorMessage";
import FoodItem from "./components/FoodItem";
import Container from "./components/Container";
import Foodinput from "./components/Foodinput";
import { useState } from "react";
function App() {
  //  let foodItem = []
  let [foodItem,setfoodItem]=useState([])
  // let [textToShow,settextToShow]=useState()
  const onKeyDown = (e) =>{
    if(e.key==="Enter"){
      let nweFoodItem =e.target.value;
      let newItem=[...foodItem,nweFoodItem]
      setfoodItem(newItem)
    }
  };
  
  return (
    <>
    <Container>
      <h1 className="heading">Health Food</h1>
      <Foodinput handleKeyDown={onKeyDown}/>
      <ErrorMessage list={foodItem} />
      <FoodItem item={foodItem} />
      
    </Container>
     </>
    
  );
};

export default App;
