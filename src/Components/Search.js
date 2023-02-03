//destructuring de props

const Search = ({ search, setSearch }) => {
  return (
    <header>
      <h1>😀 Emoji Search 🤯</h1>

      <input
        value={search}
        type="text"
        placeholder="What emoji are you looking for?"
        onChange={(event) => setSearch(event.target.value)}
      />
    </header>
  );
};

export default Search;
