<script>
import Title from "./dessert/title.vue";
import Onsale from "./dessert/Onsale.vue";
import News from "./dessert/News.vue";
import NewArrival from "./dessert/NewArrival.vue";
export default {
    data() {
        return {};
    },
    components: {
        Title,
        Onsale,
        News,
        NewArrival,
    },
};
</script>

<template>
    <div class="main">
        <div class="header">
            <div class="block"></div>
            <img src="../../public/甜點圖片/Group 10.png" alt="" />
        </div>
        <div class="title">
            <Title />
        </div>
        <div class="onsale">
            <Onsale />
        </div>
        <div class="t"></div>
        <div class="news">
            <News />
        </div>
        <div class="newarrival">
            <NewArrival />
        </div>
        <div class="footer"></div>
    </div>
</template>

<style lang="scss" scoped>
$c: rgb(243, 173, 173);

.main {
    width: 80%;
    height: 270%;
    border: 1px solid black;
    background-color: #feeedf;
    display: flex;
    flex-direction: column;
    align-items: center;

    .header {
        width: 100%;
        height: 7%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 25px;

        .block {
            width: 100px;
            height: 100px;
            background-color: $c;
        }
    }

    .title {
        width: 100%;
        height: 18%;
        display: flex;
    }

    .onsale {
        width: 100%;
        height: 20%;
    }

    .t {
        width: 90%;
        height: 0.1%;
        background-color: black;
    }

    .news {
        width: 100%;
        height: 25%;
    }

    .newarrival {
        width: 100%;
        height: 25%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .footer {
        width: 100%;
        height: 5%;
        background-color: $c;
    }
}</style>
