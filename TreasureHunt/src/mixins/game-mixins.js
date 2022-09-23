import store from "$/store.js";
import Game from "@/game.js";

const GameMixins = [];

GameMixins.push({
    data() {
        return store;
    },

    mounted() {
        store.Game = this;

        store.Phaser = Game(store.configs, this, store.components);
    },

    beforeUnmount() {
        this.destroy();
    },

    methods: {
        preload(PhaserGame) {
            /* this.Phaser = PhaserGame;

            for (let refName in this.$refs) {
                let object = this.$refs[refName];

                if (object && object.preload) {
                    object.preload(PhaserGame)
                }

                // case array of refs
                else if (object && object.length) {
                    object.forEach((obj) => {
                        if (obj && obj.preload) {
                            obj.preload(PhaserGame)
                        }
                    });
                }
            } */
        },

        create(PhaserGame) {
            /* for (let refName in this.$refs) {
                let object = this.$refs[refName];

                if (object && object.create) {
                    object.create(PhaserGame)
                }

                // case array of refs
                else if (object && object.length) {
                    object.forEach((obj) => {
                        if (obj && obj.create) {
                            obj.create(PhaserGame)
                        }
                    });
                }
            } */
        },

        update(PhaserGame) {
            /* for (let refName in this.$refs) {
                let object = this.$refs[refName];

                if (object && object.update) {
                    object.update(PhaserGame)
                }

                // case array of refs
                else if (object && object.length) {
                    object.forEach((obj) => {
                        if (obj && obj.update) {
                            obj.update(PhaserGame)
                        }
                    });
                }
            } */
        },

        render() {

            /* game.debug.text("Game Status: " + store.started, 32, 32);
            this.rendering = true; */

        },

        destroy() {
            if (this.Phaser && !this.destroyed) {
                this.Phaser.destroy(true);
                this.Phaser = false;
                this.destroyed = true;
            }
        }
    }
});

export default GameMixins;