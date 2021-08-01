<template>
    <div>
        <h1 class="homestyle">Class and style bindings</h1>
        <h1 v-bind:style="{color:'blue'}">Style bindings</h1>
        <h1 v-bind:style="{color:colorKey}">Style bindings in properties</h1>
        <h1 v-bind:class="{display:show,displayColor:show}">Class Binding with Object</h1>
        <h1 v-bind:class="[aclass]">Class Binding with Array</h1>
        <h1 v-bind:class="[show?'yesShow':'noShow']">Dynamic Class Binding with Array</h1>
    </div>
</template>

<script>
export default {
    name:'Home10',
    data(){
        return {
            show:false,
            aclass:'arrayClass',
            colorKey:'red'
        }
    }
};
</script>

<style>
.homestyle{
    color: orange;
}
.display{
    background-color: darksalmon;
}
.arrayClass{
    background-color: goldenrod;
}
</style>