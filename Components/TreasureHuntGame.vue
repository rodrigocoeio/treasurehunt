<template>
    <Controls></Controls>

    <Welcome ref="welcome" v-if="!started"></Welcome>

    <Board col="7" rows="5" ref="board" v-if="started">

        <Dice ref="dice"></Dice>

        <Player v-for="player in configs.players" :number="player" ref="players"></Player>

    </Board>

    <div id="game-canvas" class="container"></div>
</template>

<script>
import store from "$/store.js";
import GameMixins from "@/mixins/GameMixins.js";

import Controls from "./Controls.vue";
import Welcome from "./Welcome.vue";
import Board from "./Board.vue";
import Dice from "./Dice.vue";
import Player from "./Player.vue";

export default {
    // Mix Ins do Game
    mixins: GameMixins,

    mounted() {

    },

    // methods / actions
    methods: {
        preload(PhaserGame) {
            this.PhaserGame = PhaserGame;

            // welcome
            if(this.$refs.welcome)
                this.$refs.welcome.preload(PhaserGame);

            // board
            if(this.$refs.board)
                this.$refs.board.preload(PhaserGame);

            // player
            if(this.$refs.players)
                this.$refs.players[0].create(PhaserGame);
        },

        create(PhaserGame) {
            // welcome
            if(this.$refs.welcome)
                this.$refs.welcome.create(PhaserGame);

            // board
            if(this.$refs.board)
                this.$refs.board.create(PhaserGame);

            // players
            if(this.$refs.players)
                this.createPlayers(PhaserGame);
        },

        update(PhaserGame) {
            // welcome
            if(this.$refs.welcome)
                this.$refs.welcome.update(PhaserGame);

            // board
            if(this.$refs.board)
                this.$refs.board.update(PhaserGame);

            // players
            if(this.$refs.players)
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
    #game-canvas {
        text-align: center;
    }
</style>