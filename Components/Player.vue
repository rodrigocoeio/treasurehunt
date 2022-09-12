<template>
    <div class="GamePlayer">
        <!-- Player {{ number }} -->
    </div>
</template>

<script>
export default {
    props: ['number'],

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
            this.addPlayer(this.Game.PhaserGame);
    },

    beforeUnmount() {
        if(this.player)
            this.player.setVisible(false);
    },

    methods: {
        preload(PhaserGame) {
            // Player
            PhaserGame.load.spritesheet('player', 'images/dude.png', { frameWidth: 32, frameHeight: 48 });
        },
        create(PhaserGame) {
            const player = this.addPlayer(PhaserGame, 'blue');

            player.setTint('blue');

            /* let container = this.add.container(32, 48, [ player ]);

            container.setSize(32, 48);

            container.setInteractive();

            this.input.setDraggable(container);

            container.on('pointerover', function () {

                bg.setTint(0x44ff44);

            });

            container.on('pointerout', function () {

                bg.clearTint();

            });

            this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

                gameObject.x = dragX;
                gameObject.y = dragY;

            }); */

            return this.player = player;
        },

        update(PhaserGame) {
            const Game = this.Game;
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
            }
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
            const player = PhaserGame.physics.add.sprite(50, 0, 'player');

            //  Player physics properties. Give the little guy a slight bounce.
            player.setBounce(0.2);
            player.setCollideWorldBounds(true);

            //  Our player animations, turning, walking left and walking right.
            PhaserGame.anims.create({
                key: 'left',
                frames: PhaserGame.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
                frameRate: 10,
                repeat: -1
            });

            PhaserGame.anims.create({
                key: 'turn',
                frames: [{ key: 'player', frame: 4 }],
                frameRate: 20
            });

            PhaserGame.anims.create({
                key: 'right',
                frames: PhaserGame.anims.generateFrameNumbers('player', { start: 5, end: 8 }),
                frameRate: 10,
                repeat: -1
            });

            return player;
        },
    }
}
</script>