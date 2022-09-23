<template>
    <table class="bg-light" id="game">
        <tr>
            <td colspan="100%">
                <Menu ref="menu"></Menu>
            </td>
        </tr>
        <tr>
            <td width="894">
                <Welcome ref="welcome" v-if="!started"></Welcome>
                
                <Board ref="board" v-if="started">
                    <Player v-for="player in players" :player="player" ref="players"></Player>

                    <!-- <Finished ref="finished" v-show="finished"></Finished> -->
                </Board>
            </td>
            <td>
                <div class="bg-light" v-show="!configs.menu">
                    <div class="hide-menu form-check form-switch">
                        <input class="form-check-input" type="checkbox" name="hide-menu" id="hide-menu" v-model="configs.menu">
                        <label for="hide-menu">Menu</label>
                    </div>
                </div>
                <Dice ref="dice" v-if="started"></Dice>
                <Dashboard ref="dashboard"></Dashboard>
            </td>
        </tr>
    </table>    
</template>

<script>
import store from "$/store.js";
import Menu from "./Menu.vue";
import Welcome from "./Welcome.vue";
import Board from "./Board.vue";
import Dice from "./Dice.vue";
import Player from "./Player.vue";
import Tile from "./Tile.vue";
import Dashboard from "./Dashboard.vue";
import Finished from "./Finished.vue";

window.store = store;
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

    methods: {
        start() {
            this.$refs.menu.startGame();
        },

        quit() {
            this.$refs.menu.quitGame();
        }
    },

    components: {
        Welcome,
        Menu,
        Board,
        Dice,
        Player,
        Tile,
        Dashboard,
        Finished
    }
}
</script>

<style scoped>
table {
    margin: auto;
    padding: 0x;
    border-right: 0.1px solid #ccc;
    border-left: 0.1px solid #ccc;
    min-width: 1200px;
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