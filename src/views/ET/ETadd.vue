<script>
export default {
    emits: ["get", "cancal"],
    data() {
        return {
            addobj: {
                state: "",
                addtext: "",
                addmoney: "",
                page: true,
            },
        };
    },
    props: ["props"],
    methods: {
        pageoff() {
            this.addobj.page = false;
            this.$emit("get", this.addobj);
            // console.log("addobj")
            // console.log(this.addobj)
        },
        can() {
            this.page = false;
        },
        test() {
            // this.page = this.props
            console.log("page");
            console.log(this.props);
        },
    },
    components: {},
};
</script>

<template>
    <div class="bg">
        <div class="add">
            <div class="input text">
                <label for="">name</label>
                <input type="text" v-model="addobj.addtext" />
            </div>
            <div class="input money">
                <label for="">money</label>
                <input type="number" v-model="addobj.addmoney" />
            </div>
            <div class="input-state">
                <input type="radio" value="income" name="" id="" v-model="addobj.state" />
                <label for="">income</label>
                <p></p>
                <input type="radio" value="expense" name="" id="" v-model="addobj.state" />
                <label for="">expense</label>
            </div>
            <button type="button" class="button" @click="pageoff">complete</button>
            <!-- <button type="button" class="button" @click="can">cancal</button> -->
        </div>
    </div>
    <!-- <button type="button" @click="test">btn</button> -->
</template>

<style lang="scss" scoped>
.bg {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.236);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .add {
        width: 35%;
        height: 60%;
        border: 1px solid black;
        border-radius: 30px;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 16pt;

        .input {
            display: flex;
            flex-direction: column;
            margin-bottom: 10%;
        }

        .button {
            margin-top: 10%;
        }
    }
}
</style>
