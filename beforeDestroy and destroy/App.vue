<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>beforeDestroy and destroyed in vue js</h1>
    <div v-if="display">
      <Home />
    </div>
    <button v-on:click="toggle">Toggle</button>
  </div>
</template>

<script>
import Home from './components/Home.vue'
export default {
  name: 'App',
  components: {
    Home
  },
  data()
  {
    return{display:true}
  },
  methods:{
    toggle()
    {
      this.display=!this.display;
    }
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
