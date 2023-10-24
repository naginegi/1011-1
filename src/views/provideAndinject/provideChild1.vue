<script>
import provideChild2 from './provideChild2.vue';
export default{
    data(){
        return{
            
        }
    },
    components:{
        provideChild2,
    },

}
</script>
<template>
<div class="c1">
    <h1>child1</h1>
    <provideChild2 />
</div>
</template>
<style lang="scss" scoped>
.c1{
    width: 400px;
    height: 400px;
    border: 1px solid black;
}
</style>