<script>
export default {
  props: {
    pokemons: {
      type: Array,
      required: true,
    },
    showPokemon: { type: Boolean, required: true },
  },
};
</script>

<template>
  <div v-if="!showPokemon" class="mt-10 grid md:grid-cols-2 gap-4">
    <button
      v-for="pokemon in pokemons"
      :key="pokemon.id"
      @click="$emit('selection', pokemon.id)"
      class="rounded text-lg capitalize text-white hover:font-semibold bg-tertiary p-2 opacity-80 hover:opacity-100 cursor-pointer w-full shadow-md"
    >
      {{ pokemon.name }}
    </button>
  </div>
</template>
