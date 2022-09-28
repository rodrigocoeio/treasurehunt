import points from "$/points.js";

export default {
    startOver: {
        name: "Start it Over",
        image: "/images/tiles/start-again.png",
        trigger() {
            playAudio('start-over');
        },
        action(player) {
            player.startOver();
            playAudio('start-it-over');
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
        text: "+10 points",
        trigger() {
            playAudio('coin');
        },
        action(player, turn) {
            playAudio('take-coin','wav');
            player.takeCoin('gold');
            turn.completed = true;
        }
    },
    takeSilverCoin: {
        name: "Take Silver Coin",
        image: "/images/coin-silver.png",
        text: "+5 points",
        trigger() {
            playAudio('coin');
        },
        action(player,turn) {
            playAudio('take-coin','wav');
            player.takeCoin('silver');
            turn.completed = true;
        }
    },
    takeBronzeCoin: {
        name: "Take Bronze Coin",
        text: "+3 points",
        image: "/images/coin-bronze.png",
        trigger() {
            playAudio('coin');
        },
        action(player,turn) {
            playAudio('take-coin','wav');
            player.takeCoin('bronze');
            turn.completed = true;            
        }
    },
    openTreasureChest: {
        name: "Open Chest!",
        image: "/images/chest_closed.png",
        trigger() {
            playAudio('finished');
        },
        action(player) {
            const treasures = [
                'ruby',
                'ring',
                'necklace',
                'necklace2',
                'ametista',
                'earing',
                'urn',
                'crown',
                'graal'
            ];
            const treasure_index = Math.floor(Math.random() * treasures.length);
            const treasure = treasures[treasure_index];
            const treasure_value = points[treasure];

            playAudio('take-treasure');
            
            return {
                name: "Take Treasure!",
                text: "+" + treasure_value +" points",
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