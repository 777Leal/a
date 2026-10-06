export default function SearchBar({ query, setQuery, inputRef }) {
  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Digite o nome do Pokémon"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
