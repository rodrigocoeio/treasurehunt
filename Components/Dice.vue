<template>
    <div class="GameDice">
        <h5>{{  Game.turn.steps  }}</h5>
        <button @click="throwDice" class="btn btn-primary" :disabled="!Game.turn.completed">Throw Dice</button>        
    </div>
</template>

<script>
export default {
    data() {
        return {
            Game: this.$parent.Game
        }
    },
    methods: {
        throwDice() {
            const Game = this.Game;

            const steps = Math.floor(Math.random() * 6) + 1;
            const player_number = Game.turn.player_number;

            Game.turn.player = Game.players[(player_number - 1)];
            Game.turn.steps = steps;

            Game.nextTurn();
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
    }

    div {
        text-align: center;
    }
</style>