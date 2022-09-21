<template>
    <table>
        <tr>
            <td colspan="100%">
                <Controls></Controls>
            </td>
        </tr>
        <tr>
            <td width="894">
                <Welcome ref="welcome" v-if="!started"></Welcome>
                
                <Board col="7" rows="5" ref="board" v-if="started">
                    <Player v-for="player in players" :player="player" ref="players"></Player>
                </Board>
            </td>
            <td>
                <Dice ref="dice"></Dice>
                <Dashboard ref="dashboard"></Dashboard>
            </td>
        </tr>
    </table>    
</template>

<script>
import store from "$/store.js";
import Controls from "./Controls.vue";
import Welcome from "./Welcome.vue";
import Board from "./Board.vue";
import Dice from "./Dice.vue";
import Player from "./Player.vue";
import Tile from "../components/Tile.vue";
import Dashboard from "../components/Dashboard.vue";

window.playAudio = (audio_name,extension="mp3") => {
    var audio = new Audio("/audio/" + audio_name + "." + extension);
    audio.play();
    audio.muted = !store.configs.sound;
    return audio;
}

export default {
    data() {
        return store
    },

    watch: {
        "configs.sound": function(val) {
            if(val){
                if(this.$refs.board)
                    this.$refs.board.startMusic();
                if(this.$refs.welcome)
                    this.$refs.welcome.startMusic();
            }
            else {
                if(this.$refs.board)
                    this.$refs.board.stopMusic();
                if(this.$refs.welcome)
                    this.$refs.welcome.stopMusic();
            }
        }
    },

    components: {
        Welcome,
        Controls,
        Board,
        Dice,
        Player,
        Tile,
        Dashboard
    }
}
</script>

<style>
table {
    margin: auto;
    padding: 0x;
}

td {
    vertical-align: top;
    margin: 0px;
    padding: 0x;
}

#game-canvas {
    text-align: center;
}
</style>