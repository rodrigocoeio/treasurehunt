<template>
    <div class="GameBoard">
        <slot></slot>
        <GameTile v-for="i in 7"></GameTile>
        <GameTile v-for="i in 7"></GameTile>
        <GameTile v-for="i in 7"></GameTile>
        <GameTile v-for="i in 7"></GameTile>
        <GameTile v-for="i in 7"></GameTile>
    </div>
</template>

<script>
    import GameTile from "../components/Tile.vue";
    import store from "$/store.js";
    import objectMixins from "@/mixins/object-mixins.js";

    export default 
    {
        mixins: objectMixins,
        
        data() {
            return {
                board: false
            }
        },

        methods: {
            preload(PhaserGame) {
                PhaserGame.load.image('board', "/images/gameboard.jpg");
                PhaserGame.load.image('chest', "/images/treasure-hunt-logo.png");
                console.log("preloaded board "+ this.board);
            },
            create(PhaserGame) {
                this.board = PhaserGame.add.image(store.configs.width / 2, store.configs.height / 2, 'board');
                this.chest = PhaserGame.add.image(400,400, 'chest');
                console.log("created board "+ this.board);

                this.chest.setScale(0.4);
            },
            update(PhaserGame) {
                console.log("updating board "+ this.board);
            },
            destroy(PhaserGame) {
                if(this.board)
                    this.board.destroy();

                console.log("destroyed board "+ this.board);
            }
        },

        components: 
        {
            GameTile
        }
    }
</script>