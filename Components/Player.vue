<template>
    <div class="GamePlayer">

    </div>
</template>

<script>
import objectMixins from "@/mixins/object-mixins.js";
import store from "$/store.js";

export default {
    props: ['player'],

    mixins: objectMixins,

    data() {
        const Game = this.$parent.Game;
        return {
            Game: Game,
            Player: false,
            moving: false,
            start_position: false
        }
    },

    mounted() {
        this.player.Component = this;
    },

    computed: {
        isSelected() {
            return this.player == store.turn.player;
        }
    },

    methods: {
        preload(PhaserGame) {
            PhaserGame.load.image(this.player.name, this.player.image);
        },

        create(PhaserGame) {
            const x = this.player.position ? this.player.position.x : 0;
            const y = this.player.position ? this.player.position.y : 0;
            const player = PhaserGame.physics.add.sprite(x, y, this.player.name);

            if (this.player.scale)
                player.setScale(this.player.scale);

            this.physics = PhaserGame.physics;
            this.Player = player;
        },

        update(PhaserGame) {
            if (this.target) {
                let distance = Phaser.Math.Distance.Between(this.Player.x, this.Player.y, this.target.x, this.target.y);

                if (this.Player.body.speed > 0) {
                    //  4 is our distance tolerance, i.e. how close the source can get to the target
                    //  before it is considered as being there. The faster it moves, the more tolerance is required.
                    if (distance < 4) {
                        const tile = this.target.tile;
                        this.Player.body.reset(this.target.x, this.target.y);
                        if(tile.rule)
                            tile.rule(this);
                        else
                            store.turn.completed = true;
                    }
                }
            }
        },

        move(steps) {
            this.player.steps += steps;
            const x = this.player.position ? this.player.position.x : 0;
            const y = this.player.position ? this.player.position.y : 0;
            const tile = store.configs.tiles[this.player.steps] ? store.configs.tiles[this.player.steps] : false;
            this.target = {
                x: tile ? (tile.x + x) : 768,
                y: tile ? (tile.y + y) : 520,
                tile: tile
            };
            this.physics.moveToObject(this.Player, this.target, 200);
        },

        startOver() {
            this.player.steps = 0;
            this.move(0);
        }
    }
}
</script>