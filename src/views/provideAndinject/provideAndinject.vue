<script>
import provideChild1 from './provideChild1.vue'
import {mapState, mapActions} from 'pinia';
import indexState from '../../stores/indexstate';
export default{
    data(){
        return{
            dataMsg:"message"
        }
    },
    methods:{
        ...mapActions(indexState,["setLocation"]),
    },
    mounted(){
        this.setLocation(13)
    },
    components:{
        provideChild1,
    },
    provide(){
        return{
            msg:this.dataMsg,
        }
    }
}
</script>
<template>
<div class="t">
    <h1>fa</h1>
    <p>dataMsg:"message"</p>
    <provideChild1 />
</div>
</template>
<style lang="scss" scoped>
.t{
    width: 500px;
    height: 500px;
    border: 1px solid black;
}
</style>