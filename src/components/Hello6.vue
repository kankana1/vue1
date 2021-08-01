<template>
    <div>
        <h1>For loop in js</h1>
        <table border="1px" align="center">
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Email</td>
            </tr>
            <tr  v-for="user in users" :key="user.id">
                <td>{{user.id}}</td>
                <td>{{user.name}}</td>
                <td>{{user.email}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    name:'Hello6',
    data()
    {
        return {
            users:[
                {id:1,name:'Kankana',email:'kankana@est.com'},
                {id:2,name:'Wasim',email:'wasim@est.com'},
                {id:3,name:'Smita',email:'smita@est.com'},
                {id:4,name:'Gokul',email:'gokul@est.com'}
            ]
        }
    }

}
</script>