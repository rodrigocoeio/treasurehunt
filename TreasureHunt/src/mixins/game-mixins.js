import store from "$/store.js";
import Game from "@/game.js";

const GameMixins = [];

GameMixins.push({
    data() {
        return store;
    },

    beforeMount() {
        this.Game = this;
        store.Game = this;
    },

    beforeUnmount() {
        this.destroy();
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

        render(PhaserGame) {

        },

        destroy(PhaserGame) {
            if(this.Phaser && !this.destroyed)
            {
                this.Phaser.destroy(true);
                this.Phaser = false;
                this.destroyed=true;
            }
        }
    }
});

export default GameMixins;