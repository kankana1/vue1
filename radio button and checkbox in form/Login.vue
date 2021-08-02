<template>
	<div>
            <input type="text" name="username" placeholder="Enter the Username" v-model="login.username"/>
            <br><br>
            <input type="password" name="password" placeholder="Enter the password" v-model="login.password"/>
            <br><br>
            <p><b>Choose Hobbies</b></p>
            <input type="checkbox" value="cricket" id="cricket" v-model="login.hobbies" />
            <label for="cricket">Cricket</label>
            <input type="checkbox" value="football" id="football" v-model="login.hobbies" />
            <label for="football">FootBall</label>
            <br><br>
            <p><b>Choose Gender</b></p>
            <input type="radio" value="male" id="male" v-model="login.gender" />
            <label for="male">Male</label>
            <input type="radio" value="female" id="female" v-model="login.gender" />
            <label for="female">Female</label>
            <input type="radio" value="other" id="other" v-model="login.gender" />
            <label for="other">Other</label>
             <br><br>
            <button v-on:click="loginUser" type="submit">Login</button>
    </div>
</template>

<script>
export default {
    name:'Login',
    data()
        {
            return{
                login:{
                    username:null,
                    password:null,
                    hobbies:[],
                    gender:null
                }

            }
        },
    methods:{
        loginUser()
        {
            console.warn(this.login);
        }
    },
}
</script>