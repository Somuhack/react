import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import ErrorMessage from "./components/ErrorMessage";
import FoodItem from "./components/FoodItem";
function App() {
  //  let foodItem = []
  let foodItem = ['Dal','Vegitable','Panir','Rice','salad','Milk']
  // let emptyMassage= foodItem.length===0 ? <h1>i am still Hungry</h1> : null
  return (
   <>
   <h1>Health Food</h1>
    <ErrorMessage list={foodItem} />
   <FoodItem item={foodItem} />
   </>
  );
}

export default App;
