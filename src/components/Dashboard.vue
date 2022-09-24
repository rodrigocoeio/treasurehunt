<template>
    <div class="GameDashboard bg-light">
        <!-- <h5 v-show="sortedPlayers.length>0">Dashboard</h5> -->
        <!-- <h5>Turn Nº{{ turn.turn }}</h5> -->

        <h6 v-show="players.length==0">Choose players...</h6>

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
                        <img src="/images/coin-silver.jpg" height="16">
                        <img src="/images/coin-bronze.jpg" height="16">
                        <img src="/images/coin-gold.jpg" height="16">
                    </td>
                    <td v-if="started" align="center" class="player-name">{{ player.steps }}</td>
                </tr>
            </tbody>
        </table>
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
    font-size: 20px;
    font-weight: normal;
}

.player-image {
    height: 24px;
}

.selected td {
    background: #A6FF81;
}

.selected .player-name {
    font-size: 24px;
    font-weight: bold;
}

.selected .player-image {
    height: 48px;
}

h6 {
    margin: auto;
    text-align: center;
}

table {
    margin: auto;
}

th,
td {
    vertical-align: middle;
    padding: 3px;
}
</style>