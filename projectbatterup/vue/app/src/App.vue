<template>
  <div>
    <h1>{{ title }}</h1>
    <p v-if="average > 0.000">Average is: {{ average
                    .toPrecision(3)
                    .replace("0.", ".") }}</p>
    <p v-if="game.hits > 0">Hits: {{ game.hits }}</p>
    <p v-if="game.atbats > 0">At Bats: {{ game.atbats }}</p>
    <label>Enter number of hits in game: </label>
    <input type="number" v-model="hits" /><br/>
    <label>Enter number of at bats in game: </label>
    <input type="number" v-model="atbats" /><br/>
    <label>Is this the last game? </label>
    <input type="checkbox" v-model="complete"/><br/>
    <button @click="increment(hits, atbats)">ADD GAME</button>
</div>
</template>


<script setup>
//We use setup so that we can run it like 
//regular JS???

//needed for state
import {ref} from 'vue';

//regular vars
const title = "Batter's Average in Vue";
let hits = 0;
let atbats = 0;
let complete = false;

// state vars
const game = ref({hits: 0, atbats: 0});
const average = ref(0);


// actions

//Add, totalize hits, atbats until
//user tells us it's the last game
//than totalize and send to calc average
function increment(num, num2) {
  if(!complete){
    game.value.hits += num;
    game.value.atbats += num2;
  }else{
    game.value.hits += num;
    game.value.atbats += num2;
    //have to send the value, not just the obj
    calcavg(game.value);
  }
}

//JS is very friendly on what we send
//but we should be careful
//sets average of hits/atbats
const calcavg = (game) => {
  average.value = game.hits/game.atbats;
}
</script>

<style>
html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: beige;
  margin-top: 5%;
  margin-left: 100px;

}

input, button {
  border-radius: 1em;
}
</style>
