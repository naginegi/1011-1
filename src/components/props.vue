<script>
// import {RouterLink,RouterView} from 'vue-router'
import child from '../components/child.vue'
export default{
    data(){
        return{
            obj:{
                name:"A",
                age:55,
                email:"asd@zxc.com",
            }
        }
    },
    components:{
        child,
        
    }
}
</script>

<template>
    <child :props="obj" />
</template>

<style>
</style>