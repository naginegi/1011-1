<script>

export default{
    emits:[
        "get"
    ],
    

    data(){
        return{
        emit1obj:{
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
        emit1go(){
            this.$emit("get",this.emit1obj)
            console.log(this.emit1obj)
        }
    },
    components:{
    }
}
</script>

<template>
        <div class="text">
            <div class="name">
                <p>name</p>
                <input type="text" class="na inp" v-model="emit1obj.name">
            </div>
            <div class="phone">
                <p>phone</p>
                <input type="number" class="ph inp" v-model="emit1obj.phone">
            </div>
            <div class="email">
                <p>email</p>
                <input type="text" class="em inp" v-model="emit1obj.email">
            </div>
            <div class="address">
                <p>address</p>
                <input type="text" class="add inp" v-model="emit1obj.address">
            </div>
            <div class="school">
                <p>school</p>
                <input type="text" class="sch inp" v-model="emit1obj.school">
            </div>
            <div class="interest">
                <p>interest</p>
                <input type="text" class="int inp" v-model="emit1obj.interest">
            </div>
        </div>
        <div class="sex">
                <!-- <p>school</p> -->
                <input type="radio" name="" id="" value="man" v-model="emit1obj.sex" />
                <label for="">man</label>
                <div class="space"></div>
                <input type="radio" name="" id="" value="women" v-model="emit1obj.sex" />
                <label for="">women</label>
                <!-- <p>{{ this.sex }}</p> -->
            </div>
            <button type="button" @click="emit1go">set</button>
</template>

<style lang="scss" scoped>

</style>