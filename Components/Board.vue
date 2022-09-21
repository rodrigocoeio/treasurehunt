<template>
    <div class="GameBoard">
        <slot></slot>

        <!-- <tile :number="number" :x="tile.x" :y="tile.y" width="128" height="130" :rule="rule" v-for="tile in tiles"></tile> -->
    </div>

    <div id="game-canvas"></div>
</template>

<script>
import store from "$/store.js";
import gameMixins from "@/mixins/game-mixins";
import Tile from "#/Tile.vue";

const rules = {
    startOver: {
        name: "Start Over",
        trigger() {
            playAudio('start-over');
            playAudio('start-it-over');
        },
        action(player) {
            player.startOver();
        }
    },
    goBack2: {
        name: "Go Back",
        trigger() {
            playAudio('back-2');
        },
        action(player) {
            player.goBack(2);
        }
    },
    goFoward2: {
        name: "Go Foward",
        trigger() {
            playAudio('forward-2');
        },
        action(player) {
            player.goFoward(2);
        }
    },
    finished: {
        name: "Finished!",
        trigger() {
            playAudio('finished');
        },
        action(player) {
            player.finished();
        }
    }
};

export default
    {
        mixins: gameMixins,

        data() {
            return {
                board: false,
                background_audio: false,
                tiles: [
                    // Row 1
                    { number: 0, x: 0, y: 0 },
                    { number: 1, x: 128, y: 0 },
                    { number: 2, x: 256, y: 0 },
                    { number: 3, x: 384, y: 0 },
                    { number: 4, x: 512, y: 0 },
                    {
                        number: 5, x: 640, y: 0,
                        rule: rules.goBack2
                    },
                    { number: 6, x: 772, y: 0 },

                    // Row 2
                    {
                        number: 7, x: 772, y: 130,
                        rule: rules.goFoward2
                    },
                    { number: 8, x: 640, y: 130 },
                    { number: 9, x: 512, y: 130 },
                    {
                        number: 10, x: 384, y: 130,
                        rule: rules.startOver
                    },
                    { number: 11, x: 256, y: 130 },
                    { number: 12, x: 128, y: 130 },
                    { number: 13, x: 0, y: 130 },

                    // Row 3
                    { number: 14, x: 0, y: 260 },
                    {
                        number: 15, x: 128, y: 260,
                        rule: rules.goBack2
                    },
                    { number: 16, x: 256, y: 260 },
                    { number: 17, x: 384, y: 260 },
                    { number: 18, x: 512, y: 260 },
                    {
                        number: 19, x: 640, y: 260,
                        rule: rules.startOver
                    },
                    { number: 20, x: 772, y: 260 },

                    // Row 4
                    { number: 21, x: 772, y: 390 },
                    { number: 22, x: 640, y: 390 },
                    { number: 23, x: 512, y: 390 },
                    {
                        number: 24, x: 384, y: 390,
                        rule: rules.goFoward2
                    },
                    { number: 25, x: 256, y: 390 },
                    { number: 26, x: 128, y: 390 },
                    { number: 27, x: 0, y: 390 },
                    // Row 5
                    { number: 28, x: 0, y: 520 },
                    { number: 29, x: 128, y: 520 },
                    {
                        number: 30, x: 256, y: 520,
                        rule: rules.startOver
                    },
                    { number: 31, x: 384, y: 520 },
                    {
                        number: 32, x: 512, y: 520,
                        rule: rules.goBack2
                    },
                    { number: 33, x: 640, y: 520 },
                    {
                        number: 34, x: 772, y: 520,
                        rule: rules.finished
                    }
                ],
                ...store
            };
        },

        mounted() {
            this.startMusic();
            store.configs.tiles = this.tiles;
        },

        beforeUnmount() {
            this.stopMusic();
        },

        methods: {
            startMusic() {
                if (!this.background_audio)
                    this.background_audio = playAudio('board-background2');

                this.background_audio.volume = 0.5;
                this.background_audio.loop = true;
                this.background_audio.play();
            },
            stopMusic() {
                if (this.background_audio) {
                    this.background_audio.pause();
                    this.background_audio = false;
                }
            },
            preload(PhaserGame) {
                // Background
                PhaserGame.load.image('board', "/images/board.png");
            },
            create(PhaserGame) {
                console.log('board created');
                // Board
                this.board = PhaserGame.add.image(this.configs.width / 2, this.configs.height / 2, 'board');
                this.board.setAlpha(0.5);
            },
            update(PhaserGame) {

            },
            destroy(PhaserGame) {
                if (this.board)
                    this.board.destroy();
            }
        },

        components: {
            Tile
        }
    }
</script>

<style scoped>
#game-canvas {
    width: 894px;
}
</style>