<template>
    <Controls></Controls>

    <Welcome ref="welcome" v-show="!started"></Welcome>

    <Board col="7" rows="5" ref="board" v-show="started">

        <Dice ref="dice"></Dice>

        <Player v-for="player in game_configs.players" :number="player" ref="players"></Player>

    </Board>

    <div id="game-canvas"></div>
</template>

<script>
import GameMixins from "@/mixins/GameMixins.js";

import Controls from "./Controls.vue";
import Welcome from "./Welcome.vue";
import Board from "./Board.vue";
import Dice from "./Dice.vue";
import Player from "./Player.vue";

export default {
    // Mix Ins do Game
    mixins: GameMixins,

    // state/variaveis do componente
    data() {
        return {
            PhaserGame: false,
            game_configs: {
                width: 894,
                height: 651,
                players: 2
            },
            started: false,
            players: [],
            turn: {
                turn: 1,
                steps: "",
                player_number: false,
                player: false,
                completed: true
            }
        }
    },

    // methods / actions
    methods: {
        preload(PhaserGame) {
            this.PhaserGame = PhaserGame;

            // welcome
            this.$refs.welcome.preload(PhaserGame);

            // board
            this.$refs.board.preload(PhaserGame);

            // player
            this.$refs.players[0].preload(PhaserGame);
        },

        create(PhaserGame) {
            // welcome
            this.$refs.welcome.create(PhaserGame);

            // board
            this.$refs.board.create(PhaserGame);

            // players
            this.createPlayers(PhaserGame);
        },

        update(PhaserGame) {
            // welcome
            this.$refs.welcome.update(PhaserGame);

            // board
            this.$refs.board.update(PhaserGame);

            // players
            this.updatePlayers(PhaserGame);
        },

        createPlayers(PhaserGame) {
            for(const player of this.$refs.players)
            {
                player.create(PhaserGame);
            }
        },

        updatePlayers(PhaserGame) {
            for(const player of this.$refs.players)
            {
                player.update(PhaserGame);
            }
        },

        starGame() {
            this.started = true;
            this.turn.turn = 1;
            this.turn.steps = "";
            this.turn.player = this.players[0];
            this.turn.player_number = 1;
        },

        quitGame() {
            this.started = false;
        },

        nextTurn() {
            console.log('next turn');

            this.turn.turn++;

            if(this.turn.player_number >= this.game_configs.players)
            {
                this.turn.player = this.players[0];
                this.turn.player_number = 1;
            } else {
                this.turn.player_number++;
                this.turn.player = this.players[ this.turn.player_number ];
            }
            
            this.turn.completed = false;
        }
    },

    components: {
        Welcome,
        Controls,
        Board,
        Dice,
        Player
    }
}
</script>

<style scoped>
/* Game Styles Goes Here */
</style>