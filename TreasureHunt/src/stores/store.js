const state = {
  Phaser: false,    // Phaser Instance
  Game: false,      // Game Component
  configs: {        // Game Configs
    width: 894,
    height: 651,
    players: 2
  },
  started: false,     //  Game Started
  players: [],        //  Players
  turn: {             //  Turn
    turn: 1,
    steps: "",
    player_number: false,
    player: false,
    completed: true
  }
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