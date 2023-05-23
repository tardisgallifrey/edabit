<template>
  <div>
    <h1>A Vue app for the matchstick challenge</h1>
    <hr/>
    <h2>{{ prompt }}</h2>
    <input type="number" v-model="numHouses" />
    <p v-if="numHouses > 0">{{ numHouses }} of matchstick houses requires {{ matchhouses(numHouses) }} matchsticks.</p>
  </div>
</template>

<script>
// BIG NOTICE:
// Only use vue-cli command of vue new *projectname*
// DO NOT USE: npm install vue@latest
// Don't know why, just don't use it.

//OK, get this order down:
// export default {
//   data() {
//      },   <-- now the comma
//     methods: {
//      }, <-- now the comma
//     components: {
//      }
//  } <--close export default
//
//  If you have plain variables, they go in
//   data() and use return { }

// default, return, data(), components, methods are 
// javascript quasi-objects

export default {
  data() {
    return {
      prompt: "Enter a number of matchstick houses: ",
      numHouses: 0
    }
  },
  methods: {
    matchhouses (steps){
      if(steps < 1){
        return 0;
      }else if(steps === 1){
        return 6;
      }else{
        return 6 + ((steps - 1) * 5);
      }

    }
  }
}

</script>

<style>
#app {
  background-color: ivory;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
