<template>
    <div class="TreasureHuntWelcome">
                
    </div>
</template>

<script>
import { Game } from 'phaser';

export default {
    data() {
        const Game = this.$parent;

        return {
            Game: Game,
            game_configs: Game.game_configs,
            background_image: "images/treasure-hunt-logo.png",

            background: false,
            startButton: false
        }
    },

    methods: {
        preload(PhaserGame) {
            PhaserGame.load.image('backgroud', this.background_image);
            //PhaserGame.load.spritesheet('start_button', 'images/start_game.png', { frameWidth: 200, frameHeight: 100 });
        },
        create(PhaserGame) {
            this.background = PhaserGame.add.image(this.game_configs.width / 2, this.game_configs.height / 2, 'backgroud');

            this.startButton = PhaserGame.add.text(100, 100, 'Star Game!', { fill: '#0f0' });
            this.startButton.setInteractive({ useHandCursor: true });
            this.startButton.on('pointerdown',
                () => this.starGame()
            );
        },
        update(PhaserGame) {
            if (!this.Game.started) {
                this.startButton.setVisible(true);
                this.background.setVisible(true);
            } else {
                this.startButton.setVisible(false);
                this.background.setVisible(false);
            }
        },

        starGame() {
            this.Game.starGame();
        },

        changePlayers(e) {
            this.Game.game_configs.players = parseInt(e.target.value);
        }
    }
}
</script>