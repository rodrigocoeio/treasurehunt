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
                    <th>Treasures</th>
                    <th v-if="started">#</th>
                </tr>
            </thead>

            <tbody>
                <tr :class="[turn.player == player ? 'selected' : '']" v-for="(player,index) in sortedPlayers">
                    <td class="player-name">{{ index + 1 }}º</td>
             
                    <td class="player-name">
                        <img :src="player.image" class="player-image">
                        {{ player.name }}
                    </td>
                    <td width="100">
                        <div class="coin" v-for="count, coin in player.coins" v-show="count>0">
                            <img :src="'/images/coin-' + coin + '.png'" height="24">
                            <span>{{ count }}</span>
                        </div>

                        <br>

                        <div class="treasure" v-for="count, treasure in player.treasures" v-show="count>0">
                            <img :src="'/images/treasures/' + treasure + '.png'" height="24" :title="treasure">
                            <span>{{ count }}</span>
                        </div>
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
    width: 24px;
}

.selected td {
    background: #A6FF81;
}

.selected .player-name {
    font-size: 24px;
    font-weight: bold;
}

.selected .player-image {
    width: 30px;
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

.coin {
    display: inline-block;
    margin-left: 5px;
}

.treasure {
    display: inline-block;
    margin-left: 5px;
}

.coin span, .treasure span {
    font-size: 20px;
    color:white;
    margin-top: -3px;
    margin-left: -17px;
    font-weight: bold;
    -webkit-text-stroke: 1px black;
    float: left;
}

.coin img, .treasure img {
    float: left;
}
</style>