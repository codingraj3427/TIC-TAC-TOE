import React,{useState} from "react";
import Board from "./components/Board";
import History from "./components/History";
import StatusMessage from "./components/StatusMessage";
import { calculateWinner } from "./components/helpers";
import "./Style/root.scss";




// eslint-disable-next-line camelcase
const New_Game=
[

  {board:Array(9).fill(null),isXNext:true},

];


function  App() 

{

  // This is for maintaining the history of the game
  const [history,setHistory]= useState(New_Game);

    // This is for current move
    const[currentmove,setCurrentmove]=useState(0);
    const current=history[currentmove];


const {winner,winningSquares}=calculateWinner(current.board);


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

  function onNewGame()
  {
    setHistory(New_Game);
    setCurrentmove(0);
  }

  return (

    <div className="app">
    <h1>TiC <span className="text-green">TAC</span> TOE</h1>
    <StatusMessage winner={winner} current={current} />
    <Board board={current.board} 
    handleSquareClick={handleSquareClick}
    winningSquares={winningSquares}/>
    <button type="button" onClick={onNewGame} className={`btn-reset ${winner ?  'active': ' ' }`}>Start new game</button>
    <h2 style={{ fontWeight: 'normal' }}>Current game history</h2>
    <History history={history} moveTo={moveTo} currentMove={currentmove} />
    <div className="bg-balls" />
  </div>
    );
  }
  export default App;


