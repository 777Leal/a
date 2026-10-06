import MovieCard from "./MovieCard";

// Lista de Pokémon (o nome MovieList foi mantido do projeto original)
export default function MovieList({ pokemons }) {
  return (
    <div>
      {pokemons.map((pokemon) => (
        <MovieCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}
