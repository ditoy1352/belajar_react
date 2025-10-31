import "./App.css";
import { useState } from "react";

// cara membuat komponen dengan function
const Button = ({ children, onClick }) => {
  return <button className="button">{children}</button>;
};

const Square = ({ number, onClick }) => {
  return (
    <div className="square" onClick={onClick}>
      {number}
    </div>
  );
};

function calculateWinner(board) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

const App = () => {

  const [isXNext, setIsXNext] = useState(false);
  const [board, setBoard] = useState(Array(9).fill(null));
  const winner = calculateWinner(board);

  const handleResetGameClick = () => {
    setIsXNext(false);
    setBoard(Array(9).fill(null));
  }
  const handlesquareClick = (index) => {
    if (winner) return;
    setBoard((currboard) => {
      const boardCopy = [...currboard];

      if (boardCopy[index]) {
        return boardCopy;
      };
      
      boardCopy[index] = isXNext ? "X" : "O";

      setIsXNext(!isXNext);

      return boardCopy;
    })
  };



  return (
    <div className="container">
      <div className="board">
        <div className="row">
          <Square number={board[0]} onClick={() => handlesquareClick(0)}/>
          <Square number={board[1]} onClick={() => handlesquareClick(1)}/>
          <Square number={board[2]} onClick={() => handlesquareClick(2)}/>
        </div>
        <div className="row">
          <Square number={board[3]} onClick={() => handlesquareClick(3)}/>
          <Square number={board[4]} onClick={() => handlesquareClick(4)}/>
          <Square number={board[5]} onClick={() => handlesquareClick(5)}/>
        </div>
        <div className="row">
          <Square number={board[6]} onClick={() => handlesquareClick(6)}/>
          <Square number={board[7]} onClick={() => handlesquareClick(7)}/>
          <Square number={board[8]} onClick={() => handlesquareClick(8)}/>
        </div>
      </div>
      <div className="info">
        <div className="status">
          {winner ? (
            <p>Winner: {winner}</p>
          ) : (
            <p>Next Player: {isXNext ? "X" : "O"}</p>
          )}
          </div>
        <Button onClick={handleResetGameClick}>New Game</Button>
        <div className="history">
          <p>history</p>
          <Button>step 1</Button>
          <Button>step 2</Button>
          <Button>step 3</Button>
        </div>
      </div>
      <br />
    </div>
  );
};
export default App;
