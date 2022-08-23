<template>
    <div>
        <h1>Treasure Hunt</h1>
        <GameDice></GameDice>
        <GameBoard>
            <!-- <GamePawn v-for="player in players"></GamePawn>

            <GameTile v-for="i in 7"></GameTile>
            <GameTile v-for="i in 7"></GameTile>
            <GameTile v-for="i in 7"></GameTile>
            <GameTile v-for="i in 7"></GameTile>
            <GameTile v-for="i in 7"></GameTile> -->
        </GameBoard>
    </div>
</template>

<script>
    import Phaser from "phaser";
    import GameBoard from "../components/Board.vue";

    export default {
        mounted: () => {
            
        },

        components: {
            GameBoard
        }
    }
</script>

<style>
    
</style>