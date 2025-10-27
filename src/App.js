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
  const handlesquareClick = () => {
    setIsXNext(!isXNext);
    console.log("handle click");
  };

  return (
    <div className="container">
      <div className="board">
        <div className="row">
          <Square number={1} onClick={handlesquareClick}/>
          <Square number={2} onClick={handlesquareClick}/>
          <Square number={3} onClick={handlesquareClick}/>
        </div>
        <div className="row">
          <Square number={4} onClick={handlesquareClick}/>
          <Square number={5} onClick={handlesquareClick}/>
          <Square number={6} onClick={handlesquareClick}/>
        </div>
        <div className="row">
          <Square number={7} onClick={handlesquareClick}/>
          <Square number={8} onClick={handlesquareClick}/>
          <Square number={9} onClick={handlesquareClick}/>
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
