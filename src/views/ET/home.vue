<script>
import {RouterLink,RouterView} from "vue-router";
export default {
    data() {
        return {
            page:0,
        }
    },
    methods: {
    },
    components: {
    }
}
</script>

<template>
    <div class="area">
        <RouterView />
    </div>
</template>

<style lang="scss" scoped>
.area {
    width: 80%;
    height: 80%;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;

}
</style>