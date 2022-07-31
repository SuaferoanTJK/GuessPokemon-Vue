import { shallowMount } from "@vue/test-utils";
import Picture from "@/components/Picture";

describe("Picture Unit Testing", () => {
  const props = {
    pokemonId: 1,
    showPokemon: false,
  };
  test("snapshot must be matched", () => {
    const wrapper = shallowMount(Picture, {
      props,
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
  test("hide the pokemon if showPokemon=false", () => {
    const wrapper = shallowMount(Picture, {
      props,
    });
    const img = wrapper.find("img");
    expect(wrapper.vm.showPokemon).not.toBeTruthy();
    expect(img.classes("brightness-0")).toBe(true);
    expect(img.attributes("src")).toBe(
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
    );
  });
  test("show the pokemon if showPokemon=true", () => {
    const wrapper = shallowMount(Picture, {
      props: {
        pokemonId: 1,
        showPokemon: true,
      },
    });
    const img = wrapper.find("img");
    expect(wrapper.vm.showPokemon).toBeTruthy();
    expect(img.classes("brightness-100")).toBe(true);
    expect(img.attributes("src")).toBe(
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
    );
  });
});
