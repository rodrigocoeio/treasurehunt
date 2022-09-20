<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <!-- Chest Logo -->
      <a class="navbar-brand" href="#">
        <img src="images/treasurechest.png">
      </a>

      <!-- Navbar Toogler -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

          <!-- Select Players -->
          <li class="nav-item">
            <select v-model="configs.players" class="form-select" disabled="true">
              <option value="0" selected>Choose Players</option>
              <option value="1">Single Player</option>
              <option value="2">Two Players</option>
              <option value="3">Three Players</option>
              <option value="4">Four Players</option>
              <option value="5">Five Players</option>
            </select>
          </li>

          <!-- Start Game -->
          <li class="nav-item" v-show="!started">
            <button @click="startGame" :disabled="configs.players===0" class="btn btn-primary">Start Game</button>
          </li>

          <!-- Quit Game -->
          <li class="nav-item" v-show="started">
            <button @click="quitGame" class="btn btn-danger">Quit Game</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import store from "$/store.js";

export default {
  data() {
    return store;
  },
  
  methods: {
    startGame() {
      console.log('start game');

      const audio = playAudio('started');
      audio.volume=0.4
      audio.play();

      store.started = true;
      store.turn.started = false;
      store.turn.completed = false;
      store.turn.turn = 1;
      store.turn.steps = "";
      store.turn.player = this.players[0];
      store.turn.player_number = 1;
    },

    quitGame() {
      console.log('quit game');

      playAudio('quited');

      store.started = false;
      store.configs.players=0;
      store.players = [];
    }
  }
}
</script>

<style>
  nav img {
    width: 36px;
  }

  button {
      margin-left: 15px;
  }

  .navbar {
      position: absolute;
      top: 0px;
      left: calc(50% - 150px);
  }
</style>