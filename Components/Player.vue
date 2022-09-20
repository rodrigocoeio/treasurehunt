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

            let image = new Image();
                image.src = this.player.image;
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
                    if (distance < 6) {
                        const tile = this.target.tile;

                        this.Player.body.reset(this.target.x, this.target.y);
                        this.target = false;

                        if (typeof this.walk_to == "number") {
                            if (this.walk_to != this.player.steps)
                                return this.walkTo(this.walk_to, this.walk_speed);

                            this.walk_to = false;
                        }

                        if (tile.rule){
                            if(tile.rule.trigger)
                                tile.rule.trigger(this.player);

                            return store.turn.rule = tile.rule;
                        }
                            

                        return store.turn.completed = true;
                    }
                }
            }
        },

        moveTo(to, speed = 200) {
            const player_x = this.player.position ? this.player.position.x : 0;
            const player_y = this.player.position ? this.player.position.y : 0;
            const tile = store.configs.tiles[to] ? store.configs.tiles[to] : false;
            
            if(tile){
                this.target = {
                    x: (tile.x + player_x),
                    y: (tile.y + player_y),
                    tile: tile
                };

                this.player.steps = to;
                this.physics.moveToObject(this.Player, this.target, speed);

                return true;
            }
            
            throw Error("Error while moving player " + this.player.name + " to: " + to + " ( tile " + to + " does not exist )");            
        },

        walkTo(walk_to, speed = 200) {
            // prevents from player walking to tile that does not exist
            this.walk_to = (parseInt(walk_to) > (store.configs.tiles.length - 1)) 
                            ? (store.configs.tiles.length - 1)
                            : parseInt(walk_to);
            this.walk_speed = speed;

            const next_tile = (this.walk_to > this.player.steps) ? this.player.steps + 1
                            : (this.walk_to < this.player.steps) ? this.player.steps - 1
                            : this.player.steps;

            const log = this.player.name + " is walking to: " + this.walk_to + ", next tile: " + next_tile;
            dd(log);

            return this.moveTo(next_tile, speed);

        },
        goFoward(steps) {
            const go_to = this.player.steps + steps;

            console.log(this.player.name + " is going foward " + steps + " steps");

            return this.walkTo(go_to);
        },
        goBack(steps) {
            const go_to = this.player.steps - steps;

            console.log(this.player.name + " is going back " + steps + " steps");

            return this.walkTo(go_to);
        },
        startOver() {
            console.log(this.player.name + " is starting over");
            this.moveTo(0, 200);
        },
        finished() {
            console.log(this.player.name + " has finished");
            this.moveTo(0);
        }
    }
}
</script>