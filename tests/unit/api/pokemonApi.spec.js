import pokemonApi from "@/api/pokemonApi";

describe("pokemonApi Unit Testing", () => {
  test("axios must have the pokeAPI endpoint", () => {
    expect(pokemonApi.defaults.baseURL).toBe(
      "https://pokeapi.co/api/v2/pokemon/"
    );
  });
});
