<script>
import {mapState, mapActions} from 'pinia';
import indexState from '../stores/indexstate';
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
    methods:{
        ...mapActions(indexState,["setLocation"]),
    },
    mounted(){
        this.setLocation(9)
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