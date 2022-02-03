import { useState } from "react";
import HogList from "./HogList";

function Tile({ name, specialty, weight, medal, image }) {
  const [tileClick, setTileClicked] = useState(false);

  function handleTileClick() {
    setTileClicked((tileClick) => !tileClick);
  }

  return (
    <div onClick={handleTileClick} className="pigTile">
      <h2>{name}</h2>
      <img src={image} alt="pig image" />
      {tileClick && (
        <HogList specialty={specialty} weight={weight} medal={medal} />
      )}
    </div>
  );
}

export default Tile;
