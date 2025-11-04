import "./App.css";
import { useState } from "react";
import Board from "./components/Board";
import GameInfo from "./components/GameInfo";
import Timeline from "./components/Timeline";
import calculateWinner from "./utils/CalculateWinner";

// cara membuat komponen dengan function

const App = () => {
  const [timeline, setTimeline] = useState([
    {
      isXNext: false,
      board: Array(9).fill(null),
    },
  ]);

  const [currentStep, setCurrentStep] = useState(0);
  const board = timeline[currentStep].board;
  const isXNext = timeline[currentStep]?.isXNext || false;
  const winner = calculateWinner(board);
  const handleResetGameClick = () => {
    setTimeline([{
      isXNext: false,
      board: Array(9).fill(null)
    }]);
    setCurrentStep(0);
  };
  const handlesquareClick = (index) => {
    if (winner) return;

    const newBoard = [...board];

    if (newBoard[index]) {
      return;
    }

    // Isi kotak dengan X atau O
    newBoard[index] = isXNext ? "X" : "O";

    setTimeline([
      ...timeline.slice(0, currentStep + 1),
      {
        board: newBoard,
        isXNext: !isXNext,
      },
    ]);
    setCurrentStep(currentStep + 1);
  };

  const handleItemTimelineClick = (index) => {
    setCurrentStep(index);
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
        <Timeline
          timeline={timeline}
          onItemTimelineClick={handleItemTimelineClick}
        />
      </div>
      <br />
    </div>
  );
};
export default App;
