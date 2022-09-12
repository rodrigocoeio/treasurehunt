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
        this.Game = this;
    },

    beforeUnmount() {
        this.closeGame();
    },

    methods: {
        preload(PhaserGame) {
            this.Phaser = PhaserGame;

            for(let refName in this.$refs) {
                let object = this.$refs[refName];

                if(object && object.preload){
                    object.preload(PhaserGame) 
                }
            }
        }, 

        create(PhaserGame) {
            for(let refName in this.$refs) {
                let object = this.$refs[refName];

                if(object && object.create){
                    object.create(PhaserGame) 
                }
            }
        },

        update(PhaserGame) {
            for(let refName in this.$refs) {
                let object = this.$refs[refName];

                if(object && object.update){
                    object.update(PhaserGame) 
                }
            }
        },

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