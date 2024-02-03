import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
let fragments = ['Dal','Vegitable','Panir','Rice']

function App() {
  return (
   <>
   <h1>Fragments</h1>
   <ul className="list-group">
    {fragments.map((item)=>(
       <li key={item} className="list-group-item">{item}</li>
       ))}
 
   </ul>
   </>
  );
}

export default App;
