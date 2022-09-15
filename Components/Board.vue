<template>
    <div class="GameBoard">
        <slot></slot>
        <GameTile v-for="i in 7"></GameTile>
        <GameTile v-for="i in 7"></GameTile>
        <GameTile v-for="i in 7"></GameTile>
        <GameTile v-for="i in 7"></GameTile>
        <GameTile v-for="i in 7"></GameTile>
    </div>

    <div id="game-canvas" class="container"></div>
</template>

<script>
    import store from "$/store.js";
    import GameTile from "../components/Tile.vue";
    import gameMixins from "@/mixins/game-mixins";

    export default 
    {
        mixins: gameMixins,
        data() {
            return {
                board: false,
                ... store
            };
        },

        methods: {
            preload(PhaserGame) {
                // Background
                PhaserGame.load.image('board', "/images/board.png");
            },
            create(PhaserGame) {
                console.log('board created');
                // Board
                this.board = PhaserGame.add.image(this.configs.width / 2, this.configs.height / 2, 'board');
            },
            update(PhaserGame) {
                
            },
            destroy(PhaserGame) {
                if(this.board)
                    this.board.destroy();
            }
        },

        components: 
        {
            GameTile
        }
    }
</script>