import AppName from "./componens/AppName";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import TodoItems from "./componens/TodoItems";
  const todoItems = [{
    name: "Buy Milk",
    date: "4/10/2023",
  },
  {
    name: "Buy Milk",
    date: "4/10/2023",
  },
  {
    name: "This is me Som",
    date: "13/10/2003",
  },
  ];
function App() {
  return (
    <center>
      <AppName />
      <TodoItems todoItems={todoItems}/>
      
    </center>
  );
}

export default App;
