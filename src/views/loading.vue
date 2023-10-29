<script>
export default {
    data() {
        return {
            myArray: new Array(540).fill(null),
            login1: true,
            login2: false,
            login3: false,
            logani:false
        };
    },
    methods: {
        log() {
            this.logani= true;
            this.login3 = true;
            setTimeout(() => {
                this.login1 = false;
                // console.log("54654");
            }, 2000);
            
            this.display();
        },

        display(){

        },
    },
};
</script>

<template>
    <div class="area">
        <div class="block" v-for="i in myArray" v-if="login3 == true"></div>
    </div>
    <div class="spinner-box" :class="{logani:logani}" v-if="login1 == true" @click="log">
        <div class="pulse-container">
            <div class="pulse-bubble pulse-bubble-1"></div>
            <div class="pulse-bubble pulse-bubble-2"></div>
            <div class="pulse-bubble pulse-bubble-3"></div>
            <div class="pulse-bubble pulse-bubble-4"></div>
            <div class="pulse-bubble pulse-bubble-5"></div>
            <div class="pulse-bubble pulse-bubble-6"></div>
            <div class="pulse-bubble pulse-bubble-7"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.area {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    position: fixed;

    .block {
        width: 50px;
        height: 50px;
        // border-radius: 50%;
        background-color: rgba(255, 255, 255, 0);
        transition: background-color 2s ease;
        &:hover {
            background-color: #176b87;
            transition: background-color 0.01s ease;
            // background-image: url(../../public/star.gif);
            background-size: cover;
        }
        
    }
}


    //////////////////////////////////////////////////////
    .spinner-box {
        position: fixed;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #04364a;
        z-index: 2;
        &.logani{
            animation: logani 2s;
        }
    }

    .pulse-container {
        width: 200px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        animation: dow 1s;
    }

    .pulse-bubble {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #3ff9dc;
    }

    .pulse-bubble-1 {
        animation: pulse 1.2s ease 1s infinite alternate;
    }

    .pulse-bubble-2 {
        animation: pulse 1.2s ease 1.2s infinite alternate;
    }

    .pulse-bubble-3 {
        animation: pulse 1.2s ease 1.4s infinite alternate;
    }
    .pulse-bubble-4 {
        animation: pulse 1.2s ease 1.6s infinite alternate;
    }
    .pulse-bubble-5 {
        animation: pulse 1.2s ease 1.8s infinite alternate;
    }
    .pulse-bubble-6 {
        animation: pulse 1.2s ease 2s infinite alternate;
    }
    .pulse-bubble-7 {
        animation: pulse 1.2s ease 2.2s infinite alternate;
    }

    @keyframes pulse {
        from {
            opacity: 1;
            transform: scale(1);
        }
        
        to {
            opacity: 0.25;
            transform: scale(0.75);
            // transform: translateY(100px);
        }
    }

    @keyframes logani {
        0%{
            top: 0%;
        }
        5%{
            top: 5%;
            
        }
        10%{
            top: 5%;
            
        }
        100%{
            top: -100%;

        }
        
    }

    @keyframes dow {
        0%{
            transform: translateY(-200px);
        }
        50%{
            transform: translateY(50px);
        }
        100%{
            transform: translateY(0px);
        }
    }

    //////////////////////////////////////////////////////
</style>
