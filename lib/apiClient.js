import axios from "axios";

// Cliente axios da PokéAPI (somente requisições GET)
const apiClient = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export default apiClient;
