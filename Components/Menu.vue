<template>
  <nav class="navbar navbar-expand-lg bg-light" v-show="configs.menu">
    <div class="container-fluid">
      <!-- Chest Logo -->
      <a class="navbar-brand" href="#">
        <img src="images/treasurechest.png">
      </a>

      <!-- Navbar Toogler -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <a class="navbar-brand" href="#">
          <img src="images/treasurechest.png">
        </a>
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
            <button @click="startGame" :disabled="configs.players===0" class="start-game btn btn-primary">Start
              Game</button>
          </li>

          <!-- Quit Game -->
          <li class="nav-item" v-show="started">
            <button @click="quitGame" class="quit-game btn btn-danger">Quit Game</button>
          </li>
        </ul>

        <ul class="nav navbar-nav navbar-right">
          <!-- Game Sound -->
          <li class="nav-item">
            <div class="game-sound form-check form-switch">
              <input class="form-check-input" type="checkbox" name="sound" id="sound" v-model="configs.sound">
              <label for="sound">Sound</label>
            </div>
          </li>
          <li class="nav-item">
            <button class="btn btn-default" @click="enterFullScreen">
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-fullscreen" viewBox="0 0 16 16">
                  <path
                    d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z" />
                </svg>
              </i>
            </button>
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

      if (this.players.length === 0)
        return false;

      const audio = playAudio('started');
      audio.volume = 0.4
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
      store.configs.players = 0;
      store.players = [];
      store.turn.started = false;
      store.turn.player = false;
    },

    enterFullScreen() {
      if ((window.fullScreen) ||
        (window.innerWidth == screen.width && window.innerHeight == screen.height))
        return this.exitFullScreen();

      var game = document.documentElement;

      /* When the openFullscreen() function is executed, open the video in fullscreen.
      Note that we must include prefixes for different browsers, as they don't support the requestFullscreen method yet */
      if (game.requestFullscreen) {
        game.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) { /* Safari */
        game.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE11 */
        game.msRequestFullscreen();
      }
    },

    exitFullScreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
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
  cursor: pointer;
}

.navbar {}

.game-sound {
  margin-left: 15px;
  margin-top: 7px;
  cursor: pointer;
}

.game-sound label,
.game-sound input {
  display: block;
  cursor: pointer;
}
</style>