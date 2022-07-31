<script>
import Picture from "@/components/Picture.vue";
import Options from "@/components/Options.vue";
import getPokemonOptions from "@/helpers/getPokemonOptions";
import { capitalize } from "@vue/shared";

export default {
  components: { Picture, Options },
  data() {
    return {
      pokemons: [],
      pokemon: null,
      showPokemon: false,
      showMessage: false,
      message: { text: null, valid: false },
      lifes: 3,
    };
  },
  methods: {
    async getPokemons() {
      this.pokemons = await getPokemonOptions();
      const randomInt = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemons[randomInt];
    },
    uppercase(text) {
      return capitalize(text);
    },
    checkAnswer(pokemonID) {
      this.showPokemon = true;
      if (pokemonID === this.pokemon.id)
        this.message = { text: "Well done!", valid: true };
      else {
        this.message = {
          text: `Incorrect, the pokemon is ${this.uppercase(
            this.pokemon.name
          )}`,
          valid: false,
        };
        this.lifes--;
      }

      this.showMessage = true;
    },
    resetData() {
      this.showPokemon = false;
      this.showMessage = false;
      this.pokemons = [];
      this.pokemon = null;
      this.getPokemons();
    },
    newGame() {
      this.resetData();
      this.lifes = 3;
    },
  },
  mounted() {
    this.getPokemons();
  },
};
</script>

<template>
  <!-- Lifes -->
  <div data-test="lifes" class="h-[10vh] px-4 flex items-center">
    <p class="text-lg font-semibold mr-2">Lifes:</p>
    <ul class="flex items-center">
      <li v-for="life in lifes" :key="life">
        <img src="@/assets/life.png" alt="life" class="w-10" />
      </li>
    </ul>
  </div>
  <div class="min-h-[90vh] flex flex-col justify-center">
    <div class="px-4 md:w-1/2 mx-auto">
      <!-- Title -->
      <div data-test="title" class="flex justify-center text-center">
        <h1 class="text-3xl font-bold text-secondary">
          Who is this
          <span class="flex items-center gap-2">
            <img src="@/assets/pokemon.png" alt="PokemonLogo" class="w-60" />
            <p class="text-7xl">?</p>
          </span>
        </h1>
      </div>
      <!-- Loader -->
      <div v-if="!pokemon" data-test="loader" class="mt-5 flex justify-center">
        <div class="lds-default">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <!-- Game -->
      <div v-else class="my-5">
        <Picture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
        <h2
          v-if="showMessage"
          class="text-center text-3xl font-semibold mt-4"
          :class="[message.valid ? 'text-green-700' : 'text-red-700']"
        >
          {{ message.text }}
        </h2>
        <Options
          :pokemons="pokemons"
          :showPokemon="showPokemon"
          @selection="checkAnswer($event)"
        />
        <div v-if="showPokemon" class="w-1/2 mx-auto">
          <button
            v-if="lifes > 0"
            @click="resetData"
            class="mt-10 rounded bg-secondary opacity-80 hover:opacity-100 text-white font-semibold px-4 py-3 w-full"
          >
            Next Pokemon
          </button>
          <button
            v-else
            @click="newGame"
            class="mt-10 rounded bg-red-600 opacity-80 hover:opacity-100 text-white font-semibold px-4 py-3 w-full"
          >
            New Game
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
