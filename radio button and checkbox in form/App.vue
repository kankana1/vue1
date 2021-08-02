<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Form With Checkbox and Radio Button in vue js</h1>
    <Login />
  </div>
</template>

<script>
import Login from './components/Login.vue'
export default {
  name: 'App',
  components: {
    Login
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
