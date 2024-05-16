import { useState } from "react";
import ITopping from "../../models/Topping";
import Topping from "../Topping";
import './style.css';

interface IToppingsSelectProps {
  toppings: ITopping[]
}

const ToppingsSelect: React.FC<IToppingsSelectProps> = ({ toppings }) => {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
  };
  
  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>Selected toppings: 0, total price: 0 Euro</p>

      <div className="toppings">
        {toppings.map((topping) => (
          <Topping topping={topping} key={topping.name} checked={checked} onChange={handleClick}  />
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;
