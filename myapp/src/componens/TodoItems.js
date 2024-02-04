import AddTODO from "./AddTODO";
import TodoItem from "./TodoItem";

const TodoItems = ({todoItems}) => {
  return (
    <>
    <div className="item-container">
        <AddTODO/>
        {todoItems.map( item =>  <TodoItem TodoName={item.name} TodoDate={item.date} />)}
    

      </div></>
  )
}

export default TodoItems;