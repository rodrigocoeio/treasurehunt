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

            this.numberCircle = Phaser.add.circle(this.x + 20, this.y + 20, 15, 0xffffff);
            this.numberCircle.setStrokeStyle(2, 0x000000);

            const numberTextX = this.number<=9 ? 14 : 10;
            this.numberText = Phaser.add.text(this.x + numberTextX, this.y + 10, this.number, {font: "600 20px Poppins", color: "black"});
            this.numberText.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);        
        }
    }
}
</script>