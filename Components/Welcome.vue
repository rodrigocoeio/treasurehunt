<template>
    <div class="TreasureHuntWelcome">

    </div>

    <div id="game-canvas" class="container"></div>
</template>

<script>
import store from "$/store.js";
import gameMixins from "@/mixins/game-mixins.js";

export default {
    mixins: gameMixins,

    data() {
        return {
            background: false,
            ...store
        }
    },

    methods: {
        preload(PhaserGame) {
            PhaserGame.load.image('background', 'images/background.png');
            PhaserGame.load.image('logo', 'images/treasure-hunt-logo.png');
            PhaserGame.load.image('chest', 'images/treasurechest.png');
            // Players
            PhaserGame.load.image('Pirate', '/images/players/player1.png');
            PhaserGame.load.image('Dinosaur', '/images/players/player2.png');
            PhaserGame.load.image('Ninja', '/images/players/player3.png');
            PhaserGame.load.image('Fairy', '/images/players/player4.png');
            PhaserGame.load.image('Parrot', '/images/players/player5.png');
        },
        create(PhaserGame) {
            this.background = PhaserGame.add.image(this.configs.width / 2, this.configs.height / 2, 'background');
            this.logo = PhaserGame.add.image(this.configs.width / 2, this.configs.height / 2, 'logo');
            //this.chest = PhaserGame.add.image(this.configs.width / 2, this.configs.height / 2, 'chest');

            this.player1 = this.createPlayer(PhaserGame, 700, 400, 'Pirate');
            this.player2 = this.createPlayer(PhaserGame, 200, 400, 'Dinosaur');
            this.player3 = this.createPlayer(PhaserGame, 440, 480, 'Ninja');
            this.player4 = this.createPlayer(PhaserGame, 600, 170, 'Fairy');
            this.player5 = this.createPlayer(PhaserGame, 200, 200, 'Parrot');

            this.player4.setScale(0.5, 0.5);
        },
        createPlayer(PhaserGame, x, y, playerName) {
            const Welcome = this;
            
            const player = PhaserGame.add.sprite(x, y, playerName);
            player.setAlpha(0.6);
            player.setInteractive();
            player.inputEnabled = true;
            player.on('pointerover', function (event) {
                this.setAlpha(1);
            });
            player.on('pointerout', function (event) {
                this.setAlpha(0.7);
            });
            player.on('pointerup', function (pointer) {
                if(!player.selected){
                    Welcome.selectPlayer(PhaserGame,x,y,player, playerName);
                    player.selected = true;
                }                
            });
            return player;
        },
        selectPlayer(PhaserGame, x, y, player, playerName) {
            player.text = PhaserGame.add.text(x - 100, y+40, playerName, { fontSize: 40, color: 'white', backgroundColor: 'black', fontWeight: 'bold'});
            player.setAlpha(1);
            player.on('pointerout', function (event) {
                this.setAlpha(1);
            });
            store.configs.players++;
        },
        update(PhaserGame) {

        },
        destroy(PhaserGame) {
            if (this.background)
                this.background.destroy();
            if (this.logo)
                this.logo.destroy();
            if (this.player1)
                this.player1.destroy();
            if (this.player2)
                this.player2.destroy();
            if (this.player3)
                this.player3.destroy();
            if (this.player4)
                this.player4.destroy();
            if (this.player5)
                this.player5.destroy();

            if (this.player1.text)
                this.player1.text.destroy();
            if (this.player2.text)
                this.player2.text.destroy();
            if (this.player3.text)
                this.player3.text.destroy();
            if (this.player4.text)
                this.player4.text.destroy();
            if (this.player5.text)
                this.player5.text.destroy();
        }
    }
}
</script>

<style>
.navbar {
    position: absolute;
    top: 550px;
    left: calc(50% - 150px);
}
</style>