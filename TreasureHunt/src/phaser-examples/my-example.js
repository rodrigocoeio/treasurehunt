export default () => {
    const Game = new Phaser.Game({
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 200 }
            }
        },
        scene: {
            preload: preload,
            create: create
        }
    });

    // The preload function helps you easily load assets into your game. 
    // In preload, we set the Base URL to be the Phaser server and load 3 PNG files.
    function preload() {
        /* this.load.setBaseURL('https://labs.phaser.io');

        this.load.image('sky', 'assets/skies/space3.png');
        this.load.image('logo', 'assets/sprites/phaser3-logo.png');
        this.load.image('red', 'assets/particles/red.png'); */
    }

    function create() {
        
    }

    return Game;
}