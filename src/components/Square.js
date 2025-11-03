const Square = ({ number, onClick }) => {
  return (
    <div className="square" onClick={onClick}>
      {number}
    </div>
  );
};

export default Square;