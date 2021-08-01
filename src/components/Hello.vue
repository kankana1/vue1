<template>
<!--     <div>
        <h1>Hello from home component</h1> -->
        <!-- <h2>{{data}}</h2>
        <h2>{{msg}}</h2> -->
        <!-- <button v-on:mouseover="hello('hello call')"> Call Hello Function</button>
        <br><br>
        <button v-on:click="helloNew('helloNew call')"> Call Hello New Function</button>
    </div> -->
    <div>
        <h1 v-if="show">Conditional Rendering in vue js</h1>
        <h1 v-else >conditional rendering else block</h1>
        <button v-on:click="display">Toggle Element</button>
    </div>
</template>
<script>
export default {
    name:'Hello',
    props:{
        data:String,
        msg:String
    },data()
    {
        return{show:true}
    },methods:{
        display()
        {
            this.show=!this.show
        }
    }
    /* methods:{
        hello(data){
            alert(data)
        },
        helloNew(data1){
            alert(data1)
        } 
    }*/
}
</script>