<script>
export default{
    data(){
        return{
        emit2obj:{

        },
        }
    },
    props:[
        "props"
    ],
    methods:{
        get(){
            this.emit2obj = this.props
        }
    },
    components:{
    }
}
</script>

<template>
<h2>{{ this.emit2obj }}</h2>
<button type="button" @click="get">get</button>
</template>

<style lang="scss" scoped>

</style>