<template>
    <div class="GamePlayer">
        <!-- Player {{ number }} -->
    </div>
</template>

<script>
import objectMixins from "@/mixins/object-mixins.js";
import store from "$/store.js";

export default {
    props: ['number','name'],

    mixins: objectMixins,

    data() {
        const Game = this.$parent.Game;
        return {
            Game: Game,
            player: false,
            moving: false,
            start_position: false
        }
    },

    mounted() {
        if(this.Game.started && !this.player)
            this.create(this.Game.PhaserGame);
    },

    beforeUnmount() {
        if(this.player)
            this.player.setVisible(false);
    },

    methods: {
        preload(PhaserGame) {

        },

        create(PhaserGame) {
            const playerName = "player" + this.number;
            //const player = PhaserGame.add.sprite(500, 500, playerName);
            //  Player physics properties. Give the little guy a slight bounce.
            //player.setBounce(0.2);
            //player.setCollideWorldBounds(true);
            

            //return this.player = player;

            /* var group = game.add.group();

            group.inputEnableChildren = true;

            var atari = group.create(32, 100, 'atari');

            //  Enable input and allow for dragging
            atari.inputEnabled = true;
            atari.input.enableDrag();
            atari.events.onDragStart.add(onDragStart, this);
            atari.events.onDragStop.add(onDragStop, this);

            var sonic = group.create(300, 200, 'sonic');

            sonic.inputEnabled = true;
            sonic.input.enableDrag();
            sonic.events.onDragStart.add(onDragStart, this);
            sonic.events.onDragStop.add(onDragStop, this);

            group.onChildInputDown.add(onDown, this); */
        },

        update(PhaserGame) {
            /* const Game = this.Game;
            const player = this.player;

            if(player)
            {
                if (Game.started) {
                    player.setVisible(true);
                } else {
                    player.setVisible(false);
                }

                // move
                if(this.number === Game.turn.player_number && !Game.turn.completed)
                    this.move(Game.turn.steps);
            } */
        },

        move(steps) {
            const Game = this.Game;
            const player = this.player;
            const player_position = player.getTopLeft();
            let start_position = this.start_position ? this.start_position : player_position;
            const step_width = 130 * steps;
            const player_walked = (player_position.x - start_position.x);


            if (player_walked < step_width && !Game.turn.complete) {
                console.log('moving');
                player.setVelocityX(160);
                player.anims.play('right', true);
                this.moving++;
            } else {
                player.setVelocityX(0);
                player.anims.play('turn');
                this.moving = 0;
                this.start_position = false;
                Game.turn.completed = true;
                start_position = player_position;
            }

            this.start_position = start_position;
        },

        addPlayer(PhaserGame, color) {
            // The player and its settings
            const playerName = 'player' + this.number;
            const player = PhaserGame.physics.add.sprite(50, 0, playerName);

            //  Player physics properties. Give the little guy a slight bounce.
            player.setBounce(0.2);
            player.setCollideWorldBounds(true);

            //  Our player animations, turning, walking left and walking right.
            PhaserGame.anims.create({
                key: 'left',
                frames: PhaserGame.anims.generateFrameNumbers(playerName, { start: 0, end: 3 }),
                frameRate: 10,
                repeat: -1
            });

            PhaserGame.anims.create({
                key: 'turn',
                frames: [{ key: playerName, frame: 4 }],
                frameRate: 20
            });

            PhaserGame.anims.create({
                key: 'right',
                frames: PhaserGame.anims.generateFrameNumbers(playerName, { start: 5, end: 8 }),
                frameRate: 10,
                repeat: -1
            });

            return player;
        },
    }
}
</script>