import React from "react";


function Square({value,onClick, isWinningSquare}) {    // Here we are destructing the object
  return (
    
     <button  type="button"
     onClick={onClick}
     className={`square ${isWinningSquare ? 'winning' : ''} ${
       value === 'X' ? 'text-green' : 'text-orange'
     }`}
   >
       {value}</button>
    
  )
}

export default Square;