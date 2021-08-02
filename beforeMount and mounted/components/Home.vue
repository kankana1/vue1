<template>
    <div>
        <h1 id="demo">{{name}}</h1>
    </div>
</template>
<script>

export default {
    name:'Home',
    data()
    {
        return{
            name:"kankana"
        }
    },
    beforeMount()
    {
        console.warn("beforeMount");
        //console.warn(this.$el);
        console.warn(document.getElementById("demo"));
    },
    mounted()
    {
        console.warn("mounted");
        //console.warn(this.$el);
        console.warn(document.getElementById("demo"));
        
    }
}
</script>