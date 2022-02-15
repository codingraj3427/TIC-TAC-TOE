import React from "react";


function Square({value,onClick, isWinningSquare}) {    // Here we are destructing the object
  return (
    
     <button type="button" className="square" 
      onClick={onClick}
      style={{fontWeight: isWinningSquare ? 'bold' : 'normal'}}>
       {value}</button>
    
  )
}

export default Square;