import React from 'react';
import "./Square.style.css"

const Square = ({value}) => {    //Here we are destructing the object
  return (
    
     <button type="button">{value}</button>
    
  )
}

export default Square;