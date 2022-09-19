<template>
    <div class="GameDashboard">
        <!-- <h5>Turn Nº{{ turn.turn }}</h5> -->

        <h6 :class="['player-name', turn.player == player ? 'selected' : '']" v-for="player in sortedPlayers">
            <span class="player-name">
                <img :src="player.image" class="player-image">
                |
                {{ player.name }}
                |
                {{ player.steps }}
            </span>
        </h6>
    </div>
</template>

<script>
import store from '$/store.js';

export default {
    data() {
        return store
    },
    

    computed: {
        sortedPlayers() {
            const players = store.players;
            return sortByKey([...players], 'steps');
        }
    }
}
</script>

<style scoped>
    .player-name {
        font-size:14px;
    }
    
    .player-image {
        height: 24px;
    }

    .selected .player-name {
        color: red;
        font-size:20px;
    }

    .selected .player-image {
        height: 48px;
    }
</style>