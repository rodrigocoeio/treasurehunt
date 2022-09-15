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
        {number:0,x:0,y:0},
        {number:1,x:128,y:0},
        {number:2,x:256,y:0},
        {number:3,x:384,y:0},
        {number:4,x:512,y:0},
        {number:5,x:640,y:0,rule(player){
          player.move(-2);
        }},
        {number:6,x:768,y:0},
        // Row 2
        {number:7,x:768,y:130,rule(player){
          player.move(2);
        }},
        {number:8,x:640,y:130},
        {number:9,x:512,y:130},
        {number:10,x:384,y:130,rule(player){
          player.startOver();
        }},
        {number:11,x:256,y:130},
        {number:12,x:128,y:130},
        {number:13,x:0,y:130},
        // Row 3
        {number:14,x:0,y:260},
        {number:15,x:128,y:260,rule(player){
          player.move(-2);
        }},
        {number:16,x:256,y:260},
        {number:17,x:384,y:260},
        {number:18,x:512,y:260},
        {number:19,x:640,y:260,rule(player){
          player.startOver();
        }},
        {number:20,x:768,y:260},
        // Row 4
        {number:21,x:768,y:390},
        {number:22,x:640,y:390},
        {number:23,x:512,y:390},
        {number:24,x:384,y:390,rule(player){
          player.move(2);
        }},
        {number:25,x:256,y:390},
        {number:26,x:128,y:390},
        {number:27,x:0,y:390},
        // Row 5
        {number:28,x:0,y:520},
        {number:29,x:128,y:520},
        {number:30,x:256,y:520,rule(player){
          player.startOver();
        }},
        {number:31,x:384,y:520},
        {number:32,x:512,y:520,rule(player){
          player.move(-2);
        }},
        {number:33,x:640,y:520},
        {number:34,x:768,y:520}
    ]
  },
  started: false,     //  Game Started
  players: [],        //  Players
  turn: {             //  Turn
    turn: 1,
    started: false,
    steps: false,
    player_number: false,
    player: false,
    completed: false
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