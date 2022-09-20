<template>
    <div class="GameBoard">
        <slot></slot>
    </div>

    <div id="game-canvas"></div>
</template>

<script>
import store from "$/store.js";
import gameMixins from "@/mixins/game-mixins";

export default
    {
        mixins: gameMixins,
        data() {
            return {
                board: false,
                background_audio: false,
                ...store
            };
        },

        mounted() {
            this.startMusic();
        },

        beforeUnmount() {
            this.stopMusic();
        },

        methods: {
            startMusic() {
                if (!this.background_audio)
                    this.background_audio = playAudio('board-background');

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
        }
    }
</script>

<style scoped>
    #game-canvas {
        width: 894px;
    }
</style>