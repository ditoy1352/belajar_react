import "./App.css";
import { useState } from "react";
import Board from "./components/Board";
import GameInfo from "./components/GameInfo";
import Timeline from "./components/Timeline";

// cara membuat komponen dengan function

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
  };
  const handlesquareClick = (index) => {
    if (winner) return;
    setBoard((currboard) => {
      const boardCopy = [...currboard];

      if (boardCopy[index]) {
        return boardCopy;
      }

      boardCopy[index] = isXNext ? "X" : "O";

      setIsXNext(!isXNext);

      return boardCopy;
    });
  };

  return (
    <div className="container">
      <Board board={board} handlesquareClick={handlesquareClick} />
      <div>
        <GameInfo
          winner={winner}
          isXNext={isXNext}
          handleResetGameClick={handleResetGameClick}
        />
        <Timeline/>
      </div>
      <br />
    </div>
  );
};
export default App;
