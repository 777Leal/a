import { useState, useEffect } from "react";
import apiClient from "../lib/apiClient";
import { toPokemon, sortPokemons } from "../lib/utils";
import Header from "../components/Header";
import Filters from "../components/Filters";
import Loader from "../components/Loader";
import ErrorState from "../components/ErrorState";
import MovieList from "../components/MovieList";

export default function HomePage() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [sortBy, setSortBy] = useState("id");

  useEffect(() => {
    apiClient
      .get("/pokemon", { params: { limit: 20 } })
      .then((response) => setPokemons(response.data.results.map(toPokemon)))
      .catch(() => setError("Erro ao buscar os Pokémon."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <Header />
      <h2>Pokémon</h2>
      <Filters sortBy={sortBy} setSortBy={setSortBy} />
      {loading && <Loader />}
      {error && <ErrorState message={error} />}
      {!loading && !error && <MovieList pokemons={sortPokemons(pokemons, sortBy)} />}
    </div>
  );
}
