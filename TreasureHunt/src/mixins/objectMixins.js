import store from "$/store.js";
export default [{
    data() {
        return {
            preloaded: false,
            created: false,
            updating: false,
            destroyed: false
        };
    },
    mounted() {
        if(store.Phaser) {
            if(!this.preloaded)
                this.preload(store.Phaser);
            if(!this.created)
                this.create(store.Phaser);
        }
    },
    beforeUnmount() {
        if(store.Phaser) {
            if(!this.destroyed)
                this.destroy(store.Phaser);
        }
    },
    methods: {
        preload() {
            this.preloaded = true;
        },
        create() {
            this.created = true;
        },
        update() {
            this.updating = true;
        },
        render() {
            this.rendering = true;
        },
        destroy() {
            this.destroyed = true;
        }
    }
}];