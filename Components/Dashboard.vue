<template>
    <div class="GameDashboard">
        <h5>Turn Nº{{ turn.turn }}</h5>
        <h6 :class="['PlayerName']" v-for="player in sortedPlayers">
            <img :src="player.image" height="24">
            {{ player.name }}
            {{ player.steps }}
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