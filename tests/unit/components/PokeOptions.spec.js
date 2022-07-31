import { shallowMount } from "@vue/test-utils";
import { pokemons } from "../utils";
import Options from "@/components/Options";

describe("Options Unit Testing", () => {
  const props = {
    pokemons,
    showPokemon: false,
  };
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Options, {
      props,
    });
  });
  test("snapshot must be matched", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
  test("should display the 4 options", () => {
    const btns = wrapper.findAll("button");
    expect(btns.length).toBe(4);
    expect(btns[0].text()).toBe("bulbasaur");
    expect(btns[1].text()).toBe("ivysaur");
    expect(btns[2].text()).toBe("venusaur");
    expect(btns[3].text()).toBe("charmander");
  });
  test("on click the selection emitter must be triggered with the its params", () => {
    const [btn1, btn2, btn3, btn4] = wrapper.findAll("button");
    btn1.trigger("click");
    btn2.trigger("click");
    btn3.trigger("click");
    btn4.trigger("click");
    expect(wrapper.emitted("selection").length).toBe(4);
    expect(wrapper.emitted("selection")[0]).toEqual([1]);
    expect(wrapper.emitted("selection")[1]).toEqual([2]);
    expect(wrapper.emitted("selection")[2]).toEqual([3]);
    expect(wrapper.emitted("selection")[3]).toEqual([4]);
  });
});
