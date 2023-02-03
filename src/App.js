import "./App.css";
import data from "./data.json";

import { useState } from "react";
import Search from "./Components/Search";
import Line from "./Components/Line";

function App() {
  const [search, setSearch] = useState("");

  const tab = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i].keywords.includes(search)) {
      if (tab.length < 12) {
        tab.push(<Line data={data[i]} key={i} />);
      } else {
        break;
      }
    }
  }

  return (
    <div className="App">
      {/* composant Search qui regroupera titre du site et l'input de recherche*/}
      <Search search={search} setSearch={setSearch} />
      <div className="result">
        {/* on affiche le tableau que l'on a push */}
        {tab}
      </div>
      <footer>
        <p>
          Made with <span> React </span> at <span> Le Reacteur </span> by{" "}
          <span> Guillaume</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
