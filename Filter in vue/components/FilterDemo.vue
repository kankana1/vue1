<template>
	<div>
        <h1>{{name | Ucase}}</h1>
        <h3>{{amount | currenyConverter}}</h3>
    </div>
</template>
<script>
export default {
    name:'FilterDemo',
    data()
    {
        return{
            name:"filterDemo",
            amount:100
        }
    }
}
</script>