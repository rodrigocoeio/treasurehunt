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
    
        },

        create(PhaserGame) {

        },

        update(PhaserGame) {

        },

        render(PhaserGame) {

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