<template>
    <div class="TreasureHuntWelcome">

    </div>
</template>

<script>
import store from "$/store.js";

export default {
    data() {
        return {
            background_image: "images/treasure-hunt-logo.png",
            background: false,
            ...store
        }
    },

    methods: {
        preload(PhaserGame) {
            PhaserGame.load.image('backgroud', this.background_image);
        },
        create(PhaserGame) {
            this.background = PhaserGame.add.image(this.configs.width / 2, this.configs.height / 2, 'backgroud');
        },
        update(PhaserGame) {
            if (!this.Game.started) {
                this.background.setVisible(true);
            } else {
                this.background.setVisible(false);
            }
        }
    }
}
</script>