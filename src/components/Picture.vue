<script>
export default {
  props: {
    pokemonId: { type: Number, required: true },
    showPokemon: { type: Boolean, required: true },
  },
  data() {
    return {
      pokemon: this.pokemonId,
    };
  },
  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemon}.svg`;
    },
  },
};
</script>

<template>
  <img
    :src="imgSrc"
    alt="Pokemon"
    class="mx-auto h-64 object-contain transition-all duration-700"
    :class="[showPokemon ? 'brightness-100' : 'brightness-0']"
  />
</template>
