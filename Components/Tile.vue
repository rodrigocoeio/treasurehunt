<template>
    <div class="GameTile">
        <!-- Number : {{ number }} {{ x }} {{ y }} {{ image }}-->
    </div>
</template>

<script>
import store from "$/store.js";
import objectMixins from "@/mixins/object-mixins.js";

export default {
    props: ['number','x', 'y','width','height','image','rule'],
    mixins: objectMixins,

    methods: {
        preload(Phaser) {
            if(this.image) {
                Phaser.load.image('tile-background-'+this.number, this.image);
            }
        },
        create(Phaser) {
            // avoid first and last tiles
            if(this.number==0 || this.number==34)
                return false;

            // background image
            if(this.image){
                Phaser.add.image(this.x + (this.width / 2) + 10, this.y  + (this.height / 2), 'tile-background-'+this.number);
            }

            this.numberCircle = Phaser.add.circle(this.x + 20, this.y + 20, 10, 0x9966ff);
            this.numberCircle.setStrokeStyle(1, 0xefc53f);

            const numberTextX = this.number<=9 ? 14 : 10;
            this.numberText = Phaser.add.text(this.x + numberTextX, this.y + 12, this.number);
            this.numberText.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);        
        }
    }
}
</script>