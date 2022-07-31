const pokemons = [
  { name: "bulbasaur", id: 1 },
  { name: "ivysaur", id: 2 },
  { name: "venusaur", id: 3 },
  { name: "charmander", id: 4 },
];

const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

export { pokemons, findByTestAttr };
