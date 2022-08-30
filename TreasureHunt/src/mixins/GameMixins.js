import Game from "../game.js";

const GameMixins = [];

GameMixins.push({
    data() {
        return {
            Game: false,
            PhaserGame: false,
            game_configs: {}
        };
    },

    mounted() {
        this.Game = Game(this.game_configs, this);
    },

    beforeUnmount() {
        this.quit_game();
    },

    methods: {
        preload(){},
        create(){},
        update(){},
        quit_game() {
            if(this.Game)
            {
                this.Game.destroy(true);
                this.Game = false;
            }
        }
    }
});

export default GameMixins;