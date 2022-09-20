<template>
    <div class="GameDice">
        <div class="Player">
            <img :src="playerImage">
            <h5>{{ turn.player.name }}</h5>
        </div>

        <img :src="diceImage" class="Dice">

        <button v-if="rollButton" :disabled="(turn.started && !turn.completed)" @click="rollDice"
            class="RollDiceButton btn btn-primary">
            Roll <img src="/images/dice/dice.png" height="24">
        </button>
        <button v-if="moveButton" @click="movePlayer" class="btn btn-primary">
            Move <img src="/images/signnext.png" height="24">
        </button>
        <button v-if="ruleButton" @click="executeRule" class="btn btn-primary">
            {{ turn.rule.name }}
        </button>
        <button v-if="nextButton" :disabled="!turn.completed" @click="nextTurn" class="NextTurnButton btn btn-primary">
            Next <img src="/images/signnext.png" height="24">
        </button>
    </div>
</template>

<script>
import store from "$/store.js";

export default {
    data() {
        return {
            rolling: false,
            steps: 0,
            turn: store.turn
        };
    },
    computed: {
        rollButton() {
            return (!store.turn.started && !this.steps);
        },
        moveButton() {
            return (store.turn.started && !store.turn.moved);
        },
        nextButton() {
            return (store.turn.started && store.turn.moved && !this.ruleButton);
        },
        ruleButton() {
            return (store.turn.started && store.turn.rule);
        },
        diceImage() {
            if (this.steps)
                return "/images/dice/" + this.steps + ".png";

            return "/images/dice/dice.png";
        },
        player() {
            return store.turn.player;
        },
        playerImage() {
            return this.player.image;
        },
        players() {
            return store.players;
        }
    },

    mounted() {
        this.preload();
        window.addEventListener("keypress", this.listenKeyBoardEvents);
    },
    methods: {
        listenKeyBoardEvents(e) {
            if (e.keyCode == 32 || e.keyCode == 13) {
                dd(this.rollButton);
                if (this.rollButton)
                    return this.rollDice();
                if (this.moveButton)
                    return this.movePlayer();
                if (this.nextButton && store.turn.completed)
                    return this.nextTurn();
                if (this.ruleButton)
                    return this.executeRule();
            }
        },
        preload() {
            console.log('preloading dice');
            for (let i = 1; i <= 6; i++) {
                let image = new Image();
                image.src = "/images/dice/" + i + ".png";
            }
        },

        rollDice() {
            this.steps = Math.floor(Math.random() * 6) + 1;

            playAudio('dice');
            playAudio('dice-' + this.steps);

            console.log(this.player.name + " has rolled a " + this.steps);

            this.startTurn();
        },

        startTurn() {
            const player_number = (this.turn.player_number - 1);
            const player = this.players[player_number];
            store.turn.started = true;
            store.turn.player = player;
            store.turn.steps = this.steps;
            store.turn.moved = false;
            store.turn.completed = false;
        },

        movePlayer() {
            const walk_to = this.player.steps + this.steps;

            store.turn.moved = true;

            console.log(this.player.name + ' has rolled a ' + this.steps + ' and will walk to ' + walk_to);

            if (this.player.Component)
                this.player.Component.walkTo(walk_to);
        },

        nextTurn() {
            console.log('next turn');

            playAudio('roll-dice');

            this.steps = 0;

            // logs last turn
            store.turns.push(store.turn);

            store.turn.turn++;

            if (store.turn.player_number >= store.configs.players) {
                store.turn.player = store.players[0];
                store.turn.player_number = 1;
            } else {
                store.turn.player = store.players[store.turn.player_number];
                store.turn.player_number++;
            }

            store.turn.started = false;

            if (store.turn.player.finished)
                return this.nextTurn();
        },

        executeRule() {
            if (store.turn.rule) {
                store.turn.rule.action(this.player.Component);
                store.turn.rule = false;
            }
        }
    }
}
</script>

<style scoped>
table {
    margin: auto;
    text-align: center;
    position: absolute;
    left: calc(100% - 300px);
}

.GameDice {
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    min-height: 200px;
    margin-bottom: 15px;
}

.Dice {
    display: block;
    margin: auto;
    margin-top: 17px;
    margin-bottom: 15px;
    max-height: 64px;
}

.Player img {
    max-height: 63px;
}

button {
    margin-bottom: 15px;
    font-family: aerial;
    font-size: 23px;
    font-weight: bold;
}
</style>