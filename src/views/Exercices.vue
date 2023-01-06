<template>
  <div>

    <div :class="{'grid grid-cols-1 lg:grid-cols-2': !exercices[currIndex].fullScreen}" class="w-full h-full ">
      <!-- Image + code --->
      <div :class="{'flex-col h-full': !exercices[currIndex].fullScreen, 'h-2/5': exercices[currIndex].fullScreen}" class="flex bg-cyan-700 border-r-4" >
        <div class="max-h-2/5 w-full p-8">
          <div class="h-4/5 w-full pb-8" >
            <img class="h-full w-full object-contain" :src="exercices[currIndex].img">
          </div>
          <div class="h-1/5 flex items-center justify-evenly">
            <button v-if="currIndex !== 0" @click="currIndex--">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button v-if="currIndex !== exercices.length-1" @click="currIndex++">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        <div :class="{'h-3/5': !exercices[currIndex].fullScreen}" class="h-full w-full p-8">
          <codemirror
              v-model="code"
              :extensions="extensions"
              :indent-with-tab="true"
          />
        </div>
      </div>

      <!-- Résultat --->
      <div v-html="code" class="w-full flex items-center justify-center p-8 bg-gray-200">

      </div>
    </div>

  </div>
</template>

<script>
import {Codemirror} from "vue-codemirror";
import {oneDark} from "@codemirror/theme-one-dark";
import {html} from "@codemirror/lang-html";
import {shallowRef} from "vue";
import Exercices from "../data/exercices.js";

export default {
  name: "Exercices",
  components: {
    Codemirror
  },
  data() {
    return {
      code: "<div class='bg-gray-300 w-full h-14 p-2 flex items-center justify-center'>\n\t<p>Ajouter le code ici</p>\n</div>",
      extensions: [html(), oneDark],
      handleReady(payload) {
        shallowRef().value = payload.view;
      },
      exercices: Exercices,
      currIndex: 0
    }
  },
  methods: {
    debugFunction() {
      console.log(this.exercices.length, this.currIndex)
    }
  }
}
</script>

<style scoped>

</style>