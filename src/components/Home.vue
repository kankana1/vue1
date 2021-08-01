<template>
    <div>
        <h1>Home Component</h1>
        <Users />
        <Products />
    </div>
</template>
<script>
import Users from './Users'
import Products from './Products'
export default {
    name:'Home',
    components:{
        Users,
        Products
        }
}
</script>

<style scoped>
    div{
        background-color: #cad7e2;
        height: 500px;
    }
</style>