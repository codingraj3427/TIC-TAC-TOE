import React,{useState} from "react";
import Board from "./components/Board";
import History from "./components/History";
import StatusMessage from "./components/StatusMessage";
import { calculateWinner } from "./components/helpers";
import "./Style/root.scss";

function App() {


  // This is for maintaining the history of the game
  const [history,setHistory]= useState([
    {board:Array(9).fill(null),isXNext:true}]);

    // This is for current move
    const[currentmove,setCurrentmove]=useState(0);
    const current=history[currentmove];


const winner=calculateWinner(current.board);


  const handleSquareClick=(position)=>
{

     if(current.board[position] || winner)
     {
       return;
     }

      setHistory((prev)=>
      {
         
        const last =prev[prev.length - 1];




         const newBoard= last.board.map((square,pos)=>
         {
           if(pos===position)
           {
             return last.isXNext ? 'X':'O'
           }

           return square;
         });         
         
         return prev.concat({board:newBoard,isXNext:!last.isXNext})
      });

      setCurrentmove(prev=> prev+1);
      

  };
  const moveTo = move => {
    setCurrentmove(move);
  };

  return (

    <div className="app">
    <h1>TiC TAC TOE</h1>
    <StatusMessage winner={winner} current={current} />
    <Board board={current.board} handleSquareClick={handleSquareClick}/>
    <History history={history} moveTo={moveTo} currentMove={currentmove} />
  </div>
    );
  }
  export default App;


