import MovieCard from "./MovieCard";

export default function MovieList({ pokemons }) {
  return (
    <div>
      {pokemons.map((pokemon) => (
        <MovieCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}
