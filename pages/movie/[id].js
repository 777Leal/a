import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import apiClient from "../../lib/apiClient";
import { getImageUrl } from "../../lib/utils";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import ErrorState from "../../components/ErrorState";

export default function PokemonDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    setError("");
    apiClient
      .get("/pokemon/" + id)
      .then((response) => setPokemon(response.data))
      .catch(() => setError("Erro ao buscar o Pokémon."))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>
      <Header />
      <button onClick={() => router.back()}>Voltar</button>{" "}
      <Link href="/">Ir para o início</Link>
      {loading && <Loader />}
      {error && <ErrorState message={error} />}
      {pokemon && !error && (
        <div>
          <h2>
            #{pokemon.id} {pokemon.name}
          </h2>
          <img src={getImageUrl(pokemon.id)} alt={pokemon.name} width="200" height="200" />
          <p>Tipos: {pokemon.types.map((t) => t.type.name).join(", ")}</p>
          <p>Altura: {pokemon.height}</p>
          <p>Peso: {pokemon.weight}</p>
        </div>
      )}
    </div>
  );
}
