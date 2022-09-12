<template>
    <div class="GameDice">
        <h5 v-if="!turn.steps"> Trow the Dice!</h5>
        <img v-if="turn.steps" :src="diceImage" class="Dice">
        <button @click="throwDice" class="ThrowDiceButton btn btn-primary" :disabled="!turn.completed">Throw Dice</button>        
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
        }
    },
    methods: {
        throwDice() {
            const steps = Math.floor(Math.random() * 6) + 1;
            const player_number = this.turn.player_number;

            this.turn.player = this.players[(player_number - 1)];
            this.turn.steps = steps;

            this.Game.nextTurn();
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

    .ThrowDiceButton {
        margin-bottom: 15px;
    }
</style>