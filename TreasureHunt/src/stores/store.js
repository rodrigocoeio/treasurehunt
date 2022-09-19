const rules = {
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
    name: "Go Back 2",
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
}

const state = {
  Phaser: false,    // Phaser Instance
  Game: false,      // Game Component
  components: [],
  configs: {        // Game Configs
    width: 894,
    height: 651,
    players: 0,
    tiles: [

      // Row 1
      { number: 0, x: 0, y: 0 },
      { number: 1, x: 128, y: 0 },
      { number: 2, x: 256, y: 0 },
      { number: 3, x: 384, y: 0 },
      { number: 4, x: 512, y: 0 },
      {
        number: 5, x: 640, y: 0,
        rule: rules.goBack2
      },
      { number: 6, x: 772, y: 0 },

      // Row 2
      {
        number: 7, x: 772, y: 130,
        rule: rules.goFoward2
      },
      { number: 8, x: 640, y: 130 },
      { number: 9, x: 512, y: 130 },
      {
        number: 10, x: 384, y: 130,
        rule: rules.startOver
      },
      { number: 11, x: 256, y: 130 },
      { number: 12, x: 128, y: 130 },
      { number: 13, x: 0, y: 130 },

      // Row 3
      { number: 14, x: 0, y: 260 },
      {
        number: 15, x: 128, y: 260,
        rule: rules.goBack2
      },
      { number: 16, x: 256, y: 260 },
      { number: 17, x: 384, y: 260 },
      { number: 18, x: 512, y: 260 },
      {
        number: 19, x: 640, y: 260,
        rule: rules.startOver
      },
      { number: 20, x: 772, y: 260 },

      // Row 4
      { number: 21, x: 772, y: 390 },
      { number: 22, x: 640, y: 390 },
      { number: 23, x: 512, y: 390 },
      {
        number: 24, x: 384, y: 390,
        rule: rules.goFoward2
      },
      { number: 25, x: 256, y: 390 },
      { number: 26, x: 128, y: 390 },
      { number: 27, x: 0, y: 390 },
      // Row 5
      { number: 28, x: 0, y: 520 },
      { number: 29, x: 128, y: 520 },
      {
        number: 30, x: 256, y: 520,
        rule: rules.startOver
      },
      { number: 31, x: 384, y: 520 },
      {
        number: 32, x: 512, y: 520,
        rule: rules.goBack2
      },
      { number: 33, x: 640, y: 520 },
      {
        number: 34, x: 772, y: 520,
        rule: rules.finished
      }
    ]
  },
  started: false,     //  Game Started
  players: [],        //  Players
  turn: {             //  Turn
    turn: 1,
    started: false,
    moved: false,
    completed: false,
    rule: false,
    steps: false,
    player_number: false,
    player: false
  },
  turns: []
};

const getters = {

};

const setters = {

};

import { defineStore } from "pinia";

const getStore = defineStore({
  id: "game",
  state: () => (state),
  getters: getters,
  actions: setters,
});

export default getStore();