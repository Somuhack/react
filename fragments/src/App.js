import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
function App() {
  let foodItem = ['Dal','Vegitable','Panir','Rice']
   //let foodItem = []

  if(foodItem.length===0){
    return <h1>i am still Hungry</h1>
  }
  return (
   <>
   <h1>Fragments</h1>
   <ul className="list-group">
    {foodItem.map((item)=>(
       <li key={item} className="list-group-item">{item}</li>
       ))}
 
   </ul>
   </>
  );
}

export default App;
