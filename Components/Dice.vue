<template>
    <div class="GameDice">
        <div class="Player" v-if="!turn.started">
            <img :src="playerImage">
            <h5>Player {{ turn.player_number }}</h5>
        </div>
        
        <img v-if="turn.started" :src="diceImage" class="Dice">

        <button v-if="!turn.started" @click="throwDice" class="ThrowDiceButton btn btn-primary">Throw Dice</button>        
        <button v-if="turn.started" @click="nextTurn" class="NextTurnButton btn btn-primary">Next Turn</button>        
    </div>
</template>

<script>
import store from "$/store.js";

export default {
    data() {
        return store;
    },
    computed: {
        diceImage() {
            return "/images/dice/" + this.turn.steps + ".png";
        },
        playerImage() {
            return "/images/players/player" + this.turn.player_number + ".png";
        }
    },
    methods: {
        throwDice() {
            const steps = Math.floor(Math.random() * 6) + 1;
            const player_number = this.turn.player_number;

            this.turn.player = this.players[(player_number - 1)];
            this.turn.steps = steps;

            this.turn.started = true;
        },

        nextTurn() {
            console.log('next turn');

            store.turn.turn++;

            if (store.turn.player_number >= store.configs.players) {
                store.turn.player = store.players[0];
                store.turn.player_number = 1;
            } else {
                store.turn.player_number++;
                store.turn.player = store.players[store.turn.player_number];
            }

            store.turn.started = false;
        },

        quitGame() {
            this.Game.quitGame();
        }
    }
}
</script>

<style scoped>
    .GameDice {
        font-size: 16px;
        font-weight: bold;
        text-align: center;
    }

    .Dice {
        display:block;
        margin: auto;
        margin-bottom: 15px;
    }

    .Player img {
        max-height: 63px;
    }

    button {
        margin-bottom: 15px;
    }
</style>