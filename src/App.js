import "./App.css";
import { useState } from "react";

// cara membuat komponen dengan function
const Button = ({ children }) => {
  return <button className="button">{children}</button>;
};

const Square = ({ number, onClick }) => {
  return (
    <div className="square" onClick={onClick}>
      {number}
    </div>
  );
};

const App = () => {

  const [isXNext, setIsXNext] = useState(false);
  const [board, setBoard] = useState(Array(9).fill(null));
  const handlesquareClick = (index) => {
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
        <div className="status">Next player: {isXNext ? "X" : "O"}</div>
        <Button className="">New Game</Button>
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
