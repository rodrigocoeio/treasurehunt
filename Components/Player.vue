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

        dd(this);
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
                        this.target = false;

                        if (typeof this.walk_to == "number") {
                            if (this.walk_to != this.player.steps)
                                return this.walkTo(this.walk_to);

                            this.walk_to = false;
                        }

                        if (tile.rule)
                            return tile.rule(this);

                        return store.turn.completed = true;
                    }
                }
            }
        },

        moveTo(to, speed = 200) {
            const x = this.player.position ? this.player.position.x : 0;
            const y = this.player.position ? this.player.position.y : 0;
            const tile = store.configs.tiles[to] ? store.configs.tiles[to] : false;
            const firstTile = store.configs.tiles[0];
            
            this.target = {
                x: tile ? (tile.x + x) : firstTile.x,
                y: tile ? (tile.y + y) : firstTile.y,
                tile: tile
            };

            this.player.steps = to;
            this.physics.moveToObject(this.Player, this.target, speed);
        },

        walkTo(walk_to) {
            this.walk_to = parseInt(walk_to);

            const next_tile = (this.walk_to > this.player.steps) ? this.player.steps + 1
                            : (this.walk_to < this.player.steps) ? this.player.steps - 1
                            : this.player.steps;

            //const log = this.player.name + " is walking to: " + this.walk_to + ", next tile: " + next_tile;
            //dd(log);

            return this.moveTo(next_tile);

        },

        goFoward(steps) {
            const go_to = this.player.steps + steps;
            return this.walkTo(go_to);
        },
        goBack(steps) {
            const go_to = this.player.steps - steps;
            return this.walkTo(go_to);
        },

        startOver() {
            this.walkTo(0);
        }
    }
}
</script>