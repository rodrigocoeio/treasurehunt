<template>
    <div class="GameBoard">
        <slot></slot>
    </div>

    <div id="game-canvas" class="container"></div>
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
                this.board.setAlpha(0.7);
            },
            update(PhaserGame) {
                
            },
            destroy(PhaserGame) {
                if(this.board)
                    this.board.destroy();
            }
        }
    }
</script>