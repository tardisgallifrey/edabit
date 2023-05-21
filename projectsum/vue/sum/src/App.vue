<!--Every component in Vue follows this template -->

<!-- Template is for your HTML and vue bindings -->
<template>
 <div>
  <!-- Reads title from data below-->
  <h2>{{ title }}</h2>
    <!-- two input boxes with v-model binding -->
    <!-- to variables in date below-->
    <input v-model="num1" placeholder="Enter a number"/>
    <input v-model="num2" placeholder="Enter another number"/>
    <!-- paragraph is conditionally rendererd -->
    <!-- with v-if binding testing value of num1 and num2 -->
    <p v-if="num1 > 0 && num2 > 0">The answer is: 
    {{ 
      //double braces is how Vue displays values in template
      //This calls the sum function from below,
      //sends it two parseInt converted values
      //that return a sum of both
      sum(
          parseInt(num1), 
          parseInt(num2)) }}</p>
 </div>
</template>

<script>
//This is your Javasript seciton

//export default is the collection
//of objects and object parts that
//make Vue work, fills the template
//variables, etc.
export default {
  //data is a function in an object
  data() {
    //data returns an object of variables
    return {
      title: "Return sum from function",
      num1: '',
      num2: ''

    }
  },
  //methods is the object collection of 
  //javascript functions
  methods: {
    //This is the JS function
    sum (a, b){
      return a + b;
    }

  }
}
</script>

<style>
/* This is the CSS style section */
/* It only applies to THIS component */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 200px;
  background-color: ivory;
}

input {
  border-radius: 2em;
  margin: 10px;
  padding: 5px;

}
</style>
