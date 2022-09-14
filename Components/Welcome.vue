<template>
    <div class="TreasureHuntWelcome">

    </div>
</template>

<script>
import store from "$/store.js";
import objectMixins from "@/mixins/object-mixins.js";

export default {
    mixins: objectMixins,

    data() {
        return {
            logo: false,
        }
    },

    methods: {
        preload(PhaserGame) {
            PhaserGame.load.image('logo', "images/treasure-hunt-logo.png");
        },
        create(PhaserGame) {
            this.logo = PhaserGame.add.image(store.configs.width / 2, store.configs.height / 2, 'logo');
            console.log("created welcome logo"+ this.logo);
        },
        update(PhaserGame) {
            console.log("updating welcome ");
        },
        destroy(PhaserGame) {
            console.log("destroying welcome logo "+ this.logo);
            if(this.logo)
                this.logo.destroy();
        }
    }
}
</script>