<template>
  <div>
    <h1>A bitwise challenge for Vue</h1>
    <p>Enter two numbers below:</p>
    <input type="text"
            v-model="a"
            placeholder="Enter number here"/>
    <input type="text"
            v-model="b"
            placeholder="Enter number here"/>
    <p v-if="a > 0 && b > 0">bitwise AND: {{ bitwiseAND(a, b) }}</p>
    <p v-if="a > 0 && b > 0">bitwise OR: {{ bitwiseOR(a, b) }}</p>
    <p v-if="a > 0 && b > 0">bitwise XOR: {{ bitwiseXOR(a, b) }}</p>
    <button v-if="a > 0 && b > 0" @click="clear_ab">Clear</button>
  </div>
</template>

<script>

//These are the basics for every Vue component
//I will keep this in another file
export default {
  name: 'App',
  data: function () {
    return {
      a: null,
      b: null,

    }
  },
  components: {
    
  },
  methods: {
    bitwiseAND(a, b){
      return parseInt(a) & parseInt(b);
    },
    bitwiseOR(a, b){
      return parseInt(a) | parseInt(b);
    },
    bitwiseXOR(a, b){
      return parseInt(a) ^ parseInt(b);
    },
    clear_ab(){
      this.a = null;
      this.b = null;
    }
  },
  watch: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

html, body {
  background-color: beige;
  margin-left: 100px;
}

input, button {
  border-radius: 1em;
}
</style>
