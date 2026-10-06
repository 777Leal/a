import { useState, useEffect } from "react";
import apiClient from "../lib/apiClient";
import { toPokemon, sortPokemons } from "../lib/utils";
import useLocalStorage from "../hooks/useLocalStorage";
import Header from "../components/Header";
import Filters from "../components/Filters";
import Loader from "../components/Loader";
import ErrorState from "../components/ErrorState";
import MovieList from "../components/MovieList";

export default function HomePage() {
  // lista salva no localStorage (cache)
  const [pokemons, savePokemons] = useLocalStorage("pokemons", []);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [sortBy, setSortBy] = useState("id");

  useEffect(() => {
    apiClient
      .get("/pokemon", { params: { limit: 20 } })
      .then((response) => {
        savePokemons(response.data.results.map(toPokemon));
      })
      .catch(() => {
        setError("Erro ao buscar os Pokémon.");
      })
      .finally(() => {
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const hasData = pokemons.length > 0;

  return (
    <div>
      <Header />
      <h2>Pokémon</h2>
      <Filters sortBy={sortBy} setSortBy={setSortBy} />
      {loading && !hasData && <Loader />}
      {error && !hasData && <ErrorState message={error} />}
      {hasData && <MovieList pokemons={sortPokemons(pokemons, sortBy)} />}
    </div>
  );
}
