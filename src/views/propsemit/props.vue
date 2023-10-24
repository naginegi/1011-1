<script>
import emit1 from './emit1.vue';
import emit2 from './emit2.vue';
export default{
    data(){
        return{
        propobj:{
            name:"",
            phone:"",
            email:"",
            address:"",
            school:"",
            interest:"",
            sex:""
        }
        }
    },
    methods:{
        getobj(obj){
            this.propobj = obj;
            console.log(this.propobj);
        }
    },
    components:{
        emit1,
        emit2,
    }
}
</script>

<template>
<div class="show">
    <div class="t a">
        <h2>emit1</h2>
        <emit1 @get="getobj"/>
    </div>
    <div class="t b">
        <h2>props</h2>
        <h3>{{ this.propobj }}</h3>
        
        
    </div>
    <div class="t c">
        <h2>emit2</h2>
        <emit2 :props="propobj"/>
    </div>
</div>
</template>

<style lang="scss" scoped>
.show{
    width: 95%;
    height: 80%;
    border: 1px solid black;
    display: flex;
    justify-content: space-around;
    .t{
        width: 30%;
        height: 100%;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
</style>