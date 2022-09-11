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
                game_configs: Game.game_configs,
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
                this.background = PhaserGame.add.image(this.game_configs.width / 2, this.game_configs.height / 2, 'background');
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