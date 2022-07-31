import pokemonApi from "@/api/pokemonApi";

export const generatePokemonsID = () => {
  const random = {
    max: 650,
    min: 1,
  };
  const pokemons = Array.from(Array(4));
  return pokemons.map((_) =>
    Math.floor(Math.random() * random.max + random.min)
  );
};

export const getPokemonNames = async ([a, b, c, d] = []) => {
  const promises = [
    pokemonApi.get(`/${a}`),
    pokemonApi.get(`/${b}`),
    pokemonApi.get(`/${c}`),
    pokemonApi.get(`/${d}`),
  ];
  const [p1, p2, p3, p4] = await Promise.all(promises);
  return [
    { name: p1.data.name, id: p1.data.id },
    { name: p2.data.name, id: p2.data.id },
    { name: p3.data.name, id: p3.data.id },
    { name: p4.data.name, id: p4.data.id },
  ];
};

const getPokemonsOptions = async () => {
  const pokemonsId = generatePokemonsID();
  const pokemons = await getPokemonNames(pokemonsId);
  return pokemons;
};

export default getPokemonsOptions;
