<template>
	<div>
        <!-- <h1>Send props from child to parent</h1> -->
        <button v-on:click="updateTitle" >Update parent title</button>
    </div>
</template>

<script>
export default {
    name:'Child',
    methods:{
        updateTitle(){
            console.log("Hello from inside method")
            this.$emit('changeTitle',"parent updated")
    }
    }
}
</script>