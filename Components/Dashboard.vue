<template>
    <div class="GameDashboard bg-light">
        <!-- <h5 v-show="sortedPlayers.length>0">Dashboard</h5> -->
        <!-- <h5>Turn Nº{{ turn.turn }}</h5> -->

        <table class="player-name" v-if="players.length">
            <thead>
                <tr>
                    <th width="25">#</th>
                    <th>Player</th>
                    <th></th>
                    <th v-if="started">Position</th>
                </tr>
            </thead>

            <tbody>
                <tr :class="[turn.player == player ? 'selected' : '']" v-for="(player,index) in sortedPlayers">
                    <td class="player-name">{{ index + 1 }}º</td>
                    <td>
                        <img :src="player.image" class="player-image">
                    </td>
                    <td class="player-name">
                        {{ player.name }}
                    </td>
                    <td v-if="started" align="center" class="player-name">{{ player.steps }}</td>
                </tr>
            </tbody>
        </table>

        <h6 v-show="sortedPlayers.length==0">Choose players...</h6>
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
            //return sortByKey([...players], 'steps');
            return players;
        }
    }
}
</script>

<style scoped>
.GameDashboard {
    padding: 15px;
}

.player-name {
    font-size: 16px;
    font-weight: normal;
}

.player-image {
    height: 24px;
}

.selected .player-name {
    font-size: 24px;
    font-weight: bold;
}

.selected .player-image {
    height: 48px;
}

th,
td {
    vertical-align: middle;
    padding: 3px;
}
</style>