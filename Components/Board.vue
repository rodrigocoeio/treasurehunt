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

    export default 
    {
        data() {
            const Game = this.$parent;

            return {
                Game: Game,
                configs: Game.configs,
                background_image: "images/board.jpg"
            }
        },

        methods: {
            preload(PhaserGame) {
                // Background
                PhaserGame.load.image('background', this.background_image);
            },
            create(PhaserGame) {
                // Background
                this.background = PhaserGame.add.image(this.configs.width / 2, this.configs.height / 2, 'background');
            },
            update(PhaserGame) {
                if(!this.Game.started)
                {
                    this.background.setVisible(false);
                } else {
                    this.background.setVisible(true);
                }
            }
        },

        components: 
        {
            GameTile
        }
    }
</script>