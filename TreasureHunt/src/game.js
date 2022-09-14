import store from "$/store.js";

export default (configs, GameComponent) => {
    const PhaserGame = new Phaser.Game({
        type: Phaser.AUTO,
        parent: "game-canvas",  // ID of the element where the canvas will be placed
        width: 1024,
        height: 764,
        backgroundColor: "#fffcbd",
        physics: {
            default: 'arcade',
            /* arcade: {
                gravity: { y: 200 }
            } */
        },
        scene: {
            preload(){      
                GameComponent.preload(this);
            },
            create(){
                GameComponent.create(this);
            },
            update(){
                GameComponent.update(this);
            },
            render() {
                GameComponent.render(this);
            }
        },
        ... configs
    });

    return PhaserGame;
}