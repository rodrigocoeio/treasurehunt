<template>
    <div class="GameTile"></div>
</template>

<script>
    import store from "$/store.js";
    import objectMixins from "@/mixins/object-mixins.js";

    export default {
        props: ['number','x','y'],
        mixins: objectMixins
    }
</script>