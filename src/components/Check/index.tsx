import React, { useState } from 'react';
import './style.css';

interface CheckProps {
  checked: boolean;
  onChange: any; 
  }


const Check : React.FC<CheckProps> = ({ checked, onChange})  => {
  
  return (
    <button
      className="check"
      onClick={onChange}
    >
      {checked ? '✓' : ''}
    </button>
  )
};

export default Check;
