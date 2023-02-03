const Line = ({ data }) => {
  return (
    <div className="line">
      <span>{data.symbol}</span>
      <span>{data.title}</span>
    </div>
  );
};

export default Line;
