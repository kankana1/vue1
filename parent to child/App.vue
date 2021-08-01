<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>{{title}}</h1>
    <Child v-on:changeTitle="updateTitle($event)" />
  </div>
</template>

<script>
import Child from './components/Child.vue'
export default {
  name: 'App',
  components: {
    Child
  },
  data(){
    return {title:"props tutorial"}
  },
  methods:{
    updateTitle(title)
    {
      this.title=title
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
