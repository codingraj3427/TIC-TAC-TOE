import React from "react";


function Square({value,onClick}) {    // Here we are destructing the object
  return (
    
     <button type="button" className="square" 
      onClick={onClick}
      >
       {value}</button>
    
  )
}

export default Square;