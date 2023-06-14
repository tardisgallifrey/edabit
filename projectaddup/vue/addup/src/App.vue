<template>
  <h1>{{ title }}</h1>
  <hr/>
  <input v-model="number" 
          type="number"
          />
  <p v-if="number > 0 && addup(number) !== -1">The sum of the numbers from 1 to {{ number }} is {{ addup(number) }}</p>
  <p v-if="addup(number) == -1 && number > 0">There was an error.</p>
   
</template>

<script>

export default {
  name: 'App',
  data: function () {
    return {
      title: "A Vue version of the addup challenge",
      number: 0,
    }
  },
  components: {
    
  },
  methods: {

    addup(number){
      var answer = 0;

      if(number > 0 && number < 1001){
        for(let i = 1; i <= number; i++){
          answer += i;
        }
        return answer
      }else{
        return -1;
      }
    }

  },
  watch: {

  }
}
</script>

<style>
html body {
  min-width: 100%;
  min-height: 100%;
  background-color: beige;
  margin-left: 100px;
  margin-top: 50px;
}

input {
  border-radius: 1em;
}
</style>
