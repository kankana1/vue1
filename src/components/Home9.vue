<template>
    <div>
        <!-- <h1>Template in vue Js</h1> -->
        <p v-html="rowHtml"></p>
        <h3 v-once>{{name}}</h3> <!-- v-once beaves as constant -->
        <h3>{{name}}</h3>
        <h3>{{a+b}}</h3>
        <h3>{{ok?"yes":"no"}}</h3>
        <button v-bind:disabled="disableBtn" v-on:click="updateText">Click me</button>
    </div>
</template>

<script>
export default {
    name:'Home9',
    data()
    {
        return {
            name:'Jumpi',
            a:10,
            b:20,
            ok:false,
            rowHtml:"<h1>Template in vue Js</h1>",
            disableBtn:true
        }
    },
    methods:{
        updateText()
        {
            this.ok=!this.ok
        }
    }
};
</script>