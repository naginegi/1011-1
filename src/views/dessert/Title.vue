<script>
export default {
    data() {
        return {

        }
    },
    components: {

    }
}
</script>

<template>
    <div class="left">
        <h1>Title</h1>
        <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis maiores repellendus sapiente! Eos ducimus
            aliquam non magni deleniti, quo esse minima explicabo ut nihil animi repellat id vel debitis blanditiis?</span>
    </div>
    <div class="right">
        <img src="../../../public/甜點圖片/1.png">
    </div>
</template>

<style lang="scss" scoped>
.left {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
        margin-left: 40px;
    }

    span {
        margin-left: 30px;
    }
}

.right {
    width: 50%;
    height: 100%;

    img {
        width: 80%;
        margin-left:10%;
        margin-top: 15%;
    }
}</style>