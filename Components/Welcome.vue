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
            players_available: [
                {
                    name: "Pirate",
                    image: "/images/players/player1.png",
                    welcome: {
                        position: {x:700,y:400}
                    },
                    position: {x:90,y:85},
                    scale: 0.2
                },
                {
                    name: "Dinosaur",
                    image: "/images/players/player2.png",
                    welcome: {
                        position: {x:200,y:500}
                    },
                    position: {x:30,y:100},
                    scale: 0.3
                },
                {
                    name: "Ninja",
                    image: "/images/players/player3.png",
                    welcome: {
                        position: {x:480,y:500}
                    },
                    position: {x:60,y:100},
                    scale: 0.5
                },
                {
                    name: "Fairy",
                    image: "/images/players/player4.png",
                    welcome: {
                        position: {x:600,y:170},
                        scale: 0.5
                    },
                    position: {x:90,y:20},
                    scale: 0.2
                },
                {
                    name: "Parrot",
                    image: "/images/players/player5.png",
                    welcome: {
                        position: {x:200,y:200}
                    },
                    position: {x:30,y:30},
                    scale: 0.3
                }
            ],
            ...store
        }
    },

    methods: {
        preload(PhaserGame) {
            PhaserGame.load.image('background', 'images/background.png');
            PhaserGame.load.image('logo', 'images/treasurehunt.png');
            PhaserGame.load.image('chest', 'images/treasurechest.png');

            // Players
            this.players_available.forEach((player) => {
                PhaserGame.load.image(player.name, player.image);
            });            
        },
        create(PhaserGame) {
            const Welcome = this;
            this.background = PhaserGame.add.image(this.configs.width / 2, this.configs.height / 2, 'background');
            
            this.chest = PhaserGame.add.image(this.configs.width / 2, (this.configs.height / 2) + 80, 'chest');
            this.logo = PhaserGame.add.image(this.configs.width / 2, (this.configs.height / 2) - 70, 'logo');

            this.logo.setScale(0.7);
            this.chest.setScale(0.5);
            this.chest.setAlpha(0.5);

            // Players
            this.players_available.forEach((player) => {
                Welcome.createPlayer(PhaserGame, player);
            });
        },
        createPlayer(PhaserGame, playerConfigs) {
            const Welcome = this;

            const name = playerConfigs.name;
            const x = playerConfigs.welcome.position.x;
            const y = playerConfigs.welcome.position.y;
            const scale = playerConfigs.welcome.scale;
            
            const player = PhaserGame.add.sprite(x, y, name);

            if(scale)
                player.setScale(scale);

            player.setAlpha(0.6);
            player.setInteractive();
            player.inputEnabled = true;
            player.on('pointerover', function (event) {
                this.setAlpha(1);
            });
            player.on('pointerout', function (event) {
                this.setAlpha(0.6);
            });
            player.on('pointerup', function (pointer) {
                if(!player.selected){
                    Welcome.selectPlayer(PhaserGame,player,playerConfigs);
                    player.selected = true;
                }                
            });
            return player;
        },
        selectPlayer(PhaserGame, player, playerConfigs) {
            const x = playerConfigs.welcome.position.x;
            const y = playerConfigs.welcome.position.y;
            player.text = PhaserGame.add.text(x - 100, y+40, playerConfigs.name, { fontSize: 40, color: 'white', backgroundColor: 'black', fontWeight: 'bold'});
            player.setAlpha(1);
            player.on('pointerout', function (event) {
                this.setAlpha(1);
            });
            store.configs.players++;
            store.players.push({
                number: (store.players.length + 1),
                name: playerConfigs.name,
                image: playerConfigs.image,
                position: playerConfigs.position,
                scale: playerConfigs.scale,
                steps: 0,
                walk: 0,
                finished: false
            });
        },
        update(PhaserGame) {

        }
    }
}
</script>

<style>

</style>