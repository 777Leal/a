export function getIdFromUrl(url) {
  return url.split("/").filter(Boolean).pop();
}

export function toPokemon(item) {
  return { id: getIdFromUrl(item.url), name: item.name };
}

export function getImageUrl(id) {
  return (
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
    id +
    ".png"
  );
}

export function sortPokemons(list, sortBy) {
  const copy = [...list];
  if (sortBy === "name") {
    return copy.sort((a, b) => a.name.localeCompare(b.name));
  }
  return copy.sort((a, b) => Number(a.id) - Number(b.id));
}
