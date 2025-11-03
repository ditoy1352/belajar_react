import Button from "./Button"; 

const GameInfo = ({ winner, isXNext, handleResetGameClick }) => {
  return (
    <div className="info">
      <div className="status">
        {winner ? (
          <p>Winner: {winner}</p>
        ) : (
          <p>Next Player: {isXNext ? "X" : "O"}</p>
        )}
      </div>
      <Button onClick={handleResetGameClick}>New Game</Button>
    </div>
  );
};

export default GameInfo;