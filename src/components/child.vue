<script>

export default{
    data(){
        return{

        }
    },
   
    props:[
        "props"
    ]
}
</script>

<template>
<div class="show">
    <p>{{ this.props }}</p>
</div>
</template>

<style lang="scss" scoped>
.show{
    width: 60%;
    height: 30%;
    border: 1px solid;
    display: flex;
    justify-content: center;
}
</style>