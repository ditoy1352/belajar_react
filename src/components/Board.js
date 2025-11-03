import Square from "./Square";
const Board = ({ board, handlesquareClick }) => {
  return (
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
   )
};

export default Board;
