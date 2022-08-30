<template>
    <div class="TreasureHuntGame">
        <GameDice></GameDice>

        <GameBoard col="7" rows="5" image="/images/board.jpg">

            <GamePlayer v-for="player in players"></GamePlayer>

        </GameBoard>
    </div>

    <div class="game-canvas"></div>
</template>

<script>
import GameMixins from "../mixins/GameMixins.js";
import GameBoard from "./TreasureHunt/components/Board.vue";
import GameDice from "./TreasureHunt/components/Dice.vue";
import GamePlayer from "./TreasureHunt/components/Player.vue";

export default {
    // Mix Ins do Game
    mixins: GameMixins,

    // state/variaveis do componente
    data() {
        return {
            game_configs: {
                width: 894,
                height: 651,
                background: "images/board.jpg"
            }
        }
    },

    // triggered when component is mounted
    mounted() {
        
    },

    // triggered before un mount
    beforeUnmount() {
        
    },

    // methods / actions
    methods: {
        preload(PhaserGame) {
            this.PhaserGame = PhaserGame;

            if(this.game_configs.background)
                PhaserGame.load.image('background', this.game_configs.background);
        },

        create(PhaserGame) {
            if(this.game_configs.background)
                PhaserGame.add.image(this.game_configs.width / 2, this.game_configs.height / 2, 'background');
        }
    },

    components: {
        GameBoard,
        GameDice,
        GamePlayer
    }
}
</script>

<style scoped>
    /* Game Styles Goes Here */
</style>