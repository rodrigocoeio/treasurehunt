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
        // starts the game with given configurations
        this.Game = Game(this.game_configs, this);
    },

    beforeUnmount() {
        this.close_game();
    },

    methods: {
        preload(){},
        create(){},
        close_game() {
            if(this.Game)
            {
                this.Game.destroy(true);
                this.Game = false;
            }
        }
    }
});

export default GameMixins;