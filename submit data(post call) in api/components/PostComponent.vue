<template>
	<div>
        <form @submit="submitData" method="post">
            <input type="text" name="title" placeholder="Enter the title" v-model="post.title" /><br><br>
            <input type="text" name="author" placeholder="Enter the author" v-model="post.author" /><br><br>
            <button type="submit">Post</button>
        </form>
    </div>
</template>
<script>
import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(VueAxios,axios)
export default {
    name:'PostComponent',
    data()
    {
        return{
            post:{
                title:null,
                author:null
            }
        }
    }, 
    methods:
    {
        submitData(e)
        {
            this.axios.post("http://localhost:3000/posts/",this.post)
            .then((result)=>{
                console.warn("result",result);
            });
            //console.warn(this.post);
            e.preventDefault();
        }
    }
}
</script>