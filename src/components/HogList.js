function HogList({ specialty, weight }) {
  return (
    <div className="pigTile">
      <h3>{specialty}</h3>
      <p>{weight}</p>
    </div>
  );
}

export default HogList;
