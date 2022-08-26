<template>
    <div class="game-board">
        
    </div>
</template>

<script>
    import Phaser from "phaser";

    export default 
    {
        mounted: () => 
        {
            console.log('board game inited');
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