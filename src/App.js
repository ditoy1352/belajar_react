import "./App.css";
import { useState } from "react";

// cara membuat komponen dengan function
const Button = ({ children }) => {
  return <button className="button">{children}</button>;
};

const Square = ({ number }) => {
  const [value, setValue] = useState(null);

  const handleClick = () => {
    setValue('X');
  };

  return (
    <div className="square" onClick={handleClick}>
      {value}
    </div>
  );
};

const App = () => {
  return (
    <div className="container">
      <div className="board">
        <div className="row">
          <Square number={1} />
          <Square number={2} />
          <Square number={3} />
        </div>
        <div className="row">
          <Square number={4} />
          <Square number={5} />
          <Square number={6} />
        </div>
        <div className="row">
          <Square number={7} />
          <Square number={8} />
          <Square number={9} />
        </div>
      </div>
      <div className="info">
        <div className="status">Next player: X</div>
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
