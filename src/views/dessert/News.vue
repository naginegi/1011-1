<script>
export default {
    data() {
        return {
            imgarr:[
            "../../../public/甜點圖片/5.png",
            "../../../public/甜點圖片/6.png",
            "../../../public/甜點圖片/7.png"
            ]
        }
    },
    components: {

    }
}
</script>

<template>
    <!-- <h1>News</h1>
    <div class="area">
        <div class="card">
            <img src="../../../public/甜點圖片/5.png">
            <span>Lorem ipsum dolor sit amet.</span>
            <button type="button">item</button>
        </div>
        <div class="card">
            <img src="../../../public/甜點圖片/6.png">
            <span>Lorem ipsum dolor sit amet.</span>
            <button type="button">item</button>
        </div>
        <div class="card">
            <img src="../../../public/甜點圖片/7.png">
            <span>Lorem ipsum dolor sit amet.</span>
            <button type="button">item</button>
        </div>
    </div> -->
    <h1>News</h1>
    <div class="area">
        <div class="card" v-for="img in imgarr">
            <img :src="img" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Lorem ipsum dolor sit amet.</p>
                <a href="#" class="btn btn-primary">Detail</a>
            </div>
        </div>
<!-- 
        <div class="card">
            <img src="../../../public/甜點圖片/6.png" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Lorem ipsum dolor sit amet.</p>
                <a href="#" class="btn btn-primary">Detail</a>
            </div>
        </div>
        <div class="card">
            <img src="../../../public/甜點圖片/7.png" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Lorem ipsum dolor sit amet.</p>
                <a href="#" class="btn btn-primary">Detail</a>
            </div>
        </div> -->
    </div>
    <button type="button" class="btn-more">More</button>
</template>

<style lang="scss" scoped>
h1 {
    margin-left: 42%;
}
.btn-more{
    width: 10%;
    height: 10%;
    background-color: #f8bcbc;
    margin-left: 44%;
    border: 0px;
    border-radius: 10px;
    box-shadow: 5px 5px 5px #827e7e;
}
.area {
    width: 100%;
    height: 75%;
    display: flex;
    justify-content: space-around;

    .card {
        width: 25%;
        height: 80%;
        box-shadow: 5px 5px 5px #827e7e;

        img {
            width: 100%;
        }
        a{
            color: white;
            background-color: #a6a6a6;
            box-shadow: 5px 5px 5px #b4aeae
        }

        // button {
        //     width: 40%;
        //     height: 15%;
        //     background-color: rgb(226, 144, 144);
        //     color: white;
        //     border-radius: 10px;
        //     border: 0px;
        // }
    }
}
</style>