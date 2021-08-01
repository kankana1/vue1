<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
   <!--  <Hello />
    <Hello6 /> -->
    <!-- <Home /> -->
   <!--  <Home9 /> -->
   <!-- <Home10 /> -->
   <!-- <DataBinding /> -->
    <!-- <Home data="Jumpi is here" msg="HI, from Jumpi"/> -->
    <!-- <Child name="kankana"/>  -->
    <!-- <Child v-bind:name="userName" /> -->
    <Child v-bind:users="users"/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import Hello from  './components/Hello.vue'
//import Hello6 from './components/Hello6.vue'
//import Home from './components/Home.vue'
/* import Home9 from './components/Home9.vue' */
//import Home10 from './components/Home10.vue'
//import DataBinding from './components/DataBinding.vue' /* video 11 */
import Child from './components/Child.vue'
export default {
  name: 'App',
  components: {
    //HelloWorld,
    //Hello,
    //Hello6
    //Home
    //Home9
    //Home10
    //DataBinding
    Child
  },
  data()
  {
    //return{userName:"jumpi"}
    return{ users:[
      {name:"jumpi", email:"jumpi@test.com"},
      {name:"wasim", email:"wasim@test.com"},
      {name:"smita", email:"smita@test.com"},
      {name:"Gokul", email:"gokul@test.com"}
    ]}
  }
}
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
