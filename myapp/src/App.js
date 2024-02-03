import AddTODO from "./componens/AddTODO";
import AppName from "./componens/AppName";
import TodoItem from "./componens/TodoItem";
import TodoItem1 from "./componens/TodoItem1";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";



function App() {
  return (
    <center>
      <AppName/>
      <div className="item-container">
      <AddTODO/>
      <TodoItem/>
      <TodoItem1/>
      </div>
    </center>
  );
}

export default App;
