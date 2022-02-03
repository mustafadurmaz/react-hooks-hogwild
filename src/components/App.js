import React from "react";
import Nav from "./Nav";
import Tile from "./Tile";

import hogs from "../porkers_data";

function App() {
  return (
    <div className="App">
      <Nav />
      {hogs.map((hog) => {
        return (
          <Tile
            className={"pigTile"}
            key={hog.name}
            name={hog.name}
            specialty={hog.specialty}
            greased={hog.greased}
            weight={hog.weight}
            image={hog.image}
          />
        );
      })}
    </div>
  );
}

export default App;
