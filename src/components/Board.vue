<template>
    <div class="GameBoard">
        <tile :number="tile.number" :x="tile.x" :y="tile.y" :image="tile.image" width="130" height="130"
            v-for="tile in gameTiles"></tile>
        <slot></slot>
    </div>

    <div id="game-canvas"></div>
</template>

<script>
import store from "$/store.js";
import gameMixins from "@/mixins/game-mixins";
import Tile from "#/Tile.vue";

export default
    {
        mixins: gameMixins,

        data() {
            return {
                board: false,
                background_audio: false
            };
        },

        computed: {
            gameTiles() {
                const difficulty = store.configs.difficulty;
                const tiles = store.configs.tiles[difficulty] ? store.configs.tiles[difficulty] : [];

                return tiles;
            },
            sound() {
                return store.configs.sound;
            },
            music() {
                return store.configs.music;
            }
        },

        mounted() {
            this.startMusic();

            store.tiles = this.gameTiles;
        },

        beforeUnmount() {
            this.stopMusic();
        },

        methods: {
            startMusic() {
                if (this.sound && this.music) {
                    if (!this.background_audio)
                        this.background_audio = playAudio('board-background2');

                    this.background_audio.volume = 0.5;
                    this.background_audio.loop = true;


                    this.background_audio.play();
                }
            },
            stopMusic() {
                if (this.background_audio) {
                    this.background_audio.pause();
                    this.background_audio = false;
                }
            },
            preload(PhaserGame) {
                // Background
                PhaserGame.load.image('board', "/images/gameboard.png");
            },
            create(PhaserGame) {
                console.log('board created');
                // Board
                this.board = PhaserGame.add.image(store.configs.width / 2, store.configs.height / 2, 'board');
                //this.board.setAlpha(0.8);
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

canvas {
    image-rendering: -moz-crisp-edges;
    image-rendering: -webkit-crisp-edges;
    image-rendering: pixelated;
}
</style>