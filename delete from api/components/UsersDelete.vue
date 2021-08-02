<template>
	<div>
        <table border="1px">
            <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Address</td>
                <td>Action</td>
            </tr>
             <tr v-for="user in users" v-bind:key="user.id">
                <td>{{user.name}}</td>
                <td>{{user.email}}</td>
                <td>{{user.address}}</td>
                <td><button v-on:click="deleteUser(user.id)">Delete</button></td>
            </tr>

        </table>
    </div>
</template>
<script>
import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(VueAxios,axios)
export default {
    name:'UsersDelete',
    data()
    {
        return {users:null}
    },
    methods:
    {
        getUsers()
        {
            this.axios.get('http://localhost:3000/users').then((result)=>{
            console.warn(result);
            this.users=result.data
        })
        },
        deleteUser(id)
        {
            this.axios.delete("http://localhost:3000/users/"+id).then((result)=>{
            console.warn(result);
            this.getUsers()
        })
        }

    },
    mounted()
    {
        this.getUsers()
    }


}
</script>