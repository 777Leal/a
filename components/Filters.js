export default function Filters({ sortBy, setSortBy }) {
  return (
    <div>
      <label>
        Ordenar por:{" "}
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="id">Número</option>
          <option value="name">Nome (A-Z)</option>
        </select>
      </label>
    </div>
  );
}
