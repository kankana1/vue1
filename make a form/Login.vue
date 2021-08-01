<template>
	<div>
        <h1>Make a form</h1>
        <input type="text" v-model="loginForm.username" name="username" placeholder="Enter the Username" />
        <br>
        <br>
        <input type="password" v-model="loginForm.password" name="password" placeholder="Enter the password" />
        <br>
        <br>
        <button v-on:click="loginData">Login</button>
    </div>
</template>

<script>
export default {
    name:'Login',
    methods:{
        loginData()
        {
            console.log("loginData",this.loginForm.username,this.loginForm.password)
        },
    },
    data()
        {
            return{loginForm:
                {
                    username:null,
                    password:null,
                }

            }
        }
}
</script>