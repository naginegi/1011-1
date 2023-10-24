<script>
export default{
    data(){
        return{
            
        }
    },
    inject:[
        "msg"
    ]
}
</script>
<template>
<div class="c2">
    <h1>child2</h1>
    <p>{{ msg }}</p>
</div>
</template>
<style lang="scss" scoped>
.c2{
    width: 300px;
    height: 300px;
    border: 1px solid black;
}
</style>