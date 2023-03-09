<template>
    <div class="GameDashboard bg-light">
        <!-- <h5 v-show="sortedPlayers.length>0">Dashboard</h5> -->
        <!-- <h5>Turn Nº{{ turn.turn }}</h5> -->

        <h6 v-show="players.length == 0">Choose players...</h6>

        <table class="player-name" v-if="players.length" width="272">
            <thead>
                <tr>
                    <th width="25">#</th>
                    <th @click="sortBy('turn')">Player</th>
                    <th v-if="started">Treasures</th>
                    <th v-if="started">#</th>
                </tr>
            </thead>

            <tbody>
                <tr :class="[turn.player == player ? 'selected' : '']" v-for="(player, index) in sortedPlayers">
                    <td class="player-name">{{ index + 1 }}º</td>

                    <td class="player-name">
                        <img :src="player.image" class="player-image">
                        {{ player.name }}
                    </td>
                    <td v-if="started" width="130">
                        <div class="TreasurePoints" @click="openCloseChest(player)">
                            <img :src="player.showTreasures ? '/images/chest_open.png' : '/images/chest_closed.png'"
                                width="36">
                            <span class="PlayerPoints">{{ player.points }} points</span>
                        </div>

                        <div class="TreasuresBox" v-if="player.showTreasures" @click="openCloseChest(player)">
                            <div class="coin" v-for="count, coin in player.coins">
                                <img :src="'/images/coin-' + coin + '.png'" height="24">
                                <span>{{ count }}</span>
                            </div>
                            <div class="treasure" v-for="count, treasure in player.treasures" v-show="count > 0">
                                <img :src="'/images/treasures/' + treasure + '.png'" height="24" :title="treasure">
                                <span>{{ count }}</span>
                            </div>
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
        return {
            sortyBy: 'steps'
        }
    },


    computed: {
        started() {
            return store.started;
        },
        players() {
            return store.players;
        },
        turn() {
            return store.turn;
        },
        sortedPlayers() {
            return sortByKey([...this.players], this.sortBy);
        }
    },

    methods: {
        openCloseChest(player) {
            player.showTreasures = !player.showTreasures;
        }
    }
}
</script>

<style scoped>
.GameDashboard {
    margin-top: 0px;
}

.player-name {
    font-size: 20px;
    font-weight: normal;
}

.player-image {
    width: 24px;
}

td,
th {
    border-bottom: 1px solid black;
}

.selected td {
    background: chartreuse;
    font-weight: bold;
}

.selected .player-name {
    font-size: 22px;
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
    border-spacing: 0;
}

th,
td {
    vertical-align: middle;
}

.coin {
    display: inline-block;
    margin-left: 5px;
    text-align: center;
}

.treasure {
    display: inline-block;
    margin-left: 5px;
    text-align: center;
}

.coin span,
.treasure span {
    font-size: 20px;
    color: gray;
    margin-top: -3px;
    margin-left: -17px;
    font-weight: 900;
    -webkit-text-stroke: 1px black;
    text-shadow:  gray 1px 1px 1px;
    float: left;
    cursor: pointer;
}

.coin img,
.treasure img {
    float: left;
}

.TreasurePoints {
    font-size: 22px;
    text-align: center;
    cursor: pointer;
}

.TreasurePoints img {
    display: block;
    margin: auto;
}

.TreasuresBox {
    text-align: center;
}</style>