import { useState } from 'react';


function Square({ value, onSuperClick }) {

  // const [current, setValue] = useState(null);
  return <button className="square" onClick={onSuperClick}>{value}</button>
}



export default function Board() {

  const [isX, setXtoNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));


  // assiging the value to board "o" and "x"

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextsquares = squares.slice();
    if (isX) {
      nextsquares[i] = 'x';
    } else {
      nextsquares[i] = 'o';
    }
    setSquares(nextsquares);
    setXtoNext(!isX);
    console.log(nextsquares);

  }

  //end assiging the value to board "o" and "x"//

//check winner //
  const winnerresult = calculateWinner(squares);

  let status;
  if (winnerresult) {
    status = "winner is " + winnerresult;
  } else {
    status = "Next Chance is : " + (isX ? "x" : "o");
  }
// end check winner here //////


  //to reset the game and value////////
  function resetByDefault() {
    setSquares(Array(9).fill(null));
    setXtoNext(true);
    console.log(squares)

  }
  // to reset the game code end //


  return (

    <>
      <div className="container">
        <button onClick={() => resetByDefault()}>Reset</button>
        <h1>{status}</h1>
        <div className="row-disc">
          <Square value={squares[0]} onSuperClick={() => { handleClick(0) }} />
          <Square value={squares[1]} onSuperClick={() => { handleClick(1) }} />
          <Square value={squares[2]} onSuperClick={() => { handleClick(2) }} />
        </div>
        <div className="row-disc">
          <Square value={squares[3]} onSuperClick={() => { handleClick(3) }} />
          <Square value={squares[4]} onSuperClick={() => { handleClick(4) }} />
          <Square value={squares[5]} onSuperClick={() => { handleClick(5) }} />
        </div>
        <div className="row-disc">
          <Square value={squares[6]} onSuperClick={() => { handleClick(6) }} />
          <Square value={squares[7]} onSuperClick={() => { handleClick(7) }} />
          <Square value={squares[8]} onSuperClick={() => { handleClick(8) }} />
        </div>
      </div>
    </>
  )

}


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}