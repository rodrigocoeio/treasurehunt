export default {
    startOver: {
        name: "Start Over",
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
        trigger() {
            playAudio('back-2');
        },
        action(player) {
            player.goBack(2);
        }
    },
    goFoward2: {
        name: "Go Foward",
        trigger() {
            playAudio('forward-2');
        },
        action(player) {
            player.goFoward(2);
        }
    },
    finished: {
        name: "Finished!",
        trigger() {
            playAudio('finished');
        },
        action(player) {
            player.finished();
        }
    }
};