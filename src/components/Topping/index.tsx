import React, { useState } from 'react';
import Check from '../Check';
import ITopping from '../../models/Topping';
import './style.css';

interface IToppingProps {
  topping: ITopping;
  checked: boolean;
  onChange: any; 
  }


const Topping : React.FC<IToppingProps> = ({ topping, checked, onChange }) => {

  
  return (
    <div className="topping">
      <Check 
      checked={checked}
      onChange={onChange} />
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  );
};

export default Topping;
