<template>
    <div class="game-board">
        <GameTile v-for="i in 7"></GameTile>
        <GameTile v-for="i in 7"></GameTile>
        <GameTile v-for="i in 7"></GameTile>
        <GameTile v-for="i in 7"></GameTile>
        <GameTile v-for="i in 7"></GameTile>
    </div>
</template>

<script>
    import GameTile from "../components/Tile.vue";

    export default 
    {
        mounted: () => 
        {
            
        },

        components: 
        {
            GameTile
        }
    }
</script>

<style scoped>
    .game-board {
        width: 100%;
        height: 100%;
        border: 1px solid;
        border-style: dashed;
    }
</style>