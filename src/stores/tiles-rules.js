export default {
    startOver: {
        name: "Start it Over",
        image: "/images/tiles/start-again.png",
        trigger() {
            playAudio('start-over');
            playAudio('start-it-over');
        },
        action(player) {
            player.startOver();
        }
    },
    goBack2: {
        name: "Go Back",
        image: "/images/go-back.png",
        trigger() {
            playAudio('back-2');
        },
        action(player) {
            player.goBack(2);
        }
    },
    goFoward2: {
        name: "Go Foward",
        image: "/images/go-forward.png",
        trigger() {
            playAudio('forward-2');
        },
        action(player) {
            player.goFoward(2);
        }
    },
    takeGoldCoin: {
        name: "Take Gold Coin",
        image: "/images/coin-gold.png",
        trigger() {
            playAudio('take-coin','wav');
        },
        action(player, turn) {
            player.takeCoin('gold');
            turn.completed = true;
        }
    },
    takeSilverCoin: {
        name: "Take Silver Coin",
        image: "/images/coin-silver.png",
        trigger() {
            playAudio('take-coin','wav');
        },
        action(player,turn) {
            player.takeCoin('silver');
            turn.completed = true;
        }
    },
    takeBronzeCoin: {
        name: "Take Bronze Coin",
        image: "/images/coin-bronze.png",
        trigger() {
            playAudio('take-coin','wav');
        },
        action(player,turn) {
            player.takeCoin('bronze');
            turn.completed = true;            
        }
    },
    openTreasureChest: {
        name: "Open Chest!",
        image: "/images/treasurechest.png",
        trigger() {
            playAudio('finished');
        },
        action(player) {
            const treasures = [
                'crown','ring','necklace','ruby'
            ];
            const treasure_index = Math.floor(Math.random() * treasures.length);
            const treasure = treasures[treasure_index];

            playAudio('take-treasure');
            
            return {
                name: "Take Treasure!",
                image: "/images/treasures/"+treasure+".png",
                trigger() {
                    
                },
                action(player) {                    
                    player.takeTreasure(treasure);
                    player.startOver();
                }
            };
        }
    }
};