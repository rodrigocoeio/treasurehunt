<template>
    
</template>

<script>
import objectMixins from "@/mixins/object-mixins.js";
import store from "$/store.js";

export default {
    mixins: objectMixins,

    methods: {
        preload(PhaserGame) {
            PhaserGame.load.image('chest', '/images/treasurechest.png');
        },

        create(PhaserGame) {
            this.chest = PhaserGame.add.image(store.configs.width/2, store.configs.height/2, 'chest');
        },

        destroy(PhaserGame) {
            if(this.chest)
                this.chest.destroy();
        }
    }
}    
</script>