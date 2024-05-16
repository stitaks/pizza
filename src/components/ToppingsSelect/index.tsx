import { useState } from "react";
import ITopping from "../../models/Topping";
import Topping from "../Topping";
import './style.css';

interface IToppingsSelectProps {
  toppings: ITopping[]
}

const ToppingsSelect: React.FC<IToppingsSelectProps> = ({ toppings }) => {

  const [selectedToppings, setSelectedToppings] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  
  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>Selected toppings: {selectedToppings}, total price: {totalPrice} Euro</p>

      <div className="toppings">
        {toppings.map((topping) => (
          <Topping 
          topping={topping} 
          key={topping.name} 
          checked={topping.selected} 
          onChange={() => {
            topping.selected = !(topping.selected)
            topping.selected? setSelectedToppings(selectedToppings+1):setSelectedToppings(selectedToppings-1) 
            topping.selected? setTotalPrice(totalPrice+topping.price):setTotalPrice(totalPrice-topping.price) 
          }}  />
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;
