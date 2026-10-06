import Link from "next/link";
import { getImageUrl } from "../lib/utils";

export default function MovieCard({ pokemon }) {
  return (
    <div>
      <Link href={"/movie/" + pokemon.id}>
        <img src={getImageUrl(pokemon.id)} alt={pokemon.name} width="96" height="96" />
        <p>
          #{pokemon.id} {pokemon.name}
        </p>
      </Link>
    </div>
  );
}
