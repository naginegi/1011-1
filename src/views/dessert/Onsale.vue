<script>
export default {
    data() {
        return {
            imgarr:[
            "../../../public/甜點圖片/2.png",
            "../../../public/甜點圖片/3.png",
            "../../../public/甜點圖片/4.png"
            ]
        }
    },
    components: {

    }
}
</script>

<template>
    <h1>On sale</h1>
    <div class="area">

        <div class="card" v-for=" img in imgarr">
            <img v-bind:src="img">
            <button type="button">item</button>
        </div>
        <!-- <div class="card">
            <img src="../../../public/甜點圖片/3.png">
            <button type="button">item</button>
        </div>
        <div class="card">
            <img src="../../../public/甜點圖片/4.png">
            <button type="button">item</button>
        </div> -->
    </div>
</template>

<style lang="scss" scoped>
h1 {
    margin-left: 42%;
}

.area {
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: space-around;
    position: relative;

    .card {
        width: 27%;
        height: 84%;

        img {
            width: 100%;
        }

        button {
            width: 40%;
            height: 15%;
            position: absolute;
            bottom: 10px;
            left: 58px;
            background-color: rgb(226, 144, 144);
            color: white;
            border-radius: 10px;
            border: 0px;
        }
    }
}</style>