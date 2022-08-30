<template>
    <div class="MonsterGame">

    </div>

    <div class="game-canvas"></div>
</template>

<script>
import GameMixins from "../mixins/GameMixins.js";

export default {
    mixins: GameMixins,

    data(){
        return {
            game_configs: {
                width: 500,
                height: 500
            }
        }
    }
}
</script>