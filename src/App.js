import "./App.css";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      {/* composant Search qui regroupera titre du site et l'input de recherche*/}

      <header>
        <h1>😀 Emoji Search 🤯</h1>

        <input type="text" placeholder="What emoji are you looking for?" />
      </header>

      {/* boucler sur un élément du tableau */}
      <div className="searchbar">
        {data.map((list, index) => {
          return <div>{list.title}</div>;
        })}
      </div>

      {/* composant Line qui regroupera titre du site et l'input de recherche* */}
      <main>
        <input type="text" />
      </main>

      {/* 1 zone de recherche avec mots clés qui renvoit au json */}
    </div>
  );
}

export default App;
