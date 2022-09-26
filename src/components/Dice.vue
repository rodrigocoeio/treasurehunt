<template>
    <div class="GameDice bg-light">
        <div class="Player" v-if="turn.player">
            <img :src="playerImage">
            <h5>{{ turn.player.name }}'s<br>turn</h5>
        </div>

        <img :src="diceImage" class="Dice">

        <button v-if="rollButton" :disabled="(turn.started && !turn.completed) || !started" @click="rollDice"
            class="RollDiceButton btn btn-primary">
            Roll Dice <img src="/images/dice/dice.png" height="24">
        </button>
        <button v-if="moveButton" @click="movePlayer" :disabled="player.moving" class="btn btn-primary">
            Move <img src="/images/signnext.png" height="24">
        </button>
        <button v-if="ruleButton" @click="executeRule" class="btn btn-primary">
            {{ turn.rule.name }}
        </button>
        <button v-if="nextButton" :disabled="!turn.completed" @click="nextTurn" class="NextTurnButton btn btn-primary">
            Next Turn 
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
            turn: store.turn,
            next_cheat_steps: false
        };
    },
    computed: {
        rollButton() {
            return (!store.turn.started && !this.steps);
        },
        moveButton() {
            return (store.turn.started && !store.turn.completed && !this.ruleButton);
        },
        nextButton() {
            return (store.turn.started && store.turn.completed);
        },
        ruleButton() {
            return (store.turn.started && store.turn.rule);
        },
        diceImage() {
            if (this.ruleButton && store.turn.rule.image)
                return store.turn.rule.image;

            if  (this.nextButton)
                return "/images/signnext.png";
                
            if (this.steps)
                return "/images/dice/" + this.steps + ".png";

            return "/images/dice/dice.png";
        },
        started() {
            return store.started
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
    beforeUnmount() {
        window.removeEventListener("keypress", this.listenKeyBoardEvents);
    },
    methods: {
        listenKeyBoardEvents(e) {
            if (e.keyCode == 32 || e.keyCode == 13) {
                if (this.rollButton)
                    return this.rollDice();
                if (this.moveButton && !this.player.moving)
                    return this.movePlayer();
                if (this.nextButton && store.turn.completed)
                    return this.nextTurn();
                if (this.ruleButton)
                    return this.executeRule();
            }

            if (this.rollButton)
            {
                let cheat_steps = false;

                switch (e.keyCode) {
                    case 49:
                        cheat_steps = 1;
                        break;
                    case 50:
                        cheat_steps = 2;
                        break;
                    case 51:
                        cheat_steps = 3;
                        break;
                    case 52:
                        cheat_steps = 4;
                        break;
                    case 53:
                        cheat_steps = 5;
                        break;
                    case 54:
                        cheat_steps = 6;
                        break;
                }

                console.log("Cheat dice activated: " + cheat_steps);
                this.next_cheat_steps = cheat_steps;
            }
        },
        preload() {
            for (let i = 1; i <= 6; i++) {
                let image = new Image();
                image.src = "/images/dice/" + i + ".png";
            }
        },
        rollDice() {
            this.steps = this.next_cheat_steps ? this.next_cheat_steps : Math.floor(Math.random() * 6) + 1;
            this.next_cheat_steps = false;

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
            let walk_to = this.player.steps + this.steps;
            walk_to = walk_to > (store.tiles.length - 1) ? (store.tiles.length - 1) : walk_to;

            store.turn.moved = false;
            this.player.moving = true;

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
                store.turn.rule = store.turn.rule.action(this.player.Component, store.turn);
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
    padding: 15px;
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
    max-height: 64px;
}

button {
    margin-bottom: 15px;
    font-family: aerial;
    font-size: 23px;
    font-weight: bold;
}
</style>