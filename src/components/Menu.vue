<template>
  <nav v-show="configs.menu">
    <ul class="StartMenu">
      <li class="nav-item">
        <a class="navbar-brand" href="#">
          <img src="/images/treasurechest.png">
        </a>
      </li>
      <!-- Difficulty -->
      <li class="nav-item">
        <select v-model="configs.difficulty" class="form-select" :disabled="started">
          <option value="easy">Easy Mode</option>
          <option value="normal">Normal Mode</option>
          <option value="hard">Hard Mode</option>
        </select>
      </li>



      <!-- Start Game -->
      <li class="nav-item" v-show="!started">
        <button @click="startGame" :disabled="configs.players === 0" class="start-game btn btn-primary">Start
          Game</button>
      </li>

      <!-- Quit Game -->
      <li class="nav-item" v-show="started">
        <button @click="quitGame" class="QuitGame">Quit Game</button>
      </li>
    </ul>

    <ul class="ConfigsMenu">
      <!-- Game Sound -->
      <li class="nav-item">
        <button class="game-sound form-check form-switch">
          <input class="form-check-input" type="checkbox" name="voice" id="voice" v-model="configs.voice">
          <label for="voice">Voice</label>
        </button>
      </li>
      <li class="nav-item">
        <button class="game-sound form-check form-switch">
          <input class="form-check-input" type="checkbox" name="music" id="music" v-model="configs.music">
          <label for="music">Music</label>
        </button>
      </li>
      <li class="nav-item">
        <button class="game-sound form-check form-switch">
          <input class="form-check-input" type="checkbox" name="sound" id="sound" v-model="configs.sound">
          <label for="sound">Sound</label>
        </button>
      </li>
      <li class="nav-item">
        <button class="btn btn-default" @click="enterFullScreen">
          <i>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-fullscreen"
              viewBox="0 0 16 16">
              <path
                d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z" />
            </svg>
          </i>

          &nbsp;Fullscreen
        </button>
      </li>
    </ul>
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

      $(game).focus();
    },

    exitFullScreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }

      $(document).focus();
    }
  }
}
</script>

<style scoped>
nav {
  margin-top: -15px;
  color: white;
}

nav * {
  display: inline-block;
}

nav img {
  position: relative;
  width: 36px;
  top: 10px;
}


ul {
  list-style: none;
  margin: 0px;
}

button,
select {
  padding: 8px;
  font-size: 16px;
  border-radius: 15px;
  cursor: pointer;
  margin-left: 15px;
}

button:not([disabled]):hover,
select:not([disabled]):hover {
  background-color: chartreuse;
  text-shadow: white 3px 0 10px;
  box-shadow: 3px 3px gray;
}

button * {
  vertical-align: middle;
}

.QuitGame:hover {
  background-color: red !important;
}

.StartMenu {
  float: left;
}

.ConfigsMenu {
  float: right;
}

.game-sound {
  margin-left: 15px;
  margin-top: 7px;
  cursor: pointer;
}

.game-sound label,
.game-sound input {
  display: inline-block;
  cursor: pointer;
}
</style>