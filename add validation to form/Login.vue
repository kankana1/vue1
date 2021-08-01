<template>
	<div>
        <p v-if="error.length">
                <b>Please correct the following errors</b>
                <ul>
                    <li v-for="e in error" v-bind:key="e.id">
                        {{e}}
                    </li>
                </ul>
        </p>
        <form @submit="login">
            <input type="text" name="username" placeholder="Enter the Username" v-model="name" />
            <br><br>
            <input type="password" name="password" placeholder="Enter the password" v-model="password"/>
            <br><br>
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
export default {
    name:'Login',
    data()
        {
            return{
                    error:[],
                    name:null,
                    password:null,

            }
        },
    methods:{
        login(e)
        {
            this.error=[];
            if(this.name && this.password)
            {
                console.warn("No error");
            }
            if(!this.name)
            {
                this.error.push("username is required");
            }
            if(!this.password)
            {
                this.error.push("password is required");
            }
            console.warn("Hello",this.error);
            e.preventDefault();
        },
    },
}
</script>