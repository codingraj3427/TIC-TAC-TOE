import React from "react";


function Square({value}) {    // Here we are destructing the object
  return (
    
     <button type="button" className="square">{value}</button>
    
  )
}

export default Square;