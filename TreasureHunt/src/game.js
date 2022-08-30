export default (configs, GameComponent) => {
    return new Phaser.Game({
        type: Phaser.AUTO,
        parent: "game-canvas",  // ID of the element where the canvas will be placed
        width: 1024,
        height: 764,
        physics: {
            default: 'arcade',
            arcade: {
                //gravity: { y: 200 }
            }
        },
        scene: {
            preload: function preload(){      
                GameComponent.preload(this);
            },
            create: function create(){
                GameComponent.create(this);
            },
            update: function update(){
                GameComponent.update(this);
            }
        },
        ... configs
    });
}