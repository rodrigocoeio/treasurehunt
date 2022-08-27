<template>
    <div class="content">
        <h1>Treasure Hunt</h1>

        <GameDice></GameDice>

        <GameBoard col="7" rows="5" image="">

            <GamePlayer v-for="player in players"></GamePlayer>

        </GameBoard>
    </div>
</template>

<script>
    import GameBoard from "../components/Board.vue";
    import GameDice from "../components/Dice.vue";
    import GamePlayer from "../components/Player.vue";

    export default {
        // state do componente
        data() {
            return {
                players: []
            }
        },

        // triggered when component is mounted
        mounted() {
            
        },

        // triggered when component is started
        started() {

        },

        beforeDestroy() {

        },
        
        // methods / actions
        methods: {

        },

        components: {
            GameBoard,
            GameDice,
            GamePlayer
        }
    }
</script>

<style>
    
</style>