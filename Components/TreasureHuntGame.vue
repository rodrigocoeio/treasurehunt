<template>
    <Controls></Controls>

    <Welcome ref="welcome" v-show="!started"></Welcome>

    <Board col="7" rows="5" ref="board" v-show="started">

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