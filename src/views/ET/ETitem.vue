<script>
export default{
    emits:[
        "get2"
    ],
    data(){
        return{

        }
    },
    methods:{
        test(index){
            const arr=this.props;
            arr.splice(index, 1); 
            localStorage.setItem('itemarr',JSON.stringify(arr));
            this.$emit("get2",arr)
            // console.log(this.props);
            // this.cal(arr);
        },
        // cal(arr){
        //     console.log(arr);
        // }
    },
    props:[
        "props"
    ],
    components:{

    }
}
</script>

<template>
<div class="item" v-for="(i,index) in props" :key="index">
    <p>{{ i.state }}</p>
    <p>name:</p>
    <p>{{ i.addtext }}</p>
    <p>money:</p>
    <p>{{ i.addmoney }}</p>
    <button type="button" @click="test(index)">delet</button>
</div>
</template>

<style lang="scss" scoped> 
.item{
    width: 80%;
    height: 55px;    
    border: 2px solid rgb(243, 173, 173);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0;
    padding: 0 15px;
    font-size: 16pt;
    
    p{
        width: 20%;
        margin: 0 0;
    }
    button{
            width: 20%;
            height: 80%;
            background-color: rgb(243, 173, 173);
            color: rgb(0, 89, 255);
            font-size: 16pt;
            border-radius: 20px;
        }
}

</style>