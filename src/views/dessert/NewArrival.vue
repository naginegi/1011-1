<script>
export default{
  data(){
    return{

    }
  },
  components:{
   
  }
}
</script>

<template>
<div class="left">
<div class="block">
    <img src="../../../public/甜點圖片/8.png">
</div>
</div>

<div class="right">
    <div class="text">
        <h1>New Arrival</h1>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quo esse eum perspiciatis consequatur laborum minus nisi placeat blanditiis aspernatur?</span>
    </div>
</div>

</template>

<style lang="scss" scoped>
.left{
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .block{
        width: 100%;
        height: 80%;
        background-color: #f78b8b;
        position: relative;
        img{
            width: 100%;
            position: absolute;
            top: 15%;
            right: -20%;
        }
    }
}
.right{
    width: 35%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f8bcbc;
    margin-right: 10px;
    .text{
        width: 80%;
        height: 90%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

}

</style>