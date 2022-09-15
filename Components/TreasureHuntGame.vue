<template>
    <Controls></Controls>

    <Welcome ref="welcome" v-if="!started"></Welcome>

    <Board col="7" rows="5" ref="board" v-if="started">

        <Dice ref="dice"></Dice>

        <Player v-for="player in configs.players" :number="player" ref="players"></Player>

    </Board>
</template>

<script>
import store from "$/store.js";
import Controls from "./Controls.vue";
import Welcome from "./Welcome.vue";
import Board from "./Board.vue";
import Dice from "./Dice.vue";
import Player from "./Player.vue";

export default {
    data() {
        return store
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

<style>
    body {
        text-align: center;
    }
    
    #game-canvas {
        text-align: center;
    }
</style>