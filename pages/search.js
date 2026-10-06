import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import apiClient from "../lib/apiClient";
import { toPokemon, sortPokemons } from "../lib/utils";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import Loader from "../components/Loader";
import ErrorState from "../components/ErrorState";
import MovieList from "../components/MovieList";

export default function SearchPage() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("id");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  const loadAll = useCallback(() => {
    setLoading(true);
    setError("");
    apiClient
      .get("/pokemon", { params: { limit: 1500 } })
      .then((response) => setAllPokemons(response.data.results.map(toPokemon)))
      .catch(() => setError("Erro ao buscar os Pokémon."))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    loadAll();
    inputRef.current.focus();
  }, [loadAll]);

  const results = useMemo(() => {
    const text = query.trim().toLowerCase();
    if (!text) return [];
    const filtered = allPokemons.filter((p) => p.name.includes(text));
    return sortPokemons(filtered, sortBy);
  }, [allPokemons, query, sortBy]);

  return (
    <div>
      <Header />
      <h2>Buscar Pokémon</h2>
      <SearchBar query={query} setQuery={setQuery} inputRef={inputRef} />
      <Filters sortBy={sortBy} setSortBy={setSortBy} />
      {loading && <Loader />}
      {error && <ErrorState message={error} onRetry={loadAll} />}
      {!loading && !error && query.trim() && results.length === 0 && (
        <p>Nenhum Pokémon encontrado.</p>
      )}
      <MovieList pokemons={results} />
    </div>
  );
}
