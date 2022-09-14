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
    import store from "$/store.js";
    import GameTile from "../components/Tile.vue";
    import objectMixins from "@/mixins/objectMixins";

    export default 
    {
        mixins: objectMixins,
        data() {
            const Game = this.$parent;

            return {
                Game: Game,
                ... store
            };
        },

        methods: {
            preload(PhaserGame) {
                // Background
                PhaserGame.load.image('background', "/images/board.jpg");
            },
            create(PhaserGame) {
                console.log('board created');
                // Background
                this.background = PhaserGame.add.image(this.configs.width / 2, this.configs.height / 2, 'background');
            },
            update(PhaserGame) {
                
            },
            destroy(PhaserGame) {
                if(this.background)
                    this.background.destroy();
            }
        },

        components: 
        {
            GameTile
        }
    }
</script>