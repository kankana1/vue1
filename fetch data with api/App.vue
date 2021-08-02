<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Fetch data from api in vue js</h1>
    <Employees />
  </div>
</template>

<script>
import Employees from './components/Employees.vue'
export default {
  name: 'App',
  components: {
    Employees
  },
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
