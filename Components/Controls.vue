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
            <select @change="changePlayers" class="form-select" :disabled="started">
              <option value="2">2 Jogadores</option>
              <option value="3">3 Jogadores</option>
              <option value="4">4 Jogadores</option>
              <option value="5">5 Jogadores</option>
            </select>
          </li>

          <!-- Start Game -->
          <li class="nav-item" v-show="!started">
            <button @click="startGame" class="btn btn-primary">Start Game</button>
          </li>

          <!-- Quit Game -->
          <li class="nav-item" v-show="started">
            <button @click="quitGame" class="btn btn-danger">Quit Game</button>
          </li>

          <!-- Phaser Examples -->
          <!-- <li class="nav-item">
              <RouterLink to="/" class="nav-link active" aria-current="page">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/phaserexamples" class="nav-link" aria-current="page">Phaser Examples</RouterLink>
            </li> -->
        </ul>

        <ul class="nav navbar-nav navbar-right">

          <!-- GAME STATUS -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Game Status
            </a>
            <ul class="dropdown-menu">
              <li>Started: {{ started }}</li>
            </ul>
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

      store.started = true;
      store.turn.turn = 1;
      store.turn.steps = "";
      store.turn.player = this.players[0];
      store.turn.player_number = 1;
    },

    quitGame() {
      console.log('quit game');

      store.started = false;
    },

    nextTurn() {
      console.log('next turn');

      store.turn.turn++;

      if (store.turn.player_number >= store.configs.players) {
        store.turn.player = store.players[0];
        store.turn.player_number = 1;
      } else {
        store.turn.player_number++;
        store.turn.player = store.players[store.turn.player_number];
      }

      store.turn.completed = false;
    }
  }
}
</script>

<style scoped>
  nav img {
    width: 36px;
  }

  button {
      margin-left: 15px;
  }
</style>