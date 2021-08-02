<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Filter in vue js</h1>
    <!-- <h1>{{name | Ucase}}</h1> -->
    <FilterDemo />
  </div>
</template>

<script>
import FilterDemo from './components/FilterDemo.vue'
export default {
  name: 'App',
  components: {
    FilterDemo
  },
  data()
  {
    return{name:"kankana"}
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
