import Items from "./Items";
const FoodItem = ({item}) => {
  return (
    <ul className="list-group">
            {item.map((item) => (
                <Items key={item} foodItem={item}/>
               
            ))}

        </ul>
  );
};

FoodItem.propTypes = {}

export default FoodItem