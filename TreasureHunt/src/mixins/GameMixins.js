import Game from "../game.js";
import store from "$/store.js";

const GameMixins = [];

GameMixins.push({
    data() {
        return store;
    },

    mounted() {
        // starts the game with given configurations
        this.Phaser = Game(this.configs, this);
    },

    beforeUnmount() {
        this.closeGame();
    },

    methods: {
        preload(){},
        create(){},
        closeGame() {
            if(this.Phaser)
            {
                this.Phaser.destroy(true);
                this.Phaser = false;
            }
        }
    }
});

export default GameMixins;