import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import ErrorMessage from "./components/ErrorMessage";
import FoodItem from "./components/FoodItem";
import Container from "./components/Container";
import Foodinput from "./components/Foodinput" ;

function App() {
  //  let foodItem = []
  let foodItem = ['Dal', 'Vegitable', 'Panir', 'Rice', 'salad', 'Milk']
  // let emptyMassage= foodItem.length===0 ? <h1>i am still Hungry</h1> : null
  return (
    <Container>
      <h1 className="heading">Health Food</h1>
      <Foodinput/>
      <ErrorMessage list={foodItem} />
      <FoodItem item={foodItem} />
    </Container>
  );
};

export default App;
