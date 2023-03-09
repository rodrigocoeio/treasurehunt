<template>
    <div class="TreasureHuntWelcome">

    </div>

    <div id="game-canvas" class="container" @click="startMusic"></div>
</template>

<script>
import store from "$/store.js";
import gameMixins from "@/mixins/game-mixins.js";

export default {
    mixins: gameMixins,

    data() {
        return {
            background: false,
            background_audio: false,
            players_available: [
                {
                    name: "Pirate",
                    image: "/images/players/player1.png",
                    welcome: {
                        position: { x: 200, y: 450 }
                    },
                    position: { x: 20, y: 83 },
                    scale: 0.24
                },
                {
                    name: "Dino",
                    image: "/images/players/player2.png",
                    welcome: {
                        position: { x: 700, y: 500 },
                        scale: 1.4
                    },
                    position: { x: 96, y: 95 },
                    scale: 0.45
                },
                {
                    name: "Ninja",
                    image: "/images/players/player3.png",
                    welcome: {
                        position: { x: 450, y: 550 },
                        scale: 1.9
                    },
                    position: { x: 55, y: 95 },
                    scale: 0.7
                },
                {
                    name: "Fairy",
                    image: "/images/players/player4.png",
                    welcome: {
                        position: { x: 600, y: 130 },
                        scale: 0.9
                    },
                    position: { x: 93, y: 24 },
                    scale: 0.275
                },
                {
                    name: "Parrot",
                    image: "/images/players/player5.png",
                    welcome: {
                        position: { x: 292, y: 150 },
                        scale: 1
                    },
                    position: { x: 36, y: 42 },
                    scale: 0.4
                }
            ],
            ...store
        }
    },

    computed: {
        music() {
            return store.configs.music;
        },
        sound() {
            return store.configs.sound;
        }
    },

    mounted() {
        this.startMusic();
        window.addEventListener("keypress", this.listenKeyBoardEvents);
    },

    beforeUnmount() {
        this.stopMusic();
        window.removeEventListener("keypress", this.listenKeyBoardEvents);
    },

    methods: {
        listenKeyBoardEvents(e) {
            if (e.keyCode == 32 || e.keyCode == 13) {
                if (!store.started)
                    this.$parent.start();
            }
        },
        startMusic() {
            if (this.sound && this.music) {
                if (!this.background_audio)
                    this.background_audio = playAudio('forest-background');

                this.background_audio.loop = true;
                this.background_audio.volume = 0.2;


                this.background_audio.play();
            }
        },
        stopMusic() {
            if (this.background_audio) {
                this.background_audio.pause();
                this.background_audio = false;
            }
        },
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

            if (scale)
                player.setScale(scale);

            player.setAlpha(0.7);
            player.setInteractive();
            player.inputEnabled = true;
            player.on('pointerover', function (event) {
                this.setAlpha(1);
            });
            player.on('pointerout', function (event) {
                this.setAlpha(0.6);
            });
            player.on('pointerup', function (pointer) {
                if (!player.selected) {
                    Welcome.selectPlayer(PhaserGame, player, playerConfigs);
                    player.selected = true;
                } else {
                    Welcome.unselectPlayer(PhaserGame, player, playerConfigs);
                    player.selected = false;
                }
            });
            return player;
        },
        selectPlayer(PhaserGame, player, playerConfigs) {
            playAudio('selected');

            const x = playerConfigs.welcome.position.x;
            const y = playerConfigs.welcome.position.y;
            player.text = PhaserGame.add.text(x - 100, y + 40, playerConfigs.name, { fontSize: 40, color: 'white', backgroundColor: 'black', fontWeight: 'bold' });
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
                finished: false,
                points: 0,
                showTreasures: false,
                coins: {
                    bronze: 0,
                    silver: 0,
                    gold: 0
                },
                treasures: {
                    ruby: 0,
                    ring: 0,
                    necklace: 0,
                    ametista: 0,
                    necklace2: 0,
                    earing: 0,
                    urn: 0,
                    crown: 0,
                    graal: 0
                }
            });
        },
        unselectPlayer(PhaserGame, player, playerConfigs) {
            playAudio('selected');
            const players = store.players.filter(p => p.name != playerConfigs.name);
            store.configs.players--;
            store.players = players;
            player.setAlpha(0.7);
            player.on('pointerout', function (event) {
                this.setAlpha(0.7);
            });
            player.text.destroy();
        },
        update(PhaserGame) {

        }
    }
}
</script>

<style></style>