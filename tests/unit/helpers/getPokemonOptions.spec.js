import getPokemonsOptions, {
  generatePokemonsID,
  getPokemonNames,
} from "@/helpers/getPokemonOptions";

describe("helpers Unit Testing", () => {
  test("generatePokemonsID function must return an array of 4 values", () => {
    const pokemonsID = generatePokemonsID();
    expect(pokemonsID.length).toBe(4);
  });
  test("getPokemonNames must return an array of objects", async () => {
    const pokemons = await getPokemonNames([1, 2, 3, 4]);
    expect(pokemons).toStrictEqual([
      { name: "bulbasaur", id: 1 },
      { name: "ivysaur", id: 2 },
      { name: "venusaur", id: 3 },
      { name: "charmander", id: 4 },
    ]);
  });
  test("getPokemonsOptions must return a mixed array", async () => {
    const pokemons = await getPokemonsOptions();
    expect(pokemons.length).toBe(4);
    expect(pokemons).toEqual([
      {
        name: expect.any(String),
        id: expect.any(Number),
      },
      {
        name: expect.any(String),
        id: expect.any(Number),
      },
      {
        name: expect.any(String),
        id: expect.any(Number),
      },
      {
        name: expect.any(String),
        id: expect.any(Number),
      },
    ]);
  });
});
