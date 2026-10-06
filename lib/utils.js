// Pega o id do Pokémon no final da url (ex: https://pokeapi.co/api/v2/pokemon/25/)
export function getIdFromUrl(url) {
  return url.split("/").filter(Boolean).pop();
}

// Transforma um item da lista da PokéAPI em { id, name }
export function toPokemon(item) {
  return { id: getIdFromUrl(item.url), name: item.name };
}

// Imagem do Pokémon a partir do id
export function getImageUrl(id) {
  return (
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
    id +
    ".png"
  );
}

// Ordena a lista por "id" ou por "name"
export function sortPokemons(list, sortBy) {
  const copy = [...list];
  if (sortBy === "name") {
    return copy.sort((a, b) => a.name.localeCompare(b.name));
  }
  return copy.sort((a, b) => Number(a.id) - Number(b.id));
}
