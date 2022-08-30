<template>
    <div>
        <h1>Phaser 3 Examples</h1>
        <nav>
            <select v-model="game">
                <option value="first-game">First Game</option>
                <option value="breakout">Breakout</option>
                <option value="flood-fill">Flood Fill</option>
                <option value="yahtzee">Yahtzee ( Dice )</option>
                <option value="my-example">My Example</option>
            </select>
        </nav>
        <div id="game-canvas"></div>
    </div>
</template>

<script>
var Game = false;

import FirstGame from "../phaser-examples/first-game.js";
import Breakout from "../phaser-examples/breakout.js";
import FloodFill from "../phaser-examples/flood-fill.js";
import Yahtzee from "../phaser-examples/yahtzee.js";
import MyExample from "../phaser-examples/my-example.js";

export default {
    data() {
        return {
            game: false
        };
    },

    watch: {
        'game'(game) {
            if (this.game)
                this.quit_game();

            switch (game) {
                case 'first-game':
                    Game = FirstGame();
                    break;
                case 'breakout':
                    Game = Breakout();
                    break;
                case 'flood-fill':
                    Game = FloodFill();
                    break;
                case 'yahtzee':
                    Game = Yahtzee();
                    break;
                case 'my-example':
                    Game = MyExample();
                    break;
            }
        }
    },

    mounted() {
        this.game = 'first-game';
    },

    beforeUnmount() {
        this.quit_game();
    },

    methods: {
        quit_game() {
            if(Game)
            {
                Game.destroy(true);
                Game = false;
            }
            
        }
    }
}
</script>