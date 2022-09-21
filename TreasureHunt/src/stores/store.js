

const state = {
  Phaser: false,    // Phaser Instance
  Game: false,      // Game Component
  components: [],
  configs: {        // Game Configs
    width: 894,
    height: 651,
    players: 0,
    menu: true,
    sound: true,
    tiles: []
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