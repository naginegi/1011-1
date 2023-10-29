<script>
import { mapState, mapActions } from 'pinia';
import indexState from '../stores/indexstate';
export default {
    data() {
        return {
            num: 10,
        }
    },
    computed: {
        //
        ...mapState(indexState, ["location", "locationInfo"])
    },
    methods: {
        ...mapActions(indexState, ["getLocation", "setLocation"])
    },
    mounted() {
        // this.getLocation();
        this.setLocation(8);
    },
}
</script>
<template>
    <div class="t">
        <h2>這是location:{{ location }}</h2>
        <h2>這是locationInfo:{{ locationInfo }}</h2>
    </div>
</template>

<style lang="scss" scoped>

</style>