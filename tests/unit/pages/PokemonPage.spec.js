import { shallowMount, mount } from "@vue/test-utils";
import { findByTestAttr } from "../utils";
import { pokemons } from "../utils";
import Pokemon from "@/pages/Pokemon";

describe("Pokemon Unit Testing", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallowMount(Pokemon);
  });
  test("snapshot must be matched", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
  test("Page components should be displayed", () => {
    const title = findByTestAttr(wrapper, "title").text();
    const lifes = findByTestAttr(wrapper, "lifes").findAll("li");
    const loader = findByTestAttr(wrapper, "loader").exists();
    expect(title).toBe("Who is this ?");
    expect(lifes.length).toBe(3);
    expect(loader).toBeTruthy();
  });
  test("getPokemons method called on mounted", () => {
    const getPokemonsSpy = jest.spyOn(Pokemon.methods, "getPokemons");
    shallowMount(Pokemon);
    expect(getPokemonsSpy).toHaveBeenCalled();
  });
  test("snapshot must be matched when pokemons are loaded", () => {
    const wrapper = mount(Pokemon, {
      data() {
        return {
          pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showMessage: false,
          message: { text: null, valid: false },
          lifes: 3,
        };
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
  test("checkAnswer method", async () => {
    const wrapper = shallowMount(Pokemon, {
      data() {
        return {
          pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showMessage: false,
          message: { text: null, valid: false },
          lifes: 3,
        };
      },
    });
    await wrapper.vm.checkAnswer(5);
    expect(wrapper.find("h2").exists()).toBeTruthy();
    expect(wrapper.vm.showPokemon).toBeTruthy();
    expect(wrapper.find("h2").text()).toBe(
      "Incorrect, the pokemon is Bulbasaur"
    );
    await wrapper.vm.checkAnswer(1);
    expect(wrapper.find("h2").text()).toBe("Well done!");
  });
});
