<template>
    <div>
        <h1>{{name}}</h1>
    </div>
</template>
<script>

export default {
    name:'Home',
    data()
    {
        return{
            name:"Home Component"
        }
    },
    beforeDestroy()
    {
        alert("before");
        console.warn("Before Destroy");
    },
    destroyed()
    {
        alert("destroyed");
        console.warn("destroyed");
        
    }
}
</script>